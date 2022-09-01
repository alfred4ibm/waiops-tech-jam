"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[5227,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),i=a(8650),o=a.n(i),r=a(1597),s=a(4799),l=a(3448),c=a(5900),p=a.n(c),m=function(e){var t,a=e.title,i=e.theme,o=e.tabs,r=void 0===o?[]:o;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},g=function(e){var t=e.relativePagePath,a=e.repository,i=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,s=o.baseUrl,l=o.subDirectory,c=s+"/edit/"+o.branch+l+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(4703),h=a(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),l=a===s,c=new RegExp(s+"/?(#.*)?$"),m=i.replace(c,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),b=u,A=a(7296),k=a(5387),w=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,p=t.frontmatter,h=void 0===p?{}:p,u=t.relativePagePath,w=t.titleType,f=h.tabs,N=h.title,y=h.theme,E=h.description,C=h.keywords,x=h.date,S=(0,k.Z)().interiorTheme,j=(0,r.useStaticQuery)("2456312558").site.pathPrefix,O=j?i.pathname.replace(j,""):i.pathname,B=f?O.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",z=y||S;return n.createElement(l.Z,{tabs:f,homepage:!1,theme:z,pageTitle:N,pageDescription:E,pageKeywords:C,titleType:w},n.createElement(m,{title:c?n.createElement(c,null):N,label:"label",tabs:f,theme:z}),f&&n.createElement(b,{title:N,slug:O,tabs:f,currentTab:B}),n.createElement(A.Z,{padded:!0},a,n.createElement(g,{relativePagePath:u}),n.createElement(v,{date:x})),n.createElement(d.Z,{pageContext:t,location:i,slug:O,tabs:f,currentTab:B}),n.createElement(s.Z,null))}},844:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(3366),i=(a(7294),a(4983)),o=a(3624),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:s},g=o.Z;function d(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)(g,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"AnchorLinks"},(0,i.kt)(p,{mdxType:"AnchorLink"},"4-1: Overview"),(0,i.kt)(p,{mdxType:"AnchorLink"},"4-2: Create a new generic webhook integration with SevOne")),(0,i.kt)("h2",null,"4-1: Overview"),(0,i.kt)("p",null,"This module focuses on the set up of a webhook integration, so that events can be received from a cloud event source. We will configure a generic webhook integration with SevOne as an example."),(0,i.kt)("p",null,"By the end of this module, you will have configured a webhook to be able to receive events from a SevOne system."),(0,i.kt)("p",null,"A full list of the incoming event integrations are documented here: ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-configuring-incoming-integrations"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=systems-configuring-incoming-integrations")),(0,i.kt)("h2",null,"4-2: Create a new generic webhook integration with SevOne"),(0,i.kt)("p",null,"While the event integrations provide a large number of off-the-shelf integrations, it is typical that a user will have an event source for which there is no corresponding integration. Like everything with Netcool, where there is not an off-the-shelf option, there is always the generic option of integration as a backstop. In this exercise, we will create a generic webhook integration with SevOne."),(0,i.kt)("p",null,"The basic steps to creating a generic webhook integration are as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Assuming the event source is capable of sending to a webhook, obtain a sample payload from that source system"),(0,i.kt)("li",{parentName:"ol"},"Create the integration via the Event Manager UI"),(0,i.kt)("li",{parentName:"ol"},"Paste the sample JSON event payload into the sample box"),(0,i.kt)("li",{parentName:"ol"},"Specify the payload-to-field mappings"),(0,i.kt)("li",{parentName:"ol"},"Test the integration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," When you create a new webhook integration in Event Manager, it is essential to copy the generated webhook URL and save it in a text document for future reference. After the integration is saved, there is no way to retrieve the URL (although you can regenerate a new one)."),(0,i.kt)("p",null,"In this exercise, it is assumed that the webhook configuration has been done already on the SevOne side, and it only awaits the webhook URL."),(0,i.kt)("p",null,"First, navigate to: ",(0,i.kt)("strong",{parentName:"p"},"Administration > Integration with other systems"),". Click on ",(0,i.kt)("strong",{parentName:"p"},"New integration")," and ",(0,i.kt)("strong",{parentName:"p"},"Configure")," a new generic ",(0,i.kt)("strong",{parentName:"p"},"Webhook")," integration:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"242px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"106.19834710743802%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABi0lEQVQ4y5WSz26CQBCHeR0vsiIR/9V48i086M1wUZ8MKzHx5MErDTFpTJrWeGiDrctqrTSzLCw0Yg+tCsp3mmT3299kdgQSsU3JUREwxr7vh2cEQXBS/IUxhjGOlcMw5BEXj67IALB3vveOA5SmkxljHnMX1tfjcvu1d4KAp5A9Ri28N57sh2fybu/CVHIYBq8rslztXt62H/ZniraDCM59lwJjNOD8fODXp51ArAwAhBBKKcYYACiljuOchF+QjzcIIePx2DCM0WhkmuZsNptMJvT/hyW17fs+pdR1Xc/zAIAxdj05YR9TD+z4StJur9dr13U55/7NcM4B4CBvNpu47U/A8zzbtoXpdKqqaq/X60Yci14i3W633+/P53NB07RMJlMqlRRFKZfLsiwXCgWEkBgDQiibzebzecMwBF3Xi8Vis9lst9udTkdV1Var1Wg0KpXK3SVqtVq1Wq3X66Zp/iZLkoQQkiRJURSUSC6XE0VRluVD8mKx0DRtOBzeRwwGg+EN6LpuWdYPfGwejxa+gtYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"generic webhook",title:"generic webhook",src:"/waiops-tech-jam/static/fd695080eeff35def95ee58c6abe5a0e/a7c4e/generic_webhook.png",srcSet:["/waiops-tech-jam/static/fd695080eeff35def95ee58c6abe5a0e/a7c4e/generic_webhook.png 242w"],sizes:"(max-width: 242px) 100vw, 242px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"Use the following steps to set up your integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure the Name field with a label to identify your webhook - eg. “SevOne”"),(0,i.kt)("li",{parentName:"ul"},"Copy the generated URL and save it to a text file for later use"),(0,i.kt)("li",{parentName:"ul"},"Copy your sample SevOne payload into: ",(0,i.kt)("strong",{parentName:"li"},"Example incoming request")),(0,i.kt)("li",{parentName:"ul"},"Configure the Event attributes"),(0,i.kt)("li",{parentName:"ul"},"Check the Result field, to ensure there are no errors, and the mapped values are showing"),(0,i.kt)("li",{parentName:"ul"},"Click Generate to generate a test event using the sample"),(0,i.kt)("li",{parentName:"ul"},"Check the event in the Event List to ensure it looks correct"),(0,i.kt)("li",{parentName:"ul"},"Copy the generated webhook over to your SevOne system as an vent target")),(0,i.kt)("p",null,"A sample SevOne payload is provided below, which may be used to set up this integration (copy into ",(0,i.kt)("strong",{parentName:"p"},"Example incoming request"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'{\n"deviceName": "testDeviceName",\n"occurrences": "4",\n"triggeringConditions": "Test",\n"thresholdId": "1-0",\n"check": "Website Alerts - testObjectName",\n"host": "testDeviceName",\n"assignedTo": "engineer@widgetcom.com",\n"pluginDescription": "HTTP Poller",\n"groupName": "All Devices",\n"objectName": "testObjectName",\n"routes": ["Netcool"],\n"alertMessage": "Default Alert Message",\n"hashtag": "hash",\n"policyId": "0",\n"hash": "hash",\n"url": "url",\n"deviceId": "-1",\n"alertState": "Alert",\n"sender": "SevOne",\n"objectAltName": "testObjectAltName",\n"thresholdName": "Website Alerts - testDeviceName - testObjectName",\n"alertType": "Metric",\n"alertId": "-1",\n"objectId": "-1",\n"cluster": "All Devices",\n"description": "Default Alert Message",\n"deviceIp": "10.1.2.3",\n"policyName": "Website Alerts",\n"objectDescription": "testObjectDescription",\n"pluginName": "HTTP"\n}\n')),(0,i.kt)("p",null,"Regarding the ",(0,i.kt)("strong",{parentName:"p"},"Event attributes"),", the following example mappings can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'Severity: alertState = "Emergency" ? "Critical" : alertState = "Alert" ? "Critical" : alertState = "Critical" ? "Critical" : alertState = "Error" ? "Major" : alertState = "Cleared" ? "Cleared"\nSummary: description\nResource name: deviceName\nEvent type: policyName\n* Resolution:  alertState = "Cleared"\n* Sender: Name: "SevOne"\n* URL 1: URL: url\n* URL 1: Description: url\n\n* Fields marked with an asterisk first need to be added via the Optional event attributes link.\n\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Further information regarding the generic webhook event integration can be found here, including a table that maps the integration attributes to event fields in the Event Manager event store (Netcool/OMNIbus ObjectServer): ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/noi/1.6.5?topic=integrations-webhook"},"https://www.ibm.com/docs/en/noi/1.6.5?topic=integrations-webhook")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Complex mappings such as the Severity field example above can be mapped using JSONATA functions: ",(0,i.kt)("a",{parentName:"p",href:"http://docs.jsonata.org/object-functions.html"},"http://docs.jsonata.org/object-functions.html")),(0,i.kt)("p",null,"The completed configuration should look something like the following:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACaklEQVQoz3WSS0uVQRjH32WbLpsy8XjJo+lJjdLCyErILtiJkjYug9qoCzt2tAz8BLkqDKylEbpsU36AgjZ9iSTMPO9l5p155n6J9z0aKvXjYWBm+M/8n4d/gFASxzFCKEmSKIrCMMQYI4TiOCaEWGvN/wniBNdqYbRLGIYIIcYY55wxBv+CAmXAgNIAgCul/C7OOWutELyOlFLlSClFjpTSWruFtrkUAVAKAIJLzrM7a239Ca21MQYAfufEcUQpoZQAJZzzn/EWARp8Xv80MfVodn6yMjNRqUzOzlWeViuzczPPn1Wnp6fW1lallAihzC3TKShEFRfKGauVDpaWXhfajp2/XBgYbOvpbTnd1VQsNjYVTjS3nDx85ND8/Jz3HoAprazzznvjvHNZg9nA3r5bLvW1Dt0oXRvuG7l+7tJgz9mzXd2lzp7e7kJz48LCC+99LYyBUplPQghurfHeK6WC5eU3xe6Gi8Mt/Rfa+weKpTOtHZ3Np9oLHZ2txxuOVqtPvPeYUGOM3qU+F611sLr6oXxv5OHjB+PjY/fH7o6Nle+Ub42O3iyXb1+5OvRycdE5G0aJsc5nrrNZutx3Jt7c3Nz4sYERThAiKSGEYIxTnKY43arhCFEpBUrB7Wen551g1WocE2us34+UgjFGgXnv7R7q2yAMwzRNSUokcG/dAbEQuZhSKeWBnzPbcZ7JKAo1wo4yL1W9tzpGqyyjmVjsRNBnGXSZ2AYJSqMYbddCgvP8pADA/xahjNZXygA4BW7y1pyV3rOACcul5cqBsCBMVlzvKZNVfk6Zktp//fZ9ZeX9xy+/Xq37P9U49Wm0WlrhAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"mapping",title:"mapping",src:"/waiops-tech-jam/static/31dbb84216ba99b9a82f4bc49a2256cc/3cbba/mapping.png",srcSet:["/waiops-tech-jam/static/31dbb84216ba99b9a82f4bc49a2256cc/7fc1e/mapping.png 288w","/waiops-tech-jam/static/31dbb84216ba99b9a82f4bc49a2256cc/a5df1/mapping.png 576w","/waiops-tech-jam/static/31dbb84216ba99b9a82f4bc49a2256cc/3cbba/mapping.png 1152w","/waiops-tech-jam/static/31dbb84216ba99b9a82f4bc49a2256cc/84b04/mapping.png 1359w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"The sample event generated via the ",(0,i.kt)("strong",{parentName:"p"},"Generate")," function should look something like the following:"),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"817px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.027777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAcUlEQVQI1x2KQQrEIBRDe//bqai0LhwpgorV1QwK1Qz/L0KSlxzndcE5B2sthBCIMcIYA+89UkrcQwiQUjK/75uZ1hpKKc70pUw6fv6D75xoz4PWGvbe6L2jlML9fV+MMZBzZjbnxFqLN+L0J6et1oo//TmUF8XchgoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"event",title:"event",src:"/waiops-tech-jam/static/7caa13ec2b16dba738b58a40c4baf898/6a490/event.png",srcSet:["/waiops-tech-jam/static/7caa13ec2b16dba738b58a40c4baf898/7fc1e/event.png 288w","/waiops-tech-jam/static/7caa13ec2b16dba738b58a40c4baf898/a5df1/event.png 576w","/waiops-tech-jam/static/7caa13ec2b16dba738b58a40c4baf898/6a490/event.png 817w"],sizes:"(max-width: 817px) 100vw, 817px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)("p",null,"You could now take the URL you copied from the new integration to SevOne and use it to set up a new event target."),(0,i.kt)("p",null,"You have now completed this module and are ready for module “Create sample topology in Watson for AIOps Event Manager”."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://community.ibm.com/community/user/aiops/blogs/zane-bray1/2022/04/22/getting-started-with-watson-aiops-event-manager-37"},"Reference Blog")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-aiops-webhook-index-mdx-ca0d93e3b7686892f583.js.map