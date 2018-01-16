importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/konami-listener.js",
    "revision": "4d60426b79905fc29a8cb70509810964"
  },
  {
    "url": "build/konami-listener/ep531xva.js",
    "revision": "adb2c73331b11a6a175da33725be4de7"
  },
  {
    "url": "build/konami-listener/ep531xva.sc.js",
    "revision": "bd2076d0759e64c1e04bc4bfa9caa3fd"
  },
  {
    "url": "build/konami-listener/jdm8uman.js",
    "revision": "e4df63289ef4209389ca22d4a5e7e187"
  },
  {
    "url": "build/konami-listener/jdm8uman.sc.js",
    "revision": "812827d8295e45987ec41e0d436f3f2a"
  },
  {
    "url": "build/konami-listener/konami-listener.k7w1yabg.js",
    "revision": "311a08c6ed6a31971e19b9cb57df0f14"
  },
  {
    "url": "build/konami-listener/konami-listener.pmus7wkn.js",
    "revision": "43c6276d25e01874b11ce648aa47c18f"
  },
  {
    "url": "build/konami-listener/konami-listener.registry.json",
    "revision": "e7480890c3e04fe0763c66c96c51c6c3"
  },
  {
    "url": "build/konami-listener/konami-listener.rraxgv2c.js",
    "revision": "fbc3132dd741e02b08614026f0f29ccf"
  },
  {
    "url": "index.html",
    "revision": "837e625a19d3bc2096ae5a6754c9fd63"
  },
  {
    "url": "main.css",
    "revision": "ff2479e79afc49b8505f441d1fe0066f"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
