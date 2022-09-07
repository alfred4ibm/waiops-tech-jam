"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[9148,1532],{3624:function(a,e,t){t.d(e,{Z:function(){return y}});var i=t(7294),n=t(8650),s=t.n(n),o=t(1597),l=t(4799),r=t(3448),c=t(5900),p=t.n(c),m=function(a){var e,t=a.title,n=a.theme,s=a.tabs,o=void 0===s?[]:s;return i.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=o.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===n,e))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},g=function(a){var e=a.relativePagePath,t=a.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=t||n,l=s.baseUrl,r=s.subDirectory,c=l+"/edit/"+s.branch+r+"/src/pages"+e;return l?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=t(4703),A=t(1721),b=function(a){function e(){return a.apply(this,arguments)||this}return(0,A.Z)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,n=a.slug,l=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(a){var e,t=s()(a,{lower:!0,strict:!0}),r=t===l,c=new RegExp(l+"/?(#.*)?$"),m=n.replace(c,t);return i.createElement("li",{key:a,className:p()((e={},e["PageTabs-module--selected-item--aBB0K"]=r,e),"PageTabs-module--list-item--024o6")},i.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},a))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},e}(i.Component),h=b,k=t(7296),f=t(5387),u=t(3732),w=function(a){var e=a.date,t=new Date(e);return e?i.createElement(u.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(u.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(a){var e=a.pageContext,t=a.children,n=a.location,c=a.Title,p=e.frontmatter,A=void 0===p?{}:p,b=e.relativePagePath,u=e.titleType,y=A.tabs,N=A.title,B=A.theme,C=A.description,I=A.keywords,v=A.date,x=(0,f.Z)().interiorTheme,E=(0,o.useStaticQuery)("2456312558").site.pathPrefix,S=E?n.pathname.replace(E,""):n.pathname,Q=y?S.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",T=B||x;return i.createElement(r.Z,{tabs:y,homepage:!1,theme:T,pageTitle:N,pageDescription:C,pageKeywords:I,titleType:u},i.createElement(m,{title:c?i.createElement(c,null):N,label:"label",tabs:y,theme:T}),y&&i.createElement(h,{title:N,slug:S,tabs:y,currentTab:Q}),i.createElement(k.Z,{padded:!0},t,i.createElement(g,{relativePagePath:b}),i.createElement(w,{date:v})),i.createElement(d.Z,{pageContext:e,location:n,slug:S,tabs:y,currentTab:Q}),i.createElement(l.Z,null))}},1035:function(a,e,t){t.r(e),t.d(e,{_frontmatter:function(){return l},default:function(){return d}});var i=t(3366),n=(t(7294),t(4983)),s=t(3624),o=["components"],l={},r=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}},c=r("AnchorLinks"),p=r("AnchorLink"),m={_frontmatter:l},g=s.Z;function d(a){var e=a.components,t=(0,i.Z)(a,o);return(0,n.kt)(g,Object.assign({},m,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"3-1: Introduction"),(0,n.kt)(p,{mdxType:"AnchorLink"},"3-2: Ingest application performance data from Instana"),(0,n.kt)(p,{mdxType:"AnchorLink"},"3-3: Summary")),(0,n.kt)("h2",null,"3-1: Introduction"),(0,n.kt)("p",null,"Turbonomic Application Resource Management (ARM) is all about ensuring your\ncritical business applications are getting the resources they need, when they\nneed them, to proactively mitigate against SLO breaches and SLA violations."),(0,n.kt)("p",null,"To do this, Trubonomic ARM ingests data from your existing tools to begin the\nprocess of making recommendations and taking actions across your full stack,\nusing it’s ",(0,n.kt)("strong",{parentName:"p"},"patented analytics engine"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Keyword Alert:")," A ",(0,n.kt)("strong",{parentName:"p"},"target")," is the term used for your existing solutions\nand accounts from which Turbonomic ARM will either pull data from, or\nintegrate with to perform actions.")),(0,n.kt)("p",null,"Data ingestion is typically agentless and conducted via REST APIs (with the\nexception of Kubernetes - more on this in a later lab)."),(0,n.kt)("p",null,"For business critical applications, application performance monitoring (APM)\ndata is pulled from your existing APM solution(s)."),(0,n.kt)("p",null,"In this section, we are going to integrate Instana to get application\nperformance data for the Robot Shop application."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")," If you have not already done so, please complete the\n",(0,n.kt)("a",{parentName:"p",href:"https://ibm.github.io/waiops-tech-jam/tutorials/instana/introduction"},"Instana"),"\nlabs first.")),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABJ0AAASdAHeZh94AAACeUlEQVQoz32SS28TVxiG+ZfdddMdqpQ/wKJsULNCEImoG4REUyktISARQVIhxAKaNIAd4/tl7IzHczlzztzHnvE4firPgCIh1CO9Ot/mPHrP9743+M5Zr9flnec5SZLgj3q0aucEniDPMhZpitO6oFE/Jw49wjCkKIryzY2vgG9VArOMiW7y9sMlR287HL8fIWSA5SgeH3V48KTBq3dDkjggy/MK+PXxd52ucs5qA27evWBr5zM/bX+k1tbRdJut+xf8eOcT9/abLNINcHntsFhd4QY5tkoZ6YKJIZFhgfASai2N7T96/Pp7l+29DsOJxXQm+OVhk5/v1tg9aDFPvgGmeYEXV5avvoiiIDUtnE6XRBh80v6FVUEU+QzHJls7DX64/YE7j+rME/8aGEUh7WafTmuA8j1IU9ZhCIsFeRBgC8FwOKQ/HDAaaYRhgFQBz1832H9Z481plySOyLIvO5Se4Nl2l4NbA2bCAl1nfXIC4zFZFOGHIbquM5vNME2zXP5ymTPoNhkN2kz1MUEQXKfshZLD3X84uHeGJcxNVyqHccx6PieKY5RS+L5fajMrKZkaBpZll1LKY5FlFXBTjZGu0RsPmKdplW5VQpZxjO26eEohpcS2BUK4jPUZyvMwLYuhNmYee/jKKZ2WoWz2GaVVfVbFiqs1rBcZSyGo1+rsPTnEsU1++/OU/eMWe6/OafY0zusNnh6/4cW7KX+dtHFdUQGzfMXMnaPCHMOJcLxqNqeSdqtLb6Qx1XW0qWRqB1xaPrbjMtENehODvb8veXzURm6A/1fs5WqF7ThI6SKlYtDvUq99pPm5Qb/fwzCMMjBfWvjKLr/8H+RFdUG0CoHVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"arch 1",title:"arch 1",src:"/waiops-tech-jam/static/12b83ef5b7f42505733788674976c977/3cbba/arch-1.png",srcSet:["/waiops-tech-jam/static/12b83ef5b7f42505733788674976c977/7fc1e/arch-1.png 288w","/waiops-tech-jam/static/12b83ef5b7f42505733788674976c977/a5df1/arch-1.png 576w","/waiops-tech-jam/static/12b83ef5b7f42505733788674976c977/3cbba/arch-1.png 1152w","/waiops-tech-jam/static/12b83ef5b7f42505733788674976c977/cc5f9/arch-1.png 1176w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"3-2: Ingest application performance data from Instana"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Instana console:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings -> Team Settings page -> API Tokens"),"."),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Add API Token")," to create an API key from Instana.")),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABPUlEQVQoz52RzUsDMRDF82+LQlE81BZLL8VDK7UqWq0iehI89CQIogdBkN6ksqDg7kr3I8lM8iTptmxRD3XgBxmYPN6bEbf3j7i8GSInRq402BgwFxgD4r/RmpBlGdI082+lNcTOYR9rlU0gipBEMaQmSKU9uVTFZ/4JMchYaGuhaNozM0R3cIHaVgMIQ2RRDE0MpRSIyGOM+RULgCYTqCAAxzHIJ2OIztEpau09lOszDP0nV9baObOaCyYJ8vEYFIbe7VSwf4aV1XWM7h4wvLrG28vIDzunZVz0TCpEXxMf2e3MizhhCx/ZGAvRPjnHRrWBdBzg9ekZyfuHF3RHcU64wA0rd4RczmNzEXN2QGMtxH6nh2a9uRC5HG/ZEt3dHurVbd9IqWCNXdjbsojWwTEqzZYXTNJ0weF/BL8Bejav1q5AlnQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"addApiToken",title:"addApiToken",src:"/waiops-tech-jam/static/6788f6dcc120124a0faf20d193e7e02c/3cbba/addApiToken.png",srcSet:["/waiops-tech-jam/static/6788f6dcc120124a0faf20d193e7e02c/7fc1e/addApiToken.png 288w","/waiops-tech-jam/static/6788f6dcc120124a0faf20d193e7e02c/a5df1/addApiToken.png 576w","/waiops-tech-jam/static/6788f6dcc120124a0faf20d193e7e02c/3cbba/addApiToken.png 1152w","/waiops-tech-jam/static/6788f6dcc120124a0faf20d193e7e02c/b2dda/addApiToken.png 1321w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the create API token page, enter a name for your token, e.g.\n",(0,n.kt)("inlineCode",{parentName:"p"},"Turbonomic API Token"),":"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important:")," Copy the API token generated use in later steps:"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"eye")," icon as in screen shot below. This will show the token."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("em",{parentName:"li"},"copy")," icon next to the token to actually copy the token:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Clicking the ",(0,n.kt)("em",{parentName:"li"},"eye")," icon alone does not copy the generated token,\nit just makes it visible."))))),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABU0lEQVQoz42S2U7DMBBF/f9f1SfgpUggIYQQlDa0JYE0qfd4u8gTt6ERQlg6Gq/XY99h+48GQiiEEAn/bwIG5yCVhrED9TNsVzdlwsP5QBsJH2hMc39gjIWxtow92L49QGXBYYAxBkJIKCkhlMapxd+IkUgpIaWpz4SU54M+RhyOR/RSod1s8HC3wrZRgBRIUo4IgcQ5UhYAiuAEe3pZ4XX9jmpfQ7QHmLpB6Dr43Q7Pj1tUtQSURJQKkfMSBWIIiCkhxkTxLHizvMfiaonF9S2+1hX46g16U8FzXvJO8LGQfsRizEiE856ezbiYnpxv6vvj+I/awDlPm0MIpQrmcXQ8nxNSjy5/tofzB+fbtLFQxpLr4SKLOdNafrbSlrJkzVdLGdFh79F1Pd00/+w5w+BIgOpxcJRIzpwJqUjotNHacQHFQXI/BCitLwSnkinGlLL5Bvi3DVm2Jl70AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apiToken1",title:"apiToken1",src:"/waiops-tech-jam/static/46a9ce1cae2bae7e4297abea8c100e73/3cbba/apiToken1.png",srcSet:["/waiops-tech-jam/static/46a9ce1cae2bae7e4297abea8c100e73/7fc1e/apiToken1.png 288w","/waiops-tech-jam/static/46a9ce1cae2bae7e4297abea8c100e73/a5df1/apiToken1.png 576w","/waiops-tech-jam/static/46a9ce1cae2bae7e4297abea8c100e73/3cbba/apiToken1.png 1152w","/waiops-tech-jam/static/46a9ce1cae2bae7e4297abea8c100e73/d0818/apiToken1.png 1325w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then scroll down to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Permissions")," section to enable the following\npermissions:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Access to audit log"),(0,n.kt)("li",{parentName:"ul"},"Access to token and session timeout settings"),(0,n.kt)("li",{parentName:"ul"},"Access to license usage"),(0,n.kt)("li",{parentName:"ul"},"Access to on prem license usage"),(0,n.kt)("li",{parentName:"ul"},"Access to account and billing information"),(0,n.kt)("li",{parentName:"ul"},"Service & endpoint mapping")),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABU0lEQVQoz4WRSUsDQRCF+1d5ckM8epFEJUjUn+spCBHEi4SEEBAza+/bk6qZZCKIDjyqumvq61fd4nR0j9V6A6UNnA8/5EP8V8Y61E0L5zyMsRAXdw8opYL1HtY6LngfOI8x/qkQhhhCQEwJ4nLyBGUsdp9zDkprznPOSCnt42FO0XkPHwIDrXMMFec3U3wsVlgs11hvPtl2XTcMPoRIqbiWM/r93KurE5QOEMfXE8zmb3iezfHy+o5WKmyLEtuy4rshB9RI+yTKA40ZU6/IUG0sWqUhzm4f4b3fj2ysRVU33EwPZdlphlSa1/FXYEZtW0inIE7GUzSt5PmpQI9BMALwA9HFp8Tj0t4AG2KKGa1T0N5AHF2NGKCN6Rwai7KqsS2q7qDeAf1TlBWvY0x77eqNlZBOE3DcnRwiA7U23PhVlDwiuSCHBO9G3rkb1AEVWqPwDYKsrRjVPEi2AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apiToken2",title:"apiToken2",src:"/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/3cbba/apiToken2.png",srcSet:["/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/7fc1e/apiToken2.png 288w","/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/a5df1/apiToken2.png 576w","/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/3cbba/apiToken2.png 1152w","/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/0b124/apiToken2.png 1728w","/waiops-tech-jam/static/b7fada5b6525b61409144313258c87a2/2eafe/apiToken2.png 1887w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," button. The API token is created."),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABJ0AAASdAHeZh94AAAA3klEQVQoz4WQPWsDMQyG/a869QtKtk7hhoQbSv5vhlBKaAkNHHQpTZfasWTZesuJ69HAfQgePMh+9cjurqrx+XVCJAYnuUAkz5KSwPtgZ4t7WD3h2wdEZnBLSl0zoZQyS8rZyB1usd5Y0F957/HjPRSAqg7SB6qCcgbnzlYE7raqsXt5xXa3x/P+gBAJZxaUMhzWDpKcQcSIRNBSTEQtXOFulmscjg3e3hscmw+bjAm7FuuP3HH3qw1EpF/5/6PxGu+762Vtf0bMZtcbTBhO4a4eK4RwRox0udKs5bDhL0h4ZonIhAaBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apiToken3",title:"apiToken3",src:"/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/3cbba/apiToken3.png",srcSet:["/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/7fc1e/apiToken3.png 288w","/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/a5df1/apiToken3.png 576w","/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/3cbba/apiToken3.png 1152w","/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/0b124/apiToken3.png 1728w","/waiops-tech-jam/static/af54f0aa0625309838e87e4d84548891/0392b/apiToken3.png 1883w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Turbonomic console, go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings -> Target Configuration"),":"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.083333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABsElEQVQoz42STWsTURSG58e4cyPa+lV3FiT4mQaSWdhFEeKma3fVoAutlkJbY0QRiriUoVQUjGkt7oxooammWlCaiCOZTs1krnNnksw84q0E+u2Fl/fexXk45z1XSyQSCFcQyAD/t2S7E0URYRj+l7RUKkXtV4335Q98/fmNqv2dpepnda/YVcorS6zV12g2m/i+v6e0dH+asVdZDl8/wenROCeHY8RGz3Nq5CyxkXMcyhxjrvxGdeoHPq1WSxUGQbCttEtDaR6+fMQt4zbP5l8wPf+cx7NPMIpTPH1nkCs84O1yUYEcx8G27Q3dbgFeHB7AmDMoLhQ7mcm6BxEQRrj1Bj9qJsITrFqrmKa5YcQtwL4zfRQ+vWZiJsd4Pst4/h4ThRx3CznG8lluTN8kO3MfT3oK4HmeKtwRqCd1Lk8Osu/KfrozPXRdO86BoSPKuzI9HLx6lN47MVzPxak7WJa1a45a/EKcilVhoVJisfpR+boWKf19r5T4Yi53ALstRAH7k0naQRvpSsKg/e/jbVLIOizYG6rpuo4QgobbwBUC6UuVlyclUsqOb17ETiP/AQlBxKJ+j1m5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"targetConfiguration",title:"targetConfiguration",src:"/waiops-tech-jam/static/e4d181f7251779566f8763d4d28077b8/3cbba/targetConfiguration.png",srcSet:["/waiops-tech-jam/static/e4d181f7251779566f8763d4d28077b8/7fc1e/targetConfiguration.png 288w","/waiops-tech-jam/static/e4d181f7251779566f8763d4d28077b8/a5df1/targetConfiguration.png 576w","/waiops-tech-jam/static/e4d181f7251779566f8763d4d28077b8/3cbba/targetConfiguration.png 1152w","/waiops-tech-jam/static/e4d181f7251779566f8763d4d28077b8/5760c/targetConfiguration.png 1363w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"NEW TARGET")," button (top-right) and then select\n",(0,n.kt)("inlineCode",{parentName:"p"},"Applications and Databases"),":"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.65277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABP0lEQVQoz41TPU/DMBD1/wSpKKhDhVR+BuIP5F8wwsjQdglTmogFpgyUpU1KHDuO8/HQXepSoKGc9GTfne/d81kW948PWL2v0DQNyrJktG2LU0bntVIo8hxKSnRti7quIc7G5wieAhhjsNlsGFprLhgCtdPrNbLFAh9BgGI2Qyclx8X4cozFfI4sy7Ddbhl5nqOqKlhbsxpS3HVdD9oDMFpDpimsUuiM4TiZmEwmiKKIHSIh2ba20KVCURTsO2PC3b4kkh9joLyYXk8RxzEHjClhrYUyClneK5ZSQinNxFTgGqdpytffN9rlxO3dDV7fXkDtTGWYkFb3QDRbWvsR2D1I/SGhM+FdeYifo51C86vwEJRz+WHCCw/L5RfhseJjGCQcjUYIw/CbwlP4k9D3fSRJwg4dpOH/B9TcfYBDwk+UOP0dBY61tQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"applicationAndDatabases",title:"applicationAndDatabases",src:"/waiops-tech-jam/static/f5176c525c6a5d574224e21f6163e2ae/3cbba/applicationAndDatabases.png",srcSet:["/waiops-tech-jam/static/f5176c525c6a5d574224e21f6163e2ae/7fc1e/applicationAndDatabases.png 288w","/waiops-tech-jam/static/f5176c525c6a5d574224e21f6163e2ae/a5df1/applicationAndDatabases.png 576w","/waiops-tech-jam/static/f5176c525c6a5d574224e21f6163e2ae/3cbba/applicationAndDatabases.png 1152w","/waiops-tech-jam/static/f5176c525c6a5d574224e21f6163e2ae/58bd0/applicationAndDatabases.png 1303w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Instana"),":"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABMElEQVQoz32RPXKDMBCFObmLkHFBQZEbZHIId2mSxidw5cLjwgWGYH6klZD0MrtGmCHBmnkjgVbfvt1NvvbfQAB61aPvexhjsLYCACKCvt3Qti2stdOd9x7OOSSbdCM/yrJEVVVomgZ2sHI5l3cO1jn0pxPqwwF0ucBLlnBPFoJAk/QlFUhRFLLXdQ2lFIy1EhADeR+8B53PMMcjcL1OoDBCeSVZlslBa41hGMSdJi3lc3nzYHZKSnHdCJxk4ZCV5Hk+Aa2xIEP46Sq0o9uu6yYwJ9REUz8ZFhZ9Tj4+3+9A0tJkHooiJQkYFCUwraUd0RFmDh8lvz1KZhhD18SwP8Clw+3r9lHy+JDBUfGb938dLoFpmspBJjsDLRUd8rCeAne7nRz4AfdpTTzh6PYZ8BeBrQaj/n014gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instanaTarget",title:"instanaTarget",src:"/waiops-tech-jam/static/fd71ae6392cca23374aaef5c743abbbe/3cbba/instanaTarget.png",srcSet:["/waiops-tech-jam/static/fd71ae6392cca23374aaef5c743abbbe/7fc1e/instanaTarget.png 288w","/waiops-tech-jam/static/fd71ae6392cca23374aaef5c743abbbe/a5df1/instanaTarget.png 576w","/waiops-tech-jam/static/fd71ae6392cca23374aaef5c743abbbe/3cbba/instanaTarget.png 1152w","/waiops-tech-jam/static/fd71ae6392cca23374aaef5c743abbbe/b3a2f/instanaTarget.png 1305w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the Instana hostname, API key (which you have created in Step 2 earlier),\nand proxy username set as ",(0,n.kt)("inlineCode",{parentName:"p"},"administrator"),":"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," For ",(0,n.kt)("em",{parentName:"p"},"Instana hostname")," use the Instana server’s IP address if\nusing a provisioned lab environment during a scheduled Tech Jam event."),(0,n.kt)("p",{parentName:"blockquote"},"Normally, if your Instana server has a DNS resolvable name, you can use\nthat.")),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABiklEQVQoz3WSQW6CQBSGOVQ3JqZNmjTB3qBdN71BT+Ci3fcI3eoN3Ltwpya60ZAWBC2oyCAzwMzfvCcY2thJ/gwJvO99bwbr9f0N4TaEzCTiOMbxeAQtY8zF0Io3G8yGQ6znc5g0hTkVoCgKWNe3N5jNZ9jtdoiiCNvtFkmSIM9zlGUJrTXvdaj4azLBR7eL5WAARBHKCkgylm3bWC6XSNP0V5RSnNqKd2O4WLkusFhATacoXPdsSCJW5+4eQRBwEQFIWyqJvdgjOSSQUrJlDdbGII1jJKsVxGqFoh4ZgBAC1nP3CetwDV1qBtKoBIxFzB/UxtSIRs6V4tEKrU/m1KR6ZuDjywOC7wBGm/OYBP2b+l2WZRDUgKwroGkCW1ctuHQmAI/XLG6mBkulkIYhpOdBbzYwQkBXI/MZ2h0bvu/zGf1n10xG8X3kjgPtOABBKyDZW+12G57nMZAML9k1I/MckeMgHI+RHw7nRnyZUsLq9/s8OwGb/9vFFAWbfI5GGPd6fMPUQDVEfgBaBPT8gqCS0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"addInstanaTarget",title:"addInstanaTarget",src:"/waiops-tech-jam/static/345bf289ae7ff63da75ca662169d4015/3cbba/addInstanaTarget.png",srcSet:["/waiops-tech-jam/static/345bf289ae7ff63da75ca662169d4015/7fc1e/addInstanaTarget.png 288w","/waiops-tech-jam/static/345bf289ae7ff63da75ca662169d4015/a5df1/addInstanaTarget.png 576w","/waiops-tech-jam/static/345bf289ae7ff63da75ca662169d4015/3cbba/addInstanaTarget.png 1152w","/waiops-tech-jam/static/345bf289ae7ff63da75ca662169d4015/99fc6/addInstanaTarget.png 1361w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," It can take some time for Turbonomic to discover and validate the\ntarget. Once it is validated, you should see:\n",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABnWAAAZ1gEY0crtAAAB00lEQVQoz52TwW7aQBCGeR1uRfRQuPAGfbUeeohKMBCIkkNVNYccK/WaNE2EKEgtYBthaojXGIPx2t71+q8YFKKWVGo60n/Yf3Y/zYxmc4XXL3F9dQXf9+G6Lpb+Ep7nQcQS/xO54qsivnW7UEphs9kg4hHWmzVmgY17Pic5/H6nyNl783CGdbKGShVkKpGmKSlXeFFAr9cjepzEUFLBizycm2209DpOjSbqgypJG7x79EZV3LIbZDKjd0mSkHLFYnEPjKIIqUixCF2cGS20jQbqwyo+Wu9xMf2AS/sCJyONoA9AyF0hQghSrlwuHwL5AmdmC6dmE8ffj3ATXOOz9wmd6A7nRpugjdHx08BKpfIHUFGF27ZOdA1NvYa23sDb7hs0hzXyWkYdteERvrIvh8BSqfQIjCMyecJh85+YBGPo3gjmyoC+HGHg/qDzeGViyi2atRSSZvdky3G8G+720jaUUGBzhok5AZu7sMYWae0HlM9U9huMgPl8/gAopKBVCMMQ/sqHbdtwmAPmMjDGEGwCRHFMa/JvQCGQZRl5oQgxc2fwlz4WiwU45/slfj4wA4QSYJ6Dfr8Pa2pBSkm5rZ4NfKhy+4M0TUOn09nNVqm/VvgLe3xm3CXcY2oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"target added",title:"target added",src:"/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/3cbba/instana-target-added.png",srcSet:["/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/7fc1e/instana-target-added.png 288w","/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/a5df1/instana-target-added.png 576w","/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/3cbba/instana-target-added.png 1152w","/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/0b124/instana-target-added.png 1728w","/waiops-tech-jam/static/e91a5cbd4a2e69ef143e8b0780122fbe/12611/instana-target-added.png 1898w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,n.kt)("p",null,"After it is validated successfully, it will be displayed as a validated target\nin the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Target Configurations"))," list in the Turbonomic console settings."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABQUlEQVQoz6WT3W7CMAxG+9rbs7DnGBLPMGkXlQYU6NC0iRZUaEraxPn5Jpu2Y2i7ItKR08Q5shM1ybc59FmjqirUdQ3vPRAjQghC/I8YJfIwxuB5OsV6vUaSpqlIuq6DtRZEBGJpP3xP6BnmLgRY50AMEZqmEbEItdZQSskCJ3R1ja8sQ1MUQNsC5zPiFdBaolcKxGeI4JyTwpL521wmIrMWNnqUry+YPDxi9jRBzHO41QrIc5lzpOUSJssQ0hRU19IRd8fSZPv5frkHa+CIoE2LU1Wg3e3QFgXMfg9/OgFKISol0RwOsuePR6nQEv0INx8bIF6EXDrH1nTQxqDlpBgFCmHE8LWwhCvjO+fOBiG3PLzU+CgDnMjr/d4A9Yzf1xVmWTYKB5G9Sf6L271RuFgsflV4DyIsy1KEw7PfA/8I32yRBtHUI68tAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"instanaValidatedTarget",title:"instanaValidatedTarget",src:"/waiops-tech-jam/static/884dc33a776e05f4fb3632f904aa20c8/3cbba/instanaValidatedTarget.png",srcSet:["/waiops-tech-jam/static/884dc33a776e05f4fb3632f904aa20c8/7fc1e/instanaValidatedTarget.png 288w","/waiops-tech-jam/static/884dc33a776e05f4fb3632f904aa20c8/a5df1/instanaValidatedTarget.png 576w","/waiops-tech-jam/static/884dc33a776e05f4fb3632f904aa20c8/3cbba/instanaValidatedTarget.png 1152w","/waiops-tech-jam/static/884dc33a776e05f4fb3632f904aa20c8/c63e3/instanaValidatedTarget.png 1290w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("hr",null),(0,n.kt)("h1",null,"3-3: Summary"),(0,n.kt)("p",null,"In this portion of the lab, you have learned how to integrate your existing\nAPM tools to give Turbonomic ARM a view of your critical buiness applications."),(0,n.kt)("p",null,"Navigate to the next section to start understanding the Turbonomic ARM user\ninterface."),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-turbonomic-integrate-instana-index-mdx-74e0771ef894b6b026b5.js.map