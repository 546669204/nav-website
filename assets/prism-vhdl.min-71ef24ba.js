import{g as u}from"./index-b88d682c.js";function c(t,o){for(var n=0;n<o.length;n++){const e=o[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},s;function p(){return s||(s=1,Prism.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,attribute:{pattern:/\b'\w+/,alias:"attr-name"},keyword:/\b(?:access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|private|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\w+(?=\()/,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,punctuation:/[{}[\];(),.:]/}),a}var l=p();const d=u(l),b=c({__proto__:null,default:d},[l]);export{b as p};
