import{g}from"./index-61a9391c.js";function l(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(e,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},s;function d(){return s||(s=1,function(e){e.languages.tt2=e.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),e.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),e.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),e.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete e.languages.tt2.string,e.hooks.add("before-tokenize",function(t){var r=/\[%[\s\S]+?%\]/g;e.languages["markup-templating"].buildPlaceholders(t,"tt2",r)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"tt2")})}(Prism)),i}var u=d();const p=g(u),f=l({__proto__:null,default:p},[u]);export{f as p};
