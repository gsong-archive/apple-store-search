export function search(
  $log, $state, $stateParams, APIClientFactory, SessionService
) {
  'ngInject';

  Object.assign(SessionService.queryParams, $stateParams);

  $log.debug('route resolve', $stateParams);

  if (!$stateParams.term) {
    return;
  }

  return APIClientFactory.search($stateParams)
  .then((response) => {
    return response.data;
  });
}

