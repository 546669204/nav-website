import{g as R}from"./index-b88d682c.js";function T(E,o){for(var t=0;t<o.length;t++){const r=o[t];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in E)){const i=Object.getOwnPropertyDescriptor(r,e);i&&Object.defineProperty(E,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var a={},n;function S(){return n||(n=1,Prism.languages.ichigojam={comment:/(?:\B'|REM)(?:[^\n\r]*)/i,string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,function:/\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,label:/(?:\B@\S+)/,operator:/<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,punctuation:/[\[,;:()\]]/}),a}var N=S();const s=R(N),c=T({__proto__:null,default:s},[N]);export{c as p};
