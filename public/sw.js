if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d07b51c3675ac0a523249af311ba1ef1"},{url:"/_next/static/cag5vwK2tNqjsQYi2ZVjd/_buildManifest.js",revision:"059b36412c82c2d4f0a08b7b95c2a9ad"},{url:"/_next/static/cag5vwK2tNqjsQYi2ZVjd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/17-7ddd93fa2fb26082.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/219-db7eb0cad6ff258b.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/513.1bf2d9cd7c8b7385.js",revision:"1bf2d9cd7c8b7385"},{url:"/_next/static/chunks/app/head-fbf0b755a1944d43.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/app/layout-11e919b029374410.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/app/page-2a8d884883bee649.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/main-4d17261e54598957.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/main-app-0b322515eee1fe5e.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/pages/_app-5841ab2cb3aa228d.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/pages/_error-91a854d9c9cfa29b.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/pages/fallback-835dd27fb62f7c0f.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-3b47ecde61184b46.js",revision:"cag5vwK2tNqjsQYi2ZVjd"},{url:"/_next/static/css/e16088e711b62c86.css",revision:"e16088e711b62c86"},{url:"/_next/static/media/argentina.69a2958d.png",revision:"35770c364cf9294b253c32df27c36855"},{url:"/_next/static/media/calculator.3fa53202.png",revision:"f3821e682cc906d61514619a1eef4a7e"},{url:"/_next/static/media/chile.77a6cd95.png",revision:"0b2754ecb2b3c40b26d2b7351d4de472"},{url:"/_next/static/media/down-arrow.6263fb4b.png",revision:"9b229fd62566627057a82f5aea299ecb"},{url:"/argchile.png",revision:"e39602cb069fc757b7303a3f33e6308e"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/manifest.json",revision:"bf8c4ac468c5be353085a98c04ed04dd"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));