/* eslint-disable no-restricted-globals */
// sw.js (Service Worker)

const tokens = [
  'get-loy-token-key',
  'get-token-key',
  'token-key',
];

let placeholders = {};

/**
 * Sanitizes a string for use as a js property name.
 * @param {string} name The unsanitized string
 * @returns {string} The camelCased name
 */
function toCamelCase(name) {
  return toClassName(name).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Gets placeholders object.
 * @param {string} [prefix] Location of placeholders
 * @returns {object} Window placeholders object
 */
// eslint-disable-next-line import/prefer-default-export
async function fetchPlaceholders(prefix = 'default') {
  placeholders = placeholders || {};
  if (!placeholders[prefix]) {
    placeholders[prefix] = new Promise((resolve) => {
      fetch(`${prefix === 'default' ? '' : prefix}/placeholders.json`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((json) => {
          const placeholders = {};
          json.data
            .filter((placeholder) => placeholder.Key)
            .forEach((placeholder) => {
              placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
            });
          placeholders[prefix] = placeholders;
          resolve(placeholders[prefix]);
        })
        .catch(() => {
          // error loading placeholders
          placeholders[prefix] = {};
          resolve(placeholders[prefix]);
        });
    });
  }
  return placeholders[`${prefix}`];
}

async function fetchMockTokens(key) {
  try {
    // Parse and return the JSON data
    const mockData = placeholders;
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
  try {
    // Fetch the external JSON file
    const response = await fetch(`mock/${key}.json`);

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
    console.error('Error fetching mock data:', error);
    // Return an error response if fetching fails
    return new Response(null, { status: 500, statusText: 'Internal Server Error' });
  }
}

// Install and activate the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(async () => {
    await fetchPlaceholders();
  });
  console.log('placeholders:', placeholders);
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  // Perform activation tasks if needed
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', async (event) => {
  const hostURL = new URL(self.location);
  const { request } = event;
  console.log(request.url);
  console.log(request.url.includes('api.net') ? `api:${request.url}` : 'not api');
  // Check if the request is an API request with a different port
  if (request.url.includes('api') && hostURL.port !== '4502') {
    const paths = request.url.split('/');
    // const mockData = await fetchMockData(paths[paths.length - 1]);
    // console.log(`mock Respone for ${paths[paths.length - 1]}:`, mockData);
    if (tokens.includes(paths[paths.length - 1])) {
      event.respondWith(fetchMockTokens(paths[paths.length - 1]));
      return;
    }
    event.respondWith(fetchMockData(paths[paths.length - 1]));
  } else {
    // Continue with the regular fetch
    event.respondWith(fetch(event.request));
  }
});
