"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8755],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>u});var r=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function p(e,i){if(null==e)return{};var t,r,a=function(e,i){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var i=r.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},c=function(e){var i=l(e.components);return r.createElement(s.Provider,{value:i},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},v=r.forwardRef((function(e,i){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),v=a,u=d["".concat(s,".").concat(v)]||d[v]||m[v]||n;return t?r.createElement(u,o(o({ref:i},c),{},{components:t})):r.createElement(u,o({ref:i},c))}));function u(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=v;var p={};for(var s in i)hasOwnProperty.call(i,s)&&(p[s]=i[s]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<n;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},2229:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const n={id:"idev",title:"idev",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"idev",description:"USB connected device commands",last_update:{date:new Date("2022-12-10T20:19:31.000Z"),author:"blacktop"}},o=void 0,p={unversionedId:"cli/ipsw/idev/idev",id:"cli/ipsw/idev/idev",title:"idev",description:"USB connected device commands",source:"@site/docs/cli/ipsw/idev/idev.md",sourceDirName:"cli/ipsw/idev",slug:"/cli/ipsw/idev/",permalink:"/ipsw/docs/cli/ipsw/idev/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/idev.md",tags:[],version:"current",frontMatter:{id:"idev",title:"idev",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"idev",description:"USB connected device commands",last_update:{date:"2022-12-10T20:19:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"iboot",permalink:"/ipsw/docs/cli/ipsw/iboot"},next:{title:"afc",permalink:"/ipsw/docs/cli/ipsw/idev/afc/"}},s={},l=[{value:"ipsw idev",id:"ipsw-idev",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function d(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ipsw-idev"},"ipsw idev"),(0,a.kt)("p",null,"USB connected device commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ipsw idev [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help          help for idev\n  -u, --udid string   Device UniqueDeviceID to connect to\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/afc"},"ipsw idev afc"),"\t - FileSystem commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/apps"},"ipsw idev apps"),"\t - Application commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/comp"},"ipsw idev comp"),"\t - List all paired companion devices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/crash"},"ipsw idev crash"),"\t - Crashlog commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag"},"ipsw idev diag"),"\t - Diagnostics commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/fsyms"},"ipsw idev fsyms"),"\t - Dump device linker and dyld_shared_cache file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/img"},"ipsw idev img"),"\t - Image commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/list"},"ipsw idev list"),"\t - Dump info about USB connected iDevices"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/loc"},"ipsw idev loc"),"\t - Simulate location commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/noti"},"ipsw idev noti"),"\t - Observe notifications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/pcap"},"ipsw idev pcap"),"\t - Dump network traffic"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prof"},"ipsw idev prof"),"\t - Profile commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/prov"},"ipsw idev prov"),"\t - Provision commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/proxy"},"ipsw idev proxy"),"\t - Create a TCP proxy (for ssh/debugging)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/ps"},"ipsw idev ps"),"\t - Process list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/restore"},"ipsw idev restore"),"\t - Restore commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/screen"},"ipsw idev screen"),"\t - Dump screenshot as a PNG"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/springb"},"ipsw idev springb"),"\t - SpringBoard commands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/syslog"},"ipsw idev syslog"),"\t - Dump syslog lines"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/wifi"},"ipsw idev wifi"),"\t - Get/Set wifi connections state")))}d.isMDXComponent=!0}}]);