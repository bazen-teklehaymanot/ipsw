"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8950],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>f});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return i?o.createElement(f,l(l({ref:t},s),{},{components:i})):o.createElement(f,l({ref:t},s))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<r;p++)l[p]=i[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},5634:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var o=i(7462),n=(i(7294),i(3905));const r={id:"loc",title:"loc",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"loc",description:"Simulate location commands",last_update:{date:new Date("2022-12-10T20:19:31.000Z"),author:"blacktop"}},l=void 0,c={unversionedId:"cli/ipsw/idev/loc/loc",id:"cli/ipsw/idev/loc/loc",title:"loc",description:"Simulate location commands",source:"@site/docs/cli/ipsw/idev/loc/loc.md",sourceDirName:"cli/ipsw/idev/loc",slug:"/cli/ipsw/idev/loc/",permalink:"/ipsw/docs/cli/ipsw/idev/loc/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/loc/loc.md",tags:[],version:"current",frontMatter:{id:"loc",title:"loc",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"loc",description:"Simulate location commands",last_update:{date:"2022-12-10T20:19:31.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"list",permalink:"/ipsw/docs/cli/ipsw/idev/list"},next:{title:"clear",permalink:"/ipsw/docs/cli/ipsw/idev/loc/clear"}},a={},p=[{value:"ipsw idev loc",id:"ipsw-idev-loc",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-idev-loc"},"ipsw idev loc"),(0,n.kt)("p",null,"Simulate location commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw idev loc [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for loc\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/loc/clear"},"ipsw idev loc clear"),"\t - Reset simulated Location"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/loc/play"},"ipsw idev loc play"),"\t - Play a .gpx file"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/loc/set"},"ipsw idev loc set"),"\t - Simulate Location")))}d.isMDXComponent=!0}}]);