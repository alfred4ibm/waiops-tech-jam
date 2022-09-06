"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[5995,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),o=a(8650),i=a.n(o),s=a(1597),l=a(4799),r=a(3448),p=a(5900),c=a.n(p),m=function(e){var t,a=e.title,o=e.theme,i=e.tabs,s=void 0===i?[]:i;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,l=i.baseUrl,r=i.subDirectory,p=l+"/edit/"+i.branch+r+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=a(4703),h=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,l=o.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===l,p=new RegExp(l+"/?(#.*)?$"),m=o.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=r,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component),A=u,b=a(7296),k=a(5387),f=a(3732),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,o=e.location,p=e.Title,c=t.frontmatter,h=void 0===c?{}:c,u=t.relativePagePath,f=t.titleType,y=h.tabs,N=h.title,v=h.theme,x=h.description,E=h.keywords,I=h.date,C=(0,k.Z)().interiorTheme,S=(0,s.useStaticQuery)("2456312558").site.pathPrefix,R=S?o.pathname.replace(S,""):o.pathname,j=y?R.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",L=v||C;return n.createElement(r.Z,{tabs:y,homepage:!1,theme:L,pageTitle:N,pageDescription:x,pageKeywords:E,titleType:f},n.createElement(m,{title:p?n.createElement(p,null):N,label:"label",tabs:y,theme:L}),y&&n.createElement(A,{title:N,slug:R,tabs:y,currentTab:j}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:u}),n.createElement(w,{date:I})),n.createElement(g.Z,{pageContext:t,location:o,slug:R,tabs:y,currentTab:j}),n.createElement(l.Z,null))}},9591:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return g}});var n=a(3366),o=(a(7294),a(4983)),i=a(3624),s=["components"],l={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=r("AnchorLinks"),c=r("AnchorLink"),m={_frontmatter:l},d=i.Z;function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"AnchorLinks"},(0,o.kt)(c,{mdxType:"AnchorLink"},"4-1: Introduction"),(0,o.kt)(c,{mdxType:"AnchorLink"},"4-2: Create the Website in Instana"),(0,o.kt)(c,{mdxType:"AnchorLink"},"4-3: Install Robot Shop"),(0,o.kt)(c,{mdxType:"AnchorLink"},"4-4: Setup Automated Load"),(0,o.kt)(c,{mdxType:"AnchorLink"},"4-5: Summary")),(0,o.kt)("h2",null,"4-1:  Introduction"),(0,o.kt)("p",null,"In this section of the lab, you will learn how to install the Robot Shop application.   Robot Shop is pre-configured to include any required configuration changes needed to enable monitoring.  Some technologies such as java don’t require any configuration, but others require monitor configuration changes so that the application can be monitored.  During the install, you will also specify the required information that is necessary for Instana to monitor the End User Experience (EUM) / Real User Monitoring (RUM) data."),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"4-2:  Create the Website in Instana"),(0,o.kt)("p",null,"If you want to capture EUM/RUM data within Instana, you must first create a website within the GUI (or via API).  Open the Instana GUI within your browser. "),(0,o.kt)("p",null,"On left side navigation, select ",(0,o.kt)("strong",{parentName:"p"},"Websites & Mobile Apps"),". You’ll see a dialog where you can enter a Website Name.  Enter ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," as the website name.  Then, click the ",(0,o.kt)("strong",{parentName:"p"},"Add Website")," button."),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.86111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVQY042LO07DUBAA3+kIB6AiSoFBQhQcLyehiECiIoBDiIX99r/7tAgZGpCA0RTTTFksu3GCp/5ltz/s9q+iZh7/tJxdXltEBayAzNK+iPY35aS7wtZGJGQh0VlWswgxY9VfLMeri8wkVjFnNVYTc0B87ntAjNbMfxBh7hZeFsvzzESW+ZzncarDMECtCIhESEzMREwfjYBARCJSjk67bzOruUdmDg+P29v7ieLtUwfJzfZufbNGmjLzHQK4USFaOX9UAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"addWebsite",title:"addWebsite",src:"/waiops-tech-jam/static/ef4e8709b5da8e247da75257178a5ad5/3cbba/addWebsite.png",srcSet:["/waiops-tech-jam/static/ef4e8709b5da8e247da75257178a5ad5/7fc1e/addWebsite.png 288w","/waiops-tech-jam/static/ef4e8709b5da8e247da75257178a5ad5/a5df1/addWebsite.png 576w","/waiops-tech-jam/static/ef4e8709b5da8e247da75257178a5ad5/3cbba/addWebsite.png 1152w","/waiops-tech-jam/static/ef4e8709b5da8e247da75257178a5ad5/590d1/addWebsite.png 1421w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("p",null,"A dialog containing ",(0,o.kt)("strong",{parentName:"p"},"javascript")," will open.  In a more typical application, you would follow the instructions on the dialog.  You copy/paste the ",(0,o.kt)("strong",{parentName:"p"},"javascript")," into the HTML pages.  In a containized environment, you would need to rebuild and deploy the containers.\n",(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1113px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVQY05VRO0/DMBjMP0eM/AVGJoTowsCvaKVOXQqhjT8/41fqR+wmdlA7IJUFccMNdzqdTtcAAMYEIcAYL/9EAxgoY5gQQqkQAjDuLkCUMSEE45xLTaWW2jjnBuec99poa4cyl4btvywgg7oBg0GdQp2lRKPOQGcwGECGcc2E63uvVRqT9z6msz8HGnlzhIGJQRpLheZccor7A5JHrUF6rhQR2tqUcsyTkqqMsdRaap3rnObUKKCmZXbPTdsPh96/rcLqKRzwyeWQphBzyFPMc5xqdn4Zx5vNbNcNmAXWWyocYh6EljpQkd5f8/Nj/GgDlZ4KSXqD8JLTT7IutdnAaUvdmrhPFWoaS4zlytWoqkWNvsSrGMdyqa03zXcb97D19+vTSzsuv8y/rvoGmDDC+3v+NagAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"websiteConfig2",title:"websiteConfig2",src:"/waiops-tech-jam/static/b6b4bb789941479c70a3899ac9da47ff/2ee20/websiteConfig2.png",srcSet:["/waiops-tech-jam/static/b6b4bb789941479c70a3899ac9da47ff/7fc1e/websiteConfig2.png 288w","/waiops-tech-jam/static/b6b4bb789941479c70a3899ac9da47ff/a5df1/websiteConfig2.png 576w","/waiops-tech-jam/static/b6b4bb789941479c70a3899ac9da47ff/2ee20/websiteConfig2.png 1113w"],sizes:"(max-width: 1113px) 100vw, 1113px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")," "),(0,o.kt)("p",null,"Robot Shop has already done some of work for you.  When you deploy the application, you can pass parameters into the helm install.  There are two parameters within the ",(0,o.kt)("strong",{parentName:"p"},"javascript")," that we will need to copy and use when we install the Robot Shop application.  You will need the ",(0,o.kt)("strong",{parentName:"p"},"key")," and the ",(0,o.kt)("strong",{parentName:"p"},"reportingURL"),".  Either copy those parameters now or leave this dialog open that you can retrieve it later.\n",(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVQY043IzW7UMBiF4dw4N8COW2CJxLrLSt3MAgp0oFSlJG5qx45jJ/H3xf/2ZKoBLoBHR+/iNEIIQsjvtiWEdIR0XVdrPf+fBhGV1saAnmcA0Fr/rZSSUsrYMC8X87Ksxiitl39mQGyU0lzwUY7DwIWUcpo455RSIYTgfBgYY4wLMU7T5Vg2CZ7N4GMspTQx5Z7COFm0Hjd3qQvoI4RkfFmxgA3WOod2hc3g5mNOuWLM1Lom5tJT3TPN9cL1QqhiHRl+Pfb3d+rLUX1t9f3z2o9I5dhzvRrnowvpz3KT68mxwbYs/GTx5jYcbv3NIX38UN6+Ke/fpe9HZ8Cfz37f42mPdQ+lhlxSKSHlxvnw8I0+PY4TX8aW8xdpBuVelJk3jcFi9j/u4vVV+HywCqxCt1gAK5VdITS5VLQZYoVygnqGsvuQM4YQi/Up2VSe23L8VJ4eEvqEIdnofTQYnc+vioC9ghnz8VsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"websiteConfig",title:"websiteConfig",src:"/waiops-tech-jam/static/537320a05e356c2755c21f312693f60a/2faef/websiteConfig.png",srcSet:["/waiops-tech-jam/static/537320a05e356c2755c21f312693f60a/7fc1e/websiteConfig.png 288w","/waiops-tech-jam/static/537320a05e356c2755c21f312693f60a/a5df1/websiteConfig.png 576w","/waiops-tech-jam/static/537320a05e356c2755c21f312693f60a/2faef/websiteConfig.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"4-3:  Install Robot Shop"),(0,o.kt)("p",null,"The full installation instructions for ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," can be found here:  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/instana/robot-shop"},"https://github.com/instana/robot-shop"),"\nYou’ll notice that there are instructions for installing ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," into a number of different environments including docker, kubernetes, and OpenShift.  This lab uses an OpenShift environment, so we’ll be following those steps."),(0,o.kt)("p",null,"We have documented the steps below, so there is no need to refer to the GitHub instructions."),(0,o.kt)("p",null,"Login to the ",(0,o.kt)("strong",{parentName:"p"},"control node")," to execute the following steps."),(0,o.kt)("p",null,"Make sure you are in the ",(0,o.kt)("strong",{parentName:"p"},"jammer")," user’s home directory ",(0,o.kt)("strong",{parentName:"p"},"(/home/jammer)"),"."),(0,o.kt)("p",null,"Clone the GitHub repository by typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/instana/robot-shop.git\n\n")),(0,o.kt)("p",null,"change directory into the ",(0,o.kt)("strong",{parentName:"p"},"robot-shop/K8s")," directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd robot-shop/K8s\n\n")),(0,o.kt)("p",null,"Within the control node, you are already logged into the OpenShift cluster and can begin issuing ",(0,o.kt)("strong",{parentName:"p"},"oc")," commands."),(0,o.kt)("p",null,"Double check to make sure you are logged into the ",(0,o.kt)("strong",{parentName:"p"},"manage to")," OpenShift cluster.  To do that, run ",(0,o.kt)("strong",{parentName:"p"},"oc get projects")," and grep for qotd.  You should see the qotd and qotd-load projects listed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get projects | grep qotd\n")),(0,o.kt)("p",null,"Create an OpenShift ",(0,o.kt)("strong",{parentName:"p"},"project (workspace)")," for the ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," application by issuing the following commnand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc adm new-project robot-shop\n\n")),(0,o.kt)("p",null,"Next, setup ",(0,o.kt)("strong",{parentName:"p"},"privileges")," within the cluster for the ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," application by issuing the following two commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc adm policy add-scc-to-user anyuid -z default -n robot-shop\noc adm policy add-scc-to-user privileged -z default -n robot-shop\n\n")),(0,o.kt)("p",null,"Install the ",(0,o.kt)("strong",{parentName:"p"},"Robot Shop")," by issuing the following helm command. You’ll need to replace <EUM Key",">"," with the ",(0,o.kt)("strong",{parentName:"p"},"key")," value that you obtained in section 3.2 from the Instana user interface and <Reporting URL",">"," is the ",(0,o.kt)("strong",{parentName:"p"},"reportingURL")," you obtained in section 4.2."),(0,o.kt)("span",{style:{color:"red"}},"Note:  When you specify the **Reporting URL**, do not include the trailing slash ( / )."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"helm install robot-shop --set openshift=true  --set eum.key=<EUM Key> --set eum.url=<Reporting URL> -n robot-shop helm\n\n")),(0,o.kt)("p",null,"Example: ",(0,o.kt)("strong",{parentName:"p"},"helm install robot-shop —set openshift=true  —set eum.key=m-IMxZYFQyW_n7Xo0VRjrw —set eum.url=http://<your server IP",">",":2999 -n robot-shop helm")),(0,o.kt)("p",null,"Notice that there is no slash ( / ) following 2999."),(0,o.kt)("p",null,"If successful, you should see the results similar to what’s shown below.\n",(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"540px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.819444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxklEQVQY05XOTW7CMBAFYJNljTMJYRzXPzHYxk5cRQGpbGhPwmk4C6seswI2EQskPumNZlZviPmx6tvIg2nHTz6JdhTtlxCjWGOn9L6z09adfJhyHqy13ntjTAghxsg5J5co/iZ57VfnYaN3sS4hPfS3KKU4bxFRSgkAjLHVXdM0lFIyCPwNm2MnO2w+6HJJaVVVZVk+Jnlt3B9c6n0/3F6JOwCo7uq6ZowRQhYzz2fOWWutlAKAoijIW1JKzjlEnPfMlxf+AVpwGCpQqcD8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"install",title:"install",src:"/waiops-tech-jam/static/9aa3a689ba6e7c6059cae18b08600775/674c8/install.png",srcSet:["/waiops-tech-jam/static/9aa3a689ba6e7c6059cae18b08600775/7fc1e/install.png 288w","/waiops-tech-jam/static/9aa3a689ba6e7c6059cae18b08600775/674c8/install.png 540w"],sizes:"(max-width: 540px) 100vw, 540px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,o.kt)("p",null,"Next, change to the robot-shop project within OpenShift by typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc project robot-shop\n\n")),(0,o.kt)("p",null,"Check whether the pods are running by typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods\n")),(0,o.kt)("p",null,"If the install was successful, you’ll see the following pods running.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"464px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeElEQVQoz2WP0ZKiMBREY4lVi5AEBQIlMYBJILmJmMGSx9n//6vdkR1naraf7kOf291IPVQTmn2X7nkan/Z7niQi/VXHR5nrZcCHrGmcaH2Km66fAQLnDee87/vdbofGYRRc1KxWUrWiZQXLaIYQooS25zaKIil7Y0ZCMGNFltEoiuq6ZowhhJBoBTgAgMfyeP/9/ja/gXOiFSlO8yJHCA3DYC0wVmFM0FP1Ux+XUiqEoLWepmmeZwAIIVBKMcbre621MaYoCkrpZrNZ4aqqPuBxHL33xpjb7eac01o75xBCGOOyLNdkACjLklL6Sv6Cr9dr27b3+32aJq01AJxOpxeslFqTCfmq/blZCGvt5XLRWocQpJTee855kiRFUazwOI7f4aqq/sHn89l7n+d5kiSHwwFjfDwe4zh+JWutrbVlWRJCfm7uug4AvPfW2uGprutW6//wz81SSqXUsizzPPd9DwCriRDyqm2MyfOcELLdbhFC7Km/8B+UNzfmI9GDUwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"pods",title:"pods",src:"/waiops-tech-jam/static/184a139cb04f4a65fc7c84b6885d94e3/eca69/pods.png",srcSet:["/waiops-tech-jam/static/184a139cb04f4a65fc7c84b6885d94e3/7fc1e/pods.png 288w","/waiops-tech-jam/static/184a139cb04f4a65fc7c84b6885d94e3/eca69/pods.png 464w"],sizes:"(max-width: 464px) 100vw, 464px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,o.kt)("p",null,"If some of the pods show ",(0,o.kt)("strong",{parentName:"p"},"0/1")," instead of ",(0,o.kt)("strong",{parentName:"p"},"1/1")," in the READY column or the pods aren’t in a ",(0,o.kt)("strong",{parentName:"p"},"Running")," state, wait a couple more minutes and issue the ",(0,o.kt)("strong",{parentName:"p"},"oc get pods")," command again.   It can take as much as 7 or 8 minutes before all of the pods are running.  If you don’t want to wait, you can proceed to the next steps."),(0,o.kt)("p",null,"Finally, if you want to bring up the Robot Shop user interface, you need to expose the service as a route.   Issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc expose service web\n\n")),(0,o.kt)("p",null,"Now, issue the ",(0,o.kt)("strong",{parentName:"p"},"oc get route")," command to get the route to the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get route\n\n")),(0,o.kt)("p",null,"The result should look similar to:   ",(0,o.kt)("strong",{parentName:"p"},"web-robot-shop.<cluster domain",">")),(0,o.kt)("p",null,"Paste the route into a browser and you’ll see the Robot Shop user interface.  Within your browser, make sure you specify http instead of https."),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"4-4:  Setup Automated Load"),(0,o.kt)("p",null,"Now that the application is running, you will want to generate some traffic against the application.  "),(0,o.kt)("p",null,"Within the same directory, issue the following command to install the load generation pod."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc apply -f load-deployment.yaml\n")),(0,o.kt)("p",null,"Run the ",(0,o.kt)("strong",{parentName:"p"},"oc get pods")," command.  You should see an additional pod named ",(0,o.kt)("strong",{parentName:"p"},"load")," running within the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc get pods\n\n")),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"464px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVQoz22Qa2/TMBSGHT6wKrWdm+3UdW4zsePLkjRah1RIkUBMYmIS///fQJpREOz99H44j5/jA4r3ZfG5So4ZMhHqonhIkjHLJkJGVn2oMSWc33NxSFJTNXPXTVVVlGWptQ7DENw5X3ARo0jwPUkzvEUw3AIAEhzpVt+8vZGyMWYZFYILIcIw3O/3jDEAABBV3Vlrnb9/ePh4Pt8NQ2ctzfMthGmWAQCUUtZaxhhCCFzCGKOULu3LrfjU1nMjngb3rTdfnTrLaiKRTzGhLLjAxhhCSBRFQRAsPiHqul7gH+7d8+ge9e1zb7733WMnn7xu34AxwxmlwW8zIQRjvJqLopBSLq1V2jlnjOn73lqrtfbeB0GAEKaUgb/MV3i32738ecWapjkej4fDQSnlvRdCQAgJIcvrbfsPnOf5C1xVlfdeSqmUGsdRSumc45xDCNer/A//Ma8wpRRCmCQJxjhN081mczUrpZxzr8NlWbpL9CVt20opOecIoevaXddlWfYKvB7pdDrN86yUmqYpjmMAQBzHeZ4DAJxzwzDkeR5F0QoLITjnv9pPscNAdWvS56IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"load",title:"load",src:"/waiops-tech-jam/static/dc96dc1e3ff31fc9a8655f0853a415e3/eca69/load.png",srcSet:["/waiops-tech-jam/static/dc96dc1e3ff31fc9a8655f0853a415e3/7fc1e/load.png 288w","/waiops-tech-jam/static/dc96dc1e3ff31fc9a8655f0853a415e3/eca69/load.png 464w"],sizes:"(max-width: 464px) 100vw, 464px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("hr",null),(0,o.kt)("h2",null,"4-5:  Summary"),(0,o.kt)("p",null,"In this section, you learned how to install an application that includes monitoring and configure it for Website EUM/RUM monitoring."),(0,o.kt)("p",null,"Now, proceed to section 5 where you will configure the monitoring for IBM MQ and IBM App Connect Enterprise (ACE)."),(0,o.kt)("hr",null))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-instana-robot-shop-index-mdx-523f7d71ebdc6a817678.js.map