import{g as b}from"./index-27e991c2.js";function d(r,t){for(var i=0;i<t.length;i++){const e=t[i];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},o;function u(){return o||(o=1,function(r){var t="(?:\\B-|\\b_|\\b)[A-Za-z][\\w-]*(?![\\w-])",i="(?:\\b(?:unsigned\\s+)?long\\s+long(?![\\w-])|\\b(?:unrestricted|unsigned)\\s+[a-z]+(?![\\w-])|(?!(?:unrestricted|unsigned)\\b)"+t+"(?:\\s*<(?:[^<>]|<[^<>]*>)*>)?)(?:\\s*\\?)?",e={};for(var n in r.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp("(\\bnamespace\\s+)"+t),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:e},{pattern:RegExp("(\\b(?:attribute|const|deleter|getter|optional|setter)\\s+)"+i),lookbehind:!0,inside:e},{pattern:RegExp("(\\bcallback\\s+"+t+"\\s*=\\s*)"+i),lookbehind:!0,inside:e},{pattern:RegExp("(\\btypedef\\b\\s*)"+i),lookbehind:!0,inside:e},{pattern:RegExp("(\\b(?:callback|dictionary|enum|interface(?:\\s+mixin)?)\\s+)(?!(?:interface|mixin)\\b)"+t),lookbehind:!0},{pattern:RegExp("(:\\s*)"+t),lookbehind:!0},RegExp(t+"(?=\\s+(?:implements|includes)\\b)"),{pattern:RegExp("(\\b(?:implements|includes)\\s+)"+t),lookbehind:!0},{pattern:RegExp(i+"(?=\\s*(?:\\.{3}\\s*)?"+t+"\\s*[(),;=])"),inside:e}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/},r.languages["web-idl"])n!=="class-name"&&(e[n]=r.languages["web-idl"][n]);r.languages.webidl=r.languages["web-idl"]}(Prism)),s}var l=u();const p=b(l),g=d({__proto__:null,default:p},[l]);export{g as p};
