import{g as l}from"./index-2ced4dec.js";function d(t,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},s;function u(){return s||(s=1,Prism.languages.eiffel={comment:/--.*/,string:[{pattern:/"([^[]*)\[[\s\S]*?\]\1"/,greedy:!0},{pattern:/"([^{]*)\{[\s\S]*?\}\1"/,greedy:!0},{pattern:/"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,greedy:!0}],char:/'(?:%.|[^%'\r\n])+'/,keyword:/\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,boolean:/\b(?:False|True)\b/i,"class-name":/\b[A-Z][\dA-Z_]*\b/,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/}),o}var f=u();const c=l(f),p=d({__proto__:null,default:c},[f]);export{p};
