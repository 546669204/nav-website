System.register(["./index-legacy-de591ef4.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,a={},o=(r||(r=1,Prism.languages.moonscript={comment:/--.*/,string:[{pattern:/'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,greedy:!0},{pattern:/"[^"]*"/,greedy:!0,inside:{interpolation:{pattern:/#\{[^{}]*\}/,inside:{moonscript:{pattern:/(^#\{)[\s\S]+(?=\})/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/#\{|\}/,alias:"punctuation"}}}}}],"class-name":[{pattern:/(\b(?:class|extends)[ \t]+)\w+/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,variable:/@@?\w*/,property:{pattern:/\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,lookbehind:!0},function:{pattern:/\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:create|resume|running|status|wrap|yield)|debug\.(?:debug|getfenv|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|setfenv|sethook|setlocal|setmetatable|setupvalue|traceback)|dofile|error|getfenv|getmetatable|io\.(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\.(?:concat|insert|maxn|remove|sort)|tonumber|tostring|type|unpack|xpcall)\b/,inside:{punctuation:/\./}},boolean:/\b(?:false|true)\b/,number:/(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,operator:/\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,punctuation:/[.,()[\]{}\\]/},Prism.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside=Prism.languages.moonscript,Prism.languages.moon=Prism.languages.moonscript),a);e("p",t({__proto__:null,default:n(o)},[o]))}}}));
