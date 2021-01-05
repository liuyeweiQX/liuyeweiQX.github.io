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

var precacheConfig = [["2020/07/12/自动拆装箱/content1.png","f2f60722e7146176c97bd3bdef33221a"],["2020/07/12/自动拆装箱/content2.png","28262be75fa000230ca350e4ce4723b0"],["2020/07/12/自动拆装箱/content3.png","84dde71fb426550420f87427cafd974c"],["2020/07/12/自动拆装箱/content4.png","7de9007e645b929708a8e35848e69d07"],["2020/07/12/自动拆装箱/content6.png","c3f4daac6559c24d72d079bc54428176"],["2020/07/12/自动拆装箱/content7.png","d3eb598c240370215a9272f8a072ced1"],["2020/07/12/自动拆装箱/index.html","da5a5dce19be543a03bb0ce1838d923c"],["2020/07/21/内外部类互访/content1.png","651d814f2f94949f96d7563208ad172e"],["2020/07/21/内外部类互访/content2.png","f1dc51536bc15e6576d364f922978f75"],["2020/07/21/内外部类互访/content3.png","e2b9851229116a34bd95668f1e864a51"],["2020/07/21/内外部类互访/content4.png","c4b6ae824588ae5d7a7eec3f9c56371f"],["2020/07/21/内外部类互访/content5.png","0a18f534c86043e3831eca6c7a63c910"],["2020/07/21/内外部类互访/content6.png","cc128b4c9bcb7a37958eeba8b77446ab"],["2020/07/21/内外部类互访/content7.png","355cdbbae0c9778f4aff5d52a88e6749"],["2020/07/21/内外部类互访/content8.png","33a9d7dccdba9e17812f20d48b321ab3"],["2020/07/21/内外部类互访/index.html","eda73537aa90cc015e29f4dfb772ead9"],["2020/08/03/Markdown小结/index.html","9f0cb11057efdba541d59e735c5d5a76"],["2020/08/04/消息队列/content1.png","644d1fab093de330fb48be8d1749b337"],["2020/08/04/消息队列/content2.png","f2e728da598cc25f821da86667679a87"],["2020/08/04/消息队列/content3.png","49a23ac74c3188c57305bd93923ab43d"],["2020/08/04/消息队列/content4.png","6196b73905b8c68ccf6f2f00b9104dcf"],["2020/08/04/消息队列/content5.png","213ecc7f7fadaa22ce3f0d81ffb9039a"],["2020/08/04/消息队列/content6.png","d1f9803c0f7b6ecf7e21e5827c5fad2c"],["2020/08/04/消息队列/content7.png","c1df75658ddd0523cb10692475226529"],["2020/08/04/消息队列/index.html","4b49b874e9520a1ff7ea8b47cbf3fae5"],["2020/08/12/JPA/index.html","890666d8ace1627b4cf1f176c0707ca1"],["2020/08/12/唯一索引和非唯一索引/index.html","3e9f6be656953870fd4d1b2be1a4a5d6"],["2020/08/20/类的加载方式/content1.png","3e91fd09ba14a2fac26533e25807f0ab"],["2020/08/20/类的加载方式/content2.png","6ecb33f9d40fa2ef3bf6c6599125f453"],["2020/08/20/类的加载方式/content3.png","233c38e6bbf35b875230d6b100a712b6"],["2020/08/20/类的加载方式/content4.png","9ccd554f6172c8ae2acf281e5cd9e4f7"],["2020/08/20/类的加载方式/content5.png","eee4abd8d616d00a9f0b0317bfde3847"],["2020/08/20/类的加载方式/content6.png","50fb7fb357a9fb09fa41834c8575f90c"],["2020/08/20/类的加载方式/index.html","b7e0aecb6270cd5d538eead4e654a4f4"],["2020/08/20/类的加载过程/content1.png","aedcc7ed4b946efd72a0d501fafc01f6"],["2020/08/20/类的加载过程/content2.png","91e6de9f3d82526842901397f754691c"],["2020/08/20/类的加载过程/content3.png","e76f8e7a1c7be45dec7974f45a7b432d"],["2020/08/20/类的加载过程/content4.png","eb8931e33132a37deb0dda79f2309106"],["2020/08/20/类的加载过程/index.html","ef44ea15e99e66b537e7ab54b49a4a2d"],["2020/08/26/Spring基础/content1.png","6386bcde23f6906e3af2de1e85b3de50"],["2020/08/26/Spring基础/content10.png","d7b743842856fe8b74ec0622d029cab1"],["2020/08/26/Spring基础/content11.png","d16e96f9f9e2ae270f4f900a7a88ca74"],["2020/08/26/Spring基础/content12.png","7a95e47025343ad2cb428b6bc951ea44"],["2020/08/26/Spring基础/content13.png","0290aaba7f9b0debd9ff2f5130c6b7d8"],["2020/08/26/Spring基础/content14.png","1c72256177821bdbd8f4141837f8085d"],["2020/08/26/Spring基础/content15.png","1ff63ca1c7c6d9a16dcd52207d1d128a"],["2020/08/26/Spring基础/content16.png","a75edb523e249f31d0ea070217234c24"],["2020/08/26/Spring基础/content17.png","3e29b243f677284d399941eaf7124ec8"],["2020/08/26/Spring基础/content18.png","56703358a8648526c7287f4f936e4ebb"],["2020/08/26/Spring基础/content19.png","039bbc89a4e55301d3319dbe159fdfff"],["2020/08/26/Spring基础/content2.png","7b747d9b3d9d04980799c725d1d87f93"],["2020/08/26/Spring基础/content20.png","ceeafd489d7165289bea2028023e8221"],["2020/08/26/Spring基础/content21.png","ab232ae33e57e5d4d856bee4e41aff1f"],["2020/08/26/Spring基础/content22.png","1d3d8f8481250b7b971283a42f3ed2d4"],["2020/08/26/Spring基础/content23.png","dd3d0ae0e7d200c19200d1f950e72c84"],["2020/08/26/Spring基础/content24.png","bf72e090719048665e2b73de66f26020"],["2020/08/26/Spring基础/content25.png","378d428d97636c87909a8696541e5d4c"],["2020/08/26/Spring基础/content26.png","31a23fa6e007f43a443ea74cb2af17e2"],["2020/08/26/Spring基础/content27.png","c3f99e2f95f404c536ccd950b4418bde"],["2020/08/26/Spring基础/content28.png","4fcd8db3a1181b7f43b7b97a5e9e7d2c"],["2020/08/26/Spring基础/content29.png","adaee216603d093886ba17fc1fc5fe4d"],["2020/08/26/Spring基础/content3.png","f38d3d3cf743265b708454145664b820"],["2020/08/26/Spring基础/content30.png","b38b62296d6814af20e8e0d72e794b46"],["2020/08/26/Spring基础/content31.png","914496eb2c6e345229df874526f08460"],["2020/08/26/Spring基础/content32.png","5ec51dbd5c1bdade16cf7448a1f431b9"],["2020/08/26/Spring基础/content33.png","a3712e53428fd783ffb76a11916d06ec"],["2020/08/26/Spring基础/content34.png","2b15e61d52c0738f1517047646832cec"],["2020/08/26/Spring基础/content35.png","e134d4ebd4555697dec544d5da8d798a"],["2020/08/26/Spring基础/content36.png","a9b620d0b09cc9a54cb88375954e54d4"],["2020/08/26/Spring基础/content4.png","cb8288ae35fd8555f3ce06c8722f2a22"],["2020/08/26/Spring基础/content5.png","b58e58471ca2325a5816be8661bb27ba"],["2020/08/26/Spring基础/content6.png","31ee8e091f3ea236b8c4d96f452dd3d8"],["2020/08/26/Spring基础/content7.png","952def77bc304a752360aabd72279cbd"],["2020/08/26/Spring基础/content8.png","d303ac14aab26e51e1d90c419aca4e4d"],["2020/08/26/Spring基础/content9.png","c9014cd830bad9b8ea97bf2555f61927"],["2020/08/26/Spring基础/index.html","db439eae44b54a16cca24562303a1441"],["2020/09/08/Gulp压缩和PWA/index.html","b4e5e605ffff1c156de48c70fe03b8cf"],["2020/09/27/深入理解JVM--1.走近Java/index.html","4af52193c57f9c801321cbc6c8acee3b"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content1.png","81f4bb398e70f419507302bf6dba938f"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content2.png","092d9a50720be5023e702fb55e4b5479"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content3.png","3aa1ee5d1fd1b1af9e0e03dd54d81909"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/index.html","4a78d0af3cfc22ed80656422a345c3d1"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content1.png","8a16925d54ec6c3b6106a1f9d4df93b8"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content2.png","bebdf39b14703eb6dfe623163edabd17"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content3.png","201319c6d6f55d37781098c4b9dee3df"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content4.png","a3c49c76f05f7d9273b02c7759840d6f"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/index.html","4b555fcb4349fdd31ab261242faacd86"],["2020/11/30/SpringMVC/content1.png","383899d06be40d4440b93d74ebab948f"],["2020/11/30/SpringMVC/content2.png","8674b9c96500344a184ee7ba6fe1ce1d"],["2020/11/30/SpringMVC/content3.png","789bbb728e845c36bcc7736823dc74d4"],["2020/11/30/SpringMVC/content4.png","cb3e7ae4f55a11e26f71e19a38afd2bd"],["2020/11/30/SpringMVC/index.html","ae39c5ce6b64a05a5fa67b75d414a2c2"],["2020/12/16/CompletableFuture异步任务/content1.png","f035e5b4e389a2ba80f9caf12ceef8fa"],["2020/12/16/CompletableFuture异步任务/content10.png","ce411f0f73083e4b27350a032a854b28"],["2020/12/16/CompletableFuture异步任务/content11.png","5b2cdcdc8f1591e52cde92e72925f3ea"],["2020/12/16/CompletableFuture异步任务/content12.png","3e464b38b4e1d5e0f7d6884976e7e68d"],["2020/12/16/CompletableFuture异步任务/content13.png","4327fe4955e2cc0cb9cf9b63655339cd"],["2020/12/16/CompletableFuture异步任务/content14.png","c8589ad1aac55e379378d951f4bc9a74"],["2020/12/16/CompletableFuture异步任务/content15.png","560364a0eacc9321c5c6aabf4e2bd8bb"],["2020/12/16/CompletableFuture异步任务/content16.png","72bb6c56930e7bbd17497d40e142836d"],["2020/12/16/CompletableFuture异步任务/content17.png","dfcbb3dc1a9ba3168e60ff37a6a07712"],["2020/12/16/CompletableFuture异步任务/content2.png","6cba222520ffd33ddc4df62755703106"],["2020/12/16/CompletableFuture异步任务/content3.png","4432cf6c288997938b162751708136f1"],["2020/12/16/CompletableFuture异步任务/content4.png","f72272d254af08bb45552806c815923e"],["2020/12/16/CompletableFuture异步任务/content5.png","8d10f89d8dfe975106ffa74025810c0f"],["2020/12/16/CompletableFuture异步任务/content6.png","5ab9f97688444db084e568c71ede68d5"],["2020/12/16/CompletableFuture异步任务/content7.png","7f536d285499ae62711479e7f73adebe"],["2020/12/16/CompletableFuture异步任务/content8.png","1eeae2504a18b27c7e8d3f64a9b922a1"],["2020/12/16/CompletableFuture异步任务/content9.png","f4e981f589f51e542fd10fd1782dee4d"],["2020/12/16/CompletableFuture异步任务/index.html","2e057d1b893caad0d1d04245dc0ead57"],["404.html","2945123df9bdc3787f60ff1a60cac921"],["about/index.html","0ca86c7972eddac387fe28422bf66b19"],["archives/2020/07/index.html","1e8d5936e0ba951bebf7737c8d52dcb2"],["archives/2020/08/index.html","3809e5f09b32aef0676738e625abb43f"],["archives/2020/09/index.html","633efcbaa3ae866fa7e875fd24acdaf3"],["archives/2020/10/index.html","30169faecb7059170dd867b0deac17bb"],["archives/2020/11/index.html","383c1f1c9b39fadac5f5b7d739922f3f"],["archives/2020/12/index.html","6658c3365eb7bcda35fb7a392a7ffb7c"],["archives/2020/index.html","ec4267afee45ba552a0954aa10b97c28"],["archives/2020/page/2/index.html","801befe942a6ec450d710592a080f8c1"],["archives/index.html","fb14ab6f4607961a646c9db11cc6d904"],["archives/page/2/index.html","89c4d692d2452fd4e84019f8375544b1"],["artitalk/index.html","cef13577684cbfc6a529e43518465800"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["categories/Hexo/index.html","57a1177eb0a83f4424ec2a718ed0e020"],["categories/Java/index.html","a8bfeddfd2ba4be206f628fa86b761ec"],["categories/Java进阶/index.html","0933bf728960cebb2b2cd08dae346999"],["categories/SpringMVC/index.html","404e1c4d5e6189c5e3f1e32772751dc8"],["categories/index.html","e9533f060e4c22a71527a42789417944"],["categories/工具/index.html","d21e9e2e74711c6e84dcaf0bd86af1c1"],["categories/数据库/index.html","b0a4f74a4e399a3c8c8a3dbae627fb9b"],["categories/框架/index.html","2a86257893e46a7df083e028d132ab31"],["categories/深入理解JVM/index.html","db5b410ee90f3e61d19af2b17e657190"],["css/iconfont.min.css","b60103f18f3763b82d012ba98ffa7e31"],["css/index.css","7f035946b8721347d7ef2604ca828d7d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/cartoon/index.html","95d3a71a23f109f6e46593bf39b6686e"],["gallery/food/index.html","97ef3258594aef231c72cc618b8b072c"],["gallery/index.html","86919a2fbf7847f945905bb1bd2ace7a"],["gallery/movies/index.html","84663908d49d10760f4236b1e244bee9"],["gallery/wallpaper/index.html","d1a209f0a33d8eefa7922e2089bbda5c"],["images/alipay.png","33818e93eaf8850cc391bcae07c49645"],["images/avatar.png","c996addd49ecd534e879f8606fd8c060"],["images/background.png","dc1e73d35a17993ada9174d1b43c1e6d"],["images/link/bilibili.png","c9d397126f124ded66e1835808852961"],["images/link/imagine.png","94943587ef801591f8b34bc0818bca8f"],["images/link/weibo.png","10595f45c676e0fc4a948fc5ba5996da"],["images/link/zhy.png","78308a0f82318c7e19916b7c7a63c2de"],["images/logo.png","d743f62f3663cb89ecf6095affad6168"],["images/wechat.png","25daaf6153fea673518447cc54c78d07"],["images/ypyLogo.png","edbe63a7c77c740543c2b21ad0064561"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","e1c71054411c4afb86e59ddc1b9a399b"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","7c98d6274d53fc7a2116571a45c8b284"],["message/index.html","e269dc9b5d71fc66e5a4efd3e9137a81"],["movies/index.html","7326b7c06057afea4a679b524aef102e"],["music/index.html","3d0e6b1aa78f0ed0462240ab483e0bd1"],["page/2/index.html","2e450ab2bc538523aef9fadffbdb6c62"],["tags/JPA/index.html","a8618610f7379227981c776bb93e63db"],["tags/JVM/index.html","881ac71b83b2b01dcf574adbbb5c5461"],["tags/Java基础/index.html","ad46676dba3513be138aa95003efffbd"],["tags/Markdown/index.html","8f1dff95776f69d1bcac955cc4d3a863"],["tags/Spring/index.html","7d0b5a8efcf7fbb6bde6ad1f62c348ee"],["tags/index.html","5c3c31329f0cc0b638fd9d380c5294fc"],["tags/优化/index.html","1096c415de3f04a42bb3950d1417959a"],["tags/内外部类/index.html","904fcda9e384e60bf62b84e69387bdc1"],["tags/异步/index.html","31f822181b8dad05d025d09855fd409f"],["tags/数据库/index.html","132b9bbf068285cd3464983530009356"],["tags/消息队列/index.html","aa3b1493b6effa149421ff8191394ffb"],["tags/类/index.html","dc78400cde16a1ddf3fc11f8b3d960d9"],["tags/面试/index.html","bd38f6887c0e31ceb609043abd9515ca"],["tellme/index.html","a93724b2b977bf1289064ed2e67a2afd"]];
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







