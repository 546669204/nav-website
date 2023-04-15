import{g as c}from"./index-fa1c11f5.js";function k(a,e){for(var i=0;i<e.length;i++){const r=e[i];if(typeof r!="string"&&!Array.isArray(r)){for(const n in r)if(n!=="default"&&!(n in a)){const t=Object.getOwnPropertyDescriptor(r,n);t&&Object.defineProperty(a,n,t.get?t:{enumerable:!0,get:()=>r[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var d={},l;function b(){return l||(l=1,function(a){function e(p,m){return RegExp(p.replace(/<MOD>/g,function(){return`(?:\\([^|()
]+\\)|\\[[^\\]
]+\\]|\\{[^}
]+\\})`}).replace(/<PAR>/g,function(){return`(?:\\)|\\((?![^|()
]+\\)))`}),m||"")}var i={css:{pattern:/\{[^{}]+\}/,inside:{rest:a.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},r=a.languages.textile=a.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:e("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),inside:{modifier:{pattern:e("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),lookbehind:!0,inside:i},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:e("^[*#]+<MOD>*\\s+\\S.*","m"),inside:{modifier:{pattern:e("(^[*#]+)<MOD>+"),lookbehind:!0,inside:i},punctuation:/^[*#]+/}},table:{pattern:e("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|","m"),inside:{modifier:{pattern:e(`(^|\\|(?:\r?
|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)`),lookbehind:!0,inside:i},punctuation:/\||^\./}},inline:{pattern:e("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"),lookbehind:!0,inside:{bold:{pattern:e("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),lookbehind:!0},italic:{pattern:e("(^(__?)<MOD>*).+?(?=\\2)"),lookbehind:!0},cite:{pattern:e("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:e("(^@<MOD>*).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:e("(^\\+<MOD>*).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:e("(^-<MOD>*).+?(?=-)"),lookbehind:!0},span:{pattern:e("(^%<MOD>*).+?(?=%)"),lookbehind:!0},modifier:{pattern:e("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),lookbehind:!0,inside:i},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:e('(^"<MOD>*)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:e('(^")<MOD>+'),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:e("!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:e("(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:e("(^!)(?:<MOD>|<PAR>|[<>=])+"),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),n=r.phrase.inside,t={inline:n.inline,link:n.link,image:n.image,footnote:n.footnote,acronym:n.acronym,mark:n.mark};r.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var s=n.inline.inside;s.bold.inside=t,s.italic.inside=t,s.inserted.inside=t,s.deleted.inside=t,s.span.inside=t;var o=n.table.inside;o.inline=t.inline,o.link=t.link,o.image=t.image,o.footnote=t.footnote,o.acronym=t.acronym,o.mark=t.mark}(Prism)),d}var u=b();const f=c(u),O=k({__proto__:null,default:f},[u]);export{O as p};
