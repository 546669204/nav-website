import{g as l}from"./index-27e991c2.js";function p(n,a){for(var r=0;r<a.length;r++){const e=a[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i={},s;function m(){return s||(s=1,function(n){var a=["sum","min","max","avg","group","stddev","stdvar","count","count_values","bottomk","topk","quantile"],r=["on","ignoring","group_right","group_left","by","without"],e=["offset"],t=a.concat(r,e);n.languages.promql={comment:{pattern:/(^[ \t]*)#.*/m,lookbehind:!0},"vector-match":{pattern:new RegExp("((?:"+r.join("|")+")\\s*)\\([^)]*\\)"),lookbehind:!0,inside:{"label-key":{pattern:/\b[^,]+\b/,alias:"attr-name"},punctuation:/[(),]/}},"context-labels":{pattern:/\{[^{}]*\}/,inside:{"label-key":{pattern:/\b[a-z_]\w*(?=\s*(?:=|![=~]))/,alias:"attr-name"},"label-value":{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,alias:"attr-value"},punctuation:/\{|\}|=~?|![=~]|,/}},"context-range":[{pattern:/\[[\w\s:]+\]/,inside:{punctuation:/\[|\]|:/,"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}},{pattern:/(\boffset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}}],keyword:new RegExp("\\b(?:"+t.join("|")+")\\b","i"),function:/\b[a-z_]\w*(?=\s*\()/i,number:/[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,operator:/[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,punctuation:/[{};()`,.[\]]/}}(Prism)),i}var u=m();const b=l(u),c=p({__proto__:null,default:b},[u]);export{c as p};
