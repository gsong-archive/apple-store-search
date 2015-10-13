import angular from 'angular';

import 'angular-ui-router';

import * as config from './config';
import * as run from './run';
import search from '../sections/search/index';


export default angular.module('app', ['ui.router', search])
.config(config.controlDebugLogging)
.config(config.configUIRouter)
.run(run.setStateIsLoading)
.run(run.logStateEvents)
.name;
