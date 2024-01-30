import memebershipJson from '../mock/getMembership.js';

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
  // return !!window.sessionStorage.getItem('accessToken');
  // Temporarily to mimic the login experience
  return true;
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export function getMembership() {
  return memebershipJson;
}

// Temporary placeholder function to mimic the signin behaviour. Will be refactored
export function getUserInfo() {
  // const membershipData = getMembership();
  // const [userData] = membershipData?.responsePayload?.data;
}
