import settings from '../../settings';


export default class {
  constructor($log) {
    'ngInject';

    Object.assign(this, {$log, settings});
  }
}
