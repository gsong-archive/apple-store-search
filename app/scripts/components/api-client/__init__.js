import angular from 'angular';

import factory from './factory';


export default angular.module('api-client', [])
.factory('APIClientFactory', factory);
