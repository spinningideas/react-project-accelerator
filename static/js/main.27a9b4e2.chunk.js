(this["webpackJsonpreact-project-accelerator"]=this["webpackJsonpreact-project-accelerator"]||[]).push([[0],{61:function(e,n,t){"use strict";var a=t(25),r=t.n(a),o=t(59),c=t(36),i={enUS:"English",zhCN:"Chinese",esES:"Spanish"};n.a=function(){var e=function(){var e=window.localStorage.getItem("locale");return e||"enUS"},n=function(){var e=Object(c.a)(r.a.mark((function e(n,a){var c,i,l,u,s,d,p,m,g,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},e.next=3,t(a);case 3:i=e.sent,l=i,u=Object.keys(l),s=Object(o.a)(n);try{for(s.s();!(d=s.n()).done;){p=d.value,m=Object(o.a)(u);try{for(m.s();!(g=m.n()).done;)f=g.value,p===f&&(c[f]=l[f])}catch(r){m.e(r)}finally{m.f()}}}catch(r){s.e(r)}finally{s.f()}return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="i18n/".concat(n,".json"),e.abrupt("return",fetch(t).then((function(e){return console.log(e),e.json()})).then((function(e){return e})).catch((function(e){console.log("Error Reading data "+e)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{setUserLocale:function(e){window.localStorage.setItem("locale",e)},getUserLocale:e,getLocales:function(){return i},getCurrentLocale:function(){var n=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var t=0;t<navigator.languages.length;t++)n.push(navigator.languages[t]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return 0===n.length?e():n[0]},getLocalizedTextSet:n}}},66:function(e,n,t){"use strict";n.a=function(){var e=function(e){window.localStorage.setItem("usersignedin",Boolean(e))};return{userHasSignedIn:function(){var e=window.localStorage.getItem("usersignedin");return!!e&&"true"===e},setUserHasSignedIn:e,signIn:function(){e(!0)},signOut:function(){e(!1)}}}},85:function(e,n,t){e.exports=t(98)},92:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=t(24),l=t(17),u=t(155),s=t(75),d="#212121",p={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#1976d2",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#1e88e5",A200:"#1976d2",A400:"#1976d2",A700:"#0d47a1",contrastDefaultColor:"light",light:"#bbdefb"},m=p[700],g=p[900],f="#616161",h=d,b="#f5f5f5",E=d,w="#FFFFFF",v=Object(s.a)({typography:{fontFamily:'"Roboto", sans-serif',useNextVariants:!0},palette:{type:"light",primary:p,secondary:p},primary:{main:w,light:w,dark:m,contrastText:h,text:E},secondary:{main:w,light:w,dark:f,text:E,contrastText:E},light:{background:{default:w,paper:w,appBar:w,contentFrame:"#eeeeee",chip:b}},dark:{background:{default:"#fafafa",paper:w,appBar:E,contentFrame:"#eeeeee",chip:b}},overrides:{MuiAppBar:{colorPrimary:{color:E,backgroundColor:w}},MuiPaper:{root:{backgroundColor:w}},MuiCard:{root:{color:E,backgroundColor:w}},MuiDialog:{paper:{margin:"0"}},MuiInput:{input:{padding:10}},MuiButton:{textPrimary:{background:m,color:b,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:g,color:b}},textSecondary:{background:f,color:b,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:h,color:b}}}},gutters:0}),S=(t(92),t(28)),k=t(9),y=t(154),j=t(4),O=t(52),x=t.n(O),C=t(138);var I=Object(j.a)((function(e){return{progress:{margin:e.spacing(6),color:"#1976d2"}}}))((function(e){var n=e.classes;return void 0===e.display||!1===e.display?r.a.createElement(r.a.Fragment,null):r.a.createElement(C.a,{className:n.progress,thickness:5,size:100})})),L=r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/",exact:!0,component:x()({loader:function(){return t.e(5).then(t.bind(null,166))},loading:I})}),r.a.createElement(k.b,{path:"/about",component:x()({loader:function(){return t.e(3).then(t.bind(null,164))},loading:I})}),r.a.createElement(k.b,{path:"/contact",component:x()({loader:function(){return t.e(4).then(t.bind(null,165))},loading:I})}),r.a.createElement(k.a,{to:"/"})),M=t(66),N=t(25),F=t.n(N),B=t(36),T=t(146),D=t(147),U=t(148),z=t(34),P=t(145),A=t(149),R=t(156),G=t(60),H=t.n(G),J=t(151),V=t(150),q=t(104),K=t(152),Q=t(153),W=t(157),X=t(71),Y=t.n(X),Z=t(73),$=t.n(Z),_=t(72),ee=t.n(_),ne=t(74),te=t.n(ne),ae=t(61),re=t(140),oe=t(142),ce=t(143),ie=t(144),le=t(141);var ue=function(e){return r.a.createElement("div",null,r.a.createElement(re.a,{open:e.open,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description"},r.a.createElement(le.a,{id:"dialog-title"},"Sign In"),e.content&&r.a.createElement(oe.a,null,r.a.createElement(ce.a,{id:"dialog-description"},e.content)),r.a.createElement(ie.a,null,r.a.createElement(P.a,{onClick:function(){e.handleSignInCancel(!1)}},"Cancel"),r.a.createElement(P.a,{onClick:function(){e.handleSignIn()},color:"secondary",autoFocus:!0},"Sign In"))))},se=Object(T.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},appTitle:{flexGrow:1},sideMenuDrawer:{top:"65px",width:240,height:"100%",flexShrink:0},sideMenuDrawerPaper:{width:240},sideMenuList:{padding:10,width:"240px"},sideMenuListItem:{paddingLeft:10}}}));function de(e){var n=Object(a.useState)(!1),t=Object(S.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)({}),u=Object(S.a)(l,2),s=u[0],d=u[1],p=Object(a.useState)(null),m=Object(S.a)(p,2),g=m[0],f=m[1],h=Object(a.useState)(!1),b=Object(S.a)(h,2),E=b[0],w=b[1],v=se(),k=Object(ae.a)();Object(a.useEffect)((function(){function e(){return(e=Object(B.a)(F.a.mark((function e(){var n,t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.getUserLocale(),e.next=3,k.getLocalizedTextSet(["apptitle","signin","signout","home","contact","about"],n);case 3:t=e.sent,d(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=function(){c(!1)},j=function(e){k.setUserLocale(e),f(null),window.location.reload()},O=function(){e.handleSignOut()};return r.a.createElement("div",{className:v.root},r.a.createElement(D.a,{position:"static",className:v.appBar},r.a.createElement(U.a,null,r.a.createElement(A.a,{edge:"start",onClick:function(){c(!o)},className:v.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(H.a,null)),r.a.createElement(z.a,{variant:"h6",className:v.appTitle},s.apptitle),r.a.createElement(P.a,{"aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)}},"Language"),r.a.createElement(R.a,{id:"language-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){f(null)}},r.a.createElement(J.a,{onClick:function(){return j("enUS")}},"English"),r.a.createElement(J.a,{onClick:function(){return j("zhCN")}},"Chinese"),r.a.createElement(J.a,{onClick:function(){return j("esES")}},"Spanish")),e.userSignedIn&&r.a.createElement(P.a,{color:"inherit",onClick:O},s.signout),!e.userSignedIn&&r.a.createElement(P.a,{color:"inherit",onClick:function(){return w(!0)}},s.signin))),r.a.createElement(W.a,{anchor:"left",variant:"persistent",color:"primary",open:o,className:v.sideMenuDrawer,classes:{paper:v.sideMenuDrawerPaper}},r.a.createElement(U.a,null,r.a.createElement(A.a,{edge:"start",onClick:y,className:v.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(H.a,null))),r.a.createElement(V.a,{className:v.sideMenuList},r.a.createElement(q.a,{button:!0,className:v.sideMenuListItem,onClick:y,component:i.b,to:"/"},r.a.createElement(K.a,null,r.a.createElement(Y.a,null)),r.a.createElement(Q.a,{primary:s.home})),r.a.createElement(q.a,{button:!0,className:v.sideMenuListItem,onClick:function(){return y},component:i.b,to:"/contact"},r.a.createElement(K.a,null,r.a.createElement(ee.a,null)),r.a.createElement(Q.a,{primary:s.contact})),r.a.createElement(q.a,{button:!0,className:v.sideMenuListItem,onClick:function(){return y},component:i.b,to:"/about"},r.a.createElement(K.a,null,r.a.createElement($.a,null)),r.a.createElement(Q.a,{primary:s.about})),e.userSignedIn&&r.a.createElement(q.a,{button:!0,disableGutters:!0,className:v.sideMenuListItem,onClick:function(){O()}},r.a.createElement(K.a,null,r.a.createElement(te.a,null)),r.a.createElement(Q.a,{primary:"Sign Out"})))),r.a.createElement(ue,{open:E,handleSignIn:function(){w(!1),e.handleSignIn()},handleSignInCancel:function(){return w(!1)}}))}var pe=Object(k.g)(Object(j.a)((function(e){return{root:{flexGrow:1,display:"flex"},appbar:{height:"65px",width:"100%"},content:{flexGrow:1,padding:e.spacing(3)}}}),{withTheme:!0})((function(e){var n=Object(a.useState)(!1),t=Object(S.a)(n,2),o=t[0],c=t[1],i=e.classes,l=Object(M.a)(),u=Object(a.useRef)(e.location);return Object(a.useEffect)((function(){var e=l.userHasSignedIn();c(e)}),[o]),Object(a.useEffect)((function(){u&&u.current&&e.location&&e.location.pathname&&u.current!==e.location.pathname&&(u.current=e.location.pathname,window.scrollTo(0,0))}),[e.location.key]),r.a.createElement(y.a,{container:!0,className:i.root,spacing:0},r.a.createElement(y.a,{item:!0,className:i.appbar,xs:12},r.a.createElement(de,{userSignedIn:o,handleSignIn:function(){l.signIn(),window&&window.location&&window.location.reload(!0)},handleSignOut:function(){l.signOut(),window&&window.location&&window.location.reload(!0)}})),r.a.createElement(y.a,{item:!0,className:i.content,xs:12},L))}))),me=t(67),ge=t(68),fe=t(70),he=t(69),be=function(e){Object(fe.a)(t,e);var n=Object(he.a)(t);function t(e){var a;return Object(me.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(ge.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Something went wrong. Please reload the page to continue"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(r.a.Component),Ee=Object(l.a)({basename:"/react-project-accelerator"}),we=function(){return r.a.createElement(be,null,r.a.createElement(u.a,{theme:v},r.a.createElement(i.a,{history:Ee},r.a.createElement(pe,null))))};c.a.render(r.a.createElement(we,null),document.getElementById("appshell"))}},[[85,1,2]]]);
//# sourceMappingURL=main.27a9b4e2.chunk.js.map