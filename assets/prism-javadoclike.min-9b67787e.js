import{g}from"./index-195b12f7.js";function v(a,o){for(var t=0;t<o.length;t++){const n=o[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in a)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(a,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u={},f;function k(){return f||(f=1,function(a){var o=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(o,"addSupport",{value:function(t,n){typeof t=="string"&&(t=[t]),t.forEach(function(i){(function(r,m){var p="doc-comment",c=a.languages[r];if(c){var e=c[p];if(e||(e=(c=a.languages.insertBefore(r,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[p]),e instanceof RegExp&&(e=c[p]={pattern:e}),Array.isArray(e))for(var s=0,l=e.length;s<l;s++)e[s]instanceof RegExp&&(e[s]={pattern:e[s]}),m(e[s]);else m(e)}})(i,function(r){r.inside||(r.inside={}),r.inside.rest=n})})}}),o.addSupport(["java","javascript","php"],o)}(Prism)),u}var d=k();const y=g(d),_=v({__proto__:null,default:y},[d]);export{_ as p};
