import{g as u}from"./index-fa1c11f5.js";function b(t,r){for(var i=0;i<r.length;i++){const e=r[i];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in t)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},o;function c(){return o||(o=1,function(t){var r=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,i="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+r+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,e={};t.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+r),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:e},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+i),lookbehind:!0,inside:e},{pattern:RegExp("("+/\bcallback\s+/.source+r+/\s*=\s*/.source+")"+i),lookbehind:!0,inside:e},{pattern:RegExp(/(\btypedef\b\s*)/.source+i),lookbehind:!0,inside:e},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+r),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+r),lookbehind:!0},RegExp(r+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+r),lookbehind:!0},{pattern:RegExp(i+"(?="+/\s*(?:\.{3}\s*)?/.source+r+/\s*[(),;=]/.source+")"),inside:e}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var n in t.languages["web-idl"])n!=="class-name"&&(e[n]=t.languages["web-idl"][n]);t.languages.webidl=t.languages["web-idl"]}(Prism)),s}var l=c();const d=u(l),g=b({__proto__:null,default:d},[l]);export{g as p};
