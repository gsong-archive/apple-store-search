const shared = {
  API_URL: 'https://itunes.apple.com'
};


const development = Object.assign({
  HTTP_CACHE_SIZE: 100,
  ENABLE_DEBUG_LOGGING: true
}, shared);


const production = Object.assign({
  HTTP_CACHE_SIZE: 5000,
  ENABLE_DEBUG_LOGGING: false
}, shared);


export default {development, production};
