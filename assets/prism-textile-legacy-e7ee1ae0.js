System.register(["./index-legacy-c8676207.js"],(function(e,n){"use strict";var t;return{setters:[e=>{t=e.g}],execute:function(){function n(e,n){for(var t=0;t<n.length;t++){const i=n[t];if("string"!=typeof i&&!Array.isArray(i))for(const n in i)if("default"!==n&&!(n in e)){const t=Object.getOwnPropertyDescriptor(i,n);t&&Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:()=>i[n]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,r={},o=(i||(i=1,function(e){var n=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,t=/\)|\((?![^|()\n]+\))/.source;function i(e,i){return RegExp(e.replace(/<MOD>/g,(function(){return"(?:"+n+")"})).replace(/<PAR>/g,(function(){return"(?:"+t+")"})),i||"")}var r={css:{pattern:/\{[^{}]+\}/,inside:{rest:e.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},o=e.languages.textile=e.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:i(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:i(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:r},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:i(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:i(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:r},punctuation:/^[*#]+/}},table:{pattern:i(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:i(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:r},punctuation:/\||^\./}},inline:{pattern:i(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:i(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:i(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:i(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:i(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:i(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:i(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:i(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:i(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:r},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:i(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:i(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:i(/(^")<MOD>+/.source),lookbehind:!0,inside:r},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:i(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:i(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:i(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:r},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),a=o.phrase.inside,s={inline:a.inline,link:a.link,image:a.image,footnote:a.footnote,acronym:a.acronym,mark:a.mark};o.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=a.inline.inside;d.bold.inside=s,d.italic.inside=s,d.inserted.inside=s,d.deleted.inside=s,d.span.inside=s;var l=a.table.inside;l.inline=s.inline,l.link=s.link,l.image=s.image,l.footnote=s.footnote,l.acronym=s.acronym,l.mark=s.mark}(Prism)),r);e("p",n({__proto__:null,default:t(o)},[o]))}}}));
