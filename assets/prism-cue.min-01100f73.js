import{g as l}from"./index-fa1c11f5.js";function p(e,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},s;function d(){return s||(s=1,function(e){var n="(?:"+`"""(?:[^\\\\"]|"(?!""\\2)|<esc>)*"""|'''(?:[^\\\\']|'(?!''\\2)|<esc>)*'''|"(?:[^\\\\\r
"]|"(?!\\2)|<esc>)*"|'(?:[^\\\\\r
']|'(?!\\2)|<esc>)*'`.replace(/<esc>/g,`\\\\(?:(?!\\2)|\\2(?:[^()\r
]|\\([^()]*\\)))`)+")";e.languages.cue={comment:{pattern:/\/\/.*/,greedy:!0},"string-literal":{pattern:RegExp(`(^|[^#"'\\\\])(#*)`+n+`(?!["'])\\2`),lookbehind:!0,greedy:!0,inside:{escape:{pattern:/(?=[\s\S]*["'](#*)$)\\\1(?:U[a-fA-F0-9]{1,8}|u[a-fA-F0-9]{1,4}|x[a-fA-F0-9]{1,2}|\d{2,3}|[^(])/,greedy:!0,alias:"string"},interpolation:{pattern:/(?=[\s\S]*["'](#*)$)\\\1\([^()]*\)/,greedy:!0,inside:{punctuation:/^\\#*\(|\)$/,expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:{pattern:/(^|[^\w$])(?:for|if|import|in|let|null|package)(?![\w$])/,lookbehind:!0},boolean:{pattern:/(^|[^\w$])(?:false|true)(?![\w$])/,lookbehind:!0},builtin:{pattern:/(^|[^\w$])(?:bool|bytes|float|float(?:32|64)|u?int(?:8|16|32|64|128)?|number|rune|string)(?![\w$])/,lookbehind:!0},attribute:{pattern:/@[\w$]+(?=\s*\()/,alias:"function"},function:{pattern:/(^|[^\w$])[a-z_$][\w$]*(?=\s*\()/i,lookbehind:!0},number:{pattern:/(^|[^\w$.])(?:0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|0[xX][0-9A-Fa-f]+(?:_[0-9A-Fa-f]+)*|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[eE][+-]?\d+(?:_\d+)*)?(?:[KMGTP]i?)?)(?![\w$])/,lookbehind:!0},operator:/\.{3}|_\|_|&&?|\|\|?|[=!]~|[<>=!]=?|[+\-*/?]/,punctuation:/[()[\]{},.:]/},e.languages.cue["string-literal"].inside.interpolation.inside.expression.inside=e.languages.cue}(Prism)),o}var u=d();const c=l(u),g=p({__proto__:null,default:c},[u]);export{g as p};
