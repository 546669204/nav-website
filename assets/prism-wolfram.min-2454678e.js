import{g as m}from"./index-fa1c11f5.js";function u(a,o){for(var t=0;t<o.length;t++){const r=o[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in a)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(a,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i={},s;function f(){return s||(s=1,Prism.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.mathematica=Prism.languages.wolfram,Prism.languages.wl=Prism.languages.wolfram,Prism.languages.nb=Prism.languages.wolfram),i}var l=f();const g=m(l),c=u({__proto__:null,default:g},[l]);export{c as p};
