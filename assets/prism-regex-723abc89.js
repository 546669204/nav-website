import{g as l}from"./index-61a9391c.js";function g(n,s){for(var e=0;e<s.length;e++){const a=s[e];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in n)){const t=Object.getOwnPropertyDescriptor(a,r);t&&Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var p={},o;function d(){return o||(o=1,function(n){var s={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},e=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},r={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},t="(?:[^\\\\-]|"+e.source+")",u=RegExp(t+"-"+t),i={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};n.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:u,inside:{escape:e,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":s,"char-set":r,escape:e}},"special-escape":s,"char-set":a,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":i}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:e,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":i}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(Prism)),p}var c=d();const f=l(c),h=g({__proto__:null,default:f},[c]);export{h as p};
