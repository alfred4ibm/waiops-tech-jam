"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[1532],{3624:function(e,t,a){a.d(t,{Z:function(){return N}});var l=a(7294),r=a(8650),n=a.n(r),i=a(1597),s=a(4799),c=a(3448),m=a(5900),o=a.n(m),d=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return l.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,s=n.baseUrl,c=n.subDirectory,m=s+"/edit/"+n.branch+c+"/src/pages"+t;return s?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},p=a(4703),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===s,m=new RegExp(s+"/?(#.*)?$"),d=r.replace(m,a);return l.createElement("li",{key:e,className:o()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},l.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(l.Component),E=b,h=a(7296),v=a(5387),f=a(3732),P=function(e){var t=e.date,a=new Date(t);return t?l.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(f.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,o=t.frontmatter,g=void 0===o?{}:o,b=t.relativePagePath,f=t.titleType,N=g.tabs,x=g.title,y=g.theme,w=g.description,k=g.keywords,T=g.date,C=(0,v.Z)().interiorTheme,Z=(0,i.useStaticQuery)("2456312558").site.pathPrefix,B=Z?r.pathname.replace(Z,""):r.pathname,H=N?B.split("/").filter(Boolean).slice(-1)[0]||n()(N[0],{lower:!0}):"",_=y||C;return l.createElement(c.Z,{tabs:N,homepage:!1,theme:_,pageTitle:x,pageDescription:w,pageKeywords:k,titleType:f},l.createElement(d,{title:m?l.createElement(m,null):x,label:"label",tabs:N,theme:_}),N&&l.createElement(E,{title:x,slug:B,tabs:N,currentTab:H}),l.createElement(h.Z,{padded:!0},a,l.createElement(u,{relativePagePath:b}),l.createElement(P,{date:T})),l.createElement(p.Z,{pageContext:t,location:r,slug:B,tabs:N,currentTab:H}),l.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-tutorials-instana-explore-index-mdx-d9d1213dcf68a018d611.js.map