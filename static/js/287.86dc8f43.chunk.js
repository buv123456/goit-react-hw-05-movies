"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[287],{160:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),i=n(87),a=n.p+"static/media/no-poster.299b0f1993742322d8d2.webp",s=n(184);function o(e){var t=e.movies,n=(0,r.TH)();return(0,s.jsx)("main",{children:(0,s.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,o=e.poster_path,c=e.vote_average;return(0,s.jsx)("li",{children:(0,s.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:n},children:[(0,s.jsx)("h3",{children:r}),(0,s.jsxs)("p",{children:["rating: ",Math.ceil(10*c)+"%"]}),(0,s.jsx)("img",{src:o?"https://image.tmdb.org/t/p/w500/"+o:a,width:"10%",alt:r})]})},t)}))})})}},266:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),i=n(439),a=n(757),s=n.n(a),o=n(791),c=n(160),u=n(390),h=n(184);function p(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1];return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.v)("/trending/movie/day","results");case 2:t=e.sent,a(t.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsx)("main",{children:!!n&&(0,h.jsx)(c.Z,{movies:n})})}},390:function(e,t,n){n.d(t,{v:function(){return u}});var r,i=n(861),a=n(757),s=n.n(a),o=n(243),c=n(73);function u(e,t){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(s().mark((function e(t,n){var i,a,u,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.Z.CancelToken.source(),i=c.ZP.loading("Loading..."),a={id:i,duration:3e3},e.prev=3,e.next=6,(0,o.Z)(t,{cancelToken:r.token});case 6:return u=e.sent,h=u.data,n&&0===h[n].length?(0,c.ZP)("There are no data for your request",a):c.ZP.success("Ok. We found something!",a),e.abrupt("return",h);case 12:e.prev=12,e.t0=e.catch(3),c.ZP.error("Something goes wrong. Reload page",a);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.headers={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWEyYjVkODRiMDI5YTNkNmI3ODJjYWI0MDM5NDM2MSIsInN1YiI6IjY1MDBhNjg4ZmZjOWRlMGVkZWQ0NDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DBpPzdh_xDNK2b4lthob9TnOTsJbTHp8xNZgeluLuGQ"}}}]);
//# sourceMappingURL=287.86dc8f43.chunk.js.map