import{g as b}from"./index-27e991c2.js";function f(i,d){for(var s=0;s<d.length;s++){const e=d[s];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in i)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(i,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var l={},p;function h(){return p||(p=1,function(i){var d=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,s=/\)|\((?![^|()\n]+\))/.source;function e(m,k){return RegExp(m.replace(/<MOD>/g,function(){return"(?:"+d+")"}).replace(/<PAR>/g,function(){return"(?:"+s+")"}),k||"")}var t={css:{pattern:/\{[^{}]+\}/,inside:{rest:i.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},o=i.languages.textile=i.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:e(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:e(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:t},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:e(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:e(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:t},punctuation:/^[*#]+/}},table:{pattern:e(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:e(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:t},punctuation:/\||^\./}},inline:{pattern:e(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:e(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:e(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:e(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:e(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:e(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:e(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:e(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:e(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:t},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:e(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:e(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:e(/(^")<MOD>+/.source),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:e(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:e(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:e(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),r=o.phrase.inside,n={inline:r.inline,link:r.link,image:r.image,footnote:r.footnote,acronym:r.acronym,mark:r.mark};o.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var u=r.inline.inside;u.bold.inside=n,u.italic.inside=n,u.inserted.inside=n,u.deleted.inside=n,u.span.inside=n;var a=r.table.inside;a.inline=n.inline,a.link=n.link,a.image=n.image,a.footnote=n.footnote,a.acronym=n.acronym,a.mark=n.mark}(Prism)),l}var c=h();const g=b(c),M=f({__proto__:null,default:g},[c]);export{M as p};
