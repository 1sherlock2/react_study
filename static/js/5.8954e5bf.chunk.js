(this.webpackJsonpreact_study=this.webpackJsonpreact_study||[]).push([[5],{230:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(33),a=n(34),o=n(36),s=n(35),c=n(0),u=n.n(c),i=n(27),l=n(6),m=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(s.a)(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(i.b)((function(e){return{isAuth:e.authData.isAuth}}))(t)}},231:function(e,t,n){e.exports={formControl:"FormControl_formControl__Rk51P",error:"FormControl_error__2DIn1",formSummaryError:"FormControl_formSummaryError__2CUOO"}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(232),a=n(0),o=n.n(a),s=n(231),c=n.n(s),u=function(e){e.input;var t=e.meta,n=Object(r.a)(e,["input","meta"]);return o.a.createElement("div",{className:"".concat(c.a.formControl," + ").concat(t.touched&&t.error?c.a.error:""," ")},o.a.createElement("div",null,n.children),o.a.createElement("div",null,t.touched&&t.error&&o.a.createElement("span",null," ",t.error," ")))}},235:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=function(e){if(!e)return e?void 0:"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},o=function(e){return function(t){if(t.length<e)return"Min length is ".concat(e," symbols")}}},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(232),a=n(0),o=n.n(a),s=n(233),c=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(s.a,e,o.a.createElement("textarea",Object.assign({className:"materialize-textarea"},t,n)))}},245:function(e,t,n){e.exports={news:"News_news__2L27l",news_post:"News_news_post__36ZTQ"}},308:function(e,t,n){"use strict";n.r(t);var r=n(33),a=n(34),o=n(36),s=n(35),c=n(0),u=n.n(c),i=n(73),l=n(27),m=n(230),f=n(16),d=n(245),p=n.n(d),b=function(e){return u.a.createElement("div",{className:p.a.news_post},e.posts)},w=n(108),h=n(109),v=n(235),E=n(236),_=Object(v.a)(50),O=Object(h.a)({form:"newsForm"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement(w.a,{component:E.a,name:"newsPosts",validate:[v.c,_]}),u.a.createElement("div",{style:{textAlign:"right"}},u.a.createElement("button",{className:"btn"}," Add News")))})),j=u.a.memo((function(e){var t=e.newsPosts.map((function(e){return u.a.createElement(b,{key:e.id,id:e.id,posts:e.newsPost})}));return u.a.createElement("div",{className:p.a.news},u.a.createElement("div",{className:p.a.h1},u.a.createElement("blockquote",{style:{fontSize:"30px"}},"News today")),u.a.createElement("div",null,u.a.createElement(O,{onSubmit:function(t){e.addNews(t.newsPosts)}})),u.a.createElement("div",null,t))})),N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(a.a)(n,[{key:"render",value:function(){return u.a.createElement(j,{addNews:this.props.addNews,newsPosts:this.props.newsPosts})}}]),n}(u.a.Component);t.default=Object(f.compose)(Object(l.b)((function(e){return{newsPosts:e.newsData.newsPosts}}),{addNews:i.a}),m.a)(N)}}]);
//# sourceMappingURL=5.8954e5bf.chunk.js.map