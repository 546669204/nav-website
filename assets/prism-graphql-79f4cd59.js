import{g as k}from"./index-fa1c11f5.js";function z(p,u){for(var n=0;n<u.length;n++){const e=u[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in p)){const s=Object.getOwnPropertyDescriptor(e,a);s&&Object.defineProperty(p,a,s.get?s:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var w={},_;function P(){return _||(_=1,Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",function(u){if(u.language!=="graphql")return;var n=u.tokens.filter(function(t){return typeof t!="string"&&t.type!=="comment"&&t.type!=="scalar"}),e=0;function a(t){return n[e+t]}function s(t,i){i=i||0;for(var r=0;r<t.length;r++){var o=a(r+i);if(!o||o.type!==t[r])return!1}return!0}function y(t,i){for(var r=1,o=e;o<n.length;o++){var q=n[o],d=q.content;if(q.type==="punctuation"&&typeof d=="string"){if(t.test(d))r++;else if(i.test(d)&&(r--,r===0))return o}}return-1}function l(t,i){var r=t.alias;r?Array.isArray(r)||(t.alias=r=[r]):t.alias=r=[],r.push(i)}for(;e<n.length;){var v=n[e++];if(v.type==="keyword"&&v.content==="mutation"){var f=[];if(s(["definition-mutation","punctuation"])&&a(1).content==="("){e+=2;var c=y(/^\($/,/^\)$/);if(c===-1)continue;for(;e<c;e++){var m=a(0);m.type==="variable"&&(l(m,"variable-input"),f.push(m.content))}e=c+1}if(s(["punctuation","property-query"])&&a(0).content==="{"&&(e++,l(a(0),"property-mutation"),f.length>0)){var h=y(/^\{$/,/^\}$/);if(h===-1)continue;for(var g=e;g<h;g++){var b=n[g];b.type==="variable"&&f.indexOf(b.content)>=0&&l(b,"variable-input")}}}}})),w}var A=P();const $=k(A),Z=z({__proto__:null,default:$},[A]);export{Z as p};
