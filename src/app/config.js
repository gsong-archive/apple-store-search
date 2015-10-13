import settings from '../config/settings';


export function controlDebugLogging($logProvider) {
  'ngInject';

  $logProvider.debugEnabled(settings.ENABLE_DEBUG_LOGGING || false);
}


export function configUIRouter($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/search');
}
