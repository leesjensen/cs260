(function(){"use strict";var e={6779:function(e,t,n){var o=n(8935),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("😃 PWA Demo")]),n("div",{staticClass:"chooser"},[n("label",{staticClass:"button",attrs:{for:"file-upload"}},[e._v("Capture")]),n("input",{attrs:{id:"file-upload",type:"file",accept:"image/x-png,image/jpeg,image/gif"},on:{change:e.captureImage}}),n("div",{class:["button",{disabled:!e.image}],on:{click:e.storeImage}},[e._v(" Save ")]),n("div",{class:["button",{disabled:!e.image}],on:{click:e.deleteImage}},[e._v(" Delete ")])]),n("div",{staticClass:"img-viewer"},[n("img",{attrs:{src:e.image,id:"preview"}})]),n("BouncyBall"),n("DesktopInstall")],1)},r=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bouncing-ball"},[n("div",{attrs:{id:"ball"}}),n("div",{attrs:{id:"ground"}}),n("div",{attrs:{id:"shadow"}})])}],l={name:"BouncyBall"},c=l,u=n(1001),d=(0,u.Z)(c,a,s,!1,null,"0272e188",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"dialog"},[n("p",[e._v(" Install this application on your home screen for quick and easy access. ")]),e._m(0),n("div",{staticClass:"button",on:{click:function(t){e.display=!1}}},[e._v("Close")])]):e._e()},g=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v(" Just tap "),o("img",{attrs:{src:n(7600)}}),e._v(" then 'Add to Home Screen' ")])}],v={name:"DesktopInstall",data:function(){return{display:!0}},computed:{show(){return["iPhone","iPad","iPod"].includes(window.navigator.platform)&&!window.navigator.standalone&&this.display}}},m=v,h=(0,u.Z)(m,p,g,!1,null,"632d61d8",null),w=h.exports,b={name:"App",components:{BouncyBall:f,DesktopInstall:w},data:function(){return{image:"",store:window.localStorage}},created:function(){this.readImage()},methods:{captureImage(){const e=document.querySelector("#file-upload");if(e?.files?.length>0){const t=new FileReader;t.readAsDataURL(e.files[0]),t.onload=()=>{this.image=t.result}}},storeImage(){this.image&&this.store.setItem("image",this.image)},readImage(){this.image=this.store.getItem("image")},deleteImage(){this.store.removeItem("image"),this.image=""}}},_=b,y=(0,u.Z)(_,i,r,!1,null,null,null),k=y.exports,I=n(563);(0,I.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),o.Z.config.productionTip=!1,new o.Z({render:e=>e(k)}).$mount("#app")},7600:function(e,t,n){e.exports=n.p+"img/ios-action.3c13017a.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],r=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},o=self["webpackChunkvue_pwa"]=self["webpackChunkvue_pwa"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6779)}));o=n.O(o)})();
//# sourceMappingURL=app.08187049.js.map