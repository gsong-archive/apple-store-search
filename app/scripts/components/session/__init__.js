import angular from 'angular';

import service from './service';


export default angular.module('component.session', [])
.service('session', service);
