(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),l=(n(0),n(257)),r=n(264),c={id:"dev-tools-ide",title:"Scilla IDEs",keywords:["ide","neo-savant","scilla","smart contract","installation","vscode extension","emacs","vim","zilliqa"],description:"Zilliqa Online Smart Contract (Scilla) IDE"},o={id:"dev/dev-tools-ide",isDocsHomePage:!1,title:"Scilla IDEs",description:"Zilliqa Online Smart Contract (Scilla) IDE",source:"@site/docs/dev/dev-tools-neosavant.mdx",permalink:"/docs/dev/dev-tools-ide",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-neosavant.mdx",sidebar:"DevelopersSidebar",previous:{title:"CLI-Tools",permalink:"/docs/dev/dev-tools-cli"},next:{title:"Explorer",permalink:"/docs/dev/dev-tools-explorer"}},s=[{value:"Neo-Savant @ https://ide.zilliqa.com",id:"neo-savant--httpsidezilliqacom",children:[{value:"Features",id:"features",children:[]}]},{value:"VSCode Extension by as1ndu",id:"vscode-extension-by-as1ndu",children:[{value:"Installation",id:"installation",children:[]},{value:"Features",id:"features-1",children:[]}]},{value:"Vim",id:"vim",children:[]},{value:"Emacs",id:"emacs",children:[]}],b={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("h2",{id:"neo-savant--httpsidezilliqacom"},"Neo-Savant @ ",Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"https://ide.zilliqa.com/"}),"https://ide.zilliqa.com")),Object(l.b)("img",{alt:"Faucet",src:Object(r.a)("img/dev/tools/neosavant.png")}),Object(l.b)("p",null,"A fully-fledged IDE used for writing, testing and deploying Scilla smart contracts painlessly. It can be tried out at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://ide.zilliqa.com/"}),"https://ide.zilliqa.com/"),"."),Object(l.b)("p",null,"Neo-Savant helps Scilla developers to create and deploy Smart Contracts using an automated development environment, in-browser, with quick and intuitive controls."),Object(l.b)("h3",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Intuitive UI for easy deployment/contract invocation."),Object(l.b)("li",{parentName:"ul"},"Multiple networks supported: Testnet, Mainnet and a Simulated Environment where you can test out contracts without spending $ZIL"),Object(l.b)("li",{parentName:"ul"},"Account management using Keystore, Ledger or ZilPay."),Object(l.b)("li",{parentName:"ul"},"Simple, persistent file manager for managing your contracts that allows for renaming/deletion."),Object(l.b)("li",{parentName:"ul"},"Possibility to import already deployed contracts and call their transitions."),Object(l.b)("li",{parentName:"ul"},"Support for event in contracts, with automatic notifications in the UI."),Object(l.b)("li",{parentName:"ul"},"Support for arbitrary gas price/gas limit in deployment/calls.")),Object(l.b)("h2",{id:"vscode-extension-by-as1ndu"},"VSCode Extension by ",Object(l.b)("a",Object(a.a)({parentName:"h2"},{href:"https://marketplace.visualstudio.com/publishers/as1ndu"}),"as1ndu")),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Method 1:")," Install directly from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=as1ndu.scilla"}),"VS Marketplace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Launch VS Code Quick Open (Ctrl+P),"),Object(l.b)("li",{parentName:"ul"},"Use the following command")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"ext install as1ndu.scilla\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Method 2:")," Manual install using VS Code extension package"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download the ",Object(l.b)("inlineCode",{parentName:"li"},".visx")," file from the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/as1ndu/scilla/releases"}),"releases tab")),Object(l.b)("li",{parentName:"ul"},"Using the Install from VSIX command in the Extensions view command drop-down,: Install from VSIX command in the Command Palette, point to the ",Object(l.b)("inlineCode",{parentName:"li"},".vsix")," file.")),Object(l.b)("h3",{id:"features-1"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Syntax highlighting"),Object(l.b)("li",{parentName:"ul"},"Code Snippets"),Object(l.b)("li",{parentName:"ul"},"Debugging (Error & Warnings)"),Object(l.b)("li",{parentName:"ul"},"Cash Flow Analysis (",Object(l.b)("inlineCode",{parentName:"li"},"ctrl + P")," then ",Object(l.b)("inlineCode",{parentName:"li"},">")," type ",Object(l.b)("inlineCode",{parentName:"li"},"scilla")," then select ",Object(l.b)("inlineCode",{parentName:"li"},"Scilla: Cashflow Analyser"),")"),Object(l.b)("li",{parentName:"ul"},"Gas Usage Reports (Enable it in extension settings)"),Object(l.b)("li",{parentName:"ul"},"Type info for variables (Hover over dotted lines to see they type information of a variable)"),Object(l.b)("li",{parentName:"ul"},"Configuration via Vscode's UI")),Object(l.b)("h2",{id:"vim"},"Vim"),Object(l.b)("p",null,"A vim plugin for editing Scilla contracts is provided."),Object(l.b)("p",null,"You can install the vim config files through Pathogen by:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/edisonljh/vim-scilla.git ~/.vim/bundle/vim-scilla\n")),Object(l.b)("p",null,"Or through Vundle by adding the following line to your ",Object(l.b)("inlineCode",{parentName:"p"},"~/.vimrc"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"Plugin 'edisonljh/vim-scilla'\n")),Object(l.b)("p",null,"If you are using ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/w0rp/ale"}),"ALE"),", you can enable ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://scilla.readthedocs.io/en/latest/scilla-checker.html"}),"scilla-checker")," to show errors right inside vim."),Object(l.b)("p",null,"Here is how to enable it:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/w0rp/ale"}),"ALE")," vim plugin"),Object(l.b)("li",{parentName:"ol"},"Make ",Object(l.b)("inlineCode",{parentName:"li"},"scilla-checker")," executable available (",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Zilliqa/scilla#compiling-and-running"}),"https://github.com/Zilliqa/scilla#compiling-and-running"),")"),Object(l.b)("li",{parentName:"ol"},"Set STDLIB dir in vimrc: ",Object(l.b)("inlineCode",{parentName:"li"},"let g:ale_scilla_checker_libdir = '<path>/stdlib'")),Object(l.b)("li",{parentName:"ol"},"Set CHECKER in vimrc: ",Object(l.b)("inlineCode",{parentName:"li"}," let g:ale_scilla_checker_executable='<path>/scilla-checker'")),Object(l.b)("li",{parentName:"ol"},"Enable the linter in vimrc: ",Object(l.b)("inlineCode",{parentName:"li"},"autocmd FileType scilla let b:ale_linters = ['checker']")),Object(l.b)("li",{parentName:"ol"},"Open any scilla file and ensure checker is working: ",Object(l.b)("inlineCode",{parentName:"li"},":ALEInfo"),"\nRepo: ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/edisonljh/vim-scilla"}),"vim-scilla"),".")),Object(l.b)("h2",{id:"emacs"},"Emacs"),Object(l.b)("p",null,"An emacs major mode for editing Scilla contracts is ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/scilla/blob/master/misc/emacs-mode/scilla-mode.el"}),"provided"),".\nAdd the following line to your ",Object(l.b)("inlineCode",{parentName:"p"},".emacs")," file to load this mode for files ending with ",Object(l.b)("inlineCode",{parentName:"p"},".scilla")," and ",Object(l.b)("inlineCode",{parentName:"p"},".scillib"),".\nFor enabling flycheck mode for Scilla (see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/scilla/blob/master/INSTALL.md"}),"INSTALL.md"),"). When ",Object(l.b)("inlineCode",{parentName:"p"},"scilla-checker")," is available,\ntype reporting is also supported. The key binding ",Object(l.b)("inlineCode",{parentName:"p"},"C-c C-t")," will print the type of the variable on which\nthe cursor currently is."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),';; For enabling flycheck mode for Scilla.\n(setq scilla-root "/path/to/scilla/root")\n;; Scilla mode\n(load-file "/path/to/scilla-mode.el")\n\n')))}p.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||l;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},263:function(e,t,n){"use strict";var a=n(0),i=n(35);t.a=function(){return Object(a.useContext)(i.a)}},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(263),i=n(265);function l(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:l="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return l+e;if(!Object(i.a)(e))return e;const c=l+e.replace(/^\//,"");return n?r+c:c}},265:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);