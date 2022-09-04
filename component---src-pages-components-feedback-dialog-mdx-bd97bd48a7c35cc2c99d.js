"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[6376,1532],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),o=a(8650),l=a.n(o),r=a(1597),i=a(4799),s=a(3448),c=a(5900),m=a.n(c),d=function(e){var t,a=e.title,o=e.theme,l=e.tabs,r=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,o=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||o,i=l.baseUrl,s=l.subDirectory,c=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4703),b=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,i=o.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===i,c=new RegExp(i+"/?(#.*)?$"),d=o.replace(c,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=h,k=a(7296),f=a(5387),v=a(3732),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(v.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,m=t.frontmatter,b=void 0===m?{}:m,h=t.relativePagePath,v=t.titleType,y=b.tabs,w=b.title,E=b.theme,x=b.description,P=b.keywords,T=b.date,D=(0,f.Z)().interiorTheme,C=(0,r.useStaticQuery)("2456312558").site.pathPrefix,F=C?o.pathname.replace(C,""):o.pathname,S=y?F.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",Z=E||D;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:w,pageDescription:x,pageKeywords:P,titleType:v},n.createElement(d,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:Z}),y&&n.createElement(g,{title:w,slug:F,tabs:y,currentTab:S}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(N,{date:T})),n.createElement(u.Z,{pageContext:t,location:o,slug:F,tabs:y,currentTab:S}),n.createElement(i.Z,null))}},1162:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n,o=a(3366),l=(a(7294),a(4983)),r=a(3624),i=["components"],s={},c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),m={_frontmatter:s},d=r.Z;function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)(d,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(c,{mdxType:"PageDescription"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<FeedbackDialog>")," component is a non-modal dialog that allows your users to\nprovide low-friction, anonymous feedback for a specific page.")),(0,l.kt)("h2",null,"Activating the dialog"),(0,l.kt)("p",null,"The Feedback button only becomes visible once you’ve supplied an ",(0,l.kt)("inlineCode",{parentName:"p"},"onSubmit"),"\nhandler. To do that, we’ll need to shadow the ",(0,l.kt)("inlineCode",{parentName:"p"},"FeedbackDialog")," component."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a new javascript file under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/components/FeedbackDialog/FeedbackDialog.js"),".\nMatching the filepath exactly is important here.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the following snippet into your new file"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeFeedbackDialog from 'gatsby-theme-carbon/src/components/FeedbackDialog/FeedbackDialog';\n\nconst FeedbackDialog = ({ props }) => {\n  const onSubmit = (data) => {\n    console.log({ ...data });\n  };\n\n  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;\n};\n\nexport default FeedbackDialog;\n")),(0,l.kt)("h2",null,"Creating a handler"),(0,l.kt)("p",null,"Next, you’ll need a place to send the data. For the Carbon website, we use a\nserverless function that forwards the data to a\n",(0,l.kt)("a",{parentName:"p",href:"https://www.surveygizmo.com/"},"SurveyGizmo")," quiz. You can see that function\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/blob/master/api/survey.ts"},"here"),"."),(0,l.kt)("p",null,"The handler can send a fetch request off to the endpoint you create. Update the\n",(0,l.kt)("inlineCode",{parentName:"p"},"onSubmit")," handler to send the data wherever you want. This function receives\nthe following arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"experience"),": “Negative”, “Positive” or “Neutral”"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"comment"),": An optional comment"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": the window location when the survey was submitted")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const FeedbackDialog = ({ props }) => {\n  const onSubmit = data => {\n    fetch(process.env.API_ENDPOINT, {\n      method: 'POST',\n      body: JSON.stringify(data),\n  });\n\n  return <ThemeFeedbackDialog {...props} onSubmit={onSubmit} />;\n};\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-feedback-dialog-mdx-bd97bd48a7c35cc2c99d.js.map