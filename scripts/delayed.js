// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';
// eslint-disable-next-line import/no-cycle
import { getEnvType } from './scripts.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

/**
 * Google Tag Manager
* */
async function loadGTM() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=UA-222518279-1');
  const scriptTag = document.createElement('script');
  scriptTag.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-222518279-1');
    `;
  document.head.prepend(scriptTag);
}

async function loadAdobeLaunch() {
  const adobeotmSrc = {
    dev: 'https://assets.adobedtm.com/d8581f94b285/4e9e4938e0dc/launch-43a3ffd400eb-development.min.js',
    preview: 'https://assets.adobedtm.com/d8581f94b285/4e9e4938e0dc/launch-43a3ffd400eb-development.min.js', // TODO: update with preview script
    live: 'https://assets.adobedtm.com/d8581f94b285/4e9e4938e0dc/launch-43a3ffd400eb-development.min.js', // TODO: update with live script
  };
  await loadScript(adobeotmSrc[getEnvType()]);
}

await loadAdobeLaunch();
await loadGTM();
