import{g as l}from"./index-2ced4dec.js";function p(e,a){for(var t=0;t<a.length;t++){const r=a[t];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(r,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},o;function g(){return o||(o=1,function(e){var a=/\\(?:[^a-z()[\]]|[a-z*]+)/i,t={"equation-command":{pattern:a,alias:"regex"}};e.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:t,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:t,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:a,alias:"selector"},punctuation:/[[\]{}&]/},e.languages.tex=e.languages.latex,e.languages.context=e.languages.latex}(Prism)),s}var u=g();const c=l(u),b=p({__proto__:null,default:c},[u]);export{b as p};
