"use strict";(self.webpackChunkibm_aiops_swat_tech_jam=self.webpackChunkibm_aiops_swat_tech_jam||[]).push([[4543,1532],{3624:function(a,e,t){t.d(e,{Z:function(){return y}});var i=t(7294),n=t(8650),o=t.n(n),c=t(1597),s=t(4799),l=t(3448),r=t(5900),p=t.n(r),m=function(a){var e,t=a.title,n=a.theme,o=a.tabs,c=void 0===o?[]:o;return i.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=c.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===n,e))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},d=function(a){var e=a.relativePagePath,t=a.repository,n=(0,c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||n,s=o.baseUrl,l=o.subDirectory,r=s+"/edit/"+o.branch+l+"/src/pages"+e;return s?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},g=t(4703),A=t(1721),b=function(a){function e(){return a.apply(this,arguments)||this}return(0,A.Z)(e,a),e.prototype.render=function(){var a=this.props,e=a.title,t=a.tabs,n=a.slug,s=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(a){var e,t=o()(a,{lower:!0,strict:!0}),l=t===s,r=new RegExp(s+"/?(#.*)?$"),m=n.replace(r,t);return i.createElement("li",{key:a,className:p()((e={},e["PageTabs-module--selected-item--aBB0K"]=l,e),"PageTabs-module--list-item--024o6")},i.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},a))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},e}(i.Component),h=b,u=t(7296),k=t(5387),w=t(3732),f=function(a){var e=a.date,t=new Date(e);return e?i.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(w.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(a){var e=a.pageContext,t=a.children,n=a.location,r=a.Title,p=e.frontmatter,A=void 0===p?{}:p,b=e.relativePagePath,w=e.titleType,y=A.tabs,N=A.title,v=A.theme,S=A.description,x=A.keywords,C=A.date,B=(0,k.Z)().interiorTheme,E=(0,c.useStaticQuery)("2456312558").site.pathPrefix,R=E?n.pathname.replace(E,""):n.pathname,j=y?R.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",Q=v||B;return i.createElement(l.Z,{tabs:y,homepage:!1,theme:Q,pageTitle:N,pageDescription:S,pageKeywords:x,titleType:w},i.createElement(m,{title:r?i.createElement(r,null):N,label:"label",tabs:y,theme:Q}),y&&i.createElement(h,{title:N,slug:R,tabs:y,currentTab:j}),i.createElement(u.Z,{padded:!0},t,i.createElement(d,{relativePagePath:b}),i.createElement(f,{date:C})),i.createElement(g.Z,{pageContext:e,location:n,slug:R,tabs:y,currentTab:j}),i.createElement(s.Z,null))}},4712:function(a,e,t){t.r(e),t.d(e,{_frontmatter:function(){return s},default:function(){return g}});var i=t(3366),n=(t(7294),t(4983)),o=t(3624),c=["components"],s={},l=function(a){return function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}},r=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:s},d=o.Z;function g(a){var e=a.components,t=(0,i.Z)(a,c);return(0,n.kt)(d,Object.assign({},m,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"7-1: Manage Performance of Your Application"),(0,n.kt)(p,{mdxType:"AnchorLink"},"7-2: Summary")),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"7-1: Manage Performance of Your Application"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your Instana dashboard. Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Platform -> Kubernetes"),".\n",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABrUlEQVQoz42Sv2sUQRTHB7FQKyFioRAlKojKGVGLQCyCBCUYOGKQcNFK4g80asTG2Bhr/wALwcpG8G/K7d3OzpvZm9vdE+uPzGw2e6XFl5k389533vf7Rm1/+83G15/c+/KDz99/8bcqGBcFxX/Ae4+1FuccI+8pJxWqs9rj6JUF1Pl51l7sMClLjBFEbA1rY1EDmYYI+0lCPxmw30+wLkctrfeYuXoLdeYCm6/eMcpzdJYdEhhrSY2gRUhFMM1DYjEiaJ3RHwxJBin5yKOePtumu7LG3cVldj/t4ce1jDzPI1yAcxjnGIbOrUWLQ2cm5mVGGKQ6riM/Rm092eLx0grdm4vsffiIryqsSC1PLMNM0CbELhKHtUGIA1Gqs5bwxv0ux+auoWZmefT8DZOqilKmi4LsLMi1raeNhyE3kB0S3n6wzvGLHdSpc2y8fMufSRWTayJ34JkwNJY0M0g8k+hz66VtCTvLqxyZvYw6ebbt0NSSQ2KSmuhXINSRsC4Ow2gGE+PMxK+j7jzscXp+gROXrrP5+j1VWWJdkFoPJXQU4ukhTe/DnRwo8eOCf4QrXBFlKfBBAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 1",title:"action 1",src:"/waiops-tech-jam/static/4db8f742fcbc62513e911a8c7e58419e/3cbba/action-1.png",srcSet:["/waiops-tech-jam/static/4db8f742fcbc62513e911a8c7e58419e/7fc1e/action-1.png 288w","/waiops-tech-jam/static/4db8f742fcbc62513e911a8c7e58419e/a5df1/action-1.png 576w","/waiops-tech-jam/static/4db8f742fcbc62513e911a8c7e58419e/3cbba/action-1.png 1152w","/waiops-tech-jam/static/4db8f742fcbc62513e911a8c7e58419e/462c8/action-1.png 1275w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your Robot Shop cluster.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under the ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespaces")," tab, select ",(0,n.kt)("inlineCode",{parentName:"p"},"robot-shop"),"."),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABnUlEQVQoz32STWvUUBSG58f5FyxFQbpzMSh0drpw06VrQUH/gLhwIRSprVo/WqmMQZ2BTqdiGbFNM0naZJL7nUfunVQGFQ88nMvJPe99c+7t3LizRv/zkCIvOD6JmVUV1lpc04BzYBusdihj0MYuYFDaIJUO64C1dK50ezzZeM7j9afce/CI9RevGR5O+Hrwnf6PY179PCUpRDjECyhj57RiRTkL+AOl0XSurd7iZbRHYgv2DycMx0cMogGD3T57+2OexTFxXeMWnIWsDaateXFfN97h1dXbvP/4iaqsyfMzzquaYjQi29mhGo1QZ+dk05T4NCFJppzEMWmWMU2zkNM0oyjKMCohJZ3L12+yHUVooNIWoTQzqRDGUCtNJUTYGBAyNHon9jcu4OcXHC53e7zb/YDLcnSW41yDlBIp1RzV0q7rWoTGP/G/HgSXuj3ebG4hvgwRB+Mg6JsuHC3i62U5C7P7S9C2M7y0vMLbfoQP6Zq5/Ytn0KK0Djfqs8dY1wq5BVqHd+8/5NvRJAg2/t39I5qmCc59/l/4778AVYelN7MKMBUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 2",title:"action 2",src:"/waiops-tech-jam/static/68be1259c046cbe61c3aac9ea52b8c44/3cbba/action-2.png",srcSet:["/waiops-tech-jam/static/68be1259c046cbe61c3aac9ea52b8c44/7fc1e/action-2.png 288w","/waiops-tech-jam/static/68be1259c046cbe61c3aac9ea52b8c44/a5df1/action-2.png 576w","/waiops-tech-jam/static/68be1259c046cbe61c3aac9ea52b8c44/3cbba/action-2.png 1152w","/waiops-tech-jam/static/68be1259c046cbe61c3aac9ea52b8c44/d7a47/action-2.png 1271w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pods")," tab and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Map")," view:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Analyze the CPU Limits, CPU Requests, Memory Limits, and Memory Requests.")),(0,n.kt)("p",{parentName:"li"},"For example, here’s what the CPU Limits look like for Robot Shop app\nbefore taking any Turbonomic ARM recommended actions:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAACIElEQVQoz12SW0/bQBSE/e8r8VRV6kNbCdQHJC4VEi/ciygNgRAg4ZJ7nODENnGAhDhxbO+u96vihFbqkUZHO2fPaHa0htnugoZpGCOkQkiJSjRCSFAJJAmxlIvZfxCSWEik+scZuYd7ugOPtuXSsfo0H23spz7O84DKyOdxPEFKlS6+Y7YYxYJQSIYjH388IRRxCiNbu6MxdrkuN8kVq+Rvq1wVK1yUGqzZNkeeh1bJXyHx7jYWiMEQMQ0RC4czp4Zp2aQVBLAYKJUghQAhSOKYaRQThBFRFBOFEeGs+2P8yzyx6yIBJQVSSoxipUa5UGLpyw7densuriSxglDPY0RKmOVKgkCj0IQyYqoEURSlbkdBjB9EGJl8gWyuwMn+Mbc1i/XqgI3aG93yKdHVKmbrkq8dh03XpXNUwtu6wsva1DIvWIUhJ70pRe+V4d0xY7eJUW89pm+f1ZuEL4VXlksBTw+7cP6RZvOED51nvjl9vO07/OUzhj87NE8GWPkRK7Zg33IZHX4mqJ9j1Mw2SikSqRjFAdvmJQdOkfy1zcVBn0qpQbm7htnbZatVZ6XR5KDksLdjkrlw+fU05cZ95aWSw+9ZGFWzNc9NwzCesNo6ZaOT4SzrcPpjwP1NiYrzibr7neV2maVGnc1Cl611k71Dh9+VCccln/2qoN5XGE7PS/USrdFapz1Bo5PZmZSbM8litrib/nmNSEghlUaqhD8yYeba5QdW4wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 3",title:"action 3",src:"/waiops-tech-jam/static/43b71e81973364d840d7e627b9e7bd8c/3cbba/action-3.png",srcSet:["/waiops-tech-jam/static/43b71e81973364d840d7e627b9e7bd8c/7fc1e/action-3.png 288w","/waiops-tech-jam/static/43b71e81973364d840d7e627b9e7bd8c/a5df1/action-3.png 576w","/waiops-tech-jam/static/43b71e81973364d840d7e627b9e7bd8c/3cbba/action-3.png 1152w","/waiops-tech-jam/static/43b71e81973364d840d7e627b9e7bd8c/94418/action-3.png 1340w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then go to the Turbonomic ARM dashboard and navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Robot Shop"),"\napplication:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABz0lEQVQoz31STY/TMBDNn6x6QGJbdfkViHtPnLjvLwEhoRVokRBHEIRmt6FxkzRO7Pg7yUOebMtyYaSRLXvem5k3k7x8/Qq84ZjGCeMwIoQAaXo0msMPHqrvYYyB9x5KKQzD8I/HeK01xURPls+WqMoKLjgwfoB3HsYZtFKg7Vp0Ql4AkfAMfOrxnf6sQXL1/Ap1VcM6ix1LYa2lrMWhQJ7nKMsSjDEURUH3qqroPN+jn+oTDscDfrMcyWaz+UtYpHDWUXsREMmtc+BtC9n3GMcR/7MYn1y/uCZC5x2y4y8456jCtm0pYHAOqhPw1gJTBGkIJaCthtIKnPNZGimII1mv11R2HMD+9EDVRcJ4uhAQsnuo248Yu5aqKKsM35tvyLodfHAYwoDGtHjz9Qa32R2SxWJBFcaMKUtJ5JhpmuY2jDYoWI1eaTht8CX/jPfZO9zln9D1HXohwHmFtz8/4AdLkaxWq8eWLfb1HkVzQC0qIpumiVbDOk9SRAmk7iGVgNRynrLWJIeVBt44JMvleW0ssuMOD+we7FRchFaqR13XEF1HMjy1mPDsPnjSNNlut+hicPBgnKHiJbhsLoCo53lQ85RngmgxwbyL+rL8fwBL0vBTip4fowAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 4",title:"action 4",src:"/waiops-tech-jam/static/7e9f95cbe9af251c3f6b76bce75cd68e/3cbba/action-4.png",srcSet:["/waiops-tech-jam/static/7e9f95cbe9af251c3f6b76bce75cd68e/7fc1e/action-4.png 288w","/waiops-tech-jam/static/7e9f95cbe9af251c3f6b76bce75cd68e/a5df1/action-4.png 576w","/waiops-tech-jam/static/7e9f95cbe9af251c3f6b76bce75cd68e/3cbba/action-4.png 1152w","/waiops-tech-jam/static/7e9f95cbe9af251c3f6b76bce75cd68e/d1470/action-4.png 1317w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Here, we can see come key application metrics provided by Instana, e.g.\nresponse time and transactions and how they have evolved over time."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Turbonomic uses this data to provided actionable insights\nin the form of recommended actions you could take to improve performance\nand/or improve efficiency.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You will notice either green, red or yellow segments of the circles on\n",(0,n.kt)("inlineCode",{parentName:"p"},"Container Cluster")," section of the Business Application Tree on the left\nside of the screen (the ",(0,n.kt)("strong",{parentName:"p"},"supply chain"),")."))),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABJUlEQVQoz42RW27DIBBF2f9yuobuoD+VqnxElWLHMRgzgG1etxpUUrdq6iJdMQLuYR7iJhW8dyil3JVL/opzxtHiNyklpJggDBFO5zeQJcQYEUOENAqDHEFkQURwzh3KWgI5gjCG0MsLnHcIIVSonjSUUjDG1J2h1to/ZchAk4bgx9LcsCwLQogVum1b/ZXL2NYV/1mloPorsJ86OG+rmWGtb9zDwG2IscL5fC++5/NSMmJMmMlCWLIYzAA1DtDXDoGbm1IF8r6u6zdgG9SjuGaoaMKsJYzsa0YNyOXzfcu2mR7FWwgMtPCrQzcqvL5fkHZAfsTQn6X+Jvb4ZYOY5xm0THg5XfH0fL4D2q/LZ1+57KOSGSp4miWXauApNSNDGmhvPNIHdSoOdWQbEdcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 5",title:"action 5",src:"/waiops-tech-jam/static/4cb5a69bdaddef833dd414ad6c75dc23/3cbba/action-5.png",srcSet:["/waiops-tech-jam/static/4cb5a69bdaddef833dd414ad6c75dc23/7fc1e/action-5.png 288w","/waiops-tech-jam/static/4cb5a69bdaddef833dd414ad6c75dc23/a5df1/action-5.png 576w","/waiops-tech-jam/static/4cb5a69bdaddef833dd414ad6c75dc23/3cbba/action-5.png 1152w","/waiops-tech-jam/static/4cb5a69bdaddef833dd414ad6c75dc23/20c2c/action-5.png 1331w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click that circle and it will take you to a screen like below:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You will notice that there are ",(0,n.kt)("inlineCode",{parentName:"li"},"Pending Actions")," that Turbonomic suggests\nwill improve the performance and efficiency of the application:")),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABeklEQVQoz32SW2vbQBSE9ZdtYnADfi7kpf+sfSnNk23FsR3Zuq5Wq73rK1obEkrShWHgsAxzZk72/ccT+9cSIQRCCqy1xBhx0SWOISb+6k3TRAgB7z3BB7LVwwNN3WCcoWje8M5jnaXsatquYxgGpJQopf4LOUiUGck2mw1t02Ks5q0+433ADQPlz19Uz8/I7Ra13zPmOePMnyKn322Rf36Trdfr5ND62dWVMIGvKvrdjqIsqaoaH75e+b43ARhfDmSLxYK6rtFWc65ODGZEXwvM6USvFEL0KaM5q5TpP0jzEDAhYI9HsuVymQStv2V4aQq6tsLtc3SeE89nuFyhuEBRMH0AHziczvjt7t3hXEQnOi51QT9KRm0QvcQ4i/IKEzQ++PdGY8S7+RJCmjWqRVpFtlqtkqDSinZoyY85TVcTw4TzIbVfqRJhOpxzOO8Sz6LOmJu4CxzEiXpsyR6/PXIoXjBOo/UN5v7Re3e/r5hu7Db7HM46rLH8BWZfqYQbPu+4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 6",title:"action 6",src:"/waiops-tech-jam/static/9521cd7340a1a6b5a4acf5bbe536e1a6/3cbba/action-6.png",srcSet:["/waiops-tech-jam/static/9521cd7340a1a6b5a4acf5bbe536e1a6/7fc1e/action-6.png 288w","/waiops-tech-jam/static/9521cd7340a1a6b5a4acf5bbe536e1a6/a5df1/action-6.png 576w","/waiops-tech-jam/static/9521cd7340a1a6b5a4acf5bbe536e1a6/3cbba/action-6.png 1152w","/waiops-tech-jam/static/9521cd7340a1a6b5a4acf5bbe536e1a6/5760c/action-6.png 1363w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," Turbonomic does not recommend actions for a Business Application,\nTransactions, or Services, but it does recommend actions for the underlying\nApplication Components and infrastructure entities, thus providing\nvisibility into the risks that have a direct impact on the Business\nApplication’s performance."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"SHOW ALL")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Pending Actions")," section:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABJ0AAASdAHeZh94AAABVUlEQVQoz4WS3WrjMBBG/cgJKSQX7cXeLOzD9Rm20G5ip7Zj618ayWexkm4pbNuBj0ECHc3MN82PXz85doppGlFakWKilEIqUvObPotlWcg5IyI1N7vdHd4FtNV0Y4skIcTA+dIzzTPGGLTWWGu/lDYa4wzNw8M9IQS0uwFFiDHStR39MFSY+QbmrEOpGaVnmv1hX4HWG/r5lZILEgJT39N2K3Qkl4XvoiwLPkaazWZDDPFfy9Zbgrd4rVE35VLqrMr/8jrjZSEoRRwGmu12ewU6TTueOL0eUWauVa/zSyL18adaoYC8vJAeH68V1padZZon2uFU4c75ClydKyV/cPx6955LzpjocBJXl3d471FGcdEXnp5/M+sJyYWYMi56juYPox9IKZEkkWKs5qUQyOu6SOZpeuZse5rD/sB5OuOCq+DVNR98fSCSrvsl+Xb+QknqR38BUi6vLXCP0kcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 7",title:"action 7",src:"/waiops-tech-jam/static/8aaa8b9a7cfb4a01814cee97a7930868/3cbba/action-7.png",srcSet:["/waiops-tech-jam/static/8aaa8b9a7cfb4a01814cee97a7930868/7fc1e/action-7.png 288w","/waiops-tech-jam/static/8aaa8b9a7cfb4a01814cee97a7930868/a5df1/action-7.png 576w","/waiops-tech-jam/static/8aaa8b9a7cfb4a01814cee97a7930868/3cbba/action-7.png 1152w","/waiops-tech-jam/static/8aaa8b9a7cfb4a01814cee97a7930868/473c1/action-7.png 1352w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then select the pending actions that are for the Robot Shop application.\nOnce they are selected, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE ACTIONS")," to apply the actions:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABnElEQVQoz4WRy24bMQxF5/+3DgoYNuD4C7wrUKCLIIt+QLtpl2md8TiZkUYP6i3fQhzXySolcEFJEC+PqO7h2wNahBDwPi6Xy3/1L6qsSFT5rLv7dAfvPKZpAhFBa8P5I6NaKxvRcMTnx3t8+bqHfPqNAqBbrVaQUuJ4PEJrDSIL5/21uDZUVlu/p2IyRxiefuL85xesFMiloLvf75dujc4YSGWQUuLiWRNm7aCMg/MRpWR+gbUWxhj4GBFnzXI+IMWIbn81XOgcXEi3GVoXoWyAoYiQCkopfE8pxdkQIUuBIiXDtH/odrsdG7SOxli4EG+GUju8zgShHCgkJmyzHseRs5hn+GFAHkfMWiN4j269Xr8ROg9D4Tb8RtYINQWElNmw0TGhUjDWIgmBIsQb4Xa7XQiJMP34jqHvYbOHDRaDlHieBE5CYDIK2mucxgH9S4/T6wmDeIE699DnZ15r0ug2mw0btq7eGOScUOoyr5wz0lW5LEo5XbXsG3Vtd0vhuu5wOLBh+7mYM0qtKHkx/EitWXuic47HFWPk87+6M/5Y3SLJJwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 8",title:"action 8",src:"/waiops-tech-jam/static/4aa56e3776d3ba6b1427196b078119ee/3cbba/action-8.png",srcSet:["/waiops-tech-jam/static/4aa56e3776d3ba6b1427196b078119ee/7fc1e/action-8.png 288w","/waiops-tech-jam/static/4aa56e3776d3ba6b1427196b078119ee/a5df1/action-8.png 576w","/waiops-tech-jam/static/4aa56e3776d3ba6b1427196b078119ee/3cbba/action-8.png 1152w","/waiops-tech-jam/static/4aa56e3776d3ba6b1427196b078119ee/62c68/action-8.png 1341w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"EXECUTE NOW")," on the resulting pop up window:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABo0lEQVQoz4VSuY7bMBTU/39B/iCtUgQxENswAsTFFgG22C22SBUdlsSbFCWS0gSP8lUEiICBCHLevHlH8fr2CqzAPM94/tZ1/S8ojr5ZJgSb8l1RfimhtQZjDM45KKUxjuMj6B8JlnXJd3Z2+Pp7j28fRwgpkVJCUZZlFqvrGtYaWGMwTdMWuCyZRLiJPychYeYl+KRgnUWMEcXpdMqP2Z02kNplAWpB09SoqwpVVaFtWxhjMo8qstbCTxMmJjAzgdH7HFMcj8fsxBgN60b4KeQEIUa0jKPuBzDGwTmDVCqLCiGg6GwtAudIgkNpDe89isPhkMsgorEO0xw3x9YhCIfVR8wh3Msk3jAMWZT65rsOcRgegrvd7k4kQeP8Jtj8Qfn9E37++IxgzG2guWTOOZSU0MYgMIbIeT5T74v9fp8d0jAurMdFcrjooUSP97cXfLz/woUN4FZBOYV2aFH3Tf5fRA/VNdBdg5Z3UFY9BKnRlCGmiES4rgY5CykhXqcdYrjjxl2e3ovz+bw5pAaHsK1JJMQHruRn0IqQAdpZMkMTJsG/OVn/kl4pqj8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 9",title:"action 9",src:"/waiops-tech-jam/static/447096fa06de3c08276b90fb3ce95a96/3cbba/action-9.png",srcSet:["/waiops-tech-jam/static/447096fa06de3c08276b90fb3ce95a96/7fc1e/action-9.png 288w","/waiops-tech-jam/static/447096fa06de3c08276b90fb3ce95a96/a5df1/action-9.png 576w","/waiops-tech-jam/static/447096fa06de3c08276b90fb3ce95a96/3cbba/action-9.png 1152w","/waiops-tech-jam/static/447096fa06de3c08276b90fb3ce95a96/45bf8/action-9.png 1342w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You should see the action has successfully executed - a green checked mark:"),(0,n.kt)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABJ0AAASdAHeZh94AAABJklEQVQoz6VSy2rDMBDUbwccU0LyQ+0hh/5NKSZO62DJemulKVolpDmEGjow7LLgYUZj8fr+hgprLUopuKHufxEoKBnwkkCx3UT30oESQSoJ6yyWZYFz7okIHpELrLaYJwVn2jei3/ZQSmEcRxhtYLRG8L65zPlBMBOBKCGlBOUVvs2ESV8QYuCEOWeI3W4HYwzmecasJS5KQWkH6yPkYrAYxwwxIYR2Synicx7xIQd8mYnFiIhNiMPhACklzuczfPBIOSNRI+UCus6by7o3+/fk1XF1x4J93yKfTid457AGLI7f5dzvYrPZcORhGLiMtQ0/o9jv9yxS263W/wvRdR0v9R2rwxgjQgg81zBf/4Q6ueXj8ciC3ntmbWwNtdb89pW3dLXpH6SLBNsN6WZHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"action 10",title:"action 10",src:"/waiops-tech-jam/static/b115a93f665507ccf4279ed8e1945745/3cbba/action-10.png",srcSet:["/waiops-tech-jam/static/b115a93f665507ccf4279ed8e1945745/7fc1e/action-10.png 288w","/waiops-tech-jam/static/b115a93f665507ccf4279ed8e1945745/a5df1/action-10.png 576w","/waiops-tech-jam/static/b115a93f665507ccf4279ed8e1945745/3cbba/action-10.png 1152w","/waiops-tech-jam/static/b115a93f665507ccf4279ed8e1945745/b485f/action-10.png 1302w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After a few minutes, you can go back to the Instana dashboard to view the\nresult of taking the actions:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Repeat step 4 to view the changes.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"7-2: Summary"),(0,n.kt)("p",null,"In this section, you have learned how to execute actions based on Turbonomic\nARM recommendations."),(0,n.kt)("p",null,"There is much more to actions that we will cover in future labs."),(0,n.kt)("p",null,"For now, you can experiment with your environment to increase web traffic or\notherwise generate load on the application or cluster and observe the\nrecommendations made by Turbonmic ARM as various layers of the ",(0,n.kt)("strong",{parentName:"p"},"supply chain"),"."),(0,n.kt)("hr",null))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-turbonomic-taking-actions-index-mdx-682ee2edd33a6e84ced9.js.map