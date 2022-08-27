"use strict";(self.webpackChunkreact_project_accelerator=self.webpackChunkreact_project_accelerator||[]).push([[141],{7556:function(e,t,n){var r=n(5671),i=n(3144),o=n(136),a=n(8557),c=n(2791);function s(e){return c.createElement("div",{className:"notification-item "+e.theme,onClick:function(){e.hideNotification(e.id)}},c.createElement("p",{className:"notification-title"},e.title),c.createElement("p",{className:"notification-body"},e.msg))}var u=function(e){(0,o.Z)(n,e);var t=(0,a.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).show=function(e,t){i.addNotification("",e,5e3,t)},i.success=function(e,t,n){i.addNotification(e,t,n,"success")},i.error=function(e,t,n){i.addNotification(e,t,n,"error")},i.info=function(e,t,n){i.addNotification(e,t,n,"info")},i.addNotification=function(e,t,n,r){var o=i.state.notifications,a=i.state.currentNotificationKey;o[a=a++]={title:e,msg:t,duration:n,theme:r},i.setState({currentNotificationKey:a,notifications:o}),i.hideAfterDurationElapses(n,a)},i.hideAfterDurationElapses=function(e,t){setTimeout((function(){i.hideNotification(t)}),e)},i.hideNotification=function(e){var t=i.state.notifications;delete t[e],i.setState({notifications:t})},i.state={currentNotificationKey:0,notifications:[]},i}return(0,i.Z)(n,[{key:"render",value:function(){var e=window.pageYOffset+"px",t=this.hideNotification,n=this.state.notifications.map((function(e,n){return c.createElement(s,{id:n,key:n,theme:e.theme,hideNotification:t,title:e.title,msg:e.msg})}));return c.createElement("div",{style:{top:e},className:"notification-container"},n)}}]),n}(c.Component);t.Z=u},141:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(4165),i=n(5861),o=n(885),a=n(2791),c=n(3504),s=n(4554),u=n(6151),l=n(7621),d=n(2363),f=n(9504),p=n(1889),h=n(7711),m=n(8239),x=function(){var e=function(e){return e.ok?e.json().then((function(t){return Promise.resolve({data:t,code:e.status,response:e})})).catch((function(){return Promise.resolve({data:e,code:e.status,response:e})})):e.json().catch((function(){return Promise.resolve({data:e.statusText,code:e.status,response:e})})).then((function(t){return Promise.resolve({data:t.error.message,code:e.status,response:e})}))},t=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+i}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),n=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var i,o,a,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.length>1&&void 0!==c[1]?c[1]:{},o=c.length>2?c[2]:void 0,a={Accept:"application/json","Content-Type":"application/json"},o&&o.length&&(a.Authorization="Bearer "+o),t.next=6,fetch(n,{method:"POST",headers:a,body:JSON.stringify(i)}).then((function(t){return e(t)}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{getData:n,getDataAuthenticated:t,postData:o}},Z=function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x(),"https://ipwho.is/",e.next=4,t.getData("https://ipwho.is/").then((function(e){var t=e.data;return{ip:e.data.ip,city:t.city,region:t.region,country:t.country,latitude:t.latitude,longitude:t.longitude,message:"Your ip is ".concat(t.ip," and your location: ").concat(t.latitude,", ").concat(t.longitude," which is in ").concat(t.city,", ").concat(t.region," ").concat(t.country)}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{getCurrentIPAddress:e}},v=n(4942);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},w=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},N=n(3967),b=n(5193),y=n(4395),C=n(4663),P=n(5289),S=n(3400),k=n(5931),O=n(9823),E=n(184),M=a.forwardRef((function(e,t){return(0,E.jsx)(k.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({direction:"up",ref:t},e))})),A=function(e){var t=e.title,n=e.open,r=e.onClose,i=e.fullScreen,o=void 0!==i&&i,c=e.width,u=void 0===c?500:c,l=e.height,d=e.children,f=(0,a.useRef)(null),p=(0,N.Z)(),h=(0,b.Z)(p.breakpoints.down("md")),m=function(){return o||h},x=function(){return o?Z:l||Z/2},Z=j(),v=w(),g=x()-60,k=function(e){e.preventDefault(),r&&r()};return(0,a.useEffect)((function(){n&&(document.documentElement.scrollTop=0,setTimeout((function(){window.scrollTo({top:0,behavior:"smooth"})}),250))}),[n]),!1===n?null:(0,E.jsxs)(P.Z,{fullScreen:o,scroll:"paper",open:n,onClose:k,TransitionComponent:M,PaperProps:{style:{position:"absolute",margin:0,zIndex:"9999",color:"text.default",backgroundColor:"background.default",width:m()?v:u||v/2,height:x(),top:m()?"0":"5%",left:m()?"0":"33%",maxWidth:v}},BackdropProps:{style:{margin:0,verticalAlign:"top",backgroundColor:"transparent",boxShadow:"none"}},children:[(0,E.jsx)(y.Z,{id:"modal-dialog-content-top",ref:f,sx:{"& .MuiToolbar-root":{paddingLeft:0,paddingRight:0},position:"relative",backgroundColor:"background.default"},children:(0,E.jsx)(C.Z,{children:(0,E.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"flex-start",padding:1,flexGrow:1},children:[(0,E.jsx)(s.Z,{sx:{flexGrow:1,padding:1,fontSize:20},children:t}),(0,E.jsx)(S.Z,{onClick:k,variant:"rounded","aria-label":"close",children:(0,E.jsx)(O.Z,{})})]})})}),(0,E.jsx)(s.Z,{sx:{height:g,padding:0,paddingBottom:4,overflowY:"scroll"},children:d})]})},D=a.memo(A),R=n(7556),T=n(4928);var z=function(e){var t=e.displayGetStarted,n=e.locData;return!1===t?(0,E.jsx)(E.Fragment,{}):(0,E.jsx)(p.ZP,{container:!0,spacing:0,children:(0,E.jsx)(p.ZP,{item:!0,xs:12,children:(0,E.jsx)("p",{id:"get-started-message",children:n.getstartedmessage})})})};var B=function(){var e=(0,a.useState)(!1),t=(0,o.Z)(e,2),n=t[0],x=t[1],v=(0,a.useState)({}),g=(0,o.Z)(v,2),j=g[0],w=g[1],N=(0,a.useState)(!1),b=(0,o.Z)(N,2),y=b[0],C=b[1],P=(0,a.useState)(""),S=(0,o.Z)(P,2),k=S[0],O=S[1],M=(0,a.useState)(!1),A=(0,o.Z)(M,2),B=A[0],G=A[1],I=(0,h.Z)(),H=(0,m.Z)(),L=Z(),W=a.forwardRef();(0,a.useEffect)((function(){var e=I.userHasSignedIn();x(e)}),[]),(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H.getUserLocale(),e.next=3,H.getLocalizedTextSet(["welcome","homepagewelcome","getstartedmessage","notifications","notificationsdescription","modals","modalsdescription","error","success","view","close","authenticatedcontent","authenticatedcontentdescription","services","serviceexampletitle","serviceexampledescription","forms","formsexample","formsexampledescription"],t);case 3:n=e.sent,w(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var _=function(e,t){W.current.show(e,t)},F=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(""),G(!0),e.next=4,L.getCurrentIPAddress().then((function(e){e&&e.ip?(O(e.message),G(!1)):(O("Error occurred"),G(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){return!B&&k.length>0?(0,E.jsx)("p",{className:"mt-2",children:k}):(0,E.jsx)(T.Z,{loading:B,size:20})};return(0,E.jsxs)(p.ZP,{container:!0,spacing:0,children:[(0,E.jsxs)(p.ZP,{item:!0,xs:12,className:"contentpanel-site",children:[(0,E.jsx)("h2",{children:j.homepagewelcome}),(0,E.jsxs)(p.ZP,{container:!0,spacing:0,children:[(0,E.jsx)(p.ZP,{item:!0,xs:12,children:(0,E.jsx)(z,{locData:j,displayGetStarted:!0})}),(0,E.jsxs)(p.ZP,{item:!0,xs:12,className:"pt-1",children:[n&&(0,E.jsx)(p.ZP,{container:!0,children:(0,E.jsx)(p.ZP,{item:!0,xs:12,className:"pt-1",children:(0,E.jsx)(l.Z,{children:(0,E.jsxs)(f.Z,{children:[(0,E.jsx)("h4",{className:"card-title",children:j.authenticatedcontent}),(0,E.jsx)("p",{children:j.authenticatedcontentdescription})]})})})}),(0,E.jsx)(p.ZP,{container:!0,children:(0,E.jsx)(p.ZP,{item:!0,xs:12,className:"pt-1 pb-1",children:(0,E.jsxs)(l.Z,{className:"card white-bg-color bl-1 bb-1",children:[(0,E.jsxs)(f.Z,{children:[(0,E.jsx)("h4",{className:"card-title",children:j.notifications}),(0,E.jsx)("p",{children:j.notificationsdescription})]}),(0,E.jsxs)(d.Z,{children:[(0,E.jsx)(u.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return _(j.success,"success")},children:j.success}),(0,E.jsx)(u.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return _(j.error,"error")},children:j.error})]})]})})}),(0,E.jsx)(p.ZP,{container:!0,children:(0,E.jsxs)(p.ZP,{item:!0,xs:12,className:"pt-1",children:[(0,E.jsxs)(l.Z,{className:"card white-bg-color bl-1 bb-1",children:[(0,E.jsxs)(f.Z,{children:[(0,E.jsx)("h4",{className:"card-title",children:j.modals}),(0,E.jsx)("p",{children:j.modalsdescription})]}),(0,E.jsx)(d.Z,{children:(0,E.jsx)(u.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return C(!0)},children:j.view})})]}),(0,E.jsx)(D,{title:j.welcome,open:y,onClose:function(){return C(!1)},children:(0,E.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",p:2},children:[(0,E.jsx)(s.Z,{children:(0,E.jsx)("h1",{children:j.welcome})}),(0,E.jsx)(s.Z,{sx:{p:2},children:j.homepagewelcome}),(0,E.jsx)(s.Z,{sx:{p:2},children:(0,E.jsx)(u.Z,{color:"secondary",variant:"contained",onClick:function(){return C(!1)},children:j.close})})]})})]})}),(0,E.jsx)(p.ZP,{container:!0,children:(0,E.jsx)(p.ZP,{item:!0,xs:12,className:"pt-1",children:(0,E.jsx)(l.Z,{className:"card white-bg-color bl-1 bb-1",children:(0,E.jsxs)(f.Z,{children:[(0,E.jsx)("h4",{className:"card-title",children:j.services}),(0,E.jsx)("p",{children:j.serviceexampledescription}),(0,E.jsx)(u.Z,{className:"mt-3",color:"secondary",variant:"contained",onClick:F,children:j.serviceexampletitle}),(0,E.jsx)(K,{})]})})})}),(0,E.jsx)(p.ZP,{container:!0,children:(0,E.jsx)(p.ZP,{item:!0,xs:12,className:"pt-1",children:(0,E.jsx)(l.Z,{children:(0,E.jsxs)(f.Z,{children:[(0,E.jsx)("h4",{className:"card-title",children:j.forms}),(0,E.jsx)("p",{children:j.formsexampledescription}),(0,E.jsx)(u.Z,{className:"mt-3",color:"secondary",variant:"contained",component:c.rU,to:"/contact/testnameparam",children:j.formsexample})]})})})})]})]})]}),(0,E.jsx)(R.Z,{ref:W})]})}},9823:function(e,t,n){var r=n(4836);t.Z=void 0;var i=r(n(5649)),o=n(184),a=(0,i.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=a},4554:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(3366),o=n(2791),a=n(8182),c=n(2421),s=n(104),u=n(8519),l=n(418),d=n(184),f=["className","component"];var p=n(5902),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,p=void 0===n?"MuiBox-root":n,h=e.generateClassName,m=e.styleFunctionSx,x=void 0===m?s.Z:m,Z=(0,c.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(x),v=o.forwardRef((function(e,n){var o=(0,l.Z)(t),c=(0,u.Z)(e),s=c.className,m=c.component,x=void 0===m?"div":m,v=(0,i.Z)(c,f);return(0,d.jsx)(Z,(0,r.Z)({as:x,ref:n,className:(0,a.Z)(s,h?h(p):p),theme:o},v))}));return v}({defaultTheme:(0,n(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:p.Z.generate}),m=h},2363:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),i=n(7462),o=n(2791),a=n(8182),c=n(4419),s=n(7630),u=n(3736),l=n(1217);function d(e){return(0,l.Z)("MuiCardActions",e)}(0,n(5878).Z)("MuiCardActions",["root","spacing"]);var f=n(184),p=["disableSpacing","className"],h=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCardActions"}),o=n.disableSpacing,s=void 0!==o&&o,l=n.className,m=(0,r.Z)(n,p),x=(0,i.Z)({},n,{disableSpacing:s}),Z=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,c.Z)(n,d,t)}(x);return(0,f.jsx)(h,(0,i.Z)({className:(0,a.Z)(Z.root,l),ownerState:x,ref:t},m))}))},9504:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(3366),o=n(2791),a=n(8182),c=n(4419),s=n(7630),u=n(3736),l=n(1217);function d(e){return(0,l.Z)("MuiCardContent",e)}(0,n(5878).Z)("MuiCardContent",["root"]);var f=n(184),p=["className","component"],h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCardContent"}),o=n.className,s=n.component,l=void 0===s?"div":s,m=(0,i.Z)(n,p),x=(0,r.Z)({},n,{component:l}),Z=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},d,t)}(x);return(0,f.jsx)(h,(0,r.Z)({as:l,className:(0,a.Z)(Z.root,o),ownerState:x,ref:t},m))}))},7621:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7462),i=n(3366),o=n(2791),a=n(8182),c=n(4419),s=n(7630),u=n(3736),l=n(703),d=n(1217);function f(e){return(0,d.Z)("MuiCard",e)}(0,n(5878).Z)("MuiCard",["root"]);var p=n(184),h=["className","raised"],m=(0,s.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),x=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCard"}),o=n.className,s=n.raised,l=void 0!==s&&s,d=(0,i.Z)(n,h),x=(0,r.Z)({},n,{raised:l}),Z=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},f,t)}(x);return(0,p.jsx)(m,(0,r.Z)({className:(0,a.Z)(Z.root,o),elevation:l?8:void 0,ref:t,ownerState:x},d))}))}}]);
//# sourceMappingURL=141.ad919f10.chunk.js.map