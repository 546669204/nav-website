import{g as l}from"./index-fde57fe3.js";function p(r,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const i=Object.getOwnPropertyDescriptor(e,t);i&&Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},s;function g(){return s||(s=1,Prism.languages.gn={comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,lookbehind:!0,inside:{number:/^\$0x[\s\S]{2}$/,variable:/^\$\w+$/,"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:/\b(?:else|if)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,alias:"keyword"},function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,number:/-?\b\d+\b/,operator:/[-+!=<>]=?|&&|\|\|/,punctuation:/[(){}[\],.]/},Prism.languages.gn["string-literal"].inside.interpolation.inside.expression.inside=Prism.languages.gn,Prism.languages.gni=Prism.languages.gn),a}var u=g();const c=l(u),_=p({__proto__:null,default:c},[u]);export{_ as p};
