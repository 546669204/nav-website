System.register(["./index-legacy-862727e1.js"],(function(e,t){"use strict";var s;return{setters:[e=>{s=e.g}],execute:function(){function t(e,t){for(var s=0;s<t.length;s++){const n=t[s];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const s=Object.getOwnPropertyDescriptor(n,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,a,r,i={},o=(n||(n=1,a=Prism,r=/\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/,a.languages.protobuf=a.languages.extend("clike",{"class-name":[{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},{pattern:/(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,lookbehind:!0}],keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,function:/\b[a-z_]\w*(?=\s*\()/i}),a.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:r}},builtin:r,"positional-class-name":{pattern:/(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[a-z_]\w*(?=\s*=)/i,lookbehind:!0}})),i);e("p",t({__proto__:null,default:s(o)},[o]))}}}));
