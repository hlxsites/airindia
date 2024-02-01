import { isLocalhostWithPort } from '../../scripts/utils/helpers.js';
import { loadExternalComponent } from '../../scripts/utils/initializer.js';

const urlParams = 'https://www.airindia.in';

const configModelUrl = `${urlParams}/content/.EnvironmentVariableServlet.json`;

const notAllowedDomains = [
  'cadetpilot-dev.airindia.com',
  'cadetpilot-qa.airindia.com',
  'cadetpilot-staging.airindia.com',
  'cadetpilot.airindia.com',
  'newsroom-dev.airindia.com',
  'newsroom-qa.airindia.com',
  'newsroom-staging.airindia.com',
  'newsroom.airindia.com',
];

let envParam = {};
let vaultServiceUrl = '';
let loyaltyVaultService = '';
const dataValuesForVault = {};
let headerValueDXP = '';
let headerValueLOY = '';
// let key = 'envdetails';
const envDetails = {};

async function initBooking(envPath) {
  await fetch(envPath)
    .then((res) => res.json())
    .then(async (response) => {
      envParam = response;
      envParam.environment = isLocalhostWithPort('4502') ? 'qa' : envParam?.ENV_CONFIG;

      if (notAllowedDomains.includes(window.location.hostname) || window.location.href.includes('ai-campaign-booking')
        || window.location.href.includes('google-flight-booking')) {
        return false;
      }
      if (envParam?.environment === 'prod') {
        vaultServiceUrl = 'https://api.airindia.com/kvtoken/token-key';
        headerValueDXP = 'DXP';
        loyaltyVaultService = 'https://api-loyalty.airindia.com/kv-token/get-loy-token-key';
        headerValueLOY = 'LOY';
      }
      if (envParam?.environment === 'stage') {
        vaultServiceUrl = 'https://api-staging.airindia.com/kvtoken/get-token-key';
        headerValueDXP = 'DXP';
        loyaltyVaultService = 'https://api-loyalty-staging.airindia.com/kv-token/get-loy-token-key';
        headerValueLOY = 'LOY';
      }
      if (envParam?.environment === 'qa') {
        vaultServiceUrl = 'https://ai-shrd-sandbx-apgw-001.azure-api.net/kvtoken/qa/get-token-key';
        headerValueDXP = 'DXP';
        loyaltyVaultService = 'https://ai-shrd-sandbx-apgw-001.azure-api.net/kvtoken/qa/get-token-key';
        headerValueLOY = 'DXP';
      }
      if (envParam?.environment === 'dev') {
        vaultServiceUrl = 'https://ai-shrd-sandbx-apgw-001.azure-api.net/kvtoken/dev/get-token-key';
        headerValueDXP = 'DXP';
        loyaltyVaultService = 'https://ai-shrd-sandbx-apgw-001.azure-api.net/kvtoken/dev/get-token-key';
        headerValueLOY = 'DXP';
      }
      try {
        await fetch(vaultServiceUrl, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            appName: headerValueDXP,
          },
          body: JSON.stringify(dataValuesForVault),
          // body data type must match "Content-Type" header
        })
          .then((res) => res.json())
          .then(async (vaultResponse) => {
            envDetails.env = envParam?.environment;
            envDetails.dxpVaultDetails = vaultResponse;

            const configset = new CustomEvent('configset', {
              detail: envDetails,
            });
            window.dispatchEvent(configset);
            console.log('event ser');
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (e) {
        console.error(e);
      }

      try {
        await fetch(loyaltyVaultService, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            appName: headerValueLOY,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(dataValuesForVault),
          // body data type must match "Content-Type" header
        })
          .then((res) => res.json())
          .then((loyaltyVaultResponse) => {
            envDetails.loyaltyVaultDetails = loyaltyVaultResponse;

            const configset = new CustomEvent('loyaltyconfigset', {
              detail: envDetails,
            });
            window.dispatchEvent(configset);
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (e) {
        console.error(e);
      }
      return true;
    });
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // Create a shadow root for the specified element
  const container = block;
  // const shadowRoot = container.attachShadow({ mode: 'open' });
  loadExternalComponent('search-flight', container);
  await initBooking(configModelUrl);
}

/** function to handle booking */

window.checkSignInForRefx = () => {
  console.log("checkSignInForRefx");
};
