import{g as p}from"./index-2ced4dec.js";function l(e,i){for(var t=0;t<i.length;t++){const r=i[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(r,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},a;function c(){return a||(a=1,function(e){var i=/\\(?:(?!\2)|\2(?:[^()\r\n]|\([^()]*\)))/.source,t=/"""(?:[^\\"]|"(?!""\2)|<esc>)*"""/.source+"|"+/'''(?:[^\\']|'(?!''\2)|<esc>)*'''/.source+"|"+/"(?:[^\\\r\n"]|"(?!\2)|<esc>)*"/.source+"|"+/'(?:[^\\\r\n']|'(?!\2)|<esc>)*'/.source,r="(?:"+t.replace(/<esc>/g,i)+")";e.languages.cue={comment:{pattern:/\/\/.*/,greedy:!0},"string-literal":{pattern:RegExp(/(^|[^#"'\\])(#*)/.source+r+/(?!["'])\2/.source),lookbehind:!0,greedy:!0,inside:{escape:{pattern:/(?=[\s\S]*["'](#*)$)\\\1(?:U[a-fA-F0-9]{1,8}|u[a-fA-F0-9]{1,4}|x[a-fA-F0-9]{1,2}|\d{2,3}|[^(])/,greedy:!0,alias:"string"},interpolation:{pattern:/(?=[\s\S]*["'](#*)$)\\\1\([^()]*\)/,greedy:!0,inside:{punctuation:/^\\#*\(|\)$/,expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:{pattern:/(^|[^\w$])(?:for|if|import|in|let|null|package)(?![\w$])/,lookbehind:!0},boolean:{pattern:/(^|[^\w$])(?:false|true)(?![\w$])/,lookbehind:!0},builtin:{pattern:/(^|[^\w$])(?:bool|bytes|float|float(?:32|64)|u?int(?:8|16|32|64|128)?|number|rune|string)(?![\w$])/,lookbehind:!0},attribute:{pattern:/@[\w$]+(?=\s*\()/,alias:"function"},function:{pattern:/(^|[^\w$])[a-z_$][\w$]*(?=\s*\()/i,lookbehind:!0},number:{pattern:/(^|[^\w$.])(?:0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|0[xX][0-9A-Fa-f]+(?:_[0-9A-Fa-f]+)*|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[eE][+-]?\d+(?:_\d+)*)?(?:[KMGTP]i?)?)(?![\w$])/,lookbehind:!0},operator:/\.{3}|_\|_|&&?|\|\|?|[=!]~|[<>=!]=?|[+\-*/?]/,punctuation:/[()[\]{},.:]/},e.languages.cue["string-literal"].inside.interpolation.inside.expression.inside=e.languages.cue}(Prism)),s}var u=c();const d=p(u),f=l({__proto__:null,default:d},[u]);export{f as p};
