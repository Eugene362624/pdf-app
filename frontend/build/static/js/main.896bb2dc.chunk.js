(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){},32:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),l=a.n(o),r=(a(17),a(8)),u=a(1),m=a(13),p=a.n(m),d=a(29),s=a(3),i=a(9),h=a.n(i),f=a(30),g=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),o=a[0],l=a[1],u=new Date,m=e.match.params.id,i=Object(n.useState)(""),g=Object(s.a)(i,2),E=g[0],b=g[1],v=Object(n.useState)(""),j=Object(s.a)(v,2),N=j[0],O=j[1],y=Object(n.useState)(""),C=Object(s.a)(y,2),k=C[0],S=C[1],x=Object(n.useState)(""),V=Object(s.a)(x,2),w=V[0],_=V[1],D=Object(n.useState)(""),F=Object(s.a)(D,2),I=F[0],L=F[1],P=Object(n.useState)(""),T=Object(s.a)(P,2),B=T[0],J=T[1],M=Object(n.useState)(""),A=Object(s.a)(M,2),G=A[0],H=A[1],q=Object(n.useState)(""),z=Object(s.a)(q,2),K=z[0],Q=z[1],R=Object(n.useState)(""),U=Object(s.a)(R,2),W=U[0],X=U[1],Y=Object(n.useState)(""),Z=Object(s.a)(Y,2),$=(Z[0],Z[1]);Object(n.useEffect)((function(){h.a.get("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m)).then((function(e){return l(e.data)}))}),[m]);var ee=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("https://medvedevs-pdf-app.herokuapp.com/create-pdf",{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(k.length>0?k:o.age),color:"".concat(w.length>0?w:o.color),dogName:"".concat(I.length>0?I:o.dogName),momName:"".concat(B.length>0?B:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(K.length>0?K:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)},{headers:{"Content-Type":"application/json"}}).then((function(){return h.a.get("https://medvedevs-pdf-app.herokuapp.com/fetch-pdf",{responseType:"blob"})})).then((function(e){var t=new Blob([e.data],{type:"application/pdf"});Object(f.saveAs)(t,"newPdf.pdf")})).catch((function(e){console.log(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"documentInfo"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",name:"name",defaultValue:o.name,onChange:function(e){return b(e.target.value)},placeholder:"Enter your name"}),c.a.createElement("input",{type:"text",name:"surname",defaultValue:o.surname,onChange:function(e){return O(e.target.value)},placeholder:"Enter your surname"}),c.a.createElement("input",{type:"text",name:"age",defaultValue:o.age,onChange:function(e){return S(e.target.value)},placeholder:"Enter your age"}),c.a.createElement("input",{type:"text",name:"color",defaultValue:o.color,onChange:function(e){return _(e.target.value)},placeholder:"Enter your favorite color"}),c.a.createElement("input",{type:"text",name:"dogName",defaultValue:o.dogName,onChange:function(e){return L(e.target.value)},placeholder:"Enter your's dog name"}),c.a.createElement("input",{type:"text",name:"momName",defaultValue:o.momName,onChange:function(e){return J(e.target.value)},placeholder:"Enter your's mom name"}),c.a.createElement("input",{type:"text",name:"dadName",defaultValue:o.dadName,onChange:function(e){return H(e.target.value)},placeholder:"Enter your's dad name"}),c.a.createElement("input",{type:"text",name:"group",defaultValue:o.group,onChange:function(e){return Q(e.target.value)},placeholder:"Enter your favorite music group"}),c.a.createElement("input",{type:"text",name:"model",defaultValue:o.model,onChange:function(e){return X(e.target.value)},placeholder:"Enter your's notebook model"}),c.a.createElement("input",{type:"text",name:"date",defaultValue:o.timestamp,placeholder:"Enter date",onChange:function(e){return $(e.target.value)}}),c.a.createElement("div",{className:"documentInfo__buttons"},"/files/create"==e.location.pathname?c.a.createElement(r.b,{to:"/files/new"},c.a.createElement("button",{onClick:function(){h.a.post("https://medvedevs-pdf-app.herokuapp.com/files/new",{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(k.length>0?k:o.age),color:"".concat(w.length>0?w:o.color),dogName:"".concat(I.length>0?I:o.dogName),momName:"".concat(B.length>0?B:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(K.length>0?K:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)}).then((function(){return alert("".concat(E," added to the database"))})).then((function(){return e.history.push("/files")})).catch((function(e){console.log(e.response)}))}},"Create")):c.a.createElement(r.b,{to:"/files/".concat(m)},c.a.createElement("button",{onClick:function(){h.a.put("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m,"/update"),{name:"".concat(E.length>0?E:o.name),surname:"".concat(N.length>0?N:o.surname),age:"".concat(k.length>0?k:o.age),color:"".concat(w.length>0?w:o.color),dogName:"".concat(I.length>0?I:o.dogName),momName:"".concat(B.length>0?B:o.momName),dadName:"".concat(G.length>0?G:o.dadName),group:"".concat(K.length>0?K:o.group),model:"".concat(W.length>0?W:o.model),timestamp:"".concat(u)})}},"Save")),c.a.createElement(r.b,{to:"/files/".concat(m)},c.a.createElement("button",{onClick:ee},"Get PDF")),c.a.createElement(r.b,{to:"/"},c.a.createElement("button",null,"Cansel")),c.a.createElement(r.b,{to:"/files"},c.a.createElement("button",{onClick:function(){h.a.delete("https://medvedevs-pdf-app.herokuapp.com/files/".concat(m,"/delete")).then((function(){return e.history.push("/files")}))}},"Delete")))))},E=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),u=Object(s.a)(l,2);u[0],u[1];return Object(n.useEffect)((function(){h.a.get("https://medvedevs-pdf-app.herokuapp.com/files/sync").then((function(e){o(e.data)}))}),[]),c.a.createElement("div",{className:"searchList"},a.map((function(e){return c.a.createElement(r.b,{key:"".concat(e.name,"_").concat(e._id),to:"/files/".concat(e._id)},c.a.createElement("div",{className:"searchList__element"},c.a.createElement("h4",null,e.name),c.a.createElement("small",null,e.timestamp)))})))};var b=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h3",null,"From HTML to PDF app")),c.a.createElement("main",null,c.a.createElement(E,null),c.a.createElement(r.b,{to:"/files/create"},c.a.createElement("button",null,"Create"))),c.a.createElement(u.a,{path:"/files/:id",component:g})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.896bb2dc.chunk.js.map