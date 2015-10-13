import settings from '../../config/settings';


export default class {
  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.settings = settings;
  }
}
