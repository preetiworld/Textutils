(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],[,,,,function(e,t){},,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var r=s(1),c=s.n(r),n=s(3),l=s.n(n),a=(s(9),s(10),s(4)),o=s.n(a),i=s(0);function d(e){const[t,s]=Object(r.useState)("");return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{className:"mb-4",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:t,onChange:e=>{s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let r=t.toUpperCase();s(r),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let r=t.toLowerCase();s(r),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{s(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{navigator.clipboard.writeText(t),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(i.jsx)("button",{disabled:0===t.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let r=t.split(/[ ]+/);s(r.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[t.split(/\s+/).filter((e=>0!==e.length)).length," words and ",t.length," characters"]}),Object(i.jsxs)("p",{children:[.008*t.split(/\s+/).filter((e=>0!==e.length)).length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:t.length>0?t:"Nothing to preview!"})]})]})}var h=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)}),": ",e.alert.msg]})})};var b=function(){const[e,t]=Object(r.useState)("light"),[s,c]=Object(r.useState)(null),n=(e,t)=>{c({msg:e,type:t}),setTimeout((()=>{c(null)}),1500)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",n("Dark mode has been enabled","success")):(t("light"),document.body.style.backgroundColor="white",n("Light mode has been enabled","success"))}},new Date),Object(i.jsx)(h,{alert:s}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(d,{showAlert:n,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:e})})]})};var j=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,13)).then((t=>{let{getCLS:s,getFID:r,getFCP:c,getLCP:n,getTTFB:l}=t;s(e),r(e),c(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),j()}],[[12,1,2]]]);
//# sourceMappingURL=main.fcf576c7.chunk.js.map