var u=Object.defineProperty;var f=(t,e,n)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var l=(t,e,n)=>(f(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const d="\u5E94\u7528\u7A0B\u5E8F",b="\u53D6\u6D88",S="\u7EC4\u4EF6",T="\u786E\u5B9A",E="\u8BED\u8A00",R="\u8C03\u8272\u677F",y="\u91CD\u7F6E",z="\u8BBE\u7F6E",H="\u63D0\u4EA4",P="\u6A21\u677F",$="\u7FFB\u8BD1",M={Apps:d,Cancel:b,Components:S,Confirm:T,Language:E,Palette:R,"Rail Map Generator":"\u94C1\u8DEF\u7EBF\u8DEF\u56FE\u751F\u6210\u5668","Rail Map Painter":"\u5730\u94C1\u7EBF\u8DEF\u56FE\u7ED8\u5236\u5668",Reset:y,"RMG Home":"RMG \u4E3B\u9875","Seed Project":"\u79CD\u5B50\u9879\u76EE",Settings:z,Submit:H,Templates:P,Translate:$},A="\u61C9\u7528\u7A0B\u5F0F",G="\u53D6\u6D88",j="\u5143\u4EF6",N="\u78BA\u5B9A",O="\u8A9E\u8A00",_="\u8ABF\u8272\u76E4",w="\u91CD\u8A2D",v="\u8A2D\u5B9A",K="\u63D0\u4EA4",C="\u7BC4\u672C",q="\u7FFB\u8B6F",x={Apps:A,Cancel:G,Components:j,Confirm:N,Language:O,Palette:_,"Rail Map Generator":"\u9435\u8DEF\u8DEF\u7DAB\u5716\u7522\u751F\u5668","Rail Map Painter":"\u5730\u9435\u8DEF\u7DAB\u5716\u7E6A\u88FD\u5668",Reset:w,"RMG Home":"RMG \u4E3B\u9801","Seed Project":"\u7A2E\u5B50\u9805\u76EE",Settings:v,Submit:K,Templates:C,Translate:q};var c=(t=>(t.Azerbaijani="az",t.Arabic="ar",t.Catalan="ca",t.Chinese="zh",t.ChineseCN="zh-CN",t.ChineseSimp="zh-Hans",t.ChineseTrad="zh-Hant",t.ChineseHK="zh-HK",t.ChineseTW="zh-TW",t.English="en",t.French="fr",t.Gaelic="ga",t.German="de",t.Hindi="hi",t.Japanese="ja",t.Korean="ko",t.Malay="ms",t.Norwegian="no",t.Spanish="es",t.Persian="fa",t.Portuguese="pt",t.Russian="ru",t.Swedish="sv",t.Turkish="tr",t))(c||{});class B{constructor(){l(this,"_resources");this._resources={"zh-Hans":{translation:M},"zh-Hant":{translation:x}}}withResource(e,n){return e in this._resources?this._resources[e].translation={...this._resources[e].translation,...n}:this._resources[e]={translation:n},this}build(){return this._resources}}const F={Builder:B},W=document.querySelector.bind(document),a={},k=new F.Builder().withResource("zh-Hant",{"test item":"\u6E2C\u8A66\u9805\u76EE"}).build();Object.entries(k).forEach(([t,e])=>{Object.entries(e.translation).forEach(([n,o])=>{a[n]={...a[n],[t]:o}})});const D=[c.ChineseSimp,c.ChineseTrad],p=document.createElement("table"),h=document.createElement("tbody");Object.entries(a).forEach(([t,e])=>{const n=document.createElement("tr"),o=document.createElement("td");o.textContent=t,n.append(o),D.forEach(s=>{var i;const r=document.createElement("td");r.textContent=(i=e[s])!=null?i:"",n.append(r)}),h.append(n)});p.append(h);var m;(m=W("#root"))==null||m.append(p);
