System.register(["./index-legacy-095e3488.js"],(function(e,a){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function a(e,a){for(var t=0;t<a.length;t++){const n=a[t];if("string"!=typeof n&&!Array.isArray(n))for(const a in n)if("default"!==a&&!(a in e)){const t=Object.getOwnPropertyDescriptor(n,a);t&&Object.defineProperty(e,a,t.get?t:{enumerable:!0,get:()=>n[a]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,r,i,s,o,p,c,l={},u=(n||(n=1,r=Prism,i={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},o="(?:[^\\\\-]|"+(s=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source+")",p=RegExp(o+"-"+o),c={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},r.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:p,inside:{escape:s,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":i,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:s}},"special-escape":i,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":c}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:s,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":c}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}),l);e("p",a({__proto__:null,default:t(u)},[u]))}}}));
