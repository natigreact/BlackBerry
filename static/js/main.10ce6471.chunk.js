(this["webpackJsonpkvant-app"]=this["webpackJsonpkvant-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(133),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7470744c-b0c9-4f19-8251-815a8819bbdf"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Follow:function(e){return a.post("follow/".concat(e),{})},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Please use ProfileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},Login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},Logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},129:function(e,t,n){"use strict";t.a=n.p+"static/media/user.f7d6eb9b.png"},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(48),a=n(3),s="ADD-MESSAGE",c={messagesData:[{id:1,message:"Hello"},{id:2,message:"Nice day"},{id:3,message:"We are friends"},{id:4,message:"nice to meet you"},{id:5,message:"Next level"},{id:6,message:"Hi"},{id:7,message:"Welcome"},{id:8,message:"Music is on"},{id:9,message:"Happy day"},{id:10,message:"nice car"},{id:11,message:"My way is open"},{id:12,message:"new home"},{id:13,message:"Like this"},{id:14,message:"well"},{id:15,message:"door is open"},{id:16,message:"movie"}],dialogsData:[{id:1,name:"Andrew"},{id:2,name:"Natig"},{id:3,name:"Leona"},{id:4,name:"Vlad"},{id:5,name:"Cherry"},{id:6,name:"Terminator"}]},i=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:7,message:n}])});default:return e}}},135:function(e,t,n){e.exports={settings:"Settings_settings__3U6ep"}},168:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",block:"Navbar_block__3UHLw"}},172:function(e,t,n){},19:function(e,t,n){e.exports={dialogInput:"FormsControls_dialogInput__1scVe",profileInput:"FormsControls_profileInput__2mlTu",formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n.n(r),s=n(69),c=n.n(s),i=(n(168),n(27)),o=n(28),u=n(30),l=n(29),d=n(14),b=n(10),j=n(13),p=(n(172),n(3)),f=n(38),h=n.n(f),O=n(0),g=function(e){return Object(O.jsx)("header",{className:h.a.header,children:Object(O.jsxs)("div",{className:h.a.topnav,children:[Object(O.jsx)(j.b,{to:"/profile",children:"Home"}),Object(O.jsx)(j.b,{to:"/contacts",children:"Contacts"}),Object(O.jsx)(j.b,{to:"/about",children:"About"}),Object(O.jsx)("div",{className:h.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(O.jsx)(j.b,{to:"/login",children:"Login"})})]})})},m=n(8),v=n.n(m),x=n(16),_=n(12),w=n(31),C="blackberry/auth/SET_USER_DATA",k="GET_CAPTCHA_URL_SUCCESS",P={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,captchaUrl:null},y=function(e,t,n,r){return{type:C,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(e){return{type:k,payload:{captchaUrl:e}}},N=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,s,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(y(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(S(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case k:return Object(p.a)(Object(p.a)({},e),t.payload);default:return e}},U=n(35),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(U.a,{}):null,Object(O.jsx)(g,Object(p.a)({},this.props))]})}}]),n}(a.a.Component),L=Object(d.b)((function(e){return{isFetching:e.auth.isFetching,isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.Logout();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(F),D=function(){return Object(O.jsx)("div",{className:h.a.about,children:Object(O.jsx)("h3",{children:"Hello Its About"})})},A=function(){return Object(O.jsx)("div",{className:h.a.contacts,children:Object(O.jsx)("h3",{children:"Hello Its Contacts"})})},T=n(131),z=n(19),M=n.n(z),H=n(32),R=n(70),G=Object(T.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(H.b)("Email","email",[R.b],H.a),Object(H.b)("Password","password",[R.b],H.a,{type:"password"}),Object(H.b)(null,"rememberMe",[],H.a,{type:"checkbox"},"rememberMe"),r&&Object(O.jsx)("img",{src:r}),r&&Object(H.b)("Symbols from image","captcha",[R.b],H.a,{}),n&&Object(O.jsx)("div",{className:M.a.formSummaryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"login"})})]})})),W=Object(d.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(v.a.mark((function a(s){var c,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.Login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(N()):(10===c.data.resultCode&&s(I()),i=c.data.messages.length>0?c.data.messages[0]:"Some Error",s(Object(w.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(b.a,{to:"/profile"}):Object(O.jsxs)("div",{className:M.a.loginPage,children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)(G,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),B=function(e){return Object(O.jsx)("div",{})},V=n(42),q=n.n(V),Y=function(e){var t="/profile/"+e.id;return Object(O.jsxs)("div",{className:q.a.sidebar+" "+q.a.active,children:[Object(O.jsx)("img",{src:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}),Object(O.jsx)(j.b,{to:t,activeClassName:q.a.activeLink,children:e.name})]})},K=function(e){var t=e.sidebarData.map((function(e){return Object(O.jsx)(Y,{name:e.name,id:e.id},e.id)}));return Object(O.jsx)("div",{className:q.a.sidebar,children:Object(O.jsx)("div",{className:q.a.sidebarItems,children:t})})},J=Object(d.b)((function(e){return{sidebarData:e.sidebarPage.sidebarData}}),(function(e){return{}}))(K),X=n(17),Z=n.n(X),$=function(){return Object(O.jsxs)("nav",{className:Z.a.nav,children:[Object(O.jsx)("div",{className:Z.a.item,children:Object(O.jsx)(j.b,{to:"/profile",activeClassName:Z.a.activeLink,children:"Profile"})}),Object(O.jsxs)("div",{className:Z.a.item,children:[Object(O.jsx)(j.b,{to:"/dialogs",activeClassName:Z.a.activeLink,children:"Messages"}),Object(O.jsx)("div",{className:Z.a.item,children:Object(O.jsx)(j.b,{to:"/users",activeClassName:Z.a.activeLink,children:"Users"})})]}),Object(O.jsx)("div",{className:Z.a.item,children:Object(O.jsx)(j.b,{to:"/news",activeClassName:Z.a.activeLink,children:"News"})}),Object(O.jsx)("div",{className:Z.a.item,children:Object(O.jsx)(j.b,{to:"/music",activeClassName:Z.a.activeLink,children:"Music"})}),Object(O.jsx)("div",{className:Z.a.item,children:Object(O.jsx)(j.b,{to:"/settings",activeClassName:Z.a.activeLink,children:"Settings"})}),Object(O.jsxs)("div",{className:Z.a.block,children:[Object(O.jsx)("h3",{children:"Friends"}),Object(O.jsx)(J,{}),Object(O.jsx)("div",{className:Z.a.activeLink})]})]})},Q=function(e){return Object(O.jsx)("div",{children:"News"})},ee=n(135),te=n.n(ee),ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:te.a.settings})})}}]),n}(r.Component),re=n(48),ae=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),r):e}))},se="FOLLOW",ce="UNFOLLOW",ie="SET_USERS",oe="SET_CURRENT_PAGE",ue="SET_TOTAL_USERS_COUNT",le="TOGGLE_IS_FETCHING",de="TOGGLE_IS_FOLLOWING_PROGRESS",be={usersData:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},je=function(e){return{type:se,userId:e}},pe=function(e){return{type:ce,userId:e}},fe=function(e){return{type:oe,currentPage:e}},he=function(e){return{type:le,isFetching:e}},Oe=function(e,t){return{type:de,isFetching:e,userId:t}},ge=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Oe(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(Oe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(p.a)(Object(p.a)({},e),{},{usersData:ae(e.usersData,t.userId,"id",{followed:!0})});case ce:return Object(p.a)(Object(p.a)({},e),{},{usersData:ae(e.usersData,t.userId,"id",{followed:!1})});case ie:return Object(p.a)(Object(p.a)({},e),{},{usersData:t.users});case oe:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case ue:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case le:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case de:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(re.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ve=n(49),xe=n(60),_e=n.n(xe),we=n(72),Ce=n(99),ke=n(50),Pe=n.n(ke),ye=n(136),Se=n.n(ye),Ne=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),b=Object(r.useState)(1),j=Object(Ce.a)(b,2),p=j[0],f=j[1],h=(p-1)*i+1,g=p*i;return Object(O.jsxs)("div",{className:Pe.a.paginator,children:[p>1&&Object(O.jsx)("button",{className:Pe.a.prev,onClick:function(){f(p-1)},children:"\u2039"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:Se()(Object(we.a)({},Pe.a.selectedPage,a===e),Pe.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>p&&Object(O.jsx)("button",{className:Pe.a.next,onClick:function(){f(p+1)},children:"\u203a"})]})},Ie=n(129),Ee=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,a=e.follow;return Object(O.jsxs)("div",{className:_e.a.users,children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(j.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ie.a,className:_e.a.users})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"u.location.country"}),Object(O.jsx)("div",{children:"u.location.city"})]})]})]})},Ue=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.usersData,c=Object(ve.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","usersData"]);return Object(O.jsxs)("div",{className:_e.a.users,children:[Object(O.jsx)(Ne,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(O.jsx)("div",{children:s.map((function(e){return Object(O.jsx)(Ee,{user:e,followingInProgress:c.followingInProgress,unFollow:c.unFollow,follow:c.follow},e.id)}))})]})},Fe=n(97),Le=n(11),De=n(137),Ae=Object(De.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),Te=function(e){return e.usersPage.pageSize},ze=function(e){return e.usersPage.totalUsersCount},Me=function(e){return e.usersPage.currentPage},He=function(e){return e.usersPage.isFetching},Re=function(e){return e.usersPage.followingInProgress},Ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(U.a,{}):null,Object(O.jsx)(Ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersData:this.props.usersData,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),We=Object(Le.d)(Object(d.b)((function(e){return{usersData:Ae(e),pageSize:Te(e),totalUsersCount:ze(e),currentPage:Me(e),isFetching:He(e),followingInProgress:Re(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ge(n,e,_.d.Follow.bind(_.d),je);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ge(n,e,_.d.unFollow.bind(_.d),pe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:fe,toggleFollowingProgress:Oe,requestUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(he(!0)),r(fe(e)),n.next=4,_.d.getUsers(e,t);case 4:a=n.sent,r(he(!1)),r((c=a.items,{type:ie,users:c})),r((s=a.totalCount,{type:ue,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}),Fe.a)(Ge),Be="INITIALIZED_SUCCESS",Ve={initialized:!1,globalError:null},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},Ye=n(98),Ke=n(130),Je={sidebarData:[{id:1,name:"Andrew"},{id:2,name:"Natig"},{id:3,name:"Leona"}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je;return e},Ze=n(138),$e=n(132),Qe=Object(Le.c)({profilePage:Ye.b,dialogsPage:Ke.b,sidebarPage:Xe,usersPage:me,auth:E,form:$e.a,app:qe}),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Le.d,tt=Object(Le.e)(Qe,et(Object(Le.a)(Ze.a)));window.__store__=tt;var nt=tt,rt=function(e){return function(t){return Object(O.jsx)(a.a.Suspense,{fallback:Object(O.jsx)(U.a,{}),children:Object(O.jsx)(e,Object(p.a)({},t))})}},at=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),st=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),ct=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some Error Occured")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(L,{}),Object(O.jsx)($,{}),Object(O.jsx)("div",{className:"app-wrapper-content",children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/dialogs",render:rt(at)}),Object(O.jsx)(b.b,{path:"/profile/:userId?",render:rt(st)}),Object(O.jsx)(b.b,{path:"/users",render:function(){return Object(O.jsx)(We,{})}}),Object(O.jsx)(b.b,{path:"/news",component:Q}),Object(O.jsx)(b.b,{path:"/music",component:B}),Object(O.jsx)(b.b,{path:"/settings",component:ne}),Object(O.jsx)(b.b,{path:"/contacts",component:A}),Object(O.jsx)(b.b,{path:"/about",component:D}),Object(O.jsx)(b.b,{path:"/login",component:W}),Object(O.jsx)(b.b,{path:"*",render:function(){return Object(O.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(O.jsx)(U.a,{})}}]),n}(r.Component),it=Object(Le.d)(b.g,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(N());Promise.all([t]).then((function(){e({type:Be})}))}}}))(ct),ot=function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{store:nt,children:Object(O.jsx)(it,{})})})};c.a.render(Object(O.jsx)(ot,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(3),a=n(49),s=(n(1),n(92)),c=n(19),i=n.n(c),o=n(0),u=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:i.a.dialogInput},t),s))}),c&&Object(o.jsx)("span",{children:n.error})]})},l=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:i.a.profileInput},t),s))}),c&&Object(o.jsx)("span",{children:n.error})]})},d=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),c=n.touched&&n.error;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:i.a.profileInput},t),s))}),c&&Object(o.jsx)("span",{children:n.error})]})},b=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a,className:i.a.login},c))," ",u]})}},35:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.e075fe4c.svg",a=n(0);t.a=function(e){return Object(a.jsx)("img",{src:r})}},38:function(e,t,n){e.exports={header:"Header_header__1VCKf",topnav:"Header_topnav__rp6kN",active:"Header_active__vmCnS",contacts:"Header_contacts__3BMEG",about:"Header_about__3u2r_",loginBlock:"Header_loginBlock__6mma5"}},42:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2WupE",siderbarItems:"Sidebar_siderbarItems__3_k5M",dialogsItems:"Sidebar_dialogsItems__3eY6h",sidebarItems:"Sidebar_sidebarItems__8iCBY",activeLink:"Sidebar_activeLink__1lvgz"}},50:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki",prev:"Paginator_prev__1kPzt",next:"Paginator_next__1HYG1"}},60:function(e,t,n){e.exports={users:"Users_users__2Iv27"}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),a=n(27),s=n(28),c=n(30),i=n(29),o=n(1),u=n.n(o),l=n(14),d=n(10),b=n(0),j=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(r.a)({},this.props)):Object(b.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(8),a=n.n(r),s=n(16),c=n(48),i=n(3),o=n(31),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",b="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",f={postsData:[{id:1,message:"Hi, how are you?",likesCount:"15 likes"},{id:2,message:"Its my new post",likesCount:"20 likes"},{id:3,message:"Look this post",likesCount:"15 likes"},{id:4,message:"Looking for a job",likesCount:"8 likes"},{id:5,message:"Reading posts",likesCount:"10 likes"},{id:6,message:"I have a new car",likesCount:"17 likes"},{id:7,message:"Welcome to the group",likesCount:"16 likes"}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:b,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(g(s)),t.next=10;break;case 8:return n(Object(o.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case b:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.10ce6471.chunk.js.map