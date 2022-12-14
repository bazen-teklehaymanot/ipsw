"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return r?i.createElement(b,a(a({ref:t},p),{},{components:r})):i.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=r(7462),o=(r(7294),r(3905));const n={id:"symbolicate",title:"symbolicate",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)",last_update:{date:new Date("2022-12-10T20:19:31.000Z"),author:"blacktop"}},a=void 0,l={unversionedId:"cli/ipsw/symbolicate",id:"cli/ipsw/symbolicate",title:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)",source:"@site/docs/cli/ipsw/symbolicate.md",sourceDirName:"cli/ipsw",slug:"/cli/ipsw/symbolicate",permalink:"/ipsw/docs/cli/ipsw/symbolicate",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/symbolicate.md",tags:[],version:"current",frontMatter:{id:"symbolicate",title:"symbolicate",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)",last_update:{date:"2022-12-10T20:19:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"shsh",permalink:"/ipsw/docs/cli/ipsw/shsh"},next:{title:"update",permalink:"/ipsw/docs/cli/ipsw/update"}},s={},c=[{value:"ipsw symbolicate",id:"ipsw-symbolicate",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-symbolicate"},"ipsw symbolicate"),(0,o.kt)("p",null,"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw symbolicate <crashlog> <dyld_shared_cache> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -d, --demangle   Demangle symbol names\n  -h, --help       help for symbolicate\n  -u, --unslide    Unslide the crashlog for easier static analysis\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)")))}m.isMDXComponent=!0}}]);