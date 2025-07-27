if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Service Worker registrado', reg))
    .catch(err => console.warn('Error registrando SW:', err));
  });
}