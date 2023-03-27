"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=m(n),d=o,u=k["".concat(s,".").concat(d)]||k[d]||c[d]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={title:"Architecture of the Environment",description:"Architecture of the Environments"},i="Environmental Information",l={unversionedId:"general/index",id:"general/index",title:"Architecture of the Environment",description:"Architecture of the Environments",source:"@site/labs/general/index.md",sourceDirName:"general",slug:"/general/",permalink:"/waiops-tech-jam/labs/general/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/general/index.md",tags:[],version:"current",frontMatter:{title:"Architecture of the Environment",description:"Architecture of the Environments"},sidebar:"tutorialSidebar",next:{title:"1. Introduction",permalink:"/waiops-tech-jam/labs/instana/introduction/"}},s={},m=[{value:"Lab Environment Diagram",id:"lab-environment-diagram",level:2},{value:"Accessing your environment",id:"accessing-your-environment",level:2},{value:"Import bookmarks on Guacamole",id:"import-bookmarks-on-guacamole",level:2}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environmental-information"},"Environmental Information"),(0,o.kt)("p",null,"The lab environment includes 2 Openshift clusters and 3 VMs."),(0,o.kt)("p",null,"Openshift clusters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"AIOps cluster")," - A full installation of OCP that will be used to install\nTurbonomic."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Apps cluster")," - An instance of Single Node OpenShift that will be used to\ninstall the Instana and KubeTurbo agents and the sample ",(0,o.kt)("em",{parentName:"li"},"RobotShop"),"\napplication. The ",(0,o.kt)("em",{parentName:"li"},"Quote Of The Day")," sample application has been\npre-installed.")),(0,o.kt)("p",null,"Virtual Machines:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Guacamole VM")," - A RHEL VM that will be used as the ",(0,o.kt)("em",{parentName:"li"},"bastion")," host into the\nlab network. Guacamole has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Instana")," - An Ubuntu VM that will be used to install a single node\nself-hosted Instana server."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"MQACE")," - An Ubuntu VM that contains the pre-installed IBM ACE and MQ\nmiddleware.")),(0,o.kt)("h2",{id:"lab-environment-diagram"},"Lab Environment Diagram"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"IBM MQ, IBM ACE and Quote of the Day have been pre-installed."),(0,o.kt)("li",{parentName:"ul"},"You will install and configure all remaining components during these labs."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"architecture",src:n(78671).Z,width:"991",height:"784"})),(0,o.kt)("h2",{id:"accessing-your-environment"},"Accessing your environment"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using Google Chrome to access the bastion host."),(0,o.kt)("p",{parentName:"admonition"},"If prompted by your browser to allow copy/paste when connection to the Bastion\nhost we recommend allowing.")),(0,o.kt)("p",null,"You should have received an email with a link to IBM Tech Zone. Click the link\nand sign in with your IBM ID."),(0,o.kt)("p",null,"All access to the environment is behind the Bastion host running RHEL named\n",(0,o.kt)("strong",{parentName:"p"},"Guacamole"),"."),(0,o.kt)("h2",{id:"import-bookmarks-on-guacamole"},"Import bookmarks on Guacamole"),(0,o.kt)("p",null,"To make it easier to navigate to different applications a ",(0,o.kt)("em",{parentName:"p"},"bookmarks.html")," file\nhas been copied to each of the bastion hosts. Before you start the Instana lab\nwe recommend importing the bookmarks file by following the instruction below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Firefox by selecting ",(0,o.kt)("strong",{parentName:"p"},"Activites")," from the top left of the ",(0,o.kt)("em",{parentName:"p"},"Guacamole"),"\nhost and then selecting ",(0,o.kt)("strong",{parentName:"p"},"Firefox")," from the application menu bar."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"open firefox",src:n(29163).Z,width:"5120",height:"2600"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Firefox menu")," and select ",(0,o.kt)("strong",{parentName:"p"},"Bookmarks")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"open firefox menu",src:n(79270).Z,width:"4630",height:"1962"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Manage Bookmarks")," at the bottom of the menu."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"manage bookmarks",src:n(954).Z,width:"2367",height:"1908"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Import and Backup")," followed by ",(0,o.kt)("strong",{parentName:"p"},"Import Bookmarks from HTML...")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"import bookmarks",src:n(97482).Z,width:"1710",height:"1314"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Home")," and open the ",(0,o.kt)("strong",{parentName:"p"},"bookmarks.html")," file."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"import bookmarks html file",src:n(9672).Z,width:"2980",height:"1000"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Expand the folder ",(0,o.kt)("strong",{parentName:"p"},"Bookmarks Menu")," and drag all of the bookmarks to the\n",(0,o.kt)("strong",{parentName:"p"},"Bookmarks Toolbar")," for easy access."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"drag bookmarks to toolbar",src:n(11098).Z,width:"1702",height:"1306"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can now select the ",(0,o.kt)("strong",{parentName:"p"},"Bookmarks Toolbar")," and delete the placeholder\nbookmark called ",(0,o.kt)("strong",{parentName:"p"},"OCP Dashboard"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"delete placeholder bookmark from toolbar",src:n(51831).Z,width:"1700",height:"1304"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should now see the bookmarks available in the Firefox toolbar."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"bookmarks toolbar",src:n(61493).Z,width:"1946",height:"258"})))))}c.isMDXComponent=!0},78671:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-instana-turbo-192b76a620249f913bfef7f9d0fa134b.png"},79270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-2-320a2046dae164ef57d26e5cee1f89b3.png"},954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-3-6807798673b9ecce9df670e30a9eac67.png"},97482:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-4-ac1c29c97c65f7a8806dfaca51176cc3.png"},9672:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-5-bc5f95fbeb1e075b1d9c8e1708231000.png"},11098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-6-3610fbcd8a41911bd817e85e66b4d0f7.png"},51831:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-7-21a3b0c20a35660d883331a50832343e.png"},61493:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/firefox-bookmarks-8-bbaff8de1ef9b4dc73bb8a524bee7c0d.png"},29163:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-firefox-08d65cf3ddebcd1c9f7cefa769f75191.png"}}]);