System.register(["./index-legacy-bb604a6f.js"],(function(n,e){"use strict";var o;return{setters:[n=>{o=n.g}],execute:function(){function e(n,e){for(var o=0;o<e.length;o++){const t=e[o];if("string"!=typeof t&&!Array.isArray(t))for(const e in t)if("default"!==e&&!(e in n)){const o=Object.getOwnPropertyDescriptor(t,e);o&&Object.defineProperty(n,e,o.get?o:{enumerable:!0,get:()=>t[e]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var t,r={},a=(t||(t=1,function(n){function e(n,e){return RegExp(n.replace(/<nonId>/g,"\\s\\x00-\\x1f\\x22-\\x2f\\x3a-\\x3f\\x5b-\\x5e\\x60\\x7b-\\x7e"),e)}n.languages.kumir={comment:{pattern:/\|.*/},prolog:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^\n\r"]*"|'[^\n\r']*'/,greedy:!0},boolean:{pattern:e("(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)"),lookbehind:!0},"operator-word":{pattern:e("(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)"),lookbehind:!0,alias:"keyword"},"system-variable":{pattern:e("(^|[<nonId>])знач(?=[<nonId>]|$)"),lookbehind:!0,alias:"keyword"},type:[{pattern:e("(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\\x20*таб)?(?=[<nonId>]|$)"),lookbehind:!0,alias:"builtin"},{pattern:e("(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)"),lookbehind:!0,alias:"important"}],keyword:{pattern:e("(^|[<nonId>])(?:алг|арг(?:\\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\\x20+|_)исп)?|кц(?:(?:\\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)"),lookbehind:!0},name:{pattern:e("(^|[<nonId>])[^\\d<nonId>][^<nonId>]*(?:\\x20+[^<nonId>]+)*(?=[<nonId>]|$)"),lookbehind:!0},number:{pattern:e("(^|[<nonId>])(?:\\B\\$[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?)(?=[<nonId>]|$)","i"),lookbehind:!0},punctuation:/:=|[(),:;\[\]]/,"operator-char":{pattern:/\*\*?|<[=>]?|>=?|[-+/=]/,alias:"operator"}},n.languages.kum=n.languages.kumir}(Prism)),r);n("p",e({__proto__:null,default:o(a)},[a]))}}}));
