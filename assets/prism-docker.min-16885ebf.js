import{g as P}from"./index-195b12f7.js";function d(r,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(r,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},p;function S(){return p||(p=1,function(r){var i="(?:[ 	]+(?![ 	])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,function(){return`\\\\[\r
](?:\\s|\\\\[\r
]|#.*(?!.))*(?![\\s#]|\\\\[\r
])`}),n=`"(?:[^"\\\\\r
]|\\\\(?:\r
|[^]))*"|'(?:[^'\\\\\r
]|\\\\(?:\r
|[^]))*'`,t=`--[\\w-]+=(?:<STR>|(?!["'])(?:[^\\s\\\\]|\\\\.)+)`.replace(/<STR>/g,function(){return n}),e={pattern:RegExp(n),greedy:!0},o={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function u(a,g){return a=a.replace(/<OPT>/g,function(){return t}).replace(/<SP>/g,function(){return i}),RegExp(a,g)}r.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:u("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[e,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:u("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:u("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ 	\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:u("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:o,string:e,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:o},r.languages.dockerfile=r.languages.docker}(Prism)),s}var c=S();const l=P(c),O=d({__proto__:null,default:l},[c]);export{O as p};
