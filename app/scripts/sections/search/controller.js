import settings from '../../settings';


export class SearchController {
  constructor($log, $state, session) {
    'ngInject';

    this.queryParams = session.queryParams;
    this.searchTypes = settings.MEDIA_TYPES;
    Object.assign(this, {$log, $state});
  }

  search(queryParams) {
    const params = queryParams || {
      term: undefined, media: settings.DEFAULT_MEDIA_TYPE
    };
    this.$state.go('search', params);
  }
}


export class ResultsController {
  constructor($log, $scope, $state, response) {
    'ngInject';

    $log.debug('Search response: ', response);

    Object.assign(this, {$log, $state, response});
  }

  get showResults() {
    return Boolean(this.$state.params.term);
  }
}
