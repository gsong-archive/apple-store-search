import settings from '../../config/settings';


export class SearchController {
  constructor($log, $state, session) {
    'ngInject';

    this.$log = $log;
    this.$state = $state;
    this.queryParams = session.queryParams;
    this.searchTypes = settings.MEDIA_TYPES;
  }

  search(queryParams) {
    const params = queryParams || settings.DEFAULT_QUERY_PARAMS;
    this.$state.go('search', params);
  }
}


export class ResultsController {
  constructor($log, $scope, $state, response) {
    'ngInject';

    $log.debug('Search response: ', response);

    this.$log = $log;
    this.$state = $state;
    this.response = response;
  }

  get showResults() {
    return Boolean(this.$state.params.term);
  }
}
