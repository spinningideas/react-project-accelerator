"use strict";(self.webpackChunkreact_project_accelerator=self.webpackChunkreact_project_accelerator||[]).push([[304],{8364:function(e,t,n){var r=n(5671),i=n(3144),a=n(136),s=n(8557),o=n(2791);function c(e){return o.createElement("div",{className:"notification-item "+e.theme,onClick:function(){e.hideNotification(e.id)}},o.createElement("p",{className:"notification-title"},e.title),o.createElement("p",{className:"notification-body"},e.msg))}var u=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e)).show=function(e,t){i.addNotification("",e,5e3,t)},i.success=function(e,t,n){i.addNotification(e,t,n,"success")},i.error=function(e,t,n){i.addNotification(e,t,n,"error")},i.info=function(e,t,n){i.addNotification(e,t,n,"info")},i.addNotification=function(e,t,n,r){var a=i.state.notifications,s=i.state.currentNotificationKey;a[s=s++]={title:e,msg:t,duration:n,theme:r},i.setState({currentNotificationKey:s,notifications:a}),i.hideAfterDurationElapses(n,s)},i.hideAfterDurationElapses=function(e,t){setTimeout((function(){i.hideNotification(t)}),e)},i.hideNotification=function(e){var t=i.state.notifications;delete t[e],i.setState({notifications:t})},i.state={currentNotificationKey:0,notifications:[]},i}return(0,i.Z)(n,[{key:"render",value:function(){var e=window.pageYOffset+"px",t=this.hideNotification,n=this.state.notifications.map((function(e,n){return o.createElement(c,{id:n,key:n,theme:e.theme,hideNotification:t,title:e.title,msg:e.msg})}));return o.createElement("div",{style:{top:e},className:"notification-container"},n)}}]),n}(o.Component);t.Z=u},2304:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(4165),i=n(5861),a=n(885),s=n(2791),o=n(3504),c=n(6151),u=n(7621),l=n(2363),d=n(9504),f=n(1889),p=n(4664),h=n(30),m=function(){var e=function(e){return e.ok?e.json().then((function(t){return Promise.resolve({data:t,code:e.status,response:e})})).catch((function(){return Promise.resolve({data:e,code:e.status,response:e})})):e.json().catch((function(){return Promise.resolve({data:e.statusText,code:e.status,response:e})})).then((function(t){return Promise.resolve({data:t.error.message,code:e.status,response:e})}))},t=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n,i){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+i}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),n=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return e(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var i,a,s,o=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=o.length>1&&void 0!==o[1]?o[1]:{},a=o.length>2?o[2]:void 0,s={Accept:"application/json","Content-Type":"application/json"},a&&a.length&&(s.Authorization="Bearer "+a),t.next=6,fetch(n,{method:"POST",headers:s,body:JSON.stringify(i)}).then((function(t){return e(t)}));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{getData:n,getDataAuthenticated:t,postData:a}},x=function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m(),"http://ip-api.com/json/",e.next=4,t.getData("http://ip-api.com/json/").then((function(e){return{ip:e.data.query,message:"Your ip is ".concat(e.data.query," and your location: ").concat(e.data.city," ").concat(e.data.region,", ").concat(e.data.country," ")}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{getCurrentIPAddress:e}},Z=n(184);var v=function(e){if(!1===e.isOpen)return null;var t={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:"9999",background:"#ffffff",padding:"10px"};if(e.width&&e.height&&(t.width=e.width+"px",t.height=e.height+"px",t.marginLeft="-"+e.width/2+"px",t.marginTop="-"+e.height/2+"px",t.transform=null),e.style)for(var n in e.style)t[n]=e.style[n];var r={position:"fixed",left:0,right:0,top:0,bottom:0,width:"100%",height:"100%",zIndex:"9998",background:"rgba(0, 0, 0, 0.2)"};if(e.backdropStyle)for(var i in e.backdropStyle)r[i]=e.backdropStyle[i];return(0,Z.jsxs)("div",{className:e.containerClassName,children:[(0,Z.jsx)("div",{className:e.className,style:t,children:e.children}),!e.noBackdrop&&(0,Z.jsx)("div",{className:e.backdropClassName,style:r,onClick:function(t){!function(t){t.preventDefault(),e.onClose&&e.onClose()}(t)}})]})},j=n(8364),g=n(2426);var N=function(e){return!1===e.displayGetStarted?(0,Z.jsx)(Z.Fragment,{}):(0,Z.jsx)(f.ZP,{container:!0,spacing:0,children:(0,Z.jsx)(f.ZP,{item:!0,xs:12,children:(0,Z.jsx)("p",{className:"whitetext",children:e.locData.getstartedmessage})})})};var w=function(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],m=t[1],w=(0,s.useState)({}),y=(0,a.Z)(w,2),b=y[0],C=y[1],k=(0,s.useState)(!1),P=(0,a.Z)(k,2),S=P[0],A=P[1],E=(0,s.useState)(""),M=(0,a.Z)(E,2),R=M[0],D=M[1],T=(0,s.useState)(!1),z=(0,a.Z)(T,2),I=z[0],O=z[1],B=(0,p.Z)(),G=(0,h.Z)(),L=x(),_=(0,s.useRef)(null);(0,s.useEffect)((function(){var e=B.userHasSignedIn();m(e)}),[]),(0,s.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=G.getUserLocale(),e.next=3,G.getLocalizedTextSet(["welcome","homepagewelcome","getstartedmessage","notifications","notificationsdescription","modals","modalsdescription","error","success","view","close","authenticatedcontent","authenticatedcontentdescription","services","serviceexampletitle","serviceexampledescription","forms","formsexample","formsexampledescription"],t);case 3:n=e.sent,C(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var K=function(e,t){_.current.show(e,t)},q=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(""),O(!0),e.next=4,L.getCurrentIPAddress().then((function(e){e?(D(e.message),O(!1)):(D("Error occurred"),O(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){return!I&&R.length>0?(0,Z.jsx)("p",{className:"mt-2",children:R}):(0,Z.jsx)(g.Z,{display:I,size:20})};return(0,Z.jsxs)(f.ZP,{container:!0,spacing:0,children:[(0,Z.jsxs)(f.ZP,{item:!0,xs:12,className:"contentpanel-site",children:[(0,Z.jsx)("h2",{children:b.homepagewelcome}),(0,Z.jsxs)(f.ZP,{container:!0,spacing:0,children:[(0,Z.jsx)(f.ZP,{item:!0,xs:12,children:(0,Z.jsx)(N,{locData:b,displayGetStarted:!0})}),(0,Z.jsxs)(f.ZP,{item:!0,xs:12,className:"pt-1",children:[n&&(0,Z.jsx)(f.ZP,{container:!0,children:(0,Z.jsx)(f.ZP,{item:!0,xs:12,className:"pt-1",children:(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("h4",{className:"card-title",children:b.authenticatedcontent}),(0,Z.jsx)("p",{children:b.authenticatedcontentdescription})]})})})}),(0,Z.jsx)(f.ZP,{container:!0,children:(0,Z.jsx)(f.ZP,{item:!0,xs:12,className:"pt-1 pb-1",children:(0,Z.jsxs)(u.Z,{className:"card white-bg-color bl-1 bb-1",children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("h4",{className:"card-title",children:b.notifications}),(0,Z.jsx)("p",{children:b.notificationsdescription})]}),(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(c.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return K(b.success,"success")},children:b.success}),(0,Z.jsx)(c.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return K(b.error,"error")},children:b.error})]})]})})}),(0,Z.jsx)(f.ZP,{container:!0,children:(0,Z.jsxs)(f.ZP,{item:!0,xs:12,className:"pt-1",children:[(0,Z.jsxs)(u.Z,{className:"card white-bg-color bl-1 bb-1",children:[(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("h4",{className:"card-title",children:b.modals}),(0,Z.jsx)("p",{children:b.modalsdescription})]}),(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(c.Z,{className:"ml-2",color:"secondary",variant:"contained",onClick:function(){return A(!0)},children:b.view})})]}),(0,Z.jsxs)(v,{isOpen:S,onClose:function(){return A(!1)},children:[(0,Z.jsx)("h1",{children:b.welcome}),(0,Z.jsx)("p",{children:b.homepagewelcome}),(0,Z.jsx)(c.Z,{color:"secondary",variant:"contained",onClick:function(){return A(!1)},children:b.close})]})]})}),(0,Z.jsx)(f.ZP,{container:!0,children:(0,Z.jsx)(f.ZP,{item:!0,xs:12,className:"pt-1",children:(0,Z.jsx)(u.Z,{className:"card white-bg-color bl-1 bb-1",children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("h4",{className:"card-title",children:b.services}),(0,Z.jsx)("p",{children:b.serviceexampledescription}),(0,Z.jsx)(c.Z,{className:"mt-3",color:"secondary",variant:"contained",onClick:q,children:b.serviceexampletitle}),(0,Z.jsx)(U,{})]})})})}),(0,Z.jsx)(f.ZP,{container:!0,children:(0,Z.jsx)(f.ZP,{item:!0,xs:12,className:"pt-1",children:(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)("h4",{className:"card-title",children:b.forms}),(0,Z.jsx)("p",{children:b.formsexampledescription}),(0,Z.jsx)(c.Z,{className:"mt-3",color:"secondary",variant:"contained",component:o.rU,to:"/contact/testnameparam",children:b.formsexample})]})})})})]})]})]}),(0,Z.jsx)(j.Z,{ref:_})]})}},2363:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3366),i=n(7462),a=n(2791),s=n(8182),o=n(4419),c=n(7630),u=n(3736),l=n(1217);function d(e){return(0,l.Z)("MuiCardActions",e)}(0,n(5878).Z)("MuiCardActions",["root","spacing"]);var f=n(184),p=["disableSpacing","className"],h=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCardActions"}),a=n.disableSpacing,c=void 0!==a&&a,l=n.className,m=(0,r.Z)(n,p),x=(0,i.Z)({},n,{disableSpacing:c}),Z=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,o.Z)(n,d,t)}(x);return(0,f.jsx)(h,(0,i.Z)({className:(0,s.Z)(Z.root,l),ownerState:x,ref:t},m))}))},9504:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(3366),a=n(2791),s=n(8182),o=n(4419),c=n(7630),u=n(3736),l=n(1217);function d(e){return(0,l.Z)("MuiCardContent",e)}(0,n(5878).Z)("MuiCardContent",["root"]);var f=n(184),p=["className","component"],h=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCardContent"}),a=n.className,c=n.component,l=void 0===c?"div":c,m=(0,i.Z)(n,p),x=(0,r.Z)({},n,{component:l}),Z=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},d,t)}(x);return(0,f.jsx)(h,(0,r.Z)({as:l,className:(0,s.Z)(Z.root,a),ownerState:x,ref:t},m))}))},7621:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7462),i=n(3366),a=n(2791),s=n(8182),o=n(4419),c=n(7630),u=n(3736),l=n(703),d=n(1217);function f(e){return(0,d.Z)("MuiCard",e)}(0,n(5878).Z)("MuiCard",["root"]);var p=n(184),h=["className","raised"],m=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),x=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCard"}),a=n.className,c=n.raised,l=void 0!==c&&c,d=(0,i.Z)(n,h),x=(0,r.Z)({},n,{raised:l}),Z=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},f,t)}(x);return(0,p.jsx)(m,(0,r.Z)({className:(0,s.Z)(Z.root,a),elevation:l?8:void 0,ref:t,ownerState:x},d))}))}}]);
//# sourceMappingURL=304.860691eb.chunk.js.map