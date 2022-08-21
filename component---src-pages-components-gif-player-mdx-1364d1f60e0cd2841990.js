"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[6317,1532],{3624:function(e,t,A){A.d(t,{Z:function(){return B}});var a=A(7294),n=A(8650),l=A.n(n),r=A(1597),o=A(4799),i=A(3448),s=A(5900),m=A.n(s),c=function(e){var t,A=e.title,n=e.theme,l=e.tabs,r=void 0===l?[]:l;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},A)))))},d=function(e){var t=e.relativePagePath,A=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=A||n,o=l.baseUrl,i=l.subDirectory,s=o+"/edit/"+l.branch+i+"/src/pages"+t;return o?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},g=A(4703),p=A(1721),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,A=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=A.map((function(e){var t,A=l()(e,{lower:!0,strict:!0}),i=A===o,s=new RegExp(o+"/?(#.*)?$"),c=n.replace(s,A);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(a.Component),b=u,E=A(7296),h=A(5387),y=A(3732),f=function(e){var t=e.date,A=new Date(t);return t?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",A.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},B=function(e){var t=e.pageContext,A=e.children,n=e.location,s=e.Title,m=t.frontmatter,p=void 0===m?{}:m,u=t.relativePagePath,y=t.titleType,B=p.tabs,P=p.title,k=p.theme,N=p.description,C=p.keywords,Q=p.date,j=(0,h.Z)().interiorTheme,x=(0,r.useStaticQuery)("2456312558").site.pathPrefix,w=x?n.pathname.replace(x,""):n.pathname,I=B?w.split("/").filter(Boolean).slice(-1)[0]||l()(B[0],{lower:!0}):"",v=k||j;return a.createElement(i.Z,{tabs:B,homepage:!1,theme:v,pageTitle:P,pageDescription:N,pageKeywords:C,titleType:y},a.createElement(c,{title:s?a.createElement(s,null):P,label:"label",tabs:B,theme:v}),B&&a.createElement(b,{title:P,slug:w,tabs:B,currentTab:I}),a.createElement(E.Z,{padded:!0},A,a.createElement(d,{relativePagePath:u}),a.createElement(f,{date:Q})),a.createElement(g.Z,{pageContext:t,location:n,slug:w,tabs:B,currentTab:I}),a.createElement(o.Z,null))}},984:function(e,t,A){A.r(t),A.d(t,{_frontmatter:function(){return o},default:function(){return b}});var a=A(3366),n=(A(7294),A(4983)),l=A(3624),r=["components"],o={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},s=i("PageDescription"),m=i("Row"),c=i("Column"),d=i("Title"),g=i("GifPlayer"),p={_frontmatter:o},u=l.Z;function b(e){var t=e.components,A=(0,a.Z)(e,r);return(0,n.kt)(u,Object.assign({},p,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s,{mdxType:"PageDescription"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<GifPlayer>")," component is used to pause and play images that are gif’s. It\nworks by replacing the gif with a static image on pause.")),(0,n.kt)("h2",null,"Example"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(c,{colLg:"4",mdxType:"Column"},(0,n.kt)(d,{mdxType:"Title"},"Light"),(0,n.kt)(g,{mdxType:"GifPlayer"},(0,n.kt)("img",{src:"/eace5aec0b1ab4ae6425dc7088a68411/IBM_Cloud_Pictograms.gif",alt:"IBM Cloud Pictograms"}),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeAlbc5xNAAf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAIBEBEg/9oACAEBAAEFAjKUZcjj/8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAEDAQE/ATU//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABECAh/9oACAEBAAY/Ap1EtX//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhECBBkf/aAAgBAQABPyEBw4K11L562df/2gAMAwEAAgADAAAAEGAAAP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPxCkY//EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQIBAT8QDJp//8QAHRABAQACAQUAAAAAAAAAAAAAAREhQQAQIDFhcf/aAAgBAQABPxB3DWVdcgUafJ0d2AjL4w2cREqXdLoPXb//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Pictograms",title:"IBM Cloud Pictograms",src:"/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg",srcSet:["/static/35f178dcd2991ea7403a3bf70ed0533d/69549/IBM_Cloud_Pictograms.jpg 288w","/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(c,{colLg:"8",mdxType:"Column"},(0,n.kt)(d,{mdxType:"Title"},"Dark"),(0,n.kt)(g,{color:"dark",mdxType:"GifPlayer"},(0,n.kt)("img",{src:"/4a9aad9f2d6ef59256ca8dfbb9936c5b/IBM_Cloud_Platform_Prototype.gif",alt:"IBM Cloud Platform Prototype"}),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFjQWksAf/EABoQAQACAwEAAAAAAAAAAAAAAAEQEQISExT/2gAIAQEAAQUCV9XPGKNrY//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAAhBBERIhMZH/2gAIAQEABj8CYzPBCv2NrFrsx//EABwQAQACAQUAAAAAAAAAAAAAAAEAETEQQVHh8f/aAAgBAQABPyFFyNUGWd2jiNo4T3IYn//aAAwDAQACAAMAAAAQEA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAgEEAwAAAAAAAAAAAAABESEAEDFBUWHw8f/aAAgBAQABPxCvCggoPWG0fV5wIIuqvI+OLsB4M+00v//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform Prototype",src:"/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg",srcSet:["/static/80dd337880305f90105eb98c2fb1c156/69549/IBM_Cloud_Platform_Prototype.jpg 288w","/static/80dd337880305f90105eb98c2fb1c156/473e3/IBM_Cloud_Platform_Prototype.jpg 576w","/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")))),(0,n.kt)("h2",null,"Code"),(0,n.kt)("p",null,"Place two images inside of the GifPlayer component. The first image will be used\nas the gif, the second image will be used as the static image on pause. Only\nprovide two images inside the component, do not place any other children inside\nthe component."),(0,n.kt)(d,{mdxType:"Title"},"Light"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0},"<Column colLg='4'>\n<GifPlayer>\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.gif) // must be gif\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.jpg) // must be static\nimage\n\n</GifPlayer>\n</Column>\n")),(0,n.kt)(d,{mdxType:"Title"},"Dark"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0},"<Column colLg='8'>\n<GifPlayer color='dark'>\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.gif) //\nmust be gif\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.jpg) //must\nbe static image\n\n</GifPlayer>\n</Column>\n")),(0,n.kt)("h3",null,"Props"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"propType"),(0,n.kt)("th",{parentName:"tr",align:null},"required"),(0,n.kt)("th",{parentName:"tr",align:null},"default"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"children"),(0,n.kt)("td",{parentName:"tr",align:null},"node"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Pass in the images that will be rendered. Only pass in the images, no other children")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"color"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"light")),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the icon color should be light or dark")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"className"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Specify an optional className to be applied to the container node")))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-gif-player-mdx-1364d1f60e0cd2841990.js.map