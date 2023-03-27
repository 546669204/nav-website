import{R as t,r as u,b as j,y as O,z as H,A as U,t as p,h as s,m,u as P,B as W,D as K,n as Y,f as R,C as G,E as J,o as Q,F as X,I as q,G as Z,J as ee,K as te,N as ae,O as ne,w as oe,Q as re,S as x,L as se,U as ce,x as le,V as ie,W as de,X as ue,P as me}from"./index-61a9391c.js";import be from"./NotFound-24d8c5df.js";import{D as pe}from"./docsVersion-dfac6169.js";const $=Symbol("EmptyContext"),F=t.createContext($);function _e({children:e}){const[a,n]=u.useState(null),o=u.useMemo(()=>({expandedItem:a,setExpandedItem:n}),[a]);return t.createElement(F.Provider,{value:o},e)}function Ee(){const e=u.useContext(F);if(e===$)throw new j("DocSidebarItemsExpandedStateProvider");return e}function fe({threshold:e}){const[a,n]=u.useState(!1),o=u.useRef(!1),{startScroll:r,cancelScroll:c}=O();return H(({scrollY:i},d)=>{const l=d==null?void 0:d.scrollY;l&&(o.current?o.current=!1:i>=l?(c(),n(!1)):i<e?n(!1):i+window.innerHeight<document.documentElement.scrollHeight&&n(!0))}),U(i=>{i.location.hash&&(o.current=!0,n(!1))}),{shown:a,scrollToTop:()=>r(0)}}const he="_backToTopButton_i0ito_8",Se="_backToTopButtonShow_i0ito_40",D={backToTopButton:he,backToTopButtonShow:Se};function ge(){const{shown:e,scrollToTop:a}=fe({threshold:300});return t.createElement("button",{"aria-label":p({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:s("clean-btn",m.common.backToTopButton,D.backToTopButton,e&&D.backToTopButtonShow),type:"button",onClick:a})}function V(e){return t.createElement("svg",{width:"20",height:"20","aria-hidden":"true",...e},t.createElement("g",{fill:"#7a7a7a"},t.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),t.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const ve="_collapseSidebarButton_uxyds_19",Be="_collapseSidebarButtonIcon_uxyds_29",L={collapseSidebarButton:ve,collapseSidebarButtonIcon:Be};function ye({onClick:e}){return t.createElement("button",{type:"button",title:p({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":p({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:s("button button--secondary button--outline",L.collapseSidebarButton),onClick:e},t.createElement(V,{className:L.collapseSidebarButtonIcon}))}function ke({isActive:e,collapsed:a,updateCollapsed:n}){const o=J(e);u.useEffect(()=>{e&&!o&&a&&n(!1)},[e,o,a,n])}function Ce(e){const a=Q();return u.useMemo(()=>{if(e.href)return e.href;if(!(a||!e.collapsible))return X(e)},[e,a])}function Ie({categoryLabel:e,onClick:a}){return t.createElement("button",{"aria-label":p({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:a})}function xe({item:e,onItemClick:a,activePath:n,level:o,index:r,...c}){const{items:i,label:d,collapsible:l,className:y,href:b}=e,{docs:{sidebar:{autoCollapseCategories:_}}}=P(),S=Ce(e),k=W(e,n),N=K(b,n),{collapsed:E,setCollapsed:C}=Y({initialState:()=>l?k?!1:e.collapsed:!1}),{expandedItem:I,setExpandedItem:z}=Ee(),g=(f=!E)=>{z(f?null:r),C(f)};return ke({isActive:k,collapsed:E,updateCollapsed:g}),u.useEffect(()=>{l&&I!=null&&I!==r&&_&&C(!0)},[l,I,r,C,_]),t.createElement("li",{className:s(m.docs.docSidebarItemCategory,m.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":E},y)},t.createElement("div",{className:s("menu__list-item-collapsible",{"menu__list-item-collapsible--active":N})},t.createElement(R,{className:s("menu__link",{"menu__link--sublist":l,"menu__link--sublist-caret":!b&&l,"menu__link--active":k}),onClick:l?f=>{a==null||a(e),b?g(!1):(f.preventDefault(),g())}:()=>{a==null||a(e)},"aria-current":N?"page":void 0,"aria-expanded":l?!E:void 0,href:l?S!=null?S:"#":S,...c},d),b&&l&&t.createElement(Ie,{categoryLabel:d,onClick:f=>{f.preventDefault(),g()}})),t.createElement(G,{lazy:!0,as:"ul",className:"menu__list",collapsed:E},t.createElement(T,{items:i,tabIndex:E?-1:0,onItemClick:a,activePath:n,level:o+1})))}const Te="_menuExternalLink_11abp_8",Ne={menuExternalLink:Te};function De({item:e,onItemClick:a,activePath:n,level:o,index:r,...c}){const{href:i,label:d,className:l,autoAddBaseUrl:y}=e,b=W(e,n),_=Z(i);return t.createElement("li",{className:s(m.docs.docSidebarItemLink,m.docs.docSidebarItemLinkLevel(o),"menu__list-item",l),key:d},t.createElement(R,{className:s("menu__link",!_&&Ne.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:y,"aria-current":b?"page":void 0,to:i,..._&&{onClick:a?()=>a(e):void 0},...c},d,!_&&t.createElement(q,null)))}const Le="_menuHtmlItem_bdyd8_9",Ae={menuHtmlItem:Le};function we({item:e,level:a,index:n}){const{value:o,defaultStyle:r,className:c}=e;return t.createElement("li",{className:s(m.docs.docSidebarItemLink,m.docs.docSidebarItemLinkLevel(a),r&&[Ae.menuHtmlItem,"menu__list-item"],c),key:n,dangerouslySetInnerHTML:{__html:o}})}function Me({item:e,...a}){switch(e.type){case"category":return t.createElement(xe,{item:e,...a});case"html":return t.createElement(we,{item:e,...a});case"link":default:return t.createElement(De,{item:e,...a})}}function He({items:e,...a}){return t.createElement(_e,null,e.map((n,o)=>t.createElement(Me,{key:o,item:n,index:o,...a})))}const T=u.memo(He),Pe="_menu_1rcdc_9",We="_menuWithAnnouncementBar_1rcdc_20",A={menu:Pe,menuWithAnnouncementBar:We};function Re(){const{isActive:e}=ee(),[a,n]=u.useState(e);return H(({scrollY:o})=>{e&&n(o===0)},[e]),e&&a}function $e({path:e,sidebar:a,className:n}){const o=Re();return t.createElement("nav",{"aria-label":p({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:s("menu thin-scrollbar",A.menu,o&&A.menuWithAnnouncementBar,n)},t.createElement("ul",{className:s(m.docs.docSidebarMenu,"menu__list")},t.createElement(T,{items:a,activePath:e,level:1})))}const Fe="_sidebar_1nvjh_9",Ve="_sidebarWithHideableNavbar_1nvjh_17",ze="_sidebarHidden_1nvjh_21",je="_sidebarLogo_1nvjh_26",v={sidebar:Fe,sidebarWithHideableNavbar:Ve,sidebarHidden:ze,sidebarLogo:je};function Oe({path:e,sidebar:a,onCollapse:n,isHidden:o}){const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:c}}}=P();return t.createElement("div",{className:s(v.sidebar,r&&v.sidebarWithHideableNavbar,o&&v.sidebarHidden)},r&&t.createElement(te,{tabIndex:-1,className:v.sidebarLogo}),t.createElement($e,{path:e,sidebar:a}),c&&t.createElement(ye,{onClick:n}))}const Ue=t.memo(Oe),Ke=({sidebar:e,path:a})=>{const n=ne();return t.createElement("ul",{className:s(m.docs.docSidebarMenu,"menu__list")},t.createElement(T,{items:e,activePath:a,onItemClick:o=>{o.type==="category"&&o.href&&n.toggle(),o.type==="link"&&n.toggle()},level:1}))};function Ye(e){return t.createElement(ae,{component:Ke,props:e})}const Ge=t.memo(Ye);function Je(e){const a=oe(),n=a==="desktop"||a==="ssr",o=a==="mobile";return t.createElement(t.Fragment,null,n&&t.createElement(Ue,{...e}),o&&t.createElement(Ge,{...e}))}const Qe="_expandButton_150zn_9",Xe="_expandButtonIcon_150zn_27",w={expandButton:Qe,expandButtonIcon:Xe};function qe({toggleSidebar:e}){return t.createElement("div",{className:w.expandButton,title:p({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":p({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},t.createElement(V,{className:w.expandButtonIcon}))}const Ze="_docSidebarContainer_1dktp_13",et="_docSidebarContainerHidden_1dktp_28",tt="_sidebarViewport_1dktp_33",h={docSidebarContainer:Ze,docSidebarContainerHidden:et,sidebarViewport:tt};function at({children:e}){var n;const a=x();return t.createElement(t.Fragment,{key:(n=a==null?void 0:a.name)!=null?n:"noSidebar"},e)}function nt({sidebar:e,hiddenSidebarContainer:a,setHiddenSidebarContainer:n}){const{pathname:o}=re(),[r,c]=u.useState(!1),i=u.useCallback(()=>{r&&c(!1),n(d=>!d)},[n,r]);return t.createElement("aside",{className:s(m.docs.docSidebarContainer,h.docSidebarContainer,a&&h.docSidebarContainerHidden),onTransitionEnd:d=>{d.currentTarget.classList.contains(h.docSidebarContainer)&&a&&c(!0)}},t.createElement(at,null,t.createElement("div",{className:s(h.sidebarViewport,r&&h.sidebarViewportHidden)},t.createElement(Je,{sidebar:e,path:o,onCollapse:i,isHidden:r}),r&&t.createElement(qe,{toggleSidebar:i}))))}const ot="_docMainContainer_1lk75_8",rt="_docMainContainerEnhanced_1lk75_19",st="_docItemWrapperEnhanced_1lk75_23",B={docMainContainer:ot,docMainContainerEnhanced:rt,docItemWrapperEnhanced:st};function ct({hiddenSidebarContainer:e,children:a}){const n=x();return t.createElement("main",{className:s(B.docMainContainer,(e||!n)&&B.docMainContainerEnhanced)},t.createElement("div",{className:s("container padding-top--md padding-bottom--lg",B.docItemWrapper,e&&B.docItemWrapperEnhanced)},a))}const lt="_docPage_143rh_8",it="_docsWrapper_143rh_13",M={docPage:lt,docsWrapper:it};function dt({children:e}){const a=x(),[n,o]=u.useState(!1);return t.createElement(se,{wrapperClassName:M.docsWrapper},t.createElement(ge,null),t.createElement("div",{className:M.docPage},a&&t.createElement(nt,{sidebar:a.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}),t.createElement(ct,{hiddenSidebarContainer:n},e)))}function ut(e){const{versionMetadata:a}=e;return t.createElement(t.Fragment,null,t.createElement(de,{version:a.version,tag:ue(a.pluginId,a.version)}),t.createElement(me,null,a.noIndex&&t.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function _t(e){const{versionMetadata:a}=e,n=ce(e);if(!n)return t.createElement(be,null);const{docElement:o,sidebarName:r,sidebarItems:c}=n;return t.createElement(t.Fragment,null,t.createElement(ut,{...e}),t.createElement(le,{className:s(m.wrapper.docsPages,m.page.docsDocPage,e.versionMetadata.className)},t.createElement(pe,{version:a},t.createElement(ie,{name:r,items:c},t.createElement(dt,null,o)))))}export{_t as default};
