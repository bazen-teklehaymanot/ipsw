"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3713],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"proxy",title:"proxy",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"proxy",description:"Create a TCP proxy (for ssh/debugging)",last_update:{date:new Date("2022-12-10T20:19:31.000Z"),author:"blacktop"}},p=void 0,a={unversionedId:"cli/ipsw/idev/proxy",id:"cli/ipsw/idev/proxy",title:"proxy",description:"Create a TCP proxy (for ssh/debugging)",source:"@site/docs/cli/ipsw/idev/proxy.md",sourceDirName:"cli/ipsw/idev",slug:"/cli/ipsw/idev/proxy",permalink:"/ipsw/docs/cli/ipsw/idev/proxy",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/proxy.md",tags:[],version:"current",frontMatter:{id:"proxy",title:"proxy",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"proxy",description:"Create a TCP proxy (for ssh/debugging)",last_update:{date:"2022-12-10T20:19:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"rm",permalink:"/ipsw/docs/cli/ipsw/idev/prov/rm"},next:{title:"ps",permalink:"/ipsw/docs/cli/ipsw/idev/ps"}},l={},c=[{value:"ipsw idev proxy",id:"ipsw-idev-proxy",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-idev-proxy"},"ipsw idev proxy"),(0,o.kt)("p",null,"Create a TCP proxy (for ssh/debugging)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw idev proxy [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help        help for proxy\n  -l, --lport int   host port\n  -r, --rport int   device port\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands")))}d.isMDXComponent=!0}}]);