import{g as d}from"./index-f29f4019.js";function u(i,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in i)){const f=Object.getOwnPropertyDescriptor(t,r);f&&Object.defineProperty(i,r,f.get?f:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={},o;function p(){return o||(o=1,function(i){i.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach(function(e){var t=n[e],r=[];/^\w+$/.test(e)||r.push(/\w+/.exec(e)[0]),e==="diff"&&r.push("bold"),i.languages.diff[e]={pattern:RegExp("^(?:["+t+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(i.languages.diff,"PREFIXES",{value:n})}(Prism)),s}var a=p();const m=d(a),l=u({__proto__:null,default:m},[a]);export{l as p};
