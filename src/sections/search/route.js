import {ResultsController, SearchController} from './controller';
import {makeTitle} from '../utils';
import {search as response} from './resolver';

import baseTemplate from './_base.html!text';
import resultsTemplate from './results.html!text';


export default function ($stateProvider) {
  'ngInject';

  $stateProvider

  .state('_search-base', {
    parent: '_base',
    abstract: true,

    controller: SearchController,
    controllerAs: 'vm',
    template: baseTemplate
  })

  .state('search', {
    parent: '_search-base',
    url: '/search?media&term',
    params: {
      media: {value: 'all', squash: true},
      term: {value: '', squash: true}
    },

    controller: ResultsController,
    controllerAs: 'vm',
    template: resultsTemplate,
    resolve: {$title: () => makeTitle('Search'), response}
  })
  ;
}
