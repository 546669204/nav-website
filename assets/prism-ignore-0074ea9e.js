import{g as u}from"./index-2ced4dec.js";function p(e,g){for(var t=0;t<g.length;t++){const r=g[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={},i;function l(){return i||(i=1,function(e){e.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},e.languages.gitignore=e.languages.ignore,e.languages.hgignore=e.languages.ignore,e.languages.npmignore=e.languages.ignore}(Prism)),a}var s=l();const f=u(s),m=p({__proto__:null,default:f},[s]);export{m as p};
