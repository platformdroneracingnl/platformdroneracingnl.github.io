(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(16),r=t(108),s=t(117),o=t(105),m=t(104);var c=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return i.a.createElement("nav",{className:"pagination-nav","aria-label":Object(m.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(o.a,{className:"pagination-nav__link",to:t},i.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",i.a.createElement(m.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(o.a,{className:"pagination-nav__link",to:n},i.a.createElement("div",{className:"pagination-nav__label"},i.a.createElement(m.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},g=t(112),p=t(102);a.default=function(e){var a=e.metadata,t=e.items,n=e.sidebar,o=Object(l.default)().siteConfig.title,m=a.blogDescription,d=a.blogTitle,v="/"===a.permalink?o:d;return i.a.createElement(r.a,{title:v,description:m,wrapperClassName:p.ThemeClassNames.wrapper.blogPages,pageClassName:p.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--3"},i.a.createElement(g.a,{sidebar:n})),i.a.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return i.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},i.a.createElement(a,null))})),i.a.createElement(c,{metadata:a})))))}}}]);