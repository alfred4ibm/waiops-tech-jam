"use strict";(self.webpackChunkswat_hub=self.webpackChunkswat_hub||[]).push([[5219],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||g[h]||i;return n?a.createElement(m,s(s({ref:e},c),{},{components:n})):a.createElement(m,s({ref:e},c))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50604:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"3. Agent Installation",description:"How to install, configure and troubleshoot Instana agent",sidebar_position:3},s=void 0,r={unversionedId:"instana/agent-installation/index",id:"instana/agent-installation/index",title:"3. Agent Installation",description:"How to install, configure and troubleshoot Instana agent",source:"@site/labs/instana/3-agent-installation/index.mdx",sourceDirName:"instana/3-agent-installation",slug:"/instana/agent-installation/",permalink:"/waiops-tech-jam/labs/instana/agent-installation/",draft:!1,editUrl:"https://github.com/IBM/waiops-tech-jam/tree/main/labs/instana/3-agent-installation/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Agent Installation",description:"How to install, configure and troubleshoot Instana agent",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Instana Server Installation",permalink:"/waiops-tech-jam/labs/instana/server-installation/"},next:{title:"4. Install the Robot Shop Application",permalink:"/waiops-tech-jam/labs/instana/robot-shop-installation/"}},l={},p=[{value:"3.1: Instana Agent Deployment Options",id:"31-instana-agent-deployment-options",level:2},{value:"3.2: Installing Instana Agent on a Linux VM",id:"32-installing-instana-agent-on-a-linux-vm",level:2},{value:"3.3: Installing Instana Agent on the Instana Server",id:"33-installing-instana-agent-on-the-instana-server",level:2},{value:"3.4: Installing Instana Agent on OpenShift Cluster",id:"34-installing-instana-agent-on-openshift-cluster",level:2},{value:"3.5: Troubleshooting Instana Agent Installation on Kubernetes Cluster",id:"35-troubleshooting-instana-agent-installation-on-kubernetes-cluster",level:2},{value:"3.6: Configuring Proxy",id:"36-configuring-proxy",level:2},{value:"3.7: Configuring Instana Agent",id:"37-configuring-instana-agent",level:2},{value:"3.8: Agent Configuration Troubleshooting",id:"38-agent-configuration-troubleshooting",level:2},{value:"3.9: Configuring GitOps for Agents",id:"39-configuring-gitops-for-agents",level:2}],c={toc:p};function g(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"31-instana-agent-deployment-options"},"3.1: Instana Agent Deployment Options"),(0,o.kt)("p",null,"Instana has a variety of agent installation options including the mirror\nrepository and static agents that allow customers to meet strict change control\nprocesses. Some of the available options are listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS specific installer (Linux, MacOS, Windows, UNIX)"),(0,o.kt)("li",{parentName:"ul"},"Container setup"),(0,o.kt)("li",{parentName:"ul"},"Docker (and other container managers)"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes"),(0,o.kt)("li",{parentName:"ul"},"OpenShift"),(0,o.kt)("li",{parentName:"ul"},"Hosted Cloud Services"),(0,o.kt)("li",{parentName:"ul"},"Serverless component")),(0,o.kt)("p",null,"All above mentioned methods are accessible via the wizard on the Instana UI"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22147).Z,width:"840",height:"472"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the Instana user interface is not available, go back and look at the command\nprompt where you issued the ",(0,o.kt)("strong",{parentName:"p"},"instana update")," command to change the\nconfiguration parameters. The command may still be running. The user interface\nwon't be available until the update is complete.")),(0,o.kt)("p",null,"You begin by choosing the platform where you will be installing the agent. Then\nyou can selected the ",(0,o.kt)("strong",{parentName:"p"},"Technology")," dropdown and choose from a list of\ninstallation options. For example, on Linux, you can choose a automatic\n",(0,o.kt)("strong",{parentName:"p"},"one-liner")," installation, RPM, or TAR file installation. For\nOpenShift/kubernetes, you have multiple options including operator, helm, and\nyaml installs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3823).Z,width:"840",height:"472"})),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Instana agent install requires ",(0,o.kt)("strong",{parentName:"p"},"root")," privileges.")),(0,o.kt)("p",null,"When installing Instana agent you have to select if you want the agent to be\n",(0,o.kt)("strong",{parentName:"p"},"dynamic")," or ",(0,o.kt)("strong",{parentName:"p"},"static")," based on whether it can update itself or not. Here is\nthe excerpt from the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/SSE1JP5_current/src/pages/setup_and_manage/host_agent/index.html"},"Instana agent documentation"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"Dynamic")," host agent downloads on startup the latest set of sensors from\nrepositories. By default, a dynamic agent updates itself daily with the latest\nand greatest capabilities that are released. It is also possible to tightly\ncontrol the updating of dynamic host agents by\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=agent-updates-dynamic-host-agents#version-pinning"},"pinning a version")),(0,o.kt)("p",{parentName:"li"},"By default, dynamic host agents use the Instana repository to pull updates,\nbut it is possible to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=agent-repositories#agent-repositories"},"set up your own managed mirror"),".\nCurrently, the mirror must be a Nexus repository. This is probably the best\noption for must customers because it allows them the benefits of automatic\nupdates, while at the same time controlling the content that is in the\nrepository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("strong",{parentName:"p"},"Static"),' host agent is a self-contained host agent that includes all the\nlatest available components at the time of its release, and has no dynamic\nupdate capabilities. The static host agent has a stable "bill of materials"\nthat never changes after the host agent\'s installation.'))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Static host agents require no internet connection to the Instana repository, and\nare recommended in restrictive network setups.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"32-installing-instana-agent-on-a-linux-vm"},"3.2: Installing Instana Agent on a Linux VM"),(0,o.kt)("p",null,"We will start by installing the Instana Agent on the Linux VM that is running\nIBM MQ and IBM ACE."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"architecture-agent-mqace-vm",src:n(31620).Z,width:"991",height:"781"})),(0,o.kt)("p",null,"You will be installing the Instana Agent on the ACE/MQ server that has been\nprovisioned for you for this lab. Open a new terminal tab by selecting ",(0,o.kt)("strong",{parentName:"p"},"File"),"\n-> ",(0,o.kt)("strong",{parentName:"p"},"New Tab"),"."),(0,o.kt)("p",null,"SSH to the ACE/MQ server as follows:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When prompted if you want to continue connecting, type: ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh jammer@mqace\n")),(0,o.kt)("p",null,"Then use sudo to switch to root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n")),(0,o.kt)("p",null,"In Instana UI, select the ",(0,o.kt)("strong",{parentName:"p"},'"Stan"')," the robot icon in the upper left corner"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9687).Z,width:"61",height:"55"})),(0,o.kt)("p",null,"Next, click the ",(0,o.kt)("strong",{parentName:"p"},'"Deploy Agent"')," button near the upper right corner."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(91490).Z,width:"1907",height:"231"})),(0,o.kt)("p",null,"A window will open with a list of different environments where you can install\nthe Instana Agent. This is a Linux server, so select Linux on the left side of\nthe screen."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(34769).Z,width:"1360",height:"538"})),(0,o.kt)("p",null,"Just to see what your options are, select the ",(0,o.kt)("strong",{parentName:"p"},'"Technology"')," dropdown list to\nsee the different ways that you can install the Instana Agent. You'll notice\nthat you can perform rpm installs or simply download a tar file. But, the\neasiest method is the default one, ",(0,o.kt)("strong",{parentName:"p"},'"Automatic Installation (One-Liner)"'),".\nSelect that option in the dropdown list."),(0,o.kt)("p",null,"Notice that there are a few other options including the use of different java\nversions, static vs. dynamic agents, etc. Leave the default settings."),(0,o.kt)("p",null,"Next, select the checkbox next to ",(0,o.kt)("strong",{parentName:"p"},'"Install and start as service"'),". This will\nsetup the systemctl autostart process and will also start the Agent immediately\nafter it is installed."),(0,o.kt)("p",null,"Finally, copy and paste the curl command into the terminal window and answer\n",(0,o.kt)("strong",{parentName:"p"},"y")," when prompted. Once complete you will see the below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(28359).Z,width:"2290",height:"896"})),(0,o.kt)("p",null,"At this point the Agent is installed and up and running."),(0,o.kt)("p",null,"The Agent will automatically start monitoring the operating system and start\ndiscovering key processes and middleware. In many cases it will automatically\ninstrument those technologies. In the case of some technologies (eg. MQ an and\nApp Connect Enterprise), there are manual configuration steps required due to\nthe need to provide credentials for accessing those applications."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"33-installing-instana-agent-on-the-instana-server"},"3.3: Installing Instana Agent on the Instana Server"),(0,o.kt)("p",null,"Next, you will install the Instana agent on the Instana server."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"architecture-agent-mqace-vm",src:n(2249).Z,width:"991",height:"781"})),(0,o.kt)("p",null,"You can navigate back to your first tab still logged into the ",(0,o.kt)("strong",{parentName:"p"},"instana")," host\nor from a terminal ssh to the Instana server again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh jammer@instana\n")),(0,o.kt)("p",null,"Switch to root"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -i\n")),(0,o.kt)("p",null,"In the Instana UI, from the ",(0,o.kt)("strong",{parentName:"p"},"Installing Instana Agents")," screen select\n",(0,o.kt)("strong",{parentName:"p"},"Docker")," this time."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you aren't still on the ",(0,o.kt)("strong",{parentName:"p"},"Installing Instana Agents")," screen you can get\nthere by selecting the ",(0,o.kt)("strong",{parentName:"p"},'"Stan"')," robot icon in the upper left corner"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(9687).Z,width:"61",height:"55"})),(0,o.kt)("p",{parentName:"admonition"},"and clicking the ",(0,o.kt)("strong",{parentName:"p"},'"Deploy Agent"')," button near the upper right corner."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(91490).Z,width:"1907",height:"231"}))),(0,o.kt)("p",null,"At the top of the page you will see an entry box where you can specify a\n",(0,o.kt)("strong",{parentName:"p"},"Zone"),". Specify a zone name such as ",(0,o.kt)("strong",{parentName:"p"},"instana"),". Then, copy the docker run\ncommand and past it into the terminal window."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you are pasting it into the ",(0,o.kt)("strong",{parentName:"p"},"root@instana")," vm.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(44893).Z,width:"981",height:"457"})),(0,o.kt)("p",null,"This will install the Instana Agent as a docker container running on the Instana\nServer machine."),(0,o.kt)("p",null,"Once complete if you issue a ",(0,o.kt)("strong",{parentName:"p"},"docker ps")," command, you'll see that there is a\nnew docker container running. This container is the Instana agent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker ps | grep agent\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"docker ps agent",src:n(8972).Z,width:"3502",height:"96"})),(0,o.kt)("p",null,"Once installed, the Agent will begin to collect host metrics and will discover\nthe various technologies like Cassandra, ClickHouse, ElasticSearch, Nginx,\nNode.js, and more. Many of these technologies will be monitored automatically\nwithout the need for configuration. In some cases, the sensors need to be\nconfigured in order to see the performance metrics."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"34-installing-instana-agent-on-openshift-cluster"},"3.4: Installing Instana Agent on OpenShift Cluster"),(0,o.kt)("p",null,"The next step is to install the Instana Agent into the ",(0,o.kt)("strong",{parentName:"p"},"Apps")," OpenShift\nCluster that we'll be using to host our demo applications ",(0,o.kt)("em",{parentName:"p"},"Robot Shop")," and\n",(0,o.kt)("em",{parentName:"p"},"Quote of the Day"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"architecture-agent-ocp",src:n(72130).Z,width:"991",height:"781"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'Throughout this lab, we will be using the "oc" command to run commands within\nOpenShift. The "oc" command is similar to kubectl for other versions of\nKubernetes. There are some minor syntax differences.')),(0,o.kt)("p",null,"Open another tab in your terminal so you are back on the local bastion host\n(admin@bastion-gym-lan)."),(0,o.kt)("p",null,"Check to make sure you are in the right place by running the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc cluster-info --kubeconfig kubeconfig-apps\n")),(0,o.kt)("p",null,"You should see the following output, specifically the url\n",(0,o.kt)("inlineCode",{parentName:"p"},"https:api.sno.techzone.lan:6443"),". If you don't try opening a new tab or\nterminal window and trying again."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"check-cluster",src:n(5609).Z,width:"1786",height:"102"})),(0,o.kt)("p",null,"Follow the steps below to install the Agent into the cluster:"),(0,o.kt)("p",null,"Set the correct cluster to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export KUBECONFIG=~/kubeconfig-apps\n")),(0,o.kt)("p",null,"Set permissions for the Instana Agent to allow the Agent to have access to\nmonitor the entire cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc adm policy add-scc-to-user privileged -z instana-agent --kubeconfig kubeconfig-apps\n")),(0,o.kt)("p",null,"Again from the ",(0,o.kt)("strong",{parentName:"p"},"Installing Instana Agents")," screen select OpenShift from the\nlist."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(45017).Z,width:"274",height:"645"})),(0,o.kt)("p",null,"Select the dropdown list next to the word ",(0,o.kt)("strong",{parentName:"p"},'"Technology"'),". Notice that there\nare multiple options for installing the Agent. Choose the ",(0,o.kt)("strong",{parentName:"p"},'"Helm chart"'),"\noption from the list."),(0,o.kt)("p",null,"Set the ",(0,o.kt)("strong",{parentName:"p"},"Cluster name")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"SNO")," and the ",(0,o.kt)("strong",{parentName:"p"},"Agent Zone")," name to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Quote of the Day")," since this OCP cluster will be used for the ",(0,o.kt)("strong",{parentName:"p"},"Quote of the\nDay")," application. Setting these values will allow you to find your Agent and\nKubernetes Cluster within the user interface and not get confused by data coming\nin from other agents."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Zones are used to organize the Instana Agents (and sensors). Many customers\ncreate zones for lines of business, data center locations, public cloud regions,\netc")),(0,o.kt)("p",null,"You will see output similar to what's shown below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"helm install",src:n(61936).Z,width:"2018",height:"1318"})),(0,o.kt)("p",null,"Next, view the running agent pods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n instana-agent --kubeconfig kubeconfig-apps\n")),(0,o.kt)("p",null,"This will provide a list of the pods that are running in the agent namespace\n(project). There will be one pod for each worker node in your target cluster.\nThis SNO instance only has one worker node so you will only see one pod running."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Agent is deployed as a daemonset so that if a new Worker Node is added to\nthe cluster, monitoring will automatically get added to the new Worker Node.\nCheck, if the instana-agent pods are running.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"running agent pods",src:n(11568).Z,width:"1946",height:"136"})),(0,o.kt)("p",null,'If there are no pods running, wait a minute and issue the "oc get pods" command\nagain. This completes the installation of Instana agent on OpenShift cluster.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"35-troubleshooting-instana-agent-installation-on-kubernetes-cluster"},"3.5: Troubleshooting Instana Agent Installation on Kubernetes Cluster"),(0,o.kt)("p",null,"If you don't see your cluster in Instana UI after a couple of minutes, you need\nto troubleshoot the Instana Agent. From a terminal window with connection to\nyour OCP cluster, issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n instana-agent --kubeconfig kubeconfig-apps\n")),(0,o.kt)("p",null,"Check to make sure that all pods are running (since Instana agent runs as\ndaemonset, number of pods should be equal to number of nodes in your cluster).\nIf pods are running, you can examine the logs of one of the pods. Type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc logs <POD NAME> -c instana-agent --kubeconfig kubeconfig-apps\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("strong",{parentName:"p"},"<POD NAME",">")," is one of the pods listed in the previous command."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"36-configuring-proxy"},"3.6: Configuring Proxy"),(0,o.kt)("admonition",{title:"Information Only",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,"If there is no direct connectivity for the Instana agent you may need to setup a\nproxy. There are 2 connections with 2 different locations for configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connection to ",(0,o.kt)("strong",{parentName:"li"},"Instana Backend")," - defined in\n",(0,o.kt)("em",{parentName:"li"},"INSTANA-AGENT-DIR"),"/etc/instana/com.instana.agent.main.sender.Backend.cfg"),(0,o.kt)("li",{parentName:"ul"},"Connection to ",(0,o.kt)("strong",{parentName:"li"},"Agent/Sensor Repository")," - defined in\n",(0,o.kt)("em",{parentName:"li"},"INSTANA-AGENT-DIR"),"/etc/mvn-settings.xml (This is used in case client wants to\nsetup internal maven2 mirror repository)")),(0,o.kt)("p",null,"Proxy configuration goes into the respective files. You can also use\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=requirements-installing-host-agent-docker#agent-configuration"},"environment variables")),(0,o.kt)("p",null,"For backend connectivity you have to define ",(0,o.kt)("em",{parentName:"p"},"INSTANA",(0,o.kt)("em",{parentName:"em"},"AGENT_PROXY"))," variables.\nFor repository connectivity you have to define ",(0,o.kt)("em",{parentName:"p"},"INSTANA",(0,o.kt)("em",{parentName:"em"},"REPOSITORY_PROXY")),"\nvariables."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"37-configuring-instana-agent"},"3.7: Configuring Instana Agent"),(0,o.kt)("admonition",{title:"Information Only",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,"There are multiple ways to configure the Instana agent. These instructions apply\nto the Instana Agent installed on a traditional server. Instructions would be\ndifferent for docker or kubernetes versions of the Agent. Settings related to\nagent functionality reside in ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," file located by default in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/instana/agent/etc/instana")," directory. However, other settings related to\nagent environment sits in other ","*",".cfg files."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Agent will actually read and use ANY yaml file in that directory.")),(0,o.kt)("p",null,"Some customers choose to have separate yaml files for each key technology. For\nexample, you could create a mq.yaml file and an ace.yaml file in the same\ndirectory and it would read both files. ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," will contain sample\nconfiguration entries and comments for ALL available sensors at the time of your\ninstall, ",(0,o.kt)("strong",{parentName:"p"},"BUT")," it will not automatically add new sensor config as new sensors\nbecome available."),(0,o.kt)("p",null,"For host based installation you can update ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," and agent should\npick up changes automatically (no restart required). For Kubernetes based\ninstallations, there is ",(0,o.kt)("inlineCode",{parentName:"p"},"instana-agent")," configmap where you can customize the\nsame content that you see in the configuration.yaml file. Using kubernetes/oc\ncommands, you can edit the configmap."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Instana agent configuration file must be a proper YAML - if your changes are not\napplied, make sure that it's not a formatting error")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"38-agent-configuration-troubleshooting"},"3.8: Agent Configuration Troubleshooting"),(0,o.kt)("admonition",{title:"Information Only",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,"The first place to look when the agent does not start properly or does not work\nas expected is agent log file. By default it is located in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/instana/agent/data/log/agent.log")," . This is the path for a traditional\nserver."),(0,o.kt)("p",null,"In case of Kubernetes based deployment you have to look at logs of\n",(0,o.kt)("inlineCode",{parentName:"p"},"instana-agent")," pods running in ",(0,o.kt)("inlineCode",{parentName:"p"},"instana-agent")," namespace."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"39-configuring-gitops-for-agents"},"3.9: Configuring GitOps for Agents"),(0,o.kt)("admonition",{title:"Information Only",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This section is here for informational purposes. There are no steps to execute.")),(0,o.kt)("p",null,"If you don't want to modify the Instana agent configuration files for each agent\nlocally, you can setup a centralized git repository for configuration files and\ninstruct Instana agent to use these files. To accomplish that, follow the steps\nfrom the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/obi/current?topic=configuration-git-based-management#git-based-configuration-management"},"documentation"),"."),(0,o.kt)("p",null,"The Instana agent fetches configuration updates from the remote repository:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Upon the startup or restart."),(0,o.kt)("li",{parentName:"ol"},"Through a reboot initiated over the Agent Management Dashboard."),(0,o.kt)("li",{parentName:"ol"},"Through a configuration change over the Agent Management Dashboard."),(0,o.kt)("li",{parentName:"ol"},"Through the Web API as described in the Host Agent section and the\nintegrations that rely on it like the GitHub Update Agent action.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Proceed to section 4, where you will install and instrument the Robot Shop\napplication."))}g.isMDXComponent=!0},22147:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2022-05-21-17-46-38-91386149ba29905ddba17a75e081f8ec.png"},3823:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/2022-05-21-17-48-04-06ecb8105593b338f32777bfe2f12d41.png"},91490:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/DeployAgent-47a8283a2edbdc8a539314e4dcb4b70c.png"},45017:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/OpenShift-d60041cf1a3351a87093409d549a174e.png"},11568:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/agent-pod-running-097e610d38190831e296c97d185e19e8.png"},2249:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-agent-instana-vm-446b1a7de99aaceb6a1d0e6f6d793e0a.png"},31620:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-agent-mqace-vm-0c1b018b85d8cd98d00d83e08fa2b6e3.png"},72130:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/architecture-agent-ocp-b404993d3434c03974f63acbeaf3540a.png"},5609:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/check-cluster-2a5c30fbc00ebbfb7106b0179278ff95.png"},8972:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/docker-ps-agent-4720cda98e2e9213de5858c9e0809d36.png"},44893:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dockerInstall-4ae51f492c78bec28ac72663083f7bc6.png"},61936:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/helm-install-54274947c77fbc188a20185a94d70971.png"},28359:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/instana-install-result-73c91180edd8d7781f4e2a68e4f8c70c.png"},34769:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/linuxInstall-7c34f988a82b11b5e49a2313de5de1c7.png"},9687:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/png;base64,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"}}]);