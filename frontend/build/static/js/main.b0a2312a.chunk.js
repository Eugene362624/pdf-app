(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),l=a.n(o),r=(a(17),a(8)),u=a(1),m=a(13),p=a.n(m),s=a(29),d=a(3),i=a(9),h=a.n(i),f=a(30),g=a.n(f),E=function(e){var t=Object(n.useState)({}),a=Object(d.a)(t,2),o=a[0],l=a[1],u=new Date,m=e.match.params.id,i=Object(n.useState)(""),f=Object(d.a)(i,2),E=f[0],b=f[1],v=Object(n.useState)(""),O=Object(d.a)(v,2),N=O[0],j=O[1],y=Object(n.useState)(""),C=Object(d.a)(y,2),S=C[0],k=C[1],w=Object(n.useState)(""),x=Object(d.a)(w,2),A=x[0],V=x[1],_=Object(n.useState)(""),T=Object(d.a)(_,2),P=T[0],D=T[1],I=Object(n.useState)(""),L=Object(d.a)(I,2),F=L[0],H=L[1],M=Object(n.useState)(""),B=Object(d.a)(M,2),G=B[0],J=B[1],U=Object(n.useState)(""),q=Object(d.a)(U,2),z=q[0],K=q[1],Q=Object(n.useState)(""),R=Object(d.a)(Q,2),W=R[0],X=R[1],Y=Object(n.useState)(""),Z=Object(d.a)(Y,2),$=(Z[0],Z[1]);Object(n.useEffect)((function(){h.a.get("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m)).then((function(e){return l(e.data)}))}),[m]);var ee=function(){var e=Object(s.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(1),e.next=3,h.a.post("https://medvedevs-pdf-app.herokuapp.com/create-pdf",{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(S.length>0?S:o.age),color:"".concat(A.length>0?A:o.color),dogName:"".concat(P.length>0?P:o.dogName),momName:"".concat(F.length>0?F:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(z.length>0?z:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)},{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(){return h.a.get("https://medvedevs-pdf-app.herokuapp.com/fetch-pdf",{headers:{Accept:"application/pdf","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Access-Control-Allow-Headers":"*"}})})).then((function(e){console.log(3),console.log(e);var t=new Blob([e.data],{type:"application/pdf"});g.a.saveAs(t,"newPdf.pdf")})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"documentInfo"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"name",defaultValue:o.name,onChange:function(e){return b(e.target.value)},placeholder:"Enter your name"}),c.a.createElement("input",{type:"text",name:"surname",defaultValue:o.surname,onChange:function(e){return j(e.target.value)},placeholder:"Enter your surname"}),c.a.createElement("input",{type:"text",name:"age",defaultValue:o.age,onChange:function(e){return k(e.target.value)},placeholder:"Enter your age"}),c.a.createElement("input",{type:"text",name:"color",defaultValue:o.color,onChange:function(e){return V(e.target.value)},placeholder:"Enter your favorite color"}),c.a.createElement("input",{type:"text",name:"dogName",defaultValue:o.dogName,onChange:function(e){return D(e.target.value)},placeholder:"Enter your's dog name"}),c.a.createElement("input",{type:"text",name:"momName",defaultValue:o.momName,onChange:function(e){return H(e.target.value)},placeholder:"Enter your's mom name"}),c.a.createElement("input",{type:"text",name:"dadName",defaultValue:o.dadName,onChange:function(e){return J(e.target.value)},placeholder:"Enter your's dad name"}),c.a.createElement("input",{type:"text",name:"group",defaultValue:o.group,onChange:function(e){return K(e.target.value)},placeholder:"Enter your favorite music group"}),c.a.createElement("input",{type:"text",name:"model",defaultValue:o.model,onChange:function(e){return X(e.target.value)},placeholder:"Enter your's notebook model"}),c.a.createElement("input",{type:"text",name:"date",defaultValue:o.timestamp,placeholder:"Enter date",onChange:function(e){return $(e.target.value)}}),c.a.createElement("div",{className:"documentInfo__buttons"},"/files/create"==e.location.pathname?c.a.createElement(r.b,{to:"/files/new"},c.a.createElement("button",{onClick:function(){h.a.post("https://medvedevs-pdf-app.herokuapp.com/files/new",{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(S.length>0?S:o.age),color:"".concat(A.length>0?A:o.color),dogName:"".concat(P.length>0?P:o.dogName),momName:"".concat(F.length>0?F:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(z.length>0?z:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)}).then((function(){return alert("".concat(E," added to the database"))})).then((function(){return e.history.push("/files")})).catch((function(e){console.log(e.response)}))}},"Create")):c.a.createElement(r.b,{to:"/files/".concat(m)},c.a.createElement("button",{onClick:function(){h.a.put("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m,"/update"),{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(S.length>0?S:o.age),color:"".concat(A.length>0?A:o.color),dogName:"".concat(P.length>0?P:o.dogName),momName:"".concat(F.length>0?F:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(z.length>0?z:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)})}},"Save")),c.a.createElement(r.b,{to:"/files/".concat(m)},c.a.createElement("button",{onClick:ee},"Get PDF")),c.a.createElement(r.b,{to:"/"},c.a.createElement("button",null,"Cansel")),c.a.createElement(r.b,{to:"/files"},c.a.createElement("button",{onClick:function(){h.a.delete("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m,"/delete")).then((function(){return e.history.push("/files")}))}},"Delete")))))},b=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),u=Object(d.a)(l,2);u[0],u[1];return Object(n.useEffect)((function(){h.a.get("https://medvedevs-pdf-app.herokuapp.com/files/sync").then((function(e){o(e.data)}))}),[]),c.a.createElement("div",{className:"searchList"},a.map((function(e){return c.a.createElement(r.b,{key:"".concat(e.name,"_").concat(e._id),to:"/files/".concat(e._id)},c.a.createElement("div",{className:"searchList__element"},c.a.createElement("h4",null,e.name),c.a.createElement("small",null,e.timestamp)))})))};var v=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h3",null,"From HTML to PDF app")),c.a.createElement("main",null,c.a.createElement(b,null),c.a.createElement(r.b,{to:"/files/create"},c.a.createElement("button",null,"Create"))),c.a.createElement(u.a,{path:"/files/:id",component:E})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.b0a2312a.chunk.js.map