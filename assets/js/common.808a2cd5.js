(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(121);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(134);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var u=n(135);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return u.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return u.DEFAULT_SEARCH_TAG}});var i=n(122);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var a=n(139);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return a.isSamePath}});var c=n(140);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return c.useTitleFormatter}});var s=n(141);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return s.usePluralForm}});var l=n(142);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return l.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return l.useDocsPreferredVersionByPluginId}});var f=n(123);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return f.DocsPreferredVersionContextProvider}})},103:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},104:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r),u=/{\w+}/g,i="{}";function a(e,t){var n=[],r=e.replace(u,(function(e){var r=e.substr(1,e.length-2),u=null==t?void 0:t[r];if(void 0!==u){var a=o.a.isValidElement(u)?u:String(u);return n.push(a),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?r.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):r.split(i).reduce((function(e,t,r){return[].concat(e,[o.a.createElement(o.a.Fragment,{key:r},t,n[r])])}),[])}function c(e){return a(e.children,e.values)}var s=n(26);function l(e){var t,n=e.id,r=e.message;return null!==(t=s[null!=n?n:r])&&void 0!==t?t:r}function f(e,t){var n,r=e.message;return a(null!==(n=l({message:r,id:e.id}))&&void 0!==n?n:r,t)}function d(e){var t,n=e.children,r=e.id,u=e.values,i=null!==(t=l({message:n,id:r}))&&void 0!==t?t:n;return o.a.createElement(c,{values:u},i)}},105:function(e,t,n){"use strict";var r=n(7),o=n(0),u=n.n(o),i=n(10),a=n(117),c=n(8),s=Object(o.createContext)({collectLink:function(){}}),l=n(109);t.a=function(e){var t,n,f,d=e.isNavLink,v=e.to,g=e.href,p=e.activeClassName,m=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,P=void 0===h||h,D=Object(r.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,O=Object(o.useContext)(s),_=v||g,j=Object(a.a)(_),A=null==_?void 0:_.replace("pathname://",""),V=void 0!==A?(n=A,P&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,w=Object(o.useRef)(!1),E=d?i.e:i.c,C=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!C&&j&&null!=V&&window.docusaurus.prefetch(V),function(){C&&f&&f.disconnect()}}),[V,C,j]);var x=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,L=!V||!j||x;return V&&j&&!x&&!b&&O.collectLink(V),L?u.a.createElement("a",Object.assign({href:V},_&&!j&&{target:"_blank",rel:"noopener noreferrer"},D)):u.a.createElement(E,Object.assign({},D,{onMouseEnter:function(){w.current||null==V||(window.docusaurus.preload(V),w.current=!0)},innerRef:function(e){var t,n;C&&e&&j&&(t=e,n=function(){null!=V&&window.docusaurus.prefetch(V)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:V||""},d&&{isActive:m,activeClassName:p}))}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),v=r,g=f["".concat(i,".").concat(v)]||f[v]||d[v]||u;return n?o.a.createElement(g,a(a({ref:t},s),{},{components:n})):o.a.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=v;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<u;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},107:function(e,t,n){try{e.exports=n(136)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},109:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(117);function u(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,a=void 0!==i&&i,c=u.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),u=n(25),i=n(109),a=n(102);function c(e){var t=e.title,n=e.description,r=e.keywords,c=e.image,s=Object(a.useTitleFormatter)(t),l=Object(i.a)(c,{absolute:!0});return o.a.createElement(u.a,null,t&&o.a.createElement("title",null,s),t&&o.a.createElement("meta",{property:"og:title",content:s}),n&&o.a.createElement("meta",{name:"description",content:n}),n&&o.a.createElement("meta",{property:"og:description",content:n}),r&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),c&&o.a.createElement("meta",{property:"og:image",content:l}),c&&o.a.createElement("meta",{name:"twitter:image",content:l}),c&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},117:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},121:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var o=r(n(16));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(107);t.isDocsPluginEnabled=!!r.useAllDocsData},123:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var a=u(n(0)),c=n(121),s=n(122),l=n(107),f=i(n(143));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),o}function v(){var e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=a.useMemo((function(){return Object.keys(e)}),[e]),r=a.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),o=r[0],u=r[1];return a.useEffect((function(){u(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[o,a.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),u((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[u])]}var g=a.createContext(null);function p(e){var t=e.children,n=v();return a.default.createElement(g.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?a.default.createElement(p,null,t):a.default.createElement(a.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=a.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},134:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var o=r(n(16)),u=n(24);t.useAlternatePageUtils=function(){var e=o.default(),t=e.siteConfig,n=t.baseUrl,r=t.url,i=e.i18n,a=i.defaultLocale,c=i.currentLocale,s=u.useLocation().pathname,l=c===a?n:n.replace("/"+c+"/","/"),f=s.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?r:"")+function(e){return e===a?""+l:""+l+e+"/"}(t)+f}}}},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(24),o=n(137),u=n(138);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return u.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:u.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return u.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return u.getDocVersionSuggestions(n,o)}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return u})),n.d(t,"usePluginData",(function(){return i}));var r=n(16);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function u(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=u(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(24);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),u=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!u&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return u},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,u,i=t.getActiveVersion(e,n),a=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:a,alternateDocVersions:a?(o=a.id,u={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(u[e.name]=t)}))})),u):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),u=o.activeVersion!==r;return{latestDocSuggestion:u?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:u?r:void 0}}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},140:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var o=r(n(16));t.useTitleFormatter=function(e){var t=o.default().siteConfig,n=void 0===t?{}:t,r=n.title,u=n.titleDelimiter,i=void 0===u?"|":u;return e&&e.trim().length?e.trim()+" "+i+" "+r:r}},141:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var o=n(0),u=r(n(16)),i=["zero","one","two","few","many","other"];function a(e){return i.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:a(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=u.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),c;try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:a(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),c}var t,n}),[e])}t.usePluralForm=function(){var e=s();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=n.select(t),u=n.pluralForms.indexOf(o);return r[Math.min(u,r.length-1)]}(n,t,e)}}}},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),o=n(123),u=n(107),i=n(144);t.useDocsPreferredVersion=function(e){void 0===e&&(e=i.DEFAULT_PLUGIN_ID);var t=u.useDocsData(e),n=o.useDocsPreferredVersionContext(),a=n[0],c=n[1],s=a[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=u.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],o=t[n].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(n)})),r}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},o={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},144:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"}}]);