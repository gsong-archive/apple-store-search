import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import 'angular-ui-router';
import 'angular-ui-router-title';

import _base from '../_base/__init__';
import routes from './route';
import {apiClient, session} from '../../components/__init__';


export default angular.module('app.search', [
  ngMessages, ngMaterial, 'ui.router', 'ui.router.title',
  _base.name, apiClient.name, session.name
])
.config(routes)
;
