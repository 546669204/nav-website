import{g as c}from"./index-3c48d087.js";function u(r,n){for(var i=0;i<n.length;i++){const e=n[i];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const a=Object.getOwnPropertyDescriptor(e,t);a&&Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},o;function p(){return o||(o=1,function(r){var n=/\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i,i="\\b(?:(?=[a-z_]\\w*\\s*[<\\[])|(?!<keyword>))[A-Z_]\\w*(?:\\s*\\.\\s*[A-Z_]\\w*)*\\b(?:\\s*(?:\\[\\s*\\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*".replace(/<keyword>/g,function(){return n.source});function e(a){return RegExp(a.replace(/<CLASS-NAME>/g,function(){return i}),"i")}var t={keyword:n,punctuation:/[()\[\]{};,:.<>]/};r.languages.apex={comment:r.languages.clike.comment,string:r.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:r.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:e("(\\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\\s+\\w+\\s+on)\\s+)<CLASS-NAME>"),lookbehind:!0,inside:t},{pattern:e("(\\(\\s*)<CLASS-NAME>(?=\\s*\\)\\s*[\\w(])"),lookbehind:!0,inside:t},{pattern:e("<CLASS-NAME>(?=\\s*\\w+\\s*[;=,(){:])"),inside:t}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:n,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}}(Prism)),s}var l=p();const g=c(l),b=u({__proto__:null,default:g},[l]);export{b as p};
