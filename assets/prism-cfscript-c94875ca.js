import{g as u}from"./index-2ced4dec.js";function l(t,n){for(var i=0;i<n.length;i++){const e=n[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},o;function p(){return o||(o=1,Prism.languages.cfscript=Prism.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,inside:{annotation:{pattern:/(?:^|[^.])@[\w\.]+/,alias:"punctuation"}}},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],keyword:/\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,operator:[/\+\+|--|&&|\|\||::|=>|[!=]==|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|:/,/\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],scope:{pattern:/\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,alias:"global"},type:{pattern:/\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,alias:"builtin"}}),Prism.languages.insertBefore("cfscript","keyword",{"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"}}),delete Prism.languages.cfscript["class-name"],Prism.languages.cfc=Prism.languages.cfscript),s}var c=p();const f=u(c),m=l({__proto__:null,default:f},[c]);export{m as p};
