import{g as u}from"./index-579abb6c.js";function d(e,r){for(var t=0;t<r.length;t++){const a=r[t];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const s=Object.getOwnPropertyDescriptor(a,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},o;function b(){return o||(o=1,function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",function(r){e.languages["markup-templating"].buildPlaceholders(r,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)}),e.hooks.add("after-tokenize",function(r){e.languages["markup-templating"].tokenizePlaceholders(r,"handlebars")}),e.languages.hbs=e.languages.handlebars,e.languages.mustache=e.languages.handlebars}(Prism)),i}var l=b();const g=u(l),p=d({__proto__:null,default:g},[l]);export{p};
