/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/07/12/自动拆装箱/content1.png","f2f60722e7146176c97bd3bdef33221a"],["2020/07/12/自动拆装箱/content2.png","28262be75fa000230ca350e4ce4723b0"],["2020/07/12/自动拆装箱/content3.png","84dde71fb426550420f87427cafd974c"],["2020/07/12/自动拆装箱/content4.png","7de9007e645b929708a8e35848e69d07"],["2020/07/12/自动拆装箱/content6.png","c3f4daac6559c24d72d079bc54428176"],["2020/07/12/自动拆装箱/content7.png","d3eb598c240370215a9272f8a072ced1"],["2020/07/12/自动拆装箱/index.html","bbe8d78e36aa419a70604614855e321f"],["2020/07/21/内外部类互访/content1.png","651d814f2f94949f96d7563208ad172e"],["2020/07/21/内外部类互访/content2.png","f1dc51536bc15e6576d364f922978f75"],["2020/07/21/内外部类互访/content3.png","e2b9851229116a34bd95668f1e864a51"],["2020/07/21/内外部类互访/content4.png","c4b6ae824588ae5d7a7eec3f9c56371f"],["2020/07/21/内外部类互访/content5.png","0a18f534c86043e3831eca6c7a63c910"],["2020/07/21/内外部类互访/content6.png","cc128b4c9bcb7a37958eeba8b77446ab"],["2020/07/21/内外部类互访/content7.png","355cdbbae0c9778f4aff5d52a88e6749"],["2020/07/21/内外部类互访/content8.png","33a9d7dccdba9e17812f20d48b321ab3"],["2020/07/21/内外部类互访/index.html","a6537bf4178c95fd7d2ef1bf8dd73088"],["2020/08/03/Markdown小结/index.html","3f2076b930b209aec26931d65a047c23"],["2020/08/04/消息队列/content1.png","644d1fab093de330fb48be8d1749b337"],["2020/08/04/消息队列/content2.png","f2e728da598cc25f821da86667679a87"],["2020/08/04/消息队列/content3.png","49a23ac74c3188c57305bd93923ab43d"],["2020/08/04/消息队列/content4.png","6196b73905b8c68ccf6f2f00b9104dcf"],["2020/08/04/消息队列/content5.png","213ecc7f7fadaa22ce3f0d81ffb9039a"],["2020/08/04/消息队列/content6.png","d1f9803c0f7b6ecf7e21e5827c5fad2c"],["2020/08/04/消息队列/content7.png","c1df75658ddd0523cb10692475226529"],["2020/08/04/消息队列/index.html","07b370c07bec495d79dc67a3108ac4f9"],["2020/08/12/JPA/index.html","f9bb8ebdbf20ca945f9fb9d0f1e6f5f7"],["2020/08/12/唯一索引和非唯一索引/index.html","502c223428b8a494d8e22be409023e36"],["2020/08/20/类的加载方式/content1.png","3e91fd09ba14a2fac26533e25807f0ab"],["2020/08/20/类的加载方式/content2.png","6ecb33f9d40fa2ef3bf6c6599125f453"],["2020/08/20/类的加载方式/content3.png","233c38e6bbf35b875230d6b100a712b6"],["2020/08/20/类的加载方式/content4.png","9ccd554f6172c8ae2acf281e5cd9e4f7"],["2020/08/20/类的加载方式/content5.png","eee4abd8d616d00a9f0b0317bfde3847"],["2020/08/20/类的加载方式/content6.png","50fb7fb357a9fb09fa41834c8575f90c"],["2020/08/20/类的加载方式/index.html","8705783979d0bd350cb1dab3f081e4b2"],["2020/08/20/类的加载过程/content1.png","aedcc7ed4b946efd72a0d501fafc01f6"],["2020/08/20/类的加载过程/content2.png","91e6de9f3d82526842901397f754691c"],["2020/08/20/类的加载过程/content3.png","e76f8e7a1c7be45dec7974f45a7b432d"],["2020/08/20/类的加载过程/content4.png","eb8931e33132a37deb0dda79f2309106"],["2020/08/20/类的加载过程/index.html","4e77e2d667f5b697f4a5e86853114702"],["2020/08/26/Spring基础/content1.png","6386bcde23f6906e3af2de1e85b3de50"],["2020/08/26/Spring基础/content10.png","d7b743842856fe8b74ec0622d029cab1"],["2020/08/26/Spring基础/content11.png","d16e96f9f9e2ae270f4f900a7a88ca74"],["2020/08/26/Spring基础/content12.png","7a95e47025343ad2cb428b6bc951ea44"],["2020/08/26/Spring基础/content13.png","0290aaba7f9b0debd9ff2f5130c6b7d8"],["2020/08/26/Spring基础/content14.png","1c72256177821bdbd8f4141837f8085d"],["2020/08/26/Spring基础/content15.png","1ff63ca1c7c6d9a16dcd52207d1d128a"],["2020/08/26/Spring基础/content16.png","a75edb523e249f31d0ea070217234c24"],["2020/08/26/Spring基础/content17.png","3e29b243f677284d399941eaf7124ec8"],["2020/08/26/Spring基础/content18.png","56703358a8648526c7287f4f936e4ebb"],["2020/08/26/Spring基础/content19.png","039bbc89a4e55301d3319dbe159fdfff"],["2020/08/26/Spring基础/content2.png","7b747d9b3d9d04980799c725d1d87f93"],["2020/08/26/Spring基础/content20.png","ceeafd489d7165289bea2028023e8221"],["2020/08/26/Spring基础/content21.png","ab232ae33e57e5d4d856bee4e41aff1f"],["2020/08/26/Spring基础/content22.png","1d3d8f8481250b7b971283a42f3ed2d4"],["2020/08/26/Spring基础/content23.png","dd3d0ae0e7d200c19200d1f950e72c84"],["2020/08/26/Spring基础/content24.png","bf72e090719048665e2b73de66f26020"],["2020/08/26/Spring基础/content25.png","378d428d97636c87909a8696541e5d4c"],["2020/08/26/Spring基础/content26.png","31a23fa6e007f43a443ea74cb2af17e2"],["2020/08/26/Spring基础/content27.png","c3f99e2f95f404c536ccd950b4418bde"],["2020/08/26/Spring基础/content28.png","4fcd8db3a1181b7f43b7b97a5e9e7d2c"],["2020/08/26/Spring基础/content29.png","adaee216603d093886ba17fc1fc5fe4d"],["2020/08/26/Spring基础/content3.png","f38d3d3cf743265b708454145664b820"],["2020/08/26/Spring基础/content30.png","b38b62296d6814af20e8e0d72e794b46"],["2020/08/26/Spring基础/content31.png","914496eb2c6e345229df874526f08460"],["2020/08/26/Spring基础/content32.png","5ec51dbd5c1bdade16cf7448a1f431b9"],["2020/08/26/Spring基础/content33.png","a3712e53428fd783ffb76a11916d06ec"],["2020/08/26/Spring基础/content34.png","2b15e61d52c0738f1517047646832cec"],["2020/08/26/Spring基础/content35.png","e134d4ebd4555697dec544d5da8d798a"],["2020/08/26/Spring基础/content36.png","a9b620d0b09cc9a54cb88375954e54d4"],["2020/08/26/Spring基础/content4.png","cb8288ae35fd8555f3ce06c8722f2a22"],["2020/08/26/Spring基础/content5.png","b58e58471ca2325a5816be8661bb27ba"],["2020/08/26/Spring基础/content6.png","31ee8e091f3ea236b8c4d96f452dd3d8"],["2020/08/26/Spring基础/content7.png","952def77bc304a752360aabd72279cbd"],["2020/08/26/Spring基础/content8.png","d303ac14aab26e51e1d90c419aca4e4d"],["2020/08/26/Spring基础/content9.png","c9014cd830bad9b8ea97bf2555f61927"],["2020/08/26/Spring基础/index.html","6e1fbb9e5e3611a3e142f09fecff339f"],["404.html","4abc1e7bfcfe1ce8275e12cd462fdfda"],["about/index.html","8eb5e6c7468f2572af6979519fc4c740"],["archives/2020/07/index.html","f9161eb1b8a73aac6cf00d32cf107361"],["archives/2020/08/index.html","b1e534dd1b3e1f1f9ca9f0d83f972131"],["archives/2020/index.html","ebbd3f88b95622381eb8eb083482b645"],["archives/index.html","7cc420b1255138b0aa36a5296795de97"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["categories/Java/index.html","771928e149fafbf9c81eccfb7bc34970"],["categories/Java进阶/index.html","0862f87384f0b6f95db767fda92c1157"],["categories/index.html","50d1a1ee111bbdfadc16af60bc26affe"],["categories/工具/index.html","fd6554e03e99378320acfb6d9d9fe53e"],["categories/数据库/index.html","1cb2243cbab066b748f43475b10a8775"],["categories/框架/index.html","098801fb7b8df1522cbefd83bc979a30"],["css/iconfont.min.css","b60103f18f3763b82d012ba98ffa7e31"],["css/index.css","da501ca02e2eb60d5073b457fafc2ec4"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/cartoon/index.html","43033dd95f84c0ffd3487a574253f876"],["gallery/food/index.html","bf8f86d6fd74e106e56afb4565840893"],["gallery/index.html","b0b2c694d59fb6a3383d1d25ea1d9f6c"],["gallery/movies/index.html","a08923b879432b89bd986e3c382f3457"],["gallery/wallpaper/index.html","5812aa715e687501d6dd769dd7ad58b3"],["images/alipay.png","33818e93eaf8850cc391bcae07c49645"],["images/avatar.png","c996addd49ecd534e879f8606fd8c060"],["images/background.png","dc1e73d35a17993ada9174d1b43c1e6d"],["images/link/bilibili.png","c9d397126f124ded66e1835808852961"],["images/link/fjx.jpg","a1c592b34a6f8f3ce3db2bf589d8c57e"],["images/link/imagine.png","94943587ef801591f8b34bc0818bca8f"],["images/link/jx.png","42f3461ee6ead3d179945cd806a5ee54"],["images/link/mujin.png","07eb542457617a7cc526cfa90eca7d0a"],["images/link/mylife.jpg","cc860851082f089d5d23e04a41683a64"],["images/link/weibo.png","10595f45c676e0fc4a948fc5ba5996da"],["images/link/xiaokang.jpg","f870e799322b16e0e9e05b0a8927e325"],["images/link/zhy.png","78308a0f82318c7e19916b7c7a63c2de"],["images/logo.png","d743f62f3663cb89ecf6095affad6168"],["images/wechat.png","25daaf6153fea673518447cc54c78d07"],["images/ypyLogo.png","edbe63a7c77c740543c2b21ad0064561"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","336803e1d8562f75499c5b9d2e2b4b3d"],["js/main.js","4898030387012f8af71563ef8353433a"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["link/index.html","5d856e6d6cb526b27b50fca0e4bbc46f"],["message/index.html","a715ea007d7535f8dd02e77e0c3dfbb0"],["movies/index.html","e5b26c5017e2b410641394df4ed92778"],["music/index.html","dce922035148f40423a096598051f482"],["tags/JPA/index.html","ee774e474c8a7792f3f437539b9fa2c5"],["tags/Java基础/index.html","376d1ba2a37379b6739a19bf3c873cf4"],["tags/Markdown/index.html","af82316dc8bf27b1ef1a0e40068993c3"],["tags/Spring/index.html","df2b6c3539a1a7a9fa7ffa57180989c9"],["tags/index.html","b05de761bfac2cca255694fb7b133967"],["tags/内外部类/index.html","0c9584bcd1cd852fbc6d732cf9cea785"],["tags/数据库/index.html","378a380f34baaab68bab1ea6d15d429a"],["tags/消息队列/index.html","4e7fb805ef85d295880c02f61ab922e4"],["tags/类/index.html","11bb55aa17440ae4717a9dec18f77110"],["tellme/index.html","d13d179d90ecfec13e8d286f42a2976c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







