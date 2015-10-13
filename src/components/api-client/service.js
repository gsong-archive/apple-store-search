import settings from '../../config/settings';
import urls from './urls';


export default ($cacheFactory, $http) => {
  'ngInject';

  const cache = $cacheFactory('_http', {
    capacity: settings.HTTP_CACHE_SIZE
  });

  function search(params) {
    params.callback = 'JSON_CALLBACK';
    params.limit = 200;
    return $http.jsonp(urls.SEARCH, {params, cache});
  }

  return {search};
};
