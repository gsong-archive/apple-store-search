import settings from '../../settings';
import urls from './urls';


export default ($cacheFactory, $http) => {
  'ngInject';

  const factory = {};

  const cache = $cacheFactory('_http', {
    capacity: settings.HTTP_CACHE_SIZE
  });

  factory.search = (params) => {
    params.callback = 'JSON_CALLBACK';
    params.limit = 200;
    return $http.jsonp(urls.SEARCH, {params, cache});
  };

  return factory;
};
