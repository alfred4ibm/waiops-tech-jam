"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[857,1532],{3624:function(e,a,t){t.d(a,{Z:function(){return y}});var i=t(7294),n=t(8650),s=t.n(n),o=t(1597),l=t(4799),r=t(3448),c=t(5900),p=t.n(c),A=function(e){var a,t=e.title,n=e.theme,s=e.tabs,o=void 0===s?[]:s;return i.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=o.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===n,a))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},g=function(e){var a=e.relativePagePath,t=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=t||n,l=s.baseUrl,r=s.subDirectory,c=l+"/edit/"+s.branch+r+"/src/pages"+a;return l?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=t(4703),d=t(1721),u=function(e){function a(){return e.apply(this,arguments)||this}return(0,d.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var a,t=s()(e,{lower:!0,strict:!0}),r=t===l,c=new RegExp(l+"/?(#.*)?$"),A=n.replace(c,t);return i.createElement("li",{key:e,className:p()((a={},a["PageTabs-module--selected-item--aBB0K"]=r,a),"PageTabs-module--list-item--024o6")},i.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+A},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":a},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},a}(i.Component),b=u,h=t(7296),k=t(5387),w=t(3732),f=function(e){var a=e.date,t=new Date(a);return a?i.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(w.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var a=e.pageContext,t=e.children,n=e.location,c=e.Title,p=a.frontmatter,d=void 0===p?{}:p,u=a.relativePagePath,w=a.titleType,y=d.tabs,E=d.title,N=d.theme,v=d.description,P=d.keywords,x=d.date,B=(0,k.Z)().interiorTheme,I=(0,o.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,Q=y?C.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",j=N||B;return i.createElement(r.Z,{tabs:y,homepage:!1,theme:j,pageTitle:E,pageDescription:v,pageKeywords:P,titleType:w},i.createElement(A,{title:c?i.createElement(c,null):E,label:"label",tabs:y,theme:j}),y&&i.createElement(b,{title:E,slug:C,tabs:y,currentTab:Q}),i.createElement(h.Z,{padded:!0},t,i.createElement(g,{relativePagePath:u}),i.createElement(f,{date:x})),i.createElement(m.Z,{pageContext:a,location:n,slug:C,tabs:y,currentTab:Q}),i.createElement(l.Z,null))}},534:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return m}});var i=t(3366),n=(t(7294),t(4983)),s=t(3624),o=["components"],l={},r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)}},c=r("AnchorLinks"),p=r("AnchorLink"),A={_frontmatter:l},g=s.Z;function m(e){var a=e.components,t=(0,i.Z)(e,o);return(0,n.kt)(g,Object.assign({},A,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"1-2: Introduction"),(0,n.kt)(p,{mdxType:"AnchorLink"},"1-2: Create a namespace for the Watson AIOps AI Manager install"),(0,n.kt)(p,{mdxType:"AnchorLink"},"1-3: Install the Watson AIOps AI Manager Operator"),(0,n.kt)(p,{mdxType:"AnchorLink"},"1-4: Install an instance of AI Manager")),(0,n.kt)("h2",null,"1-1: Introduction"),(0,n.kt)("p",null,"Before we begin with Metric Manager, we will start the installation of AI Manager, as this can take 90 minutes or so to complete."),(0,n.kt)("p",null,"If you missed yesterday’s Event Manager labs, you will need to log in to your cluster and follow step 3 of Lab 2 to create the catalog source: "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.ibm.com/community/user/aiops/blogs/zane-bray1/2022/04/01/getting-started-with-watson-aiops-event-manager-17"},"https://community.ibm.com/community/user/aiops/blogs/zane-bray1/2022/04/01/getting-started-with-watson-aiops-event-manager-17")),(0,n.kt)("p",null,"If your cluster already has the catalog source installed, you may proceed."),(0,n.kt)("h2",null,"1-2: Create a namespace for the Watson AIOps AI Manager install"),(0,n.kt)("p",null," In the OpenShift UI, navigate to Projects:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"415px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeElEQVQ4y32U208jVRzH5wWeNAba6XRapjOdaaFsr0wp2xa5FFooLCsLIiKFXS9kozwa4wPGCP+DD5r4LxCjCU8kBhNfjImPRkPYXYxZSFs7U6altRe+5px1mkaJJ/nkd85pz/d3zTA8z4PjeQhWC2JsHxRJgksUoSgKOI5DX18f+vv7b8VisYBlWVitVgrZMwvZLManU/C98hLetb2MrZUH2MjlsLu7i3Q6DYfDAVEUIUkSRZZleDweagVBoE7tdnsHxuv1QlFk6pG1WBAMhZBMJpFIxJFMJBCJRBAOhaCqKt37/X74fD7qhETY09OD3t7eDoyVtYHl7LDzTnC8EzaOp2eb/YXleMeL3+wO9FtZREdj2Nvbw8HBAfb39ylkb8IEI1HcCUYQCKvUmniG/JC9PorbM0TvHIKER++8h/9bTHp+Aan0HBbu3Udqdg5z2XvIZBcxHAhDlL1UjNjwyCicLjc2NrdgGAbOzs5wfHyMw8NDHB0d4eTkBOVyGcyAKNM/CpICSRnsQITMCAnkzu50Yevh2/QhWTc3NyiVStRBpVJBq9UCE4nGEE9O0JTNiP4NuQ+NjMIhuLG59RDG1RV9nM/nUavV0G636Zk4YNRYHBNTMwirMbjcno5Id6Q0ZbVL0DCo0OnpKZ49O0exWKQRNhoNMAP/pErSUgaHb43QhHO4kNt+1Em5e7VabTSbLTCCKIN0eiqVpk0hJXCKMo2KRGxCBFm7E2/ltjuC1WoVT54+oXUkabdJyuPzq1i6v4zllTUsvbaC9NwCZjNZzBLbRWZ+Ea9OzuDDjz6GrutUsF6vo5Av4qpMzm0Kk1nfwWZuGzuPP8DO4/extr6BB6tvYOX1dWpNVtfexOLSMj759DNomkYFnxee48uvP8fvBR0XWhOXWh2M4gtAjd3FZCqN6FgCg8MBDN0JUtvNsD8EQfLQwTZTrlxX8Nv5ryhXajCuWzBqTTAuSYHPH8JYfBw+f5DOGqkZqWE3pIY2foB22RQsagUc/fAtLkplFMpN/PFnHQx5HImOYWJ6FuOT05iaydBozJExIRNAnHV3WTc0fP/zd8jrFWjVFi71v8AQ7yTCQHgEETWGaCwOr89/qyD3H0EdP/3yI0pXVZSvm2iQsXG5vXSoyciMjN6lHwBTrFu0W9Ds8mXxAl998wWeXmo4LzagV5v4G02bCmqIoFdvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture1",title:"Picture1",src:"/waiops-tech-jam/static/0683bd46edf7f7539500eba40eae8790/cbae1/Picture1.png",srcSet:["/waiops-tech-jam/static/0683bd46edf7f7539500eba40eae8790/7fc1e/Picture1.png 288w","/waiops-tech-jam/static/0683bd46edf7f7539500eba40eae8790/cbae1/Picture1.png 415w"],sizes:"(max-width: 415px) 100vw, 415px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Then, in the upper-right corner click “Create Project”:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"454px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABe0lEQVQoz52QX0vCYBTGd5d55c0mhP82c1NQEcELP4OKcyXYN+gDhBdd9Wm6igr6FIFpRoHXKxdSSWBMm9ueOK9oZmp/DvzYu+c877Ozw+XzeQiCgFwuh0AgAFEUkclkEAwGmUY9IhKJIJvNIplMQlEURjweZ8iyDEmS4Pf7waXTaXg8HqRSKfh8PvA8z0x0Jo16BOmJRIJdjka3EZMViFIUoXAEoXAYvODHptcLrlAoQNM0FItFVCoVqKqKUqnEnqRRj5jqhKaWUdspo7arMvaqKmrVCvNx+Ec9vTlo6kO07odoP4xwpQ9xZ4zguADnui5+y9h2WeDRRRcb+w3EDm8QrLcRqrexdXCNx1frb4GOMwm87Zo4vnzGeauPk8YLTpt9nDX7MN/t74FUy87z7+tqtsNVU82HTKNoUvr9sfMV8nG2bYNYVY7jYP6jPxWn6zoMw2ChdPlzX5OgXq+HTqcD8pFOvnV7nk1IAYuQYTAYwDRNWJa11LPo/wD1E8nP4T5V/gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture2",title:"Picture2",src:"/waiops-tech-jam/static/498c1d180e65ace1adcd3ac1f4ff995f/6f04e/Picture2.png",srcSet:["/waiops-tech-jam/static/498c1d180e65ace1adcd3ac1f4ff995f/7fc1e/Picture2.png 288w","/waiops-tech-jam/static/498c1d180e65ace1adcd3ac1f4ff995f/6f04e/Picture2.png 454w"],sizes:"(max-width: 454px) 100vw, 454px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Call your project “cp4waiops”:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.20833333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVQ4y6WUa27bMBCEdZneqKdpD9Jj9BhN/9hADAcFGkdJbMsiLVuiRFF8LDXBMm6MJghitQt8mBUFjcghwWwcR7xX/G4KXNkwDFgsFvhxdYXlconZbIb5fA6lFKYWm2YxRvS6Q1MfYfoOrWqgOwXvLIJ3oOCSWmsTzr3tvffnGfpA2Moa+Ubgbs2UWJfH1N/eF1g9llg97iCEwH6/x+FwSL2UElVVpZ71xdA6j3wtoDqHSlm0Q0woc9bOxouXnVEI2KwfsC93GEx/GmaD8S84mo94ybBuGggh0bYtQiB4H54JZw0XkAw51DzPsd1uUy7/W9nrAaIIiv8AnZYcvIeUAmW5Q681YiRwrkQTCCF9x1lnnbFYrgr8fihRVBp1H3HUAUdNk6i6gEBsOIT0wPs6+BHGxUloS0ll42AsIWNXnlHN9Ayd9H0aQ1CG0PTPZp5GWM9HZ3y7KZcUG7ARG9xXFj/vNG4Kg8ibMvVGYWTr8asw0APh6/cNPn25xudvt+kn2ZSb5I/yzOLJnDMUrU8x8LF5Ano13xZ4dudEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture3",title:"Picture3",src:"/waiops-tech-jam/static/32d7e16fe9b61dc69d1a9f1948bebf82/d5a55/Picture3.png",srcSet:["/waiops-tech-jam/static/32d7e16fe9b61dc69d1a9f1948bebf82/7fc1e/Picture3.png 288w","/waiops-tech-jam/static/32d7e16fe9b61dc69d1a9f1948bebf82/d5a55/Picture3.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null,"Once your project is created, you will need to go to the command line of your control node and change the project to ‘cp4waiops’, then create an entitlement secret so the images for the AI Manager can be pulled. First, login to the following link and copy your entitlement key:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary")),(0,n.kt)("p",null,"Change your project to ‘cp4waiops’:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"oc project cp4waiops\n")),(0,n.kt)("p",null,"Next, issue the following command to create the secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"}," oc create secret docker-registry ibm-entitlement-key --docker-username=cp --docker-password=\\<your entitlement key\\> --docker-server=cp.icr.io --namespace=cp4waiops\n")),(0,n.kt)("h2",null,"1-3: Install the Watson AIOps AI Manager Operator"),(0,n.kt)("p",null," Navigate to “Operator Hub”, and change the project at the top of the page to your ‘cp4waiops’ project. Then, in the search box under “All Items”, type in “ai manager”:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVQ4y42TW08aURSF51VNfGk0paAgMMNFrooIWJtqE2uqJD5Am/IHW8Sm+mL/jFYDeAVUrjPA4GrWNmNj09ie5GTP5Zxv1llrj6L5/YhMv8B6ahnJVAp2ux0OhwNTU1OYnJzE+Pg4JiYmpI6Njf1zKi63Gw6bDcFAEJFoDKqqweNVsbW9jUKhgGw2K3NnZwe5XA75fP7ZqYRji1hKv0Y8sQyXR4PL64PN4URp7xs4DMOArusYjUb4n6GEogtQ/fMCc6t+eLUAHE43vhZ30Wq1cHz8E6enp7i8vJQN9/f3z05lPhJHbDEJjxYQKOur2TkUd0votNs4OjrCyckJzs7OUK/XcX19jZubG9RqNblnta6vrq6gUNVSKgMt8FvlS/usAPnFWq2O29tbUcvKjY1GQyCshFvPORUe1/JvzusTID38UixhAKDZ6fOgT3zqdDrodrt/99DrCyKZXkE4tgCn++HIVMhQBoOB+Fcul9Hr9R43MSgq43uGZfknQAKokEqp8E8gvWO1BgF9w4Ch9+S5aZqPk/eKLxCCfz6CGZcHTrcqUAJ3S3uihEazcgOHORyiqxto6SaazSYuLi5kDX3s9/tQ0m/WsbG5hWRqBdH4EhaTabCV9vcPYJpDVCoVCWA4HD4oNE20egaqja4oop8MjDBRmFl7j/ynAnIfP2PzQxZr7zaQyqzi8PAHDF3H+fn5k6Y2zZFAKpWyeEuFd3d38k6AHtWPYDiGQCgKLRCStKdtM3JkqmIobA8LyqPzz2E/stmpjiCuFWAknkA8kZR2cXo0CYd+WsBqtSobrWAIZOJURvXsPULZRgJMLGeQWX0LXzAsgRA4O+fF9/0DCYN/CqFUxcGPEEhAu92Waqnjml+WJmbqU0WVdAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture4",title:"Picture4",src:"/waiops-tech-jam/static/895062dbe30d5cbb8ceae9e1e234aacb/d5a55/Picture4.png",srcSet:["/waiops-tech-jam/static/895062dbe30d5cbb8ceae9e1e234aacb/7fc1e/Picture4.png 288w","/waiops-tech-jam/static/895062dbe30d5cbb8ceae9e1e234aacb/d5a55/Picture4.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Click on the “IBM Cloud Pak for Watson AIOps AI Manager” tile:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"290px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"96.18055555555557%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB20lEQVQ4y61U2W7iQBDk/38nL/sQafOAQEhIHDE3BgzG2Phcc/nCtapejIgMaCNiqWT3eKZmqqt7KsfjEcThcHgZ5Kns93vsdjtBeMHuBmEYXlHE98YLVIIgQJIkePU5n88gV8V1XcRxLINuBOghkGa5xJ+Kgmq1ik6ng36/j0ajIej1emg2m6jX61BVVeZmWQZyCWESx8gA/OpaeHtXcUj/7cp/y+USuq5js9nAsiysVivYti3xYrGQsRIhT8gzfagWfvcs+BGj/FuSvxBGF8l80m+Q5Hku+ELoOA7SNBXblU8Fhq6LlO12K1Kn06m8ifV6LTkzDANcV5DdJWQNMflcOJ/PMR6PMZvNBMybftmIhgyHQ4mfEp5OJ7TbbXS7HSGkq8VibtRqtR7KLrucJGKM7TgixzA2sG1HZGnaEqZpwfM8qbUCRf4eEhKu58HzfHi+Dz8IEAR/JM6yc8mEp4Txjcu3UniSq/tpWpJ5t2yKHLIPJ5OJmMFcshPoKF3mW1EUyelgMJB5tVpNYk3THueQizjZNM2r03SY34USmsf5LDMeolBXIoyiSMqCrrLe2FKj0UjGeGIq+e9O+anbRgh935dmp0w2/CPw/zOws4SQeeAHB14BU8LL9i+Z4apRTzaReQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture5",title:"Picture5",src:"/waiops-tech-jam/static/d1b008d91bec97e033a5be0f6693ba58/82197/Picture5.png",srcSet:["/waiops-tech-jam/static/d1b008d91bec97e033a5be0f6693ba58/7fc1e/Picture5.png 288w","/waiops-tech-jam/static/d1b008d91bec97e033a5be0f6693ba58/82197/Picture5.png 290w"],sizes:"(max-width: 290px) 100vw, 290px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Next, double-check that the “Project” you are in is ‘cp4waiops’, and click the “Install” button:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25.694444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA90lEQVQY042QW0uEYBCG/ZEinj791KuNLcl+WL8kBFEC68IID3lON1ZX2De+gRW6a+BhXubiYWYkRVEgyzI0TYNpmoSqqjjcHfD+kSNN3xCGIeI4RpIkhMhRFCHLMnRdh6ZpiKqqIBmGQTLGGGzbBucOdF3H06OP53DAa3kGrhv+W5Jlc3DOScaYBWZZJPT9B7ykFYruBOCKcfzGOI7o+576LQ/DsM+maYJkCglj8DwPruuSWBAEAaahxfnnhMtlo/MEeZ6jLEsURbEjZm3bklgyDH0XOo4D7jj0guPxHp/FF+q6wbZtqOuaEFus6/qHZVno3Hme8Quxcj+GE0dJVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture6",title:"Picture6",src:"/waiops-tech-jam/static/ff4feb218b0f09b658ec28ff44b3fd15/d5a55/Picture6.png",srcSet:["/waiops-tech-jam/static/ff4feb218b0f09b658ec28ff44b3fd15/7fc1e/Picture6.png 288w","/waiops-tech-jam/static/ff4feb218b0f09b658ec28ff44b3fd15/d5a55/Picture6.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," In the next screen, you will leave the version at 3.4, but change the Installation mode to “A specific namespace on the cluster”. Verify that the Installed Namespace says cp4waiops. If not, using the drop down box select ‘cp4waiops’. Then click “Install”."),(0,n.kt)("p",null," When the operator installation is complete, select “View Operator”:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVQoz4WRv27UQBCH/XI0PAAt70BBm5LXiERFRQ8dRQqIAtElIOyTEu6y9p3Pd17/39m1/aHdKAkJSIz0aWal/c3oNxMZY2jMRN10bDYZu92OPM/Z5TlZlrHdbu+zUoq+75nnmWmaAr5uhobWtDR1QyRWuExb8rIlTRVKpazXa26UYr8/oLXmcLjNRVEgItzFzBzyt9UZFzfnSC9EwzDgphHrHNZajEgQGfMg/DPGccQ59wivs85SVRWRt+CsYMXgnA34NfhPgzHBoh/qh4gXBlzgaePQ0IvjZMnp2VcWlz9YXHwniWOGviOJf7JMYla/rsmylP9FXddE/hgv37zn2atjnr9+y4ujd6iiZd+MqP1AVho2pbDVhrxy5JWlaByZtoib/27YdT0nixUfPid8/LLk0/kVg/idjIh94Pbt7jHB8hh2ekew7K/nTMckPaP0oa60RuvyH+gnlJTlY34DKXphPykkV/cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture7",title:"Picture7",src:"/waiops-tech-jam/static/c5f13722c5d3d9ec5189e6f3b10c1084/d5a55/Picture7.png",srcSet:["/waiops-tech-jam/static/c5f13722c5d3d9ec5189e6f3b10c1084/7fc1e/Picture7.png 288w","/waiops-tech-jam/static/c5f13722c5d3d9ec5189e6f3b10c1084/d5a55/Picture7.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("h2",null,"1-4: Install an instance of AI Manager"),(0,n.kt)("p",null," Now that the operator is installed, you can create instances of the AI Manager. From the Operator view, click on the “Create instance” Link in the AI Manager tile:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"311px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"97.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLklEQVQ4y51Ua3PaMBDkZ/fXlXbKwAdSMryNedrGvAqBGhs/5e3sBQFOYJrEMzt3knWrPUl3pTzPAQI56GsopQrjR3i7riSTORAkV9KvfkJIEnOb4duPFOVfNfwsf4cxGKDRaOD5+Rn1eh3VahXdbhe1Wg3lchntdhutVkv8SqWCw+EghFRbYrpRmsPxciH6/fSETqdzCfJ9H8fjEWEYIggCCfY8T3za/X6PJEmuhEpdU3QcG5PJBIPBAL1eT0g/k+71DJVCmmZ3F2ZZhjRNxVKJRhzHolqruzlDyI/xeIzRaCTKqFLb4XAo/2azGZrNJqbTKfr9vszTtyxLBBUIuYtt2xI4n8/hOI6QczF9WgavViux2+1WrGmaWK/XxZQ5iKJI1JCUwQR9qqLPTTQ5N6KlQv4nMTO83vI5ZS7abDZwXVeCtaVqguPFYlGYNwwDk/EYL7ttkTCOI7iOhZFpiFKSE/R16jplKicpCV/2B0y3Ct35CX6USWHIw/bDDF3bg7U+whwORQkDeAk6LZJrIs7ps46SDFGioK5nmMvkZHmE/SeAZduwbUvSXy6XQk6fh09wjpdCcAPGv3s2pyDAbDKCafQkPaphJXzmUV8IHzUD/eBZSY+6y61/IbwtvY+oeFtq7xTyDMJEwdnFCGMF75ThGL7CPyNJVYHkHgqEOz9FxfSEtOOcYC5DjFch+u4JhnvC3yC7q/JuP9R1+NFu8r/uXWIXee0oZ3uD7Av4B3cv/TY1Kas8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture8",title:"Picture8",src:"/waiops-tech-jam/static/2e6a8985a00e80fa79d3226ee1b0d44a/d47a3/Picture8.png",srcSet:["/waiops-tech-jam/static/2e6a8985a00e80fa79d3226ee1b0d44a/7fc1e/Picture8.png 288w","/waiops-tech-jam/static/2e6a8985a00e80fa79d3226ee1b0d44a/d47a3/Picture8.png 311w"],sizes:"(max-width: 311px) 100vw, 311px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," You will be in the “Create Installation” configuration window. In this window, you will edit 4 entries:"),(0,n.kt)("p",null," Accept the license:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.944444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAy0lEQVQY062Py0oEMRBF54v9JTf+iFt37tSF4AztgNOTdJJKOs8+kjCKoG7EC4eq1eHenY+Fp1fPvKy0Wqm1UWullPKN1ho927bxW3YhZnIweLeglEJrjVkWjDGICNZanHMYY4kxfgp/Yghfzom7hyP3jwemaRqsXvhLunQIr26eub49ctjvR7M+L6ZESmm06jfEgsSKvyBrJaQ2/n7b14azCczaErwf8/rUD/pkL4J2iZMtzC5zspk3k1GucHYFJYXaLsJZCv+VPvkdDwjTdsdkewEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture9",title:"Picture9",src:"/waiops-tech-jam/static/5ff6edc54b28668287deeba1e5e078d6/d5a55/Picture9.png",srcSet:["/waiops-tech-jam/static/5ff6edc54b28668287deeba1e5e078d6/7fc1e/Picture9.png 288w","/waiops-tech-jam/static/5ff6edc54b28668287deeba1e5e078d6/d5a55/Picture9.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Set File Storage Class to ‘ibmc-file-gold-gid’"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"461px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVQY05WOwQ4CIQxE+f8f8uSPmE3goEALW1Zd3bAkjCnGu9vkpZlOM62J4YarneCcG1hr8RDBr3rvhzBpbThPLxAzmAgpJeScUYqgtYajZejZcLq8kfMMERmBRIQQArZtG6H7vv+F7pp7EawlYVmWETjP32BFP1UdYwQzj0Pe+6EV9XSuXb1aKz6Z5TQBo1l/vQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture10",title:"Picture10",src:"/waiops-tech-jam/static/293a4786c5f0804acc543152ad6c4252/9b127/Picture10.png",srcSet:["/waiops-tech-jam/static/293a4786c5f0804acc543152ad6c4252/7fc1e/Picture10.png 288w","/waiops-tech-jam/static/293a4786c5f0804acc543152ad6c4252/9b127/Picture10.png 461w"],sizes:"(max-width: 461px) 100vw, 461px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Set Large Block Storage Class to ‘ibmc-block-gold’"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"448px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.65277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVQY05WQzQrDIBCEff9X6Fv10FMolZjEoquWxJ/aJFOUxnM68DEuO8juMmcIUkoopSrGGGit6/u9LCja9x1nxW4dx/3BMQwCQghwzqv3fY/offvwLOxyBbqR8LJl0medbpom/KNt2xpslArWWiil26oFIoJzDpqonqFk6OelPijZGBNy/iDnDBaDR0oJIQR476vHGJvP84wQfOsfvSNbfF3XdsMvjPOCmx9s1dIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture11",title:"Picture11",src:"/waiops-tech-jam/static/b76124ed83012e7fab12727f64b7ee73/c9816/Picture11.png",srcSet:["/waiops-tech-jam/static/b76124ed83012e7fab12727f64b7ee73/7fc1e/Picture11.png 288w","/waiops-tech-jam/static/b76124ed83012e7fab12727f64b7ee73/c9816/Picture11.png 448w"],sizes:"(max-width: 448px) 100vw, 448px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," Image Pull Secret set to ‘ibm-entitlement-key’:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"21.180555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmElEQVQY05WP2QqDMBBF/f+f60Pf2nSLS5Ros6mghZwSRWiFPnTgMJc7w2Umy6uay+1OLiVCCJRSbBVj/JssyCPqfMD6gVoptNYYY3DOEeM+lA9+BHaFQF5PlK3nUTY8Ko1UmqLpcOO8MszYYVow/YTtp8X342u3M5O5MOJCTwgB7z3W2i+9kS5O3ZjnotM8fbJ6hq5tF/8NeL40JUvlbooAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture12",title:"Picture12",src:"/waiops-tech-jam/static/631abad98686a036e32300a7bb38f0d2/d5a55/Picture12.png",srcSet:["/waiops-tech-jam/static/631abad98686a036e32300a7bb38f0d2/7fc1e/Picture12.png 288w","/waiops-tech-jam/static/631abad98686a036e32300a7bb38f0d2/d5a55/Picture12.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null,"Set the size to “Small”"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"182px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.692307692307686%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVQoz6VSWW6FMAzM/Q/CF5yAQ4D4QiCB2MS+/QBhiauxHhWteBVtI43ijO2JZVvQ6yilGKf91yPGcSQpJV2Frx9c8UhQ0zQyDIN0Xadpmt5W+LR60XUdlWVJRVHQtm23lf2mFeKO3Pf9iw08rnBdV6qqihFFEaVpyo55nmkYhk/Rx4JItCyLbNsm0zTJ8zx21HVNjuOwfRzHj8O6+lhwkZJQqZQr3xgO7kMptpdleSv0HQIrcwKJLPCy8dnpe7yHQRCQ7/sUhiHleU5VVRImn2UZ9xTcCXCu6xJy4jhmP4BczADtEghMkoSDsTpY9KZpeJXA4e77nn3oKzjkgMf75BDTtu392vznfADUaaW+u5QO6gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture13",title:"Picture13",src:"/waiops-tech-jam/static/8be981da688c8abac32bc98301914776/8ab95/Picture13.png",srcSet:["/waiops-tech-jam/static/8be981da688c8abac32bc98301914776/8ab95/Picture13.png 182w"],sizes:"(max-width: 182px) 100vw, 182px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null," When all of the options are configured, select the ‘create’ button."),(0,n.kt)("p",null," Next, You will be brought back to the installations view, where you will see a new entry called ‘ibm-cp-watson-aiops’ and will be able to watch the status as the creation of your new instance proceeds. After about 5-7 minutes, it should complete and you should see the “Phase” change to “Running”:"),(0,n.kt)("p",null," ",(0,n.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"468px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5ElEQVQoz4WQi07DMAxF8/8/STekrA10RG0eduzkokZrWQFBpCM7tnz9MJe3hJfXCZfrFcMwwDmHeZ4RY8Bfr7Xf4yYQI6UI7z1CiEgpdXImJFZEOhOygIqitYZaa2fzd8w0jrDWIsYIIkJKGcwMIoZbCkbPndvD2g+Gj9JH3AWfMeM0wdoblnXtga+V2j8rt5O//02hjFYrpBQwEVQVItLZGojqqei5uOdFTsJm8hl+JUSuKFqP22x2E7/f7yilnG525EXh3h2WsKA+ak2WBpYKLgrV+mOSTWwT/h7f4cIgpqPJJ9heJS+IqbSWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture14",title:"Picture14",src:"/waiops-tech-jam/static/159ea9ef6dde876b88ac5170edd5e335/d5a55/Picture14.png",srcSet:["/waiops-tech-jam/static/159ea9ef6dde876b88ac5170edd5e335/7fc1e/Picture14.png 288w","/waiops-tech-jam/static/159ea9ef6dde876b88ac5170edd5e335/d5a55/Picture14.png 468w"],sizes:"(max-width: 468px) 100vw, 468px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,n.kt)("p",null,"The install will take around 90 minutes, and will be ready for you when you come to Lab 6 - working with Metric Anomaly Detection in Watson AIOps."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-mm-aimgr-install-index-mdx-3518cf053cb402161bbe.js.map