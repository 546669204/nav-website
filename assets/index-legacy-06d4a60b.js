System.register(["./index-legacy-58985ecb.js","./NotFound-legacy-a4b0f504.js","./docsVersion-legacy-bfd37b42.js"],(function(e,t){"use strict";var n,a,o,r,l,i,c,s,d,m,u,b,p,_,h,E,g,f,v,C,S,k,I,x,N,y,T,B,L,A,H,w,M,W,P,D;return{setters:[e=>{n=e.R,a=e.r,o=e.b,r=e.y,l=e.z,i=e.A,c=e.t,s=e.h,d=e.m,m=e.u,u=e.B,b=e.D,p=e.n,_=e.f,h=e.C,E=e.E,g=e.o,f=e.F,v=e.I,C=e.G,S=e.J,k=e.K,I=e.N,x=e.O,N=e.w,y=e.Q,T=e.S,B=e.L,L=e.U,A=e.x,H=e.V,w=e.W,M=e.X,W=e.P},e=>{P=e.default},e=>{D=e.D}],execute:function(){e("default",(function(e){const{versionMetadata:t}=e,a=L(e);if(!a)return n.createElement(P,null);const{docElement:o,sidebarName:r,sidebarItems:l}=a;return n.createElement(n.Fragment,null,n.createElement(_e,{...e}),n.createElement(A,{className:s(d.wrapper.docsPages,d.page.docsDocPage,e.versionMetadata.className)},n.createElement(D,{version:t},n.createElement(H,{name:r,items:l},n.createElement(pe,null,o)))))}));const t=Symbol("EmptyContext"),j=n.createContext(t);function R({children:e}){const[t,o]=a.useState(null),r=a.useMemo((()=>({expandedItem:t,setExpandedItem:o})),[t]);return n.createElement(j.Provider,{value:r},e)}const z={backToTopButton:"_backToTopButton_i0ito_8",backToTopButtonShow:"_backToTopButtonShow_i0ito_40"};function F(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=a.useState(!1),o=a.useRef(!1),{startScroll:c,cancelScroll:s}=r();return l((({scrollY:t},a)=>{const r=a?.scrollY;r&&(o.current?o.current=!1:t>=r?(s(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),i((e=>{e.location.hash&&(o.current=!0,n(!1))})),{shown:t,scrollToTop:()=>c(0)}}({threshold:300});return n.createElement("button",{"aria-label":c({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:s("clean-btn",d.common.backToTopButton,z.backToTopButton,e&&z.backToTopButtonShow),type:"button",onClick:t})}function V(e){return n.createElement("svg",{width:"20",height:"20","aria-hidden":"true",...e},n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const U={collapseSidebarButton:"_collapseSidebarButton_uxyds_19",collapseSidebarButtonIcon:"_collapseSidebarButtonIcon_uxyds_29"};function Y({onClick:e}){return n.createElement("button",{type:"button",title:c({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":c({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:s("button button--secondary button--outline",U.collapseSidebarButton),onClick:e},n.createElement(V,{className:U.collapseSidebarButtonIcon}))}function K({categoryLabel:e,onClick:t}){return n.createElement("button",{"aria-label":c({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function O({item:e,onItemClick:r,activePath:l,level:i,index:c,...v}){const{items:C,label:S,collapsible:k,className:I,href:x}=e,{docs:{sidebar:{autoCollapseCategories:N}}}=m(),y=function(e){const t=g();return a.useMemo((()=>e.href?e.href:!t&&e.collapsible?f(e):void 0),[e,t])}(e),T=u(e,l),B=b(x,l),{collapsed:L,setCollapsed:A}=p({initialState:()=>!!k&&!T&&e.collapsed}),{expandedItem:H,setExpandedItem:w}=function(){const e=a.useContext(j);if(e===t)throw new o("DocSidebarItemsExpandedStateProvider");return e}(),M=(e=!L)=>{w(e?null:c),A(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const o=E(e);a.useEffect((()=>{e&&!o&&t&&n(!1)}),[e,o,t,n])}({isActive:T,collapsed:L,updateCollapsed:M}),a.useEffect((()=>{k&&null!=H&&H!==c&&N&&A(!0)}),[k,H,c,A,N]),n.createElement("li",{className:s(d.docs.docSidebarItemCategory,d.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":L},I)},n.createElement("div",{className:s("menu__list-item-collapsible",{"menu__list-item-collapsible--active":B})},n.createElement(_,{className:s("menu__link",{"menu__link--sublist":k,"menu__link--sublist-caret":!x&&k,"menu__link--active":T}),onClick:k?t=>{r?.(e),x?M(!1):(t.preventDefault(),M())}:()=>{r?.(e)},"aria-current":B?"page":void 0,"aria-expanded":k?!L:void 0,href:k?y??"#":y,...v},S),x&&k&&n.createElement(K,{categoryLabel:S,onClick:e=>{e.preventDefault(),M()}})),n.createElement(h,{lazy:!0,as:"ul",className:"menu__list",collapsed:L},n.createElement(Z,{items:C,tabIndex:L?-1:0,onItemClick:r,activePath:l,level:i+1})))}const G={menuExternalLink:"_menuExternalLink_11abp_8"};function J({item:e,onItemClick:t,activePath:a,level:o,index:r,...l}){const{href:i,label:c,className:m,autoAddBaseUrl:b}=e,p=u(e,a),h=C(i);return n.createElement("li",{className:s(d.docs.docSidebarItemLink,d.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:c},n.createElement(_,{className:s("menu__link",!h&&G.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:i,...h&&{onClick:t?()=>t(e):void 0},...l},c,!h&&n.createElement(v,null)))}const Q={menuHtmlItem:"_menuHtmlItem_bdyd8_9"};function X({item:e,level:t,index:a}){const{value:o,defaultStyle:r,className:l}=e;return n.createElement("li",{className:s(d.docs.docSidebarItemLink,d.docs.docSidebarItemLinkLevel(t),r&&[Q.menuHtmlItem,"menu__list-item"],l),key:a,dangerouslySetInnerHTML:{__html:o}})}function q({item:e,...t}){switch(e.type){case"category":return n.createElement(O,{item:e,...t});case"html":return n.createElement(X,{item:e,...t});default:return n.createElement(J,{item:e,...t})}}const Z=a.memo((function({items:e,...t}){return n.createElement(R,null,e.map(((e,a)=>n.createElement(q,{key:a,item:e,index:a,...t}))))})),$={menu:"_menu_1rcdc_9",menuWithAnnouncementBar:"_menuWithAnnouncementBar_1rcdc_20"};function ee({path:e,sidebar:t,className:o}){const r=function(){const{isActive:e}=S(),[t,n]=a.useState(e);return l((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":c({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:s("menu thin-scrollbar",$.menu,r&&$.menuWithAnnouncementBar,o)},n.createElement("ul",{className:s(d.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:t,activePath:e,level:1})))}const te={sidebar:"_sidebar_1nvjh_9",sidebarWithHideableNavbar:"_sidebarWithHideableNavbar_1nvjh_17",sidebarHidden:"_sidebarHidden_1nvjh_21",sidebarLogo:"_sidebarLogo_1nvjh_26"},ne=n.memo((function({path:e,sidebar:t,onCollapse:a,isHidden:o}){const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:l}}}=m();return n.createElement("div",{className:s(te.sidebar,r&&te.sidebarWithHideableNavbar,o&&te.sidebarHidden)},r&&n.createElement(k,{tabIndex:-1,className:te.sidebarLogo}),n.createElement(ee,{path:e,sidebar:t}),l&&n.createElement(Y,{onClick:a}))})),ae=({sidebar:e,path:t})=>{const a=x();return n.createElement("ul",{className:s(d.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))},oe=n.memo((function(e){return n.createElement(I,{component:ae,props:e})}));function re(e){const t=N(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ne,{...e}),o&&n.createElement(oe,{...e}))}const le={expandButton:"_expandButton_150zn_9",expandButtonIcon:"_expandButtonIcon_150zn_27"};function ie({toggleSidebar:e}){return n.createElement("div",{className:le.expandButton,title:c({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":c({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},n.createElement(V,{className:le.expandButtonIcon}))}const ce={docSidebarContainer:"_docSidebarContainer_1dktp_13",docSidebarContainerHidden:"_docSidebarContainerHidden_1dktp_28",sidebarViewport:"_sidebarViewport_1dktp_33"};function se({children:e}){const t=T();return n.createElement(n.Fragment,{key:t?.name??"noSidebar"},e)}function de({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:o}){const{pathname:r}=y(),[l,i]=a.useState(!1),c=a.useCallback((()=>{l&&i(!1),o((e=>!e))}),[o,l]);return n.createElement("aside",{className:s(d.docs.docSidebarContainer,ce.docSidebarContainer,t&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&t&&i(!0)}},n.createElement(se,null,n.createElement("div",{className:s(ce.sidebarViewport,l&&ce.sidebarViewportHidden)},n.createElement(re,{sidebar:e,path:r,onCollapse:c,isHidden:l}),l&&n.createElement(ie,{toggleSidebar:c}))))}const me={docMainContainer:"_docMainContainer_1lk75_8",docMainContainerEnhanced:"_docMainContainerEnhanced_1lk75_19",docItemWrapperEnhanced:"_docItemWrapperEnhanced_1lk75_23"};function ue({hiddenSidebarContainer:e,children:t}){const a=T();return n.createElement("main",{className:s(me.docMainContainer,(e||!a)&&me.docMainContainerEnhanced)},n.createElement("div",{className:s("container padding-top--md padding-bottom--lg",me.docItemWrapper,e&&me.docItemWrapperEnhanced)},t))}const be={docPage:"_docPage_143rh_8",docsWrapper:"_docsWrapper_143rh_13"};function pe({children:e}){const t=T(),[o,r]=a.useState(!1);return n.createElement(B,{wrapperClassName:be.docsWrapper},n.createElement(F,null),n.createElement("div",{className:be.docPage},t&&n.createElement(de,{sidebar:t.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),n.createElement(ue,{hiddenSidebarContainer:o},e)))}function _e(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(w,{version:t.version,tag:M(t.pluginId,t.version)}),n.createElement(W,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}}}}));
