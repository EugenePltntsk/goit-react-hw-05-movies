"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{591:function(e,t,r){r.d(t,{Df:function(){return o},IQ:function(){return v},Pg:function(){return u},Tn:function(){return l},Zh:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(44).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"094c8fd5de10f821a95f28767be2e726"}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(885),a=r(591),s=r(791),i=r(731),o=r(689),c="MovieDetails_DivForMovie__VJz9X",u="MovieDetails_MovieImage__VSxAu",l="MovieDetails_ReleaseDate__5t91T",v="MovieDetails_Raiting__+gP30",p="MovieDetails_Title__dmr4s",f="MovieDetails_Link__HT1W6",d="MovieDetails_Overview__+e3uD",m="MovieDetails_Votes__psmTZ",_="MovieDetails_Genre__y6deY",h="MovieDetails_CastLink__8+exf",g="MovieDetails_ReviewLink__05Z93",x=r(184);function w(){var e,t,r,w,k,b,j=(0,s.useState)(null),D=(0,n.Z)(j,2),M=D[0],N=D[1],Z=(0,o.UO)().movieId,y=(0,o.TH)();console.log(y);var R=(null===(e=y.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.pathname)+(null===(r=y.state)||void 0===r||null===(w=r.from)||void 0===w?void 0:w.search)||"/";return(0,s.useEffect)((function(){(0,a.Pg)(Z).then((function(e){N(e)}))}),[Z]),(0,x.jsx)(x.Fragment,{children:M&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.rU,{className:f,to:R,children:"Go Back"}),(0,x.jsxs)("div",{className:c,style:{backgroundImage:"linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(https://image.tmdb.org/t/p/w500".concat(M.backdrop_path,")")},children:[(0,x.jsx)("img",{alt:M.original_title,className:u,src:"https://image.tmdb.org/t/p/w500".concat(M.poster_path)}),(0,x.jsx)("h2",{className:p,children:M.original_title}),(0,x.jsxs)("p",{className:d,children:["Overview: ",M.overview]}),(0,x.jsxs)("span",{className:l,children:["Release date: ",M.release_date]}),(0,x.jsxs)("span",{className:v,children:["Rating: ",M.vote_average]}),(0,x.jsxs)("span",{className:m,children:["Votes: ",M.vote_count]}),M.genres.map((function(e){return(0,x.jsxs)("span",{className:_,children:[e.name," "]},e.id)})),(0,x.jsx)(i.rU,{className:h,state:{from:null===(k=y.state)||void 0===k?void 0:k.from},to:"cast",children:"Cast"}),(0,x.jsx)(i.rU,{className:g,state:{from:null===(b=y.state)||void 0===b?void 0:b.from},to:"reviews",children:"Reviews"})]}),(0,x.jsx)(o.j3,{})]})})}}}]);
//# sourceMappingURL=135.3f27df26.chunk.js.map