import{g as p}from"./index-fde57fe3.js";function c(t,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o={},l;function u(){return l||(l=1,Prism.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/}),o}var s=u();const m=p(s),f=c({__proto__:null,default:m},[s]);export{f as p};
