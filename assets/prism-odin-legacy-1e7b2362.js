System.register(["./index-legacy-0c1d1c49.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,a,i={},o=(n||(n=1,a=/\\(?:["'\\abefnrtv]|0[0-7]{2}|U[\dA-Fa-f]{6}|u[\dA-Fa-f]{4}|x[\dA-Fa-f]{2})/,Prism.languages.odin={comment:[{pattern:/\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:\*(?!\/)|[^*])*(?:\*\/|$))*(?:\*\/|$)/,greedy:!0},{pattern:/#![^\n\r]*/,greedy:!0},{pattern:/\/\/[^\n\r]*/,greedy:!0}],char:{pattern:/'(?:\\(?:.|[0Uux][0-9A-Fa-f]{1,6})|[^\n\r'\\])'/,greedy:!0,inside:{symbol:a}},string:[{pattern:/`[^`]*`/,greedy:!0},{pattern:/"(?:\\.|[^\n\r"\\])*"/,greedy:!0,inside:{symbol:a}}],directive:{pattern:/#\w+/,alias:"property"},number:/\b0(?:b[01_]+|d[\d_]+|h_*(?:(?:(?:[\dA-Fa-f]_*){8}){1,2}|(?:[\dA-Fa-f]_*){4})|o[0-7_]+|x[\dA-F_a-f]+|z[\dAB_ab]+)\b|(?:\b\d+(?:\.(?!\.)\d*)?|\B\.\d+)(?:[Ee][+-]?\d*)?[ijk]?(?!\w)/,discard:{pattern:/\b_\b/,alias:"keyword"},"procedure-definition":{pattern:/\b\w+(?=[ \t]*(?::\s*){2}proc\b)/,alias:"function"},keyword:/\b(?:asm|auto_cast|bit_set|break|case|cast|context|continue|defer|distinct|do|dynamic|else|enum|fallthrough|for|foreign|if|import|in|map|matrix|not_in|or_else|or_return|package|proc|return|struct|switch|transmute|typeid|union|using|when|where)\b/,"procedure-name":{pattern:/\b\w+(?=[ \t]*\()/,alias:"function"},boolean:/\b(?:false|nil|true)\b/,"constant-parameter-sign":{pattern:/\$/,alias:"important"},undefined:{pattern:/---/,alias:"operator"},arrow:{pattern:/->/,alias:"punctuation"},operator:/\+\+|--|\.\.[<=]?|(?:&~|[-!*+/=~]|[%&<>|]{1,2})=?|[?^]/,punctuation:/[(),.:;@\[\]{}]/}),i);e("p",t({__proto__:null,default:r(o)},[o]))}}}));
