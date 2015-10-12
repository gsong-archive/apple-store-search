import angular from 'angular';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

import 'angular-ui-router';
import 'angular-ui-router-title';

import _base from '../_base/index';
import routes from './route';
import {apiClient, session} from '../../components/index';


export default angular.module('app.search', [
  ngMessages, ngMaterial, 'ui.router', 'ui.router.title',
  _base, apiClient, session
])
.config(routes)
.name;
