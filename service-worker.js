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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/07/frontmatter-in-vuepress/index.html",
    "revision": "6f76f16af138bd1c88577212163c251a"
  },
  {
    "url": "2019/02/26/markdown-slot/index.html",
    "revision": "272ce0a2ad774212ea4134124017e15e"
  },
  {
    "url": "2019/05/06/writing-a-vuepress-theme/index.html",
    "revision": "ee8cd47460faf2071f1d966553b0fca6"
  },
  {
    "url": "2019/07/29/git-ignore-directory-except-some-file/index.html",
    "revision": "9b4d6d4e177d51d1b4411e15ba44b272"
  },
  {
    "url": "2019/07/30/http-status-code/index.html",
    "revision": "8853d84f10eefc7feb777073073ceffb"
  },
  {
    "url": "2019/07/30/setup-ssl-cert-for-dev-using-mkcert/index.html",
    "revision": "0813783245e900fa2a373b4448bda020"
  },
  {
    "url": "2019/07/31/level-of-programmer/index.html",
    "revision": "e56829c6af706e47311a391adda4411a"
  },
  {
    "url": "2019/08/04/draw-diagram-on-web/index.html",
    "revision": "fcfd6949eff8e2f739cb3980334ac878"
  },
  {
    "url": "2019/08/21/microservices-notes/index.html",
    "revision": "51082d9b957c09f545fa3bd65161d5de"
  },
  {
    "url": "404.html",
    "revision": "1ed40b935d05950d52def04ccb32f4e8"
  },
  {
    "url": "assets/css/0.styles.e22947dd.css",
    "revision": "3a8e4ffe4032e1c8831fc10873047b54"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bf967b39.js",
    "revision": "9872a56e93381fac2faf96d42e956e82"
  },
  {
    "url": "assets/js/10.191182c8.js",
    "revision": "203025dc1d2cc51addfde2a1dc28a2cd"
  },
  {
    "url": "assets/js/11.3d77dfc7.js",
    "revision": "942902d14adcb20d9e07151a2dd25384"
  },
  {
    "url": "assets/js/12.b12ed0b3.js",
    "revision": "1c35ae430824afe678c954db2ad87980"
  },
  {
    "url": "assets/js/13.8554de83.js",
    "revision": "b2236449464f6412e157cd240d77e8a5"
  },
  {
    "url": "assets/js/14.a388cf9a.js",
    "revision": "1c39f540608c7a7b79cb10e72757fe40"
  },
  {
    "url": "assets/js/15.27586e5c.js",
    "revision": "b03a0ea4443989b669b2ce4c4f6bb568"
  },
  {
    "url": "assets/js/16.7707c95a.js",
    "revision": "eb13e2124ebab5b6be4207ee84267fc7"
  },
  {
    "url": "assets/js/17.c826d203.js",
    "revision": "c9c1c06b215c0f93a064224e8ae83d80"
  },
  {
    "url": "assets/js/18.3d0034b2.js",
    "revision": "6d439c6c845fa028fc7f781ceb71d6cd"
  },
  {
    "url": "assets/js/19.f8d03eba.js",
    "revision": "10c72b32e1c6b3ebc793b874944ae473"
  },
  {
    "url": "assets/js/20.4e4de5b0.js",
    "revision": "3c374a14036d229f6a6c19d40b4a820f"
  },
  {
    "url": "assets/js/21.d77ffa26.js",
    "revision": "7c3ffa63ae2a07aa842fe55e9ae9b816"
  },
  {
    "url": "assets/js/22.92bc71d1.js",
    "revision": "1e354f9f0b9d6729da409824cda1b6a9"
  },
  {
    "url": "assets/js/23.1b91c61e.js",
    "revision": "7d9307f2dc572f9d4a2bb00b4c2f8b4b"
  },
  {
    "url": "assets/js/4.256dfcde.js",
    "revision": "de4026333d6f2331866c51ab829e795a"
  },
  {
    "url": "assets/js/5.6a38e0c8.js",
    "revision": "e444b9581aab8fe5b926cce88969bd6f"
  },
  {
    "url": "assets/js/6.a442e902.js",
    "revision": "7ab14413c643d756ae289dfe3a228d1a"
  },
  {
    "url": "assets/js/7.3b8ed094.js",
    "revision": "276e69d7f2c371af9f136631b8af95a6"
  },
  {
    "url": "assets/js/8.60e317d7.js",
    "revision": "3492dd147db97c165e84d652d6a61166"
  },
  {
    "url": "assets/js/9.7861f7c7.js",
    "revision": "3270fc8cd52e38b7c8c63971d07c6dc6"
  },
  {
    "url": "assets/js/app.4718c9bd.js",
    "revision": "7a09f38479e7d7646c8109ff1bf42466"
  },
  {
    "url": "assets/js/vuejs-paginate.df6abdac.js",
    "revision": "33a3f837c770f9ad3f7570a94db48718"
  },
  {
    "url": "favicon.png",
    "revision": "ac90acf048841a647dd06391a130b0f5"
  },
  {
    "url": "images/author-1.jpg",
    "revision": "1a73ae9f536cfa1440e8e857ae43ea54"
  },
  {
    "url": "images/author-2.jpg",
    "revision": "e0b9be1c71774a2efae18f514f8d69f0"
  },
  {
    "url": "images/book/book_okr.jpg",
    "revision": "ed190f2863c3eea38fa747ba5b73e11e"
  },
  {
    "url": "images/book/book_why_netflix.png",
    "revision": "14d7490f529114f891214e04a26ac8c2"
  },
  {
    "url": "images/book/book_work_rules.jpg",
    "revision": "0a220680537f88648f8e03cef2879085"
  },
  {
    "url": "images/design-thinking/00_four-noble-truths-and-design-thinking.jpg",
    "revision": "d840e55c311f736ebefaf9bd1233aadf"
  },
  {
    "url": "images/design-thinking/01_empathize.jpg",
    "revision": "9d810b35a0d23e238ebf567b4687e4ad"
  },
  {
    "url": "images/design-thinking/02_define.jpg",
    "revision": "8218a0e4b243b6afbc46bdfefbc126e7"
  },
  {
    "url": "images/design-thinking/03_ideation.jpg",
    "revision": "5c19b3402ce27c670b64b1d4f6f77350"
  },
  {
    "url": "images/design-thinking/04_prototype-test.jpg",
    "revision": "2d38e2d8e9a4ff78e595cc4bf9997476"
  },
  {
    "url": "images/docker-banner.jpg",
    "revision": "eb80071d0b639b9974fb8e4e0d01927a"
  },
  {
    "url": "images/docker.jpg",
    "revision": "f732b0d7058391fb5f546d3c48cbfe2b"
  },
  {
    "url": "images/duke-banner.png",
    "revision": "61015f33338884fc7affe163e3234ffa"
  },
  {
    "url": "images/duke.png",
    "revision": "15c8458004f05457f53fc32c06a29ee2"
  },
  {
    "url": "images/eng/the-rest-of-us.jpg",
    "revision": "d8a97a612f26956c853882e6da03ad81"
  },
  {
    "url": "images/git-banner-long.png",
    "revision": "7a97243ee77e0f2af80f705cae4fd15e"
  },
  {
    "url": "images/git-banner.png",
    "revision": "4b22dad79de40017df3ee7e8ef9be22b"
  },
  {
    "url": "images/golang_banner.png",
    "revision": "95cbb8c4ec9291c5cd376e197bd11b48"
  },
  {
    "url": "images/golang-banner2.png",
    "revision": "3c26d002ddd60837139ecd5816537f99"
  },
  {
    "url": "images/health/10k-beginner.jpg",
    "revision": "fee3d99676f2d5d0a8487c7c9a065335"
  },
  {
    "url": "images/health/heart-rate-zone.jpg",
    "revision": "173af5e38466b84f15009d7c10785aa4"
  },
  {
    "url": "images/health/khaoyai-marathon-2019.png",
    "revision": "d390a47ea45977247b4b29f81f710666"
  },
  {
    "url": "images/health/running-plan.jpg",
    "revision": "21a72fcfd1377645d3bb129fb6d1e849"
  },
  {
    "url": "images/http-status-code.png",
    "revision": "aedd5e72d106fef4c6cb4573c87345fe"
  },
  {
    "url": "images/https-chrome.png",
    "revision": "bf508239a08e281333d2490a8caac0be"
  },
  {
    "url": "images/https-firefox.png",
    "revision": "bbaa9dc391c58110472c34d654292a83"
  },
  {
    "url": "images/java-banner.png",
    "revision": "e79301cf78e6f8de1813de9811f28750"
  },
  {
    "url": "images/java.png",
    "revision": "07209849f6f6bfea911ab300f2ede9ab"
  },
  {
    "url": "images/kafka-banner.png",
    "revision": "0f45e4f21981077ceeca11a5d530eedc"
  },
  {
    "url": "images/maven-logo.png",
    "revision": "eedcb10875c6e0b5e4c10666e730b055"
  },
  {
    "url": "images/redis-banner.png",
    "revision": "ee4b1f900c95edf9f0906a5ce749e98d"
  },
  {
    "url": "images/splash/begin.jpg",
    "revision": "fb5207238664f71563f76b1d9bf367d3"
  },
  {
    "url": "images/splash/chinese-man-on-boat.jpg",
    "revision": "678274ef72ecf2c976da665fc3bd567e"
  },
  {
    "url": "images/splash/green-lock.jpg",
    "revision": "f28e1d7132acc3a484a822c201803eb4"
  },
  {
    "url": "images/tools-banner.jpeg",
    "revision": "efb78f7222e0abb5935bda7d2d18c923"
  },
  {
    "url": "images/visualvm/visualvm.png",
    "revision": "820cdb84239aacc19b50b5a7bcafdbf7"
  },
  {
    "url": "images/vs-centraldb.png",
    "revision": "3248f9ace02294c15b4c39bd1cdf0410"
  },
  {
    "url": "images/vs-esb.png",
    "revision": "facef14b90c1d66b9a0430fc1a3fb978"
  },
  {
    "url": "images/vs-monolith.png",
    "revision": "b836f12fa2a529de08817add05c0a96b"
  },
  {
    "url": "images/vs-threetier.png",
    "revision": "9de5ef3d1a0e5bad2d0cac7ab7b0e8c6"
  },
  {
    "url": "index.html",
    "revision": "0e467610eb01ae60654bddfe91f84626"
  },
  {
    "url": "page/2/index.html",
    "revision": "29303735c14dfb36ec053e40d0ffb04e"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "e40b0451aa275297c14e69de3dcd35e9"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "cedf1137acd2b2a55b363ef4f095bc9e"
  },
  {
    "url": "tag/diagram/index.html",
    "revision": "72fd59c47804ee1058eb9266d90ad8a7"
  },
  {
    "url": "tag/frontmatter/index.html",
    "revision": "8a45e0074975840ab57f930395e7f7ae"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3eff3c1c7fd815db25671952dbf08bc9"
  },
  {
    "url": "tag/http/index.html",
    "revision": "0319268e272b2fb0f06176719c45025a"
  },
  {
    "url": "tag/index.html",
    "revision": "ae1696f101d74674f56582b2850efb8e"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "31787fd4a2820bde4f91daa09277f672"
  },
  {
    "url": "tag/microservices/index.html",
    "revision": "c5d8162f0aa9325aa6da5590635bfe9c"
  },
  {
    "url": "tag/programmer/index.html",
    "revision": "e097423b987d549b8d98ccc68ee93d5b"
  },
  {
    "url": "tag/security/index.html",
    "revision": "f4310b382603e855743c78e485f17619"
  },
  {
    "url": "tag/theme/index.html",
    "revision": "c8086ecf8f69a038f5e4e48334593ad2"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c135368f3efc4e042c9e7b75da535e44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
