import{g as p}from"./index-3c48d087.js";function c(e,r){for(var o=0;o<r.length;o++){const t=r[o];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},s;function l(){return s||(s=1,function(e){e.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var r=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;e.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+r+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+r+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(r),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.tremor}}},string:/[\s\S]+/}},e.languages.troy=e.languages.tremor,e.languages.trickle=e.languages.tremor}(Prism)),i}var u=l();const g=p(u),f=c({__proto__:null,default:g},[u]);export{f as p};
