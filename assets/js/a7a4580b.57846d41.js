"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[1350],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(o),h=a,d=c["".concat(p,".").concat(h)]||c[h]||u[h]||n;return o?r.createElement(d,l(l({ref:t},m),{},{components:o})):r.createElement(d,l({ref:t},m))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2306:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:1},l="Private voting use case",i={unversionedId:"use-cases/private-voting",id:"version-V2/use-cases/private-voting",title:"Private voting use case",description:"The private voting use case describes how Semaphore interacts with your users and Ethereum to allow users to cast private votes in your application.",source:"@site/versioned_docs/version-V2/use-cases/private-voting.md",sourceDirName:"use-cases",slug:"/use-cases/private-voting",permalink:"/docs/V2/use-cases/private-voting",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V2/use-cases/private-voting.md",tags:[],version:"V2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-V2/mySidebar",previous:{title:"Quick setup",permalink:"/docs/V2/quick-setup"},next:{title:"Circuits",permalink:"/docs/V2/technical-reference/circuits"}},p={},s=[{value:"Roles",id:"roles",level:2},{value:"Developer or community admin",id:"developer-or-community-admin",level:3},{value:"Community member",id:"community-member",level:3},{value:"Relay",id:"relay",level:3},{value:"Private voting",id:"private-voting",level:2},{value:"Create a poll",id:"create-a-poll",level:3},{value:"Register voters",id:"register-voters",level:3},{value:"Generate a private identity",id:"generate-a-private-identity",level:4},{value:"Join a poll",id:"join-a-poll",level:4},{value:"Record votes",id:"record-votes",level:3},{value:"Related",id:"related",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"private-voting-use-case"},"Private voting use case"),(0,a.kt)("p",null,"The private voting use case describes how Semaphore interacts with your users and Ethereum to allow users to cast private votes in your application.\nLearn how Semaphore enables applications to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register members as voters."),(0,a.kt)("li",{parentName:"ul"},"Allow members to vote anonymously."),(0,a.kt)("li",{parentName:"ul"},"Prove voter membership."),(0,a.kt)("li",{parentName:"ul"},"Record and prove votes."),(0,a.kt)("li",{parentName:"ul"},"Prevent double-voting.")),(0,a.kt)("h2",{id:"roles"},"Roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#developer-or-community-admin"},"Developer or community admin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#community-member"},"Community member (dApp user)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#relay"},"Relay")))),(0,a.kt)("h3",{id:"developer-or-community-admin"},"Developer or community admin"),(0,a.kt)("p",null,"As a developer or community admin, you deploy the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Smart contract on Ethereum"),": implements the Semaphore ",(0,a.kt)("strong",{parentName:"li"},"base contract")," to create a poll (Semaphore ",(0,a.kt)("strong",{parentName:"li"},"group")," that members join to vote), post transactions, and verify proofs on Ethereum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Decentralized application (dApp)"),": your application that provides a user interface (UI) where members join a poll and vote on a proposal.")),(0,a.kt)("h3",{id:"community-member"},"Community member"),(0,a.kt)("p",null,"Community members connect their wallets to the dApp to take the following actions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Verify ownership of the community token."),(0,a.kt)("li",{parentName:"ol"},"Generate an anonymous ID."),(0,a.kt)("li",{parentName:"ol"},"Cast a vote.")),(0,a.kt)("h3",{id:"relay"},"Relay"),(0,a.kt)("p",null,"To preserve anonymity and avoid disclosing the member's wallet address, the dApp may use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary/#relay"},"relay")," to broadcast the vote.\nThe relay calls the ",(0,a.kt)("strong",{parentName:"p"},"contract")," function that then posts the member's vote transaction to Ethereum."),(0,a.kt)("h2",{id:"private-voting"},"Private voting"),(0,a.kt)("p",null,"Consider a scenario where your community issues a token that users can mint.\nThe token might be a Proof of Attendance (POAP), NFT, or social token that your users can mint to receive membership and vote in your community."),(0,a.kt)("p",null,"The voting scenario has the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#create-a-poll"},"Create a poll"),": Coordinator creates a poll, or ",(0,a.kt)("em",{parentName:"li"},"group"),", in which members can vote on a proposal."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#register-voters"},"Register voters"),": Members join the poll to vote."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#record-votes"},"Record votes"),": Once the poll opens, members may cast one vote, or ",(0,a.kt)("em",{parentName:"li"},"signal"),", on the topic.")),(0,a.kt)("h3",{id:"create-a-poll"},"Create a poll"),(0,a.kt)("p",null,"A community coordinator or dApp administrator uses the deployed smart contract to create an on-chain (Ethereum) poll, a ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/groups/"},"Semaphore group")," that members can join and cast votes to."),(0,a.kt)("p",null,"In the following sample code, the voting contract declares a ",(0,a.kt)("inlineCode",{parentName:"p"},"createPoll")," function that uses the Semaphore base ",(0,a.kt)("inlineCode",{parentName:"p"},"_createGroup")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://github.com/semaphore-protocol/semaphore/contracts/extensions/SemaphoreVoting.sol"',title:'"https://github.com/semaphore-protocol/semaphore/contracts/extensions/SemaphoreVoting.sol"'},'\nfunction createPoll(\n    uint256 pollId,\n    address coordinator,\n    uint8 depth\n) public override {\n    require(address(verifiers[depth]) != address(0), "SemaphoreVoting: depth value is not supported");\n\n    // highlight-next-line\n    _createGroup(pollId, depth, 0);\n\n    Poll memory poll;\n\n    poll.coordinator = coordinator;\n\n    polls[pollId] = poll;\n\n    emit PollCreated(pollId, coordinator);\n}\n')),(0,a.kt)("p",null,"A poll is a Semaphore ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/groups/"},"group")," that stores the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A topic to vote on."),(0,a.kt)("li",{parentName:"ul"},"The public ID of the poll creator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/guides/identities/"},"Semaphore IDs")," of members who joined the poll.")),(0,a.kt)("p",null,"To create the poll, the administrator calls the smart contract function--for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"SemaphoreVoting.createPoll(pollId, coordinator, depth)\n")),(0,a.kt)("p",null,"Next, learn how to ",(0,a.kt)("a",{parentName:"p",href:"#register-voters"},"register voters")," for the poll."),(0,a.kt)("h3",{id:"register-voters"},"Register voters"),(0,a.kt)("p",null,"Before a user can register to vote, the dApp needs to verify membership by checking the user's wallet for the NFT.\nTo grant access to the wallet, the user clicks a ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect wallet")," button in the dApp and allows the dApp to check for the NFT.\nOnce a member is verified, the dApp provides the following member interactions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#generate-a-private-identity"},"Generate a private identity"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#join-a-poll"},"Join a poll"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To learn how to connect to Ethereum wallets, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/getting-started"},"ethers.js Getting Started documentation"),".")),(0,a.kt)("h4",{id:"generate-a-private-identity"},"Generate a private identity"),(0,a.kt)("p",null,"To generate a private identity, the member completes a form in the dApp UI.\nWith the form values and the ",(0,a.kt)("inlineCode",{parentName:"p"},"@semaphore-protocol/identity")," library, the dApp prompts the member to sign a wallet message and then generates the signed private identity.\nThe private identity is known only to the member and can be used in future interactions with the dApp."),(0,a.kt)("p",null,"Next, learn how members ",(0,a.kt)("a",{parentName:"p",href:"#join-a-poll"},"join a poll"),"."),(0,a.kt)("h4",{id:"join-a-poll"},"Join a poll"),(0,a.kt)("p",null,"Once the member has a private identity for the dApp, the member may select a poll to vote in.\nWhen the member selects a poll, the dApp does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"@semaphore-protocol/identity")," library to generate an anonymous Semaphore ID, or ",(0,a.kt)("em",{parentName:"li"},"identity commitment"),", from the private identity."),(0,a.kt)("li",{parentName:"ol"},"Calls a contract function that adds the new Semaphore ID to the on-chain poll.")),(0,a.kt)("p",null,"With a member registered for a poll, learn how the dApp ",(0,a.kt)("a",{parentName:"p",href:"#record-votes"},"records votes"),"."),(0,a.kt)("h3",{id:"record-votes"},"Record votes"),(0,a.kt)("p",null,"Once members have joined a poll, the coordinator starts the poll to allow voting.\nWhen a member votes (for example, by selecting a radio button), then the dApp takes the following actions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"@semaphore-protocol/proof")," library to create a proof of the vote, the poll identifier, the Semaphore ID, and a ",(0,a.kt)("a",{parentName:"li",href:"/docs/glossary/#nullifier"},"nullifier")," that prevents double-voting."),(0,a.kt)("li",{parentName:"ol"},"Sends the vote proof to the ",(0,a.kt)("a",{parentName:"li",href:"#relay"},"relay"),".")),(0,a.kt)("h3",{id:"related"},"Related"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get started developing with Semaphore, see the ",(0,a.kt)("a",{parentName:"li",href:"/docs/quick-setup/"},"Quick setup")," guide."),(0,a.kt)("li",{parentName:"ul"},"For an example app that you can use to start your own project, see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/semaphore-protocol/boilerplate"},"Semaphore boilerplate"),".")))}u.isMDXComponent=!0}}]);