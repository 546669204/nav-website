System.register(["./index-legacy-06140357.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},i=(r||(r=1,function(e){var t="(?:"+["[a-zA-Z_\\x80-\\uFFFF][\\w\\x80-\\uFFFF]*","-?(?:\\.\\d+|\\d+(?:\\.\\d*)?)",'"[^"\\\\]*(?:\\\\[^][^"\\\\]*)*"',"<(?:[^<>]|(?!\x3c!--)<(?:[^<>\"']|\"[^\"]*\"|'[^']*')+>|\x3c!--(?:[^-]|-(?!->))*--\x3e)*>"].join("|")+")",n={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function r(e,n){return RegExp(e.replace(/<ID>/g,(function(){return t})),n)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:r("(\\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>","i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:n},"attr-value":{pattern:r("(=[ \t\r\n]*)<ID>"),lookbehind:!0,greedy:!0,inside:n},"attr-name":{pattern:r("([\\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)"),lookbehind:!0,greedy:!0,inside:n},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:r("(^|[^-.\\w\\x80-\\uFFFF\\\\])<ID>"),lookbehind:!0,greedy:!0,inside:n},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot}(Prism)),a);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
