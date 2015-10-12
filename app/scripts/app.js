import angular from 'angular';

import 'angular-ui-router';

import * as config from './config';
import {search} from './sections/__init__';


export default angular.module('app', ['ui.router', search.name])
.config(config.controlDebugLogging)
.config(config.configUIRouter)
.run(config.setStateIsLoading)
.run(config.logStateEvents)
;
