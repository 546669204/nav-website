import{g as m}from"./index-579abb6c.js";function l(t,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},s;function u(){return s||(s=1,Prism.languages.bqn={shebang:{pattern:/^#![ \t]*\/.*/,alias:"important",greedy:!0},comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/"(?:[^"]|"")*"/,greedy:!0,alias:"string"},"character-literal":{pattern:/'(?:[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])'/,greedy:!0,alias:"char"},function:/•[\w¯.∞π]+[\w¯.∞π]*/,"dot-notation-on-brackets":{pattern:/\{(?=.*\}\.)|\}\./,alias:"namespace"},"special-name":{pattern:/(?:𝕨|𝕩|𝕗|𝕘|𝕤|𝕣|𝕎|𝕏|𝔽|𝔾|𝕊|_𝕣_|_𝕣)/,alias:"keyword"},"dot-notation-on-name":{pattern:/[A-Za-z_][\w¯∞π]*\./,alias:"namespace"},"word-number-scientific":{pattern:/\d+(?:\.\d+)?[eE]¯?\d+/,alias:"number"},"word-name":{pattern:/[A-Za-z_][\w¯∞π]*/,alias:"symbol"},"word-number":{pattern:/[¯∞π]?(?:\d*\.?\b\d+(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π))?/,alias:"number"},"null-literal":{pattern:/@/,alias:"char"},"primitive-functions":{pattern:/[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/,alias:"operator"},"primitive-1-operators":{pattern:/[`˜˘¨⁼⌜´˝˙]/,alias:"operator"},"primitive-2-operators":{pattern:/[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,alias:"operator"},punctuation:/[←⇐↩(){}⟨⟩[\]‿·⋄,.;:?]/}),o}var p=u();const d=m(p),f=l({__proto__:null,default:d},[p]);export{f as p};
