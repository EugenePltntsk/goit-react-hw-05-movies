"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{591:function(e,t,r){r.d(t,{Df:function(){return c},IQ:function(){return f},Pg:function(){return o},Tn:function(){return p},Zh:function(){return i}});var n=r(861),a=r(757),s=r.n(a),u=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"094c8fd5de10f821a95f28767be2e726"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},881:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(885),a=r(591),s=r(791),u=r(731),c=r(689),i={MoviesGallery:"Movies_MoviesGallery__RBkTX",Form:"Movies_Form__rKqDz",Input:"Movies_Input__ylMgS",Button:"Movies_Button__0LdR0",Lishka:"Movies_Lishka__Zp8b0",Link:"Movies_Link__4PD7w",Image:"Movies_Image__VlCNt"},o=r(184);function p(){var e=(0,s.useState)(""),t=(0,n.Z)(e,2),r=t[0],p=t[1],f=(0,u.lr)(),l=(0,n.Z)(f,2),m=l[0],v=l[1],h=m.get("query"),d=(0,s.useState)([]),_=(0,n.Z)(d,2),x=_[0],g=_[1],k=(0,c.TH)();return(0,s.useEffect)((function(){h&&(0,a.Zh)(h).then((function(e){g(e)}))}),[h]),(0,o.jsxs)("div",{children:["Movies",(0,o.jsxs)("form",{className:i.Form,onSubmit:function(e){e.preventDefault(),v({query:r})},children:[(0,o.jsxs)("label",{children:["Search form",(0,o.jsx)("input",{className:i.Input,value:r,onChange:function(e){p(e.target.value)},placeholder:"enter movie name",type:"text"})]}),(0,o.jsx)("button",{className:i.Button,type:"submit",children:(0,o.jsx)("span",{className:i.Span,children:"Search"})})]}),(0,o.jsx)("ul",{className:i.MoviesGallery,children:x.map((function(e){return(0,o.jsx)("li",{className:i.Lishka,children:(0,o.jsxs)(u.rU,{state:{from:k},className:i.Link,to:"/movies/".concat(e.id),children:[(0,o.jsx)("img",{alt:e.original_title,className:i.Image,src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path)}),e.original_title]})},e.id)}))})]})}}}]);
//# sourceMappingURL=881.f1ea44b9.chunk.js.map