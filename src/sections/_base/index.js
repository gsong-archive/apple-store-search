import angular from 'angular';
import ngMaterial from 'angular-material';

import 'angular-ui-router';

import controller from './controller';

import './styles.css!';
import template from './template.html!';


function route($stateProvider) {
  'ngInject';

  $stateProvider.state('_base', {
    abstract: true,
    controller,
    controllerAs: 'vm',
    template
  });
}


export default angular.module('app._base', [ngMaterial, 'ui.router'])
.config(route)
.name;
