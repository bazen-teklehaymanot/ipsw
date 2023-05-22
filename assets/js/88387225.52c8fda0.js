"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5017],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>f});var n=s(67294);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){i(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,i=function(e,t){if(null==e)return{};var s,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(i[s]=e[s]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(i[s]=e[s])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(s),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return s?n.createElement(f,a(a({ref:t},p),{},{components:s})):n.createElement(f,a({ref:t},p))}));function f(e,t){var s=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=s.length,a=new Array(r);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var c=2;c<r;c++)a[c]=s[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},70906:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(87462),i=(s(67294),s(3905));const r={id:"disass",title:"disass",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"disass",description:"Disassemble ARM64 MachO at symbol/vaddr"},a=void 0,o={unversionedId:"cli/ipsw/macho/disass",id:"cli/ipsw/macho/disass",title:"disass",description:"Disassemble ARM64 MachO at symbol/vaddr",source:"@site/docs/cli/ipsw/macho/disass.md",sourceDirName:"cli/ipsw/macho",slug:"/cli/ipsw/macho/disass",permalink:"/ipsw/docs/cli/ipsw/macho/disass",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/macho/disass.md",tags:[],version:"current",frontMatter:{id:"disass",title:"disass",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"disass",description:"Disassemble ARM64 MachO at symbol/vaddr"},sidebar:"cli",previous:{title:"bbl",permalink:"/ipsw/docs/cli/ipsw/macho/bbl"},next:{title:"dump",permalink:"/ipsw/docs/cli/ipsw/macho/dump"}},l={},c=[{value:"ipsw macho disass",id:"ipsw-macho-disass",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...s}=e;return(0,i.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-macho-disass"},"ipsw macho disass"),(0,i.kt)("p",null,"Disassemble ARM64 MachO at symbol/vaddr"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw macho disass <MACHO> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -z, --all-fileset-entries    Parse all fileset entries\n      --arch string            Which architecture to use for fat/universal MachO\n      --cache string           Path to .a2s addr to sym cache file (speeds up analysis)\n  -c, --count uint             Number of instructions to disassemble\n  -d, --demangle               Demangle symbol names\n  -t, --fileset-entry string   Which fileset entry to analyze\n  -h, --help                   help for disass\n  -j, --json                   Output as JSON\n  -o, --off uint               File offset to start disassembling\n  -q, --quiet                  Do NOT markup analysis (Faster)\n  -x, --section string         Disassemble an entire segment/section (i.e. __TEXT_EXEC.__text)\n  -s, --symbol string          Function to disassemble\n  -a, --vaddr uint             Virtual address to start disassembling\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/macho"},"ipsw macho"),"\t - Parse MachO")))}m.isMDXComponent=!0}}]);