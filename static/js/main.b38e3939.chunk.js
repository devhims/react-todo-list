(this["webpackJsonppassing-thoughts"]=this["webpackJsonppassing-thoughts"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),u=n(1),a=n.n(u),o=n(6),s=n.n(o),r=n(7),i=n(4),h=function(t){var e=t.thoughts,n=t.removeThought,u=function(t){var e=t.target;n(e.value)};return Object(c.jsx)("ul",{className:"thoughts",children:e.map((function(t,e){return Object(c.jsxs)("li",{className:"Thought",children:[Object(c.jsx)("button",{value:t,"aria-label":"Remove thought",className:"remove-button",onClick:u,children:"\xd7"}),Object(c.jsx)("div",{className:"text",children:t})]},e)}))})},j=function(t){var e=Object(u.useState)(""),n=Object(i.a)(e,2),a=n[0],o=n[1];return Object(c.jsxs)("form",{className:"AddThoughtForm",onSubmit:function(e){e.preventDefault(),a&&t.addThought(a),o("")},children:[Object(c.jsx)("input",{type:"text","aria-label":"What's on your mind?",placeholder:"What's on your mind?",value:a,onChange:function(t){o(t.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Add"})]})};n(13);var l=function(){var t=Object(u.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"To-do List"})}),Object(c.jsxs)("main",{children:[Object(c.jsx)(j,{addThought:function(t){a((function(e){return[t].concat(Object(r.a)(e))}))}}),Object(c.jsx)(h,{thoughts:n,removeThought:function(t){a((function(e){return e.filter((function(e){return e!==t}))}))}})]})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,u=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),u(t),a(t),o(t)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),d()}},[[14,1,2]]]);
//# sourceMappingURL=main.b38e3939.chunk.js.map