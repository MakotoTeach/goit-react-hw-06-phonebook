(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={listItem:"ContactListItem_listItem__2Ub35",nameLine:"ContactListItem_nameLine__2EYAe",listItemBtn:"ContactListItem_listItemBtn__2lGut"}},14:function(e,t,n){e.exports={filterLabel:"Filter_filterLabel__1un-k",filterInput:"Filter_filterInput__3TLSN input_input__cvDM7",title:"Filter_title__3mShP"}},18:function(e,t,n){e.exports={wrapper:"Layout_wrapper__1Kosh",container:"Layout_container__3T5lV"}},25:function(e,t,n){e.exports={list:"ContactList_list__y-NH3"}},27:function(e,t,n){e.exports=n(50)},49:function(e,t,n){},5:function(e,t,n){e.exports={submitForm:"AddContactForm_submitForm__1ykNY",formLabel:"AddContactForm_formLabel__39ddC",formInput:"AddContactForm_formInput__22dxf input_input__cvDM7",formButton:"AddContactForm_formButton__2_xJT"}},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=n(2),u=n(8),i=n(9),m=n(11),s=n(10),b=n(12),f=Object(a.createContext)(),d={light:{headerBg:"#F7B30C",fontColor:"black",bodybg:"#ebe3fc",layoutbg:"white"},dark:{headerBg:"#3c3c3c",fontColor:"white",bodybg:"black",layoutbg:"#1a181c"}},h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).toggleTheme=function(){var e="dark"===n.state.themeType?"light":"dark";n.setState({themeType:e,theme:d[e]})},n.state={themeType:"light",theme:d.light,toggleTheme:n.toggleTheme},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(a.Component);h.Consumer=f.Consumer;var p=function(e){return function(t){return r.a.createElement(h.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,n))}))}},_=p((function(e){var t=e.themeType,n=e.toggleTheme;return r.a.createElement("div",{className:"theme-selector"},r.a.createElement("span",{className:"label"},"Toogle theme(",t,")"),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:"light"===t,onChange:n}),r.a.createElement("span",{className:"slider round"})))})),g=n(18),v=n.n(g),C=p((function(e){var t=e.children,n=e.theme;return r.a.createElement("div",{className:v.a.wrapper,style:{background:n.bodybg}},r.a.createElement("div",{className:v.a.container,style:{color:n.fontColor,background:n.layoutbg}},r.a.createElement(_,null),r.a.createElement("h1",null,"Phonebook"),t))})),E=n(22),y=n(23),j=n(3),O={addContact:Object(j.b)("contacts/add",(function(e,t){return{payload:{contact:{id:Object(y.uuid)(),name:e,number:t}}}})),removeContact:Object(j.b)("contacts/remove"),changeFilter:Object(j.b)("contacts/changeFilter")},N=n(13),k=n.n(N);var L=Object(l.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(E.a)({},n)}),(function(e,t){return{onRemove:function(){return e(O.removeContact(t.id))}}}))((function(e){var t=e.name,n=e.number,a=e.onRemove;return r.a.createElement("li",{className:k.a.listItem},r.a.createElement("div",{className:k.a.nameLine},r.a.createElement("p",null,t,":"),r.a.createElement("p",null,n)),r.a.createElement("button",{className:k.a.listItemBtn,type:"button",onClick:a},"Delete"))})),F=n(25),I=n.n(F);var w=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter.toLowerCase();return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a)}))}}))((function(e){var t=e.contacts;return r.a.createElement("ul",{className:I.a.list},t.map((function(e){var t=e.id;return r.a.createElement(L,{key:t,id:t})})))})),x=n(4),T=n(5),A=n.n(T),B=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(x.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""})},n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:A.a.submitForm,onSubmit:this.handleSubmit},r.a.createElement("label",{className:A.a.formLabel},"Name",r.a.createElement("input",{autoComplete:"off",className:A.a.formInput,type:"text",name:"name",value:t,onChange:this.handleChange})),r.a.createElement("label",{className:A.a.formLabel},"Number",r.a.createElement("input",{autoComplete:"off",className:A.a.formInput,type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{className:A.a.formButton,type:"submit"},"Add contact"))}}]),t}(a.Component),S={onAddContact:O.addContact},D=Object(l.b)(null,S)(B),J=n(14),P=n.n(J),R={onChangeFilter:O.changeFilter},M=Object(l.b)((function(e){return{value:e.contacts.filter}}),R)((function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("h2",{className:P.a.title},"Contacts"),r.a.createElement("label",{className:P.a.filterLabel},"Find contact by name",r.a.createElement("input",{className:P.a.filterInput,type:"text",value:t,onChange:function(e){return n(e.target.value)}})))}));var Y,G=n(26),H=n(1),K=Object(j.c)([],(Y={},Object(x.a)(Y,O.addContact,(function(e,t){return[].concat(Object(G.a)(e),[t.payload.contact])})),Object(x.a)(Y,O.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),Y)),U=Object(j.c)("",Object(x.a)({},O.changeFilter,(function(e,t){return t.payload}))),V=Object(H.combineReducers)({items:K,filter:U}),q=Object(j.a)({reducer:{contacts:V}});n(49);o.a.render(r.a.createElement(l.a,{store:q},r.a.createElement((function(){return r.a.createElement(h,null,r.a.createElement(C,null,r.a.createElement(D,null),r.a.createElement(M,null),r.a.createElement(w,null)))}),null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.7fbdc695.chunk.js.map