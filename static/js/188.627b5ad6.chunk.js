"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[188],{188:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var i=a(439),s=a(165),r=a(861),l=a(243),n=a(686),c=a(570);l.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/movie/".concat(t),e.next=3,l.Z.get("".concat(a,"?").concat(c.I));case 3:if(!((i=e.sent).data.total_results<1)){e.next=7;break}return n.Notify.failure("Sorry we can't find information for your film"),e.abrupt("return");case 7:return e.abrupt("return",i.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=a(791),d=a(689),u=a(87),_="FilmDetails_filmBlockContainer__rmu8B",f="FilmDetails_filmBlock__ELH9K",h="FilmDetails_filmBlockItem__rQDWm",p="FilmDetails_filmBlockItemLinks__f9h94",v="FilmDetails_filmTitle__M8Olv",x="FilmDetails_filmDate__JvxGX",j="FilmDetails_filmOverviewTitle__udWkQ",k="FilmDetails_filmOverviewTitleText__Bt+xQ",w="FilmDetails_filmGenresTitle__TBi+p",N="FilmDetails_filmGenresTitleText__iJfyR",g="FilmDetails_seeMoreLink__z++lP",b=a(184),D=function(){var e,t,a=(0,m.useState)(null),s=(0,i.Z)(a,2),r=s[0],l=s[1],n=(0,d.UO)().id,c=null!==(e=null===(t=(0,d.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/products";(0,m.useEffect)((function(){o(n).then((function(e){return l(e)}))}),[n]);var D=r&&r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):"https://openclipart.org/image/800px/323563";return r&&(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)(u.rU,{className:g,to:c,children:"go back"}),(0,b.jsxs)("div",{className:f,children:[(0,b.jsx)("div",{className:h,children:(0,b.jsx)("img",{src:D,alt:r.title,width:"300"})}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsx)("h2",{className:v,children:r.title}),(0,b.jsx)("p",{className:x,children:r.release_date}),(0,b.jsxs)("p",{children:["Rating ",Math.round(r.vote_average),"/10"]}),(0,b.jsx)("p",{className:j,children:"Overview"}),(0,b.jsx)("p",{className:k,children:r.overview}),(0,b.jsx)("p",{className:w,children:"Genres :"}),r.genres.map((function(e,t){var a=e.name;return(0,b.jsx)("p",{className:N,children:a},t)}))]}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)(u.rU,{className:g,to:"cast",children:"Cast"}),(0,b.jsx)(u.rU,{className:g,to:"reviews",children:"Reviews"})]}),(0,b.jsx)(m.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading page..."}),children:(0,b.jsx)(d.j3,{})})]})]})]})}},570:function(e,t,a){a.d(t,{I:function(){return i}});var i=new URLSearchParams({method:"GET",api_key:"d21e7c74c298022b205fb848988c75ba",language:"en-US",include_adult:!1,headers:{accept:"application/json"}})}}]);
//# sourceMappingURL=188.627b5ad6.chunk.js.map