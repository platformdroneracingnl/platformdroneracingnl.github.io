(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13],{208:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),n=a(6010),l=a(1384),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",o="sidebarItemLinkActive_12pM";function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,n.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:i},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:o},e.title))}))))}},2867:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(9079),l=a(1384),s=a(208),i=a(4416),c=a(6939);t.default=function(e){var t=e.tags,a=e.sidebar,m={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);m[t]=m[t]||[],m[t].push(e)}));var u=Object.entries(m).sort((function(e,t){var a=e[0],r=t[0];return a===r?0:a>r?1:-1})).map((function(e){var a=e[0],n=e[1];return r.createElement("div",{key:a},r.createElement("h3",null,a),n.map((function(e){return r.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(n.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(s.Z,{sidebar:a})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(i.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),r.createElement("div",{className:"margin-vert--lg"},u)))))}}}]);