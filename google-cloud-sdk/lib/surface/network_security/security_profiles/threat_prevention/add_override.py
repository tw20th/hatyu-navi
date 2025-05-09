# -*- coding: utf-8 -*- #
# Copyright 2023 Google LLC. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Add Override command to add new overrides to threat prevention profile overrides."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.network_security.security_profiles.threat_prevention import sp_api
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.network_security import sp_flags
from googlecloudsdk.core import exceptions as core_exceptions
from googlecloudsdk.core import log

DETAILED_HELP = {
    'DESCRIPTION': """
          Add severities or threat-ids to existing
          threat prevention profile with intended action on each specified.
          Check the updates of add-override command by using `gcloud network-security
          security-profiles threat-prevention list-override my-security-profile`.

          For more examples, refer to the EXAMPLES section below.

        """,
    'EXAMPLES': """
            To add an override, run:

              $ {command} my-security-profile --severities=MEDIUM --action=ALLOW

            `my-security-profile` is the name of the Security Profile in the
            format organizations/{organizationID}/locations/{location}/securityProfiles/
            {security_profile_id}
            where organizationID is the organization ID to which the changes should apply,
            location either global or region specified and
            security_profile_id the Security Profile Identifier

        """,
}


@base.ReleaseTracks(base.ReleaseTrack.ALPHA, base.ReleaseTrack.BETA)
class AddOverride(base.UpdateCommand):
  """Add overrides to Threat Prevention Profile."""

  @classmethod
  def Args(cls, parser):
    sp_flags.AddSecurityProfileResource(parser, cls.ReleaseTrack())
    sp_flags.AddSeverityorThreatIDArg(parser, required=True)
    sp_flags.AddActionArg(parser, required=True)
    base.ASYNC_FLAG.AddToParser(parser)
    base.ASYNC_FLAG.SetDefault(parser, False)

  def Run(self, args):
    client = sp_api.Client(self.ReleaseTrack())
    security_profile = args.CONCEPTS.security_profile.Parse()
    is_async = args.async_

    update_mask = ''
    overrides = []

    if not args.IsSpecified('action'):
      raise core_exceptions.Error('--action must be specified')

    if args.IsSpecified('severities'):
      update_mask = 'severityOverrides'
      severities = args.severities
      action = args.action
      for severity in severities:
        overrides.append({'severity': severity, 'action': action})
    elif args.IsSpecified('threat_ids'):
      update_mask = 'threatOverrides'
      threats = args.threat_ids
      action = args.action
      for threat in threats:
        overrides.append({'threatId': threat, 'action': action})
    else:
      raise core_exceptions.Error(
          'Either --severities or --threat-ids must be specified'
      )

    response = client.ModifyOverride(
        security_profile.RelativeName(),
        overrides,
        'add_override',
        update_mask,
    )

    # Return the in-progress operation if async is requested.
    if is_async:
      operation_id = response.name
      log.status.Print(
          'Check for operation completion status using operation ID:',
          operation_id,
      )
      return response

    # Default operation poller if async is not specified.
    return client.WaitForOperation(
        operation_ref=client.GetOperationsRef(response),
        message=(
            'Waiting for add override to security-profile [{}] operation to'
            ' complete.'.format(security_profile.RelativeName())
        ),
        # TODO(b/279630768): Change to True once the resource type is part of
        # the operation output.
        has_result=False,
    )

AddOverride.detailed_help = DETAILED_HELP
