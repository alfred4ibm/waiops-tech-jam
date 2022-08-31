"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[6920,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(7294),o=a(8650),i=a.n(o),r=a(1597),s=a(4799),l=a(3448),p=a(5900),c=a.n(p),m=function(e){var t,a=e.title,o=e.theme,i=e.tabs,r=void 0===i?[]:i;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||o,s=i.baseUrl,l=i.subDirectory,p=s+"/edit/"+i.branch+l+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,s=o.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===s,p=new RegExp(s+"/?(#.*)?$"),m=o.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),b=h,v=a(7296),y=a(5387),w=a(3732),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},A=function(e){var t=e.pageContext,a=e.children,o=e.location,p=e.Title,c=t.frontmatter,g=void 0===c?{}:c,h=t.relativePagePath,w=t.titleType,A=g.tabs,f=g.title,N=g.theme,S=g.description,x=g.keywords,I=g.date,E=(0,y.Z)().interiorTheme,T=(0,r.useStaticQuery)("2456312558").site.pathPrefix,C=T?o.pathname.replace(T,""):o.pathname,j=A?C.split("/").filter(Boolean).slice(-1)[0]||i()(A[0],{lower:!0}):"",G=N||E;return n.createElement(l.Z,{tabs:A,homepage:!1,theme:G,pageTitle:f,pageDescription:S,pageKeywords:x,titleType:w},n.createElement(m,{title:p?n.createElement(p,null):f,label:"label",tabs:A,theme:G}),A&&n.createElement(b,{title:f,slug:C,tabs:A,currentTab:j}),n.createElement(v.Z,{padded:!0},a,n.createElement(d,{relativePagePath:h}),n.createElement(k,{date:I})),n.createElement(u.Z,{pageContext:t,location:o,slug:C,tabs:A,currentTab:j}),n.createElement(s.Z,null))}},1033:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n=a(3366),o=(a(7294),a(4983)),i=a(3624),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},p=l("AnchorLinks"),c=l("AnchorLink"),m={_frontmatter:s},d=i.Z;function u(e){var t=e.components,a=(0,n.Z)(e,r);return(0,o.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"AnchorLinks"},(0,o.kt)(c,{mdxType:"AnchorLink"},"7-1: Overview"),(0,o.kt)(c,{mdxType:"AnchorLink"},"7-2: Create a scope-based event grouping policy to group by Service"),(0,o.kt)(c,{mdxType:"AnchorLink"},"7-3: Inject some sample Service events"),(0,o.kt)(c,{mdxType:"AnchorLink"},"7-4: Create a scope-based event grouping policy to group by Location"),(0,o.kt)(c,{mdxType:"AnchorLink"},"7-5: Inject some sample Location events")),(0,o.kt)("h2",null,"7-1: Overview"),(0,o.kt)("p",null,"This module considers a second method of doing event correlation: scope-based event grouping. Scope-based event grouping is based on a basic premise that events occurring at the “same place”, and at the “same time” are likely related."),(0,o.kt)("p",null,"For example, if a remote cell site has a power failure, there will likely be alarms generated from equipment there, along with building management alarms, and so on, in a relatively short space of time. In this case, the scope might be the remote location, and the time window might be, say, a 10 minute window. Another example is where there is a hardware failure in one of the servers that contribute to the provision of a service, such as an application or website. This failure may result in alarms being generated from the dependent parts. In this case, the scope might be the common application or service name, and the scope might be, say, a 5 minute window."),(0,o.kt)("p",null,"Scope-based grouping is provided by Watson for AIOps Event Manager so that operations teams can input local knowledge on how events should be grouped. A UI is provided so that scope-based event ",(0,o.kt)("strong",{parentName:"p"},"grouping policies")," can be created and maintained."),(0,o.kt)("p",null,"In practice, scope-based event grouping is very powerful and yields tremendous event reduction by virtue of grouping events, thereby effectively reducing the number of rows presented to operators. The level of reduction achieved varies depending on the data sets, but it is typically ",(0,o.kt)("strong",{parentName:"p"},"upwards of 60%"),". A major north-American financial institution reported that scope-based event grouping helped them to reduce the number of tickets they open by around 70%, by opening tickets based on groups of events rather than individual events."),(0,o.kt)("p",null,"By the end of this module, you will have created two scope-based event grouping policies, injected some test events and observed the grouping. The second example will include overlap with a topology-based event correlation scenario in the previous module to demonstrate so-called “super grouping”."),(0,o.kt)("h2",null,"7-2: Create a scope-based event grouping policy to group by Service"),(0,o.kt)("p",null,"Log in to Watson for AIOps Event Manager and navigate to: ",(0,o.kt)("strong",{parentName:"p"},"Netcool WebGUI"),"."),(0,o.kt)("p",null,"Navigate to: ",(0,o.kt)("strong",{parentName:"p"},"Insights > Scope Based Grouping")),(0,o.kt)("p",null,"Complete the following steps to create a policy based on common application name:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on: ",(0,o.kt)("strong",{parentName:"li"},"Create policy")),(0,o.kt)("li",{parentName:"ul"},"Give the policy a name - eg: ",(0,o.kt)("strong",{parentName:"li"},"GroupByService")),(0,o.kt)("li",{parentName:"ul"},"Complete the Description field with something appropriate - eg: “Policy to group events by common service name”"),(0,o.kt)("li",{parentName:"ul"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"Priority")," field set to 1"),(0,o.kt)("li",{parentName:"ul"},"The default ",(0,o.kt)("strong",{parentName:"li"},"Datasource")," should already be checked"),(0,o.kt)("li",{parentName:"ul"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Events")," section, select: ",(0,o.kt)("strong",{parentName:"li"},"Specify conditions")),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Condition 1")," to: ",(0,o.kt)("strong",{parentName:"li"},"Service")," field ",(0,o.kt)("strong",{parentName:"li"},"Is not empty")),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Action")," parameter to define the scope: set it to ",(0,o.kt)("strong",{parentName:"li"},"Service")),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Time Window")," to 300 seconds (5 minutes)"),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Enabled")," toggle switch to ",(0,o.kt)("strong",{parentName:"li"},"On")," and ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,"You should end up with something like the following:"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.930555555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAl0lEQVQI102KTQrCMBSEe0GlUgtuBI+h1IgL8Qhqm4V6Ig/gogs3VqppfMlL0sZE/BeGj2+GCQbzbX+2CZNVmKSdJI0nNCa0S7KIZO3R8j+t4VcW0Zj2putAmcbUtrHO1DdrnffeuQd/8qnv8cn8CLt9GVQgi/JyOjOhDKAG1CXjXCAXyK4CUFcgATUHPBSMS/X6cKkYyDuSdY/EehMtuwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Scope1",title:"Scope1",src:"/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/3cbba/Scope1.png",srcSet:["/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/7fc1e/Scope1.png 288w","/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/a5df1/Scope1.png 576w","/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/3cbba/Scope1.png 1152w","/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/0b124/Scope1.png 1728w","/waiops-tech-jam/static/b813dd97ee69be0f3471fddeee32e895/1c5c7/Scope1.png 1849w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("h2",null,"7-3: Inject some sample Service events"),(0,o.kt)("p",null,"Create a new local file and call it ",(0,o.kt)("inlineCode",{parentName:"p"},"scope_events.sh")," and paste the following content into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\n\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\n\ndelete from alerts.status;\ngo\n\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('db2server1clean1', 'db2server1', 'Running cleanup automation script', 2, 13, 'Syslog', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('db2server1clean2', 'db2server1', 'Error: unable to run cleanup automation script', 3, 1, 'Syslog', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('db2server1syslog', 'db2server1', '/dev/sda1 is 100% full', 5, 1, 'Syslog', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('db2server1db', 'db2server1', 'Database is inaccessible', 5, 1, 'ITM6', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('websphere01', 'websphere01', 'websphere01 unable to access transaction database', 4, 1, 'ITM6', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('websphere02', 'websphere02', 'websphere02 unable to access transaction database', 4, 1, 'ITM6', 'WebService');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Service) values ('widgetcom', 'www.widget.com', 'www.widget.com: response time >30s', 5, 1, 'ITM6', 'WebService');\n\ngo\nexit\nEOF\n\n")),(0,o.kt)("p",null,"Next, use the following command to copy your new script to the ObjectServer pod and set its file permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cat scope_events.sh | oc exec -i evtmanager-ncoprimary-0 -- sh -c "cat > /tmp/scope_events.sh"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'oc exec -it evtmanager-ncoprimary-0 bash -- sh -c "chmod +x /tmp/scope_events.sh"\n')),(0,o.kt)("p",null,"Finally, use the following commands to execute this script to generate the example events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 bash -- /tmp/scope_events.sh\n")),(0,o.kt)("p",null,"You can ignore the message: ",(0,o.kt)("inlineCode",{parentName:"p"},"Warning: Failed to find tar in the following directories : /bin /usr/bin")),(0,o.kt)("p",null,"You should end up with something like the following:"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.319444444444446%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAgElEQVQI102OiwrFIAxD9///Keq9DK1T1PnISGGwQgihp6FH/v3hnUPOGSKC8zxhjIH3HjFGhBBwXZfuKWutMs455VNKyr3MsXOCxIBaK+acKoKECIwx8B0WlFKUue9b9713tNbUj94rRKIGAnTC/IylzHtvrLXUv4XvDZ9hIfUARkjnn9NXvAEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events",title:"events",src:"/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/3cbba/events.png",srcSet:["/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/7fc1e/events.png 288w","/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/a5df1/events.png 576w","/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/3cbba/events.png 1152w","/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/0b124/events.png 1728w","/waiops-tech-jam/static/1364123e337c0229264b166eb1495882/72070/events.png 1787w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("h2",null,"7-4: Create a scope-based event grouping policy to group by Location"),(0,o.kt)("p",null,"Log in to Watson for AIOps Event Manager and navigate to: Netcool WebGUI."),(0,o.kt)("p",null,"Navigate to: ",(0,o.kt)("strong",{parentName:"p"},"Insights > Scope Based Grouping")),(0,o.kt)("p",null,"Complete the following steps to create a policy based on common geographic location:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on: ",(0,o.kt)("strong",{parentName:"li"},"Create policy")),(0,o.kt)("li",{parentName:"ul"},"Give the policy a name - eg: ",(0,o.kt)("strong",{parentName:"li"},"GroupByLocation")),(0,o.kt)("li",{parentName:"ul"},"Complete the Description field with something appropriate - eg: Policy to group events by common location"),(0,o.kt)("li",{parentName:"ul"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"Priority")," field set to 1"),(0,o.kt)("li",{parentName:"ul"},"The default ",(0,o.kt)("strong",{parentName:"li"},"Datasource")," should already be checked"),(0,o.kt)("li",{parentName:"ul"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Events")," section, select: ",(0,o.kt)("strong",{parentName:"li"},"Specify conditions")),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("strong",{parentName:"li"},"Condition 1")," to: ",(0,o.kt)("strong",{parentName:"li"},"Location")," field ",(0,o.kt)("strong",{parentName:"li"},"Is not empty")),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Action")," parameter to define the scope: set it to ",(0,o.kt)("strong",{parentName:"li"},"Location")),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Time Window")," to 300 seconds (5 minutes)"),(0,o.kt)("li",{parentName:"ul"},"Set the ",(0,o.kt)("strong",{parentName:"li"},"Enabled")," toggle switch to ",(0,o.kt)("strong",{parentName:"li"},"On")," and ",(0,o.kt)("strong",{parentName:"li"},"Save"))),(0,o.kt)("p",null,"You should end up with something like the following:\n",(0,o.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"18.055555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAt0lEQVQI123GO07DUBBGYS8saYihS8M2QpFAQ8ESgoTTRGJPbIAFgJAFN37cmfnncR05aZE+HZ3q/uX9dtfcbN/qS++eDvWuqR8Pq22z3LwuH/632OzXz8cqszJc4CQWUTyKuftlPKKUaU6ZZhHTdWbl47Ot/k79b+pGwsgg0cxI3ZAZQ+ZuyCQ6ZM4MhrapTz0xjERJNPVcseDr+2ckNg+oC4yYoa42uw7UzaI9jW3K5iFwmDNwBmEQx2LF1JwHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Scope2",title:"Scope2",src:"/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/3cbba/Scope2.png",srcSet:["/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/7fc1e/Scope2.png 288w","/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/a5df1/Scope2.png 576w","/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/3cbba/Scope2.png 1152w","/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/0b124/Scope2.png 1728w","/waiops-tech-jam/static/e84dada88594402e5d1035621eb24354/621ef/Scope2.png 1854w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," The Priority specifies the order in which the Policies will be tried. Once a scope-based event grouping Policy matches and the scope is set for an event, all subsequent Policies will be skipped. If two policies have the same Priority value (as in this case), the execution order is indeterminate."),(0,o.kt)("h2",null,"7-5: Inject some sample Location events"),(0,o.kt)("p",null,"Create a new local file and call it ",(0,o.kt)("inlineCode",{parentName:"p"},"super_group_events.sh")," and paste the following content into it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\n\n\n/opt/IBM/tivoli/netcool/omnibus/bin/nco_sql -server AGG_P -user root -passwd $OMNIBUS_ROOT_PWD << EOF\n\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('rackserver01', 'racksvr01', 'Warning: hardware fault detected in processing array', 5, 1, 'SNMP', 'London01');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('esx1', 'esx01', 'Warning: low resources', 3, 1, 'VMware', 'London01');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('computer1000esx', 'computer1000', 'Auto-scaling failed: unable to allocate resources', 4, 1, 'VMware', 'London01');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('computer1001esx', 'computer1001', 'Auto-scaling failed: unable to allocate resources', 4, 1, 'VMware', 'London01');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('server100esx', 'server100', 'Auto-scaling failed: unable to allocate resources', 4, 1, 'VMware', 'London01');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup, Location) values ('server200esx', 'server200', 'Auto-scaling failed: unable to allocate resources', 4, 1, 'VMware', 'London01');\ngo \n\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup) values ('cpu01', 'cpu01', 'cpu01 on computer1000 >90% utilisation', 5, 1, 'VMware');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup) values ('cpu02', 'cpu02', 'cpu02 on computer1000 >80% utilisation', 4, 1, 'VMware');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup) values ('billing', 'billing', 'Billing application ResponseTime >10000msec', 4, 1, 'Instana');\ninsert into alerts.status (Identifier, Node, Summary, Severity, Type, AlertGroup) values ('webserver', 'webserver', 'Webserver service degraded', 5, 1, 'Instana');\ngo\n\nexit\n\nEOF\n")),(0,o.kt)("p",null,"Next, use the following command to copy your new script to the ObjectServer pod and set its file permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cat super_group_events.sh | oc exec -i evtmanager-ncoprimary-0 -- sh -c "cat > /tmp/super_group_events.sh"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'oc exec -it evtmanager-ncoprimary-0 bash -- sh -c "chmod +x /tmp/super_group_events.sh"\n')),(0,o.kt)("p",null,"Finally, use the following commands to execute this script to generate the example events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"oc exec -it evtmanager-ncoprimary-0 bash -- /tmp/super_group_events.sh\n")),(0,o.kt)("p",null,"You will observe three groups of events merged together: two created by topology-based event grouping, and one created by scope-based event grouping."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," You may need to wait a few seconds and refresh the event view before the grouping is visible."),(0,o.kt)("p",null,"Select any event and run the tool from the Alert Viewer. You should end up with something like the following:"),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAm0lEQVQY001PCQ6EIBDj/y9VoyOXgBx20zGYJWmATmmLibJjXVccxwER0Z33ifM8EUKAtRbLsmDfX/11XTojOIsxwjkHM1JA8A61NdRa0VrTwQwopYDrvm/laeS9V44zoveub6kxPb+Gz/N8gpnMZgyYj//bjjGQUkLO+StCjSlWYEWUYDrBdtu2qQHFbDB5mrE5eZrzqzSmhucfTGE0PGjHFmgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events2",title:"events2",src:"/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/3cbba/events2.png",srcSet:["/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/7fc1e/events2.png 288w","/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/a5df1/events2.png 576w","/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/3cbba/events2.png 1152w","/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/0b124/events2.png 1728w","/waiops-tech-jam/static/1b608b883b63faabfac9706e6d2d4bc9/72070/events2.png 1787w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("p",null,"You can click on the grouping buttons on the right to inspect the details of the group. Topology-based grouping will show a preview of the topology that has effected the grouping. Note how you have events grouped together by both topology-based grouping and scope-based grouping in the “super group”. The events from computer1000 and computer1001 are found in both the topology-based correlation template groups, as well as the scope-based event grouping policy. Hence these events are members of two different group types, and so the two groups are automatically merged together due to these common events."),(0,o.kt)("p",null,"You have now completed this module and are ready for the next module “Enable optional grouping features”."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.ibm.com/community/user/aiops/blogs/zane-bray1/2022/06/27/getting-started-with-watson-aiops-event-manager-67"},"Reference Blog")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-aiops-scope-based-grouping-index-mdx-8b22382bff8949169657.js.map