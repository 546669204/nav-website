System.register(["./index-legacy-73c7a40a.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i={},a=(r||(r=1,function(e){var t=/\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i,n="\\b(?:(?=[a-z_]\\w*\\s*[<\\[])|(?!<keyword>))[A-Z_]\\w*(?:\\s*\\.\\s*[A-Z_]\\w*)*\\b(?:\\s*(?:\\[\\s*\\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*".replace(/<keyword>/g,(function(){return t.source}));function r(e){return RegExp(e.replace(/<CLASS-NAME>/g,(function(){return n})),"i")}var i={keyword:t,punctuation:/[()\[\]{};,:.<>]/};e.languages.apex={comment:e.languages.clike.comment,string:e.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:e.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:r("(\\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\\s+\\w+\\s+on)\\s+)<CLASS-NAME>"),lookbehind:!0,inside:i},{pattern:r("(\\(\\s*)<CLASS-NAME>(?=\\s*\\)\\s*[\\w(])"),lookbehind:!0,inside:i},{pattern:r("<CLASS-NAME>(?=\\s*\\w+\\s*[;=,(){:])"),inside:i}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:t,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}}(Prism)),i);e("p",t({__proto__:null,default:n(a)},[a]))}}}));
