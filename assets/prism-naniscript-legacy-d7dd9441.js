System.register(["./index-legacy-095e3488.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const a=t[n];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,r={},i=(a||(a=1,function(e){var t=/\{[^\r\n\[\]{}]*\}/,n={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:t,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function a(e){return"string"==typeof e?e:Array.isArray(e)?e.map(a).join(""):a(e.content)}e.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:t,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:n}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:t,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:n},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},e.languages.nani=e.languages.naniscript,e.hooks.add("after-tokenize",(function(e){e.tokens.forEach((function(e){if("string"!=typeof e&&"generic-text"===e.type){var t=a(e);(function(e){for(var t="[]{}",n=[],a=0;a<e.length;a++){var r=e[a],i=t.indexOf(r);if(-1!==i)if(i%2==0)n.push(i+1);else if(n.pop()!==i)return!1}return 0===n.length})(t)||(e.type="bad-line",e.content=t)}}))}))}(Prism)),r);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
