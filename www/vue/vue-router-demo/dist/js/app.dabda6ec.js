(function(){"use strict";var t={8301:function(t,e,n){n.d(e,{Z:function(){return l}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{background:t.color}},[t._t("default",(function(){return[n("h1",[t._v(t._s(t.msg))])]}))],2)},o=[],u={name:"OutputBox",props:{color:{type:String,default:"#525d75"},msg:String}},s=u,i=n(1001),a=(0,i.Z)(s,r,o,!1,null,"315294e7",null),l=a.exports},8902:function(t,e,n){var r=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[t._v("User: "+t._s(t.auth.user))]),n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/info/company"}},[t._v("Company")]),t._v(" | "),n("router-link",{attrs:{to:"/info/product"}},[t._v("Product")]),t._v(" | "),n("router-link",{attrs:{to:{name:"posts",params:{userId:t.auth.user}}}},[t._v(" User ")]),t._v(" | "),n("router-link",{attrs:{to:"/bad/path"}},[t._v("404")])],1),n("router-view"),n("pre",[t._v(t._s(t.routeInfo))])],1)},u=[],s=n(3796);class i{constructor(){this._user=i.loggedOutUser,this._authorized=!1}get authorized(){return this._authorized}get user(){return this._user}set user(t){this._authorized=!0,this._user=t}}(0,s.Z)(i,"loggedOutUser","logged out");const a=new i;var l=a,c={name:"App",data:function(){return{auth:l}},computed:{routeInfo(){const t=this.$route,e={name:t.name,fullPath:t.fullPath,params:t.params,matched:t.matched.map((t=>({path:t.path,component:t.components.default.name})))};return JSON.stringify(e,void 0,2)}}},p=c,f=n(1001),d=(0,f.Z)(p,o,u,!1,null,null,null),m=d.exports,v=n(2809),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"login"},[n("h2",[t._v("Login")]),n("div",[n("label",[t._v(" User ID: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],attrs:{type:"edit",placeholder:t.userId},domProps:{value:t.userId},on:{input:function(e){e.target.composing||(t.userId=e.target.value)}}})]),n("button",{staticClass:"submit-btn",attrs:{disabled:!t.userId},on:{click:t.submit}},[t._v(" Enter ")])])])])},g=[],_={name:"LoginView",data:function(){return{userId:""}},methods:{submit(){console.log(this.userId),l.user=this.userId,et.push(`/user/${l.user}/posts`)}}},b=_,y=(0,f.Z)(b,h,g,!1,null,"1a221731",null),O=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("OutputBox",{attrs:{color:"#096b09",msg:t.$route.params.category+" info"}})],1)},x=[],k=n(8301),I={name:"InfoView",components:{OutputBox:k.Z}},Z=I,E=(0,f.Z)(Z,w,x,!1,null,null,null),$=E.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("OutputBox",{attrs:{color:"#0f5694",msg:"User "+t.$route.params.userId}}),n("nav",[n("router-link",{attrs:{to:{name:"posts"}}},[t._v("Posts")]),t._v(" | "),n("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")])],1),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},j=[],B={name:"UserView",props:["userId"],beforeRouteEnter:(t,e,n)=>{l.authorized?n():n("/login")},components:{OutputBox:k.Z}},C=B,U=(0,f.Z)(C,P,j,!1,null,"74002fae",null),S=U.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("OutputBox",{attrs:{color:"#8b1877",msg:t.userId+" posts"}})],1)},N=[],V={name:"UserPostsView",props:["userId"],components:{OutputBox:k.Z}},z=V,A=(0,f.Z)(z,T,N,!1,null,null,null),F=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("OutputBox",{attrs:{color:"#188b77",msg:t.$route.params.userId+" profile"}})],1)},M=[],q={name:"UserProfileView",props:["userId"],components:{OutputBox:k.Z}},D=q,H=(0,f.Z)(D,L,M,!1,null,null,null),J=H.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"not-found"},[n("OutputBox",{attrs:{color:"#910b0b",msg:"404: "+t.$route.fullPath}})],1)},G=[],K={name:"NotFoundView",components:{OutputBox:k.Z}},Q=K,W=(0,f.Z)(Q,R,G,!1,null,null,null),X=W.exports;r.Z.use(v.Z);const Y=[{path:"/",component:()=>n.e(181).then(n.bind(n,9181))},{path:"/info/:category",component:$},{path:"/login",component:O},{path:"/user/:userId",name:"user",props:!0,component:S,children:[{path:"profile",name:"profile",props:!0,component:J},{path:"posts",name:"posts",props:!0,component:F}]},{path:"*",name:"notFound",component:X}],tt=new v.Z({mode:"history",base:window.location.pathname.replace(/\/+$/,""),routes:Y});var et=tt;new r.Z({router:et,render:t=>t(m)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,u){if(!r){var s=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],u=t[c][2];for(var i=!0,a=0;a<r.length;a++)(!1&u||s>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(i=!1,u<s&&(s=u));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[r,o,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".e25b2daa.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue-router-demo:";n.l=function(r,o,u,s){if(t[r])t[r].push(o);else{var i,a;if(void 0!==u)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==e+u){i=p;break}}i||(a=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+u),i.src=r),t[r]=[o];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),a&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=u);var s=n.p+n.u(e),i=new Error,a=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+s+")",i.name="ChunkLoadError",i.type=u,i.request=s,o[1](i)}};n.l(s,a,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,s=r[0],i=r[1],a=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(a)var c=a(n)}for(e&&e(r);l<s.length;l++)u=s[l],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(c)},r=self["webpackChunkvue_router_demo"]=self["webpackChunkvue_router_demo"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8902)}));r=n.O(r)})();
//# sourceMappingURL=app.dabda6ec.js.map