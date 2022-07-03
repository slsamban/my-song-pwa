
// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(
      '/service-worker.js',
      { scope: '/' }
    )
    .then(function (registration) {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch(function (error) {
      console.log('Service Worker failed to register:', error);
    });
}
else {
  console.log('Service Worker is not supported by this browser.');
}
