webpackJsonp([13],{423:function(n,a,s){n.exports={basic:s(937)}},466:function(n,a,s){"use strict";var t=function(){};n.exports=t},467:function(n,a,s){var t=s(16),e=s(9),p=s(25);n.exports=function(n,a){var s=(e.Object||{})[n]||Object[n],o={};o[n]=a(s),t(t.S+t.F*p(function(){s(1)}),"Object",o)}},472:function(n,a,s){var t=s(24);n.exports=function(n,a,s,e){try{return e?a(t(s)[0],s[1]):a(s)}catch(a){var p=n.return;throw void 0!==p&&t(p.call(n)),a}}},473:function(n,a,s){var t=s(40),e=s(15)("iterator"),p=Array.prototype;n.exports=function(n){return void 0!==n&&(t.Array===n||p[e]===n)}},474:function(n,a,s){var t=s(475),e=s(15)("iterator"),p=s(40);n.exports=s(9).getIteratorMethod=function(n){if(void 0!=n)return n[e]||n["@@iterator"]||p[t(n)]}},475:function(n,a,s){var t=s(64),e=s(15)("toStringTag"),p="Arguments"==t(function(){return arguments}());n.exports=function(n){var a,s,o;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(s=function(n,a){try{return n[a]}catch(n){}}(a=Object(n),e))?s:p?t(a):"Object"==(o=t(a))&&"function"==typeof a.callee?"Arguments":o}},476:function(n,a,s){var t=s(15)("iterator"),e=!1;try{var p=[7][t]();p.return=function(){e=!0},Array.from(p,function(){throw 2})}catch(n){}n.exports=function(n,a){if(!a&&!e)return!1;var s=!1;try{var p=[7],o=p[t]();o.next=function(){return{done:s=!0}},p[t]=function(){return o},n(p)}catch(n){}return s}},478:function(n,a,s){"use strict";a.__esModule=!0;var t=function(n){return n&&n.__esModule?n:{default:n}}(s(500));a.default=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,t.default)(n)}},500:function(n,a,s){n.exports={default:s(501),__esModule:!0}},501:function(n,a,s){s(117),s(502),n.exports=s(9).Array.from},502:function(n,a,s){"use strict";var t=s(62),e=s(16),p=s(37),o=s(472),c=s(473),l=s(116),u=s(503),i=s(474);e(e.S+e.F*!s(476)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),f="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(k);if(g&&(m=t(m,d>2?arguments[2]:void 0,2)),void 0==h||f==Array&&c(h))for(s=new f(a=l(k.length));a>v;v++)u(s,v,g?m(k[v],v):k[v]);else for(r=h.call(k),s=new f;!(e=r.next()).done;v++)u(s,v,g?o(r,m,[e.value,v],!0):e.value);return s.length=v,s}})},503:function(n,a,s){"use strict";var t=s(12),e=s(28);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},607:function(n,a,s){"use strict";a.__esModule=!0;var t=p(s(608)),e=p(s(611));function p(n){return n&&n.__esModule?n:{default:n}}a.default=function n(a,s,p){null===a&&(a=Function.prototype);var o=(0,e.default)(a,s);if(void 0===o){var c=(0,t.default)(a);return null===c?void 0:n(c,s,p)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(p):void 0}},608:function(n,a,s){n.exports={default:s(609),__esModule:!0}},609:function(n,a,s){s(610),n.exports=s(9).Object.getPrototypeOf},610:function(n,a,s){var t=s(37),e=s(125);s(467)("getPrototypeOf",function(){return function(n){return e(t(n))}})},611:function(n,a,s){n.exports={default:s(612),__esModule:!0}},612:function(n,a,s){s(613);var t=s(9).Object;n.exports=function(n,a){return t.getOwnPropertyDescriptor(n,a)}},613:function(n,a,s){var t=s(20),e=s(69).f;s(467)("getOwnPropertyDescriptor",function(){return function(n,a){return e(t(n),a)}})},617:function(n,a,s){"use strict";a.f=function(n,a){return Object.keys(a).some(function(s){return n.target===Object(p.findDOMNode)(a[s])})},a.h=function(n,a){var s=a.min,t=a.max;return n<s||n>t},a.g=function(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0},a.d=function(n,a){return n?a.clientY:a.pageX},a.e=function(n,a){return n?a.touches[0].clientY:a.touches[0].pageX},a.c=function(n,a){var s=a.getBoundingClientRect();return n?s.top+.5*s.height:s.left+.5*s.width},a.a=function(n,a){var s=a.max,t=a.min;if(n<=t)return t;if(n>=s)return s;return n},a.b=function(n,a){var s=a.step,t=function(n,a){var s=a.marks,t=a.step,p=a.min,o=Object.keys(s).map(parseFloat);if(null!==t){var c=Math.round((n-p)/t)*t+p;o.push(c)}var l=o.map(function(a){return Math.abs(n-a)});return o[l.indexOf(Math.min.apply(Math,e()(l)))]}(n,a);return null===s?t:parseFloat(t.toFixed(function(n){var a=n.toString(),s=0;a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1);return s}(s)))},a.i=function(n){n.stopPropagation(),n.preventDefault()};var t=s(478),e=s.n(t),p=s(2);s.n(p)},647:function(n,a,s){"use strict";a.a=function(n,a,s,t){var p=o.a.unstable_batchedUpdates?function(n){o.a.unstable_batchedUpdates(s,n)}:s;return e()(n,a,p,t)};var t=s(126),e=s.n(t),p=s(2),o=s.n(p)},672:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(0),o=s.n(p);a.a=function(n){var a=n.className,s=n.included,t=n.vertical,p=n.offset,c=n.length,l=n.style,u=t?{bottom:p+"%",height:c+"%"}:{left:p+"%",width:c+"%"},i=e()({visibility:s?"visible":"hidden"},l,u);return o.a.createElement("div",{className:a,style:i})}},673:function(n,a,s){"use strict";a.a=function(n){var a,s;return s=a=function(n){function a(n){i()(this,a);var s=d()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onMouseDown=function(n){if(0===n.button){var a=s.props.vertical,t=N.d(a,n);if(N.f(n,s.handlesRefs)){var e=N.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentMouseEvents(),N.i(n)}},s.onTouchStart=function(n){if(!N.g(n)){var a=s.props.vertical,t=N.e(a,n);if(N.f(n,s.handlesRefs)){var e=N.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentTouchEvents(),N.i(n)}},s.onMouseMove=function(n){if(s.sliderRef){var a=N.d(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.onTouchMove=function(n){if(!N.g(n)&&s.sliderRef){var a=N.e(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.saveSlider=function(n){s.sliderRef=n},s.handlesRefs={},s}return h()(a,n),k()(a,[{key:"componentWillUnmount",value:function(){g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=Object(j.a)(document,"touchmove",this.onTouchMove),this.onTouchUpListener=Object(j.a)(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=Object(j.a)(document,"mousemove",this.onMouseMove),this.onMouseUpListener=Object(j.a)(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef,a=n.getBoundingClientRect();return this.props.vertical?a.top:a.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,s=a.vertical,t=a.min,e=a.max,p=Math.abs(Math.max(n,0)/this.getSliderLength()),o=s?(1-p)*(e-t)+t:p*(e-t)+t;return o}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart(),s=this.trimAlignValue(this.calcValue(a));return s}},{key:"calcOffset",value:function(n){var a=this.props,s=a.min,t=a.max,e=(n-s)/(t-s);return 100*e}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,s=this.props,t=s.prefixCls,e=s.className,p=s.marks,c=s.dots,u=s.step,i=s.included,r=s.disabled,k=s.vertical,f=s.min,d=s.max,m=s.children,v=s.maximumTrackStyle,h=s.style,y=s.railStyle,x=s.dotStyle,w=s.activeDotStyle,j=g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),O=j.tracks,_=j.handles,M=S()(t,(n={},l()(n,t+"-with-marks",Object.keys(p).length),l()(n,t+"-disabled",r),l()(n,t+"-vertical",k),l()(n,e,e),n));return b.a.createElement("div",{ref:this.saveSlider,className:M,onTouchStart:r?B:this.onTouchStart,onMouseDown:r?B:this.onMouseDown,style:h},b.a.createElement("div",{className:t+"-rail",style:o()({},v,y)}),O,b.a.createElement(C.a,{prefixCls:t,vertical:k,marks:p,dots:c,step:u,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:f,dotStyle:x,activeDotStyle:w}),_,b.a.createElement(E.a,{className:t+"-mark",vertical:k,marks:p,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:f}),m)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=o()({},n.propTypes,{min:w.a.number,max:w.a.number,step:w.a.number,marks:w.a.object,included:w.a.bool,className:w.a.string,prefixCls:w.a.string,disabled:w.a.bool,children:w.a.any,onBeforeChange:w.a.func,onChange:w.a.func,onAfterChange:w.a.func,handle:w.a.func,dots:w.a.bool,vertical:w.a.bool,style:w.a.object,minimumTrackStyle:w.a.object,maximumTrackStyle:w.a.object,handleStyle:w.a.oneOfType([w.a.object,w.a.arrayOf(w.a.object)]),trackStyle:w.a.oneOfType([w.a.object,w.a.arrayOf(w.a.object)]),railStyle:w.a.object,dotStyle:w.a.object,activeDotStyle:w.a.object}),a.defaultProps=o()({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,s=e()(n,["index"]);return delete s.dragging,b.a.createElement(M.a,o()({},s,{key:a}))},onBeforeChange:B,onChange:B,onAfterChange:B,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),s};var t=s(109),e=s.n(t),p=s(4),o=s.n(p),c=s(61),l=s.n(c),u=s(5),i=s.n(u),r=s(8),k=s.n(r),f=s(6),d=s.n(f),m=s(607),g=s.n(m),v=s(7),h=s.n(v),y=s(0),b=s.n(y),x=s(3),w=s.n(x),j=s(647),O=s(1),S=s.n(O),_=s(466),C=(s.n(_),s(674)),E=s(675),M=s(676),N=s(617);function B(){}},674:function(n,a,s){"use strict";var t=s(61),e=s.n(t),p=s(4),o=s.n(p),c=s(0),l=s.n(c),u=s(1),i=s.n(u),r=s(466),k=s.n(r);a.a=function(n){var a=n.prefixCls,s=n.vertical,t=n.marks,p=n.dots,c=n.step,u=n.included,r=n.lowerBound,f=n.upperBound,d=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=d-m,y=function(n,a,s,t,e,p){k()(!s||t>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(a).map(parseFloat);if(s)for(var c=e;c<=p;c+=t)o.indexOf(c)>=0||o.push(c);return o}(0,t,p,c,m,d).map(function(n){var t,p=Math.abs(n-m)/h*100+"%",c=!u&&n===f||u&&n<=f&&n>=r,k=s?o()({bottom:p},g):o()({left:p},g);c&&(k=o()({},k,v));var d=i()((t={},e()(t,a+"-dot",!0),e()(t,a+"-dot-active",c),t));return l.a.createElement("span",{className:d,style:k,key:n})});return l.a.createElement("div",{className:a+"-step"},y)}},675:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(17),o=s.n(p),c=s(61),l=s.n(c),u=s(0),i=s.n(u),r=s(1),k=s.n(r);a.a=function(n){var a=n.className,s=n.vertical,t=n.marks,p=n.included,c=n.upperBound,u=n.lowerBound,r=n.max,f=n.min,d=Object.keys(t),m=d.length,g=.9*(m>1?100/(m-1):100),v=r-f,h=d.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var r,d=!p&&n===c||p&&n<=c&&n>=u,m=k()((r={},l()(r,a+"-text",!0),l()(r,a+"-text-active",d),r)),h=s?{marginBottom:"-50%",bottom:(n-f)/v*100+"%"}:{width:g+"%",marginLeft:-g/2+"%",left:(n-f)/v*100+"%"},y=t[n],b="object"===(void 0===y?"undefined":o()(y))&&!i.a.isValidElement(y),x=b?y.label:y,w=b?e()({},h,y.style):h;return i.a.createElement("span",{className:m,style:w,key:n},x)});return i.a.createElement("div",{className:a},h)}},676:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(109),o=s.n(p),c=s(5),l=s.n(c),u=s(8),i=s.n(u),r=s(6),k=s.n(r),f=s(7),d=s.n(f),m=s(0),g=s.n(m),v=s(3),h=s.n(v),y=function(n){function a(){return l()(this,a),k()(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return d()(a,n),i()(a,[{key:"render",value:function(){var n=this.props,a=n.className,s=n.vertical,t=n.offset,p=n.style,c=n.disabled,l=n.min,u=n.max,i=n.value,r=o()(n,["className","vertical","offset","style","disabled","min","max","value"]),k=s?{bottom:t+"%"}:{left:t+"%"},f=e()({},p,k),d={};return void 0!==i&&(d=e()({},d,{"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":i,"aria-disabled":!!c})),g.a.createElement("div",e()({role:"slider"},d,r,{className:a,style:f}))}}]),a}(g.a.Component);a.a=y,y.propTypes={className:h.a.string,vertical:h.a.bool,offset:h.a.number,style:h.a.object,disabled:h.a.bool,min:h.a.number,max:h.a.number,value:h.a.number}},937:function(n,a,s){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider <span class="token keyword">with</span> customized color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(2),o(s(110))),t=o(s(938)),e=o(s(107)),p=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}();function o(n){return n&&n.__esModule?n:{default:n}}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}s(111),s(940),s(108);var l=function(s){function o(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),p=0;p<t;p++)e[p]=arguments[p];return a=s=c(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),s.log=function(n){return function(a){console.log(n+": "+a)}},c(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),p(o,[{key:"render",value:function(){return n.createElement("div",{className:"am-slider-example"},n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Slider"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Disabled slider"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Slider with customized color"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))}}]),o}();return n.createElement(l,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},938:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),e=function(n){return n&&n.__esModule?n:{default:n}}(s(939)),p=function(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a.default=n,a}(s(0));var o=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.Component),t(a,[{key:"render",value:function(){return p.createElement("div",{className:this.props.prefixCls+"-wrapper"},p.createElement(e.default,this.props))}}]),a}();a.default=o,o.defaultProps={prefixCls:"am-slider"},n.exports=a.default},939:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(4),e=s.n(t),p=s(5),o=s.n(p),c=s(8),l=s.n(c),u=s(6),i=s.n(u),r=s(7),k=s.n(r),f=s(0),d=s.n(f),m=s(3),g=s.n(m),v=s(466),h=(s.n(v),s(672)),y=s(673),b=s(617),x=function(n){function a(n){o()(this,a);var s=i()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onEnd=function(){s.setState({dragging:!1}),s.removeDocumentEvents(),s.props.onAfterChange(s.getValue())};var t=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:t;return s.state={value:s.trimAlignValue(e),dragging:!1},s}return k()(a,n),l()(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,s=void 0!==n.value?n.value:a,t=this.trimAlignValue(s,n);t!==a&&(this.setState({value:t}),b.h(s,n)&&this.props.onChange(t))}}},{key:"onChange",value:function(n){var a=this.props;!("value"in a)&&this.setState(n);var s=n.value;a.onChange(s)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,s=this.getValue();a.onBeforeChange(s);var t=this.calcValueByPos(n);this.startValue=t,this.startPosition=n,t!==s&&this.onChange({value:t})}},{key:"onMove",value:function(n,a){b.i(n);var s=this.state,t=this.calcValueByPos(a);t!==s.value&&this.onChange({value:t})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e()({},this.props,a),t=b.a(n,s);return b.b(t,s)}},{key:"render",value:function(){var n=this,a=this.props,s=a.prefixCls,t=a.vertical,p=a.included,o=a.disabled,c=a.minimumTrackStyle,l=a.trackStyle,u=a.handleStyle,i=a.min,r=a.max,k=a.handle,f=this.state,m=f.value,g=f.dragging,v=this.calcOffset(m),y=k({className:s+"-handle",vertical:t,offset:v,value:m,dragging:g,disabled:o,min:i,max:r,style:u[0]||u,ref:function(a){return n.saveHandle(0,a)}}),b=l[0]||l;return{tracks:d.a.createElement(h.a,{className:s+"-track",vertical:t,included:p,offset:0,length:v,style:e()({},c,b)}),handles:y}}}]),a}(d.a.Component);x.propTypes={defaultValue:g.a.number,value:g.a.number,disabled:g.a.bool},a.default=Object(y.a)(x)},940:function(n,a,s){"use strict";s(941)},941:function(n,a){}});