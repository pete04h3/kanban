(this.webpackJsonpmyproject=this.webpackJsonpmyproject||[]).push([[0],[,,,,function(e,t,n){e.exports={cardForm:"Form_cardForm__3qvh_"}},function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),l=(n(10),n(1));function u(e){return r.a.createElement("nav",null,e.children)}function i(e){var t=Object(o.useState)(0),n=Object(l.a)(t,2),a=n[0],c=n[1];return r.a.createElement("button",{onClick:function(e){c(a+1)}},a)}function d(e){function t(t){e.onCardMove(e._id,t)}console.log(e);var n={backgroundColor:e.color};return r.a.createElement("li",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",{style:n},e.color),r.a.createElement(i,null),r.a.createElement("button",{onClick:function(){e.onCardDelete(e._id)}},"Delete"),r.a.createElement("button",{onClick:function(){return t("todo")}}," Move to ToDo"),r.a.createElement("button",{onClick:function(){return t("doing")}},"Move to Doing"),r.a.createElement("button",{onClick:function(){return t("done")}},"Move to Done"))}var m=n(4),s=n.n(m);function f(e){var t=Object(o.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],u=Object(o.useState)("#0000"),i=Object(l.a)(u,2),d=i[0],m=i[1];var f={borderColor:a.length>0?"green":"red",borderWidth:"2px",borderStyle:"solid"};return r.a.createElement("form",{className:s.a.cardForm,onSubmit:function(t){t.preventDefault(),e.onFormSubmit({title:a,list:"todo",added:Date.now(),color:d,assignedTo:["jofh"]}),c(""),m("#0000")}},r.a.createElement("label",null,"Title",r.a.createElement("input",{style:f,type:"text",onChange:function(e){c(e.target.value)},name:"title",value:a})),r.a.createElement("label",null,"Color",r.a.createElement("input",{type:"color",onChange:function(e){m(e.target.value)},name:"color",value:d})),r.a.createElement("input",{disabled:0===a.length,type:"submit",value:"Save"}))}function h(e){var t=e.cards.map((function(t){return r.a.createElement(d,Object.assign({onCardDelete:e.onCardDelete,onCardMove:e.onCardMove,key:t._id},t))}));return r.a.createElement("section",null,r.a.createElement("h2",null,e.header),r.a.createElement("ul",null,t),r.a.createElement(f,{onFormSubmit:e.onFormSubmit}))}function b(e){var t=e.cards,n=e.onFormSubmit,o=e.onCardMove,a=e.onCardDelete;return console.log(t),r.a.createElement("main",null,r.a.createElement(h,{onCardDelete:a,onCardMove:o,onFormSubmit:n,cards:t.filter((function(e){return"todo"===e.list})),header:"ToDo"}),r.a.createElement(h,{onCardDelete:a,onCardMove:o,onFormSubmit:n,cards:t.filter((function(e){return"doing"===e.list})),header:"Doing"}),r.a.createElement(h,{onCardDelete:a,onCardMove:o,onFormSubmit:n,cards:t.filter((function(e){return"done"===e.list})),header:"Done"}))}var p="https://trellocopy-abcd.restdb.io/rest/kanban",C="5e9844eb436377171a0c2461";var v={getCards:function(e){fetch(p,{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":C,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(t){return e(t)}))},addCard:function(e,t,n){var o=JSON.stringify(n);fetch(p,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":C,"cache-control":"no-cache"},body:o}).then((function(e){return e.json()})).then((function(n){return e(t.concat(n))}))},moveCard:function(e,t){var n=JSON.stringify(e);fetch(p+"/"+t,{method:"put",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":C,"cache-control":"no-cache"},body:n}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},deleteCard:function(e){fetch(p+"/"+e,{method:"delete",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":C,"cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}};function E(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){v.getCards(a)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(u,null,r.a.createElement("a",{href:"#"},"Home"),r.a.createElement("a",{href:"#"},"About"),r.a.createElement("a",{href:"#"},"Contact")),0===n.length&&r.a.createElement("h2",null,"Loading"),r.a.createElement(b,{onCardDelete:function(e){var t=n.filter((function(t){return t._id!==e}));v.deleteCard(e),a(t)},onCardMove:function(e,t){console.log(e,t);var o=n.map((function(n){return n._id===e&&(n.list=t),n}));v.moveCard({list:t},e),a(o)},onFormSubmit:function(e){console.log("form submitted",e),v.addCard(a,n,e)},cards:n}))}c.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.cde7e8c8.chunk.js.map