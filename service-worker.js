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

var precacheConfig = [["2020/07/12/自动拆装箱/content1.png","f2f60722e7146176c97bd3bdef33221a"],["2020/07/12/自动拆装箱/content2.png","28262be75fa000230ca350e4ce4723b0"],["2020/07/12/自动拆装箱/content3.png","84dde71fb426550420f87427cafd974c"],["2020/07/12/自动拆装箱/content4.png","7de9007e645b929708a8e35848e69d07"],["2020/07/12/自动拆装箱/content6.png","c3f4daac6559c24d72d079bc54428176"],["2020/07/12/自动拆装箱/content7.png","d3eb598c240370215a9272f8a072ced1"],["2020/07/12/自动拆装箱/index.html","da5a5dce19be543a03bb0ce1838d923c"],["2020/07/21/内外部类互访/content1.png","651d814f2f94949f96d7563208ad172e"],["2020/07/21/内外部类互访/content2.png","f1dc51536bc15e6576d364f922978f75"],["2020/07/21/内外部类互访/content3.png","e2b9851229116a34bd95668f1e864a51"],["2020/07/21/内外部类互访/content4.png","c4b6ae824588ae5d7a7eec3f9c56371f"],["2020/07/21/内外部类互访/content5.png","0a18f534c86043e3831eca6c7a63c910"],["2020/07/21/内外部类互访/content6.png","cc128b4c9bcb7a37958eeba8b77446ab"],["2020/07/21/内外部类互访/content7.png","355cdbbae0c9778f4aff5d52a88e6749"],["2020/07/21/内外部类互访/content8.png","33a9d7dccdba9e17812f20d48b321ab3"],["2020/07/21/内外部类互访/index.html","eda73537aa90cc015e29f4dfb772ead9"],["2020/08/03/Markdown小结/index.html","9f0cb11057efdba541d59e735c5d5a76"],["2020/08/04/消息队列/content1.png","644d1fab093de330fb48be8d1749b337"],["2020/08/04/消息队列/content2.png","f2e728da598cc25f821da86667679a87"],["2020/08/04/消息队列/content3.png","49a23ac74c3188c57305bd93923ab43d"],["2020/08/04/消息队列/content4.png","6196b73905b8c68ccf6f2f00b9104dcf"],["2020/08/04/消息队列/content5.png","213ecc7f7fadaa22ce3f0d81ffb9039a"],["2020/08/04/消息队列/content6.png","d1f9803c0f7b6ecf7e21e5827c5fad2c"],["2020/08/04/消息队列/content7.png","c1df75658ddd0523cb10692475226529"],["2020/08/04/消息队列/index.html","4b49b874e9520a1ff7ea8b47cbf3fae5"],["2020/08/12/JPA/index.html","890666d8ace1627b4cf1f176c0707ca1"],["2020/08/12/唯一索引和非唯一索引/index.html","3e9f6be656953870fd4d1b2be1a4a5d6"],["2020/08/20/类的加载方式/content1.png","3e91fd09ba14a2fac26533e25807f0ab"],["2020/08/20/类的加载方式/content2.png","6ecb33f9d40fa2ef3bf6c6599125f453"],["2020/08/20/类的加载方式/content3.png","233c38e6bbf35b875230d6b100a712b6"],["2020/08/20/类的加载方式/content4.png","9ccd554f6172c8ae2acf281e5cd9e4f7"],["2020/08/20/类的加载方式/content5.png","eee4abd8d616d00a9f0b0317bfde3847"],["2020/08/20/类的加载方式/content6.png","50fb7fb357a9fb09fa41834c8575f90c"],["2020/08/20/类的加载方式/index.html","b7e0aecb6270cd5d538eead4e654a4f4"],["2020/08/20/类的加载过程/content1.png","aedcc7ed4b946efd72a0d501fafc01f6"],["2020/08/20/类的加载过程/content2.png","91e6de9f3d82526842901397f754691c"],["2020/08/20/类的加载过程/content3.png","e76f8e7a1c7be45dec7974f45a7b432d"],["2020/08/20/类的加载过程/content4.png","eb8931e33132a37deb0dda79f2309106"],["2020/08/20/类的加载过程/index.html","ef44ea15e99e66b537e7ab54b49a4a2d"],["2020/08/26/Spring基础/content1.png","6386bcde23f6906e3af2de1e85b3de50"],["2020/08/26/Spring基础/content10.png","d7b743842856fe8b74ec0622d029cab1"],["2020/08/26/Spring基础/content11.png","d16e96f9f9e2ae270f4f900a7a88ca74"],["2020/08/26/Spring基础/content12.png","7a95e47025343ad2cb428b6bc951ea44"],["2020/08/26/Spring基础/content13.png","0290aaba7f9b0debd9ff2f5130c6b7d8"],["2020/08/26/Spring基础/content14.png","1c72256177821bdbd8f4141837f8085d"],["2020/08/26/Spring基础/content15.png","1ff63ca1c7c6d9a16dcd52207d1d128a"],["2020/08/26/Spring基础/content16.png","a75edb523e249f31d0ea070217234c24"],["2020/08/26/Spring基础/content17.png","3e29b243f677284d399941eaf7124ec8"],["2020/08/26/Spring基础/content18.png","56703358a8648526c7287f4f936e4ebb"],["2020/08/26/Spring基础/content19.png","039bbc89a4e55301d3319dbe159fdfff"],["2020/08/26/Spring基础/content2.png","7b747d9b3d9d04980799c725d1d87f93"],["2020/08/26/Spring基础/content20.png","ceeafd489d7165289bea2028023e8221"],["2020/08/26/Spring基础/content21.png","ab232ae33e57e5d4d856bee4e41aff1f"],["2020/08/26/Spring基础/content22.png","1d3d8f8481250b7b971283a42f3ed2d4"],["2020/08/26/Spring基础/content23.png","dd3d0ae0e7d200c19200d1f950e72c84"],["2020/08/26/Spring基础/content24.png","bf72e090719048665e2b73de66f26020"],["2020/08/26/Spring基础/content25.png","378d428d97636c87909a8696541e5d4c"],["2020/08/26/Spring基础/content26.png","31a23fa6e007f43a443ea74cb2af17e2"],["2020/08/26/Spring基础/content27.png","c3f99e2f95f404c536ccd950b4418bde"],["2020/08/26/Spring基础/content28.png","4fcd8db3a1181b7f43b7b97a5e9e7d2c"],["2020/08/26/Spring基础/content29.png","adaee216603d093886ba17fc1fc5fe4d"],["2020/08/26/Spring基础/content3.png","f38d3d3cf743265b708454145664b820"],["2020/08/26/Spring基础/content30.png","b38b62296d6814af20e8e0d72e794b46"],["2020/08/26/Spring基础/content31.png","914496eb2c6e345229df874526f08460"],["2020/08/26/Spring基础/content32.png","5ec51dbd5c1bdade16cf7448a1f431b9"],["2020/08/26/Spring基础/content33.png","a3712e53428fd783ffb76a11916d06ec"],["2020/08/26/Spring基础/content34.png","2b15e61d52c0738f1517047646832cec"],["2020/08/26/Spring基础/content35.png","e134d4ebd4555697dec544d5da8d798a"],["2020/08/26/Spring基础/content36.png","a9b620d0b09cc9a54cb88375954e54d4"],["2020/08/26/Spring基础/content4.png","cb8288ae35fd8555f3ce06c8722f2a22"],["2020/08/26/Spring基础/content5.png","b58e58471ca2325a5816be8661bb27ba"],["2020/08/26/Spring基础/content6.png","31ee8e091f3ea236b8c4d96f452dd3d8"],["2020/08/26/Spring基础/content7.png","952def77bc304a752360aabd72279cbd"],["2020/08/26/Spring基础/content8.png","d303ac14aab26e51e1d90c419aca4e4d"],["2020/08/26/Spring基础/content9.png","c9014cd830bad9b8ea97bf2555f61927"],["2020/08/26/Spring基础/index.html","db439eae44b54a16cca24562303a1441"],["2020/09/08/Gulp压缩和PWA/index.html","b4e5e605ffff1c156de48c70fe03b8cf"],["2020/09/27/深入理解JVM--1.走近Java/index.html","4af52193c57f9c801321cbc6c8acee3b"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content1.png","81f4bb398e70f419507302bf6dba938f"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content2.png","092d9a50720be5023e702fb55e4b5479"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/content3.png","3aa1ee5d1fd1b1af9e0e03dd54d81909"],["2020/09/28/深入理解JVM--2.内存区域与内存溢出/index.html","4a78d0af3cfc22ed80656422a345c3d1"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content1.png","8a16925d54ec6c3b6106a1f9d4df93b8"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content2.png","bebdf39b14703eb6dfe623163edabd17"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content3.png","201319c6d6f55d37781098c4b9dee3df"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/content4.png","a3c49c76f05f7d9273b02c7759840d6f"],["2020/10/09/深入理解JVM--3.垃圾收集器与内存分配策略/index.html","4b555fcb4349fdd31ab261242faacd86"],["2020/11/30/SpringMVC/content1.png","383899d06be40d4440b93d74ebab948f"],["2020/11/30/SpringMVC/content2.png","8674b9c96500344a184ee7ba6fe1ce1d"],["2020/11/30/SpringMVC/content3.png","789bbb728e845c36bcc7736823dc74d4"],["2020/11/30/SpringMVC/content4.png","cb3e7ae4f55a11e26f71e19a38afd2bd"],["2020/11/30/SpringMVC/index.html","ae39c5ce6b64a05a5fa67b75d414a2c2"],["2020/12/16/CompletableFuture异步任务/content1.png","f035e5b4e389a2ba80f9caf12ceef8fa"],["2020/12/16/CompletableFuture异步任务/content10.png","ce411f0f73083e4b27350a032a854b28"],["2020/12/16/CompletableFuture异步任务/content11.png","5b2cdcdc8f1591e52cde92e72925f3ea"],["2020/12/16/CompletableFuture异步任务/content12.png","3e464b38b4e1d5e0f7d6884976e7e68d"],["2020/12/16/CompletableFuture异步任务/content13.png","4327fe4955e2cc0cb9cf9b63655339cd"],["2020/12/16/CompletableFuture异步任务/content14.png","c8589ad1aac55e379378d951f4bc9a74"],["2020/12/16/CompletableFuture异步任务/content15.png","560364a0eacc9321c5c6aabf4e2bd8bb"],["2020/12/16/CompletableFuture异步任务/content16.png","72bb6c56930e7bbd17497d40e142836d"],["2020/12/16/CompletableFuture异步任务/content17.png","dfcbb3dc1a9ba3168e60ff37a6a07712"],["2020/12/16/CompletableFuture异步任务/content2.png","6cba222520ffd33ddc4df62755703106"],["2020/12/16/CompletableFuture异步任务/content3.png","4432cf6c288997938b162751708136f1"],["2020/12/16/CompletableFuture异步任务/content4.png","f72272d254af08bb45552806c815923e"],["2020/12/16/CompletableFuture异步任务/content5.png","8d10f89d8dfe975106ffa74025810c0f"],["2020/12/16/CompletableFuture异步任务/content6.png","5ab9f97688444db084e568c71ede68d5"],["2020/12/16/CompletableFuture异步任务/content7.png","7f536d285499ae62711479e7f73adebe"],["2020/12/16/CompletableFuture异步任务/content8.png","1eeae2504a18b27c7e8d3f64a9b922a1"],["2020/12/16/CompletableFuture异步任务/content9.png","f4e981f589f51e542fd10fd1782dee4d"],["2020/12/16/CompletableFuture异步任务/index.html","2e057d1b893caad0d1d04245dc0ead57"],["404.html","99c649c0cc0ad537ca649076cace86b3"],["about/index.html","0ca86c7972eddac387fe28422bf66b19"],["archives/2020/07/index.html","8ac485529d54d3682e7309c81ab1b682"],["archives/2020/08/index.html","ab633e1fe75d7a8430972f20146c3e0c"],["archives/2020/09/index.html","07692992fc2e8fdf5aa0f327f72c5557"],["archives/2020/10/index.html","c54e25a64708f223bdeefd459e10269e"],["archives/2020/11/index.html","427711db814735867caf0a73508cdb14"],["archives/2020/12/index.html","7528635aad7ba21d37b59c063c16428e"],["archives/2020/index.html","d2514f9de3fbfe8fbb1c2d0623eb541d"],["archives/2020/page/2/index.html","7ac9367363a32e13982478f8d1717ffe"],["archives/index.html","2e0fbd8e6d56d53342b2fdc6ae96ec7a"],["archives/page/2/index.html","b22f22b41f178b9623df2ceb88549462"],["artitalk/index.html","698727c108332da405e0c04e1640d36c"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["categories/Hexo/index.html","a8bf3e098873fa99494feaa49bfc561f"],["categories/Java/index.html","23fb7ca524f8b07c9f46848c4146191a"],["categories/Java进阶/index.html","2f54848d1c88e10e3577e0a6ca927103"],["categories/SpringMVC/index.html","580e914ecc6c193d8b968e0064d31ef0"],["categories/index.html","bfc13837411bfdc2746e86d73c9724c3"],["categories/工具/index.html","3a442f2605986bc7daa7f118d5c1e599"],["categories/数据库/index.html","a581ae4ea4ac92aa365222a166d7e9a3"],["categories/框架/index.html","c43043ae63253502c5cc827527e76a6a"],["categories/深入理解JVM/index.html","645c1bc9d1217afd9ff0aad5cca0021f"],["css/iconfont.min.css","b60103f18f3763b82d012ba98ffa7e31"],["css/index.css","7f035946b8721347d7ef2604ca828d7d"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/cartoon/index.html","4d291ed047a127195839ecf145de07c1"],["gallery/food/index.html","c2e9e61f5ee560c16f508319d1bcbbe5"],["gallery/index.html","f828827266b5b9cf7d63539565e5e943"],["gallery/movies/index.html","83ba1afd9819cc4c127ea4894ffede0e"],["gallery/wallpaper/index.html","e9625a4b7c8e2b2306a693a8365fdf55"],["images/alipay.png","33818e93eaf8850cc391bcae07c49645"],["images/avatar.png","c996addd49ecd534e879f8606fd8c060"],["images/background.png","dc1e73d35a17993ada9174d1b43c1e6d"],["images/link/bilibili.png","c9d397126f124ded66e1835808852961"],["images/link/imagine.png","94943587ef801591f8b34bc0818bca8f"],["images/link/weibo.png","10595f45c676e0fc4a948fc5ba5996da"],["images/link/zhy.png","78308a0f82318c7e19916b7c7a63c2de"],["images/logo.png","d743f62f3663cb89ecf6095affad6168"],["images/wechat.png","25daaf6153fea673518447cc54c78d07"],["images/ypyLogo.png","edbe63a7c77c740543c2b21ad0064561"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","9e5e24dcefc543b7addbcb87a070698c"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","62f274af96063ce965265df489750f92"],["message/index.html","a6590f54d67aa69b1ccd1f140cf8e1e1"],["movies/index.html","7326b7c06057afea4a679b524aef102e"],["music/index.html","e248bf593b5fdba0ed77fe5aa694e547"],["page/2/index.html","6a89cc822f33f554dd9f6228fc6006ca"],["tags/JPA/index.html","94054e8effb8b479e8b2e388cc8183d1"],["tags/JVM/index.html","14f8b2f78b740d65c5a016a1161e07f2"],["tags/Java基础/index.html","805ddadb411b1aeb0109d73ae1136941"],["tags/Markdown/index.html","a5fb4dabb853f55c8b5aebefa428e2c7"],["tags/Spring/index.html","faa12e56428ddbe7834c81b8265fbad3"],["tags/index.html","396e9b46269758e863f51bf8622866d1"],["tags/优化/index.html","cfa41f6057d79b72e13599d586d5c772"],["tags/内外部类/index.html","144d374975463c1851563c393bafd262"],["tags/异步/index.html","a7c9beba1f6aa2bdd4cf34a839a70fc3"],["tags/数据库/index.html","abd19f59fd12410490326e179ce04fc2"],["tags/消息队列/index.html","f94cb8fc41efe6d14eb51586f62ba648"],["tags/类/index.html","3a90add509e04d2afc0c80b41acd2197"],["tags/面试/index.html","c08e58ea1c196c0575c7983a53c3475f"],["tellme/index.html","a93724b2b977bf1289064ed2e67a2afd"]];
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







