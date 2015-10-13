import angular from 'angular';

import app from './app/index.js';


angular.element(document).ready(function() {
  angular.bootstrap(document, [app], {strictDi: false});
});
