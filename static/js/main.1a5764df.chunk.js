(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),l=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("ul",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link","aria-current":"page",href:"",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item"})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})})}function d(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=a.toUpperCase();s(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=a.toLowerCase();s(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){s(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[a.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",a.length," characters"]}),Object(o.jsxs)("p",{children:[.008*a.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Nothing to preview!"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About"};var b=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],u=r[1],j=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:n,toggleMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#042743",j("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"))}},new Date),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:j,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:n})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1a5764df.chunk.js.map