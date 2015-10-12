import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import 'angular-ui-router';
import 'angular-ui-router-title';

import _base from '../_base/__init__';
import {ResultsController, SearchController} from './controllers';
import {apiClient, session} from '../../components/__init__';
import {makeTitle} from '../utils';
import {search as response} from './_helpers';

import baseTemplate from './_base.html!text';
import resultsTemplate from './results.html!text';


function route($stateProvider) {
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


export default angular.module('search', [
  ngMessages,
  ngMaterial, 'ui.router', 'ui.router.title',
  _base.name, apiClient.name, session.name
])
.config(route)
;
