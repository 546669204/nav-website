System.register(["./index-legacy-73c7a40a.js"],(function(e,n){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function n(e,n){for(var t=0;t<n.length;t++){const r=n[t];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in e)){const t=Object.getOwnPropertyDescriptor(r,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i={},a=(r||(r=1,function(e){for(var n='\\((?:[^();"#\\\\]|\\\\[^]|;.*(?!.)|"(?:[^"\\\\]|\\\\.)*"|#(?:\\{(?:(?!#\\})[^])*#\\}|[^{])|<expr>)*\\)',t=0;t<5;t++)n=n.replace(/<expr>/g,(function(){return n}));n=n.replace(/<expr>/g,"[^\\s\\S]");var r=e.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp('(^|[=\\s])#(?:"(?:[^"\\\\]|\\\\.)*"|[^\\s()"]*(?:[^\\s()]|<expr>))'.replace(/<expr>/g,(function(){return n})),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:e.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};r["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=r,e.languages.ly=r}(Prism)),i);e("p",n({__proto__:null,default:t(a)},[a]))}}}));
