(this.webpackJsonpnomad_movie_app=this.webpackJsonpnomad_movie_app||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),c=t(2),m=t.n(c),o=t(13),l=t(14),u=t(17),v=t(15),p=t(18),d=t(16),_=t.n(d);var y=function(e){var a=e.year,t=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:r,title:t}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},t),s.a.createElement("h4",{className:"movie__year"},a),s.a.createElement("ul",{className:"movie__genres"},i.map((function(e,a){return s.a.createElement("li",{key:a,className:"genre"},e)}))),s.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))},g=(t(43),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("p",{className:"loader__text"},"Loading... "),s.a.createElement("p",{className:"loader__text"},"Wait a minute please...")):s.a.createElement("div",{className:"movies"},t.map((function(e){return s.a.createElement(y,{key:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}},{key:"componentDidMount",value:function(){this.getMovies()}}]),a}(s.a.Component));i.a.render(s.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c8ba0e2d.chunk.js.map