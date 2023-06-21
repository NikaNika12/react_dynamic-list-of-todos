(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(4),l=c(2),r=c(3),i=c.n(r),d=c(1),o=(c(13),c(14),c(6)),j=c.n(o),u=c(0),b=function(e){var t=e.selectedTodo,c=e.clickModal,a=e.filteredTodos;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:a.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:j()({"has-background-info-light":(null===t||void 0===t?void 0:t.id)===e.id}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:t&&t.id===e.id?Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far fa-eye-slash"})}):Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},h=function(e){var t=e.inputValue,c=e.onChangeInput,a=e.selectValue,s=e.onChangeSelect;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return s(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},O=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x,f=function(e){return m("/users/".concat(e))},p=function(e){var t=e.todo,c=e.clickModal,a=Object(d.useState)(null),s=Object(l.a)(a,2),r=s[0],o=s[1],j=Object(d.useState)(!1),b=Object(l.a)(j,2),h=b[0],m=b[1],x=Object(d.useState)(!1),p=Object(l.a)(x,2),v=p[0],N=p[1],y=t.id,g=t.title,k=t.completed,C=t.userId;return Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,f(C);case 4:t=e.sent,o(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(!0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[C]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),!h&&t?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(y)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:g}),!v&&r?Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[k?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]}):Object(u.jsx)("p",{children:"User is not found!"})]})]}):Object(u.jsx)(O,{})]})};!function(e){e.All="All",e.ACTIVE="Active",e.COMPLETED="Completed"}(x||(x={}));var v=function(){var e=Object(d.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(d.useState)([]),r=Object(l.a)(s,2),o=r[0],j=r[1],f=Object(d.useState)(!0),v=Object(l.a)(f,2),N=v[0],y=v[1],g=Object(d.useState)(null),k=Object(l.a)(g,2),C=k[0],S=k[1],w=Object(d.useState)(x.All),T=Object(l.a)(w,2),E=T[0],A=T[1],I=Object(d.useState)(!1),M=Object(l.a)(I,2),L=M[0],V=M[1],_=Object(d.useState)(!1),P=Object(l.a)(_,2),B=P[0],D=P[1];Object(d.useEffect)((function(){var e=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("/todos");case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),D(!0);case 10:return e.prev=10,y(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=Object(d.useMemo)((function(){return o.filter((function(e){var t=e.title.toLowerCase().includes(c.toLowerCase().trim());switch(E){case x.ACTIVE:return!e.completed&&t;case x.COMPLETED:return e.completed&&t;default:return t}}))}),[o,c,E]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{inputValue:c,onChangeInput:a,selectValue:E,onChangeSelect:A})}),!N&&o.length?Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(b,{filteredTodos:J,selectedTodo:C,clickModal:function(e){V(!0);var t=o.find((function(t){return e===t.id}));t&&S(t)}})}):Object(u.jsx)(O,{}),B&&!o.length&&Object(u.jsx)("p",{children:"A server error occurred while uploading the data from server"})]})})}),L&&C&&Object(u.jsx)(p,{todo:C,clickModal:function(){V(!1),S(null)}})]})};s.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d5c615e3.chunk.js.map