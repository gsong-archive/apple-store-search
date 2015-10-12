import settings from '../../settings';


export default class {
  constructor() {
    this.queryParams = {
      media: settings.DEFAULT_MEDIA_TYPE,
      term: ''
    };
  }
}
