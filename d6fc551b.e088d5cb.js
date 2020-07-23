(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(196)),o=n(201),c=n(202),l={id:"dev-txn-signing",title:"Signing",keywords:["signing","transitions","zilliqa"],description:"Zilliqa Transaction Signing"},s={id:"dev/dev-txn-signing",isDocsHomePage:!1,title:"Signing",description:"Zilliqa Transaction Signing",source:"@site/docs/dev/dev-txn-signing.mdx",permalink:"/docs/dev/dev-txn-signing",editUrl:"https://github.com/Zilliqa/dev-portal/docs/dev/dev-txn-signing.mdx",sidebar:"DevelopersSidebar",previous:{title:"Faucet",permalink:"/docs/dev/dev-tools-faucet"},next:{title:"Broadcasting",permalink:"/docs/dev/dev-txn-broadcasting"}},u=[],p={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Before sending a transaction, one must first sign it with a ",Object(i.b)("strong",{parentName:"p"},"valid private key"),". This can be done with one of the numerous SDKs provided by the Zilliqa team and community."),Object(i.b)("p",null,"Signing is done against the Protobuf-serialised version of the transaction's contents. This is the reason why all SDKs depend on Protobuf to function. This step is ",Object(i.b)("strong",{parentName:"p"},"transparent")," to you as a developer."),Object(i.b)("p",null,"Example of providing a private key:"),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Go",value:"go"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Zilliqa } = require('@zilliqa-js/zilliqa');\nconst { getAddressFromPrivateKey } = require('@zilliqa-js/crypto');\nconst zilliqa = new Zilliqa(\"https://dev-api.zilliqa.com\");\n\nconst PRIVATE_KEY = '9afc1a1dab96127e902daaaec1a56c30346f007523c787c3bb62371c0e5a1be7'\n\nzilliqa.wallet.addByPrivateKey(PRIVATE_KEY);\n"))),Object(i.b)(c.a,{value:"go",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'import (\n    "github.com/Zilliqa/gozilliqa-sdk/account"\n)\n\nwallet := account.NewWallet()\nwallet.AddByPrivateKey("e19d05c5452598e24caad4a0d85a49146f7be089515c905ae6a19e8a578a6930")\n'))),Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'package com.firestack.example;\n\nimport com.firestack.laksaj.account.Wallet;\n\npublic class TransactionOperation {\n    public static void main(String[] args) throws IOException, NoSuchAlgorithmException {\n        Wallet wallet = new Wallet();\n        String ptivateKey = "e19d05c5452598e24caad4a0d85a49146f7be089515c905ae6a19e8a578a6930";\n        String address = wallet.addByPrivateKey(ptivateKey);\n    }\n}\n')))))}b.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},199:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},200:function(e,t,n){"use strict";var a=n(0),r=n(199);t.a=function(){return Object(a.useContext)(r.a)}},201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(200),o=n(197),c=n(92),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:b}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[m,v]=Object(a.useState)(c);if(null!=b){const e=d[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&v(e)}const g=e=>{v(e),null!=b&&f(b,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);