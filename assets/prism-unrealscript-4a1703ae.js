import{g as l}from"./index-2ced4dec.js";function p(r,n){for(var a=0;a<n.length;a++){const e=n[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={},s;function u(){return s||(s=1,Prism.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},Prism.languages.uc=Prism.languages.uscript=Prism.languages.unrealscript),i}var c=u();const d=l(c),b=p({__proto__:null,default:d},[c]);export{b as p};
