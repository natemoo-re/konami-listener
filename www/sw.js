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
    "revision": "b6638b424b5df5381b5dc2df5b2fcbc6"
  },
  {
    "url": "build/konami-listener/7t14q09p.js",
    "revision": "1be489cd7bb0f895b0c6b6041dceec23"
  },
  {
    "url": "build/konami-listener/7t14q09p.sc.js",
    "revision": "188eec55126c9d60fdfc288e1cdb496b"
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
    "revision": "ff0911b4e98bfbe13f1e84363569d5d1"
  },
  {
    "url": "build/konami-listener/konami-listener.rraxgv2c.js",
    "revision": "fbc3132dd741e02b08614026f0f29ccf"
  },
  {
    "url": "build/konami-listener/xhhpvrn3.js",
    "revision": "027db4b00e12b001ce5570fd46ee0aa0"
  },
  {
    "url": "build/konami-listener/xhhpvrn3.sc.js",
    "revision": "862b4d8439d87649fe7ba9d3a2d8cdf8"
  },
  {
    "url": "index.html",
    "revision": "f447842a1522ab9e81f51bb72070fd52"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
