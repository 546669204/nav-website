System.register(["./index-legacy-73c7a40a.js"],(function(e,r){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function r(e,r){for(var t=0;t<r.length;t++){const a=r[t];if("string"!=typeof a&&!Array.isArray(a))for(const r in a)if("default"!==r&&!(r in e)){const t=Object.getOwnPropertyDescriptor(a,r);t&&Object.defineProperty(e,r,t.get?t:{enumerable:!0,get:()=>a[r]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,n={},s=(a||(a=1,Prism.languages.birb=Prism.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),Prism.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})),n);e("p",r({__proto__:null,default:t(s)},[s]))}}}));
