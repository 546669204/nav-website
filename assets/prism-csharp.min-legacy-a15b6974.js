System.register(["./index-legacy-9ff5b9ae.js"],(function(e,n){"use strict";var s;return{setters:[e=>{s=e.g}],execute:function(){function n(e,n){for(var s=0;s<n.length;s++){const t=n[s];if("string"!=typeof t&&!Array.isArray(t))for(const n in t)if("default"!==n&&!(n in e)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var t,a={},r=(t||(t=1,function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,s){return"(?:"+n[+s]+")"}))}function s(e,s,t){return RegExp(n(e,s),t||"")}function t(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),c=RegExp(l(a+" "+r+" "+i+" "+o)),u=l(r+" "+i+" "+o),p=l(a+" "+r+" "+o),g=t("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=t("\\((?:[^()]|<<self>>)*\\)",2),f="@?\\b[A-Za-z_]\\w*\\b",h=n("<<0>>(?:\\s*<<1>>)?",[f,g]),m=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[u,h]),y="\\[\\s*(?:,\\s*)*\\]",k=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,y]),w=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,y]),v=n("\\(<<0>>+(?:,<<0>>+)+\\)",[w]),x=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[v,m,y]),_={keyword:c,punctuation:/[<>()?,.:[\]]/},$="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",j='"(?:\\\\.|[^\\\\"\r\n])*"';e.languages.csharp=e.languages.extend("clike",{string:[{pattern:s("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:s("(^|[^@$\\\\])<<0>>",[j]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:_},{pattern:s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[f,x]),lookbehind:!0,inside:_},{pattern:s("(\\busing\\s+)<<0>>(?=\\s*=)",[f]),lookbehind:!0},{pattern:s("(\\b<<0>>\\s+)<<1>>",[d,h]),lookbehind:!0,inside:_},{pattern:s("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:_},{pattern:s("(\\bwhere\\s+)<<0>>",[f]),lookbehind:!0},{pattern:s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[k]),lookbehind:!0,inside:_},{pattern:s("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[x,p,f]),inside:_}],keyword:c,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:s("([(,]\\s*)<<0>>(?=\\s*:)",[f]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[f]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:s("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:_},"return-type":{pattern:s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[x,m]),inside:_,alias:"class-name"},"constructor-invocation":{pattern:s("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[x]),lookbehind:!0,inside:_,alias:"class-name"},"generic-method":{pattern:s("<<0>>\\s*<<1>>(?=\\s*\\()",[f,g]),inside:{function:s("^<<0>>",[f]),generic:{pattern:RegExp(g),alias:"class-name",inside:_}}},"type-list":{pattern:s("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,h,f,x,c.source,b,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[h,b]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:c,"class-name":{pattern:RegExp(x),greedy:!0,inside:_},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var B=j+"|"+$,E=n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[B]),R=t(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[E]),2),S="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",O=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,R]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[S,O]),lookbehind:!0,greedy:!0,inside:{target:{pattern:s("^<<0>>(?=\\s*:)",[S]),alias:"keyword"},"attribute-arguments":{pattern:s("\\(<<0>>*\\)",[R]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var z=":[^}\r\n]+",A=t(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[E]),2),P=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[A,z]),D=t(n("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[B]),2),F=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[D,z]);function M(n,t){return{interpolation:{pattern:s("((?:^|[^{])(?:\\{\\{)*)<<0>>",[n]),lookbehind:!0,inside:{"format-string":{pattern:s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[t,z]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[P]),lookbehind:!0,greedy:!0,inside:M(P,A)},{pattern:s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[F]),lookbehind:!0,greedy:!0,inside:M(F,D)}],char:{pattern:RegExp($),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism)),a);e("p",n({__proto__:null,default:s(r)},[r]))}}}));
