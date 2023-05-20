import{g as H}from"./index-579abb6c.js";function I(t,n){for(var e=0;e<n.length;e++){const s=n[e];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const u=Object.getOwnPropertyDescriptor(s,o);u&&Object.defineProperty(t,o,u.get?u:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var O={},q;function J(){return q||(q=1,function(t){function n(r,p){return r.replace(/<<(\d+)>>/g,function(c,G){return"(?:"+p[+G]+")"})}function e(r,p,c){return RegExp(n(r,p),c||"")}function s(r,p){for(var c=0;c<p;c++)r=r.replace(/<<self>>/g,function(){return"(?:"+r+")"});return r.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",u="class enum interface record struct",v="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",y="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function g(r){return"\\b(?:"+r.trim().replace(/ /g,"|")+")\\b"}var _=g(u),b=RegExp(g(o+" "+u+" "+v+" "+y)),D=g(u+" "+v+" "+y),U=g(o+" "+u+" "+y),f=s("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),h=s("\\((?:[^()]|<<self>>)*\\)",2),i="@?\\b[A-Za-z_]\\w*\\b",m=n("<<0>>(?:\\s*<<1>>)?",[i,f]),l=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[D,m]),k="\\[\\s*(?:,\\s*)*\\]",Z=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[l,k]),M=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[f,h,k]),N=n("\\(<<0>>+(?:,<<0>>+)+\\)",[M]),d=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[N,l,k]),a={keyword:b,punctuation:/[<>()?,.:[\]]/},x=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,$=`"(?:\\\\.|[^\\\\"\r
])*"`;t.languages.csharp=t.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[l]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[i,d]),lookbehind:!0,inside:a},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[i]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[_,m]),lookbehind:!0,inside:a},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[l]),lookbehind:!0,inside:a},{pattern:e("(\\bwhere\\s+)<<0>>",[i]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[Z]),lookbehind:!0,inside:a},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[d,U,i]),inside:a}],keyword:b,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),t.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),t.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[i]),lookbehind:!0,alias:"punctuation"}}),t.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[i]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[h]),lookbehind:!0,alias:"class-name",inside:a},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[d,l]),inside:a,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[d]),lookbehind:!0,inside:a,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[i,f]),inside:{function:e("^<<0>>",[i]),generic:{pattern:RegExp(f),alias:"class-name",inside:a}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[_,m,i,d,b.source,h,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[m,h]),lookbehind:!0,greedy:!0,inside:t.languages.csharp},keyword:b,"class-name":{pattern:RegExp(d),greedy:!0,inside:a},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=$+"|"+x,j=n(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[E]),R=s(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[j]),2),B="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",T=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[l,R]);t.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[B,T]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[B]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[R]),inside:t.languages.csharp},"class-name":{pattern:RegExp(l),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var w=`:[^}\r
]+`,C=s(n(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[j]),2),P=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[C,w]),S=s(n(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[E]),2),z=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[S,w]);function A(r,p){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[r]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[p,w]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:t.languages.csharp}}},string:/[\s\S]+/}}t.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[P]),lookbehind:!0,greedy:!0,inside:A(P,C)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[z]),lookbehind:!0,greedy:!0,inside:A(z,S)}],char:{pattern:RegExp(x),greedy:!0}}),t.languages.dotnet=t.languages.cs=t.languages.csharp}(Prism)),O}var F=J();const K=H(F),Q=I({__proto__:null,default:K},[F]);export{Q as p};
