(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),c=a(2),o=a(7),s=a(1),l=(a(13),a(0)),u=function(e){var t=e.user;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},d=function(e){var t=e.todo,a=t.completed?"TodoInfo TodoInfo--completed":"TodoInfo";return Object(l.jsxs)("article",{className:a,"data-id":t.id,children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(l.jsx)(u,{user:t.user})]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(d,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:b(e.userId)})})),f=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),o=Object(c.a)(i,2),u=o[0],d=o[1],f=Object(s.useState)(Object(r.a)(h)),O=Object(c.a)(f,2),p=O[0],v=O[1],x=Object(s.useState)(!0),y=Object(c.a)(x,2),S=y[0],I=y[1],g=Object(s.useState)(!0),N=Object(c.a)(g,2),C=N[0],_=N[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&u&&(!function(){var e,t=null===(e=j.find((function(e){return e.name===u})))||void 0===e?void 0:e.id,n=Math.max.apply(Math,Object(r.a)(h.map((function(e){return e.id}))));if(t){var i={id:n+1,title:a,userId:t,completed:!1,user:b(t)};v([].concat(Object(r.a)(p),[i]))}}(),n(""),d("")),a||I(!1),u||_(!1)},children:[Object(l.jsx)("input",{type:"text",name:"title",id:"title",value:a,placeholder:"Enter a title","data-cy":"titleInput",onChange:function(e){I(!0),n(e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9 ]/g,""))}}),Object(l.jsx)("span",{className:"error",children:!S&&"Please enter a title"}),Object(l.jsx)("br",{}),Object(l.jsxs)("select",{name:"users","data-cy":"userSelect",onChange:function(e){d(e.target.value),_(!0)},children:[Object(l.jsx)("option",{value:"",children:"Choose a user"}),j.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(l.jsx)("span",{className:"error",children:!C&&"Please choose a user"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",children:"Add task"})]}),Object(l.jsx)(m,{todos:p})]})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.85d86a2a.chunk.js.map