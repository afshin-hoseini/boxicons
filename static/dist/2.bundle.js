webpackJsonp([2],{456:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(5),d=l(o),f=(a(77),a(166)),i=l(f),m=function(e){function t(e){n(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={icons:{data:i.default}},a.copyCode=a.copyCode.bind(a),a}return u(t,e),r(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"copyCode",value:function(e){document.querySelector("input."+e).select(),document.execCommand("copy")}},{key:"render",value:function(){var e=this,t=d.default.createElement("tr",null,d.default.createElement("td",null),d.default.createElement("td",null)),a=d.default.createElement("tr",null,d.default.createElement("td",null),d.default.createElement("td",null)),l=d.default.createElement("tr",null,d.default.createElement("td",null),d.default.createElement("td",null));return null!==this.state.icons.data&&(t=this.state.icons.data.map(function(t,a){if("REGULAR"===t.type_of_icon)return d.default.createElement("tr",{onClick:function(){e.copyCode(t.name)},key:t.id},d.default.createElement("td",{width:"24"},d.default.createElement("i",{className:"bx bx-"+t.name})),d.default.createElement("td",null,t.name,d.default.createElement("input",{className:t.name+" hidden",onChange:function(){},type:"text",value:t.name}),d.default.createElement("i",{className:"bx bx-copy cs-copy"})))}),a=this.state.icons.data.map(function(t,a){if("SOLID"===t.type_of_icon)return d.default.createElement("tr",{onClick:function(){e.copyCode(t.name)},key:t.id},d.default.createElement("td",{width:"24"},d.default.createElement("i",{className:"bx bxs-"+t.name})),d.default.createElement("td",null,t.name,d.default.createElement("input",{className:t.name+" hidden",onChange:function(){},type:"text",value:t.name}),d.default.createElement("i",{className:"bx bx-copy cs-copy"})))}),l=this.state.icons.data.map(function(t,a){if("LOGO"===t.type_of_icon)return d.default.createElement("tr",{onClick:function(){e.copyCode(t.name)},key:t.id},d.default.createElement("td",{width:"24"},d.default.createElement("i",{className:"bx bxl-"+t.name})),d.default.createElement("td",null,t.name,d.default.createElement("input",{className:t.name+" hidden",onChange:function(){},type:"text",value:t.name}),d.default.createElement("i",{className:"bx bx-copy cs-copy"})))})),d.default.createElement("div",{className:"page-back"},d.default.createElement("div",{className:"page-cont"},d.default.createElement("div",{className:"page-cont-in"},d.default.createElement("div",{className:"page-head"},d.default.createElement("div",{className:"page-head-in"},d.default.createElement("h1",null,"Cheatsheet"),d.default.createElement("p",null,"Copy paste the name of any of ",null!==this.state.icons.data&&this.state.icons.data.length," icons"))),d.default.createElement("div",{className:"page-body"},d.default.createElement("h3",{className:"cs"},"Regular"),d.default.createElement("table",null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null),d.default.createElement("th",null))),d.default.createElement("tbody",null,t)),d.default.createElement("h3",{className:"cs"},"Solid"),d.default.createElement("table",null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null),d.default.createElement("th",null))),d.default.createElement("tbody",null,a)),d.default.createElement("h3",{className:"cs"},"Logos"),d.default.createElement("table",null,d.default.createElement("thead",null,d.default.createElement("tr",null,d.default.createElement("th",null),d.default.createElement("th",null))),d.default.createElement("tbody",null,l))))))}}]),t}(o.Component);t.default=m}});
//# sourceMappingURL=2.bundle.js.map