/* eslint-disable */
function _utf8_decode(e) {
  let a = '';
  let t = 0;
  let n = 0;
  let i = 0;
  for (c3 = 0; t < e.length;) {
    (n = e.charCodeAt(t)),
    n < 128
      ? ((a += String.fromCharCode(n)), t++)
      : n > 191 && n < 224
        ? ((i = e.charCodeAt(t + 1)),
        (a += String.fromCharCode(((31 & n) << 6) | (63 & i))),
        (t += 2))
        : ((i = e.charCodeAt(t + 1)),
        (c3 = e.charCodeAt(t + 2)),
        (a += String.fromCharCode(
          ((15 & n) << 12) | ((63 & i) << 6) | (63 & c3),
        )),
        (t += 3));
  }
  return a;
}

let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
window.encode = (r) => {
  let e, t, o, n, a, d, h, C = "", c = 0;
  for (r = _utf8_encode(r); c < r.length; )
      e = r.charCodeAt(c++),
      t = r.charCodeAt(c++),
      o = r.charCodeAt(c++),
      n = e >> 2,
      a = (3 & e) << 4 | t >> 4,
      d = (15 & t) << 2 | o >> 6,
      h = 63 & o,
      isNaN(t) ? d = h = 64 : isNaN(o) && (h = 64),
      C = C + _keyStr.charAt(n) + _keyStr.charAt(a) + _keyStr.charAt(d) + _keyStr.charAt(h);
  return C
}

window.decode = (e) => {
  let a;
  let t;
  let n;
  let i;
  let r;
  let o;
  let c;
  const d = _keyStr;
  let l = '';
  let m = 0;
  for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ''); m < e.length;) {
    (i = d.indexOf(e.charAt(m++))),
    (r = d.indexOf(e.charAt(m++))),
    (o = d.indexOf(e.charAt(m++))),
    (c = d.indexOf(e.charAt(m++))),
    (a = (i << 2) | (r >> 4)),
    (t = ((15 & r) << 4) | (o >> 2)),
    (n = ((3 & o) << 6) | c),
    (l += String.fromCharCode(a)),
    o != 64 && (l += String.fromCharCode(t)),
    c != 64 && (l += String.fromCharCode(n));
  }
  return (l = _utf8_decode(l)), l;
}
/* eslint-enable */

export function getLang() {
  return document.documentElement.lang;
}

export function getPlaceholderDataFor(key) {
  const lang = getLang();
  const placeholdersData = window.placeholders?.[lang] || window.placeholders?.default || {};
  return placeholdersData[key];
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export function isLoggedIn() {
  return !!window.sessionStorage.getItem('accessToken');
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export async function getMembership() {
  try {
    const membershipUrl = getPlaceholderDataFor('getmemberships');
    const token = window.decode(window.sessionStorage.getItem('accessToken'));
    const subscriptionKey = getPlaceholderDataFor('ocpSubscriptionKey');

    const response = await fetch(membershipUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch membership data');
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

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export async function getUserInfo() {
  const membershipData = await getMembership();
  const {
    responsePayload: {
      data: [userData],
    },
  } = membershipData;
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
  } = userData;
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
