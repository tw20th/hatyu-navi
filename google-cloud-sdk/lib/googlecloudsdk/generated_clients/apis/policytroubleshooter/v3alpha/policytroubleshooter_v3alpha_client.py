"""Generated client library for policytroubleshooter version v3alpha."""
# NOTE: This file is autogenerated and should not be edited by hand.

from __future__ import absolute_import

from apitools.base.py import base_api
from googlecloudsdk.generated_clients.apis.policytroubleshooter.v3alpha import policytroubleshooter_v3alpha_messages as messages


class PolicytroubleshooterV3alpha(base_api.BaseApiClient):
  """Generated client library for service policytroubleshooter version v3alpha."""

  MESSAGES_MODULE = messages
  BASE_URL = 'https://policytroubleshooter.googleapis.com/'
  MTLS_BASE_URL = 'https://policytroubleshooter.mtls.googleapis.com/'

  _PACKAGE = 'policytroubleshooter'
  _SCOPES = ['https://www.googleapis.com/auth/cloud-platform']
  _VERSION = 'v3alpha'
  _CLIENT_ID = 'CLIENT_ID'
  _CLIENT_SECRET = 'CLIENT_SECRET'
  _USER_AGENT = 'google-cloud-sdk'
  _CLIENT_CLASS_NAME = 'PolicytroubleshooterV3alpha'
  _URL_VERSION = 'v3alpha'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new policytroubleshooter handle."""
    url = url or self.BASE_URL
    super(PolicytroubleshooterV3alpha, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.iam = self.IamService(self)
    self.servicePerimeter = self.ServicePerimeterService(self)

  class IamService(base_api.BaseApiService):
    """Service class for the iam resource."""

    _NAME = 'iam'

    def __init__(self, client):
      super(PolicytroubleshooterV3alpha.IamService, self).__init__(client)
      self._upload_configs = {
          }

    def Troubleshoot(self, request, global_params=None):
      r"""Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.

      Args:
        request: (GoogleCloudPolicytroubleshooterIamV3alphaTroubleshootIamPolicyRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (GoogleCloudPolicytroubleshooterIamV3alphaTroubleshootIamPolicyResponse) The response message.
      """
      config = self.GetMethodConfig('Troubleshoot')
      return self._RunMethod(
          config, request, global_params=global_params)

    Troubleshoot.method_config = lambda: base_api.ApiMethodInfo(
        http_method='POST',
        method_id='policytroubleshooter.iam.troubleshoot',
        ordered_params=[],
        path_params=[],
        query_params=[],
        relative_path='v3alpha/iam:troubleshoot',
        request_field='<request>',
        request_type_name='GoogleCloudPolicytroubleshooterIamV3alphaTroubleshootIamPolicyRequest',
        response_type_name='GoogleCloudPolicytroubleshooterIamV3alphaTroubleshootIamPolicyResponse',
        supports_download=False,
    )

  class ServicePerimeterService(base_api.BaseApiService):
    """Service class for the servicePerimeter resource."""

    _NAME = 'servicePerimeter'

    def __init__(self, client):
      super(PolicytroubleshooterV3alpha.ServicePerimeterService, self).__init__(client)
      self._upload_configs = {
          }

    def Troubleshoot(self, request, global_params=None):
      r"""Checks why an access is granted or not with service perimeters.

      Args:
        request: (GoogleCloudPolicytroubleshooterServiceperimeterV3alphaTroubleshootServicePerimeterRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (GoogleCloudPolicytroubleshooterServiceperimeterV3alphaTroubleshootServicePerimeterResponse) The response message.
      """
      config = self.GetMethodConfig('Troubleshoot')
      return self._RunMethod(
          config, request, global_params=global_params)

    Troubleshoot.method_config = lambda: base_api.ApiMethodInfo(
        http_method='POST',
        method_id='policytroubleshooter.servicePerimeter.troubleshoot',
        ordered_params=[],
        path_params=[],
        query_params=[],
        relative_path='v3alpha/servicePerimeter:troubleshoot',
        request_field='<request>',
        request_type_name='GoogleCloudPolicytroubleshooterServiceperimeterV3alphaTroubleshootServicePerimeterRequest',
        response_type_name='GoogleCloudPolicytroubleshooterServiceperimeterV3alphaTroubleshootServicePerimeterResponse',
        supports_download=False,
    )
