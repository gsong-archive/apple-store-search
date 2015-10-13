import settings from '../../config/settings';


export default class {
  constructor() {
    this.queryParams = Object.assign({}, settings.DEFAULT_QUERY_PARAMS);
  }
}
