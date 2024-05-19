import { HOST } from '../../scripts/utils/constants.js';

function isLocalhostWithPort(port) {
  return window.location.hostname === 'localhost'
         && window.location.port === port;
}

function isRelativePath(link) {
  // Get the href attribute of the link
  const href = link.getAttribute('href');
  // Check if the href starts with '/' or does not start with 'http://' or 'https://'
  return href.startsWith('/') || (!href.startsWith('#')) || href.startsWith('http://') || href.startsWith('https://');
}

function addDomainToLinks(element) {
  const links = element.querySelectorAll('a');
  links.forEach((link) => {
    // replace the origin with the HOST origin if the link is a relative path
    if (isRelativePath(link)) {
      link.setAttribute('href', `${HOST.origin}${link.getAttribute('href')}`);
    }
  });
}

export {
  isLocalhostWithPort,
  addDomainToLinks,
};
