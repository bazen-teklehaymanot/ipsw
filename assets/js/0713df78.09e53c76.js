"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=i.createContext({}),s=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,m=d["".concat(a,".").concat(u)]||d[u]||v[u]||n;return r?i.createElement(m,p(p({ref:t},c),{},{components:r})):i.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<n;s++)p[s]=r[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(7462),o=(r(7294),r(3905));const n={id:"prov",title:"prov",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"prov",description:"Provision commands",last_update:{date:new Date("2022-12-10T20:19:31.000Z"),author:"blacktop"}},p=void 0,l={unversionedId:"cli/ipsw/idev/prov/prov",id:"cli/ipsw/idev/prov/prov",title:"prov",description:"Provision commands",source:"@site/docs/cli/ipsw/idev/prov/prov.md",sourceDirName:"cli/ipsw/idev/prov",slug:"/cli/ipsw/idev/prov/",permalink:"/ipsw/docs/cli/ipsw/idev/prov/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/prov/prov.md",tags:[],version:"current",frontMatter:{id:"prov",title:"prov",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"prov",description:"Provision commands",last_update:{date:"2022-12-10T20:19:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"wifi",permalink:"/ipsw/docs/cli/ipsw/idev/prof/wifi"},next:{title:"clear",permalink:"/ipsw/docs/cli/ipsw/idev/prov/clear"}},a={},s=[{value:"ipsw idev prov",id:"ipsw-idev-prov",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-idev-prov"},"ipsw idev prov"),(0,o.kt)("p",null,"Provision commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw idev prov [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for prov\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov/clear"},"ipsw idev prov clear"),"\t - Remove all provision profiles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov/dump"},"ipsw idev prov dump"),"\t - Dump installed provision profiles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov/install"},"ipsw idev prov install"),"\t - Install a provision profile (.mobileprovision file)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov/ls"},"ipsw idev prov ls"),"\t - List installed provision profiles"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov/rm"},"ipsw idev prov rm"),"\t - Remove a provision profile")))}d.isMDXComponent=!0}}]);