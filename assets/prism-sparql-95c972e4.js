import{g as s}from"./index-195b12f7.js";function O(E,R){for(var S=0;S<R.length;S++){const r=R[S];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in E)){const A=Object.getOwnPropertyDescriptor(r,e);A&&Object.defineProperty(E,e,A.get?A:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var T={},t;function i(){return t||(t=1,Prism.languages.sparql=Prism.languages.extend("turtle",{boolean:/\b(?:false|true)\b/i,variable:{pattern:/[?$]\w+/,greedy:!0}}),Prism.languages.insertBefore("sparql","punctuation",{keyword:[/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,/\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,/\b(?:BASE|GRAPH|PREFIX)\b/i]}),Prism.languages.rq=Prism.languages.sparql),T}var a=i();const N=s(a),n=O({__proto__:null,default:N},[a]);export{n as p};
