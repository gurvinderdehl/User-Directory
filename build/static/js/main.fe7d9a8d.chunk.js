(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(22),a=n.n(r),i=(n(30),n(25)),s=n(0);var o=function(){return Object(s.jsx)("nav",{className:"navbar navbar-light bg-primary",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsx)("a",{className:"navbar-brand"})})})};n(32);var l=function(e){return Object(s.jsx)("main",{className:"wrapper",children:e.children})};n(33);var j=function(){return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"User Directory"}),Object(s.jsx)("p",{children:"Search for a User or sort by Name or Category:"})]})};n(34);var h=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("span",{children:"\xa9 My User Directory 2021"})})},b=n(12),u=n(7),d=n(23),m=n.n(d),O=function(){return m.a.get("https://randomuser.me/api/?results=300").then((function(e){return e.data.results.map((function(e){return{title:e.name.title,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,location:e.location.city,photo:e.picture.large}}))}))};var f=function(e){return Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:Object(s.jsx)("img",{alt:e.photo,src:e.photo})}),Object(s.jsxs)("td",{children:[e.title," ",e.firstName," ",e.lastName]}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.location}),Object(s.jsx)("td",{children:e.phone})]},e.id)})};var x=function(e){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"col-8",children:Object(s.jsx)("input",{type:"search",className:"form-control","aria-describedby":"search-help",placeholder:"Search",onChange:e.handleInputChange})}),Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("button",{type:"submit",className:"btn main-btn btn-primary",onClick:e.handleFormSubmit,children:"Search"})})]})};var p=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(s.jsx)("div",{className:t,children:e.children})};var v=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),o=i[0],l=i[1],j=Object(c.useState)(""),h=Object(u.a)(j,2),d=h[0],m=h[1];return Object(c.useEffect)((function(){O().then((function(e){l(e),r(n)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{value:d,handleInputChange:function(e){m(e.target.value)},handleFormSubmit:function(e){e.preventDefault(),function(){console.log("Searching for: "+d);var e=o.filter((function(e){return e.firstName.toLowerCase()===d||e.lastName.toLowerCase()===d||e.title.toLowerCase()===d?d:void 0}));l(e)}()}}),Object(s.jsx)("button",{type:"submit",className:"btn",onClick:function(){var e=o.sort((function(e,t){return e.firstName<t.firstName?-1:e.firstName>t.firstName?1:0}));l(Object(b.a)(e))},children:"Sort in Alphabetical order"}),Object(s.jsx)(p,{size:"md-12",children:Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Photo"}),Object(s.jsx)("th",{children:"Full Name"}),Object(s.jsx)("th",{children:"Email"}),Object(s.jsx)("th",{children:"Location"}),Object(s.jsx)("th",{children:"Phone"})]})}),Object(b.a)(o).map((function(e){return Object(s.jsx)(f,{title:e.title,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,location:e.location,photo:e.photo})}))]})})]})};var N=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(v,{})})};var y=function(){return Object(s.jsx)(i.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{}),Object(s.jsxs)(l,{children:[Object(s.jsx)(j,{}),Object(s.jsx)(N,{})]}),Object(s.jsx)(h,{})]})})};n(58);a.a.render(Object(s.jsx)(y,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.fe7d9a8d.chunk.js.map