import{g}from"./index-b88d682c.js";function b(n,a){for(var i=0;i<a.length;i++){const e=a[i];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var c={},u;function h(){return u||(u=1,function(n){var a=/\{[^\r\n\[\]{}]*\}/,i={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:a,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function e(t){return typeof t=="string"?t:Array.isArray(t)?t.map(e).join(""):e(t.content)}n.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:a,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:i}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:a,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:i},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},n.languages.nani=n.languages.naniscript,n.hooks.add("after-tokenize",function(t){t.tokens.forEach(function(r){if(typeof r!="string"&&r.type==="generic-text"){var m=e(r);(function(l){for(var s=[],p=0;p<l.length;p++){var f=l[p],o="[]{}".indexOf(f);if(o!==-1){if(o%2==0)s.push(o+1);else if(s.pop()!==o)return!1}}return s.length===0})(m)||(r.type="bad-line",r.content=m)}})})}(Prism)),c}var d=h();const y=g(d),v=b({__proto__:null,default:y},[d]);export{v as p};
