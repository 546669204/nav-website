System.register(["./index-legacy-095e3488.js"],(function(e,n){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function n(e,n){for(var t=0;t<n.length;t++){const r=n[t];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in e)){const t=Object.getOwnPropertyDescriptor(r,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i,a,o={},s=(r||(r=1,i=Prism,a={pattern:/((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},i.languages.gradle=i.languages.extend("clike",{string:{pattern:/'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,greedy:!0},keyword:/\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),i.languages.insertBefore("gradle","string",{shebang:{pattern:/#!.+/,alias:"comment",greedy:!0},"interpolation-string":{pattern:/"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0,inside:{interpolation:a,string:/[\s\S]+/}}}),i.languages.insertBefore("gradle","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),i.languages.insertBefore("gradle","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),a.inside.expression.inside=i.languages.gradle),o);e("p",n({__proto__:null,default:t(s)},[s]))}}}));
