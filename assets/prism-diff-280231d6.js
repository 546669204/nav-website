import{g as d}from"./index-fa1c11f5.js";function p(t,f){for(var e=0;e<f.length;e++){const i=f[e];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(i,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},o;function u(){return o||(o=1,function(t){t.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var f={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(f).forEach(function(e){var i=f[e],r=[];/^\w+$/.test(e)||r.push(/\w+/.exec(e)[0]),e==="diff"&&r.push("bold"),t.languages.diff[e]={pattern:RegExp("^(?:["+i+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:r,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(t.languages.diff,"PREFIXES",{value:f})}(Prism)),s}var a=u();const c=d(a),g=p({__proto__:null,default:c},[a]);export{g as p};
