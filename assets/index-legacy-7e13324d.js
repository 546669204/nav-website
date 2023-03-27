System.register(["./index-legacy-73c7a40a.js","./docsVersion-legacy-0af1143a.js","./esm-legacy-e1d0a659.js"],(function(e,t){"use strict";var n,a,o,l,r,c,s,i,d,m,u,p,h,g,f,b,v,E,y,_,k,N,C,L,B,T,x,w,H,A;return{setters:[e=>{n=e.u,a=e.a,o=e.R,l=e.r,r=e.b,c=e.d,s=e.e,i=e.P,d=e.f,m=e.h,u=e.t,p=e.T,h=e.i,g=e.j,f=e.k,b=e.l,v=e.m,E=e.n,y=e.C,_=e.H,k=e.p,N=e.o,C=e.M,L=e.q,B=e.s,T=e.v,x=e.w,w=e.x},e=>{H=e.u},e=>{A=e.M}],execute:function(){function t(){const{prism:e}=n(),{colorMode:t}=a(),o=e.theme,l=e.darkTheme||o;return"dark"===t?l:o}e("default",(function(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return o.createElement(M,{content:e.content},o.createElement(w,{className:t},o.createElement(Y,null),o.createElement(xt,null,o.createElement(n,null))))}));const j=o.createContext(null);function M({children:e,content:t}){const n=function(e){return l.useMemo((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return o.createElement(j.Provider,{value:n},e)}function S(){const e=l.useContext(j);if(null===e)throw new r("DocProvider");return e}var I={};!function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==o&&".."!==o&&"‥"!==o||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}({get exports(){return I},set exports(e){I=e}},I);const z=I,U=/title=(?<quote>["'])(?<title>.*?)\1/,O=/\{(?<range>[\d,-]+)\}/,P={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function R(e,t){const n=e.map((e=>{const{start:n,end:a}=P[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function V(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:o,metastring:l}=t;if(l&&O.test(l)){const e=l.match(O).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,a=z(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return R(["js","jsBlock"],t);case"jsx":case"tsx":return R(["js","jsBlock","jsx"],t);case"html":return R(["js","jsBlock","html"],t);case"python":case"py":case"bash":return R(["bash"],t);case"markdown":case"md":return R(["html","jsx","bash"],t);default:return R(Object.keys(P),t)}}(a,o),c=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),d=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),m=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let p=0;p<c.length;){const e=c[p].match(r);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:d[t]?s[d[t]].start=p:m[t]&&(s[m[t]].range+=`${s[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((([e,{range:t}])=>{z(t).forEach((t=>{u[t]??=[],u[t].push(e)}))})),{lineClassNames:u,code:n}}function D(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function W({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const a=W({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[{...e,children:a}]:a}))}function $(e){const t=e.getBoundingClientRect();return t.top===t.bottom?$(e.parentNode):t}function q(e,{anchorTopOffset:t}){const n=e.find((e=>$(e).top>=t));return n?function(e){return e.top>0&&e.bottom<window.innerHeight/2}($(n))?n:e[e.indexOf(n)-1]??null:e[e.length-1]??null}function F(){const e=l.useRef(0),{navbar:{hideOnScroll:t}}=n();return l.useEffect((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function G(e){const t=l.useRef(void 0),n=F();l.useEffect((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let a=e;a<=t;a+=1)n.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),s=q(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}const Z={attributes:!0,characterData:!0,childList:!0,subtree:!0};function J(e,t){const[n,a]=l.useState(),o=l.useCallback((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);l.useEffect((()=>{o()}),[o]),function(e,t,n=Z){const a=c(t),o=s(n);l.useEffect((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function Y(){const{metadata:e,frontMatter:t,assets:n}=S();return o.createElement(i,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}function K(e){const{permalink:t,title:n,subLabel:a,isNext:l}=e;return o.createElement(d,{className:m("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&o.createElement("div",{className:"pagination-nav__sublabel"},a),o.createElement("div",{className:"pagination-nav__label"},n))}function Q(e){const{previous:t,next:n}=e;return o.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":u({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&o.createElement(K,{...t,subLabel:o.createElement(p,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}),n&&o.createElement(K,{...n,subLabel:o.createElement(p,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0}))}function X(){const{metadata:e}=S();return o.createElement(Q,{previous:e.previous,next:e.next})}const ee={unreleased:function({siteTitle:e,versionMetadata:t}){return o.createElement(p,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:o.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return o.createElement(p,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:o.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function te(e){const t=ee[e.versionMetadata.banner];return o.createElement(t,{...e})}function ne({versionLabel:e,to:t,onClick:n}){return o.createElement(p,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:o.createElement("b",null,o.createElement(d,{to:t,onClick:n},o.createElement(p,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function ae({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=h(),{pluginId:a}=g({failfast:!0}),{savePreferredVersionName:l}=f(a),{latestDocSuggestion:r,latestVersionSuggestion:c}=b(a),s=r??(i=c).docs.find((e=>e.id===i.mainDocId));var i;return o.createElement("div",{className:m(e,v.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},o.createElement("div",null,o.createElement(te,{siteTitle:n,versionMetadata:t})),o.createElement("div",{className:"margin-top--md"},o.createElement(ne,{versionLabel:c.label,to:s.path,onClick:()=>l(c.name)})))}function oe({className:e}){const t=H();return t.banner?o.createElement(ae,{className:e,versionMetadata:t}):null}function le({className:e}){const t=H();return t.badge?o.createElement("span",{className:m(e,v.docs.docVersionBadge,"badge badge--secondary")},o.createElement(p,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}function re({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return o.createElement(p,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:o.createElement("b",null,o.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function ce({lastUpdatedBy:e}){return o.createElement(p,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:o.createElement("b",null,e)}}," by {user}")}function se({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:n}){return o.createElement("span",{className:v.common.lastUpdated},o.createElement(p,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?o.createElement(re,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:n?o.createElement(ce,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}const ie={iconEdit:"_iconEdit_11dj9_8"};function de({className:e,...t}){return o.createElement("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:m(ie.iconEdit,e),"aria-hidden":"true",...t},o.createElement("g",null,o.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function me({editUrl:e}){return o.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:v.common.editThisPage},o.createElement(de,null),o.createElement(p,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const ue={tag:"_tag_8ruw1_12",tagRegular:"_tagRegular_8ruw1_22",tagWithCount:"_tagWithCount_8ruw1_28"};function pe({permalink:e,label:t,count:n}){return o.createElement(d,{href:e,className:m(ue.tag,n?ue.tagWithCount:ue.tagRegular)},t,n&&o.createElement("span",null,n))}const he={tags:"_tags_1be68_8",tag:"_tag_1be68_8"};function ge({tags:e}){return o.createElement(o.Fragment,null,o.createElement("b",null,o.createElement(p,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),o.createElement("ul",{className:m(he.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>o.createElement("li",{key:t,className:he.tag},o.createElement(pe,{label:e,permalink:t}))))))}const fe={lastUpdated:"_lastUpdated_6z831_8"};function be(e){return o.createElement("div",{className:m(v.docs.docFooterTagsRow,"row margin-bottom--sm")},o.createElement("div",{className:"col"},o.createElement(ge,{...e})))}function ve({editUrl:e,lastUpdatedAt:t,lastUpdatedBy:n,formattedLastUpdatedAt:a}){return o.createElement("div",{className:m(v.docs.docFooterEditMetaRow,"row")},o.createElement("div",{className:"col"},e&&o.createElement(me,{editUrl:e})),o.createElement("div",{className:m("col",fe.lastUpdated)},(t||n)&&o.createElement(se,{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:n})))}function Ee(){const{metadata:e}=S(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:r}=e,c=r.length>0,s=!!(t||n||l);return c||s?o.createElement("footer",{className:m(v.docs.docFooter,"docusaurus-mt-lg")},c&&o.createElement(be,{tags:r}),s&&o.createElement(ve,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:a})):null}const ye=o.memo((function e({toc:t,className:n,linkClassName:a,isChild:l}){return t.length?o.createElement("ul",{className:l?void 0:n},t.map((t=>o.createElement("li",{key:t.id},o.createElement("a",{href:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),o.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:a}))))):null}));function _e({toc:e,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:s,...i}){const d=n(),m=c??d.tableOfContents.minHeadingLevel,u=s??d.tableOfContents.maxHeadingLevel,p=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return l.useMemo((()=>W({toc:D(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:e,minHeadingLevel:m,maxHeadingLevel:u});return G(l.useMemo((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:u}}),[a,r,m,u])),o.createElement(ye,{toc:p,className:t,linkClassName:a,...i})}const ke={tocCollapsibleButton:"_tocCollapsibleButton_1si24_8",tocCollapsibleButtonExpanded:"_tocCollapsibleButtonExpanded_1si24_27"};function Ne({collapsed:e,...t}){return o.createElement("button",{type:"button",...t,className:m("clean-btn",ke.tocCollapsibleButton,!e&&ke.tocCollapsibleButtonExpanded,t.className)},o.createElement(p,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const Ce={tocCollapsible:"_tocCollapsible_12p8v_8",tocCollapsibleContent:"_tocCollapsibleContent_12p8v_14",tocCollapsibleExpanded:"_tocCollapsibleExpanded_12p8v_29"};function Le({toc:e,className:t,minHeadingLevel:n,maxHeadingLevel:a}){const{collapsed:l,toggleCollapsed:r}=E({initialState:!0});return o.createElement("div",{className:m(Ce.tocCollapsible,!l&&Ce.tocCollapsibleExpanded,t)},o.createElement(Ne,{collapsed:l,onClick:r}),o.createElement(y,{lazy:!0,className:Ce.tocCollapsibleContent,collapsed:l},o.createElement(_e,{toc:e,minHeadingLevel:n,maxHeadingLevel:a})))}const Be={tocMobile:"_tocMobile_1wu9e_10"};function Te(){const{toc:e,frontMatter:t}=S();return o.createElement(Le,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:m(v.docs.docTocMobile,Be.tocMobile)})}const xe={tableOfContents:"_tableOfContents_111fu_8",docItemContainer:"_docItemContainer_111fu_20"},we="table-of-contents__link toc-highlight",He="table-of-contents__link--active";function Ae({className:e,...t}){return o.createElement("div",{className:m(xe.tableOfContents,"thin-scrollbar",e)},o.createElement(_e,{...t,linkClassName:we,linkActiveClassName:He}))}function je(){const{toc:e,frontMatter:t}=S();return o.createElement(Ae,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.docs.docTocDesktop})}const Me={anchorWithStickyNavbar:"_anchorWithStickyNavbar_ag8ey_13",anchorWithHideOnScrollNavbar:"_anchorWithHideOnScrollNavbar_ag8ey_17"};function Se({as:e,id:t,...a}){const{navbar:{hideOnScroll:l}}=n();if("h1"===e||!t)return o.createElement(e,{...a,id:void 0});const r=u({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof a.children?a.children:t});return o.createElement(e,{...a,className:m("anchor",l?Me.anchorWithHideOnScrollNavbar:Me.anchorWithStickyNavbar,a.className),id:t},a.children,o.createElement(d,{className:"hash-link",to:`#${t}`,"aria-label":r,title:r},"​"))}const Ie={codeBlockContainer:"_codeBlockContainer_bu5gr_8"};function ze({as:e,...n}){const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,a])=>{const o=t[e];o&&"string"==typeof a&&(n[o]=a)})),n}(t());return o.createElement(e,{...n,style:a,className:m(n.className,Ie.codeBlockContainer,v.common.codeBlock)})}const Ue={codeBlockContent:"_codeBlockContent_kh7jk_8",codeBlockTitle:"_codeBlockTitle_kh7jk_15",codeBlock:"_codeBlock_kh7jk_8",codeBlockStandalone:"_codeBlockStandalone_kh7jk_35",codeBlockLines:"_codeBlockLines_kh7jk_39",codeBlockLinesWithNumbering:"_codeBlockLinesWithNumbering_kh7jk_47",buttonGroup:"_buttonGroup_kh7jk_58"};function Oe({children:e,className:t}){return o.createElement(ze,{as:"pre",tabIndex:0,className:m(Ue.codeBlockStandalone,"thin-scrollbar",t)},o.createElement("code",{className:Ue.codeBlockLines},e))}var Pe={Prism:k,theme:{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}};function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ve(){return Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ve.apply(this,arguments)}var De=/\r\n|\r|\n/,We=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},$e=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},qe=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Ve({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=Ve({},n,{backgroundColor:null}),o};function Fe(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var Ge=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Re(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?qe(e.theme,e.language):void 0;return t.themeDict=n})),Re(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,l=Ve({},Fe(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(l.style=r.plain),void 0!==o&&(l.style=void 0!==l.style?Ve({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Re(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return l[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[r].concat(c))}})),Re(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,l=e.token,r=Ve({},Fe(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(r.style=void 0!==r.style?Ve({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),Re(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,l=this.getThemeDict(this.props),r=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],l=0,r=0,c=[],s=[c];r>-1;){for(;(l=a[r]++)<o[r];){var i=void 0,d=t[r],m=n[r][l];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=$e(d,m.type),m.alias&&(d=$e(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(De),p=u.length;c.push({types:d,content:u[0]});for(var h=1;h<p;h++)We(c),s.push(c=[]),c.push({types:d,content:u[h]})}else r++,t.push(d),n.push(i),a.push(0),o.push(i.length)}r--,t.pop(),n.pop(),a.pop(),o.pop()}return We(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);const Ze=Ge,Je={codeLine:"_codeLine_jvfrx_25",codeLineNumber:"_codeLineNumber_jvfrx_30",codeLineContent:"_codeLineContent_jvfrx_50"};function Ye({line:e,classNames:t,showLineNumbers:n,getLineProps:a,getTokenProps:l}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const r=a({line:e,className:m(t,n&&Je.codeLine)}),c=e.map(((e,t)=>o.createElement("span",{key:t,...l({token:e,key:t})})));return o.createElement("span",{...r},n?o.createElement(o.Fragment,null,o.createElement("span",{className:Je.codeLineNumber}),o.createElement("span",{className:Je.codeLineContent},c)):c,o.createElement("br",null))}const Ke={copyButtonCopied:"_copyButtonCopied_1yxvg_8",copyButtonIcons:"_copyButtonIcons_1yxvg_12",copyButtonIcon:"_copyButtonIcon_1yxvg_12",copyButtonSuccessIcon:"_copyButtonSuccessIcon_1yxvg_19"};function Qe({code:e,className:t}){const[n,a]=l.useState(!1),r=l.useRef(void 0),c=l.useCallback((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}n.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(e),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[e]);return l.useEffect((()=>()=>window.clearTimeout(r.current)),[]),o.createElement("button",{type:"button","aria-label":u(n?{id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}:{id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:u({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:m("clean-btn",t,Ke.copyButton,n&&Ke.copyButtonCopied),onClick:c},o.createElement("span",{className:Ke.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:Ke.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:Ke.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Xe={wordWrapButtonIcon:"_wordWrapButtonIcon_1n2o3_8",wordWrapButtonEnabled:"_wordWrapButtonEnabled_1n2o3_13"};function et({className:e,onClick:t,isEnabled:n}){const a=u({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:t,className:m("clean-btn",e,n&&Xe.wordWrapButtonEnabled),"aria-label":a,title:a},o.createElement("svg",{className:Xe.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function tt({children:e,className:a="",metastring:r,title:c,showLineNumbers:s,language:i}){const{prism:{defaultLanguage:d,magicComments:u}}=n(),p=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(a)??d,h=t(),g=function(){const[e,t]=l.useState(!1),[n,a]=l.useState(!1),o=l.useRef(null),r=l.useCallback((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=l.useCallback((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return J(o,c),l.useEffect((()=>{c()}),[e,c]),l.useEffect((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:r}}(),f=function(e){return e?.match(U)?.groups.title??""}(r)||c,{lineClassNames:b,code:v}=V(e,{metastring:r,language:p,magicComments:u}),E=s??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(ze,{as:"div",className:m(a,p&&!a.includes(`language-${p}`)&&`language-${p}`)},f&&o.createElement("div",{className:Ue.codeBlockTitle},f),o.createElement("div",{className:Ue.codeBlockContent},o.createElement(Ze,{...Pe,theme:h,code:v,language:p??"text"},(({className:e,tokens:t,getLineProps:n,getTokenProps:a})=>o.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:m(e,Ue.codeBlock,"thin-scrollbar")},o.createElement("code",{className:m(Ue.codeBlockLines,E&&Ue.codeBlockLinesWithNumbering)},t.map(((e,t)=>o.createElement(Ye,{key:t,line:e,getLineProps:n,getTokenProps:a,classNames:b[t],showLineNumbers:E}))))))),o.createElement("div",{className:Ue.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&o.createElement(et,{className:Ue.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),o.createElement(Qe,{className:Ue.codeButton,code:v}))))}function nt({children:e,...t}){const n=N(),a=function(e){return o.Children.toArray(e).some((e=>l.isValidElement(e)))?e:Array.isArray(e)?e.join(""):e}(e),r="string"==typeof a?tt:Oe;return o.createElement(r,{key:String(n),...t},a)}const at={details:"_details_6du6y_11",isBrowser:"_isBrowser_6du6y_48",collapsibleContent:"_collapsibleContent_6du6y_54"};function ot(e){return!!e&&("SUMMARY"===e.tagName||ot(e.parentElement))}function lt(e,t){return!!e&&(e===t||lt(e.parentElement,t))}function rt({summary:e,children:t,...n}){const a=N(),r=l.useRef(null),{collapsed:c,setCollapsed:s}=E({initialState:!n.open}),[i,d]=l.useState(n.open);return o.createElement("details",{...n,ref:r,open:i,"data-collapsed":c,className:m(at.details,a&&at.isBrowser,n.className),onMouseDown:e=>{ot(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ot(t)&&lt(t,r.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}},e??o.createElement("summary",null,"Details"),o.createElement(y,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},o.createElement("div",{className:at.collapsibleContent},t)))}const ct={details:"_details_1ce2c_8"},st="alert alert--info";function it({...e}){return o.createElement(rt,{...e,className:m(st,ct.details,e.className)})}function dt(e){return o.createElement(Se,{...e})}const mt={containsTaskList:"_containsTaskList_1oqzq_8"},ut={img:"_img_1cpz6_8"},pt={admonition:"_admonition_1dgvz_8",admonitionHeading:"_admonitionHeading_1dgvz_12",admonitionIcon:"_admonitionIcon_1dgvz_23",admonitionContent:"_admonitionContent_1dgvz_36"},ht={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(p,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(p,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(p,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(p,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(p,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},gt={secondary:"note",important:"info",success:"tip",warning:"danger"};function ft(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}const bt={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return o.createElement(e.props.originalType,a)}return e}(e):e));return o.createElement(_,{...e},t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||l.isValidElement(e)&&t.includes(e.props?.mdxType)))?o.createElement("code",{...e}):o.createElement(nt,{...e})},a:function(e){return o.createElement(d,{...e})},pre:function(e){return o.createElement(nt,{...l.isValidElement(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e}})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(it,{...e,summary:n},a)},ul:function(e){return o.createElement("ul",{...e,className:(t=e.className,m(t,t?.includes("contains-task-list")&&mt.containsTaskList))});var t},img:function(e){return o.createElement("img",{loading:"lazy",...e,className:(t=e.className,m(t,ut.img))});var t},h1:e=>o.createElement(dt,{as:"h1",...e}),h2:e=>o.createElement(dt,{as:"h2",...e}),h3:e=>o.createElement(dt,{as:"h3",...e}),h4:e=>o.createElement(dt,{as:"h4",...e}),h5:e=>o.createElement(dt,{as:"h5",...e}),h6:e=>o.createElement(dt,{as:"h6",...e}),admonition:function(e){const{children:t,type:n,title:a,icon:l}=ft(e),r=function(e){const t=gt[e]??e,n=ht[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),ht.info)}(n),c=a??r.label,{iconComponent:s}=r,i=l??o.createElement(s,null);return o.createElement("div",{className:m(v.common.admonition,v.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,pt.admonition)},o.createElement("div",{className:pt.admonitionHeading},o.createElement("span",{className:pt.admonitionIcon},i),c),o.createElement("div",{className:pt.admonitionContent},t))},mermaid:C};function vt({children:e}){return o.createElement(A,{components:bt},e)}function Et({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=S();return t.hide_title||void 0!==n?null:e.title}();return o.createElement("div",{className:m(v.docs.docMarkdown,"markdown")},t&&o.createElement("header",null,o.createElement(Se,{as:"h1"},t)),o.createElement(vt,null,e))}function yt(e){return o.createElement("svg",{viewBox:"0 0 24 24",...e},o.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const _t={breadcrumbHomeIcon:"_breadcrumbHomeIcon_p5f07_8"};function kt(){const e=L("/");return o.createElement("li",{className:"breadcrumbs__item"},o.createElement(d,{"aria-label":u({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},o.createElement(yt,{className:_t.breadcrumbHomeIcon})))}const Nt={breadcrumbsContainer:"_breadcrumbsContainer_1ykdd_8"};function Ct({children:e,href:t,isLast:n}){const a="breadcrumbs__link";return n?o.createElement("span",{className:a,itemProp:"name"},e):t?o.createElement(d,{className:a,href:t,itemProp:"item"},o.createElement("span",{itemProp:"name"},e)):o.createElement("span",{className:a},e)}function Lt({children:e,active:t,index:n,addMicrodata:a}){return o.createElement("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:m("breadcrumbs__item",{"breadcrumbs__item--active":t})},e,o.createElement("meta",{itemProp:"position",content:String(n+1)}))}function Bt(){const e=B(),t=T();return e?o.createElement("nav",{className:m(v.docs.docBreadcrumbs,Nt.breadcrumbsContainer),"aria-label":u({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},o.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&o.createElement(kt,null),e.map(((t,n)=>{const a=n===e.length-1;return o.createElement(Lt,{key:n,active:a,index:n,addMicrodata:!!t.href},o.createElement(Ct,{href:t.href,isLast:a},t.label))})))):null}const Tt={docItemContainer:"_docItemContainer_1r4pp_8",docItemCol:"_docItemCol_1r4pp_14"};function xt({children:e}){const t=function(){const{frontMatter:e,toc:t}=S(),n=x(),a=e.hide_table_of_contents,l=!a&&t.length>0;return{hidden:a,mobile:l?o.createElement(Te,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:o.createElement(je,null)}}();return o.createElement("div",{className:"row"},o.createElement("div",{className:m("col",!t.hidden&&Tt.docItemCol)},o.createElement(oe,null),o.createElement("div",{className:Tt.docItemContainer},o.createElement("article",null,o.createElement(Bt,null),o.createElement(le,null),t.mobile,o.createElement(Et,null,e),o.createElement(Ee,null)),o.createElement(X,null))),t.desktop&&o.createElement("div",{className:"col col--3"},t.desktop))}}}}));
