System.register(["./index-legacy-9ff5b9ae.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.g}],execute:function(){function t(e,t){for(var a=0;a<t.length;a++){const r=t[a];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,n,o={},s=(r||(r=1,(n=Prism).languages.flow=n.languages.extend("javascript",{}),n.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),n.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete n.languages.flow.parameter,n.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(n.languages.flow.keyword)||(n.languages.flow.keyword=[n.languages.flow.keyword]),n.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})),o);e("p",t({__proto__:null,default:a(s)},[s]))}}}));
