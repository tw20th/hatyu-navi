# -*- coding: utf-8 -*- #
# Copyright 2023 Google Inc. All Rights Reserved.
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
"""`gcloud dataplex datascans create data-profile` command."""

from __future__ import absolute_import
from __future__ import division
from __future__ import unicode_literals

from googlecloudsdk.api_lib.dataplex import datascan
from googlecloudsdk.api_lib.dataplex import util as dataplex_util
from googlecloudsdk.api_lib.util import exceptions as gcloud_exception
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.dataplex import resource_args
from googlecloudsdk.command_lib.util.args import labels_util
from googlecloudsdk.core import log


@base.Hidden
@base.ReleaseTracks(base.ReleaseTrack.ALPHA)
class DataProfile(base.Command):
  """Create a Dataplex data profile scan job."""

  detailed_help = {
      'EXAMPLES': """\

            Create a Dataplex data profile scan job.

            Represents a user-visible job which provides the insights for the
            related data source about the structure, content and relationships
            (such as null percent, cardinality, min/max/mean, etc).

          """,
  }

  @staticmethod
  def Args(parser):
    resource_args.AddDatascanResourceArg(
        parser, 'to create a data profile scan for.'
    )
    parser.add_argument(
        '--description',
        required=False,
        help='Description of the data profile scan.',
    )
    parser.add_argument(
        '--display-name',
        required=False,
        help='Display name of the data profile scan.',
    )
    data_source = parser.add_group(
        mutex=True,
        required=True,
        help='Data source for the data profile scan.',
    )
    data_source.add_argument(
        '--data-source-entity',
        help=(
            'Dataplex entity that contains the data for the data profile scan,'
            ' of the'
            ' form:'
            ' `projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{entity_id}`.'
        ),
    )
    data_source.add_argument(
        '--data-source-resource',
        help=(
            'Fully-qualified service resource name of the cloud resource that'
            ' contains the data for the data profile scan, of the form:'
            ' `//bigquery.googleapis.com/projects/{project_number}/datasets/{dataset_id}/tables/{table_id}`.'
        ),
    )
    data_spec = parser.add_group(
        mutex=True,
        help='Data spec for the data profile scan.',
    )
    data_spec.add_argument(
        '--data-profile-spec-file',
        help=(
            'path to the JSON/YAML file containing the spec for'
            ' the data profile scan.'
        ),
    )
    data_spec_arg = data_spec.add_group(
        help='Command line spec arguments for the data profile scan.',
    )
    data_spec_arg.add_argument(
        '--row-filter',
        help='A filter applied to all rows in a single DataScan job.',
    )
    data_spec_arg.add_argument(
        '--sampling-percent',
        help=(
            'The percentage of the records to be selected from the dataset for'
            ' DataScan.'
        ),
    )
    data_spec_arg.add_argument(
        '--include-fields',
        help=(
            'The fields to include in data profile. If not specified, all'
            ' fields at the time of profile scan job execution are included.'
            ' The fields listed in `exclude_fields` are excluded.'
        ),
    )
    data_spec_arg.add_argument(
        '--exclude-fields',
        help=(
            'The fields to exclude from data profile. If specified, the fields'
            ' will be excluded from data profile, regardless of'
            ' `include_fields` value.'
        ),
    )
    execution_spec = parser.add_group(
        help=(
            'Data profile scan execution settings.'
        )
    )
    execution_spec.add_argument(
        '--incremental-field',
        help=(
            'Field that contains values that monotonically increase over time'
            ' (e.g. timestamp).'
        ),
    )
    trigger = execution_spec.add_group(
        mutex=True, help='Data profile scan scheduling and trigger settings.'
    )
    trigger.add_argument(
        '--on-demand',
        type=bool,
        help=(
            'If set, the scan runs one-time shortly after data profile scan'
            ' Creation.'
        ),
    )
    trigger.add_argument(
        '--schedule',
        help=(
            'Cron schedule (https://en.wikipedia.org/wiki/Cron) for running'
            ' scans periodically. To explicitly set a timezone to the cron tab,'
            ' apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or'
            ' "TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid'
            ' string from IANA time zone database. For example,'
            ' `CRON_TZ=America/New_York 1 * * * *` or `TZ=America/New_York 1 *'
            ' * * *`. This field is required for RECURRING scans.'
        ),
    )
    async_group = parser.add_group(
        mutex=True,
        required=False,
        help='At most one of --async | --validate-only can be specified.',
    )
    async_group.add_argument(
        '--validate-only',
        action='store_true',
        default=False,
        help="Validate the create action, but don't actually perform it.",
    )
    base.ASYNC_FLAG.AddToParser(async_group)
    labels_util.AddCreateLabelsFlags(parser)

  @gcloud_exception.CatchHTTPErrorRaiseHTTPException(
      'Status code: {status_code}. {status_message}.'
  )
  def Run(self, args):
    datascan_ref = args.CONCEPTS.datascan.Parse()
    setattr(args, 'scan_type', 'PROFILE')
    dataplex_client = dataplex_util.GetClientInstance()
    create_req_op = dataplex_client.projects_locations_dataScans.Create(
        dataplex_util.GetMessageModule().DataplexProjectsLocationsDataScansCreateRequest(
            dataScanId=datascan_ref.Name(),
            parent=datascan_ref.Parent().RelativeName(),
            googleCloudDataplexV1DataScan=datascan.GenerateDatascanForCreateRequest(
                args
            ),
        )
    )

    if getattr(args, 'validate_only', False):
      log.status.Print('Validation completed. Skipping resource creation.')
      return

    async_ = getattr(args, 'async_', False)
    if not async_:
      response = datascan.WaitForOperation(create_req_op)
      log.CreatedResource(
          response.name,
          details=(
              'Data profile scan created in project [{0}] with location [{1}]'
              .format(datascan_ref.projectsId, datascan_ref.locationsId)
          ),
      )
      return response

    log.status.Print(
        'Creating data profile scan with path [{0}] and operation [{1}].'
        .format(datascan_ref, create_req_op.name)
    )
    return create_req_op
