import{g as c}from"./index-579abb6c.js";function m(e,a){for(var r=0;r<a.length;r++){const n=a[r];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(n,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var g={},b;function h(){return b||(b=1,function(e){function a(i,u){return i.replace(/<<(\d+)>>/g,function(o,d){return"(?:"+u[+d]+")"})}function r(i,u,o){return RegExp(a(i,u),o||"")}var n=RegExp("\\b(?:"+"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within".trim().replace(/ /g,"|")+")\\b"),t=a("<<0>>(?:\\s*\\.\\s*<<0>>)*",["\\b[A-Za-z_]\\w*\\b"]),s={keyword:n,punctuation:/[<>()?,.:[\]]/},l='"(?:\\\\.|[^\\\\"])*"';e.languages.qsharp=e.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r("(^|[^$\\\\])<<0>>",[l]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r("(\\b(?:as|open)\\s+)<<0>>(?=\\s*(?:;|as\\b))",[t]),lookbehind:!0,inside:s},{pattern:r("(\\bnamespace\\s+)<<0>>(?=\\s*\\{)",[t]),lookbehind:!0,inside:s}],keyword:n,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),e.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var p=function(i,u){for(var o=0;o<2;o++)i=i.replace(/<<self>>/g,function(){return"(?:"+i+")"});return i.replace(/<<self>>/g,"[^\\s\\S]")}(a('\\{(?:[^"{}]|<<0>>|<<self>>)*\\}',[l]));e.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r('\\$"(?:\\\\.|<<0>>|[^\\\\"{])*"',[p]),greedy:!0,inside:{interpolation:{pattern:r("((?:^|[^\\\\])(?:\\\\\\\\)*)<<0>>",[p]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:e.languages.qsharp}}},string:/[\s\S]+/}}})}(Prism),Prism.languages.qs=Prism.languages.qsharp),g}var f=h();const y=c(f),_=m({__proto__:null,default:y},[f]);export{_ as p};
