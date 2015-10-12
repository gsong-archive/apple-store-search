import angular from 'angular';

import * as filters from './filters';


export default angular.module('app-filters', [])
.filter('raw', filters.raw)
;

