import{g as l}from"./index-3c48d087.js";function p(r,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(i,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a={},s;function u(){return s||(s=1,function(r){for(var e=/\(\*(?:[^(*]|\((?!\*)|\*(?!\))|<self>)*\*\)/.source,t=0;t<2;t++)e=e.replace(/<self>/g,function(){return e});e=e.replace(/<self>/g,"[]"),r.languages.coq={comment:RegExp(e),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},attribute:[{pattern:RegExp(/#\[(?:[^\[\]("]|"(?:[^"]|"")*"(?!")|\((?!\*)|<comment>)*\]/.source.replace(/<comment>/g,function(){return e})),greedy:!0,alias:"attr-name",inside:{comment:RegExp(e),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},operator:/=/,punctuation:/^#\[|\]$|[,()]/}},{pattern:/\b(?:Cumulative|Global|Local|Monomorphic|NonCumulative|Polymorphic|Private|Program)\b/,alias:"attr-name"}],keyword:/\b(?:Abort|About|Add|Admit|Admitted|All|Arguments|As|Assumptions|Axiom|Axioms|Back|BackTo|Backtrace|BinOp|BinOpSpec|BinRel|Bind|Blacklist|Canonical|Case|Cd|Check|Class|Classes|Close|CoFixpoint|CoInductive|Coercion|Coercions|Collection|Combined|Compute|Conjecture|Conjectures|Constant|Constants|Constraint|Constructors|Context|Corollary|Create|CstOp|Custom|Cut|Debug|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Diffs|Drop|Elimination|End|Entry|Equality|Eval|Example|Existential|Existentials|Existing|Export|Extern|Extraction|Fact|Fail|Field|File|Firstorder|Fixpoint|Flags|Focus|From|Funclass|Function|Functional|GC|Generalizable|Goal|Grab|Grammar|Graph|Guarded|Haskell|Heap|Hide|Hint|HintDb|Hints|Hypotheses|Hypothesis|IF|Identity|Immediate|Implicit|Implicits|Import|Include|Induction|Inductive|Infix|Info|Initial|InjTyp|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|JSON|Language|Left|Lemma|Let|Lia|Libraries|Library|Load|LoadPath|Locate|Ltac|Ltac2|ML|Match|Method|Minimality|Module|Modules|Morphism|Next|NoInline|Notation|Number|OCaml|Obligation|Obligations|Opaque|Open|Optimize|Parameter|Parameters|Parametric|Path|Paths|Prenex|Preterm|Primitive|Print|Profile|Projections|Proof|Prop|PropBinOp|PropOp|PropUOp|Property|Proposition|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Reduction|Register|Relation|Remark|Remove|Require|Reserved|Reset|Resolve|Restart|Rewrite|Right|Ring|Rings|SProp|Saturate|Save|Scheme|Scope|Scopes|Search|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Solver|Sort|Sortclass|Sorted|Spec|Step|Strategies|Strategy|String|Structure|SubClass|Subgraph|SuchThat|Tactic|Term|TestCompile|Theorem|Time|Timeout|To|Transparent|Type|Typeclasses|Types|Typing|UnOp|UnOpSpec|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|Unshelve|Variable|Variables|Variant|Verbose|View|Visibility|Zify|_|apply|as|at|by|cofix|else|end|exists|exists2|fix|for|forall|fun|if|in|let|match|measure|move|removed|return|struct|then|using|wf|where|with)\b/,number:/\b(?:0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]+)?(?:p[+-]?\d[\d_]*)?|\d[\d_]*(?:\.[\d_]+)?(?:e[+-]?\d[\d_]*)?)\b/i,punct:{pattern:/@\{|\{\||\[=|:>/,alias:"punctuation"},operator:/\/\\|\\\/|\.{2,3}|:{1,2}=|\*\*|[-=]>|<(?:->?|[+:=>]|<:)|>(?:=|->)|\|[-|]?|[-!%&*+/<=>?@^~']/,punctuation:/\.\(|`\(|@\{|`\{|\{\||\[=|:>|[:.,;(){}\[\]]/}}(Prism)),a}var c=u();const m=l(c),f=p({__proto__:null,default:m},[c]);export{f as p};
