import{g as i}from"./index-fa1c11f5.js";function s(r,f){for(var t=0;t<f.length;t++){const e=f[t];if(typeof e!="string"&&!Array.isArray(e)){for(const u in e)if(u!=="default"&&!(u in r)){const n=Object.getOwnPropertyDescriptor(e,u);n&&Object.defineProperty(r,u,n.get?n:{enumerable:!0,get:()=>e[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},d;function l(){return d||(d=1,Prism.languages.bsl={comment:/\/\/.*/,string:[{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},{pattern:/'(?:[^'\r\n\\]|\\.)*'/}],keyword:[{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i}],number:{pattern:/(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,lookbehind:!0},operator:[/[<>+\-*/]=?|[%=]/,{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:and|not|or)\b/i}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/,directive:[{pattern:/^([ \t]*)&.*/m,lookbehind:!0,greedy:!0,alias:"important"},{pattern:/^([ \t]*)#.*/gm,lookbehind:!0,greedy:!0,alias:"important"}]},Prism.languages.oscript=Prism.languages.bsl),a}var o=l();const p=i(o),c=s({__proto__:null,default:p},[o]);export{c as p};
