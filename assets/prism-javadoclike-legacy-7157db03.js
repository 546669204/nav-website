System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,a,o,i={},s=(n||(n=1,a=Prism,o=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/},Object.defineProperty(o,"addSupport",{value:function(e,t){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,t){var r="doc-comment",n=a.languages[e];if(n){var o=n[r];if(!o){var i={};i[r]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},o=(n=a.languages.insertBefore(e,"comment",i))[r]}if(o instanceof RegExp&&(o=n[r]={pattern:o}),Array.isArray(o))for(var s=0,c=o.length;s<c;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),t(o[s]);else t(o)}}(e,(function(e){e.inside||(e.inside={}),e.inside.rest=t}))}))}}),o.addSupport(["java","javascript","php"],o)),i);e("p",t({__proto__:null,default:r(s)},[s]))}}}));
