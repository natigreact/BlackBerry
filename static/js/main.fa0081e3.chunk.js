(this["webpackJsonpkvant-app"]=this["webpackJsonpkvant-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(133),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7470744c-b0c9-4f19-8251-815a8819bbdf"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},Follow:function(e){return a.post("follow/".concat(e),{})},unFollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Please use ProfileAPI object"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},c={me:function(){return a.get("auth/me")},Login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},Logout:function(){return a.delete("auth/login")}}},129:function(e,t,n){"use strict";t.a=n.p+"static/media/user.f7d6eb9b.png"},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(48),a=n(3),s="ADD-MESSAGE",i={messagesData:[{id:1,message:"Hello"},{id:2,message:"Nice day"},{id:3,message:"We are friends"},{id:4,message:"nice to meet you"},{id:5,message:"Next level"},{id:6,message:"Hi"},{id:7,message:"Welcome"},{id:8,message:"Music is on"},{id:9,message:"Happy day"},{id:10,message:"nice car"},{id:11,message:"My way is open"},{id:12,message:"new home"},{id:13,message:"Like this"},{id:14,message:"well"},{id:15,message:"door is open"},{id:16,message:"movie"}],dialogsData:[{id:1,name:"Andrew"},{id:2,name:"Natig"},{id:3,name:"Leona"},{id:4,name:"Vlad"},{id:5,name:"Cherry"},{id:6,name:"Terminator"}]},c=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:7,message:n}])});default:return e}}},135:function(e,t,n){e.exports={settings:"Settings_settings__3U6ep"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",block:"Navbar_block__3UHLw"}},168:function(e,t,n){},172:function(e,t,n){},19:function(e,t,n){e.exports={dialogInput:"FormsControls_dialogInput__1scVe",profileInput:"FormsControls_profileInput__2mlTu",formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n.n(r),s=n(69),i=n.n(s),c=(n(168),n(27)),o=n(28),u=n(30),l=n(29),d=n(14),b=n(10),j=n(13),p=(n(172),n(3)),f=n(37),h=n.n(f),O=n(0),g=function(e){return Object(O.jsx)("header",{className:h.a.header,children:Object(O.jsxs)("div",{className:h.a.topnav,children:[Object(O.jsx)(j.b,{to:"/profile",children:"Home"}),Object(O.jsx)(j.b,{to:"/contacts",children:"Contacts"}),Object(O.jsx)(j.b,{to:"/about",children:"About"}),Object(O.jsx)("div",{className:h.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(O.jsx)(j.b,{to:"/login",children:"Login"})})]})})},m=n(9),v=n.n(m),x=n(17),_=n(12),w=n(31),P="blackberry/auth/SET_USER_DATA",C="TOGGLE_IS_FETCHING",k={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},y=function(e,t,n,r){return{type:P,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,i=r.login,t(y(a,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(p.a)(Object(p.a)({},e),t.payload);case C:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});default:return e}},I=n(34),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(I.a,{}):null,Object(O.jsx)(g,Object(p.a)({},this.props))]})}}]),n}(a.a.Component),F=Object(d.b)((function(e){return{isFetching:e.auth.isFetching,isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.Logout();case 2:0===e.sent.data.resultCode&&t(y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(E),L=function(){return Object(O.jsx)("div",{className:h.a.about,children:Object(O.jsx)("h3",{children:"Hello Its About"})})},D=function(){return Object(O.jsx)("div",{className:h.a.contacts,children:Object(O.jsx)("h3",{children:"Hello Its Contacts"})})},T=n(131),A=n(19),U=n.n(A),z=n(40),M=n(89),H=Object(T.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(O.jsxs)("form",{onSubmit:t,children:[Object(z.b)("Email","email",[M.b],z.a),Object(z.b)("Password","password",[M.b],z.a,{type:"password"}),Object(z.b)(null,"rememberMe",[],z.a,{type:"checkbox"},"rememberMe"),n&&Object(O.jsx)("div",{className:U.a.formSummaryError,children:n}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"login"})})]})})),G=Object(d.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(v.a.mark((function r(a){var s,i;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.Login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(i=s.data.messages.length>0?s.data.messages[0]:"Some Error",a(Object(w.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(b.a,{to:"/profile"}):Object(O.jsxs)("div",{className:U.a.loginPage,children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)(H,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),R=function(e){return Object(O.jsx)("div",{})},W=n(42),B=n.n(W),V=function(e){var t="/profile/"+e.id;return Object(O.jsxs)("div",{className:B.a.sidebar+" "+B.a.active,children:[Object(O.jsx)("img",{src:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"}),Object(O.jsx)(j.b,{to:t,activeClassName:B.a.activeLink,children:e.name})]})},q=function(e){var t=e.sidebarData.map((function(e){return Object(O.jsx)(V,{name:e.name,id:e.id},e.id)}));return Object(O.jsx)("div",{className:B.a.sidebar,children:Object(O.jsx)("div",{className:B.a.sidebarItems,children:t})})},Y=Object(d.b)((function(e){return{sidebarData:e.sidebarPage.sidebarData}}),(function(e){return{}}))(q),K=n(16),J=n.n(K),X=function(){return Object(O.jsxs)("nav",{className:J.a.nav,children:[Object(O.jsx)("div",{className:J.a.item,children:Object(O.jsx)(j.b,{to:"/profile",activeClassName:J.a.activeLink,children:"Profile"})}),Object(O.jsxs)("div",{className:J.a.item,children:[Object(O.jsx)(j.b,{to:"/dialogs",activeClassName:J.a.activeLink,children:"Messages"}),Object(O.jsx)("div",{className:J.a.item,children:Object(O.jsx)(j.b,{to:"/users",activeClassName:J.a.activeLink,children:"Users"})})]}),Object(O.jsx)("div",{className:J.a.item,children:Object(O.jsx)(j.b,{to:"/news",activeClassName:J.a.activeLink,children:"News"})}),Object(O.jsx)("div",{className:J.a.item,children:Object(O.jsx)(j.b,{to:"/music",activeClassName:J.a.activeLink,children:"Music"})}),Object(O.jsx)("div",{className:J.a.item,children:Object(O.jsx)(j.b,{to:"/settings",activeClassName:J.a.activeLink,children:"Settings"})}),Object(O.jsxs)("div",{className:J.a.block,children:[Object(O.jsx)("h3",{children:"Friends"}),Object(O.jsx)(Y,{}),Object(O.jsx)("div",{className:J.a.activeLink})]})]})},Z=function(e){return Object(O.jsx)("div",{children:"News"})},$=n(135),Q=n.n($),ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:Q.a.settings})})}}]),n}(r.Component),te=n(48),ne=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(p.a)(Object(p.a)({},e),r):e}))},re="FOLLOW",ae="UNFOLLOW",se="SET_USERS",ie="SET_CURRENT_PAGE",ce="SET_TOTAL_USERS_COUNT",oe="TOGGLE_IS_FETCHING",ue="TOGGLE_IS_FOLLOWING_PROGRESS",le={usersData:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},de=function(e){return{type:re,userId:e}},be=function(e){return{type:ae,userId:e}},je=function(e){return{type:ie,currentPage:e}},pe=function(e){return{type:oe,isFetching:e}},fe=function(e,t){return{type:ue,isFetching:e,userId:t}},he=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(fe(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(fe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(p.a)(Object(p.a)({},e),{},{usersData:ne(e.usersData,t.userId,"id",{followed:!0})});case ae:return Object(p.a)(Object(p.a)({},e),{},{usersData:ne(e.usersData,t.userId,"id",{followed:!1})});case se:return Object(p.a)(Object(p.a)({},e),{},{usersData:t.users});case ie:return Object(p.a)(Object(p.a)({},e),{},{currentPage:t.currentPage});case ce:return Object(p.a)(Object(p.a)({},e),{},{totalUsersCount:t.count});case oe:return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.isFetching});case ue:return Object(p.a)(Object(p.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(te.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ge=n(49),me=n(60),ve=n.n(me),xe=n(71),_e=n(99),we=n(50),Pe=n.n(we),Ce=n(136),ke=n.n(Ce),ye=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/c),b=Object(r.useState)(1),j=Object(_e.a)(b,2),p=j[0],f=j[1],h=(p-1)*c+1,g=p*c;return Object(O.jsxs)("div",{className:Pe.a.paginator,children:[p>1&&Object(O.jsx)("button",{className:Pe.a.prev,onClick:function(){f(p-1)},children:"\u2039"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(O.jsx)("span",{className:ke()(Object(xe.a)({},Pe.a.selectedPage,a===e),Pe.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>p&&Object(O.jsx)("button",{className:Pe.a.next,onClick:function(){f(p+1)},children:"\u203a"})]})},Se=n(129),Ne=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,a=e.follow;return Object(O.jsxs)("div",{className:ve.a.users,children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(j.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:Se.a,className:ve.a.users})})}),Object(O.jsx)("div",{children:t.followed?Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(O.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"u.location.country"}),Object(O.jsx)("div",{children:"u.location.city"})]})]})]})},Ie=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.usersData,i=Object(ge.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","usersData"]);return Object(O.jsxs)("div",{className:ve.a.users,children:[Object(O.jsx)(ye,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(O.jsx)("div",{children:s.map((function(e){return Object(O.jsx)(Ne,{user:e,followingInProgress:i.followingInProgress,unFollow:i.unFollow,follow:i.follow},e.id)}))})]})},Ee=n(97),Fe=n(11),Le=n(137),De=Object(Le.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),Te=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},Ue=function(e){return e.usersPage.currentPage},ze=function(e){return e.usersPage.isFetching},Me=function(e){return e.usersPage.followingInProgress},He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(I.a,{}):null,Object(O.jsx)(Ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersData:this.props.usersData,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Ge=Object(Fe.d)(Object(d.b)((function(e){return{usersData:De(e),pageSize:Te(e),totalUsersCount:Ae(e),currentPage:Ue(e),isFetching:ze(e),followingInProgress:Me(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:he(n,e,_.c.Follow.bind(_.c),de);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:he(n,e,_.c.unFollow.bind(_.c),be);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:je,toggleFollowingProgress:fe,requestUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(pe(!0)),r(je(e)),n.next=4,_.c.getUsers(e,t);case 4:a=n.sent,r(pe(!1)),r((i=a.items,{type:se,users:i})),r((s=a.totalCount,{type:ce,count:s}));case 8:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}),Ee.a)(He),Re="INITIALIZED_SUCCESS",We={initialized:!1},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},Ve=n(98),qe=n(130),Ye={sidebarData:[{id:1,name:"Andrew"},{id:2,name:"Natig"},{id:3,name:"Leona"}]},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return e},Je=n(138),Xe=n(132),Ze=Object(Fe.c)({profilePage:Ve.b,dialogsPage:qe.b,sidebarPage:Ke,usersPage:Oe,auth:N,form:Xe.a,app:Be}),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Fe.d,Qe=Object(Fe.e)(Ze,$e(Object(Fe.a)(Je.a)));window.__store__=Qe;var et=Qe,tt=function(e){return function(t){return Object(O.jsx)(a.a.Suspense,{fallback:Object(O.jsx)(I.a,{}),children:Object(O.jsx)(e,Object(p.a)({},t))})}},nt=a.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),rt=a.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),at=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(F,{}),Object(O.jsx)(X,{}),Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(b.b,{path:"/dialogs",render:tt(nt)}),Object(O.jsx)(b.b,{path:"/profile/:userId?",render:tt(rt)}),Object(O.jsx)(b.b,{path:"/users",render:function(){return Object(O.jsx)(Ge,{})}}),Object(O.jsx)(b.b,{path:"/news",component:Z}),Object(O.jsx)(b.b,{path:"/music",component:R}),Object(O.jsx)(b.b,{path:"/settings",component:ee}),Object(O.jsx)(b.b,{path:"/contacts",component:D}),Object(O.jsx)(b.b,{path:"/about",component:L}),Object(O.jsx)(b.b,{path:"/login",component:G})]})]}):Object(O.jsx)(I.a,{})}}]),n}(a.a.Component),st=Object(Fe.d)(b.f,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:Re})}))}}}))(at),it=function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{store:et,children:Object(O.jsx)(st,{})})})};i.a.render(Object(O.jsx)(it,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,n){"use strict";n(1);var r=n.p+"static/media/preloader.e075fe4c.svg",a=n(0);t.a=function(e){return Object(a.jsx)("img",{src:r})}},37:function(e,t,n){e.exports={header:"Header_header__1VCKf",topnav:"Header_topnav__rp6kN",active:"Header_active__vmCnS",contacts:"Header_contacts__3BMEG",about:"Header_about__3u2r_",loginBlock:"Header_loginBlock__6mma5"}},40:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(3),a=n(49),s=(n(1),n(92)),i=n(19),c=n.n(i),o=n(0),u=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:c.a.dialogInput},t),s))}),i&&Object(o.jsx)("span",{children:n.error})]})},l=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:c.a.profileInput},t),s))}),i&&Object(o.jsx)("span",{children:n.error})]})},d=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(i?c.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:c.a.profileInput},t),s))}),i&&Object(o.jsx)("span",{children:n.error})]})},b=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a,className:c.a.login},i))," ",u]})}},42:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2WupE",siderbarItems:"Sidebar_siderbarItems__3_k5M",dialogsItems:"Sidebar_dialogsItems__3eY6h",sidebarItems:"Sidebar_sidebarItems__8iCBY",activeLink:"Sidebar_activeLink__1lvgz"}},50:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki",prev:"Paginator_prev__1kPzt",next:"Paginator_next__1HYG1"}},60:function(e,t,n){e.exports={users:"Users_users__2Iv27"}},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),a=n(27),s=n(28),i=n(30),c=n(29),o=n(1),u=n.n(o),l=n(14),d=n(10),b=n(0),j=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(r.a)({},this.props)):Object(b.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(9),a=n.n(r),s=n(17),i=n(48),c=n(3),o=n(31),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",b="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",f={postsData:[{id:1,message:"Hi, how are you?",likesCount:"15 likes"},{id:2,message:"Its my new post",likesCount:"20 likes"},{id:3,message:"Look this post",likesCount:"15 likes"},{id:4,message:"Looking for a job",likesCount:"8 likes"},{id:5,message:"Reading posts",likesCount:"10 likes"},{id:6,message:"I have a new car",likesCount:"17 likes"},{id:7,message:"Welcome to the group",likesCount:"16 likes"}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:b,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}n(g(s)),t.next=10;break;case 8:return n(Object(o.a)("edit-profile",{_error:i.data.messages[0]})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{postsData:[].concat(Object(i.a)(e.postsData),[n])});case d:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case b:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case j:return Object(c.a)(Object(c.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case p:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[293,1,2]]]);
//# sourceMappingURL=main.fa0081e3.chunk.js.map