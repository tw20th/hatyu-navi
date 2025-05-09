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
"""Command to update an Anthos on bare metal standalone cluster."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.container.gkeonprem import operations
from googlecloudsdk.api_lib.container.gkeonprem import standalone_clusters
from googlecloudsdk.calliope import base
from googlecloudsdk.calliope import parser_arguments
from googlecloudsdk.command_lib.container.bare_metal import constants as bare_metal_constants
from googlecloudsdk.command_lib.container.bare_metal import standalone_cluster_flags
from googlecloudsdk.command_lib.container.gkeonprem import constants
from googlecloudsdk.core import log

_EXAMPLES = """
To update a standalone cluster named ``my-cluster'' managed in location ``us-west1'', run:

$ {command} my-cluster --location=us-west1
"""


@base.ReleaseTracks(base.ReleaseTrack.ALPHA)
class Update(base.UpdateCommand):
  """Update an Anthos on bare metal standalone cluster."""

  detailed_help = {'EXAMPLES': _EXAMPLES}

  @staticmethod
  def Args(parser: parser_arguments.ArgumentInterceptor):
    """Gathers command line arguments for the update command.

    Args:
      parser: The argparse parser to add the flag to.
    """
    parser.display_info.AddFormat(
        bare_metal_constants.BARE_METAL_STANDALONE_CLUSTERS_FORMAT
    )
    standalone_cluster_flags.AddStandaloneClusterResourceArg(
        parser, verb='to update', positional=True
    )
    base.ASYNC_FLAG.AddToParser(parser)
    standalone_cluster_flags.AddValidationOnly(parser)
    standalone_cluster_flags.AddAllowMissingUpdateStandaloneCluster(parser)
    standalone_cluster_flags.AddControlPlaneConfig(parser, is_update=True)
    standalone_cluster_flags.AddVersion(parser, is_update=True)
    standalone_cluster_flags.AddSecurityConfig(parser, is_update=True)
    standalone_cluster_flags.AddMaintenanceConfig(parser, is_update=True)
    standalone_cluster_flags.AddNetworkConfig(parser, is_update=True)
    standalone_cluster_flags.AddLoadBalancerConfig(parser, is_update=True)
    standalone_cluster_flags.AddDescription(parser)
    standalone_cluster_flags.AddClusterOperationsConfig(parser)
    standalone_cluster_flags.AddNodeAccessConfig(parser)
    standalone_cluster_flags.AddUpdateAnnotations(parser)

  def Run(self, args):
    """Runs the update command.

    Args:
      args: The arguments received from command line.

    Returns:
      The return value depends on the command arguments. If `--async` is
      specified, it returns an operation; otherwise, it returns the updated
      resource. If `--validate-only` is specified, it returns operation or any
      possible error.
    """
    cluster_ref = args.CONCEPTS.standalone_cluster.Parse()
    cluster_client = standalone_clusters.StandaloneClustersClient()
    operation = cluster_client.Update(args)

    if args.async_ and not args.IsSpecified('format'):
      args.format = constants.OPERATIONS_FORMAT

    if args.async_:
      return operation

    operation_client = operations.OperationsClient()
    operation_response = operation_client.Wait(operation)

    if not args.validate_only:
      log.UpdatedResource(cluster_ref,
                          'Anthos on bare metal standalone cluster',
                          args.async_)
    return operation_response
