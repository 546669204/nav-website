System.register(["./index-legacy-06140357.js"],(function(e,r){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function r(e,r){for(var t=0;t<r.length;t++){const n=r[t];if("string"!=typeof n&&!Array.isArray(n))for(const r in n)if("default"!==r&&!(r in e)){const t=Object.getOwnPropertyDescriptor(n,r);t&&Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:()=>n[r]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,i,a,o,s,b={},l=(n||(n=1,i=/%%?[~:\w]+%?|!\S+!/,a={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},o=/"(?:[\\"]"|[^"])*"(?!")/,s=/(?:\b|-)\d+\b/,Prism.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:o,parameter:a,variable:i,number:s,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:o,parameter:a,variable:i,number:s,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:o,parameter:a,variable:[i,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:s,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:o,parameter:a,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:i,number:s,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}),b);e("p",r({__proto__:null,default:t(l)},[l]))}}}));
