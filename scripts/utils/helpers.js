function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }
}

function isLocalhostWithPort(port) {
  return window.location.hostname === 'localhost'
         && window.location.port === port;
}

export {
  initServiceWorker,
  isLocalhostWithPort,
};
