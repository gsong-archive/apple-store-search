const MEDIA_TYPES = [
  ['all', 'All'],
  ['movie', 'Movie'],
  ['podcast', 'Podcast'],
  ['music', 'Music'],
  ['musicVideo', 'Music Video'],
  ['audiobook', 'Audiobook'],
  ['shortFilm', 'Short Film'],
  ['tvShow', 'TV Show'],
  ['software', 'Software'],
  ['ebook', 'eBook']
];


const shared = {
  MEDIA_TYPES: MEDIA_TYPES.map(([k, v]) => ({key: k, label: v})),
  DEFAULT_MEDIA_TYPE: 'all',
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
