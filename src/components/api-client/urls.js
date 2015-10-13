import settings from '../../config/settings';

const pre = settings.API_URL;


export default {
  SEARCH: pre + '/search',
  LOOKUP: pre + '/lookup'
};
