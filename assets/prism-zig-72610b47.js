import{g as p}from"./index-fa1c11f5.js";function b(n,e){for(var o=0;o<e.length;o++){const t=e[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in n)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(n,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var l={},u;function g(){return u||(u=1,function(n){function e(s){return function(){return s}}var o=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,t="\\b(?!"+o.source+")(?!\\d)\\w+\\b",r=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,a=/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,e(r)),d=/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,e(t)),i="(?!\\s)(?:!?\\s*(?:"+a+"\\s*)*"+d+")+";n.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,e(i)).replace(/<ALIGN>/g,e(r))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,e(i)).replace(/<ALIGN>/g,e(r))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword:o,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},n.languages.zig["class-name"].forEach(function(s){s.inside===null&&(s.inside=n.languages.zig)})}(Prism)),l}var c=g();const f=p(c),y=b({__proto__:null,default:f},[c]);export{y as p};
