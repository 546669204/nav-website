System.register(["./index-legacy-bb604a6f.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e.g}],execute:function(){function t(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var r,i={},a=(r||(r=1,function(e){var t="(?:\\B-|\\b_|\\b)[A-Za-z][\\w-]*(?![\\w-])",n="(?:\\b(?:unsigned\\s+)?long\\s+long(?![\\w-])|\\b(?:unrestricted|unsigned)\\s+[a-z]+(?![\\w-])|(?!(?:unrestricted|unsigned)\\b)"+t+"(?:\\s*<(?:[^<>]|<[^<>]*>)*>)?)(?:\\s*\\?)?",r={};for(var i in e.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp("(\\bnamespace\\s+)"+t),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:r},{pattern:RegExp("(\\b(?:attribute|const|deleter|getter|optional|setter)\\s+)"+n),lookbehind:!0,inside:r},{pattern:RegExp("(\\bcallback\\s+"+t+"\\s*=\\s*)"+n),lookbehind:!0,inside:r},{pattern:RegExp("(\\btypedef\\b\\s*)"+n),lookbehind:!0,inside:r},{pattern:RegExp("(\\b(?:callback|dictionary|enum|interface(?:\\s+mixin)?)\\s+)(?!(?:interface|mixin)\\b)"+t),lookbehind:!0},{pattern:RegExp("(:\\s*)"+t),lookbehind:!0},RegExp(t+"(?=\\s+(?:implements|includes)\\b)"),{pattern:RegExp("(\\b(?:implements|includes)\\s+)"+t),lookbehind:!0},{pattern:RegExp(n+"(?=\\s*(?:\\.{3}\\s*)?"+t+"\\s*[(),;=])"),inside:r}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/},e.languages["web-idl"])"class-name"!==i&&(r[i]=e.languages["web-idl"][i]);e.languages.webidl=e.languages["web-idl"]}(Prism)),i);e("p",t({__proto__:null,default:n(a)},[a]))}}}));
