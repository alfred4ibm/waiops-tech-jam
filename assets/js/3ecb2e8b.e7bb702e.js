"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[7865],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return n?o.createElement(m,i(i({ref:e},u),{},{components:n})):o.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63676:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"4. Install the Robot Shop Application",description:"Install the Robot Shop Application and Setup Website Monitoring",sidebar_position:4},i=void 0,s={unversionedId:"instana/robot-shop-installation/index",id:"instana/robot-shop-installation/index",title:"4. Install the Robot Shop Application",description:"Install the Robot Shop Application and Setup Website Monitoring",source:"@site/labs/instana/4-robot-shop-installation/index.mdx",sourceDirName:"instana/4-robot-shop-installation",slug:"/instana/robot-shop-installation/",permalink:"/waiops-tech-jam/labs/instana/robot-shop-installation/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/instana/4-robot-shop-installation/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Install the Robot Shop Application",description:"Install the Robot Shop Application and Setup Website Monitoring",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Agent Installation",permalink:"/waiops-tech-jam/labs/instana/agent-installation/"},next:{title:"5. Monitoring IBM Middleware",permalink:"/waiops-tech-jam/labs/instana/ibm-middleware/"}},l={},p=[{value:"4.1: Introduction",id:"41-introduction",level:2},{value:"4.2: Create the Website in Instana",id:"42-create-the-website-in-instana",level:2},{value:"4.3: Install Robot Shop",id:"43-install-robot-shop",level:2},{value:"4.4: Setup Automated Load",id:"44-setup-automated-load",level:2},{value:"4.5: Summary",id:"45-summary",level:2}],u={toc:p};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"41-introduction"},"4.1: Introduction"),(0,a.kt)("p",null,"In this section of the lab, you will learn how to install the Robot Shop\napplication. Robot Shop is pre-configured to include any required configuration\nchanges needed to enable monitoring. Some technologies such as java don't\nrequire any configuration, but others require monitor configuration changes so\nthat the application can be monitored. During the install, you will also specify\nthe required information that is necessary for Instana to monitor the End User\nExperience (EUM) / Real User Monitoring (RUM) data."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"42-create-the-website-in-instana"},"4.2: Create the Website in Instana"),(0,a.kt)("p",null,"If you want to capture EUM/RUM data within Instana, you must first create a\nwebsite within the GUI (or via API). Open the Instana GUI within your browser."),(0,a.kt)("p",null,"On left side navigation, select ",(0,a.kt)("strong",{parentName:"p"},"Websites & Mobile Apps"),". You'll see a dialog\nwhere you can enter a Website Name. Enter ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," as the website name.\nThen, click the ",(0,a.kt)("strong",{parentName:"p"},"Add Website")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(59045).Z,width:"1421",height:"422"})),(0,a.kt)("p",null,"A dialog containing ",(0,a.kt)("strong",{parentName:"p"},"javascript")," will open. In a more typical application, you\nwould follow the instructions on the dialog. You copy/paste the ",(0,a.kt)("strong",{parentName:"p"},"javascript"),"\ninto the HTML pages. In a containerized environment, you would need to rebuild and\ndeploy the containers."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28101).Z,width:"1113",height:"431"})),(0,a.kt)("p",null,"Robot Shop has already done some of work for you. When you deploy the\napplication, you can pass parameters into the helm install. There are two\nparameters within the ",(0,a.kt)("strong",{parentName:"p"},"javascript")," that we will need to copy and use when we\ninstall the Robot Shop application. You will need the ",(0,a.kt)("strong",{parentName:"p"},"key")," and the\n",(0,a.kt)("strong",{parentName:"p"},"reportingURL"),". Either copy those parameters now or leave this dialog open\nthat you can retrieve it later."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(77270).Z,width:"1024",height:"429"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"43-install-robot-shop"},"4.3: Install Robot Shop"),(0,a.kt)("p",null,"The full installation instructions for ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/instana/robot-shop"},"https://github.com/instana/robot-shop")," You'll notice that there are instructions\nfor installing ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," into a number of different environments including\ndocker, kubernetes, and OpenShift. This lab uses an OpenShift environment, so\nwe'll be following those steps."),(0,a.kt)("p",null,"We have documented the steps below, so there is no need to refer to the GitHub\ninstructions."),(0,a.kt)("p",null,"Login to the ",(0,a.kt)("strong",{parentName:"p"},"control node")," to execute the following steps."),(0,a.kt)("p",null,"Make sure you are in the ",(0,a.kt)("strong",{parentName:"p"},"jammer")," user's home directory ",(0,a.kt)("strong",{parentName:"p"},"(/home/jammer)"),"."),(0,a.kt)("p",null,"Clone the GitHub repository by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/instana/robot-shop.git\n\n")),(0,a.kt)("p",null,"change directory into the ",(0,a.kt)("strong",{parentName:"p"},"robot-shop/K8s")," directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd robot-shop/K8s\n\n")),(0,a.kt)("p",null,"Within the control node, you are already logged into the OpenShift cluster and\ncan begin issuing ",(0,a.kt)("strong",{parentName:"p"},"oc")," commands."),(0,a.kt)("p",null,"Double check to make sure you are logged into the ",(0,a.kt)("strong",{parentName:"p"},"Application")," OpenShift\ncluster. To do that, run ",(0,a.kt)("strong",{parentName:"p"},"oc get projects")," and grep for qotd. You should see\nthe qotd and qotd-load projects listed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get projects | grep qotd\n")),(0,a.kt)("p",null,"Create an OpenShift ",(0,a.kt)("strong",{parentName:"p"},"project (workspace)")," for the ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," application\nby issuing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc adm new-project robot-shop\n\n")),(0,a.kt)("p",null,"Next, setup ",(0,a.kt)("strong",{parentName:"p"},"privileges")," within the cluster for the ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," application\nby issuing the following two commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc adm policy add-scc-to-user anyuid -z default -n robot-shop\noc adm policy add-scc-to-user privileged -z default -n robot-shop\n\n")),(0,a.kt)("p",null,"Install the ",(0,a.kt)("strong",{parentName:"p"},"Robot Shop")," by issuing the following helm command."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You'll need to replace <EUM Key",">"," with the ",(0,a.kt)("strong",{parentName:"li"},"key")," value that you obtained in\nsection 4.2 from the Instana user interface."),(0,a.kt)("li",{parentName:"ul"},"The <Reporting URL",">"," is the ",(0,a.kt)("strong",{parentName:"li"},"reportingURL")," you obtained in section 4.2. ",(0,a.kt)("strong",{parentName:"li"},"Do\nnot include the trailing slash ( / ).")))),(0,a.kt)("admonition",{title:"Example",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"helm install robot-shop --set openshift=true --set eum.key=m-IMxZYFQyW_n7Xo0VRjrw --set eum.url=http://<your server IP>:2999 -n robot-shop helm")),(0,a.kt)("p",{parentName:"admonition"},"Notice that there is no slash ( / ) following 2999.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install robot-shop --set openshift=true  --set eum.key=<EUM Key> --set eum.url=<Reporting URL> -n robot-shop helm\n\n")),(0,a.kt)("p",null,"If successful, you should see the results similar to what's shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71540).Z,width:"540",height:"156"})),(0,a.kt)("p",null,"Next, change to the robot-shop project within OpenShift by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc project robot-shop\n\n")),(0,a.kt)("p",null,"Check whether the pods are running by typing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods\n")),(0,a.kt)("p",null,"If the install was successful, you'll see the following pods running."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64194).Z,width:"464",height:"240"})),(0,a.kt)("p",null,"If some of the pods show ",(0,a.kt)("strong",{parentName:"p"},"0/1")," instead of ",(0,a.kt)("strong",{parentName:"p"},"1/1")," in the READY column or the\npods aren't in a ",(0,a.kt)("strong",{parentName:"p"},"Running")," state, wait a couple more minutes and issue the\n",(0,a.kt)("strong",{parentName:"p"},"oc get pods")," command again. It can take as much as 7 or 8 minutes before all\nof the pods are running. If you don't want to wait, you can proceed to the next\nsteps."),(0,a.kt)("p",null,"Finally, if you want to bring up the Robot Shop user interface, you need to\nexpose the service as a route. Issue the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc expose service web\n\n")),(0,a.kt)("p",null,"Now, issue the ",(0,a.kt)("strong",{parentName:"p"},"oc get route")," command to get the route to the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get route\n\n")),(0,a.kt)("p",null,"The result should look similar to: ",(0,a.kt)("strong",{parentName:"p"},"web-robot-shop.<cluster domain",">")),(0,a.kt)("p",null,"Paste the route into a browser and you'll see the Robot Shop user interface.\nWithin your browser, make sure you specify http instead of https."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"44-setup-automated-load"},"4.4: Setup Automated Load"),(0,a.kt)("p",null,"Now that the application is running, you will want to generate some traffic\nagainst the application."),(0,a.kt)("p",null,"Within the same directory, issue the following command to install the load\ngeneration pod."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc apply -f load-deployment.yaml\n")),(0,a.kt)("p",null,"Run the ",(0,a.kt)("strong",{parentName:"p"},"oc get pods")," command. You should see an additional pod named ",(0,a.kt)("strong",{parentName:"p"},"load"),"\nrunning within the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods\n\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75722).Z,width:"464",height:"257"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"45-summary"},"4.5: Summary"),(0,a.kt)("p",null,"In this section, you learned how to install an application that includes\nmonitoring and configure it for Website EUM/RUM monitoring."),(0,a.kt)("p",null,"Now, proceed to section 5 where you will configure the monitoring for IBM MQ and\nIBM App Connect Enterprise (ACE)."),(0,a.kt)("hr",null))}c.isMDXComponent=!0},59045:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/addWebsite-7c91b25a07286ee61da4f44f60fc32c3.png"},71540:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/install-958da7a437433bf777398fec8b5678bb.png"},75722:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/load-88bc78bd0356609316559e75c9582dea.png"},64194:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/pods-f374be5839cf2e761a3a1ed4b37212b0.png"},77270:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/websiteConfig-c96443c0fdbfb19415ce72a916ca4802.png"},28101:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/websiteConfig2-da13680b915cdeac3284d9885cba48e1.png"}}]);