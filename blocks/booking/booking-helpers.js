import { fetchPlaceholders } from '../../scripts/aem.js';
import { HOST } from '../../scripts/utils/constants.js';

function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(async (registration) => {
        await fetchPlaceholders();
        // console.log('Service Worker registered with scope:', registration.scope);
        if (registration.active) {
          registration.active
            .postMessage(window.placeholders);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error('Service Worker registration failed:', error);
      });
  }
}

function isLocalhostWithPort(port) {
  return window.location.hostname === 'localhost'
         && window.location.port === port;
}

function addDomainToLinks(element) {
  const links = element.querySelectorAll('a');
  links.forEach((link) => {
    // replace the origin with the HOST origin
    if (link.href.includes(window.location.origin)) {
      link.href = link.href.replace(window.location.origin, HOST.origin);
    } else if (link.href.startsWith('/')) {
      link.href = `${HOST.origin}${link.href}`;
    }
  });
}

export {
  initServiceWorker,
  isLocalhostWithPort,
  addDomainToLinks,
};
