import{g as c}from"./index-f29f4019.js";function p(t,m){for(var i=0;i<m.length;i++){const e=m[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(e,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n={},s;function f(){return s||(s=1,Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m}),n}var a=f();const u=c(a),d=p({__proto__:null,default:u},[a]);export{d as p};
