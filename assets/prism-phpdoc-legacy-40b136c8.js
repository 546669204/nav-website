System.register(["./index-legacy-862727e1.js"],(function(e,r){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function r(e,r){for(var t=0;t<r.length;t++){const a=r[t];if("string"!=typeof a&&!Array.isArray(a))for(const r in a)if("default"!==r&&!(r in e)){const t=Object.getOwnPropertyDescriptor(a,r);t&&Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:()=>a[r]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,o,n,l={},s=(a||(a=1,o=Prism,n=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source,o.languages.phpdoc=o.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+n+"\\s+)?)\\$\\w+"),lookbehind:!0}}),o.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+n),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),o.languages.javadoclike.addSupport("php",o.languages.phpdoc)),l);e("p",r({__proto__:null,default:t(s)},[s]))}}}));
