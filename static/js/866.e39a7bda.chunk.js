"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{591:function(e,t,r){r.d(t,{Df:function(){return s},IQ:function(){return p},Pg:function(){return o},Tn:function(){return f},Zh:function(){return i}});var n=r(861),a=r(757),u=r.n(a),c=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"094c8fd5de10f821a95f28767be2e726"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},866:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(885),a=r(591),u=r(791),c=r(689),s="Reviews_Author__7b+MS",i="Reviews_Content__RchDo",o="Reviews_Created__VHE4m",f=r(184);function p(){var e=(0,c.UO)().movieId,t=(0,u.useState)([]),r=(0,n.Z)(t,2),p=r[0],h=r[1];return(0,u.useEffect)((function(){(0,a.Tn)(e).then((function(e){console.log("reviewsData :>> ",e),h(e)}))}),[e]),(0,f.jsx)("div",{children:p.length>0?(0,f.jsx)("ul",{children:p.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{className:s,children:["Author: ",e.author]}),(0,f.jsx)("p",{className:i,children:e.content}),(0,f.jsx)("span",{className:o,children:e.created_at.slice(0,10)})]},e.id)}))}):(0,f.jsx)("span",{children:"No Reviews Found"})})}}}]);
//# sourceMappingURL=866.e39a7bda.chunk.js.map