import{g as l}from"./index-fde57fe3.js";function u(e,r){for(var a=0;a<r.length;a++){const t=r[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o={},s;function d(){return s||(s=1,function(e){var r={pattern:/((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}};e.languages.gradle=e.languages.extend("clike",{string:{pattern:/'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,greedy:!0},keyword:/\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),e.languages.insertBefore("gradle","string",{shebang:{pattern:/#!.+/,alias:"comment",greedy:!0},"interpolation-string":{pattern:/"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0,inside:{interpolation:r,string:/[\s\S]+/}}}),e.languages.insertBefore("gradle","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),e.languages.insertBefore("gradle","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),r.inside.expression.inside=e.languages.gradle}(Prism)),o}var p=d();const g=l(p),f=u({__proto__:null,default:g},[p]);export{f as p};
