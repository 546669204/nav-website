import{g as u}from"./index-3c48d087.js";function p(t,a){for(var i=0;i<a.length;i++){const e=a[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},s;function c(){return s||(s=1,Prism.languages.supercollider={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^"\\]|\\[\s\S])*"/,lookbehind:!0,greedy:!0},char:{pattern:/\$(?:[^\\\r\n]|\\.)/,greedy:!0},symbol:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'|\\\w+/,lookbehind:!0,greedy:!0},keyword:/\b(?:_|arg|classvar|const|nil|var|while)\b/,boolean:/\b(?:false|true)\b/,label:{pattern:/\b[a-z_]\w*(?=\s*:)/,alias:"property"},number:/\b(?:inf|pi|0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:pi)?|\d+r[0-9a-zA-Z]+(?:\.[0-9a-zA-Z]+)?|\d+[sb]{1,4}\d*)\b/,"class-name":/\b[A-Z]\w*\b/,operator:/\.{2,3}|#(?![[{])|&&|[!=]==?|\+>>|\+{1,3}|-[->]|=>|>>|\?\?|@\|?@|\|(?:@|[!=]=)?\||!\?|<[!=>]|\*{1,2}|<{2,3}\*?|[-!%&/<>?@|=`]/,punctuation:/[{}()[\].:,;]|#[[{]/},Prism.languages.sclang=Prism.languages.supercollider),o}var l=c();const d=u(l),g=p({__proto__:null,default:d},[l]);export{g as p};
