import{g as u}from"./index-195b12f7.js";function d(t,o){for(var i=0;i<o.length;i++){const e=o[i];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n={},a;function m(){return a||(a=1,Prism.languages.mizar={comment:/::.+/,keyword:/@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|end|environ|equals|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:ies|y)|when|where|with|wrt)\b/,parameter:{pattern:/\$(?:10|\d)/,alias:"variable"},variable:/\b\w+(?=:)/,number:/(?:\b|-)\d+\b/,operator:/\.\.\.|->|&|\.?=/,punctuation:/\(#|#\)|[,:;\[\](){}]/}),n}var c=m();const f=u(c),l=d({__proto__:null,default:f},[c]);export{l as p};
