import{g as b}from"./index-195b12f7.js";function p(i,n){for(var t=0;t<n.length;t++){const e=n[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in i)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(i,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var o={},s;function l(){return s||(s=1,function(i){var n=/%%?[~:\w]+%?|!\S+!/,t={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},e=/"(?:[\\"]"|[^"])*"(?!")/,r=/(?:\b|-)\d+\b/;i.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:e,parameter:t,variable:n,number:r,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:e,parameter:t,variable:n,number:r,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:e,parameter:t,variable:[n,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:r,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:e,parameter:t,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:n,number:r,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}}(Prism)),o}var m=l();const u=b(m),c=p({__proto__:null,default:u},[m]);export{c as p};
