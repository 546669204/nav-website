import{g as u}from"./index-fde57fe3.js";function l(r,t){for(var e=0;e<t.length;e++){const n=t[e];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(r,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={},p;function g(){return p||(p=1,function(r){var t="(?:(?!\\s)[\\d$+<=a-zA-Z\\x80-\\uFFFF])+",e="[^{}@#]+\\{[^}#@]*\\}";r.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:!0},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:!0}}},"cookware-group":{pattern:new RegExp("#(?:"+e+"|"+t+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:[^{}@#]+)"),lookbehind:!0,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp("(^\\{)[^{}@#]+"),lookbehind:!0,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+e+"|"+t+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:[^{}@#]+)"),lookbehind:!0,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":{pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:!0,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:!0,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:!0,alias:"operator"},punctuation:/[{}]/}}}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:!0,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp("(%\\s*)(?:h|hours|hrs|m|min|minutes)\\b"),lookbehind:!0,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}}(Prism)),i}var s=g();const d=u(s),k=l({__proto__:null,default:d},[s]);export{k as p};
