webpackJsonp([19],{8:function(n,a,t){"use strict";t(14),t(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=t(9),o=e(p),l=t(1),c=s(l);a["default"]=function(n){var a=n.type,t=n.className,s=void 0===t?"":t;return c.createElement("i",(0,o["default"])({},n,{className:(s+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},20:function(n,a,t){"use strict";t(26)},21:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),l=t(3),c=e(l),u=t(5),i=e(u),r=t(4),k=e(r),d=t(1),f=s(d),m=t(2),g=e(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.style,l=a.onClick,c=(0,g["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return f.createElement("div",{className:c,style:p,onClick:l})},a}(f.Component);a["default"]=h,h.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,t){"use strict";t(8),t(48)},26:function(n,a){},27:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),l=t(3),c=e(l),u=t(5),i=e(u),r=t(4),k=e(r),d=t(1),f=s(d),m=t(2),g=e(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.children,l=a.style,c=(0,g["default"])((n={},(0,o["default"])(n,""+t,!0),(0,o["default"])(n,t+"-"+s,!0),(0,o["default"])(n,e,!!e),n));return f.createElement("div",{className:c,style:l},p)},a}(f.Component);a["default"]=h,h.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},28:function(n,a,t){"use strict";t(8),t(53)},29:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=t(39),p=s(e),o=t(38),l=s(o);a["default"]=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,c=(0,l["default"])(n);!(s=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(u){e=!0,p=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},30:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},38:function(n,a,t){n.exports={"default":t(40),__esModule:!0}},39:function(n,a,t){n.exports={"default":t(41),__esModule:!0}},40:function(n,a,t){t(36),t(23),n.exports=t(42)},41:function(n,a,t){t(36),t(23),n.exports=t(43)},42:function(n,a,t){var s=t(49),e=t(55);n.exports=t(15).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return s(a.call(n))}},43:function(n,a,t){var s=t(68),e=t(25)("iterator"),p=t(51);n.exports=t(15).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(s(a))}},44:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function o(n){return p(n.type)&&M(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(M(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var l=t(9),c=e(l),u=t(6),i=e(u),r=t(29),k=e(r),d=t(3),f=e(d),m=t(5),g=e(m),h=t(4),v=e(h),y=t(1),b=s(y),x=t(2),_=e(x),E=t(19),w=e(E),T=t(30),C=e(T),N=t(57),P=e(N),j=/^[\u4e00-\u9fa5]{2}$/,M=j.test.bind(j),O=function(n){function a(){(0,f["default"])(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=(0,g["default"])(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return(0,v["default"])(a,n),a.prototype.render=function(){var n,a=(0,C["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),t=(0,k["default"])(a,2),s=t[0],e=s.children,p=s.className,l=s.prefixCls,u=s.type,r=s.size,d=s.inline,f=s.disabled,m=s.htmlType,g=s.icon,h=s.loading,v=s.touchFeedback,y=t[1],x=(0,_["default"])((n={},(0,i["default"])(n,p,p),(0,i["default"])(n,l,!0),(0,i["default"])(n,l+"-primary","primary"===u),(0,i["default"])(n,l+"-ghost","ghost"===u),(0,i["default"])(n,l+"-warning","warning"===u),(0,i["default"])(n,l+"-small","small"===r),(0,i["default"])(n,l+"-loading",h),(0,i["default"])(n,l+"-inline",d),(0,i["default"])(n,l+"-disabled",f),(0,i["default"])(n,l+"-touchFeedback",v),n)),E=h?"loading":g,T=b.Children.map(e,o);return b.createElement("button",(0,c["default"])({},y,{type:m||"button",className:x,disabled:f,onClick:this.onClick}),E?b.createElement(w["default"],{type:E}):null,T)},a}(b.Component);O.propTypes={prefixCls:y.PropTypes.string,size:y.PropTypes.oneOf(["large","small"]),htmlType:y.PropTypes.oneOf(["submit","button","reset"]),icon:y.PropTypes.bool},O.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,P["default"])(O),n.exports=a["default"]},48:function(n,a){},53:function(n,a){},57:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(n){var a=u.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=i?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp};return u.createElement(n,(0,l["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return a}Object.defineProperty(a,"__esModule",{value:!0});var o=t(9),l=e(o);a["default"]=p;var c=t(1),u=s(c),i="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},61:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=t(73),p=s(e),o=t(74),l=s(o);p["default"].Item=l["default"],a["default"]=p["default"],n.exports=a["default"]},73:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),l=t(3),c=e(l),u=t(5),i=e(u),r=t(4),k=e(r),d=t(1),f=s(d),m=t(2),g=e(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.direction,s=a.wrap,e=a.justify,p=a.align,l=a.alignContent,c=a.className,u=a.children,i=a.prefixCls,r=a.style,k=a.onClick,d=(0,g["default"])((n={},(0,o["default"])(n,i,!0),(0,o["default"])(n,i+"-dir-row","row"===t),(0,o["default"])(n,i+"-dir-row-reverse","row-reverse"===t),(0,o["default"])(n,i+"-dir-column","column"===t),(0,o["default"])(n,i+"-dir-column-reverse","column-reverse"===t),(0,o["default"])(n,i+"-nowrap","nowrap"===s),(0,o["default"])(n,i+"-wrap","wrap"===s),(0,o["default"])(n,i+"-wrap-reverse","wrap-reverse"===s),(0,o["default"])(n,i+"-justify-start","start"===e),(0,o["default"])(n,i+"-justify-end","end"===e),(0,o["default"])(n,i+"-justify-center","center"===e),(0,o["default"])(n,i+"-justify-between","between"===e),(0,o["default"])(n,i+"-justify-around","around"===e),(0,o["default"])(n,i+"-align-top","top"===p||"start"===p),(0,o["default"])(n,i+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,i+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,i+"-align-baseline","baseline"===p),(0,o["default"])(n,i+"-align-stretch","stretch"===p),(0,o["default"])(n,i+"-align-content-start","start"===l),(0,o["default"])(n,i+"-align-content-end","end"===l),(0,o["default"])(n,i+"-align-content-center","center"===l),(0,o["default"])(n,i+"-align-content-between","between"===l),(0,o["default"])(n,i+"-align-content-around","around"===l),(0,o["default"])(n,i+"-align-content-stretch","stretch"===l),(0,o["default"])(n,c,c),n));return f.createElement("div",{className:d,style:r,onClick:k},u)},a}(f.Component);a["default"]=h,h.propTypes={direction:d.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:d.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:d.PropTypes.oneOf(["start","end","center","between","around"]),align:d.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:d.PropTypes.oneOf(["start","end","center","between","around","stretch"])},h.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=a["default"]},74:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=t(6),o=e(p),l=t(3),c=e(l),u=t(5),i=e(u),r=t(4),k=e(r),d=t(1),f=s(d),m=t(2),g=e(m),h=function(n){function a(){return(0,c["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,p=a.style,l=a.onClick,c=(0,g["default"])((n={},(0,o["default"])(n,e+"-item",!0),(0,o["default"])(n,s,s),n));return f.createElement("div",{className:c,style:p,onClick:l},t)},a}(f.Component);a["default"]=h,h.defaultProps={prefixCls:"am-flexbox"},n.exports=a["default"]},493:function(n,a,t){"use strict";function s(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function e(n){return n&&n.__esModule?n:{"default":n}}function p(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var o=t(6),l=e(o),c=t(3),u=e(c),i=t(5),r=e(i),k=t(4),d=e(k),f=t(1),m=s(f),g=t(2),h=e(g),v=t(44),y=e(v),b=t(61),x=e(b),_=function(n){function a(t){(0,u["default"])(this,a);var s=(0,r["default"])(this,n.call(this,t));return s.state={current:t.current},s.onPrev=s.onPrev.bind(s),s.onNext=s.onNext.bind(s),s}return(0,d["default"])(a,n),a.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},a.prototype._hasPrev=function(){return this.state.current>0},a.prototype._hasNext=function(){return this.state.current<this.props.total},a.prototype._handleChange=function(n){return this.setState({current:n}),this.props.onChange(n),n},a.prototype.onPrev=function(){this._handleChange(this.state.current-1)},a.prototype.onNext=function(){this._handleChange(this.state.current+1)},a.prototype.getIndexes=function(n){for(var a=[],t=0;t<n;t++)a.push(t);return a},a.prototype.render=function(){var n=this.props,a=n.prefixCls,t=n.className,s=n.mode,e=n.total,p=n.simple,o=n.prevText,c=n.nextText,u=this.state.current,i=(0,h["default"])((0,l["default"])({className:t},a+"-wrap",!0)),r=void 0;switch(s){case"button":r=m.createElement(x["default"],null,m.createElement(x["default"].Item,{className:a+"-wrap-btn"},m.createElement(y["default"],{inline:!0,disabled:u<=0,onClick:this.onPrev},o)),this.props.children?m.createElement(x["default"].Item,null,this.props.children):!p&&m.createElement(x["default"].Item,{className:i},m.createElement("span",{className:"active"},u+1),"/",m.createElement("span",null,e)),m.createElement(x["default"].Item,{className:a+"-wrap-btn"},m.createElement(y["default"],{disabled:u>=e-1,inline:!0,onClick:this.onNext},c)));break;case"number":r=m.createElement("div",{className:i},m.createElement("span",{className:"active"},u+1),"/",m.createElement("span",null,e));break;case"pointer":var k=this.getIndexes(e);r=m.createElement("div",{className:i},k.map(function(n){var t,s=(0,h["default"])((t={},(0,l["default"])(t,a+"-wrap-dot",!0),(0,l["default"])(t,a+"-wrap-dot-active",n===u),t));return m.createElement("div",{className:s,key:"dot-"+n},m.createElement("span",null))}));break;default:r=!1}return m.createElement("div",{className:a},r)},a}(m.Component);a["default"]=_,_.defaultProps={prefixCls:"am-pagination",mode:"button",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:p},n.exports=a["default"]},494:function(n,a,t){"use strict";t(8),t(1158)},735:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(20),t(19)),p=s(e),o=(t(28),t(27)),l=s(o),c=(t(494),t(493)),u=s(c),i=(t(22),t(21)),r=s(i),k=t(1),d=s(k),f=t(7);s(f);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:0,title:"\u6309\u94ae\u5f62\u6001",filename:"components/pagination/demo/button.md",id:"components-pagination-demo-button"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6309\u94ae\u5185\u5e26\u6587\u672c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e26\u6587\u672c\u548cicon<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\u4e0a\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n              nextText<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u4e0b\u4e00\u6b65<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n            <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9690\u85cf\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >simple</span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >prevText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0a\u4e00\u6b65<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >nextText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e0b\u4e00\u6b65<span class="token punctuation" >"</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",render:function(){return d["default"].createElement("div",{className:"loading-example"},d["default"].createElement("div",{className:"pagination-container"},d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u6309\u94ae\u5185\u5e26\u6587\u672c"),d["default"].createElement(u["default"],{total:5,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u5e26\u6587\u672c\u548cicon"),d["default"].createElement(u["default"],{total:5,current:1,prevText:d["default"].createElement("div",null,d["default"].createElement(p["default"],{type:"left"}),"\u4e0a\u4e00\u6b65"),nextText:d["default"].createElement("div",null,"\u4e0b\u4e00\u6b65",d["default"].createElement(p["default"],{type:"right"}))})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u9690\u85cf\u6570\u5b57"),d["default"].createElement(u["default"],{total:5,simple:!0,current:1,prevText:"\u4e0a\u4e00\u6b65",nextText:"\u4e0b\u4e00\u6b65"})),d["default"].createElement(r["default"],{size:"lg"}),d["default"].createElement(l["default"],null,d["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),d["default"].createElement(u["default"],{mode:"number",total:5,current:3})),d["default"].createElement(r["default"],{size:"lg"})))}});return d["default"].createElement(n,null)},style:".demo-preview-item .loading-example * {\n  box-sizing: border-box;\n}\n.loading-example .title {\n  margin-bottom: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.demo-preview-item</span> <span class="token class" >.loading-example</span> * </span><span class="token punctuation" >{</span>\n  <span class="token property" >box-sizing</span><span class="token punctuation" >:</span> border-box<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},736:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(28),t(27)),p=s(e),o=(t(494),t(493)),l=s(o),c=(t(22),t(21)),u=s(c),i=t(1),r=s(i),k=t(7);s(k);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:2,title:"\u70b9\u72b6\u578b",filename:"components/pagination/demo/pointer.md",id:"components-pagination-demo-pointer"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u70b9\u72b6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginBottom<span class="token punctuation" >:</span> <span class="token string" >\'32px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n                <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pointer<span class="token punctuation" >"</span></span>\n                <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n                <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=r["default"].createClass({displayName:"App",render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",{className:"pagination-container"},r["default"].createElement(u["default"],{size:"lg"}),r["default"].createElement(p["default"],null,r["default"].createElement("p",{className:"title"},"\u70b9\u72b6"),r["default"].createElement("div",{style:{marginBottom:"32px"}},r["default"].createElement(l["default"],{mode:"pointer",total:5,current:2}))),r["default"].createElement(u["default"],{size:"lg"})))}});return r["default"].createElement(n,null)},style:".loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},907:function(n,a,t){n.exports={button:t(735),pointer:t(736)}},1158:function(n,a){}});