import{g as p}from"./index-61a9391c.js";function u(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={},s;function c(){return s||(s=1,Prism.languages.monkey={comment:{pattern:/^#Rem\s[\s\S]*?^#End|'.+/im,greedy:!0},string:{pattern:/"[^"\r\n]*"/,greedy:!0},preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,greedy:!0,alias:"property"},function:/\b\w+(?=\()/,"type-char":{pattern:/\b[?%#$]/,alias:"class-name"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/}),i}var l=c();const d=p(l),m=u({__proto__:null,default:d},[l]);export{m as p};
