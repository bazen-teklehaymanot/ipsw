"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,f=function(e,t){if(null==e)return{};var n,r,f={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(f[n]=e[n]);return f}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(f[n]=e[n])}return f}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,f=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=o(n),p=f,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(m,s(s({ref:t},i),{},{components:n})):r.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,f=t&&t.mdxType;if("string"==typeof e||f){var a=n.length,s=new Array(a);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:f,s[1]=c;for(var o=2;o<a;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(87462),f=(n(67294),n(3905));const a={hide_table_of_contents:!0,description:"How to dump the syscall table of a kernelcache"},s="Dump Syscalls",c={unversionedId:"guides/dump_syscalls",id:"guides/dump_syscalls",title:"Dump Syscalls",description:"How to dump the syscall table of a kernelcache",source:"@site/docs/guides/dump_syscalls.md",sourceDirName:"guides",slug:"/guides/dump_syscalls",permalink:"/ipsw/docs/guides/dump_syscalls",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/dump_syscalls.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0,description:"How to dump the syscall table of a kernelcache"},sidebar:"docs",previous:{title:"Gadget Search",permalink:"/ipsw/docs/guides/gadget_search"},next:{title:"Symbolicate Crashlogs",permalink:"/ipsw/docs/guides/symbolicate"}},l={},o=[],i={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,f.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,f.kt)("h1",{id:"dump-syscalls"},"Dump Syscalls"),(0,f.kt)("blockquote",null,(0,f.kt)("p",{parentName:"blockquote"},"How to dump the syscall table of a kernelcache.")),(0,f.kt)("pre",null,(0,f.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw kernel syscall 20A5312j__iPhone14,2/kernelcache.release.iPhone14,2 | head\n0:   syscall call=0xfffffff0081f28f4 munge=0x0                ret=int      narg=0 (bytes=0)  { int nosys(void); }   { indirect syscall }\n1:   exit    call=0xfffffff0081aac70 munge=0xfffffff007ecd07c ret=none     narg=1 (bytes=4)  { void exit(int rval); }\n2:   fork    call=0xfffffff0081b265c munge=0x0                ret=int      narg=0 (bytes=0)  { int fork(void); }\n3:   read    call=0xfffffff0081f3270 munge=0xfffffff007ecd09c ret=ssize_t  narg=3 (bytes=12) { user_ssize_t read(int fd, user_addr_t cbuf, user_size_t nbyte); }\n4:   write   call=0xfffffff0081f40f8 munge=0xfffffff007ecd09c ret=ssize_t  narg=3 (bytes=12) { user_ssize_t write(int fd, user_addr_t cbuf, user_size_t nbyte); }\n5:   open    call=0xfffffff007f0bf68 munge=0xfffffff007ecd09c ret=int      narg=3 (bytes=12) { int open(user_addr_t path, int flags, int mode); }\n6:   close   call=0xfffffff00818d870 munge=0xfffffff007ecd07c ret=int      narg=1 (bytes=4)  { int sys_close(int fd); }\n7:   wait4   call=0xfffffff0081ae384 munge=0xfffffff007ecd0b8 ret=int      narg=4 (bytes=16) { int wait4(int pid, user_addr_t status, int options, user_addr_t rusage); }\n8:   enosys  call=0xfffffff0081f28d4 munge=0x0                ret=int      narg=0 (bytes=0)  { int enosys(void); }   { old creat }\n9:   link    call=0xfffffff007f0d670 munge=0xfffffff007ecd088 ret=int      narg=2 (bytes=8)  { int link(user_addr_t path, user_addr_t link); }\n")))}d.isMDXComponent=!0}}]);