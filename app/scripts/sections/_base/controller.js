import settings from '../../settings';


export default class {
  constructor($log) {
    'ngInject';

    this.$log = $log;
    this.settings = settings;
  }
}
