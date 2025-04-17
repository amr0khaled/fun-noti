/// <reference no-default-lib="true" />
/// <reference lib="ES2020" />
/// <reference lib="webworker" />

import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { registerRoute, setCatchHandler } from 'workbox-routing'
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
declare const self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()
importScripts('./onesignal.sw.js')
precacheAndRoute(self.__WB_MANIFEST)

registerRoute(({ request }) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
)

registerRoute(({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'html-pages'
  })
)
setCatchHandler(async ({ request, url }) => {
  console.log(request, url)
  if (request.destination === 'document') {
    const res = await caches.match(url)
    console.log(res)
    if (res) {
      return res
    }
  }
  return Response.error()
})

self.addEventListener('install', (e) => {
  console.log("SW INSTALLED", e)
})
self.addEventListener('offline', e => {
  console.log('SW OFFLINE', e)
})
self.addEventListener('online', e => {
  console.log('SW ONLINE', e)
})
self.addEventListener('fetch', async (e) => {
  console.log(e.request.destination, e.request.url)
  try {
    const res = await fetch(e.request)
    const json = await res.json()
    if (res.ok) {
      e.respondWith(new Response(json))
    } else {
      throw new Error("HTTP Error");
    }
  } catch (b) {
    console.log(b)
    e.respondWith(new Response(JSON.stringify({ success: false }), {
      status: 500
    }))
  }
})

self.skipWaiting()
clientsClaim()

export default null
