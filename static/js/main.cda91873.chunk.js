(this.webpackJsonpreact_study=this.webpackJsonpreact_study||[]).push([[1],{136:function(e,t,n){e.exports=n(229)},141:function(e,t,n){},143:function(e,t,n){},166:function(e,t,n){e.exports=n.p+"static/media/loading.33fc8688.svg"},167:function(e,t,n){e.exports={preloader:"Preloader_preloader__8Ao-W"}},21:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE"}},229:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(45),o=n.n(c),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(141),n(142);var s=n(33),l=n(34),f=n(36),d=n(35),m=(n(143),n(21)),p=n.n(m),b=n(13),h=function(e){return a.a.createElement("div",{className:p.a.nav},a.a.createElement("nav",{className:"collection"},a.a.createElement(b.b,{to:"/profile",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"Profile")),a.a.createElement(b.b,{to:"/messages",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"Messages")),a.a.createElement(b.b,{to:"/news",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"News")),a.a.createElement(b.b,{to:"/music",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"Music")),a.a.createElement(b.b,{to:"/settings",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"Settings")),a.a.createElement(b.b,{to:"/users",className:"collection-item"},a.a.createElement("div",{className:p.a.item},"Users"))))},g=n(6),v=n(27),E=n(16),O=n(2),w=n(24),S={initialized:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE":return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},_=n(56),y=(n(168),n(72)),N=n(58),F=n(73),T=n(74),I=n(83),A=n(80),P=n(84),D=Object(E.combineReducers)({postData:N.b,messagesData:y.b,newsData:F.b,usersData:T.b,authData:w.b,appData:j,form:A.a}),k=Object(E.createStore)(D,Object(P.composeWithDevTools)(Object(E.applyMiddleware)(I.a))),C=n(86),L=n.n(C),x=function(){return a.a.createElement("div",{className:"col s9"},a.a.createElement("div",{className:L.a.suspense},"Loading..."))},G=n(87),U=n.n(G),R=function(e){return a.a.createElement("header",{className:U.a.header},a.a.createElement("nav",null,e.isAuth?a.a.createElement("div",{className:"nav-wrapper"},a.a.createElement("div",{className:"col s12"},a.a.createElement(b.b,{to:"/profile",className:"breadcrumb"}," ",e.login,a.a.createElement("button",{className:"btn logout",onClick:e.logoutThunk},a.a.createElement("i",{className:"material-icons"}," exit_to_app "))))):a.a.createElement(b.b,{className:"waves-effect waves-light btn logout",to:"/login"},a.a.createElement("button",{className:"btn logout"},a.a.createElement("i",{className:"material-icons"}," input ")))))},W=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(R,this.props)}}]),n}(a.a.Component),z=Object(v.b)((function(e){return{userId:e.authData.userId,email:e.authData.email,login:e.authData.login,isFetching:e.authData.isFetching,isAuth:e.authData.isAuth}}),{setUserData:w.e,logoutThunk:w.d})(W),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,305))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,306))})),Z=a.a.lazy((function(){return n.e(8).then(n.bind(null,307))})),B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,308))})),J=a.a.lazy((function(){return n.e(9).then(n.bind(null,310))})),K=a.a.lazy((function(){return n.e(10).then(n.bind(null,311))})),V=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,309))})),X=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedThunk()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"row"},a.a.createElement(z,null),a.a.createElement("div",{className:"col s3"},a.a.createElement(h,null)),a.a.createElement(r.Suspense,{fallback:a.a.createElement(x,null)},a.a.createElement("div",{className:"col s9"},a.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(H,null)}}),a.a.createElement(g.b,{path:"/messages",render:function(){return a.a.createElement(M,null)}}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(Z,null)}}),a.a.createElement(g.b,{path:"/news",render:function(){return a.a.createElement(B,null)}}),a.a.createElement(g.b,{path:"/music",render:function(){return a.a.createElement(J,null)}}),a.a.createElement(g.b,{path:"/settings",render:function(){return a.a.createElement(K,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(V,null)}})))):a.a.createElement(_.a,null)}}]),n}(a.a.Component),Y=Object(E.compose)(g.f,Object(v.b)((function(e){return{initialized:e.appData.initialized,isAuth:e.authData.isAuth}}),{initializedThunk:function(){return function(e){var t=e(Object(w.a)());Promise.all([t]).then((function(){e({type:"INITIALIZE"})}))}}}))(X),$=function(e){return a.a.createElement(b.a,{basename:"/react_study"},a.a.createElement(v.a,{store:k},a.a.createElement(Y,null)))};o.a.render(a.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react_study",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react_study","/service-worker.js");u?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):i(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):i(t,e)}))}}()},24:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var r=n(5),a=n.n(r),c=n(12),o=n(2),u=n(7),i=n(22),s={email:null,userId:null,login:null,password:null,isAuth:!1,isFetching:!1},l=function(e,t,n,r){return{type:"SET_USER_DATA",payLoad:{email:t,userId:e,login:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.usersAuthFromServer();case 2:0===(n=e.sent).resultCode&&(r=n.data,c=r.id,o=r.email,i=r.login,t(l(c,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.loginFromServer(e,t,!1);case 2:0===(c=n.sent).data.resultCode?r(f()):(o=c.messages.length>0?c.messages[0]:"Some error",r(Object(i.b)("login",{_error:o})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logoutFromServer();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payLoad);case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});default:return e}}},56:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(166),n(167);t.a=function(e){return a.a.createElement("div",{className:"progress"},a.a.createElement("div",{className:"indeterminate"}))}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"h",(function(){return v}));var r=n(5),a=n.n(r),c=n(12),o=n(19),u=n(2),i=n(7),s=n(22),l={posts:[{id:0,message:"Hi, how are you",likeCount:2,photo:null},{id:1,message:"I am fine thanks",likeCount:2,photo:null},{id:2,message:"It is greate",likeCount:2,photo:null}],profile:null,status:null,isFetching:!1},f=function(e){return{type:"SET_USER_STATUS",status:e}},d=function(e){return{type:"ADD-POST",post:e}},m=function(e){return{type:"SET_USER_PROFILE",profile:e}},p=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e){return Object(s.a)(e)},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(p(!0)),t.next=3,i.b.profileFromServer(e);case 3:r=t.sent,n(p(!1)),n(m(r));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:4,message:t.post,likeCount:1,photo:e.profile.photos.small}]),currentText:null});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"SET_USER_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(82),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"dc838a0b-8b61-4e52-ba17-49724b1f4071"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},usersFromServer:function(e){return console.warn("Obsolete method. Please use profileAPI object"),o.profileFromServer(e)},buttonFollowPostFromServer:function(e){return a.post("follow/".concat(e))},buttonUnFollowDeleteFromServer:function(e){return a.delete("follow/".concat(e))}},o={profileFromServer:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}},u={usersAuthFromServer:function(){return a.get("auth/me").then((function(e){return e.data}))},loginFromServer:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logoutFromServer:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n(19),a=n(2),c=n(22),o={companionsData:[{id:1,name:"Sergey"},{id:2,name:"Andrey"},{id:3,name:"Askar"},{id:4,name:"Muslim"},{id:5,name:"Petr"}],dialogsData:[]},u=function(e){return{type:"ADD_MESSAGES",message:e}},i=function(e){return Object(c.a)(e)};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGES":return Object(a.a)(Object(a.a)({},e),{},{dialogsData:[].concat(Object(r.a)(e.dialogsData),[{id:5,message:t.message}])});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(19),a=n(2),c={newsPosts:[{id:2,newsPost:""}]},o=function(e){return{type:"ADD_NEWS",newsPosts:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEWS":return Object(a.a)(Object(a.a)({},e),{},{newsPosts:[].concat(Object(r.a)(e.newsPosts),[{id:3,newsPost:t.newsPosts}])});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return v}));var r=n(5),a=n.n(r),c=n(12),o=n(19),u=n(2),i=n(7),s={users:[],pageSize:10,totalCount:null,pageNeighbours:5,currentPage:1,isFetching:!1,isFollowingProgress:[]},l=function(e){return{type:"CHANGE_CURRENT_PAGE",currentPage:e}},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UN_FOLLOW",userId:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},p=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFollowingProgress:e,userId:t}},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=i.c.getUsers.bind(i.c),r(m(!0)),r(l(e)),n.next=5,c(e,t);case 5:o=n.sent,r(m(!1)),r({type:"SET_USERS",users:o.items}),r({type:"SET_TOTAL_USERS_COUNT",totalCount:o.totalCount});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(p(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(p(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,i.c.buttonFollowPostFromServer.bind(i.c),f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,e,i.c.buttonUnFollowDeleteFromServer.bind(i.c),d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"UN_FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"CHANGE_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalCount:t.totalCount});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{isFollowingProgress:t.isFollowingProgress?[].concat(Object(o.a)(e.isFollowingProgress),[t.userId]):e.isFollowingProgress.filter((function(e){return e!==t.userId}))});default:return e}}},86:function(e,t,n){e.exports={suspense:"SuspenseComponent_suspense__2XO5Z"}},87:function(e,t,n){e.exports={header:"Header_header__1VCKf"}}},[[136,2,3]]]);
//# sourceMappingURL=main.cda91873.chunk.js.map