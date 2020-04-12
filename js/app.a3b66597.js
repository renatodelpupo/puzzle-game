(function(t){function e(e){for(var s,c,i=e[0],u=e[1],a=e[2],m=0,p=[];m<i.length;m++)c=i[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,a||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var s={},n={app:0},o=[];function c(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=s,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(r,s,function(e){return t[e]}.bind(null,s));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"3e8c":function(t,e,r){"use strict";var s=r("eee6"),n=r.n(s);n.a},5317:function(t,e,r){"use strict";var s=r("db8a"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Home")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-home"},[t._m(0),r("main",{staticClass:"app-main"},[r("rule-list",{attrs:{rules:t.rules}}),r("answer-box",{attrs:{rules:t.rules},on:{attempt:t.attemptUpdate}}),t.gameEnded?r("modal-congrats",{on:{restartGame:t.restartGame}}):t._e()],1),r("Footer",{attrs:{attempt:t.attempt,gameEnded:t.gameEnded,puzzleNumber:t.puzzleNumber,rules:t.rules},on:{correctAnswer:t.newCorrectAnswer,nextGame:function(e){return t.nextGame()}}})],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"app-header"},[r("h1",[t._v("Solve the puzzle")])])}],u=(r("a9e3"),r("d27d")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"answer-box"},[r("div",{staticClass:"answer-numbers"},t._l(t.attempt,(function(e,s){return r("div",{key:s,staticClass:"answer-number-wrap"},[r("div",{staticClass:"answer-up",on:{click:function(e){return t.increase(s)}}},[r("span",{staticClass:"icon-arrow"},[t._v("❮")])]),r("div",{staticClass:"answer-number",domProps:{textContent:t._s(e)}}),r("div",{staticClass:"answer-down",on:{click:function(e){return t.decrease(s)}}},[r("span",{staticClass:"icon-arrow"},[t._v("❯")])])])})),0)])},l=[],m={name:"AnswerBox",props:{rules:{required:!0,type:Array}},data:function(){return{attempt:[]}},watch:{attempt:function(t){this.$emit("attempt",t)},rules:function(){this.mountInitialAttempt()}},mounted:function(){this.mountInitialAttempt()},methods:{decrease:function(t){this.attempt[t]>0?this.$set(this.attempt,t,this.attempt[t]-1):this.$set(this.attempt,t,9)},increase:function(t){this.attempt[t]<9?this.$set(this.attempt,t,this.attempt[t]+1):this.$set(this.attempt,t,0)},mountInitialAttempt:function(){this.attempt=[];for(var t=0;t<this.rules[0].numbers.length;t++)this.attempt.push(0)}}},p=m,f=(r("5caf"),r("2877")),d=Object(f["a"])(p,a,l,!1,null,"a3704f1c",null),b=d.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"app-footer"},["success"===t.status?r("div",{staticClass:"app-footer-success"},[r("div",{staticClass:"col-70"},[t._v("Correct 🎉")]),t.gameEnded?r("div",{staticClass:"col-30"},[t._v("The end")]):r("div",{staticClass:"col-30",on:{click:function(e){return t.next()}}},[t._v("Next "),r("span",{staticClass:"icon-arrow"},[t._v("❯")])])]):"failure"===t.status?r("div",{staticClass:"app-footer-failure"},[r("div",{staticClass:"col-100"},[t._v("Wrong 😟")])]):r("div",{staticClass:"app-footer-default"},[r("div",{staticClass:"col-70"},[t._v("Puzzle "+t._s(t.puzzleNumber))]),r("div",{staticClass:"col-30",on:{click:function(e){return t.test()}}},[t._v("Submit "),r("span",{staticClass:"icon-arrow"},[t._v("❯")])])])])},v=[],w=(r("4de4"),r("4160"),r("caad"),r("c975"),r("2532"),r("159b"),{name:"Footer",props:{attempt:{required:!0,type:Array},gameEnded:{required:!0,type:Boolean},puzzleNumber:{required:!0,type:Number},rules:{required:!0,type:Array}},data:function(){return{feedbackMessages:[],status:"default"}},watch:{gameEnded:function(t){t&&(this.status="default")}},methods:{next:function(){this.$emit("nextGame"),this.status="default"},test:function(){var t=this,e=!1;this.feedbackMessages=[],this.rules.forEach((function(r,s){var n=r.numbers,o=s+1,c=t.attempt.filter((function(t){return n.includes(t)})),i=t.attempt.filter((function(t,e){return n.includes(t)&&n.indexOf(t)===e})),u=c.length===r.correctNumbers,a=i.length===r.correctPositions;u&&a?t.feedbackMessages.push("Rule ".concat(o," correct")):(t.feedbackMessages.push("Rule ".concat(o," incorrect")),e=!0)})),e?(this.status="failure",setTimeout((function(){t.status="default"}),2e3)):(this.status="success",this.$emit("correctAnswer"))}}}),g=w,N=(r("fd46"),Object(f["a"])(g,h,v,!1,null,"ade34206",null)),_=N.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("modal",{staticClass:"ModalCongrats",attrs:{buttonText:t.buttonText,icon:t.icon,title:t.title},on:{buttonAction:t.restartGame}},[r("p",[t._v("You finished the game.")]),r("p",[t._v("We're working for new levels.")])])},C=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Modal"},[r("h2",[t._v(" "+t._s(t.title)+" "),t.icon?r("span",{staticClass:"icon",domProps:{textContent:t._s(t.icon)}}):t._e()]),t._t("default"),r("button",{domProps:{textContent:t._s(t.buttonText)},on:{click:function(e){return t.buttonAction()}}})],2)},x=[],y={props:{buttonText:{required:!0,type:String},icon:{required:!1},title:{required:!0,type:String}},methods:{buttonAction:function(){this.$emit("buttonAction")}}},z=y,O=(r("5317"),Object(f["a"])(z,A,x,!1,null,"3b2f52af",null)),k=O.exports,j={components:{Modal:k},data:function(){return{buttonText:"Restart",icon:"🎉",title:"Congratulations!"}},methods:{restartGame:function(){this.$emit("restartGame")}}},$=j,E=(r("c71d"),Object(f["a"])($,P,C,!1,null,null,null)),S=E.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rule-list"},t._l(t.rules,(function(t){return r("rule-box",{key:t.numbers.toString(),attrs:{rule:t}})})),1)},M=[],q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"rule-box"},[r("div",{staticClass:"rule-number-wrap"},t._l(t.rule.numbers,(function(e){return r("span",{key:e.toString(),staticClass:"rule-number",domProps:{textContent:t._s(e)}})})),0),r("span",{staticClass:"rule-description",domProps:{textContent:t._s(t.description)}})])},G=[],F=(r("99af"),{name:"RuleBox",props:{rule:{required:!0,type:Object}},computed:{description:function(){return"".concat(this.descriptionNumbers).concat(this.descriptionPositions)},descriptionNumbers:function(){return 0===this.rule.correctNumbers?"Nothing is correct":1===this.rule.correctNumbers?"One number is correct":2===this.rule.correctNumbers?"Two numbers are correct":3===this.rule.correctNumbers?"Three numbers are correct":4===this.rule.correctNumbers?"Four numbers are correct":""},descriptionPositions:function(){return this.rule.correctNumbers?0===this.rule.correctPositions?", but wrong placed":this.rule.correctNumbers===this.rule.correctPositions?" and well placed":1===this.rule.correctPositions?". One number well placed":2===this.rule.correctPositions?". Two numbers well placed":3===this.rule.correctPositions?". Three numbers well placed":3===this.rule.correctPositions?". Four numbers well placed":"":""}}}),R=F,B=(r("3e8c"),Object(f["a"])(R,q,G,!1,null,"5dc29920",null)),I=B.exports,H={name:"RuleList",components:{RuleBox:I},props:{rules:{required:!0,type:Array}}},J=H,L=(r("8f23"),Object(f["a"])(J,T,M,!1,null,"51bf0b8c",null)),U=L.exports,W={name:"Home",components:{AnswerBox:b,Footer:_,ModalCongrats:S,RuleList:U},data:function(){return{attempt:[],correctAnswers:0,puzzleNumber:1}},computed:{gameEnded:function(){return this.correctAnswers===this.rulesAmount},persistedCorrectAnswers:function(){var t=localStorage.getItem("correctAnswers");return t?Number(t):0},rules:function(){return u[this.puzzleNumber-1]},rulesAmount:function(){return u.length}},watch:{correctAnswers:function(t){t>this.persistedCorrectAnswers&&localStorage.setItem("correctAnswers",t)}},mounted:function(){this.checkPersistedCorrectAnswers()},methods:{attemptUpdate:function(t){this.attempt=t},checkPersistedCorrectAnswers:function(){this.persistedCorrectAnswers>this.correctAnswers&&(this.correctAnswers=this.persistedCorrectAnswers,this.puzzleNumber=this.correctAnswers+1)},newCorrectAnswer:function(){this.correctAnswers=this.correctAnswers+1},nextGame:function(){this.puzzleNumber<this.rulesAmount&&(this.puzzleNumber=this.puzzleNumber+1)},restartGame:function(){this.correctAnswers=0,this.puzzleNumber=1,localStorage.setItem("correctAnswers",0)}}},Y=W,D=(r("fed3"),Object(f["a"])(Y,c,i,!1,null,null,null)),K=D.exports,Q={name:"App",components:{Home:K}},V=Q,X=(r("034f"),Object(f["a"])(V,n,o,!1,null,null,null)),Z=X.exports,tt=r("9483");Object(tt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Z)}}).$mount("#app")},"5b8e":function(t,e,r){},"5caf":function(t,e,r){"use strict";var s=r("5b8e"),n=r.n(s);n.a},7014:function(t,e,r){},"70f7":function(t,e,r){},7100:function(t,e,r){},"78dc":function(t,e,r){},"85ec":function(t,e,r){},"8f23":function(t,e,r){"use strict";var s=r("70f7"),n=r.n(s);n.a},c71d:function(t,e,r){"use strict";var s=r("7014"),n=r.n(s);n.a},d27d:function(t){t.exports=JSON.parse('[[{"correctNumbers":1,"correctPositions":1,"numbers":[2,8,9]},{"correctNumbers":1,"correctPositions":0,"numbers":[2,1,5]},{"correctNumbers":2,"correctPositions":0,"numbers":[9,4,2]},{"correctNumbers":0,"correctPositions":0,"numbers":[7,3,8]},{"correctNumbers":1,"correctPositions":0,"numbers":[7,8,4]}],[{"correctNumbers":1,"correctPositions":1,"numbers":[6,8,2]},{"correctNumbers":1,"correctPositions":0,"numbers":[6,1,4]},{"correctNumbers":0,"correctPositions":0,"numbers":[7,3,8]},{"correctNumbers":2,"correctPositions":0,"numbers":[2,0,6]},{"correctNumbers":1,"correctPositions":0,"numbers":[7,8,0]}],[{"correctNumbers":1,"correctPositions":0,"numbers":[7,2,3]},{"correctNumbers":1,"correctPositions":1,"numbers":[7,5,9]},{"correctNumbers":2,"correctPositions":0,"numbers":[9,1,7]},{"correctNumbers":1,"correctPositions":0,"numbers":[4,5,1]},{"correctNumbers":0,"correctPositions":0,"numbers":[4,6,5]}],[{"correctNumbers":1,"correctPositions":1,"numbers":[6,8,2]},{"correctNumbers":1,"correctPositions":0,"numbers":[6,4,5]},{"correctNumbers":1,"correctPositions":0,"numbers":[7,8,0]},{"correctNumbers":2,"correctPositions":0,"numbers":[2,0,6]},{"correctNumbers":0,"correctPositions":0,"numbers":[7,3,8]}],[{"correctNumbers":2,"correctPositions":1,"numbers":[5,2,6,9]},{"correctNumbers":1,"correctPositions":0,"numbers":[9,7,4,5]},{"correctNumbers":3,"correctPositions":0,"numbers":[2,1,7,3]},{"correctNumbers":1,"correctPositions":1,"numbers":[1,4,8,7]},{"correctNumbers":2,"correctPositions":0,"numbers":[7,3,8,1]},{"correctNumbers":1,"correctPositions":1,"numbers":[9,2,1,8]},{"correctNumbers":2,"correctPositions":0,"numbers":[4,6,7,9]}]]')},db8a:function(t,e,r){},eee6:function(t,e,r){},fd46:function(t,e,r){"use strict";var s=r("7100"),n=r.n(s);n.a},fed3:function(t,e,r){"use strict";var s=r("78dc"),n=r.n(s);n.a}});
//# sourceMappingURL=app.a3b66597.js.map