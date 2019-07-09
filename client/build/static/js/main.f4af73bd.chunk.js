(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=a(2),l=a(10),m=a(27),i="GET_DATA",p="FAIL_DUP",u="FAIL_GONE",d="FAIL",f="TOGGLE_MODAL",E="ALERT_MODAL",h={modal:!1};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object.assign({},e,{data:t.payload,modal:!1,input:!0,name:"",performance:0,desc:"",contacts:[],alert:""});case p:return Object.assign({},e,{data:t.payload,modal:!1,alert:"Company data with same name was already created by another user. Data refreshed."});case u:return Object.assign({},e,{data:t.payload,modal:!1,alert:"The company data was deleted by another user. Data refreshed."});case d:return Object.assign({},e,{modal:!1,alert:"Unkown Server ERROR"});case f:return Object.assign({},e,{modal:t.modal,input:t.input,name:t.name,status:t.status,performance:t.performance,desc:t.desc,contacts:t.contacts,alert:""});case E:return Object.assign({},e,{modal:!1,alert:t.alert});default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,v=Object(l.d)(g,y(Object(l.a)(m.a))),N=a(28),b=a(5),_=a(6),w=a(8),O=a(7),C=a(9),j=function(e){return r.a.createElement("button",{type:"button",className:"btn "+e.style,onClick:e.onClick},e.name)},D=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",status:"Researching",performance:0,desc:"",email1:"",email2:"",email3:""},a.getInput=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.resetState=function(){a.setState({name:"",status:"Researching",performance:0,desc:"",email1:"",email2:"",email3:""})},a.closeModal=function(){a.resetState(),a.props.toggleModal(!1,!0,"","",0,"",[])},a.getUpdateScreen=function(){a.setState({name:a.props.name,status:a.props.status,performance:a.props.performance,desc:a.props.desc,email1:a.props.contacts[0]||"",email2:a.props.contacts[1]||"",email3:a.props.contacts[2]||""}),a.props.toggleModal(!0,!0,a.props.name,a.props.status,a.props.performance,a.props.desc,a.props.contacts)},a.sendData=function(){a.props.sendData(a.state.name,a.state.status,a.state.performance,a.state.desc,a.state.email1,a.state.email2,a.state.email3,a.props.data),a.resetState()},a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.modal?r.a.createElement("article",{className:"modal-box"},r.a.createElement("section",{className:"modal-out",onClick:this.closeModal},r.a.createElement("div",{className:"modal-out modal-out__top"}),r.a.createElement("div",{className:"modal-out modal-out__right"}),r.a.createElement("div",{className:"modal-out modal-out__bottom"}),r.a.createElement("div",{className:"modal-out modal-out__left"})),this.props.input?r.a.createElement("section",{className:"modal modal--input"},r.a.createElement("div",{className:"item-row modal--input__name"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Name")),r.a.createElement("input",{type:"text",name:"name",maxLength:"30",placeholder:"Company Name",defaultValue:this.props.name,onChange:this.getInput}))),r.a.createElement("div",{className:"item-row modal--input__status"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text"},"Status")),r.a.createElement("select",{className:"custom-select",name:"status",defaultValue:this.props.status,onChange:this.getInput},r.a.createElement("option",{value:"Researching"},"Researching"),r.a.createElement("option",{value:"Pending"},"Pending"),r.a.createElement("option",{value:"Approved"},"Approved"),r.a.createElement("option",{value:"Declined"},"Declined")))),r.a.createElement("div",{className:"item-row modal--input__performance"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Performance")),r.a.createElement("input",{type:"number",name:"performance",min:"0",max:"10",placeholder:"Score",defaultValue:this.props.performance,onChange:this.getInput}))),r.a.createElement("div",{className:"item-row modal--input__desc"},r.a.createElement("span",{className:"input-group-text"},"Company Description"),r.a.createElement("textarea",{className:"desc form-control",name:"desc",maxLength:"200",placeholder:"Company Description",defaultValue:this.props.desc,onChange:this.getInput})),r.a.createElement("div",{className:"item-row modal--input__contacts"},r.a.createElement("span",{className:"input-group-text"},"Contacts Emails"),r.a.createElement("input",{className:"contact",type:"text",name:"email1",maxLength:"30",placeholder:"Email 1",defaultValue:this.props.contacts[0],onChange:this.getInput}),r.a.createElement("input",{className:"contact",type:"text",name:"email2",maxLength:"30",placeholder:"Email 2",defaultValue:this.props.contacts[1],onChange:this.getInput}),r.a.createElement("input",{className:"contact",type:"text",name:"email3",maxLength:"30",placeholder:"Email 3",defaultValue:this.props.contacts[2],onChange:this.getInput})),r.a.createElement("div",{className:"item-row alert modal--input__alert"},"Name, Status, Performance, Description are required, performance should be between 0 and 10 inclusively, and emails, if present, should be unique and in correct format."),r.a.createElement("div",{className:"item-row modal--input__button"},r.a.createElement(j,{name:"Send Data",style:"btn-success",onClick:this.sendData}))):r.a.createElement("section",{className:"modal"},r.a.createElement("div",{className:"item-row modal__name"},this.props.name),r.a.createElement("div",{className:"item-row modal__status"},r.a.createElement("div",{className:"status status--"+this.props.status},this.props.status)),r.a.createElement("div",{className:"item-row modal__performance"},this.props.performance,"/10"),r.a.createElement("p",{className:"item-row modal__desc"},this.props.desc),r.a.createElement("div",{className:"item-row modal__contacts"},this.props.contacts.map(function(e,t){return r.a.createElement("div",{key:t},e)})),r.a.createElement("div",{className:"item-row"},r.a.createElement(j,{name:"Delete",style:"btn-danger btn--left",onClick:function(){return e.props.deleteCompany(e.props.name)}}),r.a.createElement(j,{name:"Edit",style:"btn-primary btn--right",onClick:this.getUpdateScreen})))):"")}}]),t}(r.a.Component),S=a(11),x=a.n(S),k=function(e,t,a,n,r,c,s){return{type:f,modal:e,input:t,name:a,status:n,performance:r,desc:c,contacts:s}},M=Object(o.b)(function(e){return{data:e.data,modal:e.modal,input:e.input,name:e.name,status:e.status,performance:e.performance,desc:e.desc,contacts:e.contacts}},function(e){return{toggleModal:function(t,a,n,r,c,s,o){return e(k(t,a,n,r,c,s,o))},sendData:function(t,a,n,r,c,s,o,l){return e(function(e,t,a,n,r,c,s,o){var l=parseInt(a),m=function(e){for(var t=[],a=0;a<e.length;a++)e[a].length>0&&t.push(e[a]);return t}([r,c,s]);return e.length>0&&l>=0&&l<=10&&function(e){for(var t=[],a=0;a<e.length;a++){if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e[a])||t.includes(e[a]))return!1;t.push(e[a])}return!0}(m)?function(a){return function(e,t){for(var a=0;a<t.length;a++)if(t[a].name===e)return!0;return!1}(e,o)?x.a.put("/api/company",{name:e,status:t,performance:l,desc:n,contacts:m}).then(function(e){200===e.data.status?a({type:i,payload:e.data.data}):404===e.data.status?a({type:u,payload:e.data.data}):(console.log(e),a({type:d}))}).catch(function(e){console.log(e),a({type:d})}):x.a.post("/api/company",{name:e,status:t,performance:l,desc:n,contacts:m}).then(function(e){200===e.data.status?a({type:i,payload:e.data.data}):409===e.data.status?a({type:p,payload:e.data.data}):(console.log(e),a({type:d}))}).catch(function(e){console.log(e),a({type:d})})}:{type:E,alert:"Name, Status, Performance, Description are required, performance should be between 0 and 10 inclusively, and emails should be unique and in correct format."}}(t,a,n,r,c,s,o,l))},deleteCompany:function(t){return e(function(e){return function(t){return x.a.delete("/api/company",{data:{name:e}}).then(function(e){200===e.data.status?t({type:i,payload:e.data.data}):t({type:d})}).catch(function(e){console.log(e),t({type:d})})}}(t))}}})(D),I=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",{id:"logo"},"Company Hunter"))},A=function(e){return r.a.createElement("div",{className:"alert-panel alert"},e.alert)},L=Object(o.b)(function(e){return{alert:e.alert}},null)(A),R=function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("aside",{className:"control-panel"},r.a.createElement("div",{className:"control"},r.a.createElement("div",{className:"item-row"},r.a.createElement(j,{name:"Create Company Data",style:"btn-primary",onClick:function(){return e.props.toggleModal(!0,!0,"","",0,"",[])}}))))}}]),t}(r.a.Component),V=Object(o.b)(null,function(e){return{toggleModal:function(t,a,n,r,c,s,o){return e(k(t,a,n,r,c,s,o))}}})(R),P=function(e){return r.a.createElement("article",{className:"company"},r.a.createElement("div",{className:"item-row"},r.a.createElement("div",{className:"company__name"},e.company.name)),r.a.createElement("div",{className:"item-row"},r.a.createElement("div",{className:"company__performance"},"Score: ",r.a.createElement("i",null,e.company.performance,"/10"))),r.a.createElement("div",{className:"item-row"},r.a.createElement("div",{className:"company__status"},"Status: ",r.a.createElement("div",{className:"status status--"+e.company.status},r.a.createElement("strong",null,e.company.status)))),r.a.createElement("div",{className:"item-row"},r.a.createElement("div",{className:"company__buttons"},r.a.createElement(j,{name:"Details",style:"btn-sm btn-info",onClick:function(){return e.toggleModal(!0,!1,e.company.name,e.company.status,e.company.performance,e.company.desc,e.company.contacts)}}))))},T=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){console.log(a.props),a.props.getData()},a}return Object(C.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,this.props.data?r.a.createElement("div",{className:"grid grid--main"},r.a.createElement(V,null),r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("section",{className:"company-panel"},r.a.createElement("div",{className:"grid grid--company"},this.props.data.map(function(t,a){return r.a.createElement(P,{company:t,key:a,toggleModal:e.props.toggleModal})}))))):r.a.createElement("div",null,"retrieving data..."))}}]),t}(r.a.Component),U=Object(o.b)(function(e){return{data:e.data}},function(e){return{getData:function(){return e(function(e){return x.a.get("/api/company").then(function(t){e({type:i,payload:t.data.data})}).catch(function(t){console.log(t),e({type:d})})})},toggleModal:function(t,a,n,r,c,s,o){return e(k(t,a,n,r,c,s,o))}}})(T),q=function(){return r.a.createElement("div",{id:"page"},r.a.createElement(M,null),r.a.createElement(I,null),r.a.createElement(U,null))},G=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(q,null))};a(55);s.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(G,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f4af73bd.chunk.js.map