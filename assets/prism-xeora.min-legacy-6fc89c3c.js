System.register(["./index-legacy-bb604a6f.js"],(function(t,n){"use strict";var e;return{setters:[t=>{e=t.g}],execute:function(){function n(t,n){for(var e=0;e<n.length;e++){const a=n[e];if("string"!=typeof a&&!Array.isArray(a))for(const n in a)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(a,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>a[n]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a,i,r={},o=(a||(a=1,(i=Prism).languages.xeora=i.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),i.languages.insertBefore("inside","punctuation",{variable:i.languages.xeora["function-inline"].inside.variable},i.languages.xeora["function-block"]),i.languages.xeoracube=i.languages.xeora),r);t("p",n({__proto__:null,default:e(o)},[o]))}}}));
