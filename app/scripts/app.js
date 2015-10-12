import angular from 'angular';

import 'angular-ui-router';

import * as config from './app.config';
import * as run from './app.run';
import {search} from './sections/index';


export default angular.module('app', ['ui.router', search.name])
.config(config.controlDebugLogging)
.config(config.configUIRouter)
.run(run.setStateIsLoading)
.run(run.logStateEvents)
;
