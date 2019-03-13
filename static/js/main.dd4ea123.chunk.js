(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),c=a.n(r),s=(a(17),a(3)),l=a(4),o=a(6),d=a(5),u=a(7),m=function(e){var t=e.count;return i.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"#"},"AnimeList"," ",i.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)),i.a.createElement("a",{className:"nav-link",target:"_blank",href:"https://github.com/pr-sanchez/animelist"},"Github"))},h=a(1),p=a.n(h),b=a(8),f=a(2),v={getAnimes:function(e){return g.apply(this,arguments)},getEpisodes:function(e){return E.apply(this,arguments)}};function g(){return(g=Object(f.a)(p.a.mark(function e(t){var a,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"}},e.next=3,fetch("https://kitsu.io/api/edge/anime/".concat(t),a);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){return(E=Object(f.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://kitsu.io/api/edge/anime/".concat(t,"/episodes"));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}a(20);var k={animes:[],listIds:[],clicked:!1,idSelectedAnime:""},j=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(d.a)(t).call(this))).handleClear=function(){e.setState(k)},e.handleRandom=function(){e.handleClick(),e.random=setInterval(function(){for(var t=function(t){var a=function(){var t=Object(f.a)(p.a.mark(function t(a){var n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getAnimes(a);case 2:(n=t.sent).data&&e.setState({animes:[n].concat(Object(b.a)(e.state.animes))});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();if(10===t)clearInterval(e.random);else{var n=Math.ceil(9998*Math.random()-1).toString();e.setState({listIds:[n].concat(Object(b.a)(e.state.listIds))},function(){e.state.listIds.includes("id")||a(n)})}},a=0;a<11;a++)t(a)},500)},e.handleClick=function(){e.setState({clicked:!0},function(){setTimeout(function(){e.setState({clicked:!1})},2800)})},e.handleToggle=function(t){e.state.idSelectedAnime===t?e.setState({idSelectedAnime:""}):e.setState({idSelectedAnime:t})},e.animeInformation=function(t){if(e.state.idSelectedAnime===t)return"animeInformation"},e.state=k,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.animes.length!==this.state.animes.length&&this.props.handleCount(this.state.animes.length)}},{key:"render",value:function(){var e=this,t=this.state,a=t.animes,r=t.clicked,c=t.idSelectedAnime;return 0===a.data?i.a.createElement("h2",null,"The are no animes in the database"):(console.log(a),i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-center "},i.a.createElement("div",{className:"loading"},r&&i.a.createElement("div",{className:"circle circleAnimated"},i.a.createElement("div",{className:"innerCircle"})))),i.a.createElement("div",{className:"container-fluid",style:{margin:"20px 0px 20px 0px"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("button",{onClick:function(){return e.handleRandom()},className:"btn btn-primary btn-lg btn-block",disabled:!!r},"Search 10 random")),i.a.createElement("div",{className:"col"},i.a.createElement("button",{onClick:function(){return e.handleClear()},disabled:!!r,className:"btn btn-secondary btn-lg btn-block"},"Clear results")))),i.a.createElement("div",{className:"gridContainer"},a&&a.map(function(t){return void 0!==t.data?i.a.createElement("div",{className:"gridItem",key:t.data.id},void 0!==t.data.attributes.canonicalTitle&&i.a.createElement(n.Fragment,null,i.a.createElement("h3",{className:"animeTitle"},t.data.attributes.canonicalTitle,i.a.createElement("br",null),t.data.attributes.titles.ja_jp),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:c===t.data.id?"triangleDownVanishing":"triangleDown",onClick:function(){e.handleToggle(t.data.id)}})),i.a.createElement("h4",{className:e.animeInformation(t.data.id),style:c===t.data.id?{visibility:"visible"}:{visibility:"hidden"}},i.a.createElement("b",null,"Rating:")," ",t.data.attributes.averageRating,i.a.createElement("br",null),i.a.createElement("b",null,"Age:")," ",t.data.attributes.ageRatingGuide)),void 0!==t.data.attributes.posterImage.small&&i.a.createElement("img",{src:t.data.attributes.posterImage.small,alt:"Cover image",width:"80%",height:"auto"})):null}))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={count:0},a.handleCount=function(e){e>a.state.count&&a.setState({count:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(m,{count:this.state.count}),i.a.createElement(j,{handleCount:this.handleCount}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21),a(22);c.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.dd4ea123.chunk.js.map