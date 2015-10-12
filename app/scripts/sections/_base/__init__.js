import angular from 'angular';
import ngMaterial from 'angular-material';

import 'angular-ui-router';

import controller from './controller';

import template from './template.html!text';


function route($stateProvider) {
  'ngInject';

  $stateProvider.state('_base', {
    abstract: true,
    controller,
    controllerAs: 'vm',
    template
  });
}


export default angular.module('_base', [ngMaterial, 'ui.router'])
.config(route)
;
