import packageSpec from '../../package.json';


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
  API_URL: 'https://itunes.apple.com',
  MEDIA_TYPES: MEDIA_TYPES.map(([k, v]) => ({key: k, label: v})),
  VERSION: packageSpec.version,
  DEFAULT_QUERY_PARAMS: {
    media: 'all',
    term: ''
  }
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
