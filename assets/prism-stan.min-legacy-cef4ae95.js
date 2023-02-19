System.register(["./index-legacy-095e3488.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,o,a,i={},s=(n||(n=1,o=Prism,a=/\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/,o.languages.stan={comment:/\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,string:{pattern:/"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,greedy:!0},directive:{pattern:/^([ \t]*)#include\b.*/m,lookbehind:!0,alias:"property"},"function-arg":{pattern:RegExp("("+a.source+"\\s*\\(\\s*)[a-zA-Z]\\w*"),lookbehind:!0,alias:"function"},constraint:{pattern:/(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,lookbehind:!0,inside:{expression:{pattern:/(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,lookbehind:!0,inside:null},property:/\b[a-z]\w*(?=\s*=)/i,operator:/=/,punctuation:/^<|>$|,/}},keyword:[{pattern:/\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,alias:"program-block"},/\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,a],function:/\b[a-z]\w*(?=\s*\()/i,number:/(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,boolean:/\b(?:false|true)\b/,operator:/<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,punctuation:/[()\[\]{},;]/},o.languages.stan.constraint.inside.expression.inside=o.languages.stan),i);e("p",t({__proto__:null,default:r(s)},[s]))}}}));
