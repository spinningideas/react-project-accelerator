"use strict";(self.webpackChunkreact_project_accelerator=self.webpackChunkreact_project_accelerator||[]).push([[940],{8364:function(t,e,n){var o=n(5671),i=n(3144),r=n(136),a=n(8557),s=n(2791);function c(t){return s.createElement("div",{className:"notification-item "+t.theme,onClick:function(){t.hideNotification(t.id)}},s.createElement("p",{className:"notification-title"},t.title),s.createElement("p",{className:"notification-body"},t.msg))}var u=function(t){(0,r.Z)(n,t);var e=(0,a.Z)(n);function n(t){var i;return(0,o.Z)(this,n),(i=e.call(this,t)).show=function(t,e){i.addNotification("",t,5e3,e)},i.success=function(t,e,n){i.addNotification(t,e,n,"success")},i.error=function(t,e,n){i.addNotification(t,e,n,"error")},i.info=function(t,e,n){i.addNotification(t,e,n,"info")},i.addNotification=function(t,e,n,o){var r=i.state.notifications,a=i.state.currentNotificationKey;r[a=a++]={title:t,msg:e,duration:n,theme:o},i.setState({currentNotificationKey:a,notifications:r}),i.hideAfterDurationElapses(n,a)},i.hideAfterDurationElapses=function(t,e){setTimeout((function(){i.hideNotification(e)}),t)},i.hideNotification=function(t){var e=i.state.notifications;delete e[t],i.setState({notifications:e})},i.state={currentNotificationKey:0,notifications:[]},i}return(0,i.Z)(n,[{key:"render",value:function(){var t=window.pageYOffset+"px",e=this.hideNotification,n=this.state.notifications.map((function(t,n){return s.createElement(c,{id:n,key:n,theme:t.theme,hideNotification:e,title:t.title,msg:t.msg})}));return s.createElement("div",{style:{top:t},className:"notification-container"},n)}}]),n}(s.Component);e.Z=u},940:function(t,e,n){n.r(e);var o=n(4165),i=n(5861),r=n(885),a=n(2791),s=n(4457),c=n(2654),u=n(4286),l=n(4554),f=n(1889),d=n(7621),m=n(2363),Z=n(9504),v=n(6151),p=n(872),h=n(30),N=n(8328),g=n(8364),x=n(184);e.default=function(){var t=(0,a.useState)({}),e=(0,r.Z)(t,2),n=e[0],C=e[1],w=(0,a.useState)(u.H2),j=(0,r.Z)(w,2),S=j[0],y=j[1],M=(0,h.Z)(),b=(0,N.Z)(),k=(0,a.useRef)(null);(0,a.useEffect)((function(){function t(){return(t=(0,i.Z)((0,o.Z)().mark((function t(){var e,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=M.getUserLocale(),t.next=3,M.getLocalizedTextSet(["settings","settingscolor","settingsdescription","success"],e);case 3:n=t.sent,C(n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,a.useEffect)((function(){var t=b.get("color",u.H2);y(t)}),[]);var R=function(t,e){k.current.show(t,e)},E=function(){for(var t=[],e=0,n=Object.entries(c.O9);e<n.length;e++){var o=(0,r.Z)(n[e],2),i=o[0],a=o[1];t.push({colorName:i,colors:a})}return(0,x.jsx)(l.Z,{sx:{display:"flex",flexWrap:"wrap",maxWidth:window.innerWidth},children:t.map((function(t){return(0,x.jsx)(A,{colorName:t.colorName,colors:t.colors},t.colorName)}))})},A=function(t){var e=t.colorName,o=t.colors[800];return(0,x.jsxs)(v.Z,{style:{display:"flex",width:140,minWidth:140,backgroundColor:o,color:"#ffffff",borderColor:" tranparent"},title:"Set color to "+e,onClick:function(){return t=e,b.set("color",t),y(t),R(n.success,"success"),void(0,s.n_)();var t},children:[S===e?(0,x.jsx)(p.Z,{sx:{marginRight:1}}):void 0,(0,s.kC)(e)]})};return(0,x.jsxs)(f.ZP,{item:!0,xs:12,className:"scrollable",style:{height:window.innerHeight,marginTop:"20px"},children:[(0,x.jsx)(d.Z,{children:(0,x.jsxs)(Z.Z,{className:"main-contentgrid p-0 m-0",children:[(0,x.jsx)("h3",{children:n.settings}),(0,x.jsxs)(d.Z,{children:[(0,x.jsxs)(Z.Z,{children:[(0,x.jsx)("h4",{className:"card-title",children:n.settingscolor}),(0,x.jsx)("p",{className:"card-text",children:n.settingsdescription})]}),(0,x.jsx)(m.Z,{children:(0,x.jsx)(E,{})})]})]})}),(0,x.jsx)(g.Z,{ref:k})]})}},872:function(t,e,n){var o=n(4836);e.Z=void 0;var i=o(n(5649)),r=n(184),a=(0,i.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=a},4554:function(t,e,n){n.d(e,{Z:function(){return v}});var o=n(7462),i=n(3366),r=n(2791),a=n(8182),s=n(2421),c=n(104),u=n(8519),l=n(418),f=n(184),d=["className","component"];var m=n(5902),Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.defaultTheme,n=t.defaultClassName,m=void 0===n?"MuiBox-root":n,Z=t.generateClassName,v=t.styleFunctionSx,p=void 0===v?c.Z:v,h=(0,s.ZP)("div")(p),N=r.forwardRef((function(t,n){var r=(0,l.Z)(e),s=(0,u.Z)(t),c=s.className,v=s.component,p=void 0===v?"div":v,N=(0,i.Z)(s,d);return(0,f.jsx)(h,(0,o.Z)({as:p,ref:n,className:(0,a.Z)(c,Z?Z(m):m),theme:r},N))}));return N}({defaultTheme:(0,n(7107).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),v=Z},2363:function(t,e,n){n.d(e,{Z:function(){return v}});var o=n(3366),i=n(7462),r=n(2791),a=n(8182),s=n(4419),c=n(7630),u=n(3736),l=n(1217);function f(t){return(0,l.Z)("MuiCardActions",t)}(0,n(5878).Z)("MuiCardActions",["root","spacing"]);var d=n(184),m=["disableSpacing","className"],Z=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,!n.disableSpacing&&e.spacing]}})((function(t){var e=t.ownerState;return(0,i.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=r.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiCardActions"}),r=n.disableSpacing,c=void 0!==r&&r,l=n.className,v=(0,o.Z)(n,m),p=(0,i.Z)({},n,{disableSpacing:c}),h=function(t){var e=t.classes,n={root:["root",!t.disableSpacing&&"spacing"]};return(0,s.Z)(n,f,e)}(p);return(0,d.jsx)(Z,(0,i.Z)({className:(0,a.Z)(h.root,l),ownerState:p,ref:e},v))}))},9504:function(t,e,n){n.d(e,{Z:function(){return v}});var o=n(7462),i=n(3366),r=n(2791),a=n(8182),s=n(4419),c=n(7630),u=n(3736),l=n(1217);function f(t){return(0,l.Z)("MuiCardContent",t)}(0,n(5878).Z)("MuiCardContent",["root"]);var d=n(184),m=["className","component"],Z=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=r.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiCardContent"}),r=n.className,c=n.component,l=void 0===c?"div":c,v=(0,i.Z)(n,m),p=(0,o.Z)({},n,{component:l}),h=function(t){var e=t.classes;return(0,s.Z)({root:["root"]},f,e)}(p);return(0,d.jsx)(Z,(0,o.Z)({as:l,className:(0,a.Z)(h.root,r),ownerState:p,ref:e},v))}))},7621:function(t,e,n){n.d(e,{Z:function(){return p}});var o=n(7462),i=n(3366),r=n(2791),a=n(8182),s=n(4419),c=n(7630),u=n(3736),l=n(703),f=n(1217);function d(t){return(0,f.Z)("MuiCard",t)}(0,n(5878).Z)("MuiCard",["root"]);var m=n(184),Z=["className","raised"],v=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),p=r.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiCard"}),r=n.className,c=n.raised,l=void 0!==c&&c,f=(0,i.Z)(n,Z),p=(0,o.Z)({},n,{raised:l}),h=function(t){var e=t.classes;return(0,s.Z)({root:["root"]},d,e)}(p);return(0,m.jsx)(v,(0,o.Z)({className:(0,a.Z)(h.root,r),elevation:l?8:void 0,ref:e,ownerState:p},f))}))}}]);
//# sourceMappingURL=940.a5657353.chunk.js.map