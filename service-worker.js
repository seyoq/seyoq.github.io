// 기본 캐싱 설정 (알림 처리 X, 푸시 지원할 경우 별도 구성 필요)
self.addEventListener('install', event => {
  console.log('📦 Service Worker 설치됨');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('🚀 Service Worker 활성화됨');
});

self.addEventListener('fetch', function(event) {
  // 기본: 네트워크 우선
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
