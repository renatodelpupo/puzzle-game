(function(t){function e(e){for(var n,c,i=e[0],u=e[1],a=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},s={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"418d":function(t,e,r){"use strict";var n=r("864c"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Home")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-home"},[t._m(0),r("main",{staticClass:"app-main"},[r("Rules",{attrs:{rules:t.rules}}),r("Answer",{attrs:{rules:t.rules,rulesLength:t.rulesLength},on:{attempt:t.attemptUpdate}})],1),r("Footer",{attrs:{attempt:t.attempt,correctAnswers:t.correctAnswers,rules:t.rules},on:{correctAnswer:t.newCorrectAnswer,nextGame:function(e){return t.generateRules()}}})],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"app-header"},[r("h1",[t._v("Solve it!")])])}],u=(r("a9e3"),r("4de4"),r("4160"),r("caad"),r("c975"),r("2532"),r("159b"),function(t){var e=function(){return r()},r=function(){var e=[];while(e.length<t){var r=Math.floor(9*Math.random());e.includes(r)||e.push(r)}return e},n=function(){for(var t=[],e=0;e<6;e++)t.push({correctNumbers:null,correctPositions:null,numbers:r()});return t},s=function(t,e){return e.forEach((function(e){var r=e.numbers,n=r.filter((function(e){return t.includes(e)})),s=r.filter((function(e,r){return t.includes(e)&&t.indexOf(e)===r}));e.correctNumbers=n.length,e.correctPositions=s.length})),e},o=e(),c=n(),i=s(o,c);return i}),a=function(t,e){var r=null;return e.forEach((function(e){var n=e.numbers,s=t.filter((function(t){return n.includes(t)})),o=t.filter((function(t,e){return n.includes(t)&&n.indexOf(t)===e})),c=s.length===e.correctNumbers,i=o.length===e.correctPositions;c&&i||(r=!0)})),!r},l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"answer-box"},[r("div",{staticClass:"answer-numbers"},t._l(t.attempt,(function(e,n){return r("div",{key:n,staticClass:"answer-number-wrap"},[r("div",{staticClass:"answer-up",on:{click:function(e){return t.increase(n)}}},[r("span",{staticClass:"icon-arrow"},[t._v("❮")])]),r("div",{staticClass:"answer-number",domProps:{textContent:t._s(e)}}),r("div",{staticClass:"answer-down",on:{click:function(e){return t.decrease(n)}}},[r("span",{staticClass:"icon-arrow"},[t._v("❯")])])])})),0)])},f=[],p={name:"Answer",props:{rules:{required:!0,type:Array},rulesLength:{required:!0,type:Number}},data:function(){return{attempt:[]}},watch:{attempt:function(t){this.$emit("attempt",t)},rules:function(){this.mountInitialAttempt()}},mounted:function(){this.mountInitialAttempt()},methods:{decrease:function(t){this.attempt[t]>0?this.$set(this.attempt,t,this.attempt[t]-1):this.$set(this.attempt,t,9)},increase:function(t){this.attempt[t]<9?this.$set(this.attempt,t,this.attempt[t]+1):this.$set(this.attempt,t,0)},mountInitialAttempt:function(){this.attempt=[];for(var t=0;t<this.rulesLength;t++)this.attempt.push(0)}}},d=p,h=(r("418d"),r("2877")),m=Object(h["a"])(d,l,f,!1,null,"30e41286",null),v=m.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"app-footer"},["success"===t.status?r("div",{staticClass:"app-footer-success"},[r("div",{staticClass:"col-70"},[t._v("Correct 🎉")]),r("div",{staticClass:"col-30",on:{click:function(e){return t.next()}}},[t._v("Next "),r("span",{staticClass:"icon-arrow"},[t._v("❯")])])]):"failure"===t.status?r("div",{staticClass:"app-footer-failure"},[r("div",{staticClass:"col-100"},[t._v("Wrong 😟")])]):r("div",{staticClass:"app-footer-default"},[r("div",{staticClass:"col-70"},[t._v("Puzzle "+t._s(t.puzzleCount))]),r("div",{staticClass:"col-30",on:{click:function(e){return t.test()}}},[t._v("Submit "),r("span",{staticClass:"icon-arrow"},[t._v("❯")])])])])},w=[],g={name:"Footer",props:{attempt:{required:!0,type:Array},correctAnswers:{required:!0,type:Number},rules:{required:!0,type:Array}},data:function(){return{status:"default"}},computed:{puzzleCount:function(){return this.correctAnswers+1}},methods:{next:function(){this.$emit("nextGame"),this.status="default"},test:function(){var t=this,e=a(this.attempt,this.rules);e?(this.status="success",this.$emit("correctAnswer")):(this.status="failure",setTimeout((function(){t.status="default"}),2e3))}}},C=g,y=(r("6281"),Object(h["a"])(C,b,w,!1,null,"f3c5048c",null)),_=y.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.rules?r("div",{staticClass:"rule-list"},t._l(t.rules,(function(e){return r("div",{key:e.numbers.toString(),staticClass:"rule-box"},[r("div",{staticClass:"rule-number-wrap"},t._l(e.numbers,(function(e){return r("span",{key:e.toString(),staticClass:"rule-number",domProps:{textContent:t._s(e)}})})),0),r("span",{staticClass:"rule-description",domProps:{textContent:t._s(t.setDescription(e))}})])})),0):t._e()},x=[],O=(r("99af"),{name:"Rules",props:{rules:{required:!0,type:Array}},methods:{setDescription:function(t){var e=function(){return 0===t.correctNumbers?"No correct numbers.":1===t.correctNumbers?"One correct number":2===t.correctNumbers?"Two correct numbers":3===t.correctNumbers?"Three correct numbers":4===t.correctNumbers?"Four correct numbers":""},r=function(){return t.correctNumbers?t.correctPositions===t.correctNumbers?" and in the right place.":0===t.correctPositions?", but in the wrong place.":1===t.correctPositions?", but only one in the right place.":2===t.correctPositions?", but only two in the right place.":3===t.correctPositions?", but only three in the right place.":3===t.correctPositions?", but only four in the right place.":"":""};return"".concat(e()).concat(r())}}}),P=O,N=(r("8893"),Object(h["a"])(P,A,x,!1,null,"330e813a",null)),k=N.exports,j={name:"Home",components:{Answer:v,Footer:_,Rules:k},data:function(){return{attempt:[],correctAnswers:0,rules:[],rulesLength:3}},computed:{persistedCorrectAnswers:function(){var t=localStorage.getItem("correctAnswers");return t?Number(t):0},persistedRules:function(){var t=localStorage.getItem("currentRules"),e=t?JSON.parse(t):null;return e}},watch:{correctAnswers:function(t){t>this.persistedCorrectAnswers&&localStorage.setItem("correctAnswers",t)}},mounted:function(){this.checkPersistedCorrectAnswers(),this.setInitialRules()},methods:{attemptUpdate:function(t){this.attempt=t},checkPersistedCorrectAnswers:function(){this.persistedCorrectAnswers>this.correctAnswers&&(this.correctAnswers=this.persistedCorrectAnswers)},generateRules:function(){var t=u(this.rulesLength);this.rules=t,localStorage.setItem("currentRules",JSON.stringify(t))},newCorrectAnswer:function(){this.correctAnswers=this.correctAnswers+1},setInitialRules:function(){this.persistedRules?this.rules=this.persistedRules:this.generateRules()}}},S=j,$=(r("fed3"),Object(h["a"])(S,c,i,!1,null,null,null)),R=$.exports,E={name:"App",components:{Home:R}},I=E,q=(r("034f"),Object(h["a"])(I,s,o,!1,null,null,null)),z=q.exports,F=r("9483");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},6281:function(t,e,r){"use strict";var n=r("a3d3"),s=r.n(n);s.a},"78dc":function(t,e,r){},"85ec":function(t,e,r){},"864c":function(t,e,r){},8893:function(t,e,r){"use strict";var n=r("a7c9"),s=r.n(n);s.a},a3d3:function(t,e,r){},a7c9:function(t,e,r){},fed3:function(t,e,r){"use strict";var n=r("78dc"),s=r.n(n);s.a}});
//# sourceMappingURL=app.f9703384.js.map