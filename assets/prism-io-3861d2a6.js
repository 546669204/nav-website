import{g as u}from"./index-195b12f7.js";function c(t,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(e,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s={},a;function p(){return a||(a=1,Prism.languages.io={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*|#.*)/,lookbehind:!0,greedy:!0},"triple-quoted-string":{pattern:/"""(?:\\[\s\S]|(?!""")[^\\])*"""/,greedy:!0,alias:"string"},string:{pattern:/"(?:\\.|[^\\\r\n"])*"/,greedy:!0},keyword:/\b(?:activate|activeCoroCount|asString|block|break|call|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getEnvironmentVariable|getSlot|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,builtin:/\b(?:Array|AudioDevice|AudioMixer|BigNum|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Random|Regex|SGML|SGMLElement|SGMLParser|SQLite|Sequence|Server|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink)\b/,boolean:/\b(?:false|nil|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?/i,operator:/[=!*/%+\-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|\b(?:and|not|or|return)\b|@@?|\?\??|\.\./,punctuation:/[{}[\];(),.:]/}),s}var l=p();const d=u(l),g=c({__proto__:null,default:d},[l]);export{g as p};
