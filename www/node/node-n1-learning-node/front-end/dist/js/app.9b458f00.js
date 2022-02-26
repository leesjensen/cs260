(function(e){function t(t){for(var n,i,c=t[0],u=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"2e3d":function(e,t,r){"use strict";r("d4ef")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("h1",[e._v("Ticket System")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/create"}},[e._v("New Ticket")]),e._v(" | ")],1)]),r("div",{staticClass:"content"},[r("router-view")],1)])},o=[],i=(r("034f"),r("2877")),c={},u=Object(i["a"])(c,a,o,!1,null,null,null),s=u.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Current Tickets")]),e._l(e.tickets,(function(t){return r("div",{key:t.id},[r("hr"),r("div",{staticClass:"ticket"},[r("div",{staticClass:"problem"},[r("p",[e._v(e._s(t.problem))]),r("p",[r("i",[e._v("-- "+e._s(t.name))])])]),r("button",{on:{click:function(r){return e.deleteTicket(t)}}},[e._v("Delete")])])])}))],2)},f=[],d=r("1da1"),m=(r("96cf"),r("bc3a")),v=r.n(m),h={name:"home",data:function(){return{tickets:[]}},created:function(){this.getTickets()},methods:{getTickets:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/tickets");case 3:return r=t.sent,e.tickets=r.data,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},deleteTicket:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.delete("/api/tickets/"+e.id);case 3:return t.getTickets(),r.abrupt("return",!0);case 7:r.prev=7,r.t0=r["catch"](0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}},b=h,g=Object(i["a"])(b,p,f,!1,null,null,null),k=g.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Create a Ticket")]),e.creating?r("form",{on:{submit:function(t){return t.preventDefault(),e.addTicket(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),r("p"),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.problem,expression:"problem"}],domProps:{value:e.problem},on:{input:function(t){t.target.composing||(e.problem=t.target.value)}}}),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Submit")])]):r("div",[r("p",[e._v("Thank you for submitting a ticket! We will respond shortly.")]),r("p",[r("a",{attrs:{href:"#"},on:{click:e.toggleForm}},[e._v("Submit another ticket")])])])])},w=[],y=(r("b0c0"),{name:"create",data:function(){return{creating:!0,name:"",problem:""}},methods:{toggleForm:function(){this.creating=!this.creating},addTicket:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.post("/api/tickets",{name:e.name,problem:e.problem});case 3:return e.name="",e.problem="",e.creating=!1,t.abrupt("return",!0);case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),x=y,O=(r("2e3d"),Object(i["a"])(x,_,w,!1,null,"16fa0826",null)),j=O.exports;n["a"].use(l["a"]);var T=[{path:"/",name:"Home",component:k},{path:"/create",name:"create",component:j}],P=new l["a"]({mode:"history",base:"",routes:T}),S=P;n["a"].config.productionTip=!1,new n["a"]({router:S,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,r){},d4ef:function(e,t,r){}});
//# sourceMappingURL=app.9b458f00.js.map