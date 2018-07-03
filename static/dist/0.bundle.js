webpackJsonp([0],{455:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(5),u=l(c),o=a(36),d=a(37),m=a(457),f=l(m);["javascript","xml"].forEach(function(e){var t=a(459)("./"+e);f.default.registerLanguage(e,t)});var b=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),document.querySelectorAll("code").forEach(function(e){f.default.highlightBlock(e)})}},{key:"render",value:function(){return u.default.createElement("div",{className:"page-back"},u.default.createElement("div",{className:"page-cont"},u.default.createElement("div",{className:"page-head"},u.default.createElement("div",{className:"page-head-in"},u.default.createElement("h1",null,"Getting Started"),u.default.createElement("p",null,"Switching to boxicons is easy and can be done in 2 steps. There are more features than just the icons set."))),u.default.createElement("div",{className:"page-body"},u.default.createElement("div",{className:"page-body-in"},u.default.createElement("div",{className:"docs"},u.default.createElement("div",{className:"docs-sidebar"},u.default.createElement("ul",{className:"docs-sidebar-list"},u.default.createElement("li",null,u.default.createElement("a",{href:"#starter-template"},"Starter Template")),u.default.createElement("li",null,u.default.createElement("a",{href:"#usage-with-html"},"Usage with HTML"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"#import-css"},"Import the CSS")),u.default.createElement("li",null,u.default.createElement("a",{href:"#html"},"HTML")))),u.default.createElement("li",null,u.default.createElement("a",{href:"#install-via-npm"},"Install via NPM")),u.default.createElement("li",null,u.default.createElement("a",{href:"#styling"},"Styling"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("a",{href:"#sizing"},"Sizing")),u.default.createElement("li",null,u.default.createElement("a",{href:"#rotation-flipping"},"Rotation & Flipping")),u.default.createElement("li",null,u.default.createElement("a",{href:"#list-icons"},"List Icons")),u.default.createElement("li",null,u.default.createElement("a",{href:"#border"},"Border")),u.default.createElement("li",null,u.default.createElement("a",{href:"#animation"},"Animation")),u.default.createElement("li",null,u.default.createElement("a",{href:"#animation-hover"},"Animation on Hover")))),u.default.createElement("li",null,u.default.createElement("a",{href:"#contribution"},"Contribution")),u.default.createElement("li",null,u.default.createElement("a",{href:"#license"},"License")))),u.default.createElement("div",{className:"docs-content"},u.default.createElement("h3",null,"Quick Start"),u.default.createElement("div",null,u.default.createElement("p",null,"Looking to quickly add Boxicons to your project? Use the paths to CDN or Download the files ",u.default.createElement("a",{download:!0,href:"/static/boxicons-"+d.VERSION+".zip"},"here"),".")),u.default.createElement("h3",{id:"starter-template"},"Starter Template"),u.default.createElement("div",null,u.default.createElement("p",null," Create an HTML document and copy-paste the starter template")," ",u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html"},"<!doctype html>"," ",u.default.createElement("br",null),"<html lang='en'>",u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"<head>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<meta charset='utf-8'>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"}," ","<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"}," ","\x3c!-- Boxicons CSS --\x3e"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<link href='https://cdn.jsdelivr.net/npm/boxicons@"+d.VERSION+"/css/boxicons.min.css' rel='stylesheet'>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<title>Hello, Boxicons!</title>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"</head>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"<body>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"}," ","<h1>Hello, Boxicons!</h1>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<i class='bx bx-hot'></i>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<i class='bx bxs-hot'></i>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab-2"},"<i class='bx bxl-facebook-square'></i>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab"}," </body>"),u.default.createElement("br",null),"</html>"))),u.default.createElement("h3",{id:"usage-with-html"},"Usage with HTML"),u.default.createElement("h4",{id:"import-css"},"Import the CSS"),u.default.createElement("div",null,u.default.createElement("p",null,"Copy-paste the stylesheet ",u.default.createElement("code",{className:"side"},"link")," into your ",u.default.createElement("code",{className:"side"},"head"),"  to load our CSS")," ",u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html"},"<link href='https://cdn.jsdelivr.net/npm/boxicons@"+d.VERSION+"/css/boxicons.min.css' rel='stylesheet'>",u.default.createElement("br",null),"\x3c!-- or --\x3e"," ",u.default.createElement("br",null),"<link href='https://unpkg.com/boxicons@"+d.VERSION+"/css/boxicons.min.css' rel='stylesheet'>")),u.default.createElement("p",null,"This will load boxicons font into your webpage")),u.default.createElement("h4",{id:"html"},"HTML"),u.default.createElement("div",null,u.default.createElement("p",null,"  To use an icon on your page, add a prefix",u.default.createElement("code",{className:"side"},"bx-")," for regular icons, ",u.default.createElement("code",{className:"side"},"bxs-")," for solid icons & ",u.default.createElement("code",{className:"side"},"bxl-")," for logos followed by the icon name and seperate class with the",u.default.createElement("code",{className:"side"},"bx"),":")," ",u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html"},"<i class='bx bx-user'></i>",u.default.createElement("br",null),"<i class='bx bxs-user'></i>",u.default.createElement("br",null),"<i class='bx bxl-facebook-square'></i>")),"You can see the names of all the icons ",u.default.createElement(o.Link,{to:"/cheatsheet"},"here")),u.default.createElement("h3",{id:"install-via-npm"},"Install via NPM"),u.default.createElement("div",null,u.default.createElement("p",null," Install the boxicons package by copy pasting the following in your terminal:"),u.default.createElement("pre",null," ",u.default.createElement("code",null,"$ npm install boxicons --save")),u.default.createElement("p",null," Import the npm module in your javascript"),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"javascript"},"import 'boxicons/css/boxicons.min.css'"))),u.default.createElement("h3",{id:"styling"},"Styling"),u.default.createElement("h4",{id:"sizing"},"Sizing"),u.default.createElement("div",null,u.default.createElement("p",null," You can change size of the icon with",u.default.createElement("code",{className:"side"},"font-size")," CSS. It will inherit the ",u.default.createElement("code",{className:"side"},"font-size"),"from the parent by default. There are fixed sizes you can add to the icon by adding classes",u.default.createElement("code",{className:"side"},"bx-xs"),", ",u.default.createElement("code",{className:"side"},"bx-sm"),", ",u.default.createElement("code",{className:"side"},"bx-md")," and ",u.default.createElement("code",{className:"side"},"bx-lg")),"  ",u.default.createElement("div",{className:"icon-display"},u.default.createElement("i",{className:"bx bxs-smiley-happy bx-xs "}),u.default.createElement("i",{className:"bx bxs-smiley-happy bx-sm"}),u.default.createElement("i",{className:"bx bxs-smiley-happy bx-md"}),u.default.createElement("i",{className:"bx bxs-smiley-happy bx-lg"})),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"","<i class='bx bxs-smiley-happy bx-xs'></i>",u.default.createElement("br",null),"<i class='bx bxs-smiley-happy bx-sm'></i>",u.default.createElement("br",null),"<i class='bx bxs-smiley-happy bx-md'></i>",u.default.createElement("br",null),"<i class='bx bxs-smiley-happy bx-lg'></i>",u.default.createElement("br",null),"")),u.default.createElement("br",null)),u.default.createElement("h4",{id:"rotation-flipping"},"Rotation & Flipping"),u.default.createElement("div",null,u.default.createElement("p",null," Rotate the icons using classes ",u.default.createElement("code",{className:"side"},"bx-rotate-90"),", ",u.default.createElement("code",{className:"side"},"bx-rotate-180")," and ",u.default.createElement("code",{className:"side"},"bx-rotate-270")," or Flip the icons using ",u.default.createElement("code",{className:"side"},"bx-flip-horizontal")," and ",u.default.createElement("code",{className:"side"},"bx-flip-vertical")),u.default.createElement("div",{className:"icon-display"},u.default.createElement("i",{className:"bx bxs-like bx-rotate-90  bx-md"}),u.default.createElement("i",{className:"bx bxs-like bx-rotate-180 bx-md"}),u.default.createElement("i",{className:"bx bxs-like bx-rotate-270 bx-md"}),u.default.createElement("i",{className:"bx bxs-like bx-flip-horizontal bx-md"}),u.default.createElement("i",{className:"bx bxs-like bx-flip-vertical bx-md"})),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"","<i class='bx bxs-like bx-rotate-90'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-rotate-180'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-rotate-270'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-flip-horizontal'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-flip-vertical '></i>",u.default.createElement("br",null),"")),u.default.createElement("br",null)),u.default.createElement("h4",{id:"list-icons"},"List Icons"),u.default.createElement("div",null,u.default.createElement("p",null," Use icons as bullets for the list by adding class ",u.default.createElement("code",{className:"side"},"bx-ul")," to the unordered list element and include the icons inside the",u.default.createElement("code",{className:"side"},"li"),"    "),"       ",u.default.createElement("div",{className:"icon-display"},u.default.createElement("ul",{className:"bx-ul"},u.default.createElement("li",null," ",u.default.createElement("i",{className:"bx  bx-right-arrow"}),"List item 1"),u.default.createElement("li",null," ",u.default.createElement("i",{className:"bx  bx-x"}),"List item 2"),u.default.createElement("li",null," ",u.default.createElement("i",{className:"bx  bx-plus"}),"List item 3"))),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"<ul class='bx-ul'>",u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"<li><i class='bx  bx-right-arrow'></i>List Item 1</li>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"<li><i class='bx  bx-x'></i>List Item 2</li>"),u.default.createElement("br",null),u.default.createElement("span",{className:"tab"},"<li><i class='bx  bx-plus'></i>List Item 3</li>"),u.default.createElement("br",null),"</ul>")),u.default.createElement("br",null)),u.default.createElement("h4",{id:"border"},"Border"),u.default.createElement("div",null,u.default.createElement("p",null,"  Add border to your icons with classes ",u.default.createElement("code",{className:"side"},"bx-border"),", ",u.default.createElement("code",{className:"side"},"bx-border-circle")),"       ",u.default.createElement("div",{className:"icon-display"},u.default.createElement("i",{className:"bx bxs-heart bx-border  bx-md"}),u.default.createElement("i",{className:"bx bxs-heart bx-border-circle  bx-md"})," "),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"<i class='bx bxs-heart bx-border'></i>",u.default.createElement("br",null),"<i class='bx bxs-heart bx-border-circle'></i>",u.default.createElement("br",null))),u.default.createElement("br",null)),u.default.createElement("h4",{id:"animation"},"Animation"),u.default.createElement("div",null,u.default.createElement("p",null," Animate your icons with pre built CSS animations using classes ",u.default.createElement("code",{className:"side"},"bx-spin"),",",u.default.createElement("code",{className:"side"},"bx-tada"),",",u.default.createElement("code",{className:"side"},"bx-flashing"),",",u.default.createElement("code",{className:"side"},"bx-burst"),",",u.default.createElement("code",{className:"side"},"bx-fade-left")," and ",u.default.createElement("code",{className:"side"},"bx-fade-right")),u.default.createElement("p",null,"You can change the speed of the animation with the ",u.default.createElement("code",{className:"side"},"animation-duration")," property & to change the number of times the animation takes place with the property ",u.default.createElement("code",{className:"side"},"animation-iteration-count")," in CSS"),u.default.createElement("div",{className:"icon-display"},u.default.createElement("i",{className:"bx bx-loader bx-spin  bx-md"}),u.default.createElement("i",{className:"bx bxs-bell bx-tada bx-md"}),u.default.createElement("i",{className:"bx bxs-error bx-flashing bx-md"}),u.default.createElement("i",{className:"bx bx-radio-circle bx-burst bx-md"}),u.default.createElement("i",{className:"bx bx-fade-left bxs-left-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-right bxs-right-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-up bxs-up-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-down bxs-down-arrow bx-md"})),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"","<i class='bx bxs-like bx-spin'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-tada'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-flashing'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-burst'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-left'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-right'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-up'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-down'></i>",u.default.createElement("br",null)))),u.default.createElement("br",null),u.default.createElement("h4",{id:"animation-hover"},"Animation on Hover"),u.default.createElement("div",null,u.default.createElement("p",null,"  Animate your icons on hover with pre built CSS animations using classes ",u.default.createElement("code",{className:"side"},"bx-spin-hover"),",",u.default.createElement("code",{className:"side"},"bx-tada-hover"),",",u.default.createElement("code",{className:"side"},"bx-flashing-hover"),",",u.default.createElement("code",{className:"side"},"bx-burst-hover"),",",u.default.createElement("code",{className:"side"},"bx-fade-left-hover")," and ",u.default.createElement("code",{className:"side"},"bx-fade-right-hover")),"     ",u.default.createElement("p",null,"You can change the speed of the animation with the ",u.default.createElement("code",{className:"side"},"animation-duration")," property & to change the number of times the animation takes place with the property ",u.default.createElement("code",{className:"side"},"animation-iteration-count")," in CSS"),u.default.createElement("div",{className:"icon-display"},u.default.createElement("i",{className:"bx bx-loader bx-spin-hover  bx-md"}),u.default.createElement("i",{className:"bx bxs-bell bx-tada-hover bx-md"}),u.default.createElement("i",{className:"bx bxs-error bx-flashing-hover bx-md"}),u.default.createElement("i",{className:"bx bx-radio-circle bx-burst-hover bx-md"}),u.default.createElement("i",{className:"bx bx-fade-left-hover bxs-left-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-right-hover bxs-right-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-up-hover bxs-up-arrow bx-md"}),u.default.createElement("i",{className:"bx bx-fade-down-hover bxs-down-arrow bx-md"})),u.default.createElement("pre",null," ",u.default.createElement("code",{className:"html display"},"","<i class='bx bxs-like bx-spin-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-tada-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-flashing-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-burst-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-left-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-right-hover'></i>",u.default.createElement("br",null),"","<i class='bx bxs-like bx-fade-up-hover'></i>",u.default.createElement("br",null),"<i class='bx bxs-like bx-fade-down-hover'></i>",u.default.createElement("br",null),""))),u.default.createElement("h3",{id:"contribution"},"Contribution"),u.default.createElement("div",null,u.default.createElement("p",null,"Want to report a bug ? Have some suggestions or ideas ? Have an icon or a feature request? Create a new issue on Github with the appropriate label ",u.default.createElement("a",{href:"https://github.com/atisawd/boxicons/issues/new",target:"_blank"},"here"))),u.default.createElement("h3",{id:"license"},"License"),u.default.createElement("div",null,"Boxicons is an open source project , you can use them in your commercial projects too.",u.default.createElement("br",null),"The icons (.svg) files are free to download and are licensed under ",u.default.createElement("a",{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"},"CC 4.0")," . By downloading it is assumed that you agree with the terms mentioned in CC 4.0.",u.default.createElement("br",null),"The fonts files are licensed under ",u.default.createElement("a",{href:"https://opensource.org/licenses/OFL-1.1",target:"_blank"},"SIL OFL 1.1"),u.default.createElement("br",null),"Attribution is not required but is appreciated",u.default.createElement("br",null)," Other files which are not fonts or icons are licensed under the ",u.default.createElement("a",{href:"http://opensource.org/licenses/MIT",target:"_blank"},"MIT License"))))))))}}]),t}(c.Component);t.default=b},457:function(e,t,a){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(t)}(function(e){function t(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a(e){return e.nodeName.toLowerCase()}function l(e,t){var a=e&&e.exec(t);return a&&0===a.index}function n(e){return M.test(e)}function r(e){var t,a,l,r,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",a=O.exec(s))return v(a[1])?a[1]:"no-highlight";for(s=s.split(/\s+/),t=0,l=s.length;t<l;t++)if(r=s[t],n(r)||v(r))return r}function s(e){var t,a={},l=Array.prototype.slice.call(arguments,1);for(t in e)a[t]=e[t];return l.forEach(function(e){for(t in e)a[t]=e[t]}),a}function i(e){var t=[];return function e(l,n){for(var r=l.firstChild;r;r=r.nextSibling)3===r.nodeType?n+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:n,node:r}),n=e(r,n),a(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:r}));return n}(e,0),t}function c(e,l,n){function r(){return e.length&&l.length?e[0].offset!==l[0].offset?e[0].offset<l[0].offset?e:l:"start"===l[0].event?e:l:e.length?e:l}function s(e){function l(e){return" "+e.nodeName+'="'+t(e.value).replace('"',"&quot;")+'"'}o+="<"+a(e)+y.map.call(e.attributes,l).join("")+">"}function i(e){o+="</"+a(e)+">"}function c(e){("start"===e.event?s:i)(e.node)}for(var u=0,o="",d=[];e.length||l.length;){var m=r();if(o+=t(n.substring(u,m[0].offset)),u=m[0].offset,m===e){d.reverse().forEach(i);do{c(m.splice(0,1)[0]),m=r()}while(m===e&&m.length&&m[0].offset===u);d.reverse().forEach(s)}else"start"===m[0].event?d.push(m[0].node):d.pop(),c(m.splice(0,1)[0])}return o+t(n.substr(u))}function u(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return s(e,{variants:null},t)})),e.cached_variants||e.endsWithParent&&[s(e)]||[e]}function o(e){function t(e){return e&&e.source||e}function a(a,l){return new RegExp(t(a),"m"+(e.case_insensitive?"i":"")+(l?"g":""))}function l(n,r){if(!n.compiled){if(n.compiled=!0,n.keywords=n.keywords||n.beginKeywords,n.keywords){var s={},i=function(t,a){e.case_insensitive&&(a=a.toLowerCase()),a.split(" ").forEach(function(e){var a=e.split("|");s[a[0]]=[t,a[1]?Number(a[1]):1]})};"string"==typeof n.keywords?i("keyword",n.keywords):w(n.keywords).forEach(function(e){i(e,n.keywords[e])}),n.keywords=s}n.lexemesRe=a(n.lexemes||/\w+/,!0),r&&(n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")\\b"),n.begin||(n.begin=/\B|\b/),n.beginRe=a(n.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(n.endRe=a(n.end)),n.terminator_end=t(n.end)||"",n.endsWithParent&&r.terminator_end&&(n.terminator_end+=(n.end?"|":"")+r.terminator_end)),n.illegal&&(n.illegalRe=a(n.illegal)),null==n.relevance&&(n.relevance=1),n.contains||(n.contains=[]),n.contains=Array.prototype.concat.apply([],n.contains.map(function(e){return u("self"===e?n:e)})),n.contains.forEach(function(e){l(e,n)}),n.starts&&l(n.starts,r);var c=n.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([n.terminator_end,n.illegal]).map(t).filter(Boolean);n.terminators=c.length?a(c.join("|"),!0):{exec:function(){return null}}}}l(e)}function d(e,a,n,r){function s(e,t){var a,n;for(a=0,n=t.contains.length;a<n;a++)if(l(t.contains[a].beginRe,e))return t.contains[a]}function i(e,t){if(l(e.endRe,t)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return i(e.parent,t)}function c(e,t){return!n&&l(t.illegalRe,e)}function u(e,t){var a=g.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(a)&&e.keywords[a]}function f(e,t,a,l){var n=l?"":C.classPrefix,r='<span class="'+n,s=a?"":S;return(r+=e+'">')+t+s}function b(){var e,a,l,n;if(!y.keywords)return t(M);for(n="",a=0,y.lexemesRe.lastIndex=0,l=y.lexemesRe.exec(M);l;)n+=t(M.substring(a,l.index)),e=u(y,l),e?(O+=e[1],n+=f(e[0],t(l[0]))):n+=t(l[0]),a=y.lexemesRe.lastIndex,l=y.lexemesRe.exec(M);return n+t(M.substr(a))}function E(){var e="string"==typeof y.subLanguage;if(e&&!_[y.subLanguage])return t(M);var a=e?d(y.subLanguage,M,!0,w[y.subLanguage]):m(M,y.subLanguage.length?y.subLanguage:void 0);return y.relevance>0&&(O+=a.relevance),e&&(w[y.subLanguage]=a.top),f(a.language,a.value,!1,!0)}function x(){R+=null!=y.subLanguage?E():b(),M=""}function h(e){R+=e.className?f(e.className,"",!0):"",y=Object.create(e,{parent:{value:y}})}function p(e,t){if(M+=e,null==t)return x(),0;var a=s(t,y);if(a)return a.skip?M+=t:(a.excludeBegin&&(M+=t),x(),a.returnBegin||a.excludeBegin||(M=t)),h(a,t),a.returnBegin?0:t.length;var l=i(y,t);if(l){var n=y;n.skip?M+=t:(n.returnEnd||n.excludeEnd||(M+=t),x(),n.excludeEnd&&(M=t));do{y.className&&(R+=S),y.skip||(O+=y.relevance),y=y.parent}while(y!==l.parent);return l.starts&&h(l.starts,""),n.returnEnd?0:t.length}if(c(t,y))throw new Error('Illegal lexeme "'+t+'" for mode "'+(y.className||"<unnamed>")+'"');return M+=t,t.length||1}var g=v(e);if(!g)throw new Error('Unknown language: "'+e+'"');o(g);var N,y=r||g,w={},R="";for(N=y;N!==g;N=N.parent)N.className&&(R=f(N.className,"",!0)+R);var M="",O=0;try{for(var k,T,L=0;;){if(y.terminators.lastIndex=L,!(k=y.terminators.exec(a)))break;T=p(a.substring(L,k.index),k[0]),L=k.index+T}for(p(a.substr(L)),N=y;N.parent;N=N.parent)N.className&&(R+=S);return{relevance:O,value:R,language:e,top:y}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:t(a)};throw e}}function m(e,a){a=a||C.languages||w(_);var l={relevance:0,value:t(e)},n=l;return a.filter(v).forEach(function(t){var a=d(t,e,!1);a.language=t,a.relevance>n.relevance&&(n=a),a.relevance>l.relevance&&(n=l,l=a)}),n.language&&(l.second_best=n),l}function f(e){return C.tabReplace||C.useBR?e.replace(k,function(e,t){return C.useBR&&"\n"===e?"<br>":C.tabReplace?t.replace(/\t/g,C.tabReplace):""}):e}function b(e,t,a){var l=t?R[t]:a,n=[e.trim()];return e.match(/\bhljs\b/)||n.push("hljs"),-1===e.indexOf(l)&&n.push(l),n.join(" ").trim()}function E(e){var t,a,l,s,u,o=r(e);n(o)||(C.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e,u=t.textContent,l=o?d(o,u,!0):m(u),a=i(t),a.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=l.value,l.value=c(a,i(s),u)),l.value=f(l.value),e.innerHTML=l.value,e.className=b(e.className,o,l.language),e.result={language:l.language,re:l.relevance},l.second_best&&(e.second_best={language:l.second_best.language,re:l.second_best.relevance}))}function x(e){C=s(C,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");y.forEach.call(e,E)}}function p(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function g(t,a){var l=_[t]=a(e);l.aliases&&l.aliases.forEach(function(e){R[e]=t})}function N(){return w(_)}function v(e){return e=(e||"").toLowerCase(),_[e]||_[R[e]]}var y=[],w=Object.keys,_={},R={},M=/^(no-?highlight|plain|text)$/i,O=/\blang(?:uage)?-([\w-]+)\b/i,k=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,S="</span>",C={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=d,e.highlightAuto=m,e.fixMarkup=f,e.highlightBlock=E,e.configure=x,e.initHighlighting=h,e.initHighlightingOnLoad=p,e.registerLanguage=g,e.listLanguages=N,e.getLanguage=v,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,a,l){var n=e.inherit({className:"comment",begin:t,end:a,contains:[]},l||{});return n.contains.push(e.PHRASAL_WORDS_MODE),n.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),n},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},458:function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},459:function(e,t,a){function l(e){return a(n(e))}function n(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./javascript":460,"./xml":458};l.keys=function(){return Object.keys(r)},l.resolve=n,e.exports=l,l.id=459},460:function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",a={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},l={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},n={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},r={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,n]};n.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,l,e.REGEXP_MODE];var s=n.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:a,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}}});
//# sourceMappingURL=0.bundle.js.map