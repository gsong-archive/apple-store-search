import angular from 'angular';

import service from './service';


export default angular.module('session', [])
.service('SessionService', service);
