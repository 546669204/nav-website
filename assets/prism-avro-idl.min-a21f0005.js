import{g as l}from"./index-b88d682c.js";function u(t,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in t)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(t,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},s;function m(){return s||(s=1,Prism.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},Prism.languages.avdl=Prism.languages["avro-idl"]),a}var d=m();const p=l(d),c=u({__proto__:null,default:p},[d]);export{c as p};
