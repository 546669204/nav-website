System.register(["./index-legacy-58985ecb.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i={},o=(r||(r=1,Prism.languages.gn={comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,lookbehind:!0,inside:{number:/^\$0x[\s\S]{2}$/,variable:/^\$\w+$/,"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:/\b(?:else|if)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,alias:"keyword"},function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,number:/-?\b\d+\b/,operator:/[-+!=<>]=?|&&|\|\|/,punctuation:/[(){}[\],.]/},Prism.languages.gn["string-literal"].inside.interpolation.inside.expression.inside=Prism.languages.gn,Prism.languages.gni=Prism.languages.gn),i);e("p",t({__proto__:null,default:n(o)},[o]))}}}));
