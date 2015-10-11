import settings from './settings';


export function controlDebugLogging($logProvider) {
  'ngInject';

  $logProvider.debugEnabled(settings.ENABLE_DEBUG_LOGGING || false);
}


export function configUIRouter($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/search');
}


export function setStateIsLoading($rootScope) {
  'ngInject';

  const scope = $rootScope;

  scope.stateIsLoading = false;

  scope.$on('$stateChangeStart', () => scope.stateIsLoading = true);
  scope.$on('$stateChangeSuccess', () => scope.stateIsLoading = false);
}


export function logStateEvents($log, $cacheFactory, $rootScope) {
  'ngInject';

  const scope = $rootScope;

  scope.$on('$stateChangeError', e => $log.debug(`${e.name}`));
  scope.$on('$stateChangeStart', e => $log.debug(`${e.name}`));
  scope.$on('$stateChangeSuccess', e => {
    const cache = $cacheFactory.get('_http');

    $log.debug(`${e.name}`);
    if (cache) {
      $log.debug('httpCache:', cache.info());
    }
  });
  scope.$on('$stateNotFound', e => $log.debug(`${e.name}`));
}
