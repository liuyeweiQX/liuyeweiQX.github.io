const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "hexoBlog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"bbe8d78e36aa419a70604614855e321f","url":"./2020/07/12/自动拆装箱/index.html"},{"revision":"a6537bf4178c95fd7d2ef1bf8dd73088","url":"./2020/07/21/内外部类互访/index.html"},{"revision":"3f2076b930b209aec26931d65a047c23","url":"./2020/08/03/Markdown小结/index.html"},{"revision":"07b370c07bec495d79dc67a3108ac4f9","url":"./2020/08/04/消息队列/index.html"},{"revision":"f9bb8ebdbf20ca945f9fb9d0f1e6f5f7","url":"./2020/08/12/JPA/index.html"},{"revision":"502c223428b8a494d8e22be409023e36","url":"./2020/08/12/唯一索引和非唯一索引/index.html"},{"revision":"8705783979d0bd350cb1dab3f081e4b2","url":"./2020/08/20/类的加载方式/index.html"},{"revision":"4e77e2d667f5b697f4a5e86853114702","url":"./2020/08/20/类的加载过程/index.html"},{"revision":"6e1fbb9e5e3611a3e142f09fecff339f","url":"./2020/08/26/Spring基础/index.html"},{"revision":"4abc1e7bfcfe1ce8275e12cd462fdfda","url":"./404.html"},{"revision":"8eb5e6c7468f2572af6979519fc4c740","url":"./about/index.html"},{"revision":"f9161eb1b8a73aac6cf00d32cf107361","url":"./archives/2020/07/index.html"},{"revision":"b1e534dd1b3e1f1f9ca9f0d83f972131","url":"./archives/2020/08/index.html"},{"revision":"ebbd3f88b95622381eb8eb083482b645","url":"./archives/2020/index.html"},{"revision":"7cc420b1255138b0aa36a5296795de97","url":"./archives/index.html"},{"revision":"50d1a1ee111bbdfadc16af60bc26affe","url":"./categories/index.html"},{"revision":"771928e149fafbf9c81eccfb7bc34970","url":"./categories/Java/index.html"},{"revision":"0862f87384f0b6f95db767fda92c1157","url":"./categories/Java进阶/index.html"},{"revision":"fd6554e03e99378320acfb6d9d9fe53e","url":"./categories/工具/index.html"},{"revision":"1cb2243cbab066b748f43475b10a8775","url":"./categories/数据库/index.html"},{"revision":"098801fb7b8df1522cbefd83bc979a30","url":"./categories/框架/index.html"},{"revision":"b60103f18f3763b82d012ba98ffa7e31","url":"./css/iconfont.min.css"},{"revision":"da501ca02e2eb60d5073b457fafc2ec4","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"43033dd95f84c0ffd3487a574253f876","url":"./gallery/cartoon/index.html"},{"revision":"bf8f86d6fd74e106e56afb4565840893","url":"./gallery/food/index.html"},{"revision":"b0b2c694d59fb6a3383d1d25ea1d9f6c","url":"./gallery/index.html"},{"revision":"a08923b879432b89bd986e3c382f3457","url":"./gallery/movies/index.html"},{"revision":"5812aa715e687501d6dd769dd7ad58b3","url":"./gallery/wallpaper/index.html"},{"revision":"9e0349a951ad6cc0793e6933aa8f0bcd","url":"./index.html"},{"revision":"4898030387012f8af71563ef8353433a","url":"./js/main.js"},{"revision":"c9af02da2fc1f7d634843f61536369d1","url":"./js/search/algolia.js"},{"revision":"c33665b06edc70004a016ba9db4205b4","url":"./js/search/local-search.js"},{"revision":"e8455f75769585811cd6b3220787d08e","url":"./js/third-party/activate-power-mode.js"},{"revision":"6bebed368a1bbcb630dd146cefb103b7","url":"./js/third-party/canvas-nest.js"},{"revision":"4ca518354a167db9fe0869c0982ff215","url":"./js/third-party/canvas-ribbon.js"},{"revision":"c2420dfec66aa5bad663e6c365a129c8","url":"./js/third-party/click_heart.js"},{"revision":"22f4c82da4faed04c79e61fcbbdf675c","url":"./js/third-party/ClickShowText.js"},{"revision":"64d1e1837ad1a585888f5d1e16c71f77","url":"./js/third-party/fireworks.js"},{"revision":"5c8c9ff4bb9bed49e333387a54eae9be","url":"./js/third-party/piao.js"},{"revision":"bd869d5fd54e2fe1f1eeee7c46fa46bc","url":"./js/tw_cn.js"},{"revision":"f91ea1a86a5c45e344a24fb437642f36","url":"./js/utils.js"},{"revision":"5d856e6d6cb526b27b50fca0e4bbc46f","url":"./link/index.html"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./manifest.json"},{"revision":"a715ea007d7535f8dd02e77e0c3dfbb0","url":"./message/index.html"},{"revision":"e5b26c5017e2b410641394df4ed92778","url":"./movies/index.html"},{"revision":"dce922035148f40423a096598051f482","url":"./music/index.html"},{"revision":"7ae87fea5a5b7d11594f12c7317b654b","url":"./service-worker.js"},{"revision":"b05de761bfac2cca255694fb7b133967","url":"./tags/index.html"},{"revision":"376d1ba2a37379b6739a19bf3c873cf4","url":"./tags/Java基础/index.html"},{"revision":"ee774e474c8a7792f3f437539b9fa2c5","url":"./tags/JPA/index.html"},{"revision":"af82316dc8bf27b1ef1a0e40068993c3","url":"./tags/Markdown/index.html"},{"revision":"df2b6c3539a1a7a9fa7ffa57180989c9","url":"./tags/Spring/index.html"},{"revision":"0c9584bcd1cd852fbc6d732cf9cea785","url":"./tags/内外部类/index.html"},{"revision":"378a380f34baaab68bab1ea6d15d429a","url":"./tags/数据库/index.html"},{"revision":"4e7fb805ef85d295880c02f61ab922e4","url":"./tags/消息队列/index.html"},{"revision":"11bb55aa17440ae4717a9dec18f77110","url":"./tags/类/index.html"},{"revision":"d13d179d90ecfec13e8d286f42a2976c","url":"./tellme/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();