import{g as N}from"./index-3c48d087.js";function R(E,o){for(var t=0;t<o.length;t++){const r=o[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in E)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(E,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var n={},a;function T(){return a||(a=1,Prism.languages.ichigojam={comment:/(?:\B'|REM)(?:[^\n\r]*)/i,string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,function:/\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,label:/(?:\B@\S+)/,operator:/<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,punctuation:/[\[,;:()\]]/}),n}var m=T();const S=N(m),O=R({__proto__:null,default:S},[m]);export{O as p};
