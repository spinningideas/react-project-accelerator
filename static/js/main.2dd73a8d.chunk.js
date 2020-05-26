(this["webpackJsonpreact-project-accelerator"]=this["webpackJsonpreact-project-accelerator"]||[]).push([[0],{61:function(e,n,t){"use strict";var a=t(25),r=t.n(a),o=t(59),c=t(36),i={enUS:"English",zhCN:"Chinese",esES:"Spanish"};n.a=function(){var e=function(){var e=window.localStorage.getItem("locale");return e||"enUS"},n=function(){var e=Object(c.a)(r.a.mark((function e(n,a){var c,i,l,u,s,d,p,m,g,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},e.next=3,t(a);case 3:i=e.sent,l=i,u=Object.keys(l),s=Object(o.a)(n);try{for(s.s();!(d=s.n()).done;){p=d.value,m=Object(o.a)(u);try{for(m.s();!(g=m.n()).done;)f=g.value,p===f&&(c[f]=l[f])}catch(r){m.e(r)}finally{m.f()}}}catch(r){s.e(r)}finally{s.f()}return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="i18n/".concat(n,".json"),e.abrupt("return",fetch(t).then((function(e){return console.log(e),e.json()})).then((function(e){return e})).catch((function(e){console.log("Error Reading data "+e)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{setUserLocale:function(e){window.localStorage.setItem("locale",e)},getUserLocale:e,getLocales:function(){return i},getCurrentLocale:function(){var n=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var t=0;t<navigator.languages.length;t++)n.push(navigator.languages[t]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return 0===n.length?e():n[0]},getLocalizedTextSet:n}}},66:function(e,n,t){"use strict";n.a=function(){var e=function(e){window.localStorage.setItem("usersignedin",Boolean(e))};return{userHasSignedIn:function(){var e=window.localStorage.getItem("usersignedin");return!!e&&"true"===e},setUserHasSignedIn:e,signIn:function(){e(!0)},signOut:function(){e(!1)}}}},85:function(e,n,t){e.exports=t(98)},92:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=t(24),l=t(155),u=t(75),s="#212121",d={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#1976d2",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#1e88e5",A200:"#1976d2",A400:"#1976d2",A700:"#0d47a1",contrastDefaultColor:"light",light:"#bbdefb"},p=d[700],m=d[900],g="#616161",f=s,h="#f5f5f5",b=s,E="#FFFFFF",w=Object(u.a)({typography:{fontFamily:'"Roboto", sans-serif',useNextVariants:!0},palette:{type:"light",primary:d,secondary:d},primary:{main:E,light:E,dark:p,contrastText:f,text:b},secondary:{main:E,light:E,dark:g,text:b,contrastText:b},light:{background:{default:E,paper:E,appBar:E,contentFrame:"#eeeeee",chip:h}},dark:{background:{default:"#fafafa",paper:E,appBar:b,contentFrame:"#eeeeee",chip:h}},overrides:{MuiAppBar:{colorPrimary:{color:b,backgroundColor:E}},MuiPaper:{root:{backgroundColor:E}},MuiCard:{root:{color:b,backgroundColor:E}},MuiDialog:{paper:{margin:"0"}},MuiInput:{input:{padding:10}},MuiButton:{textPrimary:{background:p,color:h,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:m,color:h}},textSecondary:{background:g,color:h,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:f,color:h}}}},gutters:0}),v=(t(92),t(28)),S=t(9),k=t(154),y=t(4),O=t(52),j=t.n(O),x=t(138);var C=Object(y.a)((function(e){return{progress:{margin:e.spacing(6),color:"#1976d2"}}}))((function(e){var n=e.classes;return void 0===e.display||!1===e.display?r.a.createElement(r.a.Fragment,null):r.a.createElement(x.a,{className:n.progress,thickness:5,size:100})})),I=r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,component:j()({loader:function(){return t.e(5).then(t.bind(null,166))},loading:C})}),r.a.createElement(S.b,{path:"/about",component:j()({loader:function(){return t.e(3).then(t.bind(null,164))},loading:C})}),r.a.createElement(S.b,{path:"/contact",component:j()({loader:function(){return t.e(4).then(t.bind(null,165))},loading:C})}),r.a.createElement(S.a,{to:"/"})),L=t(66),M=t(25),N=t.n(M),F=t(36),B=t(146),T=t(147),D=t(148),U=t(34),z=t(145),P=t(149),A=t(156),R=t(60),G=t.n(R),H=t(151),J=t(150),V=t(104),q=t(152),K=t(153),Q=t(157),W=t(71),X=t.n(W),Y=t(73),Z=t.n(Y),$=t(72),_=t.n($),ee=t(74),ne=t.n(ee),te=t(61),ae=t(140),re=t(142),oe=t(143),ce=t(144),ie=t(141);var le=function(e){return r.a.createElement("div",null,r.a.createElement(ae.a,{open:e.open,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description"},r.a.createElement(ie.a,{id:"dialog-title"},"Sign In"),e.content&&r.a.createElement(re.a,null,r.a.createElement(oe.a,{id:"dialog-description"},e.content)),r.a.createElement(ce.a,null,r.a.createElement(z.a,{onClick:function(){e.handleSignInCancel(!1)}},"Cancel"),r.a.createElement(z.a,{onClick:function(){e.handleSignIn()},color:"secondary",autoFocus:!0},"Sign In"))))},ue=Object(B.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},appTitle:{flexGrow:1},sideMenuDrawer:{top:"65px",width:240,height:"100%",flexShrink:0},sideMenuDrawerPaper:{width:240},sideMenuList:{padding:10,width:"240px"},sideMenuListItem:{paddingLeft:10}}}));function se(e){var n=Object(a.useState)(!1),t=Object(v.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)({}),u=Object(v.a)(l,2),s=u[0],d=u[1],p=Object(a.useState)(null),m=Object(v.a)(p,2),g=m[0],f=m[1],h=Object(a.useState)(!1),b=Object(v.a)(h,2),E=b[0],w=b[1],S=ue(),k=Object(te.a)();Object(a.useEffect)((function(){function e(){return(e=Object(F.a)(N.a.mark((function e(){var n,t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.getUserLocale(),e.next=3,k.getLocalizedTextSet(["apptitle","signin","signout","home","contact","about"],n);case 3:t=e.sent,d(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=function(){c(!1)},O=function(e){k.setUserLocale(e),f(null),window.location.reload()},j=function(){e.handleSignOut()};return r.a.createElement("div",{className:S.root},r.a.createElement(T.a,{position:"static",className:S.appBar},r.a.createElement(D.a,null,r.a.createElement(P.a,{edge:"start",onClick:function(){c(!o)},className:S.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(G.a,null)),r.a.createElement(U.a,{variant:"h6",className:S.appTitle},s.apptitle),r.a.createElement(z.a,{"aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){f(e.currentTarget)}},"Language"),r.a.createElement(A.a,{id:"language-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){f(null)}},r.a.createElement(H.a,{onClick:function(){return O("enUS")}},"English"),r.a.createElement(H.a,{onClick:function(){return O("zhCN")}},"Chinese"),r.a.createElement(H.a,{onClick:function(){return O("esES")}},"Spanish")),e.userSignedIn&&r.a.createElement(z.a,{color:"inherit",onClick:j},s.signout),!e.userSignedIn&&r.a.createElement(z.a,{color:"inherit",onClick:function(){return w(!0)}},s.signin))),r.a.createElement(Q.a,{anchor:"left",variant:"persistent",color:"primary",open:o,className:S.sideMenuDrawer,classes:{paper:S.sideMenuDrawerPaper}},r.a.createElement(D.a,null,r.a.createElement(P.a,{edge:"start",onClick:y,className:S.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(G.a,null))),r.a.createElement(J.a,{className:S.sideMenuList},r.a.createElement(V.a,{button:!0,className:S.sideMenuListItem,onClick:y,component:i.b,to:"/"},r.a.createElement(q.a,null,r.a.createElement(X.a,null)),r.a.createElement(K.a,{primary:s.home})),r.a.createElement(V.a,{button:!0,className:S.sideMenuListItem,onClick:function(){return y},component:i.b,to:"/contact"},r.a.createElement(q.a,null,r.a.createElement(_.a,null)),r.a.createElement(K.a,{primary:s.contact})),r.a.createElement(V.a,{button:!0,className:S.sideMenuListItem,onClick:function(){return y},component:i.b,to:"/about"},r.a.createElement(q.a,null,r.a.createElement(Z.a,null)),r.a.createElement(K.a,{primary:s.about})),e.userSignedIn&&r.a.createElement(V.a,{button:!0,disableGutters:!0,className:S.sideMenuListItem,onClick:function(){j()}},r.a.createElement(q.a,null,r.a.createElement(ne.a,null)),r.a.createElement(K.a,{primary:"Sign Out"})))),r.a.createElement(le,{open:E,handleSignIn:function(){w(!1),e.handleSignIn()},handleSignInCancel:function(){return w(!1)}}))}var de=Object(S.g)(Object(y.a)((function(e){return{root:{flexGrow:1,display:"flex"},appbar:{height:"65px",width:"100%"},content:{flexGrow:1,padding:e.spacing(3)}}}),{withTheme:!0})((function(e){var n=Object(a.useState)(!1),t=Object(v.a)(n,2),o=t[0],c=t[1],i=e.classes,l=Object(L.a)(),u=Object(a.useRef)(e.location);return Object(a.useEffect)((function(){var e=l.userHasSignedIn();c(e)}),[o]),Object(a.useEffect)((function(){u&&u.current&&e.location&&e.location.pathname&&u.current!==e.location.pathname&&(u.current=e.location.pathname,window.scrollTo(0,0))}),[e.location.key]),r.a.createElement(k.a,{container:!0,className:i.root,spacing:0},r.a.createElement(k.a,{item:!0,className:i.appbar,xs:12},r.a.createElement(se,{userSignedIn:o,handleSignIn:function(){l.signIn(),window&&window.location&&window.location.reload(!0)},handleSignOut:function(){l.signOut(),window&&window.location&&window.location.reload(!0)}})),r.a.createElement(k.a,{item:!0,className:i.content,xs:12},I))}))),pe=t(67),me=t(68),ge=t(70),fe=t(69),he=function(e){Object(ge.a)(t,e);var n=Object(fe.a)(t);function t(e){var a;return Object(pe.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(me.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Something went wrong. Please reload the page to continue"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(r.a.Component),be=function(){return r.a.createElement(he,null,r.a.createElement(l.a,{theme:w},r.a.createElement(i.a,null,r.a.createElement(de,null))))};c.a.render(r.a.createElement(be,null),document.getElementById("appshell"))}},[[85,1,2]]]);
//# sourceMappingURL=main.2dd73a8d.chunk.js.map