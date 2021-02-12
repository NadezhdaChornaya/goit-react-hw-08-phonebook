(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{103:function(n,t,e){"use strict";e.r(t);var a,r,o,c,i,s,l=e(0),d=e(100),u=e(13),b=e(34),x=e(2),p=e(22),m=e(12),f=e(8),j=f.d.form(a||(a=Object(m.a)(["\nmargin-bottom: 20px;\n.label{\n    font-size: 20px;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 5px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n    \n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n.buttonWrapper{\n   display:flex;\n   justify-content:flex-end;\n}\n.button{\n    \t\n   min-width: 80px;\n   padding: 5px 10px; \n   font-size: 20px;\n   border-radius: 50px;\n   border-color: #eeedfa;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #d98729;\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n       color:#fff;\n       background-color:#d98729;\n       /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);} */\n}\n.alertSlide-enter{\ntransform: translateX(200%);\n}\n.alertSlide-enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n.alertSlide-exit{\n    transform: translateX(0);\n}\n.alertSlide-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n\n"]))),h=e(16),O=f.d.div(r||(r=Object(m.a)(["\nwidth: 50vw;\nmargin:0 auto;\npadding: 20px;\nbackground-color: #f55d67;\nborder: 1px solid #afaeb0;\nborder-radius: 5px;\n.alertText{\n    text-align: center;\n    font-size: 30px;\n    color: #ffffff;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n"]))),g=e(1),v=function(n){var t=n.text;return Object(g.jsx)(O,{children:Object(g.jsxs)("p",{className:"alertText",children:["\u2757",t,"\u2757"]})})},w=e(65),S=e.n(w),F=e(63),y=e(23),N=function(n){return n.contacts.items},k=function(n){return n.contacts.filter},X={getContactsSelector:N,getTextAlertSelector:function(n){return n.contacts.text},getLoadingSelector:function(n){return n.contacts.isLoading},getFilterSelector:Object(y.a)([N,k],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),getFilterValueSelector:k},C=function(){var n=Object(u.d)((function(n){return X.getContactsSelector(n)})),t=Object(u.d)((function(n){return X.getTextAlertSelector(n)})),e=Object(u.d)((function(n){return X.getLoadingSelector(n)})),a=Object(u.c)(),r=Object(l.useState)({name:"",number:""}),o=Object(p.a)(r,2),c=o[0],i=o[1];Object(l.useEffect)((function(){t&&setTimeout((function(){a(Object(h.b)(""))}),2e3)}),[t,a]);var s=function(n){var t=n.target,e=t.name,a=t.value;i((function(n){return Object(x.a)(Object(x.a)({},n),{},Object(b.a)({},e,a))}))};return Object(g.jsxs)(g.Fragment,{children:[t&&Object(g.jsx)(d.a,{in:!0,classNames:"alertSlide",timeout:500,unmountOnExit:!0,children:Object(g.jsx)(v,{text:t})}),e&&Object(g.jsx)("h2",{children:"...Send data..."}),Object(g.jsxs)(j,{className:"wrapper",onSubmit:function(t){var e;t.preventDefault(),c.name.length?c.number.length?n.some((function(n){return n.name.toLowerCase()===c.name.toLowerCase()}))?a(Object(h.b)("".concat(c.name," is already in contacts."))):a((e=c,function(n,t){var a=t().auth.idToken,r=t().auth.localId;n(Object(h.g)()),S.a.post("".concat(F.a,"/contacts/").concat(r,".json?auth=").concat(a),e).then((function(t){return n(Object(h.a)(Object(x.a)(Object(x.a)({},e),{},{id:t.data.name})))})).catch((function(t){return n(Object(h.f)(t))})).finally(n(Object(h.g)()))})):a(Object(h.b)("Please, enter your number")):a(Object(h.b)("Please, enter your name")),i({name:"",number:""})},children:[Object(g.jsxs)("label",{className:"label",children:["Name",Object(g.jsx)("input",{className:"input",type:"text",name:"name",value:c.name,onChange:s})]}),Object(g.jsxs)("label",{className:"label",children:["Number",Object(g.jsx)("input",{className:"input",type:"tel",name:"number",value:c.number,onChange:s})]}),Object(g.jsx)("div",{className:"buttonWrapper",children:Object(g.jsx)("button",{className:"button",type:"submit",children:"Add contact"})})]})]})},z=e(104),L=f.d.div(o||(o=Object(m.a)(["\n.contactList{\n  list-style: none;\n}\n\n.itemContact{\n    display:flex;\n    justify-content: space-between;\n    padding: 5px 10px;\n    font-size: 20px;\n    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n    border: 1px solid #afaeb0;\n    border-radius: 5px;\n   \n     &:not(:last-child) {\n      margin-bottom: 10px;}\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n\n}\n.button{\n   min-width: 80px;\n   padding: 5px 10px; \n   font-size: 20px;\n   border-radius: 50px;\n   border-color: #eeedfa;\n   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #d98729;\n   border-color: #eeedfa;\n\n   background-color:#eeedfa;\n   cursor: pointer;\n   \n   &:hover {\n     color:#fff;\n       background-color:#d98729;\n   }\n\n"]))),T=e(96).a.li.attrs({mountOnEnter:!0,unmountOnExit:!0,timeout:250})(c||(c=Object(m.a)(["\n&:enter{transform: translateX(-200%);}\n&:enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n&:exit{transform: transform: translateX(0);}\n&:exit-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"]))),A=function(){var n=Object(u.d)((function(n){return X.getFilterSelector(n)})),t=Object(u.c)(),e=function(n){var e=n.target.id;t(function(n){return function(t,e){var a=e().auth.idToken,r=e().auth.localId;t(Object(h.g)()),S.a.delete("".concat(F.a,"/contacts/").concat(r,"/").concat(n,".json?auth=").concat(a)).then((function(e){return t(Object(h.c)(n))})).catch((function(n){return t(Object(h.f)(n))})).finally(t(Object(h.g)()))}}(e))};return Object(g.jsx)(L,{children:Object(g.jsx)(z.a,{component:"ul",className:"contactList wrapper",children:n.map((function(n){var t=n.id,a=n.name,r=n.number;return Object(g.jsxs)(T,{timeout:250,className:"itemContact",children:["".concat(a,":  ").concat(r),Object(g.jsx)("button",{className:"button",type:"button",id:t,onClick:e,children:"Delete"})]},t)}))})})},E=f.d.div(i||(i=Object(m.a)(["\nmargin-bottom: 20px;\n\n.titleFilter{\nfont-size: 25px;\n/* color:#2F4F4F; */\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n.input{\n    margin: 20px 0 20px 0;\n    padding: 5px 10px;\n  \n    width: 100%;\n\n    font-size: 20px;\n    border-radius: 5px;\n    border: 1px solid #afaeb0;\n     &:hover {\n   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}\n}\n"]))),I=function(){var n=Object(u.d)((function(n){return X.getFilterValueSelector(n)})),t=Object(u.c)();return Object(g.jsxs)(E,{className:"wrapper",children:[Object(g.jsx)("h3",{className:"titleFilter",children:"Find contacts by name"}),Object(g.jsx)("input",{name:"filter",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(n){return t(Object(h.d)(n))}})]})},W=f.d.div(s||(s=Object(m.a)(["\n.mainTitle,.title{\ntext-align: center;\n/* color:#3b2dd6; */\ntext-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;\n}\n\n.mainTitle{\n    margin-bottom:20px;  \n    font-size: 40px;\n}\n.title{\n    margin-bottom:10px;\n    font-size: 30px;   \n}\n\n.titleSlide-appear{\n    transform: translateY(-100%);\n}\n.titleSlide-appear-active{\n    transform: translateY(0);\n    transition:transform 500ms linear;\n}\n\n.filterSlide-enter{\ntransform: scale(0);\n    \n}\n.filterSlide-enter-active{\n   transform: scale(1);\n  transition: transform 500ms ease-in-out;\n}\n.filterSlide-exit{\n    transform: scale(1);\n}\n.filterSlide-exit-active{\n    transform: scale(0);\n  transition: transform 500ms ease-in-out;\n}\n\n.alertSlide-enter{\ntransform: translateX(200%);\n}\n.alertSlide-enter-active{\n    transform: translateX(0);\n\ttransition: all 250ms linear;\n}\n.alertSlide-exit{\n    transform: translateX(0);\n}\n.alertSlide-active{\n    transform: translateX(200%);\n\ttransition: all 250ms linear;\n}\n"])));t.default=Object(u.b)((function(n){return{contacts:n.contacts.items}}))((function(n){var t=n.contacts;return Object(g.jsxs)(W,{children:[Object(g.jsx)(d.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(g.jsx)("h1",{className:"mainTitle",children:"Phonebook"})}),Object(g.jsx)(C,{}),Object(g.jsx)("h2",{className:"title",children:"Contacts"}),Object(g.jsx)(d.a,{in:t.length>1,classNames:"filterSlide",timeout:500,unmountOnExit:!0,children:Object(g.jsx)(I,{})}),t.length>0&&Object(g.jsx)(d.a,{in:!0,appear:!0,classNames:"titleSlide",timeout:500,unmountOnExit:!0,children:Object(g.jsx)(A,{contacts:t})})]})}))},63:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return o}));var a="https://redux-hm-07-default-rtdb.firebaseio.com",r="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXWnY5qDf69_ucv7wLIwwrmlQaUcMG9aA",o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXWnY5qDf69_ucv7wLIwwrmlQaUcMG9aA"}}]);
//# sourceMappingURL=6.6bd18cf4.chunk.js.map