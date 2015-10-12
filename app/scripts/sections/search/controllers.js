import settings from '../../settings';


export class SearchController {
  constructor($log, $state, SessionService) {
    'ngInject';

    $log.debug('********** Instantiate SearchController.');

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
  constructor(
    $log, $scope, $state,
    ResizerFactory, response
  ) {
    'ngInject';

    Object.assign(this, {$log, $state, response});

    $log.debug('Search response: ', response);
    // this.results = VirtualResultsFactory.resultGetter(response);
    this.getResultsHeight = ResizerFactory.getAdjustedHeight(250);

    // TODO: See https://github.com/angular/material/issues/4314
    ResizerFactory.registerResize($scope);
  }

  get showResults() {
    return Boolean(this.$state.params.term);
  }
}
