System.register(["./index-legacy-06140357.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,o,a={},i=(r||(r=1,o=/\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i,Prism.languages.maxscript={comment:{pattern:/\/\*[\s\S]*?(?:\*\/|$)|--.*/,greedy:!0},string:{pattern:/(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/,lookbehind:!0,greedy:!0},path:{pattern:/\$(?:[\w/\\.*?]|'[^']*')*/,greedy:!0,alias:"string"},"function-call":{pattern:RegExp("((?:^|[;=<>+\\-*/^({\\[]|\\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\\b)[ \t]*)(?!"+o.source+")[a-z_]\\w*\\b(?=[ \t]*(?:(?!"+o.source+")[a-z_]|\\d|-\\.?\\d|[({'\"$@#?]))","im"),lookbehind:!0,greedy:!0,alias:"function"},"function-definition":{pattern:/(\b(?:fn|function)\s+)\w+\b/i,lookbehind:!0,alias:"function"},argument:{pattern:/\b[a-z_]\w*(?=:)/i,alias:"attr-name"},keyword:o,boolean:/\b(?:false|true)\b/,time:{pattern:/(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/,lookbehind:!0,alias:"number"},number:[{pattern:/(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/,lookbehind:!0},/\b(?:e|pi)\b/],constant:/\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/,color:{pattern:/\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i,alias:"constant"},operator:/[-+*/<>=!]=?|[&^?]|#(?!\()/,punctuation:/[()\[\]{}.:,;]|#(?=\()|\\$/m}),a);e("p",t({__proto__:null,default:n(i)},[i]))}}}));
