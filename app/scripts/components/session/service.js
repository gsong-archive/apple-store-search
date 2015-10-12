import settings from '../../settings';


export default class {
  constructor() {
    this.queryParams = Object.assign({}, settings.DEFAULT_QUERY_PARAMS);
  }
}
