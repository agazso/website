"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[204],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,g=u["".concat(m,".").concat(d)]||u[d]||c[d]||n;return r?a.createElement(g,p(p({ref:t},s),{},{components:r})):a.createElement(g,p({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<n;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2,title:"Groups"},p="Semaphore groups",i={unversionedId:"guides/groups",id:"version-V2/guides/groups",title:"Groups",description:"\x3c!--Working outline",source:"@site/versioned_docs/version-V2/guides/groups.md",sourceDirName:"guides",slug:"/guides/groups",permalink:"/docs/V2/guides/groups",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/guides/groups.md",tags:[],version:"V2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Groups"},sidebar:"version-V2/mySidebar",previous:{title:"Identities",permalink:"/docs/V2/guides/identities"},next:{title:"Proofs",permalink:"/docs/V2/guides/proofs"}},m={},l=[{value:"Off-chain groups",id:"off-chain-groups",level:2},{value:"Create a group",id:"create-a-group",level:3},{value:"Options",id:"options",level:4},{value:"Add members",id:"add-members",level:3},{value:"Remove or update members",id:"remove-or-update-members",level:3},{value:"On-chain groups",id:"on-chain-groups",level:2}],s={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"semaphore-groups"},"Semaphore groups"),(0,o.kt)("p",null,"Use Semaphore in your application or smart contract to create off-chain and on-chain groups."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary/#semaphore-group"},"Semaphore group")," contains ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary/#identity-commitment"},"identity commitments")," of group members.\nExample uses of groups include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Poll question that attendees join to rate an event."),(0,o.kt)("li",{parentName:"ul"},"Ballot that members join to vote on a proposal."),(0,o.kt)("li",{parentName:"ul"},"Whistleblowers who are verified employees of an organization.")),(0,o.kt)("p",null,"A Semaphore group is an ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary/#incremental-merkle-tree"},"incremental Merkle tree"),", and group members (i.e., ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary/#identity-commitments"},"identity commitments"),") are tree leaves.\nSemaphore groups set the following two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tree depth"),": the maximum number of members a group can contain (",(0,o.kt)("inlineCode",{parentName:"li"},"max size = 2 ^ tree depth"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zero value"),": the value used to calculate the zero nodes of the incremental Merkle tree.")),(0,o.kt)("p",null,"Learn how to work with groups."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#off-chain-groups"},(0,o.kt)("strong",{parentName:"a"},"Off-chain groups"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#on-chain-groups"},(0,o.kt)("strong",{parentName:"a"},"On-chain groups")))),(0,o.kt)("h2",{id:"off-chain-groups"},"Off-chain groups"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-a-group"},"Create a group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#add-members"},"Add members")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#remove-or-update-members"},"Remove or update members"))),(0,o.kt)("h3",{id:"create-a-group"},"Create a group"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/group"},(0,o.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/group"))," library ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," class to create an off-chain group."),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tree depth"),": (",(0,o.kt)("em",{parentName:"li"},"default ",(0,o.kt)("inlineCode",{parentName:"em"},"20")),") the maximum number of members a group can contain (",(0,o.kt)("inlineCode",{parentName:"li"},"max size = 2 ^ tree depth"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zero value"),": (",(0,o.kt)("em",{parentName:"li"},"default ",(0,o.kt)("inlineCode",{parentName:"em"},"BigInt(0)")),") the value for a tree node that doesn't have a member assigned.")),(0,o.kt)("p",null,"To create a group with default ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"treeDepth"))," and ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"zeroValue")),", call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Group")," constructor without parameters--for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Group } from "@semaphore-protocol/group"\n\n// Default parameters: treeDepth = 20, zeroValue = BigInt(0).\nconst group = new Group()\n')),(0,o.kt)("p",null,"The following example code passes ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"treeDepth"))," to create a group for ",(0,o.kt)("inlineCode",{parentName:"p"},"2 ^ 30 = 1073741824")," members:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Group } from "@semaphore-protocol/group"\n\nconst group = new Group(30)\n')),(0,o.kt)("p",null,"The following example code creates a group with a ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"zeroValue"))," of ",(0,o.kt)("inlineCode",{parentName:"p"},"BigInt(1)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Group } from "@semaphore-protocol/group"\n\nconst group = new Group(20, BigInt(1))\n')),(0,o.kt)("h3",{id:"add-members"},"Add members"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Group addMember")," function to add a member (identity commitment) to a group--for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"group.addMember(identityCommitment)\n")),(0,o.kt)("p",null,"To add a batch of members to a group, pass an array to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Group addMembers")," function--for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"group.addMembers([identityCommitment1, identityCommitment2])\n")),(0,o.kt)("h3",{id:"remove-or-update-members"},"Remove or update members"),(0,o.kt)("p",null,"To remove members from a group, pass the member index to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Group removeMember")," function--for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"group.removeMember(0)\n")),(0,o.kt)("p",null,"To update members in a group, pass the member index and the new value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Group updateMember")," function--for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"group.updateMember(0, 2)\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Removing a member from a group sets the node value to ",(0,o.kt)("inlineCode",{parentName:"p"},"zeroValue"),".\nGiven that the node isn't removed, and the length of the ",(0,o.kt)("inlineCode",{parentName:"p"},"group.members")," array doesn't change.")),(0,o.kt)("h2",{id:"on-chain-groups"},"On-chain groups"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts/contracts/base/SemaphoreGroups.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"SemaphoreGroups"))," contract uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/privacy-scaling-explorations/zk-kit/blob/main/packages/incremental-merkle-tree.sol/contracts/IncrementalBinaryTree.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"IncrementalBinaryTree"))," library and provides methods to create and manage groups."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can import ",(0,o.kt)("inlineCode",{parentName:"p"},"SemaphoreGroups")," and other Semaphore contracts from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts"},(0,o.kt)("inlineCode",{parentName:"a"},"@semaphore-protocol/contracts"))," NPM module.")),(0,o.kt)("p",null,"Alternatively, you can use an already deployed ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semaphore-protocol/semaphore/tree/v2.6.1/packages/contracts/contracts/Semaphore.sol"},(0,o.kt)("inlineCode",{parentName:"a"},"Semaphore"))," contract and use its group external functions."))}c.isMDXComponent=!0}}]);