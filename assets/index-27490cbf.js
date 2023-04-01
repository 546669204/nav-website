import{u as S,a as ge,R as n,r as b,b as ve,d as Ee,e as ye,P as Ce,f as N,h as f,t as T,T as g,i as _e,j as ke,k as Te,l as Ne,m as C,n as ee,C as te,H as Be,p as Le,o as ne,M as we,q as Ie,s as xe,v as Se,w as Me,x as De}from"./index-2ced4dec.js";import{u as oe}from"./docsVersion-bb759eb2.js";import{M as Ae}from"./esm-4a510155.js";function ae(){const{prism:e}=S(),{colorMode:t}=ge(),o=e.theme,r=e.darkTheme||o;return t==="dark"?r:o}const re=n.createContext(null);function Re(e){return b.useMemo(()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}),[e])}function He({children:e,content:t}){const o=Re(t);return n.createElement(re.Provider,{value:o},e)}function B(){const e=b.useContext(re);if(e===null)throw new ve("DocProvider");return e}var D={},Oe={get exports(){return D},set exports(e){D=e}};(function(e,t){function o(r){let a=[],s;for(let c of r.split(",").map(d=>d.trim()))if(/^-?\d+$/.test(c))a.push(parseInt(c,10));else if(s=c.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[d,l,i,u]=s;if(l&&u){l=parseInt(l),u=parseInt(u);const h=l<u?1:-1;(i==="-"||i===".."||i==="‥")&&(u+=h);for(let p=l;p!==u;p+=h)a.push(p)}}return a}t.default=o,e.exports=o})(Oe,D);const P=D,$e=new RegExp(`title=(?<quote>["'])(?<title>.*?)\\1`),W=new RegExp("\\{(?<range>[\\d,-]+)\\}"),se={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}};function L(e,t){const o=e.map(r=>{const{start:a,end:s}=se[r];return`(?:${a}\\s*(${t.flatMap(c=>{var d,l;return[c.line,(d=c.block)==null?void 0:d.start,(l=c.block)==null?void 0:l.end].filter(Boolean)}).join("|")})\\s*${s})`}).join("|");return new RegExp(`^\\s*(?:${o})\\s*$`)}function Ve(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"],t);case"jsx":case"tsx":return L(["js","jsBlock","jsx"],t);case"html":return L(["js","jsBlock","html"],t);case"python":case"py":case"bash":return L(["bash"],t);case"markdown":case"md":return L(["html","jsx","bash"],t);default:return L(Object.keys(se),t)}}function ze(e){var t,o;return(o=(t=e==null?void 0:e.match($e))==null?void 0:t.groups.title)!=null?o:""}function je(e){return Boolean(e==null?void 0:e.includes("showLineNumbers"))}function Pe(e){const t=e.split(" ").find(o=>o.startsWith("language-"));return t==null?void 0:t.replace(/language-/,"")}function We(e,t){let o=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:s}=t;if(s&&W.test(s)){const m=s.match(W).groups.range;if(a.length===0)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const y=a[0].className,v=P(m).filter(E=>E>0).map(E=>[E-1,[y]]);return{lineClassNames:Object.fromEntries(v),code:o}}if(r===void 0)return{lineClassNames:{},code:o};const c=Ve(r,a),d=o.split(`
`),l=Object.fromEntries(a.map(m=>[m.className,{start:0,range:""}])),i=Object.fromEntries(a.filter(m=>m.line).map(({className:m,line:y})=>[y,m])),u=Object.fromEntries(a.filter(m=>m.block).map(({className:m,block:y})=>[y.start,m])),h=Object.fromEntries(a.filter(m=>m.block).map(({className:m,block:y})=>[y.end,m]));for(let m=0;m<d.length;){const v=d[m].match(c);if(!v){m+=1;continue}const E=v.slice(1).find(A=>A!==void 0);i[E]?l[i[E]].range+=`${m},`:u[E]?l[u[E]].start=m:h[E]&&(l[h[E]].range+=`${l[h[E]].start}-${m-1},`),d.splice(m,1)}o=d.join(`
`);const p={};return Object.entries(l).forEach(([m,{range:y}])=>{P(y).forEach(v=>{var E;(E=p[v])!=null||(p[v]=[]),p[v].push(m)})}),{lineClassNames:p,code:o}}function Ue(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},o={};return Object.entries(e.plain).forEach(([r,a])=>{const s=t[r];s&&typeof a=="string"&&(o[s]=a)}),o}function Fe(e){const t=e.map(a=>({...a,parentIndex:-1,children:[]})),o=Array(7).fill(-1);t.forEach((a,s)=>{const c=o.slice(2,a.level);a.parentIndex=Math.max(...c),o[a.level]=s});const r=[];return t.forEach(a=>{const{parentIndex:s,...c}=a;s>=0?t[s].children.push(c):r.push(c)}),r}function ce({toc:e,minHeadingLevel:t,maxHeadingLevel:o}){function r(a){return a.level>=t&&a.level<=o}return e.flatMap(a=>{const s=ce({toc:a.children,minHeadingLevel:t,maxHeadingLevel:o});return r(a)?[{...a,children:s}]:s})}function Xe({toc:e,minHeadingLevel:t,maxHeadingLevel:o}){return b.useMemo(()=>ce({toc:Fe(e),minHeadingLevel:t,maxHeadingLevel:o}),[e,t,o])}function V(e){const t=e.getBoundingClientRect();return t.top===t.bottom?V(e.parentNode):t}function qe(e){return e.top>0&&e.bottom<window.innerHeight/2}function Ge({minHeadingLevel:e,maxHeadingLevel:t}){const o=[];for(let r=e;r<=t;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}function Ke(e,{anchorTopOffset:t}){var r,a;const o=e.find(s=>V(s).top>=t);if(o){const s=V(o);return qe(s)?o:(r=e[e.indexOf(o)-1])!=null?r:null}return(a=e[e.length-1])!=null?a:null}function Ze(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}function Je(e){return Array.from(document.getElementsByClassName(e))}function Ye(){return document.querySelector(".navbar").clientHeight}function Qe(){const e=b.useRef(0),{navbar:{hideOnScroll:t}}=S();return b.useEffect(()=>{e.current=t?0:Ye()},[t]),e}function et(e){const t=b.useRef(void 0),o=Qe();b.useEffect(()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:c}=e;function d(i,u){u?(t.current&&t.current!==i&&t.current.classList.remove(a),i.classList.add(a),t.current=i):i.classList.remove(a)}function l(){const i=Je(r),u=Ge({minHeadingLevel:s,maxHeadingLevel:c}),h=Ke(u,{anchorTopOffset:o.current}),p=i.find(m=>h&&h.id===Ze(m));i.forEach(m=>{d(m,m===p)})}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}},[e,o])}const tt={attributes:!0,characterData:!0,childList:!0,subtree:!0};function nt(e,t,o=tt){const r=Ee(t),a=ye(o);b.useEffect(()=>{const s=new MutationObserver(r);return e&&s.observe(e,a),()=>s.disconnect()},[e,r,a])}function ot(e,t){const[o,r]=b.useState(),a=b.useCallback(()=>{var s;r((s=e.current)==null?void 0:s.closest("[role=tabpanel][hidden]"))},[e,r]);b.useEffect(()=>{a()},[a]),nt(o,s=>{s.forEach(c=>{c.type==="attributes"&&c.attributeName==="hidden"&&(t(),a())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function at(){const[e,t]=b.useState(!1),[o,r]=b.useState(!1),a=b.useRef(null),s=b.useCallback(()=>{const d=a.current.querySelector("code");e?d.removeAttribute("style"):(d.style.whiteSpace="pre-wrap",d.style.overflowWrap="anywhere"),t(l=>!l)},[a,e]),c=b.useCallback(()=>{const{scrollWidth:d,clientWidth:l}=a.current,i=d>l||a.current.querySelector("code").hasAttribute("style");r(i)},[a]);return ot(a,c),b.useEffect(()=>{c()},[e,c]),b.useEffect(()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)}),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:o,toggle:s}}function rt(){var r;const{metadata:e,frontMatter:t,assets:o}=B();return n.createElement(Ce,{title:e.title,description:e.description,keywords:t.keywords,image:(r=o.image)!=null?r:t.image})}function U(e){const{permalink:t,title:o,subLabel:r,isNext:a}=e;return n.createElement(N,{className:f("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},o))}function st(e){const{previous:t,next:o}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":T({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(U,{...t,subLabel:n.createElement(g,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}),o&&n.createElement(U,{...o,subLabel:n.createElement(g,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0}))}function ct(){const{metadata:e}=B();return n.createElement(st,{previous:e.previous,next:e.next})}function lt({siteTitle:e,versionMetadata:t}){return n.createElement(g,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function it({siteTitle:e,versionMetadata:t}){return n.createElement(g,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}const dt={unreleased:lt,unmaintained:it};function ut(e){const t=dt[e.versionMetadata.banner];return n.createElement(t,{...e})}function mt({versionLabel:e,to:t,onClick:o}){return n.createElement(g,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(N,{to:t,onClick:o},n.createElement(g,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function pt({className:e,versionMetadata:t}){const{siteConfig:{title:o}}=_e(),{pluginId:r}=ke({failfast:!0}),a=i=>i.docs.find(u=>u.id===i.mainDocId),{savePreferredVersionName:s}=Te(r),{latestDocSuggestion:c,latestVersionSuggestion:d}=Ne(r),l=c!=null?c:a(d);return n.createElement("div",{className:f(e,C.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(ut,{siteTitle:o,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(mt,{versionLabel:d.label,to:l.path,onClick:()=>s(d.name)})))}function ft({className:e}){const t=oe();return t.banner?n.createElement(pt,{className:e,versionMetadata:t}):null}function ht({className:e}){const t=oe();return t.badge?n.createElement("span",{className:f(e,C.docs.docVersionBadge,"badge badge--secondary")},n.createElement(g,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function bt({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(g,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(e*1e3).toISOString()},t))}}," on {date}")}function gt({lastUpdatedBy:e}){return n.createElement(g,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function vt({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:o}){return n.createElement("span",{className:C.common.lastUpdated},n.createElement(g,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(bt,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:o?n.createElement(gt,{lastUpdatedBy:o}):""}},"Last updated{atDate}{byUser}"),!1)}const Et="_iconEdit_11dj9_8",yt={iconEdit:Et};function Ct({className:e,...t}){return n.createElement("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:f(yt.iconEdit,e),"aria-hidden":"true",...t},n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function _t({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:C.common.editThisPage},n.createElement(Ct,null),n.createElement(g,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const kt="_tag_8ruw1_12",Tt="_tagRegular_8ruw1_22",Nt="_tagWithCount_8ruw1_28",R={tag:kt,tagRegular:Tt,tagWithCount:Nt};function Bt({permalink:e,label:t,count:o}){return n.createElement(N,{href:e,className:f(R.tag,o?R.tagWithCount:R.tagRegular)},t,o&&n.createElement("span",null,o))}const Lt="_tags_1be68_8",wt="_tag_1be68_8",F={tags:Lt,tag:wt};function It({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(g,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:f(F.tags,"padding--none","margin-left--sm")},e.map(({label:t,permalink:o})=>n.createElement("li",{key:o,className:F.tag},n.createElement(Bt,{label:t,permalink:o})))))}const xt="_lastUpdated_6z831_8",St={lastUpdated:xt};function Mt(e){return n.createElement("div",{className:f(C.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(It,{...e})))}function Dt({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:o,formattedLastUpdatedAt:r}){return n.createElement("div",{className:f(C.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},e&&n.createElement(_t,{editUrl:e})),n.createElement("div",{className:f("col",St.lastUpdated)},(t||o)&&n.createElement(vt,{lastUpdatedAt:t,formattedLastUpdatedAt:r,lastUpdatedBy:o})))}function At(){const{metadata:e}=B(),{editUrl:t,lastUpdatedAt:o,formattedLastUpdatedAt:r,lastUpdatedBy:a,tags:s}=e,c=s.length>0,d=!!(t||o||a);return c||d?n.createElement("footer",{className:f(C.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(Mt,{tags:s}),d&&n.createElement(Dt,{editUrl:t,lastUpdatedAt:o,lastUpdatedBy:a,formattedLastUpdatedAt:r})):null}function le({toc:e,className:t,linkClassName:o,isChild:r}){return e.length?n.createElement("ul",{className:r?void 0:t},e.map(a=>n.createElement("li",{key:a.id},n.createElement("a",{href:`#${a.id}`,className:o!=null?o:void 0,dangerouslySetInnerHTML:{__html:a.value}}),n.createElement(le,{isChild:!0,toc:a.children,className:t,linkClassName:o})))):null}const Rt=n.memo(le);function ie({toc:e,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r=void 0,minHeadingLevel:a,maxHeadingLevel:s,...c}){const d=S(),l=a!=null?a:d.tableOfContents.minHeadingLevel,i=s!=null?s:d.tableOfContents.maxHeadingLevel,u=Xe({toc:e,minHeadingLevel:l,maxHeadingLevel:i}),h=b.useMemo(()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:i}},[o,r,l,i]);return et(h),n.createElement(Rt,{toc:u,className:t,linkClassName:o,...c})}const Ht="_tocCollapsibleButton_1si24_8",Ot="_tocCollapsibleButtonExpanded_1si24_27",X={tocCollapsibleButton:Ht,tocCollapsibleButtonExpanded:Ot};function $t({collapsed:e,...t}){return n.createElement("button",{type:"button",...t,className:f("clean-btn",X.tocCollapsibleButton,!e&&X.tocCollapsibleButtonExpanded,t.className)},n.createElement(g,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Vt="_tocCollapsible_12p8v_8",zt="_tocCollapsibleContent_12p8v_14",jt="_tocCollapsibleExpanded_12p8v_29",H={tocCollapsible:Vt,tocCollapsibleContent:zt,tocCollapsibleExpanded:jt};function Pt({toc:e,className:t,minHeadingLevel:o,maxHeadingLevel:r}){const{collapsed:a,toggleCollapsed:s}=ee({initialState:!0});return n.createElement("div",{className:f(H.tocCollapsible,!a&&H.tocCollapsibleExpanded,t)},n.createElement($t,{collapsed:a,onClick:s}),n.createElement(te,{lazy:!0,className:H.tocCollapsibleContent,collapsed:a},n.createElement(ie,{toc:e,minHeadingLevel:o,maxHeadingLevel:r})))}const Wt="_tocMobile_1wu9e_10",Ut={tocMobile:Wt};function Ft(){const{toc:e,frontMatter:t}=B();return n.createElement(Pt,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f(C.docs.docTocMobile,Ut.tocMobile)})}const Xt="_tableOfContents_111fu_8",qt="_docItemContainer_111fu_20",Gt={tableOfContents:Xt,docItemContainer:qt},Kt="table-of-contents__link toc-highlight",Zt="table-of-contents__link--active";function Jt({className:e,...t}){return n.createElement("div",{className:f(Gt.tableOfContents,"thin-scrollbar",e)},n.createElement(ie,{...t,linkClassName:Kt,linkActiveClassName:Zt}))}function Yt(){const{toc:e,frontMatter:t}=B();return n.createElement(Jt,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:C.docs.docTocDesktop})}const Qt="_anchorWithStickyNavbar_ag8ey_13",en="_anchorWithHideOnScrollNavbar_ag8ey_17",q={anchorWithStickyNavbar:Qt,anchorWithHideOnScrollNavbar:en};function de({as:e,id:t,...o}){const{navbar:{hideOnScroll:r}}=S();if(e==="h1"||!t)return n.createElement(e,{...o,id:void 0});const a=T({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:typeof o.children=="string"?o.children:t});return n.createElement(e,{...o,className:f("anchor",r?q.anchorWithHideOnScrollNavbar:q.anchorWithStickyNavbar,o.className),id:t},o.children,n.createElement(N,{className:"hash-link",to:`#${t}`,"aria-label":a,title:a},"​"))}function tn(e){var t;if((t=e.props)!=null&&t.mdxType&&e.props.originalType){const{mdxType:o,originalType:r,...a}=e.props;return n.createElement(e.props.originalType,a)}return e}function nn(e){const t=n.Children.map(e.children,o=>n.isValidElement(o)?tn(o):o);return n.createElement(Be,{...e},t)}const on="_codeBlockContainer_bu5gr_8",an={codeBlockContainer:on};function ue({as:e,...t}){const o=ae(),r=Ue(o);return n.createElement(e,{...t,style:r,className:f(t.className,an.codeBlockContainer,C.common.codeBlock)})}const rn="_codeBlockContent_kh7jk_8",sn="_codeBlockTitle_kh7jk_15",cn="_codeBlock_kh7jk_8",ln="_codeBlockStandalone_kh7jk_35",dn="_codeBlockLines_kh7jk_39",un="_codeBlockLinesWithNumbering_kh7jk_47",mn="_buttonGroup_kh7jk_58",_={codeBlockContent:rn,codeBlockTitle:sn,codeBlock:cn,codeBlockStandalone:ln,codeBlockLines:dn,codeBlockLinesWithNumbering:un,buttonGroup:mn};function pn({children:e,className:t}){return n.createElement(ue,{as:"pre",tabIndex:0,className:f(_.codeBlockStandalone,"thin-scrollbar",t)},n.createElement("code",{className:_.codeBlockLines},e))}var fn={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};const hn=fn;var bn={Prism:Le,theme:hn};function I(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},k.apply(this,arguments)}var gn=/\r\n|\r|\n/,G=function(e){e.length===0?e.push({types:["plain"],content:`
`,empty:!0}):e.length===1&&e[0].content===""&&(e[0].content=`
`,e[0].empty=!0)},K=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},vn=function(e){for(var t=[[]],o=[e],r=[0],a=[e.length],s=0,c=0,d=[],l=[d];c>-1;){for(;(s=r[c]++)<a[c];){var i=void 0,u=t[c],h=o[c],p=h[s];if(typeof p=="string"?(u=c>0?u:["plain"],i=p):(u=K(u,p.type),p.alias&&(u=K(u,p.alias)),i=p.content),typeof i!="string"){c++,t.push(u),o.push(i),r.push(0),a.push(i.length);continue}var m=i.split(gn),y=m.length;d.push({types:u,content:m[0]});for(var v=1;v<y;v++)G(d),l.push(d=[]),d.push({types:u,content:m[v]})}c--,t.pop(),o.pop(),r.pop(),a.pop()}return G(d),l},En=function(e,t){var o=e.plain,r=Object.create(null),a=e.styles.reduce(function(s,c){var d=c.languages,l=c.style;return d&&!d.includes(t)||c.types.forEach(function(i){var u=k({},s[i],l);s[i]=u}),s},r);return a.root=o,a.plain=k({},o,{backgroundColor:null}),a};function Z(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)===-1&&(o[r]=e[r]);return o}var yn=function(e){function t(){for(var o=this,r=[],a=arguments.length;a--;)r[a]=arguments[a];e.apply(this,r),I(this,"getThemeDict",function(s){if(o.themeDict!==void 0&&s.theme===o.prevTheme&&s.language===o.prevLanguage)return o.themeDict;o.prevTheme=s.theme,o.prevLanguage=s.language;var c=s.theme?En(s.theme,s.language):void 0;return o.themeDict=c}),I(this,"getLineProps",function(s){var c=s.key,d=s.className,l=s.style,i=Z(s,["key","className","style","line"]),u=i,h=k({},u,{className:"token-line",style:void 0,key:void 0}),p=o.getThemeDict(o.props);return p!==void 0&&(h.style=p.plain),l!==void 0&&(h.style=h.style!==void 0?k({},h.style,l):l),c!==void 0&&(h.key=c),d&&(h.className+=" "+d),h}),I(this,"getStyleForToken",function(s){var c=s.types,d=s.empty,l=c.length,i=o.getThemeDict(o.props);if(i!==void 0){{if(l===1&&c[0]==="plain")return d?{display:"inline-block"}:void 0;if(l===1&&!d)return i[c[0]]}var u=d?{display:"inline-block"}:{},h=c.map(function(p){return i[p]});return Object.assign.apply(Object,[u].concat(h))}}),I(this,"getTokenProps",function(s){var c=s.key,d=s.className,l=s.style,i=s.token,u=Z(s,["key","className","style","token"]),h=u,p=k({},h,{className:"token "+i.types.join(" "),children:i.content,style:o.getStyleForToken(i),key:void 0});return l!==void 0&&(p.style=p.style!==void 0?k({},p.style,l):l),c!==void 0&&(p.key=c),d&&(p.className+=" "+d),p}),I(this,"tokenize",function(s,c,d,l){var i={code:c,grammar:d,language:l,tokens:[]};s.hooks.run("before-tokenize",i);var u=i.tokens=s.tokenize(i.code,i.grammar,i.language);return s.hooks.run("after-tokenize",i),u})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var r=this.props,a=r.Prism,s=r.language,c=r.code,d=r.children,l=this.getThemeDict(this.props),i=a.languages[s],u=i!==void 0?this.tokenize(a,c,i,s):[c],h=vn(u);return d({tokens:h,className:"prism-code language-"+s,style:l!==void 0?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(b.Component);const Cn=yn,_n="_codeLine_jvfrx_25",kn="_codeLineNumber_jvfrx_30",Tn="_codeLineContent_jvfrx_50",O={codeLine:_n,codeLineNumber:kn,codeLineContent:Tn};function Nn({line:e,classNames:t,showLineNumbers:o,getLineProps:r,getTokenProps:a}){e.length===1&&e[0].content===`
`&&(e[0].content="");const s=r({line:e,className:f(t,o&&O.codeLine)}),c=e.map((d,l)=>n.createElement("span",{key:l,...a({token:d,key:l})}));return n.createElement("span",{...s},o?n.createElement(n.Fragment,null,n.createElement("span",{className:O.codeLineNumber}),n.createElement("span",{className:O.codeLineContent},c)):c,n.createElement("br",null))}function Bn(e,{target:t=document.body}={}){const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let s=!1;a.rangeCount>0&&(s=a.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(d){}return o.remove(),s&&(a.removeAllRanges(),a.addRange(s)),r&&r.focus(),c}const Ln="_copyButtonCopied_1yxvg_8",wn="_copyButtonIcons_1yxvg_12",In="_copyButtonIcon_1yxvg_12",xn="_copyButtonSuccessIcon_1yxvg_19",x={copyButtonCopied:Ln,copyButtonIcons:wn,copyButtonIcon:In,copyButtonSuccessIcon:xn};function Sn({code:e,className:t}){const[o,r]=b.useState(!1),a=b.useRef(void 0),s=b.useCallback(()=>{Bn(e),r(!0),a.current=window.setTimeout(()=>{r(!1)},1e3)},[e]);return b.useEffect(()=>()=>window.clearTimeout(a.current),[]),n.createElement("button",{type:"button","aria-label":o?T({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):T({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:T({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:f("clean-btn",t,x.copyButton,o&&x.copyButtonCopied),onClick:s},n.createElement("span",{className:x.copyButtonIcons,"aria-hidden":"true"},n.createElement("svg",{className:x.copyButtonIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),n.createElement("svg",{className:x.copyButtonSuccessIcon,viewBox:"0 0 24 24"},n.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Mn="_wordWrapButtonIcon_1n2o3_8",Dn="_wordWrapButtonEnabled_1n2o3_13",J={wordWrapButtonIcon:Mn,wordWrapButtonEnabled:Dn};function An({className:e,onClick:t,isEnabled:o}){const r=T({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return n.createElement("button",{type:"button",onClick:t,className:f("clean-btn",e,o&&J.wordWrapButtonEnabled),"aria-label":r,title:r},n.createElement("svg",{className:J.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},n.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Rn({children:e,className:t="",metastring:o,title:r,showLineNumbers:a,language:s}){var v;const{prism:{defaultLanguage:c,magicComments:d}}=S(),l=(v=s!=null?s:Pe(t))!=null?v:c,i=ae(),u=at(),h=ze(o)||r,{lineClassNames:p,code:m}=We(e,{metastring:o,language:l,magicComments:d}),y=a!=null?a:je(o);return n.createElement(ue,{as:"div",className:f(t,l&&!t.includes(`language-${l}`)&&`language-${l}`)},h&&n.createElement("div",{className:_.codeBlockTitle},h),n.createElement("div",{className:_.codeBlockContent},n.createElement(Cn,{...bn,theme:i,code:m,language:l!=null?l:"text"},({className:E,tokens:A,getLineProps:fe,getTokenProps:he})=>n.createElement("pre",{tabIndex:0,ref:u.codeBlockRef,className:f(E,_.codeBlock,"thin-scrollbar")},n.createElement("code",{className:f(_.codeBlockLines,y&&_.codeBlockLinesWithNumbering)},A.map((be,j)=>n.createElement(Nn,{key:j,line:be,getLineProps:fe,getTokenProps:he,classNames:p[j],showLineNumbers:y}))))),n.createElement("div",{className:_.buttonGroup},(u.isEnabled||u.isCodeScrollable)&&n.createElement(An,{className:_.codeButton,onClick:()=>u.toggle(),isEnabled:u.isEnabled}),n.createElement(Sn,{className:_.codeButton,code:m}))))}function Hn(e){return n.Children.toArray(e).some(t=>b.isValidElement(t))?e:Array.isArray(e)?e.join(""):e}function me({children:e,...t}){const o=ne(),r=Hn(e),a=typeof r=="string"?Rn:pn;return n.createElement(a,{key:String(o),...t},r)}function On(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return n.Children.toArray(e.children).every(r=>{var a;return typeof r=="string"&&!r.includes(`
`)||b.isValidElement(r)&&t.includes((a=r.props)==null?void 0:a.mdxType)})?n.createElement("code",{...e}):n.createElement(me,{...e})}function $n(e){return n.createElement(N,{...e})}function Vn(e){var t;return n.createElement(me,{...b.isValidElement(e.children)&&((t=e.children.props)==null?void 0:t.originalType)==="code"?e.children.props:{...e}})}const zn="_details_6du6y_11",jn="_isBrowser_6du6y_48",Pn="_collapsibleContent_6du6y_54",$={details:zn,isBrowser:jn,collapsibleContent:Pn};function z(e){return e?e.tagName==="SUMMARY"||z(e.parentElement):!1}function pe(e,t){return e?e===t||pe(e.parentElement,t):!1}function Wn({summary:e,children:t,...o}){const r=ne(),a=b.useRef(null),{collapsed:s,setCollapsed:c}=ee({initialState:!o.open}),[d,l]=b.useState(o.open);return n.createElement("details",{...o,ref:a,open:d,"data-collapsed":s,className:f($.details,r&&$.isBrowser,o.className),onMouseDown:i=>{const u=i.target;z(u)&&i.detail>1&&i.preventDefault()},onClick:i=>{i.stopPropagation();const u=i.target;z(u)&&pe(u,a.current)&&(i.preventDefault(),s?(c(!1),l(!0)):c(!0))}},e!=null?e:n.createElement("summary",null,"Details"),n.createElement(te,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:i=>{c(i),l(!i)}},n.createElement("div",{className:$.collapsibleContent},t)))}const Un="_details_1ce2c_8",Fn={details:Un},Xn="alert alert--info";function qn({...e}){return n.createElement(Wn,{...e,className:f(Xn,Fn.details,e.className)})}function Gn(e){const t=n.Children.toArray(e.children),o=t.find(a=>{var s;return n.isValidElement(a)&&((s=a.props)==null?void 0:s.mdxType)==="summary"}),r=n.createElement(n.Fragment,null,t.filter(a=>a!==o));return n.createElement(qn,{...e,summary:o},r)}function w(e){return n.createElement(de,{...e})}const Kn="_containsTaskList_1oqzq_8",Zn={containsTaskList:Kn};function Jn(e){return f(e,(e==null?void 0:e.includes("contains-task-list"))&&Zn.containsTaskList)}function Yn(e){return n.createElement("ul",{...e,className:Jn(e.className)})}const Qn="_img_1cpz6_8",eo={img:Qn};function to(e){return f(e,eo.img)}function no(e){return n.createElement("img",{loading:"lazy",...e,className:to(e.className)})}const oo="_admonition_1dgvz_8",ao="_admonitionHeading_1dgvz_12",ro="_admonitionIcon_1dgvz_23",so="_admonitionContent_1dgvz_36",M={admonition:oo,admonitionHeading:ao,admonitionIcon:ro,admonitionContent:so};function co(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))}function lo(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))}function io(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))}function uo(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))}function mo(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))}const Y={note:{infimaClassName:"secondary",iconComponent:co,label:n.createElement(g,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:lo,label:n.createElement(g,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:io,label:n.createElement(g,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:uo,label:n.createElement(g,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:mo,label:n.createElement(g,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},po={secondary:"note",important:"info",success:"tip",warning:"danger"};function fo(e){var r;const t=(r=po[e])!=null?r:e,o=Y[t];return o||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Y.info)}function ho(e){const t=n.Children.toArray(e),o=t.find(a=>{var s;return n.isValidElement(a)&&((s=a.props)==null?void 0:s.mdxType)==="mdxAdmonitionTitle"}),r=n.createElement(n.Fragment,null,t.filter(a=>a!==o));return{mdxAdmonitionTitle:o,rest:r}}function bo(e){var r;const{mdxAdmonitionTitle:t,rest:o}=ho(e.children);return{...e,title:(r=e.title)!=null?r:t,children:o}}function go(e){const{children:t,type:o,title:r,icon:a}=bo(e),s=fo(o),c=r!=null?r:s.label,{iconComponent:d}=s,l=a!=null?a:n.createElement(d,null);return n.createElement("div",{className:f(C.common.admonition,C.common.admonitionType(e.type),"alert",`alert--${s.infimaClassName}`,M.admonition)},n.createElement("div",{className:M.admonitionHeading},n.createElement("span",{className:M.admonitionIcon},l),c),n.createElement("div",{className:M.admonitionContent},t))}const vo={head:nn,code:On,a:$n,pre:Vn,details:Gn,ul:Yn,img:no,h1:e=>n.createElement(w,{as:"h1",...e}),h2:e=>n.createElement(w,{as:"h2",...e}),h3:e=>n.createElement(w,{as:"h3",...e}),h4:e=>n.createElement(w,{as:"h4",...e}),h5:e=>n.createElement(w,{as:"h5",...e}),h6:e=>n.createElement(w,{as:"h6",...e}),admonition:go,mermaid:we},Eo=vo;function yo({children:e}){return n.createElement(Ae,{components:Eo},e)}function Co(){const{metadata:e,frontMatter:t,contentTitle:o}=B();return!t.hide_title&&typeof o>"u"?e.title:null}function _o({children:e}){const t=Co();return n.createElement("div",{className:f(C.docs.docMarkdown,"markdown")},t&&n.createElement("header",null,n.createElement(de,{as:"h1"},t)),n.createElement(yo,null,e))}function ko(e){return n.createElement("svg",{viewBox:"0 0 24 24",...e},n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const To="_breadcrumbHomeIcon_p5f07_8",No={breadcrumbHomeIcon:To};function Bo(){const e=Ie("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(N,{"aria-label":T({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ko,{className:No.breadcrumbHomeIcon})))}const Lo="_breadcrumbsContainer_1ykdd_8",wo={breadcrumbsContainer:Lo};function Io({children:e,href:t,isLast:o}){const r="breadcrumbs__link";return o?n.createElement("span",{className:r,itemProp:"name"},e):t?n.createElement(N,{className:r,href:t,itemProp:"item"},n.createElement("span",{itemProp:"name"},e)):n.createElement("span",{className:r},e)}function xo({children:e,active:t,index:o,addMicrodata:r}){return n.createElement("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:f("breadcrumbs__item",{"breadcrumbs__item--active":t})},e,n.createElement("meta",{itemProp:"position",content:String(o+1)}))}function So(){const e=xe(),t=Se();return e?n.createElement("nav",{className:f(C.docs.docBreadcrumbs,wo.breadcrumbsContainer),"aria-label":T({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Bo,null),e.map((o,r)=>{const a=r===e.length-1;return n.createElement(xo,{key:r,active:a,index:r,addMicrodata:!!o.href},n.createElement(Io,{href:o.href,isLast:a},o.label))}))):null}const Mo="_docItemContainer_1r4pp_8",Do="_docItemCol_1r4pp_14",Q={docItemContainer:Mo,docItemCol:Do};function Ao(){const{frontMatter:e,toc:t}=B(),o=Me(),r=e.hide_table_of_contents,a=!r&&t.length>0;return{hidden:r,mobile:a?n.createElement(Ft,null):void 0,desktop:a&&(o==="desktop"||o==="ssr")?n.createElement(Yt,null):void 0}}function Ro({children:e}){const t=Ao();return n.createElement("div",{className:"row"},n.createElement("div",{className:f("col",!t.hidden&&Q.docItemCol)},n.createElement(ft,null),n.createElement("div",{className:Q.docItemContainer},n.createElement("article",null,n.createElement(So,null),n.createElement(ht,null),t.mobile,n.createElement(_o,null,e),n.createElement(At,null)),n.createElement(ct,null))),t.desktop&&n.createElement("div",{className:"col col--3"},t.desktop))}function Vo(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,o=e.content;return n.createElement(He,{content:e.content},n.createElement(De,{className:t},n.createElement(rt,null),n.createElement(Ro,null,n.createElement(o,null))))}export{Vo as default};
