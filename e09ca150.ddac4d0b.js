(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(196)),r={id:"staking-getting-started",title:"Setting up the SSN",keywords:["staking","getting started","seed node","ip whitelisting","launching node","zilliqa"],description:"Staking Getting Started"},c={id:"exchanges/staking-getting-started",isDocsHomePage:!1,title:"Setting up the SSN",description:"Staking Getting Started",source:"@site/docs/exchanges/staking-getting-started.md",permalink:"/docs/exchanges/staking-getting-started",editUrl:"https://github.com/Zilliqa/dev-portal/docs/exchanges/staking-getting-started.md",sidebar:"ExchangesSidebar",previous:{title:"General information",permalink:"/docs/exchanges/staking-introduction"},next:{title:"Smart contract operations",permalink:"/docs/exchanges/staking-ssn-operations"}},l=[{value:"IP Whitelisting and API Servicing",id:"ip-whitelisting-and-api-servicing",children:[]},{value:"Preparing the Node",id:"preparing-the-node",children:[{value:"Launching the Node Using Docker",id:"launching-the-node-using-docker",children:[]},{value:"Launching the Node Using Native Build",id:"launching-the-node-using-native-build",children:[]},{value:"Optional: Configuring Domain Name",id:"optional-configuring-domain-name",children:[]},{value:"Testing Your Staked Seed Node JSON-RPC Port",id:"testing-your-staked-seed-node-json-rpc-port",children:[]},{value:"Testing Your Staked Seed Node WebSocket Port",id:"testing-your-staked-seed-node-websocket-port",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"ip-whitelisting-and-api-servicing"},"IP Whitelisting and API Servicing"),Object(o.b)("p",null,"It is necessary for the staked seed node to be whitelisted by Zilliqa in phase 0 in order to receive data broadcasts about the blockchain and its state. This requires a static public IP address with minimal the following inbound and outbound port open."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Purpose"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inbound"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"33133"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Protocol level port for receiving network data")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inbound"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4201/443"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://apidocs.zilliqa.com/#introduction"}),"API service"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inbound"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4401"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"api-websocket"}),"Websocket servuce"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inbound"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4501"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Staking API service")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Outbound"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"443"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"For getting initial node data for syncing")))),Object(o.b)("h2",{id:"preparing-the-node"},"Preparing the Node"),Object(o.b)("p",null,"Launching a seed node for staking is similar to launching a normal seed node, with some additional configuration steps."),Object(o.b)("p",null,"In this guide, we will demonstrate on how to set up the seed node via"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#launching-the-node-using-docker"}),"Docker")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#launching-the-node-using-native-build"}),"Native build"))),Object(o.b)("p",null,"You can go for either one of the options above."),Object(o.b)("h3",{id:"launching-the-node-using-docker"},"Launching the Node Using Docker"),Object(o.b)("p",null,"We highly recommend using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docker.com/"}),"Docker")," to set up a seed node, as we provide a tested, production-ready image for your use. If you have not yet set up docker, please follow the instructions on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"official documentation"),"."),Object(o.b)("p",null,"Once you have set up Docker, you may proceed to download and uncompress the configuration tarball for the mainnet:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# create a directory\n$ mkdir my_seed && cd my_seed\n\n# download and extract the seed node configuration files\n$ wget https://testnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# create a directory\n$ mkdir my_seed && cd my_seed\n\n# download and extract the seed node configuration files\n$ wget https://mainnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n")),Object(o.b)("p",null,"The seed node requires some configuring before it can successfully join the network and be used for staking. Most configuration is contained in ",Object(o.b)("inlineCode",{parentName:"p"},"constants.xml"),", which should be in the directory we extracted seed-configuration.tar.gz to. Minimally, the following changes are required:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"ENABLE_STAKING_RPC")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Optional:")," Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"SEED_PORT")," to ",Object(o.b)("inlineCode",{parentName:"li"},"33133")," (default), or a port of your choice. If you do not select ",Object(o.b)("inlineCode",{parentName:"li"},"33133"),", be sure to note this down for the subsequent whitelisting step.",Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Important notice ")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you have used a port other than 33133, please notify us immediately so that we can adjust our whitelisted port for you.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Optional:")," Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"ENABLE_WEBSOCKET")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if your seed node will support websockets (refer to the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Zilliqa/dev-portal/tree/master/docs/api-websocket.md"}),"Zilliqa Websocket Server")," documentation).")),Object(o.b)("p",null,"Finally, launch the seed node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ ./launch_docker.sh\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A seed node needs a key pair to communicate with other nodes in the network. launch_docker.sh will automatically generate and use a key pair stored in the file mykey.txt in the same folder."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We highly recommend to use another keypair for depositing stake, withdrawing stake and withdrawing reward."))),Object(o.b)("h3",{id:"launching-the-node-using-native-build"},"Launching the Node Using Native Build"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This approach has only been tested on ",Object(o.b)("inlineCode",{parentName:"p"},"Ubuntu 16.04.6 LTS")," and involves compiling and building the ",Object(o.b)("inlineCode",{parentName:"p"},"C++")," codebase from scratch. We strongly recommend you consider launching the node using the Docker steps detailed in the previous section."))),Object(o.b)("p",null,"If you cannot or do not wish to use Docker, you may also build the Zilliqa binary from the source and run it as such."),Object(o.b)("p",null,"First, clone the Zilliqa repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# clone Zilliqa source files\n$ git clone https://github.com/Zilliqa/Zilliqa.git && cd Zilliqa && git checkout <<release tag>> && cd Zilliqa\n")),Object(o.b)("p",null,"Install system dependencies:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo apt-get update\n$ sudo apt-get install git libboost-system-dev libboost-filesystem-dev libboost-test-dev libssl-dev libleveldb-dev libjsoncpp-dev libsnappy-dev cmake libmicrohttpd-dev libjsonrpccpp-dev build-essential pkg-config libevent-dev libminiupnpc-dev libcurl4-openssl-dev libboost-program-options-dev libboost-python-dev python3-dev python3-setuptools python3-pip gawk\n")),Object(o.b)("p",null,"Build the staked seed node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Build the binary. This may take a while.\n$ ./build.sh\n")),Object(o.b)("p",null,"The build should exit with no errors. Once it is complete, download and uncompress the configuration tarball:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# create a directory\n$ mkdir my_seed && cd my_seed\n\n# download and extract the seed node configuration files\n$ wget https://testnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# create a directory\n$ mkdir my_seed && cd my_seed\n\n# download and extract the seed node configuration files\n$ wget https://mainnet-join.zilliqa.com/seed-configuration.tar.gz\n$ tar -zxvf seed-configuration.tar.gz\n")),Object(o.b)("p",null,"The staked seed node requires some configuring before it can successfully join the network and be used for staking. Most configuration is contained in ",Object(o.b)("inlineCode",{parentName:"p"},"constants.xml"),", which should be in the directory we extracted ",Object(o.b)("inlineCode",{parentName:"p"},"configuration.tar.gz")," to. Minimally, the following changes are required:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"ENABLE_STAKING_RPC")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Optional:")," Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"SEED_PORT")," to ",Object(o.b)("inlineCode",{parentName:"li"},"33133")," (default), or a port of your choice. If you do not select ",Object(o.b)("inlineCode",{parentName:"li"},"33133"),", be sure to note this down for the subsequent whitelisting step.",Object(o.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Important notice ")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you have used a port other than 33133, please notify us immediately so that we can adjust our whitelisted port for you.")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Note:")," Change the value of ",Object(o.b)("inlineCode",{parentName:"li"},"ENABLE_WEBSOCKET")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),". This enables your seed node to support websockets (refer to the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Zilliqa/dev-portal/tree/master/docs/api-websocket.md"}),"Zilliqa Websocket Server")," documentation).")),Object(o.b)("p",null,"Finally, launch the seed node:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ./launch.sh\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A seed node needs a key pair to communicate with other nodes in the network. launch.sh will automatically generate and use a key pair stored in the file mykey.txt in the same folder"))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We highly recommend to use another keypair for depositing stake, withdrawing stake and withdrawing reward."))),Object(o.b)("h3",{id:"optional-configuring-domain-name"},"Optional: Configuring Domain Name"),Object(o.b)("p",null,"Once your seed node is fully set up, it is time to configure your domain name to point to the address of your seed node. "),Object(o.b)("p",null,"If your seed node is not behind a load balancer, you can set an ",Object(o.b)("inlineCode",{parentName:"p"},"A record")," in your domain registrar to point your domain/subdomain to your seed node\u2019s IP address."),Object(o.b)("p",null,"If your seed node is behind a load balancer, you can set a ",Object(o.b)("inlineCode",{parentName:"p"},"CNAME record")," in your domain registrar to point your domain/subdomain to the hostname of your load balancer."),Object(o.b)("h3",{id:"testing-your-staked-seed-node-json-rpc-port"},"Testing Your Staked Seed Node JSON-RPC Port"),Object(o.b)("p",null,"To check whether your JSON-RPC is publicly available, you can use the following curl command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl -d \'{\n    "id": "1",\n    "jsonrpc": "2.0",\n    "method": "GetBlockchainInfo",\n    "params": [""]\n}\' -H "Content-Type: application/json" -X POST "<staked seed node address>"\n')),Object(o.b)("p",null,"If you received the latest blockchain information (similar to the one below) from the staked seed node, your JSON-RPC service is running well."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'{"id":"1","jsonrpc":"2.0","result":{"CurrentDSEpoch":"4789","CurrentMiniEpoch":"478809","DSBlockRate":0.00013455546527607284,"NumDSBlocks":"4790","NumPeers":2400,"NumTransactions":"3091806","NumTxBlocks":"478809","NumTxnsDSEpoch":"185","NumTxnsTxEpoch":"0","ShardingStructure":{"NumPeers":[600,600,600]},"TransactionRate":0,"TxBlockRate":0.013450003515398927}}\n')),Object(o.b)("h3",{id:"testing-your-staked-seed-node-websocket-port"},"Testing Your Staked Seed Node WebSocket Port"),Object(o.b)("p",null,"You can use an online websocket test utility to test whether your websocket is publicly accessible."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.websocket.org/echo.html"}),"https://www.websocket.org/echo.html")),Object(o.b)("li",{parentName:"ol"},"Under location, put your websocket url link (e.g., ",Object(o.b)("inlineCode",{parentName:"li"},"wss://<yourdomain here or ip:port>"),")"),Object(o.b)("li",{parentName:"ol"},"Click on connect"),Object(o.b)("li",{parentName:"ol"},"If ",Object(o.b)("strong",{parentName:"li"},"\u201cCONNECTED\u201d")," is shown in the log, your websocket port is publicly accessible")))}d.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||p[u]||o;return n?i.a.createElement(m,c(c({ref:t},b),{},{components:n})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<o;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);