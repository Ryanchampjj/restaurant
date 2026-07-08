// Service Worker — คีย์บิล ห้องอาหาร TIH (PWA offline caching)
const CACHE_NAME = 'tih-kitchen-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// ติดตั้ง — โหลดไฟล์เข้า cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// เปิดใช้งาน — ลบ cache เก่า
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// รับ request — ข้ามการ cache สำหรับ Google Apps Script (ต้องใช้ข้อมูลสด)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname.includes('script.google.com') ||
      url.hostname.includes('googleusercontent.com') ||
      url.hostname.includes('google.com')) {
    return; // ปล่อยให้ browser จัดการเอง — ไม่ cache
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
