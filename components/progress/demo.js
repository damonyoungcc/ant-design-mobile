webpackJsonp([17],{8:function(n,a,t){"use strict";t(14),t(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=t(9),o=e(p),c=t(1),u=s(c);a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return u.createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,t){"use strict";t(26)},21:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),c=t(3),u=e(c),l=t(5),i=e(l),r=t(4),f=e(r),k=t(1),d=s(k),m=t(2),h=e(m),g=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.style,c=a.onClick,u=(0,h["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return d.createElement("div",{className:u,style:p,onClick:c})},a}(d.Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,t){"use strict";t(8),t(48)},26:function(n,a){},27:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),c=t(3),u=e(c),l=t(5),i=e(l),r=t(4),f=e(r),k=t(1),d=s(k),m=t(2),h=e(m),g=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.children,c=a.style,u=(0,h["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return d.createElement("div",{className:u,style:c},p)},a}(d.Component);a["default"]=g,g.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},28:function(n,a,t){"use strict";t(8),t(53)},29:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(39),p=s(e),o=t(38),c=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,u=(0,c["default"])(n);!(s=(o=u.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(l){e=!0,p=l}finally{try{!s&&u["return"]&&u["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},30:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},38:function(n,a,t){n.exports={"default":t(40),__esModule:!0}},39:function(n,a,t){n.exports={"default":t(41),__esModule:!0}},40:function(n,a,t){t(36),t(23),n.exports=t(42)},41:function(n,a,t){t(36),t(23),n.exports=t(43)},42:function(n,a,t){var s=t(49),e=t(55);n.exports=t(15).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},43:function(n,a,t){var s=t(68),e=t(25)("iterator"),p=t(51);n.exports=t(15).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},44:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function o(n){return p(n.type)&&j(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(j(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var c=t(9),u=e(c),l=t(6),i=e(l),r=t(29),f=e(r),k=t(3),d=e(k),m=t(5),h=e(m),g=t(4),v=e(g),y=t(1),b=s(y),w=t(2),_=e(w),C=t(19),x=e(C),P=t(30),T=e(P),E=t(57),M=e(E),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),N=function(n){function a(){(0,d["default"])(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=(0,h["default"])(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return(0,v["default"])(a,n),a.prototype.render=function(){var n,a=(0,T["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),t=(0,f["default"])(a,2),s=t[0],e=s.children,p=s.className,c=s.prefixCls,l=s.type,r=s.size,k=s.inline,d=s.disabled,m=s.htmlType,h=s.icon,g=s.loading,v=s.touchFeedback,y=t[1],w=(0,_["default"])((n={},(0,i["default"])(n,p,p),(0,i["default"])(n,c,!0),(0,i["default"])(n,c+"-primary","primary"===l),(0,i["default"])(n,c+"-ghost","ghost"===l),(0,i["default"])(n,c+"-warning","warning"===l),(0,i["default"])(n,c+"-small","small"===r),(0,i["default"])(n,c+"-loading",g),(0,i["default"])(n,c+"-inline",k),(0,i["default"])(n,c+"-disabled",d),(0,i["default"])(n,c+"-touchFeedback",v),n)),C=g?"loading":h,P=b.Children.map(e,o);return b.createElement("button",(0,u["default"])({},y,{type:m||"button",className:w,disabled:d,onClick:this.onClick}),C?b.createElement(x["default"],{type:C}):null,P)},a}(b.Component);N.propTypes={prefixCls:y.PropTypes.string,size:y.PropTypes.oneOf(["large","small"]),htmlType:y.PropTypes.oneOf(["submit","button","reset"]),icon:y.PropTypes.bool},N.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,M["default"])(N),n.exports=a["default"]},46:function(n,a,t){"use strict";t(8),t(20),t(60)},48:function(n,a){},53:function(n,a){},57:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(n){var a=l.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=i?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp};return l.createElement(n,(0,c["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return a}Object.defineProperty(a,"__esModule",{value:!0});var o=t(9),c=e(o);a["default"]=p;var u=t(1),l=s(u),i="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},60:function(n,a){},61:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(73),p=s(e),o=t(74),c=s(o);p["default"].Item=c["default"],a["default"]=p["default"],n.exports=a["default"]},67:function(n,a,t){"use strict";t(8),t(94)},73:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),c=t(3),u=e(c),l=t(5),i=e(l),r=t(4),f=e(r),k=t(1),d=s(k),m=t(2),h=e(m),g=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,p=a.align,c=a.alignContent,u=a.className,l=a.children,i=a.prefixCls,r=a.style,f=a.onClick,k=(0,h["default"])((n={},(0,o["default"])(n,i,!0),(0,o["default"])(n,i+"-dir-row","row"===t),(0,o["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,o["default"])(n,i+"-dir-column","column"===t),(0,o["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,o["default"])(n,i+"-nowrap","nowrap"===s),(0,o["default"])(n,i+"-wrap","wrap"===s),(0,o["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,o["default"])(n,i+"-justify-start","start"===e),(0,o["default"])(n,i+"-justify-end","end"===e),(0,o["default"])(n,i+"-justify-center","center"===e),(0,o["default"])(n,i+"-justify-between","between"===e),(0,o["default"])(n,i+"-justify-around","around"===e),(0,o["default"])(n,i+"-align-top","top"===p||"start"===p),(0,o["default"])(n,i+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,i+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,i+"-align-baseline","baseline"===p),(0,o["default"])(n,i+"-align-stretch","stretch"===p),(0,o["default"])(n,i+"-align-content-start","start"===c),(0,o["default"])(n,i+"-align-content-end","end"===c),(0,o["default"])(n,i+"-align-content-center","center"===c),(0,o["default"])(n,i+"-align-content-between","between"===c),(0,o["default"])(n,i+"-align-content-around","around"===c),(0,o["default"])(n,i+"-align-content-stretch","stretch"===c),(0,o["default"])(n,u,u),n));return d.createElement("div",{className:k,style:r,onClick:f},l)},a}(d.Component);a["default"]=g,g.propTypes={direction:k.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:k.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:k.PropTypes.oneOf(["start","end","center","between","around"]),align:k.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:k.PropTypes.oneOf(["start","end","center","between","around","stretch"])},g.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},74:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),c=t(3),u=e(c),l=t(5),i=e(l),r=t(4),f=e(r),k=t(1),d=s(k),m=t(2),h=e(m),g=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,p=a.style,c=a.onClick,u=(0,h["default"])((n={},(0,o["default"])(n,e+"-item",!0),(0,o["default"])(n,s,s),n));return d.createElement("div",{className:u,style:p,onClick:c},t)},a}(d.Component);a["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},94:function(n,a){},152:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(9),o=e(p),c=t(6),u=e(c),l=t(29),i=e(l),r=t(3),f=e(r),k=t(5),d=e(k),m=t(4),h=e(m),g=t(1),v=s(g),y=t(2),b=e(y),w=t(19),_=e(w),C=t(30),x=e(C),P=function(n){function a(){return(0,f["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,x["default"])(this.props,["prefixCls","children","mode","className","iconName","leftContent","rightContent","onLeftClick"]),t=(0,i["default"])(a,2),s=t[0],e=s.prefixCls,p=s.children,c=s.mode,l=s.className,r=s.iconName,f=s.leftContent,k=s.rightContent,d=s.onLeftClick,m=t[1],h=(0,b["default"])((n={},(0,u["default"])(n,l,l),(0,u["default"])(n,e,!0),(0,u["default"])(n,e+"-"+c,!0),n));return v.createElement("div",(0,o["default"])({},m,{className:h}),v.createElement("div",{className:e+"-left",onClick:d},r?v.createElement("span",{className:e+"-left-icon"},v.createElement(_["default"],{type:r})):null,v.createElement("span",{className:e+"-left-content"},f)),v.createElement("div",{className:e+"-title"},p),v.createElement("div",{className:e+"-right"},k))},a}(v.Component);a["default"]=P,P.defaultProps={prefixCls:"am-navbar",mode:"dark",iconName:"left",onLeftClick:function(){}},n.exports=a["default"]},153:function(n,a,t){"use strict";t(8),t(20),t(212)},212:function(n,a){},745:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(28),t(27)),p=s(e),o=(t(67),t(61)),c=s(o),u=(t(46),t(44)),l=s(u),i=(t(22),t(21)),r=s(i),f=(t(832),t(831)),k=s(f),d=(t(153),t(152)),m=s(d),h=t(1),g=s(h),v=t(7);s(v);n.exports={content:[["p","\u57fa\u672c\u529f\u80fd\u5c55\u793a"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/progress/demo/basic.md",id:"components-progress-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NavBar<span class="token punctuation" >,</span> Progress<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Flex<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyProgress <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      percent<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >increase</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >+</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >></span> <span class="token number" >100</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >100</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >decline</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> percent <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent <span class="token operator" >-</span> <span class="token number" >10</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>percent <span class="token operator" >&lt;</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      percent <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> percent<span class="token punctuation" >,</span> status <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>progress-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u672a\u586b\u5145\u65e0\u8272<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fixed<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token attr-name" >unfilled</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>hide<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>light<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u672a\u586b\u5145\u6709\u8272<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Progress</span> <span class="token attr-name" >percent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>percent<span class="token punctuation" >}</span></span> <span class="token attr-name" >position</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>normal<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'0.56rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>increase<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >+</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Flex.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'0.56rem\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>decline<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span> <span class="token operator" >-</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Flex</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyProgress</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=g["default"].createClass({displayName:"MyProgress",getInitialState:function(){return{percent:0}},increase:function(){var n=this.state.percent+10;n>100&&(n=100),this.setState({percent:n,status:status})},decline:function(){var n=this.state.percent-10;n<0&&(n=0),this.setState({percent:n,status:status})},render:function(){return g["default"].createElement("div",{className:"progress-container"},g["default"].createElement("div",null,g["default"].createElement(m["default"],{iconName:!1,mode:"light"},"\u672a\u586b\u5145\u65e0\u8272"),g["default"].createElement(k["default"],{percent:this.state.percent,position:"fixed"})),g["default"].createElement(k["default"],{percent:this.state.percent,position:"normal",unfilled:"hide"}),g["default"].createElement(r["default"],{size:"lg"}),g["default"].createElement(r["default"],{size:"lg"}),g["default"].createElement(m["default"],{iconName:!1,mode:"light"},"\u672a\u586b\u5145\u6709\u8272"),g["default"].createElement(k["default"],{percent:this.state.percent,position:"normal"}),g["default"].createElement(r["default"],{size:"lg"}),g["default"].createElement(p["default"],{size:"lg"},g["default"].createElement(c["default"],null,g["default"].createElement(c["default"].Item,null,g["default"].createElement(l["default"],{style:{fontSize:"0.56rem"},onClick:this.increase}," + ")),g["default"].createElement(c["default"].Item,null,g["default"].createElement(l["default"],{style:{fontSize:"0.56rem"},onClick:this.decline}," - ")))))}});return g["default"].createElement(n,null)}}},831:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),c=t(3),u=e(c),l=t(5),i=e(l),r=t(4),f=e(r),k=t(1),d=s(k),m=t(2),h=e(m),g=function(n){function a(t){(0,u["default"])(this,a);var s=(0,i["default"])(this,n.call(this,t));return s.state={},s}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.percent,e=a.position,p=a.unfilled,c={width:s+"%",height:0},u=(0,h["default"])((n={},(0,o["default"])(n,t+"-outer",!0),(0,o["default"])(n,t+"-fixed-outer","fixed"===e),(0,o["default"])(n,t+"-hide-outer","hide"===p),n));return d.createElement("div",{className:u},d.createElement("div",{className:t+"-bar",style:c}))},a}(d.Component);a["default"]=g,g.propTypes={prefixCls:k.PropTypes.string,position:k.PropTypes.oneOf(["fixed","normal"]),percent:k.PropTypes.number,unfilled:k.PropTypes.string},g.defaultProps={prefixCls:"am-progress",percent:0,position:"fixed",unfilled:"show"},n.exports=a["default"]},832:function(n,a,t){"use strict";t(8),t(1161)},911:function(n,a,t){n.exports={basic:t(745)}},1161:function(n,a){}});