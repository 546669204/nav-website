System.register(["./index-legacy-095e3488.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const o=t[n];if("string"!=typeof o&&!Array.isArray(o))for(const t in o)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(o,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>o[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,a={},r=(o||(o=1,function(e){e.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var t=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,n=e.languages["markup-templating"];e.hooks.add("before-tokenize",(function(e){n.buildPlaceholders(e,"django",t)})),e.hooks.add("after-tokenize",(function(e){n.tokenizePlaceholders(e,"django")})),e.languages.jinja2=e.languages.django,e.hooks.add("before-tokenize",(function(e){n.buildPlaceholders(e,"jinja2",t)})),e.hooks.add("after-tokenize",(function(e){n.tokenizePlaceholders(e,"jinja2")}))}(Prism)),a);e("p",t({__proto__:null,default:n(r)},[r]))}}}));
