import{g as l}from"./index-fde57fe3.js";function m(i,n){for(var r=0;r<n.length;r++){const e=n[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in i)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(i,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={},o;function u(){return o||(o=1,function(i){function n(r,e,t){return{pattern:RegExp("<#"+r+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+r+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:t}}}}i.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(r){var e=i.languages[r],t="language-"+r;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:n("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:n("=",e,t),"class-feature":n("\\+",e,t),standard:n("",e,t)}}}}})}(Prism)),s}var p=u();const g=l(p),f=m({__proto__:null,default:g},[p]);export{f as p};
