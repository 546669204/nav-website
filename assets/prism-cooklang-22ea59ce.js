import{g as l}from"./index-f29f4019.js";function g(a,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in a)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(a,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i={},s;function d(){return s||(s=1,function(a){var n=/(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source,e=/[^{}@#]+/.source,t=/\{[^}#@]*\}/.source,r=e+t,o=/(?:h|hours|hrs|m|min|minutes)/.source,p={pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:!0,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:!0,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:!0,alias:"operator"},punctuation:/[{}]/}};a.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:!0},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:!0}}},"cookware-group":{pattern:new RegExp("#(?:"+r+"|"+n+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:"+e+")"),lookbehind:!0,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp(/(^\{)/.source+e),lookbehind:!0,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+r+"|"+n+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:"+e+")"),lookbehind:!0,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":p}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:!0,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp(/(%\s*)/.source+o+/\b/.source),lookbehind:!0,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}}(Prism)),i}var u=d();const m=l(u),k=g({__proto__:null,default:m},[u]);export{k as p};
