System.register(["./index-legacy-0c1d1c49.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const a=t[n];if("string"!=typeof a&&!Array.isArray(a))for(const t in a)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,r={},s=(a||(a=1,Prism.languages.kusto={comment:{pattern:/\/\/.*/,greedy:!0},string:{pattern:/```[\s\S]*?```|[hH]?(?:"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\.)*'|@(?:"[^\r\n"]*"|'[^\r\n']*'))/,greedy:!0},verb:{pattern:/(\|\s*)[a-z][\w-]*/i,lookbehind:!0,alias:"keyword"},command:{pattern:/\.[a-z][a-z\d-]*\b/,alias:"keyword"},"class-name":/\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\b/,keyword:/\b(?:access|alias|and|anti|as|asc|auto|between|by|(?:contains|(?:ends|starts)with|has(?:perfix|suffix)?)(?:_cs)?|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|matches\s+regex|nulls\s+(?:first|last))(?![\w-])/,boolean:/\b(?:false|null|true)\b/,function:/\b[a-z_]\w*(?=\s*\()/,datetime:[{pattern:/\b(?:(?:Fri|Friday|Mon|Monday|Sat|Saturday|Sun|Sunday|Thu|Thursday|Tue|Tuesday|Wed|Wednesday)\s*,\s*)?\d{1,2}(?:\s+|-)(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)(?:\s+|-)\d{2}\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:\b(?:[A-Z]|(?:[ECMT][DS]|GM|U)T)|[+-]\d{4}))?\b/,alias:"number"},{pattern:/[+-]?\b(?:\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?|\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)Z?/,alias:"number"}],number:/\b(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)(?:(?:min|sec|[mnµ]s|[dhms]|microsecond|tick)\b)?|[+-]?\binf\b/,operator:/=>|[!=]~|[!=<>]=?|[-+*/%|]|\.\./,punctuation:/[()\[\]{},;.:]/}),r);e("p",t({__proto__:null,default:n(s)},[s]))}}}));
