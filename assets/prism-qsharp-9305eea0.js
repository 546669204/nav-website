import{g as v}from"./index-fa1c11f5.js";function w(r,i){for(var n=0;n<i.length;n++){const a=i[n];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(a,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var f={},b;function k(){return b||(b=1,function(r){function i(e,s){return e.replace(/<<(\d+)>>/g,function(u,y){return"(?:"+s[+y]+")"})}function n(e,s,u){return RegExp(i(e,s),u||"")}function a(e,s){for(var u=0;u<s;u++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var t={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function o(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var l=RegExp(o(t.type+" "+t.other)),m=/\b[A-Za-z_]\w*\b/.source,p=i(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[m]),g={keyword:l,punctuation:/[<>()?,.:[\]]/},c=/"(?:\\.|[^\\"])*"/.source;r.languages.qsharp=r.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[c]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[p]),lookbehind:!0,inside:g},{pattern:n(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[p]),lookbehind:!0,inside:g}],keyword:l,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),r.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var d=a(i(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[c]),2);r.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:n(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[d]),greedy:!0,inside:{interpolation:{pattern:n(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[d]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:r.languages.qsharp}}},string:/[\s\S]+/}}})}(Prism),Prism.languages.qs=Prism.languages.qsharp),f}var h=k();const q=v(h),P=w({__proto__:null,default:q},[h]);export{P as p};
