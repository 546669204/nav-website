import{g as c}from"./index-fa1c11f5.js";function l(e,n){for(var o=0;o<n.length;o++){const r=n[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const s=Object.getOwnPropertyDescriptor(r,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i={},a;function b(){return a||(a=1,function(e){e.languages.bbj={comment:{pattern:/(^|[^\\:])rem\s+.*/i,lookbehind:!0,greedy:!0},string:{pattern:/(['"])(?:(?!\1|\\).|\\.)*\1/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:abstract|all|argc|begin|bye|callback|case|chn|class|classend|ctl|day|declare|delete|dim|dom|dread|dsz|else|end|endif|err|exitto|extends|fi|field|for|from|gosub|goto|if|implements|interface|interfaceend|iol|iolist|let|list|load|method|methodend|methodret|on|opts|pfx|print|private|process_events|protected|psz|public|read|read_resource|release|remove_callback|repeat|restore|return|rev|seterr|setesc|sqlchn|sqlunt|ssn|start|static|swend|switch|sys|then|tim|unt|until|use|void|wend|where|while)\b/i,function:/\b\w+(?=\()/,boolean:/\b(?:BBjAPI\.TRUE|BBjAPI\.FALSE)\b/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:and|not|or|xor)\b/i,punctuation:/[.,;:()]/}}(Prism)),i}var d=b();const u=c(d),f=l({__proto__:null,default:u},[d]);export{f as p};
