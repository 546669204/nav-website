import{g as p}from"./index-3c48d087.js";function l(r,n){for(var i=0;i<n.length;i++){const e=n[i];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const s=Object.getOwnPropertyDescriptor(e,t);s&&Object.defineProperty(r,t,s.get?s:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},c;function m(){return c||(c=1,Prism.languages.actionscript=Prism.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),Prism.languages.actionscript["class-name"].alias="function",delete Prism.languages.actionscript.parameter,delete Prism.languages.actionscript["literal-property"],Prism.languages.markup&&Prism.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:Prism.languages.markup}})),a}var o=m();const u=p(o),f=l({__proto__:null,default:u},[o]);export{f as p};
