/* eslint-disable no-restricted-globals */
// sw.js (Service Worker)

const tokens = [
  'get-loy-token-key',
  'get-token-key',
  'token-key',
  '.EnvironmentVariableServlet',
];

let placeholders = {};

/**
 * Sanitizes a string for use as class name.
 * @param {string} name The unsanitized string
 * @returns {string} The class name
 */
function toClassName(name) {
  return typeof name === 'string'
    ? name
      .toLowerCase()
      .replace(/[^0-9a-z]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
    : '';
}

/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
function toCamelCase(name) {
  return toClassName(name).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

async function fetchMockTokens(key) {
  try {
    // Parse and return the JSON data
    const mockData = placeholders[key];
    console.log('Mock data:', mockData);

    return new Response(mockData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching mock data:', error);
    // Return an error response if fetching fails
    return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

async function fetchMockData(key) {
  const path = `mock/${key}${key.includes('json') ? '' : '.json'}`
  try {
    // Fetch the external JSON file
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to fetch mock data: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const mockData = await response.json();
    console.log('Mock data:', mockData);

    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(`Error fetching mock data of url:${path}`, error);
    // Return an error response if fetching fails
    return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

// Install and activate the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
  console.log('Service Worker installed');
});

self.addEventListener('message', (event) => {
  placeholders = event.data?.default;
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  // Perform activation tasks if needed
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', async (event) => {
  const hostURL = new URL(self.location);
  const { request } = event;
  // Check if the request is an API request with a different port
  if (((request.url.includes('api') && !request.url.includes('chrome-extension')) || request.url.includes('EnvironmentVariableServlet')) && hostURL.port !== '4502') {
    const paths = request.url.split('/');
    console.log('API request and not from the port 4502:', request.url);
    if (tokens.includes(paths[paths.length - 1])) {
      console.log('Request is for tokens:', request.url);
      event.respondWith(fetchMockTokens(toCamelCase(paths[paths.length - 1])));
      return;
    }
    event.respondWith(fetchMockData(paths[paths.length - 1]));
  } else {
    // Continue with the regular fetch
    event.respondWith(fetch(event.request));
  }
});
