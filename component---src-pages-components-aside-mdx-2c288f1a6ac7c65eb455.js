"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[2044,1532],{3624:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),l=n(8650),r=n.n(l),i=n(1597),o=n(4799),s=n(3448),d=n(5900),m=n.n(d),p=function(e){var t,n=e.title,l=e.theme,r=e.tabs,i=void 0===r?[]:r;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===l,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},c=function(e){var t=e.relativePagePath,n=e.repository,l=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||l,o=r.baseUrl,s=r.subDirectory,d=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=n(4703),g=n(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=r()(e,{lower:!0,strict:!0}),s=n===o,d=new RegExp(o+"/?(#.*)?$"),p=l.replace(d,n);return a.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),b=h,k=n(7296),y=n(5387),f=n(3732),N=function(e){var t=e.date,n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,n=e.children,l=e.location,d=e.Title,m=t.frontmatter,g=void 0===m?{}:m,h=t.relativePagePath,f=t.titleType,v=g.tabs,w=g.title,x=g.theme,E=g.description,T=g.keywords,C=g.date,A=(0,y.Z)().interiorTheme,P=(0,i.useStaticQuery)("2456312558").site.pathPrefix,M=P?l.pathname.replace(P,""):l.pathname,L=v?M.split("/").filter(Boolean).slice(-1)[0]||r()(v[0],{lower:!0}):"",B=x||A;return a.createElement(s.Z,{tabs:v,homepage:!1,theme:B,pageTitle:w,pageDescription:E,pageKeywords:T,titleType:f},a.createElement(p,{title:d?a.createElement(d,null):w,label:"label",tabs:v,theme:B}),v&&a.createElement(b,{title:w,slug:M,tabs:v,currentTab:L}),a.createElement(k.Z,{padded:!0},n,a.createElement(c,{relativePagePath:h}),a.createElement(N,{date:C})),a.createElement(u.Z,{pageContext:t,location:l,slug:M,tabs:v,currentTab:L}),a.createElement(o.Z,null))}},1517:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return k}});var a=n(3366),l=(n(7294),n(4983)),r=n(3624),i=["components"],o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},d=s("PageDescription"),m=s("InlineNotification"),p=s("Title"),c=s("Row"),u=s("Column"),g=s("Aside"),h={_frontmatter:o},b=r.Z;function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(b,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"PageDescription"},(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"<Aside>")," component is a wrapper component that adds styling to make the\ntext display smaller than the default body text; using ",(0,l.kt)("inlineCode",{parentName:"p"},"body-long-01")," and adds\nthe correct top border styles."),(0,l.kt)("p",null,"It should only be used within a ",(0,l.kt)("inlineCode",{parentName:"p"},"<Column>")," component with specific parameters.\n",(0,l.kt)("inlineCode",{parentName:"p"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>"))),(0,l.kt)(m,{kind:"warning",mdxType:"InlineNotification"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Warning:")," If you use more than one ",(0,l.kt)("inlineCode",{parentName:"p"},"<Aside>")," component on a single page, you\nneed to provide an accessibility label so that someone using assistive\ntechnology can quickly understand the purpose of the landmark. See\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role#Labeling_landmarks"},"Mozilla Developer Network’s documentation"),"\nfor more information. Props for accessibility labels are described in the\n",(0,l.kt)("a",{parentName:"p",href:"#props"},"Props section")," below.")),(0,l.kt)("h2",null,"Example"),(0,l.kt)(p,{mdxType:"Title"},"With hanging rule"),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(u,{colMd:5,colLg:8,mdxType:"Column"},(0,l.kt)("p",null,"It is more important than ever that we own our own ethos, make palpable our\nbrand values, and incorporate an instantly identifiable IBMness in everything we\ndo."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Without aesthetic, design is either the humdrum repetition of familiar clichés\nor a wild scramble for novelty. Without aesthetic, the computer is but a\nmindless speed machine, producing effects without substance, form without\nrelevant content, or content without meaningful form."),(0,l.kt)("cite",null,"– Paul Rand")),(0,l.kt)("p",null,"Aesthetic is defined as the philosophical theory or set of principles governing\noutward appearance or actions.")),(0,l.kt)(u,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},(0,l.kt)(g,{"aria-label":"Example aside",mdxType:"Aside"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Good design is always good design.")),(0,l.kt)("p",null,"What we borrow from our own design history is not a mid-century aesthetic in\nstylistic terms, but the modernist attitudes and approach used at the time.")))),(0,l.kt)(p,{mdxType:"Title"},"Without hanging rule"),(0,l.kt)(c,{mdxType:"Row"},(0,l.kt)(u,{colMd:5,colLg:8,mdxType:"Column"},(0,l.kt)("p",null,"Like our brand values, our design ethos must be palpable in everything we\nproduce. Our philosophy and principles are for designers and non-designers\nalike–anyone authoring or authorizing any form of design on behalf of IBM."),(0,l.kt)("p",null,"They provide clear criteria for the conception, creativity and craftsmanship our\nbrand demands and our clients deserve. The expression of our philosophy may\nevolve and expand over time, but our principles are designed to endure, ensuring\neverything IBM is distinctly IBM.")),(0,l.kt)(u,{colMd:2,colLg:3,offsetMd:1,offsetLg:1,mdxType:"Column"},(0,l.kt)(g,{"aria-label":"Example aside",hideRule:!0,mdxType:"Aside"},(0,l.kt)("p",null,"A by-product of every experience with IBM should be time—time saved or time\nwell-spent.")))),(0,l.kt)("h2",null,"Code"),(0,l.kt)(p,{mdxType:"Title"},"With hanging rule"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1}>\n  <Aside>\n\n**Good design is always good design.** What we borrow from our own design\nhistory is not a mid-century aesthetic in stylistic terms, but the modernist\nattitudes and approach used at the time.\n\n  </Aside>\n</Column>\n")),(0,l.kt)(p,{mdxType:"Title"},"Without hanging rule"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mdx",metastring:"path=components/Aside/Aside.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside",path:"components/Aside/Aside.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Aside"},"<Column colMd={2} colLg={3} offsetMd={1} offsetLg={1} hideRule>\n  <Aside>\n\nA by-product of every experience with IBM should be time—time saved or time\nwell-spent.\n\n  </Aside>\n</Column>\n")),(0,l.kt)("h3",null,"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"propType"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aria-label"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify an ",(0,l.kt)("inlineCode",{parentName:"td"},"aria-label")," value to provide a label to the inner aside element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aria-labelledBy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify an ",(0,l.kt)("inlineCode",{parentName:"td"},"aria-labelledby")," value that references the id of an existing element to serve as a label for the inner aside element.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"children"),(0,l.kt)("td",{parentName:"tr",align:null},"node"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add custom class name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideRule"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Hide the hanging rule")))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-aside-mdx-2c288f1a6ac7c65eb455.js.map