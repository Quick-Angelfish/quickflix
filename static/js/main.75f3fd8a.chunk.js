(this.webpackJsonpquickflix=this.webpackJsonpquickflix||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/NoPoster.4741e5e4.png"},44:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),o=n.n(i),l=n(7),u=n(8),c=n(9),s=n(10),p=n(15),d=n(16),m=n(4),f=n.n(m),g=n(13),v=n(2),b=n(1);function h(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return h=function(){return e},e}function x(){var e=Object(v.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]);return x=function(){return e},e}function E(){var e=Object(v.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return E=function(){return e},e}var y=b.default.div(E()),_=b.default.span(x()),j=b.default.div(h()),O=function(e){var t=e.title,n=e.children;return r.a.createElement(y,null,r.a.createElement(_,null,t),r.a.createElement(j,null,n))};function k(){var e=Object(v.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return k=function(){return e},e}var w=b.default.div(k()),S=function(){return r.a.createElement(w,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function R(){var e=Object(v.a)(["\n  color: ",";\n"]);return R=function(){return e},e}function M(){var e=Object(v.a)(["\n  width: 100vh;\n  display: flex;\n  justify-content: center;\n"]);return M=function(){return e},e}var z=b.default.div(M()),T=b.default.span(R(),(function(e){return e.color})),I=function(e){var t=e.text,n=e.color;return r.a.createElement(z,null,r.a.createElement(T,{color:n},t))};function C(){var e=Object(v.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return C=function(){return e},e}function U(){var e=Object(v.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return U=function(){return e},e}function F(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return F=function(){return e},e}function L(){var e=Object(v.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: 0.2s linear;\n"]);return L=function(){return e},e}function P(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: 0.2s linear;\n"]);return P=function(){return e},e}function N(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return N=function(){return e},e}var D=b.default.div(N()),Q=b.default.div(P(),(function(e){return e.bgUrl})),V=b.default.span(L()),q=b.default.div(F(),Q,V),B=b.default.span(U()),A=b.default.span(C()),J=function(e){var t=e.id,a=e.ImgURL,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(p.b,{to:c?"/movie/".concat(t):"show/".concat(t)},r.a.createElement(D,null,r.a.createElement(q,null,r.a.createElement(Q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(21)}),r.a.createElement(V,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(B,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(A,null,l)))},G=n(11),H=n.n(G);function K(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return K=function(){return e},e}var W=b.default.div(K()),X=function(e){var t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"Movies | QuickFlix")),o?r.a.createElement(S,null):r.a.createElement(W,null,t&&t.length>0&&r.a.createElement(O,{title:"Now Playing"},t.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(O,{title:"Upcoming Movies"},n.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(O,{title:"Popular Movies"},a.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),null!==Error&&r.a.createElement(I,{color:"#e74c3c",text:i})))},Y=n(41),Z=n.n(Y).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"561f1457a0e25d9226fbb5010382099b",language:"en-US"}}),$=function(){return Z.get("movie/now_playing")},ee=function(){return Z.get("movie/upcoming")},te=function(){return Z.get("movie/popular")},ne=function(e){return Z.get("movie/".concat(e),{params:{append_to_reponse:"videos"}})},ae=function(e){return Z.get("search/movie",{params:{query:encodeURIComponent(e)}})},re=function(e){return Z.get("movie/".concat(e,"/videos"))},ie=function(){return Z.get("tv/top_rated")},oe=function(){return Z.get("tv/popular")},le=function(){return Z.get("tv/airing_today")},ue=function(e){return Z.get("tv/".concat(e),{params:{append_to_reponse:"show"}})},ce=function(e){return Z.get("search/tv",{params:{query:encodeURIComponent(e)}})},se=function(e){return Z.get("tv/".concat(e,"/videos"))},pe=function(e){return Z.get("/collection/".concat(e))},de=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={nowPlaying:null,upComing:null,popular:null,error:"",loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:return t=e.sent,n=t.data.results,e.next=7,ee();case 7:return a=e.sent,r=a.data.results,e.next=11,te();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upComing:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(X,{nowPlaying:t,upComing:n,popular:a,error:i,loading:o})}}]),n}(r.a.Component);function me(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return me=function(){return e},e}var fe=b.default.div(me()),ge=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"TV | QuickFlix")),i?r.a.createElement(S,null):r.a.createElement(fe,null,t&&t.length>0&&r.a.createElement(O,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(O,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(O,{title:"Today's airing shows"},a.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),Error&&r.a.createElement(I,{color:"#e74c3c",text:o})))},ve=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={topRated:null,popular:null,airingToday:null,error:"",loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:return t=e.sent,n=t.data.results,e.next=7,oe();case 7:return a=e.sent,r=a.data.results,e.next=11,le();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(ge,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),n}(r.a.Component);function be(){var e=Object(v.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return be=function(){return e},e}function he(){var e=Object(v.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return he=function(){return e},e}function xe(){var e=Object(v.a)(["\n  padding: 20px;\n"]);return xe=function(){return e},e}var Ee=b.default.div(xe()),ye=b.default.form(he()),_e=b.default.input(be()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(Ee,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"Search | QuickFlix")),r.a.createElement(ye,{onSubmit:l},r.a.createElement(_e,{placeholder:"Search Movies or TV Shows",value:a,onChange:u})),o?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(O,{title:"Movie Results"},t.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(O,{title:"TV Show Results"},n.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_name,rating:e.vote_average,isMovie:!1,year:e.first_air_date&&e.first_air_date.substring(0,4)})}))),Error&&r.a.createElement(I,{color:"#e74c3c",text:i}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(I,{text:"Not found :(",color:"95a5a6"})))},Oe=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:""},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(g.a)(f.a.mark((function t(){var n,a,r,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ae(n);case 5:return a=t.sent,r=a.data.results,t.next=9,ce(n);case 9:i=t.sent,o=i.data.results,e.setState({movieResults:r,tvResults:o}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(je,{movieResults:t,tvResults:n,loading:i,error:o,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(r.a.Component);function ke(){var e=Object(v.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ke=function(){return e},e}function we(){var e=Object(v.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return we=function(){return e},e}function Se(){var e=Object(v.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 1);\n  background-color: rgba(20, 20, 20, 1);\n  z-index: 3;\n"]);return Se=function(){return e},e}function Re(){var e=Object(v.a)(["\n  display: flex;\n"]);return Re=function(){return e},e}var Me=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement(Te,null,r.a.createElement(ze,null,r.a.createElement(Ie,{current:"/"===t},r.a.createElement(Ce,{to:"/"},"Movies")),r.a.createElement(Ie,{current:"/tv"===t},r.a.createElement(Ce,{to:"/tv"},"TV")),r.a.createElement(Ie,{current:"/search"===t},r.a.createElement(Ce,{to:"/search"},"Search"))))})),ze=b.default.ul(Re()),Te=b.default.header(Se()),Ie=b.default.li(we(),(function(e){return e.current?"#3498db":"transparent"})),Ce=Object(b.default)(p.b)(ke()),Ue=n(20);function Fe(){var e=Object(v.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return Fe=function(){return e},e}function Le(){var e=Object(v.a)(["\n  margin-bottom: 5px;\n  position: relative;\n"]);return Le=function(){return e},e}function Pe(){var e=Object(v.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: 0.2s linear;\n"]);return Pe=function(){return e},e}function Ne(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return Ne=function(){return e},e}function De(){var e=Object(v.a)(["\n  font-size: 12px;\n"]);return De=function(){return e},e}function Qe(){var e=Object(v.a)([""]);return Qe=function(){return e},e}function Ve(){var e=Object(v.a)(["\n  display: block;\n  padding-top: 20px;\n  padding-left: 20px;\n"]);return Ve=function(){return e},e}function qe(){var e=Object(v.a)(["\n  background-color: rgba(20, 20, 20, 0.5);\n  margin-left: 20px;\n  width: 50%;\n  height: 45%;\n  border-radius: 0px 15px 15px 15px;\n  overflow: auto;\n  font-size: 16px;\n"]);return qe=function(){return e},e}function Be(){var e=Object(v.a)(["\n  background-color: rgba(20, 20, 20, 0.5);\n  border: none;\n  color: white;\n  padding: 15px 30px;\n  margin-left: 20px;\n  border-radius: 5px 5px 0px 0px;\n  font-size: 16px;\n"]);return Be=function(){return e},e}var Ae=b.default.button(Be()),Je=b.default.div(qe()),Ge=b.default.p(Ve()),He=b.default.a(Qe()),Ke=b.default.div(De()),We=b.default.div(Ne()),Xe=b.default.div(Pe(),(function(e){return e.bgUrl})),Ye=b.default.div(Le()),Ze=b.default.span(Fe()),$e=function(e){var t=Object(a.useState)({data:[]}),n=Object(Ue.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)({data:[]}),l=Object(Ue.a)(o,2),u=l[0],c=l[1],s=Object(a.useState)({data:[]}),p=Object(Ue.a)(s,2),d=p[0],m=p[1],f=Object(a.useState)(0),g=Object(Ue.a)(f,2),v=g[0],b=g[1];return Object(a.useEffect)((function(){i({name:"Videos",data:e[0]}),c({name:"Products",data:e[1]}),3===e.length&&m({name:"Seasons",data:e[2]})}),[]),{allData:[r,u,d],page:v,setPage:b}},et=function(e){var t=$e(e),a=t.allData,i=t.page,o=t.setPage;return a[2].name||a.pop(),r.a.createElement(r.a.Fragment,null,a.map((function(e,t){return r.a.createElement(Ae,{key:t,onClick:function(){return o(t)}},e.name)})),r.a.createElement(Je,null,0===i&&0!==a[i].data.length?a[i].data.map((function(e,t){return r.a.createElement(Ge,{key:t},r.a.createElement(He,{href:"https://www.youtube.com/watch?v=".concat(e.key),target:"_blank",rel:"noopener noreferrer"},"Link - ",e.type))})):1===i&&0!==a[i].data.length?a[i].data.map((function(e,t){return r.a.createElement(Ge,{key:t},e.name,e.origin_country?"-".concat(e.origin_country):null)})):2===i&&0!==a[i].data.length?r.a.createElement(We,null,a[i].data.map((function(e){return r.a.createElement(Ke,null,r.a.createElement(Ye,null,r.a.createElement(Xe,{bgUrl:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):n(21)})),r.a.createElement(Ze,null,e.name.length>18?"".concat(e.name.substring(0,18),"..."):e.name))}))):"Not found :("))};function tt(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n  height: 35%;\n  overflow: auto;\n"]);return tt=function(){return e},e}function nt(){var e=Object(v.a)(["\n  margin: 0px 10px;\n"]);return nt=function(){return e},e}function at(){var e=Object(v.a)([""]);return at=function(){return e},e}function rt(){var e=Object(v.a)(["\n  margin: 20px 0px;\n"]);return rt=function(){return e},e}function it(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return it=function(){return e},e}function ot(){var e=Object(v.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return ot=function(){return e},e}function lt(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return lt=function(){return e},e}function ut(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return ut=function(){return e},e}function ct(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return ct=function(){return e},e}function st(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return st=function(){return e},e}var pt=b.default.div(st()),dt=b.default.div(ct(),(function(e){return e.bgImage})),mt=b.default.div(ut()),ft=b.default.div(lt(),(function(e){return e.bgImage})),gt=b.default.div(ot()),vt=b.default.h3(it()),bt=b.default.div(rt()),ht=b.default.span(at()),xt=b.default.span(nt()),Et=b.default.p(tt()),yt=function(e){var t=e.result,a=e.error,i=e.loading,o=e.dataObj;return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"Loading | QuickFlix")),r.a.createElement(S,null)):a?r.a.createElement(I,null):r.a.createElement(pt,null,r.a.createElement(H.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| QuickFlix")),r.a.createElement(dt,{bgImage:t.backdrop_path?"https://image.tmdb.org/t/p/original".concat(t.backdrop_path):null}),r.a.createElement(mt,null,r.a.createElement(ft,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(21)}),r.a.createElement(gt,null,r.a.createElement(vt,null,t.original_title?t.original_title:t.original_name),r.a.createElement(bt,null,r.a.createElement(ht,null,t.release_date?t.release_date.substring(0,4):t.first_air_date?t.first_air_date.substring(0,4):"-"),r.a.createElement(xt,null,"\u26ac"),r.a.createElement(ht,null,t.runtime?t.runtime:t.episode_run_time?t.episode_run_time[0]:0," ","minute"),r.a.createElement(ht,null,0!==t.genres.length?r.a.createElement(xt,null,"\u26ac"):null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),t.imdb_id?r.a.createElement(r.a.Fragment,null,r.a.createElement(xt,null,"\u26ac"),r.a.createElement(ht,null,r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(t.imdb_id),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"IMDb Link"},"\ud83d\udcfa")))):null,t.belongs_to_collection?r.a.createElement(r.a.Fragment,null,r.a.createElement(xt,null,"\u26ac"),r.a.createElement(ht,null,r.a.createElement(p.b,{to:"/collections/".concat(t.belongs_to_collection.id)},r.a.createElement("span",{role:"img","aria-label":"Collections"},"\ud83d\udcd6")))):null),r.a.createElement(Et,null,t.overview),et(o))))},_t=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);var r=e.location.pathname;return a.state={result:null,error:"",loading:!0,isMovie:r.includes("/movie/")},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o,l,u,c,s,p,d,m;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=Number(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,l=null,u=null,c=null,e.prev=9,!r){e.next=22;break}return e.next=13,ne(i);case 13:return s=e.sent,o=s.data,e.next=17,re(i);case 17:p=e.sent,l=p.data.results,c=[l,o.production_companies],e.next=32;break;case 22:return e.next=24,ue(i);case 24:return d=e.sent,o=d.data,e.next=28,se(i);case 28:m=e.sent,l=m.data.results,u=o.seasons,c=[l,o.production_companies,u];case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(9),this.setState({error:"Can't find anything."});case 37:return e.prev=37,this.setState({loading:!1,result:o,dataObj:c}),e.finish(37);case 40:case"end":return e.stop()}}),e,this,[[9,34,37,40]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading,i=e.dataObj;return console.log(i),r.a.createElement(yt,{result:t,error:n,loading:a,dataObj:i})}}]),n}(r.a.Component);function jt(){var e=Object(v.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return jt=function(){return e},e}function Ot(){var e=Object(v.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n  margin-bottom: 25px;\n"]);return Ot=function(){return e},e}function kt(){var e=Object(v.a)(["\n  font-size: 32px;\n  margin-bottom: 10px;\n"]);return kt=function(){return e},e}function wt(){var e=Object(v.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return wt=function(){return e},e}function St(){var e=Object(v.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return St=function(){return e},e}function Rt(){var e=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return Rt=function(){return e},e}function Mt(){var e=Object(v.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Mt=function(){return e},e}function zt(){var e=Object(v.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return zt=function(){return e},e}var Tt=b.default.div(zt()),It=b.default.div(Mt(),(function(e){return e.bgImage})),Ct=b.default.div(Rt()),Ut=b.default.div(St(),(function(e){return e.bgImage})),Ft=b.default.div(wt()),Lt=b.default.h3(kt()),Pt=b.default.p(Ot()),Nt=b.default.div(jt()),Dt=function(e){var t=e.result,a=e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,null,r.a.createElement("title",null,"Loading | QuickFlix")),r.a.createElement(S,null)):a?r.a.createElement(I,null):r.a.createElement(Tt,null,r.a.createElement(H.a,null,r.a.createElement("title",null,t.name," | QuickFlix")),r.a.createElement(It,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ct,null,r.a.createElement(Ut,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(21)}),r.a.createElement(Ft,null,r.a.createElement(Lt,null,t.name),r.a.createElement(Pt,null,t.overview),r.a.createElement(Lt,null,"List of Movies"),r.a.createElement(Nt,null,t.parts.map((function(e){return r.a.createElement(J,{key:e.id,id:e.id,ImgURL:e.poster_path,title:e.original_title,rating:e.vote_average,isMovie:!0,year:e.release_date&&e.release_date.substring(0,4)})}))))))},Qt=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={result:null,loading:!0,error:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=Number(n),!isNaN(r)){e.next=4;break}return e.abrupt("return",a("/"));case 4:return i=null,e.prev=5,e.next=8,pe(r);case 8:o=e.sent,i=o.data,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),this.setState({error:"Cat't find collections :("});case 15:return e.prev=15,this.setState({loading:!1,result:i}),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[5,12,15,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.loading,a=e.error;return r.a.createElement(Dt,{result:t,loading:n,error:a})}}]),n}(r.a.Component),Vt=function(){return r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:de}),r.a.createElement(d.b,{path:"/tv",exact:!0,component:ve}),r.a.createElement(d.b,{path:"/search",component:Oe}),r.a.createElement(d.b,{path:"/movie/:id",component:_t}),r.a.createElement(d.b,{path:"/show/:id",component:_t}),r.a.createElement(d.b,{path:"/collections/:id",component:Qt}),r.a.createElement(d.a,{from:"*",to:"/"}))))},qt=n(42),Bt=n.n(qt);function At(){var e=Object(v.a)(["\n",";\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 12px;\n    background-color: rgba(20, 20, 20, 1);\n    color: white;\n    padding-top: 50px;\n  }\n"]);return At=function(){return e},e}var Jt=Object(b.createGlobalStyle)(At(),Bt.a),Gt=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Vt,null),r.a.createElement(Jt,null))}}]),n}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Gt,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.75f3fd8a.chunk.js.map