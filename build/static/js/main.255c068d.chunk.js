(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{56:function(n,t,e){},75:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e(11),o=e.n(c),i=e(3),s=(e(56),e(44)),l=e(19),u=e(2),b=e(45),d=e(9),x=e(6);function p(){var n=Object(d.a)(["\nmargin-bottom: 20px;\n.label{\n    font-size: 20px;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 5px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n    \n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n.buttonWrapper{\n   display:flex;\n   justify-content:flex-end;\n}\n.button{\n    \t\n   width: 25%;\n   padding: 5px 10px; \n   font-size: 20px;\n   border-radius: 5px;\n   border-color: #eeedfa;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n       background-color:#3CB371;\n       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n.alertSlide-enter{\ntransform: translateX(200%);\n}\n.alertSlide-enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n.alertSlide-exit{\n    transform: translateX(0);\n}\n.alertSlide-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n\n"]);return p=function(){return n},n}var m=x.b.form(p()),f=e(10),j=Object(f.b)("ADD_NEW_CONTACT"),O=Object(f.b)("GET_CONTACTS"),h=Object(f.b)("DELETE_NEW_CONTACT"),g=Object(f.b)("FILTER_CONTACT",(function(n){return{payload:n.target.value}})),v=Object(f.b)("ALERT_CONTACT"),S=Object(f.b)("LOADING_CONTACT"),F=Object(f.b)("SET_ERROR");function w(){var n=Object(d.a)(["\nwidth: 50vw;\nmargin:0 auto;\npadding: 20px;\nbackground-color: #f55d67;\nborder: 1px solid #afaeb0;\nborder-radius: 5px;\n.alertText{\n    text-align: center;\n    font-size: 30px;\n    color: #ffffff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n"]);return w=function(){return n},n}var N=x.b.div(w()),y=function(n){var t=n.text;return Object(r.jsx)(N,{children:Object(r.jsxs)("p",{className:"alertText",children:["\u2757",t,"\u2757"]})})},C=e(21),T=e.n(C),E=e(18),L=function(n){return n.contacts.items},k=function(n){return n.contacts.filter},A={getContactsSelector:L,getTextAlertSelector:function(n){return n.contacts.text},getLoadingSelector:function(n){return n.contacts.isLoading},getFilterSelector:Object(E.a)([L,k],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),getFilterValueSelector:k},X=function(){var n=Object(i.d)((function(n){return A.getContactsSelector(n)})),t=Object(i.d)((function(n){return A.getTextAlertSelector(n)})),e=Object(i.d)((function(n){return A.getLoadingSelector(n)})),c=Object(i.c)(),o=Object(a.useState)({name:"",number:""}),d=Object(b.a)(o,2),x=d[0],p=d[1];Object(a.useEffect)((function(){t&&setTimeout((function(){c(v(""))}),2e3)}),[t,c]);var f=function(n){var t=n.target,e=t.name,r=t.value;p((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(l.a)({},e,r))}))};return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(s.a,{in:!0,classNames:"alertSlide",timeout:500,unmountOnExit:!0,children:Object(r.jsx)(y,{text:t})}),e&&Object(r.jsx)("h2",{children:"...Send data..."}),Object(r.jsxs)(m,{className:"wrapper",onSubmit:function(t){var e;t.preventDefault(),x.name.length?x.number.length?n.some((function(n){return n.name.toLowerCase()===x.name.toLowerCase()}))?c(v("".concat(x.name," is already in contacts."))):c((e=x,function(n){n(S()),T.a.post("".concat("https://redux-hm-07-default-rtdb.firebaseio.com","/contacts.json"),e).then((function(t){return n(j(Object(u.a)(Object(u.a)({},e),{},{id:t.data.name})))})).catch((function(t){return n(F(t))})).finally(n(S()))})):c(v("Please, enter your number")):c(v("Please, enter your name")),p({name:"",number:""})},children:[Object(r.jsxs)("label",{className:"label",children:["Name",Object(r.jsx)("input",{className:"input",type:"text",name:"name",value:x.name,onChange:f})]}),Object(r.jsxs)("label",{className:"label",children:["Number",Object(r.jsx)("input",{className:"input",type:"tel",name:"number",value:x.number,onChange:f})]}),Object(r.jsx)("div",{className:"buttonWrapper",children:Object(r.jsx)("button",{className:"button",type:"submit",children:"Add contact"})})]})]})},z=e(76);function _(){var n=Object(d.a)(["\n.contactList{\n  list-style: none;\n}\n\n.itemContact{\n    display:flex;\n    justify-content: space-between;\n    padding: 5px 10px;\n    font-size: 20px;\n    background-color:#ffffff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n    border: 1px solid #afaeb0;\n    border-radius: 5px;\n   \n     &:not(:last-child) {\n      margin-bottom: 10px;}\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n\n}\n.button{\n   width: 25%;\n   padding: 5px 10px; \n   \t\n   font-size: 20px;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n\n   border-radius: 5px;\n   border-color: #eeedfa;\n\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n       background-color:#3CB371;\n       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n\n"]);return _=function(){return n},n}var D=x.b.div(_());function R(){var n=Object(d.a)(["\n&:enter{transform: translateX(-200%);}\n&:enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n&:exit{transform: transform: translateX(0);}\n&:exit-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"]);return R=function(){return n},n}var W=e(42).a.li.attrs({mountOnEnter:!0,unmountOnExit:!0,timeout:250})(R()),B=function(){var n=Object(i.d)((function(n){return A.getFilterSelector(n)})),t=Object(i.c)(),e=function(n){var e=n.target.id;t(function(n){return function(t){t(S()),T.a.delete("".concat("https://redux-hm-07-default-rtdb.firebaseio.com","/contacts/").concat(n,".json")).then((function(e){return t(h(n))})).catch((function(n){return t(F(n))})).finally(t(S()))}}(e))};return Object(r.jsx)(D,{children:Object(r.jsx)(z.a,{component:"ul",className:"contactList wrapper",children:n.map((function(n){var t=n.id,a=n.name,c=n.number;return Object(r.jsxs)(W,{timeout:250,className:"itemContact",children:["".concat(a,":  ").concat(c),Object(r.jsx)("button",{className:"button",type:"button",id:t,onClick:e,children:"Delete"})]},t)}))})})};function I(){var n=Object(d.a)(["\nmargin-bottom: 20px;\n\n.titleFilter{\nfont-size: 25px;\ncolor:#2F4F4F;\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 20px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n\n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n"]);return I=function(){return n},n}var P=x.b.div(I()),G=function(){var n=Object(i.d)((function(n){return A.getFilterValueSelector(n)})),t=Object(i.c)();return Object(r.jsxs)(P,{className:"wrapper",children:[Object(r.jsx)("h3",{className:"titleFilter",children:"Find contacts by name"}),Object(r.jsx)("input",{name:"filter",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(n){return t(g(n))}})]})};function J(){var n=Object(d.a)(["\n.mainTitle,.title{\ntext-align: center;\ncolor:#3b2dd6;\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n.mainTitle{\n    margin-bottom:20px;  \n    font-size: 40px;\n}\n.title{\n    margin-bottom:10px;\n    font-size: 30px;   \n}\n\n.titleSlide-appear{\n    transform: translateY(-100%);\n}\n.titleSlide-appear-active{\n    transform: translateY(0);\n    transition:transform 500ms linear;\n}\n\n.filterSlide-enter{\ntransform: scale(0);\n    \n}\n.filterSlide-enter-active{\n   transform: scale(1);\n  transition: transform 500ms ease-in-out;\n}\n.filterSlide-exit{\n    transform: scale(1);\n}\n.filterSlide-exit-active{\n    transform: scale(0);\n  transition: transform 500ms ease-in-out;\n}\n\n.alertSlide-enter{\ntransform: translateX(200%);\n}\n.alertSlide-enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n.alertSlide-exit{\n    transform: translateX(0);\n}\n.alertSlide-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"]);return J=function(){return n},n}var V=x.b.div(J()),Y=Object(i.b)((function(n){return{contacts:n.contacts.items}}))((function(n){var t=n.contacts;return Object(r.jsxs)(V,{children:[Object(r.jsx)(s.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(r.jsx)("h1",{className:"mainTitle",children:"Phonebook"})}),Object(r.jsx)(X,{}),Object(r.jsx)("h2",{className:"title",children:"Contacts"}),Object(r.jsx)(s.a,{in:t.length>1,classNames:"filterSlide",timeout:500,unmountOnExit:!0,children:Object(r.jsx)(G,{})}),t.length>0&&Object(r.jsx)(s.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(r.jsx)(B,{contacts:t})})]})})),q=e(8),H=e(22),K={items:[],filter:"",text:"",error:"",isLoading:!1},M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(u.a)({},K),t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case j.type:return Object(u.a)(Object(u.a)({},n),{},{items:[].concat(Object(H.a)(n.items),[r])});case O.type:return Object(u.a)(Object(u.a)({},n),{},{items:Object(H.a)(r)});case h.type:return Object(u.a)(Object(u.a)({},n),{},{items:Object(H.a)(n.items.filter((function(n){return n.id!==r})))});case g.type:return Object(u.a)(Object(u.a)({},n),{},{filter:r});case v.type:return Object(u.a)(Object(u.a)({},n),{},{text:r});case S.type:return Object(u.a)(Object(u.a)({},n),{},{isLoading:!n.isLoading});case F.type:return Object(u.a)(Object(u.a)({},n),{},{error:r});default:return n}},Q=Object(q.c)({contacts:M}),U=Object(f.a)({reducer:Q});o.a.render(Object(r.jsx)(i.a,{store:U,children:Object(r.jsx)(Y,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.255c068d.chunk.js.map