(this["webpackJsonpreact-project-accelerator"]=this["webpackJsonpreact-project-accelerator"]||[]).push([[0],{103:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=t(27),l=t(161),u=t(80),s="#212121",d={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#1976d2",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#1e88e5",A200:"#1976d2",A400:"#1976d2",A700:"#0d47a1",contrastDefaultColor:"light",light:"#bbdefb"},g=d[700],p=d[900],m="#616161",f=s,h="#f5f5f5",b=s,w="#FFFFFF",E=Object(u.a)({typography:{fontFamily:'"Roboto", sans-serif',useNextVariants:!0},palette:{type:"light",primary:d,secondary:d},primary:{main:w,light:w,dark:g,contrastText:f,text:b},secondary:{main:w,light:w,dark:m,text:b,contrastText:b},light:{background:{default:w,paper:w,appBar:w,contentFrame:"#eeeeee",chip:h}},dark:{background:{default:"#fafafa",paper:w,appBar:b,contentFrame:"#eeeeee",chip:h}},overrides:{MuiAppBar:{colorPrimary:{color:b,backgroundColor:w}},MuiPaper:{root:{backgroundColor:w}},MuiCard:{root:{color:b,backgroundColor:w}},MuiDialog:{paper:{margin:"0"}},MuiInput:{input:{padding:10}},MuiButton:{textPrimary:{background:g,color:h,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:p,color:h}},textSecondary:{background:m,color:h,borderRadius:0,border:0,height:40,padding:"0 15px",boxShadow:"none","&:hover":{backgroundColor:f,color:h}}}},gutters:0}),v=(t(97),t(26)),y=t(9),S=t(160),O=t(104),j=t(55),k=t.n(j),x=t(49),C=r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/",exact:!0,component:k()({loader:function(){return t.e(4).then(t.bind(null,184))},loading:x.a})}),r.a.createElement(y.b,{path:"/about",component:k()({loader:function(){return t.e(3).then(t.bind(null,181))},loading:x.a})}),r.a.createElement(y.b,{path:"/contact",component:k()({loader:function(){return Promise.all([t.e(5),t.e(6)]).then(t.bind(null,182))},loading:x.a})}),r.a.createElement(y.a,{to:"/"})),I=t(70),N=function(){var e=function(){return r()&&!1===n()?t((function(){return Promise.resolve(!0)})):Promise.resolve(!1)},n=function(){return!("undefined"===typeof window.ga||!window.ga)},t=function e(t){if(r()&&!1===n()){a();var o=window.setInterval((function(){n()&&(window.clearInterval(o),e(t))}),100)}else t()},a=function(){if(window.GoogleAnalyticsObject="ga",!window.ga){window.ga=function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=1*new Date;var e=document.createElement("script"),n=document.getElementsByTagName("script")[0];e.async=1,e.src="//www.analytics-analytics.com/analytics.js",n.parentNode.insertBefore(e,n)}},r=function(){return!!c("analyticsEnabled")},o=function(e){c("analyticsLogEnabled")&&console.log(e)},c=function(e){if(window.localStorage){var n=window.localStorage.getItem(e);if(n)return JSON.parse(n)}return!1};return{trackPageView:function(n){try{!0===r()&&e().then((function(e){e&&o("pageview: "+n)}))}catch(t){console.log(t)}},trackEvent:function(n,t,a){try{!0===r()&&e().then((function(e){e&&o(a?"event - category: "+n+", action: "+t+", value: "+a:"event - category: "+n+", action: "+t)}))}catch(c){o(c)}},enabled:r}},D=t(25),L=t.n(D),M=t(36),B=t(162),F=t(155),P=t(156),z=t(163),T=t(157),U=t(153),A=t(107),R=t(158),G=t(159),H=t(77),J=t.n(H),V=t(79),q=t.n(V),K=t(78),Q=t.n(K),W=t(62),X=t.n(W),Y=t(65),Z=t(35),$=Object(O.a)((function(){return{appTitle:{flexGrow:1}}})),_=Object(B.a)()((function(e){var n=$();return Object(B.b)("sm",e.width)?r.a.createElement(Z.a,{variant:"h6",className:n.appTitle},e.locData.apptitle):r.a.createElement(Z.a,{variant:"h6",className:n.appTitle},"RPA")})),ee=t(147),ne=function(e){return e.userSignedIn?r.a.createElement(ee.a,{color:"secondary",onClick:function(){return e.handleSignOutClick()}},e.locData.signout):r.a.createElement(ee.a,{color:"secondary",onClick:function(){return e.setSignInDialogOpen(!0)}},e.locData.signin)},te=t(148),ae=t(150),re=t(151),oe=t(152),ce=t(149);var ie=function(e){return r.a.createElement("div",null,r.a.createElement(te.a,{open:e.open,"aria-labelledby":"dialog-title","aria-describedby":"dialog-description"},r.a.createElement(ce.a,{id:"dialog-title"},e.locData.signindescription),e.content&&r.a.createElement(ae.a,null,r.a.createElement(re.a,{id:"dialog-description"},e.content)),r.a.createElement(oe.a,null,r.a.createElement(ee.a,{onClick:function(){e.handleSignInCancel(!1)}},e.locData.cancel),r.a.createElement(ee.a,{onClick:function(){e.handleSignIn()},color:"secondary",autoFocus:!0},e.locData.signin))))},le=t(112),ue=t(154),se=function(e){var n=Object(a.useState)(void 0),t=Object(v.a)(n,2),o=t[0],c=t[1],i=function(n){e.localizationService.setUserLocale(n),c(void 0),window.location.reload()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,{"aria-controls":"language-menu","aria-haspopup":"true",onClick:function(e){e&&e.target&&c(e.currentTarget)}},"Language"),r.a.createElement(le.a,{id:"language-menu",anchorEl:o||null,keepMounted:!0,open:!!o&&Boolean(o),onClose:function(){c(void 0)}},r.a.createElement(ue.a,{onClick:function(){return i("enUS")}},"English"),r.a.createElement(ue.a,{onClick:function(){return i("zhCN")}},"Chinese"),r.a.createElement(ue.a,{onClick:function(){return i("esES")}},"Spanish")))},de=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},appTitle:{flexGrow:1},sideMenuDrawer:{top:"65px",width:240,height:"100%",flexShrink:0},sideMenuDrawerPaper:{width:240},sideMenuList:{padding:10,width:"240px"},sideMenuListItem:{paddingLeft:10}}}));var ge=Object(B.a)()((function(e){var n=Object(a.useState)({}),t=Object(v.a)(n,2),o=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(v.a)(l,2),s=u[0],d=u[1],g=Object(a.useState)(!1),p=Object(v.a)(g,2),m=p[0],f=p[1],h=de(),b=Object(Y.a)();Object(a.useEffect)((function(){function e(){return(e=Object(M.a)(L.a.mark((function e(){var n,t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.getUserLocale(),e.next=3,b.getLocalizedTextSet(["apptitle","signin","signindescription","signout","home","contact","about","cancel"],n);case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]);var w=function(){d(!1)};return r.a.createElement("div",{className:h.root},r.a.createElement(F.a,{position:"static",className:h.appBar},r.a.createElement(P.a,null,r.a.createElement(T.a,{edge:"start",onClick:function(){d(!s)},className:h.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(X.a,null)),r.a.createElement(_,{locData:o}),r.a.createElement(se,{localizationService:b}),r.a.createElement(ne,{locData:o,userSignedIn:e.userSignedIn,handleSignOutClick:function(){e.handleSignOut()},setSignInDialogOpen:f}))),r.a.createElement(z.a,{anchor:"left",variant:"persistent",color:"primary",open:s,className:h.sideMenuDrawer,classes:{paper:h.sideMenuDrawerPaper}},r.a.createElement(P.a,null,r.a.createElement(T.a,{edge:"start",onClick:w,className:h.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(X.a,null))),r.a.createElement(U.a,{className:h.sideMenuList},r.a.createElement(A.a,{button:!0,className:h.sideMenuListItem,onClick:w,component:i.b,to:"/"},r.a.createElement(R.a,null,r.a.createElement(J.a,null)),r.a.createElement(G.a,{primary:o.home})),r.a.createElement(A.a,{button:!0,className:h.sideMenuListItem,onClick:w,component:i.b,to:"/contact"},r.a.createElement(R.a,null,r.a.createElement(Q.a,null)),r.a.createElement(G.a,{primary:o.contact})),r.a.createElement(A.a,{button:!0,className:h.sideMenuListItem,onClick:w,component:i.b,to:"/about"},r.a.createElement(R.a,null,r.a.createElement(q.a,null)),r.a.createElement(G.a,{primary:o.about})))),r.a.createElement(ie,{locData:o,open:m,handleSignIn:function(){f(!1),e.handleSignIn()},handleSignInCancel:function(){return f(!1)}}))})),pe=Object(O.a)((function(e){return{root:{flexGrow:1,display:"flex"},appbar:{height:"65px",width:"100%"},content:{flexGrow:1,padding:e.spacing(3)}}}));var me=Object(y.g)((function(e){var n=Object(a.useState)(!1),t=Object(v.a)(n,2),o=t[0],c=t[1],i=Object(a.useRef)(e.location),l=pe(e),u=Object(I.a)(),s=N();return Object(a.useEffect)((function(){var e=u.userHasSignedIn();c(e)}),[u,o]),Object(a.useEffect)((function(){i&&i.current&&e.location&&e.location.pathname&&i.current!==e.location.pathname&&(i.current=e.location.pathname,s.trackPageView(e.location.pathname),window.scrollTo(0,0))}),[s,e.location,e.location.key]),r.a.createElement(S.a,{container:!0,className:l.root,spacing:0},r.a.createElement(S.a,{item:!0,className:l.appbar,xs:12},r.a.createElement(ge,{userSignedIn:o,handleSignIn:function(){u.signIn(),window&&window.location&&window.location.reload(!0)},handleSignOut:function(){u.signOut(),window&&window.location&&window.location.reload(!0)}})),r.a.createElement(S.a,{item:!0,className:l.content,xs:12},C))})),fe=t(73),he=t(74),be=t(76),we=t(75),Ee=function(e){Object(be.a)(t,e);var n=Object(we.a)(t);function t(e){var a;return Object(fe.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(he.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,n)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h3",null,"Something went wrong. Please reload the page to continue"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(r.a.Component),ve=function(){return r.a.createElement(Ee,null,r.a.createElement(l.a,{theme:E},r.a.createElement(i.a,{basename:"react-project-accelerator"},r.a.createElement(me,null))))};c.a.render(r.a.createElement(ve,null),document.getElementById("appshell"))},49:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(105),c=t(104),i=Object(c.a)((function(e){return{progress:{margin:e.spacing(6),color:"#1976d2"}}}));n.a=function(e){var n=i(),t=100;return void 0===e.display||!1===e.display?r.a.createElement(r.a.Fragment,null):(e.size&&(t=e.size),r.a.createElement(o.a,{className:n.progress,thickness:5,size:t}))}},65:function(e,n,t){"use strict";var a=t(25),r=t.n(a),o=t(61),c=t(36),i={enUS:"English",zhCN:"Chinese",esES:"Spanish"};n.a=function(){var e=function(){var e=window.localStorage.getItem("locale");return e||"enUS"},n=function(){var e=Object(c.a)(r.a.mark((function e(n,a){var c,i,l,u,s,d,g,p,m,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},e.next=3,t(a);case 3:if(i=e.sent){l=i,u=Object.keys(l),s=Object(o.a)(n);try{for(s.s();!(d=s.n()).done;){g=d.value,p=Object(o.a)(u);try{for(p.s();!(m=p.n()).done;)f=m.value,g===f&&(c[f]=l[f])}catch(r){p.e(r)}finally{p.f()}}}catch(r){s.e(r)}finally{s.f()}}return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(r.a.mark((function e(n){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://spinningideas.github.io/react-project-accelerator"+"/i18n/".concat(n,".json"),e.abrupt("return",fetch(t).then((function(e){return e.json()})).catch((function(e){var n="Error Reading data "+e;console.log(n)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return{setUserLocale:function(e){window.localStorage.setItem("locale",e)},getUserLocale:e,getLocales:function(){return i},getCurrentLocale:function(){var n=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var t=0;t<navigator.languages.length;t++)n.push(navigator.languages[t]);navigator.userLanguage&&n.push(navigator.userLanguage),navigator.language&&n.push(navigator.language)}return 0===n.length?e():n[0]},getLocalizedTextSet:n}}},70:function(e,n,t){"use strict";n.a=function(){var e=function(e){window.localStorage.setItem("usersignedin",Boolean(e))};return{userHasSignedIn:function(){var e=window.localStorage.getItem("usersignedin");return!!e&&"true"===e},setUserHasSignedIn:e,signIn:function(){e(!0)},signOut:function(){e(!1)}}}},90:function(e,n,t){e.exports=t(103)},97:function(e,n,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.34f90ada.chunk.js.map