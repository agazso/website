(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[814],{814:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var o=n(7462),r=n(7294),c=n(2389),s=n(6010),a=n(2949),l=n(6668);function i(){const{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(5281),p=n(7594),d=n.n(p);const m=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function f(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:c}=t;if(c&&g.test(c)){const e=c.match(g).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(h),t)}}(o,r),a=n.split("\n"),l=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(s);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const b={codeBlockContainer:"codeBlockContainer_Ckt0"};function k(e){let{as:t,...n}=e;const c=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const c=t[o];c&&"string"==typeof r&&(n[c]=r)})),n}(i());return r.createElement(t,(0,o.Z)({},n,{style:c,className:(0,s.Z)(n.className,b.codeBlockContainer,u.k.common.codeBlock)}))}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){let{children:t,className:n}=e;return r.createElement(k,{as:"pre",tabIndex:0,className:(0,s.Z)(v.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:v.codeBlockLines},t))}var B=n(902);const N={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,r.useState)(),c=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=N);const o=(0,B.zX)(t),c=(0,B.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var L={Prism:n(7410).Z,theme:C};function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}var T=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function I(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var O=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),j(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=_({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=_({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),j(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,c=_({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(c.style=s.plain),void 0!==r&&(c.style=void 0!==c.style?_({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),j(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return c[n[0]];var s=o?{display:"inline-block"}:{},a=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[s].concat(a))}})),j(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,c=e.token,s=_({},I(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?_({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),j(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var c=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,c=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],c=0,s=0,a=[],l=[a];s>-1;){for(;(c=o[s]++)<r[s];){var i=void 0,u=t[s],p=n[s][c];if("string"==typeof p?(u=s>0?u:["plain"],i=p):(u=S(u,p.type),p.alias&&(u=S(u,p.alias)),i=p.content),"string"==typeof i){var d=i.split(T),m=d.length;a.push({types:u,content:d[0]});for(var g=1;g<m;g++)x(a),l.push(a=[]),a.push({types:u,content:d[g]})}else s++,t.push(u),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return x(a),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const P=O,A={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function Z(e){let{line:t,classNames:n,showLineNumbers:c,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,s.Z)(n,c&&A.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))));return r.createElement("span",i,c?r.createElement(r.Fragment,null,r.createElement("span",{className:A.codeLineNumber}),r.createElement("span",{className:A.codeLineContent},u)):u,r.createElement("br",null))}var W=n(5999);const $={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function z(e){let{code:t,className:n}=e;const[o,c]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection(),s=c.rangeCount>0&&c.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),s&&(c.removeAllRanges(),c.addRange(s)),r&&r.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,W.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,$.copyButton,o&&$.copyButtonCopied),onClick:l},r.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const D={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:o}=e;const c=(0,W.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&D.wordWrapButtonEnabled),"aria-label":c,title:c},r.createElement("svg",{className:D.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function M(e){let{children:t,className:n="",metastring:c,title:a,showLineNumbers:u,language:p}=e;const{prism:{defaultLanguage:d,magicComments:g}}=(0,l.L)(),h=p??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,y=i(),b=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),c=(0,r.useRef)(null),s=(0,r.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return w(c,a),(0,r.useEffect)((()=>{a()}),[e,a]),(0,r.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:s}}(),E=function(e){return e?.match(m)?.groups.title??""}(c)||a,{lineClassNames:B,code:N}=f(t,{metastring:c,language:h,magicComments:g}),C=u??function(e){return Boolean(e?.includes("showLineNumbers"))}(c);return r.createElement(k,{as:"div",className:(0,s.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`)},E&&r.createElement("div",{className:v.codeBlockTitle},E),r.createElement("div",{className:v.codeBlockContent},r.createElement(P,(0,o.Z)({},L,{theme:y,code:N,language:h??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:c}=e;return r.createElement("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,s.Z)(t,v.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(v.codeBlockLines,C&&v.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(Z,{key:t,line:e,getLineProps:o,getTokenProps:c,classNames:B[t],showLineNumbers:C})))))})),r.createElement("div",{className:v.buttonGroup},(b.isEnabled||b.isCodeScrollable)&&r.createElement(H,{className:v.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),r.createElement(z,{className:v.codeButton,code:N}))))}function V(e){let{children:t,...n}=e;const s=(0,c.Z)(),a=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?M:E;return r.createElement(l,(0,o.Z)({key:String(s)},n),a)}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);