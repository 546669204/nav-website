import{g as f}from"./index-61a9391c.js";function g(a,i){for(var o=0;o<i.length;o++){const n=i[o];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in a)){const e=Object.getOwnPropertyDescriptor(n,t);e&&Object.defineProperty(a,t,e.get?e:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var c={},u;function h(){return u||(u=1,function(a){var i=/\{[^\r\n\[\]{}]*\}/,o={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:i,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};a.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:i,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:o}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:i,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:o},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},a.languages.nani=a.languages.naniscript,a.hooks.add("after-tokenize",function(e){var l=e.tokens;l.forEach(function(r){if(typeof r!="string"&&r.type==="generic-text"){var s=t(r);n(s)||(r.type="bad-line",r.content=s)}})});function n(e){for(var l="[]{}",r=[],s=0;s<e.length;s++){var d=e[s],p=l.indexOf(d);if(p!==-1){if(p%2===0)r.push(p+1);else if(r.pop()!==p)return!1}}return r.length===0}function t(e){return typeof e=="string"?e:Array.isArray(e)?e.map(t).join(""):t(e.content)}}(Prism)),c}var m=h();const y=f(m),v=g({__proto__:null,default:y},[m]);export{v as p};
