System.register(["./index-legacy-0c1d1c49.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,a,o,i,s,p,u={},l=(n||(n=1,a=Prism,o=/(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source,s=(i=/[^{}@#]+/.source)+/\{[^}#@]*\}/.source,p=/(?:h|hours|hrs|m|min|minutes)/.source,a.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:!0},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:!0}}},"cookware-group":{pattern:new RegExp("#(?:"+s+"|"+o+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:"+i+")"),lookbehind:!0,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp(/(^\{)/.source+i),lookbehind:!0,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+s+"|"+o+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:"+i+")"),lookbehind:!0,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":{pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:!0,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:!0,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:!0,alias:"operator"},punctuation:/[{}]/}}}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:!0,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp(/(%\s*)/.source+p+/\b/.source),lookbehind:!0,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}),u);e("p",t({__proto__:null,default:r(l)},[l]))}}}));
