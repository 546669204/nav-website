System.register(["./index-legacy-de591ef4.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a,o,s={},i=(r||(r=1,a={pattern:/^[;#].*/m,greedy:!0},o='"(?:[^\r\n"\\\\]|\\\\(?:[^\r]|\r\n?))*"(?!\\S)',Prism.languages.systemd={comment:a,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp("(=[ \t]*(?!\\s))(?:"+o+'|(?=[^"\r\n]))(?:[^\\s\\\\]|[ \t]+(?:(?![ \t"])|'+o+")|\\\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;]))*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:a,quoted:{pattern:RegExp("(^|\\s)"+o),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}),s);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
