/* eslint-disable no-restricted-globals */
// sw.js (Service Worker)

const tokens = [
  'get-loy-token-key',
  'get-token-key',
  'token-key',
  '.EnvironmentVariableServlet.json',
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

async function fetchMockPlaceholders(key) {
  try {
    // Parse and return the JSON data
    const mockData = placeholders[key];
<<<<<<< HEAD
    // eslint-disable-next-line
    console.log('fetchMockPlaceholders: Mock data=>', mockData);
=======
    // console.log('fetchMockPlaceholders: Mock data=>', mockData);
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6

    return new Response(mockData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
<<<<<<< HEAD
    // eslint-disable-next-line
    console.error('[sw.js] fetchMockPlaceholders: Error fetching mock data =>', error);
=======
    // console.error('[sw.js] fetchMockPlaceholders: Error fetching mock data =>', error);
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6
    // Return an error response if fetching fails
    return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

async function fetchMockData(key) {
  const path = `/mock/${key}${key.includes('json') ? '' : '.json'}`;
  try {
    // Fetch the external JSON file
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`[sw.js] fetchMockData: Failed to fetch mock data: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON data
    const mockData = await response.json();
<<<<<<< HEAD
    // eslint-disable-next-line
    console.log('[sw.js] fetchMockData: Mock data =>', mockData);
=======
    // console.log('[sw.js] fetchMockData: Mock data =>', mockData);
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6

    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
<<<<<<< HEAD
    // eslint-disable-next-line
    console.error(`[sw.js] fetchMockData: Error fetching mock data of url:${path} =>`, error);
=======
    // console.error(`[sw.js] fetchMockData: Error fetching mock data of url:${path} =>`, error);
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6
    // Return an error response if fetching fails
    return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

// Install and activate the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
<<<<<<< HEAD
  // eslint-disable-next-line
  console.log('[sw.js] install: Service Worker installed');
=======
  // console.log('[sw.js] install: Service Worker installed');
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6
});

self.addEventListener('message', (event) => {
  placeholders = event.data?.default;
<<<<<<< HEAD
  // eslint-disable-next-line
  console.log('[sw.js] message: Placeholders received=>', placeholders);
});

self.addEventListener('activate', (event) => {
  // eslint-disable-next-line
  console.log('[sw.js] activate: Service Worker activated');
=======
  // console.log('[sw.js] message: Placeholders received=>', placeholders);
});

self.addEventListener('activate', (event) => {
  // console.log('[sw.js] activate: Service Worker activated');
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6
  // Perform activation tasks if needed
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', async (event) => {
  const hostURL = new URL(self.location);
  const { request } = event;
  // Check if the request is an API request with a different port
  if (((request.url.includes('api') && !request.url.includes('cbot') && !request.url.includes('chrome-extension')) || request.url.includes('EnvironmentVariableServlet')) && hostURL.port !== '4502') {
    const paths = request.url.split('/');
<<<<<<< HEAD
    // eslint-disable-next-line
    console.log('[sw.js] fetch: API request and not from the port 4502 =>', request.url);
    if (tokens.includes(paths[paths.length - 1])) {
      // eslint-disable-next-line
      console.log('[sw.js] fetch: Request is for placeholders =>', request.url);
      event.respondWith(fetchMockPlaceholders(toCamelCase(paths[paths.length - 1])));
      return;
    }
    // eslint-disable-next-line
    console.log('[sw.js] fetch: Request is for mock data =>', request.url);
=======
    // console.log('[sw.js] fetch: API request and not from the port 4502 =>', request.url);
    if (tokens.includes(paths[paths.length - 1])) {
      // console.log('[sw.js] fetch: Request is for placeholders =>', request.url);
      event.respondWith(fetchMockPlaceholders(toCamelCase(paths[paths.length - 1])));
      return;
    }
    // console.log('[sw.js] fetch: Request is for mock data =>', request.url);
>>>>>>> 98dbd28311d07b3b9ab87ecd2908781214133ba6
    event.respondWith(fetchMockData(paths[paths.length - 1]));
  } else {
    // Continue with the regular fetch
    event.respondWith(fetch(event.request));
  }
});
