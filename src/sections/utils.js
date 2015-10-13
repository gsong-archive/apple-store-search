import settings from '../config/settings';


export function makeTitle(title) {
  return `${title} | Apple Store Search v${settings.VERSION}`;
}
