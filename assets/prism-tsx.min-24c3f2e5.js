import{g as p}from"./index-27e991c2.js";function u(e,a){for(var r=0;r<a.length;r++){const t=a[r];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in e)){const n=Object.getOwnPropertyDescriptor(t,s);n&&Object.defineProperty(e,s,n.get?n:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},o;function l(){return o||(o=1,function(e){var a=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",a),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var r=e.languages.tsx.tag;r.pattern=RegExp("(^|[^\\w$]|(?=</))(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}(Prism)),i}var g=l();const m=p(g),c=u({__proto__:null,default:m},[g]);export{c as p};
