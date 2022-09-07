"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[8485,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),o=a(8650),i=a.n(o),r=a(1597),l=a(4799),s=a(3448),c=a(5900),p=a.n(c),m=function(e){var t,a=e.title,o=e.theme,i=e.tabs,r=void 0===i?[]:i;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,l=i.baseUrl,s=i.subDirectory,c=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,c=new RegExp(l+"/?(#.*)?$"),m=o.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=h,b=a(7296),f=a(5387),N=a(3732),A=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,p=t.frontmatter,g=void 0===p?{}:p,h=t.relativePagePath,N=t.titleType,y=g.tabs,w=g.title,v=g.theme,S=g.description,T=g.keywords,x=g.date,C=(0,f.Z)().interiorTheme,E=(0,r.useStaticQuery)("2456312558").site.pathPrefix,R=E?o.pathname.replace(E,""):o.pathname,B=y?R.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",U=v||C;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:U,pageTitle:w,pageDescription:S,pageKeywords:T,titleType:N},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:U}),y&&n.createElement(k,{title:w,slug:R,tabs:y,currentTab:B}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(A,{date:x})),n.createElement(u.Z,{pageContext:t,location:o,slug:R,tabs:y,currentTab:B}),n.createElement(l.Z,null))}},5440:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var n=a(3366),o=(a(7294),a(4983)),i=a(3624),r=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},c=s("AnchorLinks"),p=s("AnchorLink"),m={_frontmatter:l},d=i.Z;function u(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"AnchorLinks"},(0,o.kt)(p,{mdxType:"AnchorLink"},"2-1: Introduction"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-2: Prerequisites"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-3: Deploy the Operator"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-4: Configure the Turbonomic Instance: Custom Resource"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-5: Launch the Turbonomic User Interface"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-6: License Configuration"),(0,o.kt)(p,{mdxType:"AnchorLink"},"2-7: Summary")),(0,o.kt)("h2",null,"2-1: Introduction"),(0,o.kt)("p",null,"Installing Turbonomic platform in your OpenShift cluster:"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABJ0AAASdAHeZh94AAACi0lEQVQoz3WS228bRRSH85dWPPQVIfFQqVKFeEBFgBBqEQ8FVHhAgNrmpeISUQFRKtwkVpL1Jrbje+K1936fXc+uvbsf8jpWwwM/aeaMjjTfmTm/s8NaVVUHpITFguomVxQFSZqSWjpXgx5ChEi5YJGmWN0LLlqnxKFPHMeUZVkjdjZ3qxpSzWZUx8d1XCvLc0zTotOZ8LqhcHI+IghjgiCi0Rywd9DmtH1NGPrky+UGWG1fd1v9HqgqlUxpDTXee6zw7mOVOx8dcahMmOk27391zp2PFT7/UUUmIfly9RZYlhWpXBGJDMMOMOMFie4Q77+mvX/IJ89GPHza5oOnbTojHcNyuP9E5Z2HTb74SSUVt4DrLV9VmH5OmpWEIieMJWIFTpBg/PGK+cEb9ht/YbZ6eJrGzHR58G2Hu58pfPqDioh8lltglklm+pzrmUYiwv/8vChXmLbNVDmld3zAvKXgmyaOF/Ldywse/dzixas2Ig7fAqPE4/cnF7z4sMNkfFUn1y3YmC6Jooj+cMSgN2A4HrOQss6fNN/QPPqHbuecIAjI83wDFIuAX79W+P5ek9l8xtb1bUySpB4TeQNKRIIQAsd18TyfIAiJhWBr7U4mJZfDLq1uC9d1uD2XZVHgOg6e62LbNo5t1kvX57iui2VZTKdTosDGc4y60MaUJQSiqCELmVEUZV1RZjmXvT67v/yGPtd4vqfUPXv+5xmd4ZTG8Qm7e39zqOo0FA1N09bAqgY4YYYbZhhuUp+9eInuCLq9AUdnCtfXE9S+gXJp0L6y8cOY83aXs+6IL3f7fPNygKZN/2ewb7Rc5hiGQRxFuK6HNr2i3+syGQ8Zj0bouo5tWYS+g+9adRv+BZg2dPp511gRAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"overview 1",title:"overview 1",src:"/waiops-tech-jam/static/bba42451a004c77a4f36daf339ff6d2e/3cbba/overview-1.png",srcSet:["/waiops-tech-jam/static/bba42451a004c77a4f36daf339ff6d2e/7fc1e/overview-1.png 288w","/waiops-tech-jam/static/bba42451a004c77a4f36daf339ff6d2e/a5df1/overview-1.png 576w","/waiops-tech-jam/static/bba42451a004c77a4f36daf339ff6d2e/3cbba/overview-1.png 1152w","/waiops-tech-jam/static/bba42451a004c77a4f36daf339ff6d2e/89db1/overview-1.png 1183w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{href:"https://github.com/turbonomic/t8c-install/wiki",target:"_blank"},"t8c-install")," repository\ncontains information about installation methods, sizing, architecture and more."),(0,o.kt)("p",null,"The instructions in this lab are streamlined and contextual versions of the\ninformation from the above repository, designed to get up and running quickly\nand build out a lab or demo environment in OpenShift running in IBM Cloud."),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-2: Prerequisites"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," Perform this installation procedure from your ",(0,o.kt)("strong",{parentName:"p"},"control")," node\nas the ",(0,o.kt)("strong",{parentName:"p"},"jammer")," user.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login into the OpenShift Console UI (",(0,o.kt)("inlineCode",{parentName:"p"},"manage-from")," cluster) and get your login token:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"From the OpenShift console, click your username in the top-right."),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("em",{parentName:"li"},"Copy login command")," menu item."),(0,o.kt)("li",{parentName:"ul"},"From the new tab that opens, copy the login command from the\n",(0,o.kt)("strong",{parentName:"li"},"Log in with this token")," section."),(0,o.kt)("li",{parentName:"ul"},"Paste the copied command into your SSH terminal on your control node and\npress enter to login.")),(0,o.kt)("p",{parentName:"li"},"Validate you are logged into the correct cluster - you should see ",(0,o.kt)("strong",{parentName:"p"},"6 nodes"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get nodes\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your command prompt, issue the following command to create the namespace:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export NS=turbonomic\noc create namespace ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Turbonomic application will create PVs. To have the services access their PVs, we will use the UID value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"sa.scc.uid-range")," of the project:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export FSGROUP=$(\n    oc get ns ${NS} -o yaml | \\\n    grep uid-range | \\\n    awk '{print $2}' | \\\n    awk -F '/' '{print $1}'\n)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Custom Resource Definition (CRD) to allow Turbo operator to deploy all the necessary resources"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Kubernetes version 1.22 and higher (To check the Kubernetes version, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"oc version")," command):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/config/crd/bases/charts.helm.k8s.io_xls.yaml\n")))))),(0,o.kt)("p",null,"You are now ready to deploy the operator"),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-3: Deploy the Operator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the operator service account:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/service_account.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the cluster role:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/cluster_role.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the role binding:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/cluster_role_binding.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the operator pod:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc create -f https://raw.githubusercontent.com/turbonomic/t8c-install/master/operator/deploy/operator.yaml -n ${NS}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the operator to become available (status = running with 1/1 ready). Check the status using:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n ${NS} -w\n")),(0,o.kt)("p",{parentName:"li"},"Example output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                           READY   STATUS    RESTARTS   AGE\nt8c-operator-fdd8b8c94-dhrt4   1/1     Running   0          72s\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Type ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to exit the watch loop.")))),(0,o.kt)("p",null,"Next, we are going to configure the Turbonomic instance."),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-4: Configure the Turbonomic Instance: Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the storage class:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export STORAGE_CLASS=ibmc-block-gold\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The lab instructions assume you using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/openshift?topic=openshift-getting-started"},"Red Hat OpenShift on IBM Cloud"),".\nFor other OpenShift environments, use ",(0,o.kt)("inlineCode",{parentName:"p"},"oc get storageclass")," to select a storage class that is available in your environment."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply a custom resource file to launch Turbonomic:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cat << EOF | oc -n ${NS} apply -f -\napiVersion: charts.helm.k8s.io/v1\nkind: Xl\nmetadata:\n  name: xl-release\n  namespace: ${NS}\nspec:\n  global:\n    customImageNames: false\n    repository: registry.connect.redhat.com/turbonomic\n    securityContext:\n      fsGroup: ${FSGROUP}\n    storageClassName: ${STORAGE_CLASS}\n    storageSelector: false\n    tag: 8.4.4\n  openshiftingress:\n    enabled: true\n  kubeturbo:\n    enabled: true\n  nginx:\n    httpsRedirect: false\n    nginxIsPrimaryIngress: false\n  nginxingress:\n    enabled: false\n  instana:\n    enabled: true\nEOF\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deployment will begin for all the Turbonomic pods. Depending on the environment, this may take some time to complete, anywhere from 5 to 20 minutes.\nUse the command below to check the status of the deployment."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods -n ${NS} -w\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Type ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to exit the watch loop.")),(0,o.kt)("p",{parentName:"li"},"Ensure all the pods:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"are in a ",(0,o.kt)("inlineCode",{parentName:"li"},"Running")," state (",(0,o.kt)("inlineCode",{parentName:"li"},"STATUS")," column) and"),(0,o.kt)("li",{parentName:"ul"},"show ",(0,o.kt)("inlineCode",{parentName:"li"},"1/1")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"READY")," column.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example output only (Do not copy and paste into your terminal):")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"NAME                                   READY   STATUS    RESTARTS      AGE\naction-orchestrator-55bbb96fd8-bxv59   1/1     Running   2 (14m ago)   17m\napi-6d876bd5c8-ntpc9                   1/1     Running   0             17m\nauth-57d95cdc4f-7x7jq                  1/1     Running   0             17m\nclustermgr-5bff4bc746-9fvz4            1/1     Running   2 (14m ago)   17m\nconsul-6b979f7d9d-ncb9f                1/1     Running   0             17m\ncost-679689bcb8-9r8h7                  1/1     Running   2 (14m ago)   17m\ndb-5547b8bb9c-xjlk8                    1/1     Running   0             17m\ngroup-7c66b96cd6-jf69l                 1/1     Running   2 (14m ago)   17m\nhistory-75c89bdcdb-vcsv4               1/1     Running   2 (14m ago)   17m\nkafka-54b458c5ff-25tkp                 1/1     Running   0             17m\nkubeturbo-6b7568cbd-8gdqp              1/1     Running   0             17m\nmarket-784cd4f9fb-26879                1/1     Running   2 (14m ago)   17m\nplan-orchestrator-5fb588cdc6-wsz4l     1/1     Running   2 (14m ago)   17m\nrepository-85bb8b95c4-w85nv            1/1     Running   2 (14m ago)   17m\nrsyslog-64c7fb4467-qcj9v               1/1     Running   0             17m\nt8c-operator-fdd8b8c94-jwwj8           1/1     Running   0             18m\ntopology-processor-77f7f95c8-lmpzr     1/1     Running   0             17m\nui-6d4ff8787d-6zhm4                    1/1     Running   0             17m\nzookeeper-57658f68c6-6qdgb             1/1     Running   0             17m\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-5: Launch the Turbonomic User interface"),(0,o.kt)("p",null,"You are now ready to open a browser and login to the Turbonomic user interface."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the Turbonomic UI route after the deployment completes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get route -n ${NS} | grep api | awk '{print $2}'\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Turbonomic UI in your browser using the URL retrieved from the previous step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The first time you log in to Turbonomic, you will be prompted to create a password for the ",(0,o.kt)("inlineCode",{parentName:"p"},"administrator")," user:"),(0,o.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"712px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABJ0AAASdAHeZh94AAACCUlEQVQ4y42Uy47TMBSG+56seA4knqDqtpoNUNEll3ZVNq0om65gMeqijDQwdGaaQi9pEl+O48uPjtOknRFCc6Jfx46cz/+xY7ckCSgjoaiS5GxO4r4mjbIsYa2NmUVED2SMgdYaLXIaFiVKmCh7zKc2gUMphTRNkec5hBD4Vzjn0NJWVYBAoEAoLCErKylPMIEQECJkt9tFMZRd1q5YHFxBS7sKKBzhQBqFkVhLjbWq3jGQI8syJEmC1WrVaLlcYrvdQkp5ApJTkN7gt9DY5AUk5ch0gT1RBLJzH3wczFDvffw4hBB1Hg2QgkFWGhy4BA8I61HYEsKZB0BeRy61hrF4Aha3j0AdyxJGIJUHTJdfcLX/iUwrSCvjcjCQQezwMfBcDZDX8f3HD7h4fYHn757h5dsX6L16g2+XX5vdc9Y1i89Ru6pdNkCG8W8jywKZ+YPPvz7hev8dZCWkFdE9O2Qgl8y7XbusQY+AGgYaOuSQYYsALrOA8imk34OCjoMZUhRFFP/I7JoBtRjalCz9AbfqDvdqhRt5h0TdIzUJcruBCTp+/JTgSSugE7gRa9yKNX4UScxLscZGb6BcdSoWiwUGgwFGoxHG4zEmk0nM3B8Oh5jP53FcBJbHo2eOR+78IV9txGw2Q7vdRrfbRa/XQ7/fj5n7nU4H0+m0AsbLoZT/FV8OTwm+HP4CmtowFZHlxicAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"firstTimeLogin",title:"firstTimeLogin",src:"/waiops-tech-jam/static/4f700352e127fdb1b9451f5801ac3203/758ed/firstTimeLogin.png",srcSet:["/waiops-tech-jam/static/4f700352e127fdb1b9451f5801ac3203/7fc1e/firstTimeLogin.png 288w","/waiops-tech-jam/static/4f700352e127fdb1b9451f5801ac3203/a5df1/firstTimeLogin.png 576w","/waiops-tech-jam/static/4f700352e127fdb1b9451f5801ac3203/758ed/firstTimeLogin.png 712w"],sizes:"(max-width: 712px) 100vw, 712px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set this to something secure and memorable."),(0,o.kt)("li",{parentName:"ul"},"Save the password for future logins."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Account")," button.")))),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-6: License Configuration"),(0,o.kt)("p",null,"Once logged in, the setup wizard will prompt you to import the license key:"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAAB20lEQVQoz22Sy2sTURSH569zUTDp5DVoglY3VcEuFF8BHxQEF4K6cOVChGgMtS26KYGqJSlWFLWtsd20RU3SZNqkGZImuTNzZz6ZW1Lj48DH5XDu/fE751wtnNTptDu0rBaWZdHr9fB8D4nE9Vxs11bngKByUJV4nofv++p+cAZoEV1XBdu2Fb7rs2ltkCk9YXZrijnzFTPfc8z8yDG9lSNbyvB87SnZ9Qw7XRPP+f02QIvGYkgpVSKEAAlfzRWitwyO3z7B+MOzPF5/xFT5GfeW7hK6GiVyzWDs/mnMfk0JClvgOI5CMwzjT0EPSvVVwpfjHBk/SvxKko/iPbOtF9xYTjNyMczIOZ3UnTF2xcDhkGAqlfzH4Wp9mdikQSSdID55jJtf0kx8OMOF4gSj12Po6QQnH5yiPuTwsOXwXzOUjqTW2aZQXqDwc4HXG/O8qxYplN+yVFnkzeY8xXKBxWqBVq+JtB1s0VcuA7R4KKS2MzxYT3oEIbqCxk6Dvd09RcPcVbm0paq7Ptg+OENoyUT8sOUBrusq16oVx6bdaVM3a3S7+yoP8AIT5hqi8ol+dQVR+Uxv+xvaqK7/V3A4ms0m+Xxe/dGD8IPd0Zm7xH42Qm86RT8XxXp5nl8xhnQGgnxPMAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"license1",title:"license1",src:"/waiops-tech-jam/static/14f5d8d29f893aaccdf2f97dd98b4587/3cbba/license1.png",srcSet:["/waiops-tech-jam/static/14f5d8d29f893aaccdf2f97dd98b4587/7fc1e/license1.png 288w","/waiops-tech-jam/static/14f5d8d29f893aaccdf2f97dd98b4587/a5df1/license1.png 576w","/waiops-tech-jam/static/14f5d8d29f893aaccdf2f97dd98b4587/3cbba/license1.png 1152w","/waiops-tech-jam/static/14f5d8d29f893aaccdf2f97dd98b4587/559ac/license1.png 1257w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If attending a scheduled Tech Jam, your lab proctors will provide you the\nlicense file."),(0,o.kt)("li",{parentName:"ul"},"If following these instructions offline outside a scheduled Tech Jam, the\nlicense file can be found within your downloaded software archive."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"LET'S GO")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"IMPORT LICENSE")," button and drag the license file provided by your lab proctors into ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter License")," box.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," button. You will see the page below if it’s successful:"),(0,o.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABvklEQVQoz32R7W/SUBSH+fsXiVMTv5nMTbtkEcLwpcKm21JeE3SRffBlrGxBgbYUahtaaAuPOXeB4Fz8Jb/03nPOfe49p5ncqxylcgldf8fRUZlqtUq92lBuiGuyrlOvybq5jkusUqkoG4ZBq9Uim82SCfwA0ZKl+qbEXAR1vvhV5U8Tg/bvBueTCp89g3ZQ49w3uIouuCtd18m4rkuSJERRRDJPsIMB2uVj9n48ZOfrFh+s15y576l7Jxze7LLzbYvn3x+g32jMopk6N51OFTCfz5MZjUYsFgtmsxlpvMCdWhyYT9m/esLLy23e9PYpXO9S6ufIdZ+hdR7xorNNuXdAHMfKAhUVCoXbF66ASZzihWPOBkU+9guc9A857uUodvZ4a2oc/8xzKrFfeVr26f+B8/lcWQpkL47CEMuyGI/H2LbNYNBXNau81Mr+L+BkMiFN0zVQ5imFYRgShlOC0GfkOtiOTRAEt/EoVGfuBcrtkpSWFTSes1wu13/O7Jo0mw0F29RmV/+8UCQvE7B4U6Zp0m6316NYSS5d1QtUVCwWyXS7XWSOMiuZ0117nofv+ziOc29ePBwOVQeapvEHajTcBSOUoRoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"license2",title:"license2",src:"/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/3cbba/license2.png",srcSet:["/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/7fc1e/license2.png 288w","/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/a5df1/license2.png 576w","/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/3cbba/license2.png 1152w","/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/0b124/license2.png 1728w","/waiops-tech-jam/static/89008dc5906c50597c687d5eec77f09c/52da3/license2.png 1870w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"2-7: Summary"),(0,o.kt)("p",null,"In this portion of the lab, you have learned how to install Turbonomic on\nOpenShift."),(0,o.kt)("p",null,"Navigate to the next section to integrate Instana for application performance\ndata ingestion and start assuring the performance of your critical business\napplications."),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-turbonomic-installation-index-mdx-d6d98052736c3e6730f4.js.map