export function search(
  $log, $state, $stateParams, apiClient, session
) {
  'ngInject';

  Object.assign(session.queryParams, $stateParams);

  $log.debug('Resolving state', $state);

  if (!$stateParams.term) {
    return;
  }

  return apiClient.search($stateParams)
  .then((response) => {
    return response.data;
  });
}
