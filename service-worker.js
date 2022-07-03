const casheName = 'version3'
/**
 * On Install Event
 * Triggered when the service worker is installed
 */
 self.addEventListener('install', function (event) {
  //console.log('SW Installed:', event);
  self.skipWaiting();

  event.waitUntil(
      caches.open(casheName)
          .then(function (cashe) {
              cashe.addAll([
                  
              ]);
          })
  );

});


/**
 * On Activate Event
 * Triggered when the service worker is activated
 */
 self.addEventListener('activate', function (event) {
  //console.log('SW Activated:', event);
  event.waitUntil(clients.claim());

  // Delete old cashes
event.waitUntil(
  caches.keys()
      .then(function (cashNames) {
          for (const item of cashNames) {
              if (item !== casheName) {
                  caches.delete(item);
              }
          }
      })
  )
});

/**
 * On Fetch Event
 * Triggered when the service worker retrieves an asset
 */
self.addEventListener('fetch', function (event) {
 
  // Cache Strategy: Network Only
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        return response;
      })
  );
});