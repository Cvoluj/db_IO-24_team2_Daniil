/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b2e46c88a26c6e6d7129c0d1862259f5"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "1971dbc9cca0314ab6c72c9a677fc99d"
  },
  {
    "url": "assets/css/0.styles.96c8942f.css",
    "revision": "620b553d56626b41e35e8071af84bb12"
  },
  {
    "url": "assets/img/create.a904a1d9.png",
    "revision": "a904a1d926e2cb981cf5c4b1888707ea"
  },
  {
    "url": "assets/img/delete.fc17004c.png",
    "revision": "fc17004c444e3d5d617ebadcd78abfd3"
  },
  {
    "url": "assets/img/read.2076e268.png",
    "revision": "2076e268c189cc827d2ada3cb1fe8b91"
  },
  {
    "url": "assets/img/relation_scheme.94590443.png",
    "revision": "9459044361aadcdd25fe8aa59afec3ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/swagger.2289e718.png",
    "revision": "2289e718e2adc5da4d4ee241dabfa77c"
  },
  {
    "url": "assets/img/update1.a77cccec.png",
    "revision": "a77cccec12c8e93e08830a962638715e"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.09b1b0cb.js",
    "revision": "b5efdee05be9f1100d1be678f38ef6c2"
  },
  {
    "url": "assets/js/14.46ab93fd.js",
    "revision": "881b4a2d96a2ab89fac2de82dcf9ed5f"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.d3682aaf.js",
    "revision": "bdfe29c1f9ab57037911317f7169ccf0"
  },
  {
    "url": "assets/js/17.d9f93882.js",
    "revision": "3a3d45b85bedb14403b57a0c8d5bc037"
  },
  {
    "url": "assets/js/18.97155529.js",
    "revision": "57cfcfbf2b6a9d269eb1786b76f97f44"
  },
  {
    "url": "assets/js/19.2ae4ed4c.js",
    "revision": "ca0a2398b0fa90c16a4ef6542669282d"
  },
  {
    "url": "assets/js/2.f8f656e3.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.13c7764e.js",
    "revision": "cbb01fb6478fc262c028b0b490847f61"
  },
  {
    "url": "assets/js/21.21a06736.js",
    "revision": "1592c78e25d4c80d3ac52bb3db4419d4"
  },
  {
    "url": "assets/js/22.59623847.js",
    "revision": "3da39137135f538478f574a555803274"
  },
  {
    "url": "assets/js/24.a5cd0b1b.js",
    "revision": "b8c9d4bdfbd1f56d8533b308f72bb30c"
  },
  {
    "url": "assets/js/3.7f05a4ca.js",
    "revision": "708dcca76260749e756022a5dd97e2f1"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.6c22d379.js",
    "revision": "5a4c9ca046af08f2b71ce772495548ae"
  },
  {
    "url": "assets/js/6.97cc98a6.js",
    "revision": "b3ad0528995fd4e6d561845ba92d0f6c"
  },
  {
    "url": "assets/js/7.352b63be.js",
    "revision": "3f7fa61d3aa5a271836c22f2a98033ed"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.c5654260.js",
    "revision": "0c72095910e0a3e2197e40d941c1b0be"
  },
  {
    "url": "conclusion/index.html",
    "revision": "54aead8fd8e991384959047252e0ef29"
  },
  {
    "url": "design/index.html",
    "revision": "76bd455721f700e6dd73e9bfcfe239e4"
  },
  {
    "url": "index.html",
    "revision": "93e5ff7b4d2054a18d21c40466faa8d7"
  },
  {
    "url": "intro/index.html",
    "revision": "e0ca4730ad24b5dca15e1c560ee2f69b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "37c519bad613810ff2088f7d580cd467"
  },
  {
    "url": "software/index.html",
    "revision": "8f7e3bfd981e103e461c61f9b8b627d5"
  },
  {
    "url": "test/index.html",
    "revision": "e4cc6028a241b8155c039bebe77ccda8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
