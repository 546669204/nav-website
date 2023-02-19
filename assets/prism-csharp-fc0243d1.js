import{g as U}from"./index-b88d682c.js";function W(r,t){for(var e=0;e<t.length;e++){const a=t[e];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in r)){const u=Object.getOwnPropertyDescriptor(a,s);u&&Object.defineProperty(r,s,u.get?u:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var I={},O;function Z(){return O||(O=1,function(r){function t(n,l){return n.replace(/<<(\d+)>>/g,function(d,M){return"(?:"+l[+M]+")"})}function e(n,l,d){return RegExp(t(n,l),d||"")}function a(n,l){for(var d=0;d<l;d++)n=n.replace(/<<self>>/g,function(){return"(?:"+n+")"});return n.replace(/<<self>>/g,"[^\\s\\S]")}var s={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function u(n){return"\\b(?:"+n.trim().replace(/ /g,"|")+")\\b"}var v=u(s.typeDeclaration),g=RegExp(u(s.type+" "+s.typeDeclaration+" "+s.contextual+" "+s.other)),T=u(s.typeDeclaration+" "+s.contextual+" "+s.other),z=u(s.type+" "+s.typeDeclaration+" "+s.other),h=a(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=a(/\((?:[^()]|<<self>>)*\)/.source,2),i=/@?\b[A-Za-z_]\w*\b/.source,f=t(/<<0>>(?:\s*<<1>>)?/.source,[i,h]),c=t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[T,f]),y=/\[\s*(?:,\s*)*\]/.source,A=t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[c,y]),K=t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,b,y]),q=t(/\(<<0>>+(?:,<<0>>+)+\)/.source,[K]),p=t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[q,c,y]),o={keyword:g,punctuation:/[<>()?,.:[\]]/},k=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,w=/"(?:\\.|[^\\"\r\n])*"/.source,F=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;r.languages.csharp=r.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[F]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[w]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[c]),lookbehind:!0,inside:o},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[i,p]),lookbehind:!0,inside:o},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[i]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[v,f]),lookbehind:!0,inside:o},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[c]),lookbehind:!0,inside:o},{pattern:e(/(\bwhere\s+)<<0>>/.source,[i]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[A]),lookbehind:!0,inside:o},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[p,z,i]),inside:o}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),r.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),r.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[i]),lookbehind:!0,alias:"punctuation"}}),r.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[i]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:o},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[p,c]),inside:o,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[p]),lookbehind:!0,inside:o,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[i,h]),inside:{function:e(/^<<0>>/.source,[i]),generic:{pattern:RegExp(h),alias:"class-name",inside:o}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[v,f,i,p,g.source,b,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[f,b]),lookbehind:!0,greedy:!0,inside:r.languages.csharp},keyword:g,"class-name":{pattern:RegExp(p),greedy:!0,inside:o},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var x=w+"|"+k,E=t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[x]),S=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),_=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,N=t(/<<0>>(?:\s*\(<<1>>*\))?/.source,[c,S]);r.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[_,N]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[_]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[S]),inside:r.languages.csharp},"class-name":{pattern:RegExp(c),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var m=/:[^}\r\n]+/.source,C=a(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),$=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[C,m]),R=a(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[x]),2),D=t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[R,m]);function j(n,l){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[n]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[l,m]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:r.languages.csharp}}},string:/[\s\S]+/}}r.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[$]),lookbehind:!0,greedy:!0,inside:j($,C)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[D]),lookbehind:!0,greedy:!0,inside:j(D,R)}],char:{pattern:RegExp(k),greedy:!0}}),r.languages.dotnet=r.languages.cs=r.languages.csharp}(Prism)),I}var B=Z();const G=U(B),J=W({__proto__:null,default:G},[B]);export{J as p};
