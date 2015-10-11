import angular from 'angular';

import 'angular-ui-router';

import * as config from './_config';


export default angular.module('app', ['ui.router'])
.config(config.controlDebugLogging)
.config(config.configUIRouter)
.run(config.setStateIsLoading)
.run(config.logStateEvents)
;
