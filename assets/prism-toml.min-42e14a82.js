import{g as m}from"./index-2ced4dec.js";function u(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},i;function l(){return i||(i=1,function(e){function r(t){return t.replace(/__/g,function(){return`(?:[\\w-]+|'[^'
\r]*'|"(?:\\\\.|[^\\\\"\r
])*")`})}e.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(r("(^[	 ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])"),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(r("(^[	 ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)"),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}}(Prism)),s}var d=l();const p=m(d),b=u({__proto__:null,default:p},[d]);export{b as p};
