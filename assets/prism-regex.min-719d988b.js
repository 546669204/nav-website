import{g as c}from"./index-27e991c2.js";function u(n,i){for(var e=0;e<i.length;e++){const a=i[e];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const t=Object.getOwnPropertyDescriptor(a,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p;function l(){return p||(p=1,function(n){var i={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a="(?:[^\\\\-]|"+e.source+")",r=RegExp(a+"-"+a),t={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:r,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":i,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:e}},"special-escape":i,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":t}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":t}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(Prism)),s}var o=l();const d=c(o),m=u({__proto__:null,default:d},[o]);export{m as p};
