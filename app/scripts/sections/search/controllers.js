import settings from '../../settings';


export class SearchController {
  constructor($log, $state, SessionService) {
    'ngInject';

    this.queryParams = SessionService.queryParams;
    this.searchTypes = settings.MEDIA_TYPES;
    Object.assign(this, {$log, $state});
  }

  search(queryParams) {
    queryParams = queryParams || {term: undefined};
    this.$state.go('search', queryParams);
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
