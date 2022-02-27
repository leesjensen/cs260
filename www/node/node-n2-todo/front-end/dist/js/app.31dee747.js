(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],p=0,m=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(m.length)m.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("034f"),n("2877")),a={},u=Object(i["a"])(a,o,c,!1,null,null,null),s=u.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("A List of Things To Do")]),n("p",{directives:[{name:"show",rawName:"v-show",value:0===e.activeItems.length,expression:"activeItems.length === 0"}]},[e._v("You are done with all your tasks! Good job!")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addItem(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Add")])]),n("div",{staticClass:"controls"},[n("button",{on:{click:function(t){return e.showAll()}}},[e._v("Show All")]),n("button",{on:{click:function(t){return e.showActive()}}},[e._v("Show Active")]),n("button",{on:{click:function(t){return e.showCompleted()}}},[e._v("Show Completed")]),n("button",{on:{click:function(t){return e.deleteCompleted()}}},[e._v("Delete Completed")])]),n("ul",e._l(e.filteredItems,(function(t){return n("li",{key:t.id},[n("label",{class:{item:!0,completed:t.completed}},[e._v(" "+e._s(t.text)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"item.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{click:function(n){return e.completeItem(t)},change:function(n){var r=t.completed,o=n.target,c=!!o.checked;if(Array.isArray(r)){var i=null,a=e._i(r,i);o.checked?a<0&&e.$set(t,"completed",r.concat([i])):a>-1&&e.$set(t,"completed",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(t,"completed",c)}}}),n("span",{staticClass:"checkmark"})]),n("button",{staticClass:"delete",on:{click:function(n){return e.deleteItem(t)}}},[e._v("X")])])})),0)])},m=[],d=n("1da1"),f=(n("96cf"),n("4de4"),n("159b"),n("bc3a")),h=n.n(f),v={name:"Home",data:function(){return{items:[],text:"",show:"all"}},created:function(){this.getItems()},computed:{activeItems:function(){return this.items.filter((function(e){return!e.completed}))},filteredItems:function(){return"active"===this.show?this.items.filter((function(e){return!e.completed})):"completed"===this.show?this.items.filter((function(e){return e.completed})):this.items}},methods:{getItems:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/api/n2/todo/items");case 3:n=t.sent,e.items=n.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},completeItem:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:try{h.a.put("/api/n2/todo/items/"+e.id,{text:e.text,completed:!e.completed}),t.getItems()}catch(r){}case 1:case"end":return n.stop()}}),n)})))()},addItem:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.post("/api/n2/todo/items",{text:e.text,completed:!1});case 3:e.text="",e.getItems(),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},deleteItem:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.delete("/api/n2/todo/items/"+e.id);case 3:t.getItems(),n.next=8;break;case 6:n.prev=6,n.t0=n["catch"](0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})))()},showAll:function(){this.show="all"},showActive:function(){this.show="active"},showCompleted:function(){this.show="completed"},deleteCompleted:function(){var e=this;this.items.forEach((function(t){t.completed&&e.deleteItem(t)}))}}},w=v,b=(n("c0f3"),Object(i["a"])(w,p,m,!1,null,"10459e50",null)),g=b.exports;r["a"].use(l["a"]);var x=[{path:"/",name:"Home",component:g}],y=new l["a"]({mode:"history",base:"",routes:x}),k=y;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},a36b:function(e,t,n){},c0f3:function(e,t,n){"use strict";n("a36b")}});
//# sourceMappingURL=app.31dee747.js.map