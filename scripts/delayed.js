// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './aem.js';
// eslint-disable-next-line import/no-cycle
import { getEnvType } from './scripts.js';
import loadExternalComponent from './utils/initializer.js';
import { initBooking } from '../blocks/booking/booking.js';
import { pushPageLoadedAnalytics } from './analytics.js';

// Initialize the booking block if present on the page
if (document.querySelector('.booking')) {
  await initBooking();
}

// Auth scripts
await loadScript('/scripts/auth/msal.js');
await loadScript('/scripts/auth/authConfig.js');
await loadScript('/scripts/auth/authRedirect.js');

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
    preview: 'https://assets.adobedtm.com/d8581f94b285/4e9e4938e0dc/launch-ce0d5a5ddfb7-staging.min.js',
    live: 'https://assets.adobedtm.com/d8581f94b285/4e9e4938e0dc/launch-4f07f2129862.min.js',
  };
  await loadScript(adobeotmSrc[getEnvType()]);
}

async function loadCookieConsentManager() {
  const ccm = {
    dev: '071fd164-e45b-4e9b-a106-021c14d33a7b-test',
    preview: '071fd164-e45b-4e9b-a106-021c14d33a7b-test',
    live: '071fd164-e45b-4e9b-a106-021c14d33a7b',
  };
  await loadScript('https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', { 'data-domain-script': ccm[getEnvType()] });
}

await loadCookieConsentManager();
await loadAdobeLaunch();
pushPageLoadedAnalytics();
await loadGTM();

// Load chatbot script
loadExternalComponent('chatbot');
