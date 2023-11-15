"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[1643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Quick start",s={unversionedId:"quickstart",id:"version-V1/quickstart",title:"Quick start",description:"Semaphore has been tested with Node 11.14.0. It will run with Node 12 LTE but",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-V1/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/es/docs/V1/quickstart",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V1/quickstart.md",tags:[],version:"V1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-V1/mySidebar",previous:{title:"How it works",permalink:"/es/docs/V1/howitworks"},next:{title:"Usage",permalink:"/es/docs/V1/usage"}},c={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"Semaphore has been tested with Node 11.14.0. It will run with Node 12 LTE but\nwe highly recommend using Node 11.14.0 if you wish to develop on its source\ncode, as one of its dependencies, ",(0,o.kt)("inlineCode",{parentName:"p"},"script"),", cannot compile when if you use Node 12."),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},(0,o.kt)("inlineCode",{parentName:"a"},"nvm"))," to manage your Node version."),(0,o.kt)("p",null,"Clone this repository, install dependencies, and build the source code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:kobigurk/semaphore.git && \\\ncd semaphore && \\\nnpm i && \\\nnpm run bootstrap && \\\nnpm run build\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": we use ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna")," to manage the ",(0,o.kt)("inlineCode",{parentName:"p"},"circuits"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts"),"\nsubpackages. Do not run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," within any of these directories. Instead,\njust run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run bootstrap")," in the main directory."),(0,o.kt)("p",null,"Next, either download the compiled zk-SNARK circuit, proving key, and\nverification key (note that these keys are for testing purposes, and not for\nproduction, as there is no certainty that the toxic waste was securely\ndiscarded)."),(0,o.kt)("p",null,"To download the circuit, proving key, and verification key, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start from the base directory\n\n./circuits/scripts/download_snarks.sh\n")),(0,o.kt)("p",null,"To generate the above files locally instead, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start from the base directory\n\n./circuits/scripts/build_snarks.sh\n")),(0,o.kt)("p",null,"This process should take about 45 minutes."),(0,o.kt)("p",null,"Build the Solidity contracts (you need ",(0,o.kt)("inlineCode",{parentName:"p"},"solc")," v 0.5.12 installed in your\n",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Start from the base directory\n\ncd contracts && \\\nnpm run compileSol\n")),(0,o.kt)("p",null,"Run tests while still in the ",(0,o.kt)("inlineCode",{parentName:"p"},"contracts/")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The first command tests the Merkle tree contract and the second\n# tests the Semaphore contract\n\nnpm run test-semaphore && \\\nnpm run test-mt\n")))}d.isMDXComponent=!0}}]);