self.addEventListener('install', e => {
  console.log('Service Worker Installed');
});

self.addEventListener('activate', e => {
  console.log('Service Worker Activated');
});

self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon
  });
});
