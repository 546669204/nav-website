import{g as s}from"./index-2ced4dec.js";function p(t,i){for(var o=0;o<i.length;o++){const e=i[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const n=Object.getOwnPropertyDescriptor(e,r);n&&Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var a={},u;function d(){return u||(u=1,Prism.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(?:FIXME|TODO|XXX)\b/}},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},boolean:/\b[TF]\b/,function:{pattern:/(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,lookbehind:!0},builtin:/(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,constant:{pattern:/(\bconst[ \t]+)\w+/i,lookbehind:!0},keyword:/\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,punctuation:/[{}[\];(),.:]/}),a}var l=d();const c=s(l),b=p({__proto__:null,default:c},[l]);export{b as p};
