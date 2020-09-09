(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{192:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(257)),i={id:"staking-ssn-enrollment",title:"Enrolment of SSN into Staking Smart Contract",keywords:["staking","staked seed node","enrollment","smart contract","zilliqa"],description:"Enrolment of SSN into staking smart contract"},l={id:"staking/phase1/ssn-operator/staking-ssn-enrollment",isDocsHomePage:!1,title:"Enrolment of SSN into Staking Smart Contract",description:"Enrolment of SSN into staking smart contract",source:"@site/docs/staking/phase1/ssn-operator/staking-ssn-enrollment.md",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-enrollment",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/phase1/ssn-operator/staking-ssn-enrollment.md",sidebar:"StakingSidebar",previous:{title:"Setting up the SSN",permalink:"/docs/staking/phase1/ssn-operator/staking-ssn-setup"},next:{title:"Commission Management",permalink:"/docs/staking/phase1/ssn-operator/staking-commission-management"}},c=[],b={rightToc:c};function s(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"We will need the following information in order to enrol your SSN into the smart contract."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Information"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Future Adjustment?"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SSN public key"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ByStr20"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SSN operator name"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Contract admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"URL (RAW)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Contract admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"API URL"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Contract admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Commission rate"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Uint128"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SSN operator")))),Object(o.b)("p",null,"For both ",Object(o.b)("inlineCode",{parentName:"p"},"URL (RAW)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"API URL"),", please provide the port number."),Object(o.b)("p",null,"To ensure fair competition among all existing SSN operators, the initial commission rate we allow an SSN to set will be one within the current commission rate range of all active SSNs. For example, if we have 2 active SSNs in the network with rates of 5% and 10%, respectively, then, the new SSN operator will only be allowed to set its commission between 5-10%. The SSN operator, however, can subsequently re-adjust the commission rate via ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"staking-commission-management#update-commission-rate"}),Object(o.b)("inlineCode",{parentName:"a"},"UpdateComm"))," transition."))}s.isMDXComponent=!0},257:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),s=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),p=s(n),u=r,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?a.a.createElement(d,l(l({ref:e},b),{},{components:n})):a.a.createElement(d,l({ref:e},b))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);