import { STORAGE } from './constants.js';

const AIEnvBaseUrl = {
  DEV: 'https://ai-shrd-sandbx-apgw-001.azure-api.net/',
  QA: 'https://ai-shrd-sandbx-apgw-001.azure-api.net/',
  STAGE: 'https://api-loyalty-staging.airindia.com/',
  PROD: 'https://api-loyalty.airindia.com/',
};

/* eslint-disable */
let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function _utf8_encode (r) {
  r = r.replace(/\r\n/g, "\n");
  let e = "";
  for (let t = 0; t < r.length; t++) {
    let o = r.charCodeAt(t);
    o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192),
      e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224),
        e += String.fromCharCode(o >> 6 & 63 | 128),
        e += String.fromCharCode(63 & o | 128));
  }
  return e;
}

function _utf8_decode (r) {
  let e = ""
    , t = 0
    , o = 0
    , n = 0;
  for (; t < r.length;)
    o = r.charCodeAt(t),
      o < 128 ? (e += String.fromCharCode(o),
        t++) : o > 191 && o < 224 ? (n = r.charCodeAt(t + 1),
          e += String.fromCharCode((31 & o) << 6 | 63 & n),
          t += 2) : (n = r.charCodeAt(t + 1),
            c3 = r.charCodeAt(t + 2),
            e += String.fromCharCode((15 & o) << 12 | (63 & n) << 6 | 63 & c3),
            t += 3);
  return e;
}

window.encode = (r) => {
  let e, t, o, n, a, d, h, C = "", c = 0;
  for (r = _utf8_encode(r); c < r.length;)
    e = r.charCodeAt(c++),
      t = r.charCodeAt(c++),
      o = r.charCodeAt(c++),
      n = e >> 2,
      a = (3 & e) << 4 | t >> 4,
      d = (15 & t) << 2 | o >> 6,
      h = 63 & o,
      isNaN(t) ? d = h = 64 : isNaN(o) && (h = 64),
      C = C + _keyStr.charAt(n) + _keyStr.charAt(a) + _keyStr.charAt(d) + _keyStr.charAt(h);
  return C;
};

window.decode = (r) => {
  let e, t, o, n, a, d, h, C = "", c = 0;
  for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < r.length;)
    n = _keyStr.indexOf(r.charAt(c++)),
      a = _keyStr.indexOf(r.charAt(c++)),
      d = _keyStr.indexOf(r.charAt(c++)),
      h = _keyStr.indexOf(r.charAt(c++)),
      e = n << 2 | a >> 4,
      t = (15 & a) << 4 | d >> 2,
      o = (3 & d) << 6 | h,
      C += String.fromCharCode(e),
      64 != d && (C += String.fromCharCode(t)),
      64 != h && (C += String.fromCharCode(o));
  return C = _utf8_decode(C),
    C;
};

/* eslint-enable */

export function getLang() {
  return document.documentElement.lang;
}

export function getPlaceholderDataFor(key) {
  const lang = getLang();
  const placeholdersData = window.placeholders?.[lang] || window.placeholders?.default || {};
  return placeholdersData[key];
}

export async function getOcpKey() {
  const keyVaultUrl = `${AIEnvBaseUrl.STAGE}kv-token/get-loy-token-key`;
  const appName = 'LOY';
  let OCPKey;
  try {
    const response = await fetch(keyVaultUrl, {
      method: 'POST',
      headers: {
        Appname: appName,
      },
    });
    if (response.ok && response.status === 200) {
      OCPKey = (await response.json()).value;
    }
  } catch (err) {
    OCPKey = '';
  }
  return OCPKey;
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export function isLoggedIn() {
  return !!window.sessionStorage.getItem('accessToken');
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export async function getAccountSummary() {
  try {
    const membershipUrl = getPlaceholderDataFor('getAccountSummary');
    const token = window.decode(window.sessionStorage.getItem('accessToken'));
    const subscriptionKey = await getOcpKey();

    const response = await fetch(membershipUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'X-Request-Source': 'website',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch account summary data');
    }

    return await response.json();
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    throw err;
  }
}

function getInititals(firstName, lastName) {
  return (
    String(firstName?.[0]?.toUpperCase()) + String(lastName?.[0]?.toUpperCase())
  );
}

function saveAccountSummary(membershipDataResponse) {
  const [membershipData] = membershipDataResponse?.responsePayload?.data || [];
  sessionStorage.setItem(STORAGE.LTY_MD, window.encode(JSON.stringify(membershipData)));
  sessionStorage.setItem(
    STORAGE.LTY_MEM_TIER,
    window.encode(JSON.stringify(membershipData?.mainTier?.allianceTier?.ffpTierCode)),
  );
  sessionStorage.setItem(
    STORAGE.LTY_UD,
    window.encode(JSON.stringify(membershipData?.contact?.emails?.[0]?.address)),
  );
  return membershipData;
}

function getAccountSummaryFromSessionStorage() {
  const accountSummary = sessionStorage.getItem(STORAGE.LTY_MD);
  let accountSummaryData;
  try {
    if (accountSummary) {
      accountSummaryData = JSON.parse(window.decode(accountSummary));
    }
  } catch (err) {
    accountSummaryData = null;
  }
  return accountSummaryData;
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export async function getUserInfo() {
  let membershipData = getAccountSummaryFromSessionStorage();
  if (!membershipData) {
    membershipData = await getAccountSummary();
    membershipData = saveAccountSummary(membershipData);
  }

  const {
    individual: {
      identity: {
        name: { romanized },
      },
    },
    membershipId,
    contact: {
      emails: [email],
    },
    loyaltyAward: [loyalty],
    mainTier: { label: club },
  } = membershipData;

  return {
    initials: getInititals(romanized?.firstName, romanized?.lastName),
    name: romanized?.firstName,
    ffn: membershipId,
    email: email?.address,
    points: loyalty?.amount,
    club,
  };
}

/**
 * add href attribute with default # value to Anchor tags with no href to improve accessibility
 */
export function addDefaultHrefToElementAnchorTags(elementId) {
  const element = document.getElementById(elementId);
  element.querySelectorAll('a').forEach((anchor) => {
    if (!anchor.getAttribute('href')) {
      anchor.setAttribute('href', '#');
    }
    // eslint-disable-next-line no-script-url
    if (anchor.getAttribute('href') === 'javascript:void(0)') {
      anchor.setAttribute('href', '#');
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  });
}

function getAllHashParams() {
  const hashParams = {};
  const hash = window.location.hash.substring(1);
  const params = hash.split('&');

  params.forEach((item) => {
    const param = item.split('=');
    const key = decodeURIComponent(param[0]);
    const value = decodeURIComponent(param[1]);
    hashParams[key] = value;
  });

  return Object.keys(hashParams);
}

function arrayContainsAllItems(array = [], items = []) {
  return items.every((item) => array?.includes(item));
}

export function containsHashAndState() {
  const hashParams = getAllHashParams();
  return arrayContainsAllItems(hashParams, ['state', 'client_info']);
}
