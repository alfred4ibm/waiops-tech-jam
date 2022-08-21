"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[5771,1532],{3624:function(A,e,a){a.d(e,{Z:function(){return u}});var t=a(7294),l=a(8650),o=a.n(l),i=a(1597),g=a(4799),n=a(3448),s=a(5900),r=a.n(s),d=function(A){var e,a=A.title,l=A.theme,o=A.tabs,i=void 0===o?[]:o;return t.createElement("div",{className:r()("PageHeader-module--page-header--NqfPe",(e={},e["PageHeader-module--with-tabs--vbQ-W"]=i.length,e["PageHeader-module--dark-mode--WCeH8"]="dark"===l,e))},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12"},t.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},B=function(A){var e=A.relativePagePath,a=A.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||l,g=o.baseUrl,n=o.subDirectory,s=g+"/edit/"+o.branch+n+"/src/pages"+e;return g?t.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},t.createElement("div",{className:"bx--col"},t.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},m=a(4703),c=a(1721),E=function(A){function e(){return A.apply(this,arguments)||this}return(0,c.Z)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,a=A.tabs,l=A.slug,g=l.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(A){var e,a=o()(A,{lower:!0,strict:!0}),n=a===g,s=new RegExp(g+"/?(#.*)?$"),d=l.replace(s,a);return t.createElement("li",{key:A,className:r()((e={},e["PageTabs-module--selected-item--aBB0K"]=n,e),"PageTabs-module--list-item--024o6")},t.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},A))}));return t.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},t.createElement("div",{className:"bx--grid"},t.createElement("div",{className:"bx--row"},t.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},t.createElement("nav",{"aria-label":e},t.createElement("ul",{className:"PageTabs-module--list--xLqxG"},n))))))},e}(t.Component),p=E,Q=a(7296),I=a(5387),j=a(3732),C=function(A){var e=A.date,a=new Date(e);return e?t.createElement(j.X2,{className:"last-modified-date-module--row--XJoYQ"},t.createElement(j.sg,null,t.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},u=function(A){var e=A.pageContext,a=A.children,l=A.location,s=A.Title,r=e.frontmatter,c=void 0===r?{}:r,E=e.relativePagePath,j=e.titleType,u=c.tabs,b=c.title,N=c.theme,M=c.description,h=c.keywords,f=c.date,y=(0,I.Z)().interiorTheme,D=(0,i.useStaticQuery)("2456312558").site.pathPrefix,k=D?l.pathname.replace(D,""):l.pathname,x=u?k.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",Y=N||y;return t.createElement(n.Z,{tabs:u,homepage:!1,theme:Y,pageTitle:b,pageDescription:M,pageKeywords:h,titleType:j},t.createElement(d,{title:s?t.createElement(s,null):b,label:"label",tabs:u,theme:Y}),u&&t.createElement(p,{title:b,slug:k,tabs:u,currentTab:x}),t.createElement(Q.Z,{padded:!0},a,t.createElement(B,{relativePagePath:E}),t.createElement(C,{date:f})),t.createElement(m.Z,{pageContext:e,location:l,slug:k,tabs:u,currentTab:x}),t.createElement(g.Z,null))}},8288:function(A,e,a){a.r(e),a.d(e,{_frontmatter:function(){return g},default:function(){return p}});var t=a(3366),l=(a(7294),a(4983)),o=a(3624),i=["components"],g={},n=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}},s=n("PageDescription"),r=n("ImageGallery"),d=n("ImageGalleryImage"),B=n("GifPlayer"),m=n("Video"),c={_frontmatter:g},E=o.Z;function p(A){var e=A.components,a=(0,t.Z)(A,i);return(0,l.kt)(E,Object.assign({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(s,{mdxType:"PageDescription"},(0,l.kt)("p",null,"A small scale example of the Image Gallery from the\n",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/language/gallery"},"IBM Design Language Gallery"),".")),(0,l.kt)("h2",null,"Example"),(0,l.kt)("p",null,"Click on an image to open the gallery."),(0,l.kt)(r,{mdxType:"ImageGallery"},(0,l.kt)(d,{alt:"IBM Design",title:"IBM Design",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAedUDQZIWD//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAQAgMSE//aAAgBAQABBQJOHWRTInrlSc5Ff//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABkQAAEFAAAAAAAAAAAAAAAAABEAMDEyQf/aAAgBAQAGPwKQrYWP/8QAGxABAAIDAQEAAAAAAAAAAAAAARExABAhQXH/2gAIAQEAAT8h4LyMEnvQ1QZsScaakivNItn21//aAAwDAQACAAMAAAAQpMc8/8QAFREBAQAAAAAAAAAAAAAAAAAAICH/2gAIAQMBAT8Qg//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQACAwEBAQAAAAAAAAAAAAERIQAQMVGBsf/aAAgBAQABPxC8QsrCzKBzC5JgAGx+alYgQAGx44oWgohPEc5qItXjlk/rX//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Design",title:"IBM Design",src:"/static/2ddadf0d404a1b59533503de431c3e63/2e753/IBM_Design_landing.jpg",srcSet:["/static/2ddadf0d404a1b59533503de431c3e63/69549/IBM_Design_landing.jpg 288w","/static/2ddadf0d404a1b59533503de431c3e63/473e3/IBM_Design_landing.jpg 576w","/static/2ddadf0d404a1b59533503de431c3e63/2e753/IBM_Design_landing.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Logo",title:"IBM Cloud",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHn7RoZAAA//8QAGRABAAIDAAAAAAAAAAAAAAAAAQAQESAh/9oACAEBAAEFAoiUcVMaf//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABkQAAEFAAAAAAAAAAAAAAAAAAABECAhMf/aAAgBAQAGPwIt12P/xAAaEAACAgMAAAAAAAAAAAAAAAABEQBRECAx/9oACAEBAAE/IZxCwaTUSASd6//aAAwDAQACAAMAAAAQMAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAGxAAAwACAwAAAAAAAAAAAAAAAREhABAgMVH/2gAIAQEAAT8QAZQxK1vdNN05hxgm5ErffH//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Logo",title:"IBM Cloud Logo",src:"/static/d804854b8ba5474f54e2d0e42c8d7313/2e753/IBM_Cloud_Logo.jpg",srcSet:["/static/d804854b8ba5474f54e2d0e42c8d7313/69549/IBM_Cloud_Logo.jpg 288w","/static/d804854b8ba5474f54e2d0e42c8d7313/473e3/IBM_Cloud_Logo.jpg 576w","/static/d804854b8ba5474f54e2d0e42c8d7313/2e753/IBM_Cloud_Logo.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Developers",title:"IBM Cloud Developers",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAX6MeRTokOf/xAAbEAACAgMBAAAAAAAAAAAAAAABAhMiAAMSMf/aAAgBAQABBQKVCJhym0sqNVfBXP/EABcRAAMBAAAAAAAAAAAAAAAAAAECERD/2gAIAQMBAT8BC1bn/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABkQAAIDAQAAAAAAAAAAAAAAAAABEBEhMv/aAAgBAQAGPwLGOGby8Ko//8QAHBAAAgMAAwEAAAAAAAAAAAAAAAERITFBUWGR/9oACAEBAAE/IVNSDmH94KhirTyatjPulFUE0//aAAwDAQACAAMAAAAQ0D//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EL1aiH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EKWlZ//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExQVFxgZH/2gAIAQEAAT8QY4SDiVfHyU9cEodjIfQCpol13rGXq1hVVOz1CoRYOcQ8fk2JFnVn/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Developers",title:"IBM Cloud Developers",src:"/static/3ec0db49251afe2446f1b2baded9e157/2e753/IBM_Cloud_Developers.jpg",srcSet:["/static/3ec0db49251afe2446f1b2baded9e157/69549/IBM_Cloud_Developers.jpg 288w","/static/3ec0db49251afe2446f1b2baded9e157/473e3/IBM_Cloud_Developers.jpg 576w","/static/3ec0db49251afe2446f1b2baded9e157/2e753/IBM_Cloud_Developers.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Data Center",title:"IBM Cloud Data Center",col:8,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgQA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABlrgCLHD/AP/EABsQAAICAwEAAAAAAAAAAAAAAAECABEDBBIh/9oACAEBAAEFAsSWWOqrGugzCH0z/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAERIhAhAxMkH/2gAIAQEABj8Cll1e1EgujHjxUSE5s6//xAAdEAACAQQDAAAAAAAAAAAAAAABEQAQITFRQXGR/9oACAEBAAE/IQAw0yhapdx+x8QKhmgYDrhyaf/aAAwDAQACAAMAAAAQxA//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCH/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAECAQE/EBRmf//EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExgVFhcaH/2gAIAQEAAT8Q/HSCvX2Fz89Z3fMaNrPXOsjNsbVg9QrTyEte4AFGE//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Data Center",title:"IBM Cloud Data Center",src:"/static/84008ed8400fe27d4ceeb982877ef78f/2e753/IBM_Cloud_Data_Center.jpg",srcSet:["/static/84008ed8400fe27d4ceeb982877ef78f/69549/IBM_Cloud_Data_Center.jpg 288w","/static/84008ed8400fe27d4ceeb982877ef78f/473e3/IBM_Cloud_Data_Center.jpg 576w","/static/84008ed8400fe27d4ceeb982877ef78f/2e753/IBM_Cloud_Data_Center.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Interconnect",title:"IBM Cloud Interconnect",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHZxtlnb0kKxigXB//EABwQAAICAgMAAAAAAAAAAAAAAAABAhIDMhATIf/aAAgBAQABBQKTodnpm1hsNJlI8f/EABgRAAMBAQAAAAAAAAAAAAAAAAIQEQES/9oACAEDAQE/AREebqq//8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAECAQE/AaU//8QAGhAAAgIDAAAAAAAAAAAAAAAAABABESExUf/aAAgBAQAGPwKyuuFk0v/EABsQAAIDAAMAAAAAAAAAAAAAAAABEBExIXGh/9oACAEBAAE/IeEiFmVYFhj2euFtJYkO1D//2gAMAwEAAgADAAAAECzAfP/EABYRAQEBAAAAAAAAAAAAAAAAABEBEP/aAAgBAwEBPxC68kDn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAREgIf/aAAgBAgEBPxDSCP/EABoQAQEBAAMBAAAAAAAAAAAAAAERACExYZH/2gAIAQEAAT8QEgrYfMyE8HYdQBbCaWmAG866AAtjhQRGmu//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Interconnect",title:"IBM Cloud Interconnect",src:"/static/2f14e498ec2c93a7b0842366c0d759d9/2e753/IBM_Cloud_Interconnect.jpg",srcSet:["/static/2f14e498ec2c93a7b0842366c0d759d9/69549/IBM_Cloud_Interconnect.jpg 288w","/static/2f14e498ec2c93a7b0842366c0d759d9/473e3/IBM_Cloud_Interconnect.jpg 576w","/static/2f14e498ec2c93a7b0842366c0d759d9/2e753/IBM_Cloud_Interconnect.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Notebook",title:"IBM Cloud Notebook",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABw1zQemoOwJB//8QAHBAAAgEFAQAAAAAAAAAAAAAAAgMAAQQQEjMR/9oACAEBAAEFAidqVX+RZbi3qct+ef/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABkQAAMAAwAAAAAAAAAAAAAAAAABESAxcf/aAAgBAQAGPwJqGijFzH//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMVEQobH/2gAIAQEAAT8hqBTHQranJicWdkyD1ZC0Qtcf/9oADAMBAAIAAwAAABDrDwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAVEQEBAAAAAAAAAAAAAAAAAAAgQf/aAAgBAgEBPxCD/8QAHRABAAICAgMAAAAAAAAAAAAAAQARIWExkXHB4f/aAAgBAQABPxBhVwctxkDUQUkHYobgbax8wZNPcFCSjaOpodQAMFeJ/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Notebook",title:"IBM Cloud Notebook",src:"/static/5fea1b8b676a8b4b194d270a206b63a4/41eff/IBM_Cloud_Notebook.jpg",srcSet:["/static/5fea1b8b676a8b4b194d270a206b63a4/69549/IBM_Cloud_Notebook.jpg 288w","/static/5fea1b8b676a8b4b194d270a206b63a4/473e3/IBM_Cloud_Notebook.jpg 576w","/static/5fea1b8b676a8b4b194d270a206b63a4/41eff/IBM_Cloud_Notebook.jpg 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform",col:8,mdxType:"ImageGalleryImage"},(0,l.kt)(B,{color:"dark",mdxType:"GifPlayer"},(0,l.kt)("img",{src:"/4a9aad9f2d6ef59256ca8dfbb9936c5b/IBM_Cloud_Platform_Prototype.gif",alt:"IBM Cloud Platform Prototype"}),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFjQWksAf/EABoQAQACAwEAAAAAAAAAAAAAAAEQEQISExT/2gAIAQEAAQUCV9XPGKNrY//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAhBBERIhMZH/2gAIAQEABj8CYzPBCv2NrFrsx//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQQVHh8f/aAAgBAQABPyFFyNUGWd2jiNo4T3IYn//aAAwDAQACAAMAAAAQEA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgEEAwAAAAAAAAAAAAABESEAEDFBUWHw8f/aAAgBAQABPxCvCggoPWG0fV5wIIuqvI+OLsB4M+00v//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform Prototype",src:"/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg",srcSet:["/static/80dd337880305f90105eb98c2fb1c156/69549/IBM_Cloud_Platform_Prototype.jpg 288w","/static/80dd337880305f90105eb98c2fb1c156/473e3/IBM_Cloud_Platform_Prototype.jpg 576w","/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(d,{alt:"IBM Cloud Pictograms",title:"IBM Cloud Pictograms",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)(B,{mdxType:"GifPlayer"},(0,l.kt)("img",{src:"/eace5aec0b1ab4ae6425dc7088a68411/IBM_Cloud_Pictograms.gif",alt:"IBM Cloud Pictograms"}),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeAlbc5xNAAf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAIBEBEg/9oACAEBAAEFAjKUZcjj/8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAEDAQE/ATU//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABECAh/9oACAEBAAY/Ap1EtX//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhECBBkf/aAAgBAQABPyEBw4K11L562df/2gAMAwEAAgADAAAAEGAAAP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPxCkY//EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQIBAT8QDJp//8QAHRABAQACAQUAAAAAAAAAAAAAAREhQQAQIDFhcf/aAAgBAQABPxB3DWVdcgUafJ0d2AjL4w2cREqXdLoPXb//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Pictograms",title:"IBM Cloud Pictograms",src:"/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg",srcSet:["/static/35f178dcd2991ea7403a3bf70ed0533d/69549/IBM_Cloud_Pictograms.jpg 288w","/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(d,{alt:"IBM Cloud Server",title:"IBM Cloud Server",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHhS2MALBUH/8QAGBABAAMBAAAAAAAAAAAAAAAAAQMQESH/2gAIAQEAAQUCs6yGFatf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAARAgIUH/2gAIAQEABj8Chrslf//EABwQAQACAQUAAAAAAAAAAAAAAAEAERAxQVFhsf/aAAgBAQABPyGOm2DScspPWBRsaYmpB24//9oADAMBAAIAAwAAABDwCAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAQQDAQAAAAAAAAAAAAABEQAQITFBUaFh/9oACAEBAAE/EDefaAT7R9soYqBikwoTGkeWJKDSMJXOCoRLf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Server",title:"IBM Cloud Server",src:"/static/8bec1dcb84a4d14a434d4ac6368b7b80/2e753/IBM_Cloud_Server.jpg",srcSet:["/static/8bec1dcb84a4d14a434d4ac6368b7b80/69549/IBM_Cloud_Server.jpg 288w","/static/8bec1dcb84a4d14a434d4ac6368b7b80/473e3/IBM_Cloud_Server.jpg 576w","/static/8bec1dcb84a4d14a434d4ac6368b7b80/2e753/IBM_Cloud_Server.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(d,{alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)(m,{src:"/videos/hero-video.mp4",poster:"/images/poster.jpg",mdxType:"Video"},(0,l.kt)("track",{default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"}))),(0,l.kt)(d,{alt:"IBM Cloud Think",title:"IBM Cloud Think",col:4,mdxType:"ImageGalleryImage"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAQX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeLq26koof/EABsQAAEFAQEAAAAAAAAAAAAAAAEAAgMRMRIi/9oACAEBAAEFAuPBZSMZTdIio7//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAdEAABAgcAAAAAAAAAAAAAAAAAAREQEhMhMYGi/9oACAEBAAY/ApjULqw1bkyf/8QAGxAAAgMBAQEAAAAAAAAAAAAAAREAIVFxMWH/2gAIAQEAAT8hD2DkOG+oEmgciLS2UJstOj7P/9oADAMBAAIAAwAAABDEz//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCtf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPxAFyf/EABoQAQEAAwEBAAAAAAAAAAAAAAERACExQYH/2gAIAQEAAT8QcjJvWzKywDXwfMhkgqnY5DqWwLPhivIUA4wQueQ7Puf/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Think",title:"IBM Cloud Think",src:"/static/58e3a3363dfc6eb9c6f8ff5f3fda25d7/e95b5/IBM_Cloud_Think_Keynote.jpg",srcSet:["/static/58e3a3363dfc6eb9c6f8ff5f3fda25d7/69549/IBM_Cloud_Think_Keynote.jpg 288w","/static/58e3a3363dfc6eb9c6f8ff5f3fda25d7/473e3/IBM_Cloud_Think_Keynote.jpg 576w","/static/58e3a3363dfc6eb9c6f8ff5f3fda25d7/e95b5/IBM_Cloud_Think_Keynote.jpg 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Code"),(0,l.kt)("p",null,"You can use the ImageGallery component in markdown by nesting your images inside\nthe ImageGallery component and using the ImageGalleryImage component to define\nthe image’s location, title, alt tag, and the columns the image on the page will\nspan at the medium and large breakpoints. There is no gallery view for mobile so\nthe small breakpoint is not defined."),(0,l.kt)("p",null,"Here’s an example of how to use the ImageGallery and the ImageGalleryImage\ncomponents in markdown."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=/components/ImageGallery.mdx src=https://gatsby-theme-carbon.now.sh",path:"/components/ImageGallery.mdx",src:"https://gatsby-theme-carbon.now.sh"},'<ImageGallery>\n<ImageGalleryImage alt="IBM Design" title="IBM Design" col={4}>\n\n![IBM Design](/images/IBM_Design_landing.jpg)\n\n</ImageGalleryImage>\n\n<ImageGalleryImage  alt="IBM Cloud Logo" title="IBM Cloud" col={4}>\n\n![IBM Cloud Logo](/images/IBM_Cloud_Logo.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Developers" title="IBM Cloud Developers" col={4}>\n\n![IBM Cloud Developers](/images/IBM_Cloud_Developers.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Data Center" title="IBM Cloud Data Center" col={8}>\n\n![IBM Cloud Data Center](/images/IBM_Cloud_Data_Center.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Interconnect" title="IBM Cloud Interconnect" col={4}>\n\n![IBM Cloud Interconnect](/images/IBM_Cloud_Interconnect.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Notebook" title="IBM Cloud Notebook" col={4}>\n\n![IBM Cloud Notebook](/images/IBM_Cloud_Notebook.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Platform Prototype" title="IBM Cloud Platform" col={8}>\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.gif)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Pictograms" title="IBM Cloud Pictograms" col={4}>\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.gif)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Server" title="IBM Cloud Server" col={4}>\n\n![IBM Cloud Server](/images/IBM_Cloud_Server.jpg)\n\n</ImageGalleryImage>\n<ImageGalleryImage alt="IBM Cloud Think" title="IBM Cloud Think" col={4}>\n\n![IBM Cloud Think](/images/IBM_Cloud_Think_Keynote.jpg)\n\n</ImageGalleryImage>\n</ImageGallery>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-image-gallery-mdx-4647cea13735a71dc588.js.map