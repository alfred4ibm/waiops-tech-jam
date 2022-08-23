"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[4039,1532],{3624:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(7294),a=n(8650),r=n.n(a),i=n(1597),s=n(4799),l=n(3448),c=n(5900),p=n.n(c),m=function(e){var t,n=e.title,a=e.theme,r=e.tabs,i=void 0===r?[]:r;return o.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===a,t))},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},u=function(e){var t=e.relativePagePath,n=e.repository,a=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,s=r.baseUrl,l=r.subDirectory,c=s+"/edit/"+r.branch+l+"/src/pages"+t;return s?o.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"bx--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=n(4703),h=n(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,s=a.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),l=n===s,c=new RegExp(s+"/?(#.*)?$"),m=a.replace(c,n);return o.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},o.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"bx--grid"},o.createElement("div",{className:"bx--row"},o.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},o.createElement("nav",{"aria-label":t},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(o.Component),k=g,b=n(7296),y=n(5387),f=n(3732),v=function(e){var t=e.date,n=new Date(t);return t?o.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(f.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,n=e.children,a=e.location,c=e.Title,p=t.frontmatter,h=void 0===p?{}:p,g=t.relativePagePath,f=t.titleType,N=h.tabs,w=h.title,X=h.theme,O=h.description,E=h.keywords,x=h.date,P=(0,y.Z)().interiorTheme,A=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=A?a.pathname.replace(A,""):a.pathname,T=N?S.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",C=X||P;return o.createElement(l.Z,{tabs:N,homepage:!1,theme:C,pageTitle:w,pageDescription:O,pageKeywords:E,titleType:f},o.createElement(m,{title:c?o.createElement(c,null):w,label:"label",tabs:N,theme:C}),N&&o.createElement(k,{title:w,slug:S,tabs:N,currentTab:T}),o.createElement(b.Z,{padded:!0},n,o.createElement(u,{relativePagePath:g}),o.createElement(v,{date:x})),o.createElement(d.Z,{pageContext:t,location:a,slug:S,tabs:N,currentTab:T}),o.createElement(s.Z,null))}},3520:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return d}});var o=n(3366),a=(n(7294),n(4983)),r=n(3624),i=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},c=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:s},u=r.Z;function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(u,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"AnchorLinks"},(0,a.kt)(p,{mdxType:"AnchorLink"},"3-1: Overview"),(0,a.kt)(p,{mdxType:"AnchorLink"},"3-2: Enable Nodeports"),(0,a.kt)(p,{mdxType:"AnchorLink"},"3-3: Gather the cluster connection information"),(0,a.kt)(p,{mdxType:"AnchorLink"},"3-4: Configure probe to connect to the cluster"),(0,a.kt)(p,{mdxType:"AnchorLink"},"3-5: Start Simnet probe")),(0,a.kt)("h2",null,"3-1: Overview"),(0,a.kt)("p",null,"This module focuses on configuring and connecting an on-premise Netcool/Probe to the Event Manager.  In most demonstration or POC scenarios, there will be an existing on-premise Netcool deployment present, and there will be a need to connect that environment to the system running on OpenShift. Typically this will involve connecting Probes or uni-directional ObjectServer Gateways into the Event Manager, to provide a source of events."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," This module uses on-premise OMNIbus probe that you want to connect into your Event Manager system.\nOMNIbus Probe server is pre-installed for you on VM (pi-template) in your environment, including Simnet Probe under /home/scadmin/IBM/tivoli/netcool\nYou can connect to this VM using ",(0,a.kt)("inlineCode",{parentName:"p"},"sh pi-template")," from your control node."),(0,a.kt)("p",null,"This deployment scenario will assume you are deploying onto IBM Cloud however the steps would generally apply to an OpenShift cluster deployed on another cloud provider or on-premise."),(0,a.kt)("p",null,"By the end of this module, you will have enabled the ObjectServer nodeports on your cluster, configured your on-premise Netcool/OMNIbus system to connect to the ObjectServer embedded within Event Manager, and connected a Probe."),(0,a.kt)("h2",null,"3-2: Enable Nodeports"),(0,a.kt)("p",null,"Behind the scenes, the event stores in Watson for AIOps Event Manager are Netcool/OMNIbus ObjectServers. These are running in containers and are not accessible outside the cluster by default. This first step involves modifying your Event Manager deployment to activate the nodeports."),(0,a.kt)("p",null,"Log in to your OpenShift UI and navigate to: ",(0,a.kt)("strong",{parentName:"p"},"Operators → Installed Operators → IBM Cloud Pak for Watson AIOps Event Manager → NOI"),"."),(0,a.kt)("p",null,"Next, click on your deployment - for example: ",(0,a.kt)("strong",{parentName:"p"},"evtmanager")," - and then click on the ",(0,a.kt)("strong",{parentName:"p"},"YAML")," tab."),(0,a.kt)("p",null,"Add a new sub-section to the ",(0,a.kt)("strong",{parentName:"p"},"spec"),": section in your configuration with the following text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  helmValuesNOI:\n    global.service.nodePort.enable: true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": the spacing and indentation is important here."),(0,a.kt)("p",null,"After you have added this sub-section and clicked Save, the resulting configuration should look something like the following:"),(0,a.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"933px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADXUlEQVQ4y52TTU8bVxiFvSHbgmfGM57x+M6nPZ6xxx9AQFRpBYESNQGSdFVV6h9rEj6lRgr0h3RJAyUkSJWqVmRTlUAwCKqnmoudkBQW6ZWO7u7ROe9531zg+7R0nempKdJmihAC13UZGhpi4MYNBgYGPkk5P6ySKahEOF6AWSozcnOctbU11lZXefr0R9afPWNjY4ONjZ/kv76+fq1yzc4ojdYwUZLiVWqUhMfMnbv835erxg38zJ1fwa/UsITH7Owsz/845OffDnm1t8fuqz1+/3OfNwcHHB8fc35+ztnZ2ZWSwEqUYDs+wgsxrDKTt2d4/dcBfx91OXrb5c3RW44ODzk5OeH09JRut3stNNe+OcHk9FdM3PqSzuiYjH5v4QHd42MZofsPnH9K5PFbU9yeucPk9CxfTE4zMjbBt999z/7+a3Ze7LK1tc32zi7bOy/5dXuLly822Xr+C5ubm1cqF9eb0lU/sm7a3J2/zw+Pl4jqbUy3guOYOELHs/PU3M8Q1iCONYhdHJTrdVm5uNGi0ezIQrwwomg7zN9/yOPFFeqtUdwoRVQSTMNA0woMKRqqqlEoaBQ0De0j5TJ3WTFuUJVQwxJyho8Wl6VD2w3xGqPYfoTreIhSAdNQJTTTf4Bpe0QC+2tjSoff8GhxhaQ5LIFu3EZETZxqg6pvEHt5Ik+hbKk9qNqT1t/D2oXDLHJJMLfwQEZOmiPYboCIUtykQzmI0QsaRUPFtlTM4gXoPVQjl6QteSkZ0LsEfLK02gNmDjs48TB2kCC8KqbwMa0yRcNCVS9A/fiylFq9eRG5V8rcwkMWl9dkKXJ2lRpxqGOVTHTDlOUoinoJ9lHkDJitT1CN5aXIyEurxOmwvG2n1qLiG9SDQUInTyAUbFOlqH8Ytxe5TWt4VEIvR84cpp0xSo6PF7doVlVaUZ56qFDzFdm0cRUwjBL6xWRAuTbzmcMVao3OO4eBb5EECo1Qkb+qXbM22XVkymaYAbNL+frefG+GIxLotz4njBPScBBh5SkV82hqHlXpS0FRFFRVIZe129c74NwCT5YvWi77Vfx0XDYtnBKOW6YsbExbYJSELNEolTEtm2LRvBp4d25B7uH7yG3soIaotaXKlRSvmiLcEMMsoRdNDKOIrhv8C+zdBDfctqy0AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"0 yaml",title:"0 yaml",src:"/waiops-tech-jam/static/9d068551b937e6c60205d350ed2e2637/592d2/0_yaml.png",srcSet:["/waiops-tech-jam/static/9d068551b937e6c60205d350ed2e2637/7fc1e/0_yaml.png 288w","/waiops-tech-jam/static/9d068551b937e6c60205d350ed2e2637/a5df1/0_yaml.png 576w","/waiops-tech-jam/static/9d068551b937e6c60205d350ed2e2637/592d2/0_yaml.png 933w"],sizes:"(max-width: 933px) 100vw, 933px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," In this screenshot, other properties have also been added. The key added lines are only lines ",(0,a.kt)("strong",{parentName:"p"},"196")," and ",(0,a.kt)("strong",{parentName:"p"},"198"),"."),(0,a.kt)("p",null,"After you have saved the configuration, OpenShift will detect the change, and redeploy the relevant services."),(0,a.kt)("p",null,"For more information on this step, see the following documentation link: ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-identifying-proxy-listening-port"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-identifying-proxy-listening-port")),(0,a.kt)("h2",null,"3-3: Gather the cluster connection information"),(0,a.kt)("p",null,"This step involves compiling information about the cluster’s certificate common name (CN) and acquiring the cluster certificate for import into the Probe server (pi-template)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a) Find IP address of Cluster Ingress documentation")),(0,a.kt)("p",null,"In the previous module 2-6 , you identified the Ingress subdomain from the IBM Cloud UI, from the information relating to your cluster. From the control node execute following commands:"),(0,a.kt)("p",null,"Ping the Ingress subdomain to find the ",(0,a.kt)("strong",{parentName:"p"},"IP address")," to use to communicate with the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\nping swat01-4693fb98e216XXXXXXXXXXX-0000.us-east.containers.appdomain.cloud\n\nPING swat01-4693fb98e21XXXXXXXXXXXXx-0000.us-east.containers.appdomain.cloud (5X.XXX.XX.XXX) 56(84) bytes of data.\n64 bytes from evtmanager-proxy.noi.svc (5X.XXX.XX.XXX): icmp_seq=1 ttl=46 time=89.2 ms\n^C\n--- swat01-4693fb98e216d6XXXXXXXXXXXXXX-0000.us-east.containers.appdomain.cloud ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, time 1001ms\nrtt min/avg/max/mdev = 89.216/93.100/96.985/3.896 ms\n")),(0,a.kt)("p",null,"We will use IP address: 5X.XXX.XX.XXX from above output to communicate with the cluster."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"b) Find Nodeport for proxy server running in OCP cluster")),(0,a.kt)("p",null,"Next, log in to the OpenShift cluster via the command line, as you did in the previous module. To check that the nodeports have been successfully deployed, you can query the Proxy Service, and check its output for the nodeport values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get service -o yaml evtmanager-proxy -n noi | grep nodePort\n")),(0,a.kt)("p",null,"Output looks like :"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"    nodePort: 30846\n    nodePort: 31746")),(0,a.kt)("p",null,"From the output above, you can see that the nodeports have been deployed on ports ",(0,a.kt)("strong",{parentName:"p"},"30846")," for the primary ObjectServer and ",(0,a.kt)("strong",{parentName:"p"},"31846")," for the backup. These are the port numbers that are externally accessible to the cluster and are what your Netcool Probe (or in-bound Netcool Gateway) will use to connect."),(0,a.kt)("p",null,"c) ",(0,a.kt)("strong",{parentName:"p"},"Extract Openshift cluster certificate")),(0,a.kt)("p",null,"Use the OpenSSL command to retrieve the x.509 certificate that is returned by the proxy and verify the certificate common name (CN). You need to again use the Ingress subdomain value in conjunction with the nodeport value you discovered in Step 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openssl s_client -showcerts -connect swat01-469XXXXXXXXXXXXXXXXXXXXXXXXXc049-0000.us-east.containers.appdomain.cloud:32767\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CONNECTED(00000003)\ndepth=1 CN = openshift-service-serving-signer@1645115959\nverify return:1\ndepth=1 CN = openshift-service-serving-signer@1645115959\nverify return:1\ndepth=0 CN = evtmanager-proxy.noi.svc\nverify return:1\nCertificate chain\n0 s:CN = evtmanager-proxy.noi.svc\n...\n")),(0,a.kt)("p",null,"Here you can see the proxy service name ",(0,a.kt)("strong",{parentName:"p"},"evtmanager-proxy.noi.svc")," being used by the server, that is associated with the certificate, and that it matches the hostname returned by the ping command earlier. This is important because the hostname we use to connect to the cluster must match that referred to in the certificate in order for the SSL connection to work correctly."),(0,a.kt)("p",null,"Finally, download the certificate from the cluster using the oc utility:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"oc get secrets/signing-key -n openshift-service-ca -o template='{{index .data \"tls.crt\"}}' | base64 --decode > cluster-ca-cert.pem \n")),(0,a.kt)("p",null,"Copy this file (cluster-ca-cert.pem) to the Probe server (pi-template) in preparation for the next step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scp cluster-ca-cert.pem jammer@pi-template:/tmp/\n")),(0,a.kt)("p",null,"For more information on this step, see the following documentation link: ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-configuring-tls-encryption-red-hat-openshift"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-configuring-tls-encryption-red-hat-openshift")),(0,a.kt)("h2",null,"3-4: Configure probe to connect to the cluster"),(0,a.kt)("p",null,"Now that we have the proxy service hostname, the nodeport of the primary ObjectServer, and the cluster’s certificate, we are ready to configure the On-premise Probe to connect to the Event Manager running in OCP."),(0,a.kt)("p",null,"a) Log in to the OMNIBus Probe server (pi-template)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi-template\n")),(0,a.kt)("p",null,"b) Add an entry to the /etc/hosts file with the cluster IP address and the proxy service hostname obtained previously:"),(0,a.kt)("p",null,"From control node ssh into pi-template VM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo vi /etc/hosts\n\n")),(0,a.kt)("p",null,"5X.XXX.XX.XXX evtmanager-proxy.noi.svc"),(0,a.kt)("p",null,"This is the hostname (evtmanager-proxy.noi.svc) that we are going to use in omni.dat interfaces file."),(0,a.kt)("p",null,"c) Add new interfaces entry in $NCHOME/etc/omni.dat, representing the primary ObjectServer running in OpenShift (please do not delete exising entries):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[ROKS_AGG_P]\n{\n Primary: noi-proxy.noi.svc ssl 32767\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The entry contains the string ssl which indicates that an encrypted connection should be used."),(0,a.kt)("p",null,"d) Run nco_igen to update the interfaces file information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$NCHOME/bin/nco_igen\n")),(0,a.kt)("p",null,"e) Create Keystore for Cerificate:"),(0,a.kt)("p",null,"If you haven’t already created one previously, create a keystore on your Probe server to import the certificate into:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'export NCHOME=/home/scadmin/IBM/tivoli/netcool\n$NCHOME/bin/nc_gskcmd -keydb -create -db "$NCHOME/etc/security/keys/omni.kdb" -pw password -stash -expire 1000\n')),(0,a.kt)("p",null,"f) Copy the certificate you downloaded in Step 2 to the Probe server, and import it into your newly created keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$NCHOME/bin/nc_gskcmd -cert -add -file /tmp/cluster-ca-cert.pem -db $NCHOME/etc/security/keys/omni.kdb -stashed\n")),(0,a.kt)("p",null,"g) Use the nco_ping utility to test the connection the ObjectServer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$NCHOME/omnibus/bin/nco_ping ROKS_AGG_P\n")),(0,a.kt)("p",null,"Output:\n",(0,a.kt)("inlineCode",{parentName:"p"},"NCO_PING: Server available.")),(0,a.kt)("p",null,"You are now ready to connect your Probe."),(0,a.kt)("p",null,"For more information on this step, see the following documentation link: ",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-configuring-tls-encryption-red-hat-openshift"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=service-configuring-tls-encryption-red-hat-openshift")),(0,a.kt)("h2",null,"3-5: Start Simnet probe"),(0,a.kt)("p",null,"The final step is to configure the Probe to connect to the primary ObjectServer running in OpenShift. "),(0,a.kt)("p",null,"Using the Simnet Probe as an example, run the Probe in debug mode to ensure that the Probe can connect to the ObjectServer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export OMNIHOME=/home/scadmin/IBM/tivoli/netcool/omnibus\n$OMNIHOME/probes/nco_p_simnet -server ROKS_AGG_P -messagelevel debug -messagelog stdout\n")),(0,a.kt)("p",null,"You can check events in Event viewer sent via Simnet probe."),(0,a.kt)("p",null,"After verifying successful connect to the ObjectServer, you can run the Probe outside of debug mode, normally under Process Agent control."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://community.ibm.com/community/user/aiops/blogs/zane-bray1/2022/04/13/getting-started-with-watson-aiops-event-manager-27"},"Reference Blog")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-aiops-connections-index-mdx-8afed62c20d84633824c.js.map