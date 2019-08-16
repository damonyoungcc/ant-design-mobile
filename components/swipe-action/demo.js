webpackJsonp([23],{1303:function(n,a,s){n.exports={basic:s(1409)}},1409:function(n,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/swipe-action/demo/basic.md",id:"components-swipe-action-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SwipeAction<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> SwipeActionExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">autoClose</span>\n      <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'Delete\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'delete\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'Reply\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'reply\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'Cancel\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'cancel\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#ddd\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>More<span class="token punctuation">"</span></span>\n        <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        Have left and right buttons\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">autoClose</span>\n      <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'Reply\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'reply\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'Cancel\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'cancel\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#ddd\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>More<span class="token punctuation">"</span></span>\n        <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        Only left buttons\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">autoClose</span>\n      <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'Cancel\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'Delete\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'delete\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>More<span class="token punctuation">"</span></span>\n        <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        Only right buttons\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">autoClose</span>\n      <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'short\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'long</span> <span class="token attr-name">text\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'delete\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>More<span class="token punctuation">"</span></span>\n        <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        Different button width\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeAction</span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'gray\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">autoClose</span>\n      <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          text<span class="token punctuation">:</span> <span class="token string">\'button1\'</span><span class="token punctuation">,</span>\n          onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'cancel\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          style<span class="token punctuation">:</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span></span><span class="token attr-name">,</span>\n        <span class="token attr-name">{</span>\n          <span class="token attr-name"><span class="token namespace">text:</span></span> <span class="token attr-name">\'button2\',</span>\n          <span class="token attr-name"><span class="token namespace">onPress:</span></span> <span class="token attr-name">()</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">console.log(\'delete\'),</span>\n          <span class="token attr-name"><span class="token namespace">style:</span></span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">backgroundColor:</span></span> <span class="token attr-name">\'#F4333C\',</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">\'white\'</span> <span class="token attr-name">},</span>\n        <span class="token attr-name">},</span>\n      <span class="token attr-name">]}</span>\n      <span class="token attr-name">onOpen</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global open\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'global close\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n        <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>More<span class="token punctuation">"</span></span>\n        <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'List.Item clicked!\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        List<span class="token punctuation">.</span>Item <span class="token keyword">with</span> onClick\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwipeAction</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwipeActionExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});