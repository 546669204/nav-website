import{g as u}from"./index-2ced4dec.js";function d(t,o){for(var a=0;a<o.length;a++){const e=o[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},n;function p(){return n||(n=1,Prism.languages.hcl={comment:/(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,heredoc:{pattern:/<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,greedy:!0,alias:"string"},keyword:[{pattern:/(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,inside:{type:{pattern:/(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,lookbehind:!0,alias:"variable"}}},{pattern:/(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,inside:{type:{pattern:/(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,lookbehind:!0,alias:"variable"}}},/[\w-]+(?=\s+\{)/],property:[/[-\w\.]+(?=\s*=(?!=))/,/"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],string:{pattern:/"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,greedy:!0,inside:{interpolation:{pattern:/(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,lookbehind:!0,inside:{type:{pattern:/(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,lookbehind:!0,alias:"variable"},keyword:/\b(?:count|data|local|module|path|self|terraform|var)\b/i,function:/\w+(?=\()/,string:{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/}}}},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,boolean:/\b(?:false|true)\b/i,punctuation:/[=\[\]{}]/}),s}var l=p();const b=u(l),f=d({__proto__:null,default:b},[l]);export{f as p};
