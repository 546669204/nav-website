import{g as l}from"./index-fa1c11f5.js";function u(t,i){for(var a=0;a<i.length;a++){const e=i[a];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},o;function g(){return o||(o=1,Prism.languages.haxe=Prism.languages.extend("clike",{string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},"class-name":[{pattern:/(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,function:{pattern:/\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,greedy:!0},operator:/\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/}),Prism.languages.insertBefore("haxe","string",{"string-interpolation":{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^{}]+\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:Prism.languages.haxe}}},string:/[\s\S]+/}}}),Prism.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,greedy:!0,inside:{"regex-flags":/\b[a-z]+$/,"regex-source":{pattern:/^(~\/)[\s\S]+(?=\/$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^~\/|\/$/}}}),Prism.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#(?:else|elseif|end|if)\b.*/,alias:"property"},metadata:{pattern:/@:?[\w.]+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"important"}})),s}var p=g();const m=l(p),d=u({__proto__:null,default:m},[p]);export{d as p};
