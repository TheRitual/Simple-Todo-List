(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,u,d,l,b,h,j,f,x,m,p,O,g,k,v,w,y,T,D,S,C=t(0),A=t.n(C),B=t(23),F=t.n(B),I=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))},H=t(9),M=t(21),z=t(8),E=t(4),J=t(5),L=Object(E.b)(r||(r=Object(J.a)(["\n    html {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: inherit;\n        -webkit-font-smoothing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        margin: 0;\n    }\n\n    input {\n        font-family: 'Montserrat', sans-serif;\n    }\n"]))),N=E.d.main(o||(o=Object(J.a)(["\n    color: ",";\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),P=t(2),R=function(n){var e=n.title;return Object(P.jsx)("header",{children:Object(P.jsx)("h1",{children:e})})},G=E.d.section(c||(c=Object(J.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.transitions.long})),K=E.d.header(i||(i=Object(J.a)(["\n    border-bottom: 1px solid ",";\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media(max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.colors.borders})),W=E.d.h2(a||(a=Object(J.a)(["\n    font-size: 20px;\n    margin: 0;\n    color: ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),q=E.d.div(s||(s=Object(J.a)(["\n    padding: 20px;\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.transitions.short})),Q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(P.jsxs)(G,{children:[Object(P.jsxs)(K,{children:[Object(P.jsx)(W,{children:e}),r]}),Object(P.jsx)(q,{children:t})]})},U=t(17),V="theme",X=function(n){return localStorage.setItem(V,JSON.stringify(n))},Y=Object(U.b)({name:"theme",initialState:{isDarkThemeOn:JSON.parse(localStorage.getItem(V))||!1},reducers:{toggleTheme:function(n){n.isDarkThemeOn=!n.isDarkThemeOn,console.log(n.isDarkThemeOn)}}}),Z=Y.actions.toggleTheme,$=function(n){return function(n){return console.log(n),n.theme}(n).isDarkThemeOn},_=Y.reducer,nn=E.d.label(u||(u=Object(J.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 42px;\n    height: 26px;\n    border-radius: 5px;\n    background: ",';\n    cursor: pointer;\n    &::after {\n        content: "";\n        display: block;\n        border-radius: 5px;\n        width: 18px;\n        height: 18px;\n        margin: 3px;\n        background: ',";;\n        transition: ",";\n    }\n"])),(function(n){return n.theme.colors.disabled}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short})),en=E.d.input(d||(d=Object(J.a)(["\n    opacity: 0;\n    z-index: 1;\n    border-radius: 5px;\n    width: 42px;\n    height: 26px;\n    &:checked + "," {\n        background: ",';;\n        &::after {\n            content: "";\n            display: block;\n            border-radius: 5px;\n            width: 18px;\n            height: 18px;\n            margin-left: 21px;\n            transition: ',";\n        }\n    }\n"])),nn,(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transitions.short})),tn=E.d.div(l||(l=Object(J.a)(["\n    position: relative;\n"]))),rn=function(){var n=Object(H.c)($);console.log(n);var e=Object(H.b)();return Object(P.jsxs)(tn,{children:[Object(P.jsx)(en,{onChange:function(){return e(Z())},checked:n,id:"toggleTheme",type:"checkbox"}),Object(P.jsx)(nn,{htmlFor:"toggleTheme"})]})},on=E.d.p(b||(b=Object(J.a)(["\n    color: ",";\n    transition: ",";\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.short})),cn=function(){return Object(P.jsx)(on,{children:"Hi! I am Marcin!"})},an=function(){return Object(P.jsxs)(N,{children:[Object(P.jsx)(R,{title:"Author"}),Object(P.jsx)(Q,{title:"Marcin Kawczy\u0144ski",body:Object(P.jsx)(cn,{}),extraHeaderContent:Object(P.jsx)(rn,{})})]})},sn=E.d.ul(h||(h=Object(J.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    border: 0px;\n    width: 100%;\n"]))),un=E.d.li(j||(j=Object(J.a)(["\n    flex-grow: 1;\n    text-align: center;\n    & a{\n        display: block;\n        padding: 10px;\n        background-color: ",";\n        color: ",";\n        text-decoration: none;\n        font-weight: 700;\n        transition: ",";\n    }\n\n    & a:hover{\n        background-color: ",";\n        color: ",";\n        text-decoration: none;\n        font-weight: 700;\n        box-shadow: 0 2px 2px ",";\n    }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.shadow})),dn=function(){return Object(P.jsx)("nav",{children:Object(P.jsxs)(sn,{children:[Object(P.jsxs)(un,{children:[" ",Object(P.jsx)(M.b,{to:"/tasks",children:"ToDo List"})," "]}),Object(P.jsxs)(un,{children:[" ",Object(P.jsx)(M.b,{to:"/author",children:"About the Author"})," "]})]})})},ln=t(35),bn=t(22),hn="tasks",jn=function(n){return localStorage.setItem(hn,JSON.stringify(n))},fn=Object(U.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(hn))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},toggleAllDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},toggleHideDone:function(n){n.hideDone=!n.hideDone},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t.map((function(n){return Object(bn.a)(Object(bn.a)({},n),{},{id:Object(U.c)()})}))},addMultipleTasks:function(n,e){var t=n.tasks;e.payload.forEach((function(n){return t.push(Object(bn.a)(Object(bn.a)({},n),{},{id:Object(U.c)()}))}))},removeAll:function(n){n.tasks=[]}}}),xn=fn.actions,mn=xn.addTask,pn=xn.toggleTaskDone,On=xn.toggleAllDone,gn=xn.removeTask,kn=xn.toggleHideDone,vn=xn.fetchExampleTasks,wn=xn.addMultipleTasks,yn=(xn.setTasks,xn.removeAll),Tn=function(n){return n.tasks},Dn=function(n){return Tn(n).tasks},Sn=function(n){return Tn(n).hideDone},Cn=function(n){return Dn(n).every((function(n){return n.done}))},An=function(n){return Dn(n).some((function(n){return n.done}))},Bn=function(n){return 0===Dn(n).length},Fn=fn.reducer,In=E.d.form(f||(f=Object(J.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n    \n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]))),Hn=E.d.input(x||(x=Object(J.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n    background: ",";\n    color: ",";\n    transition: ",";\n"])),(function(n){return n.theme.colors.borders}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),Mn=E.d.button(m||(m=Object(J.a)(["\n    border:none;\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    transition: ",";\n    \n    &:hover {\n        filter: brightness(1.2);\n        transform: scale(1.07);\n        box-shadow: 0 0 3px ",";\n    }\n\n    &:active {\n        filter: brightness(0.9);\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.theme.colors.shadow})),zn=function(){var n=Object(C.useState)(""),e=Object(ln.a)(n,2),t=e[0],r=e[1],o=Object(H.b)(),c=Object(C.useRef)(null);return Object(P.jsxs)(In,{onSubmit:function(n){n.preventDefault(),c.current.focus();var e=t.replace(/ +(?= )/g,"").trim();r(e),""!==e&&(o(mn({content:t,done:!1,id:Object(U.c)()})),r(""))},children:[Object(P.jsx)(Hn,{autoFocus:!0,placeholder:"What to do?",value:t,onChange:function(n){return r(n.target.value)},ref:c}),Object(P.jsx)(Mn,{children:"Add Task"})]})},En=E.d.div(p||(p=Object(J.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),Jn=E.d.button(O||(O=Object(J.a)(["    \n    background: transparent;\n    color: ",";\n    border: none;\n    margin: 0 0 0 20px;\n    transition: ",";\n\n    @media(max-width: 767px) {\n        flex-basis: 100%;\n    }\n\n    &:hover {\n        filter: brightness(1.3);\n        transform: scale(1.07);\n        text-shadow: 0 0 5px ",";\n        cursor: pointer;\n    }\n\n    &:disabled {\n        color: ",";\n        cursor: not-allowed;\n        transform: scale(1);\n    }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transitions.middle}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.colors.disabled})),Ln=function(){var n=Object(H.c)(Sn),e=Object(H.c)(Cn),t=Object(H.c)(An),r=Object(H.b)();return Object(P.jsxs)(En,{children:[Object(P.jsx)(Jn,{onClick:function(){return r(vn())},children:" Get Sample Tasks "}),!Object(H.c)(Bn)&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(Jn,{onClick:function(){return r(kn())},disabled:!t,children:[n?"Show":"Hide"," done"]}),Object(P.jsx)(Jn,{onClick:function(){return r(On())},disabled:e,children:"Mark All as Done"}),Object(P.jsx)(Jn,{onClick:function(){return r(yn())},children:"Remove All"})]})]})},Nn=E.d.ul(g||(g=Object(J.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),Pn=E.d.li(k||(k=Object(J.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid #ddd;\n    ","\n"])),(function(n){return n.hidden&&Object(E.c)(v||(v=Object(J.a)(["\n        display: none;\n    "])))})),Rn=E.d.button(w||(w=Object(J.a)(["\n    border: 0;\n    width: 30px;\n    height: 30px;\n    color: ",";\n    padding: 0;\n    transition: ",";\n    cursor: pointer;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.done&&Object(E.c)(y||(y=Object(J.a)(["\n        background-color: ",";\n        &:hover {\n            filter: brightness(1.5);\n        }\n    "])),(function(n){return n.theme.colors.doneBox}))}),(function(n){return n.removeButton&&Object(E.c)(T||(T=Object(J.a)(["\n        background-color: ",";\n        &:hover {\n            filter: brightness(1.5);\n        }\n    "])),(function(n){return n.theme.colors.removeBox}))})),Gn=E.d.span(D||(D=Object(J.a)(["\n    color:  ",";\n    transition: ",";\n    ","\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.middle}),(function(n){return n.done&&Object(E.c)(S||(S=Object(J.a)(["\n        text-decoration: line-through;\n        color: ",";\n    "])),(function(n){return n.theme.colors.disabled}))})),Kn=function(){var n=Object(H.c)(Tn),e=n.hideDone,t=n.tasks,r=Object(H.b)();return Object(P.jsx)(Nn,{children:t.map((function(n){return Object(P.jsxs)(Pn,{hidden:n.done&&e,children:[Object(P.jsx)(Rn,{onClick:function(){return r(pn(n.id))},done:!0,children:n.done?"\u2713":""}),Object(P.jsx)(Gn,{done:n.done,children:n.content}),Object(P.jsx)(Rn,{onClick:function(){return r(gn(n.id))},removeButton:!0,children:"\ud83d\uddd1"})]},n.id)}))})};var Wn,qn=function(){return Object(P.jsxs)(N,{children:[Object(P.jsx)(R,{title:"ToDo List"}),Object(P.jsx)(Q,{title:"Add a new Task",body:Object(P.jsx)(zn,{}),extraHeaderContent:Object(P.jsx)(rn,{})}),Object(P.jsx)(Q,{title:"List of Tasks",extraHeaderContent:Object(P.jsx)(Ln,{}),body:Object(P.jsx)(Kn,{})})]})},Qn=E.d.div(Wn||(Wn=Object(J.a)(["\n    color: ",";\n    border: 0;\n    padding:0;\n    margin: 0;\n    width: 100%;\n    min-height: 100vh;\n    background-color: ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.colors.mainBackground}),(function(n){return n.theme.transitions.long})),Un={colors:{primary:"rgb(0,128,128)",primaryText:"#FFF",secondary:"#FFF",secondaryText:"rgb(0,128,128)",disabled:"#AAA",background:"#e8e8ee;",shadow:"rgba(31, 31, 31, 0.5)",borders:"#DDD",doneBox:"#218321",removeBox:"#bb2525",defaultText:"#111",mainBackground:"#e8e8ee"},transitions:{short:"0.2s",middle:"0.4s",long:"1s"}},Vn={colors:{primary:"#d8a027",primaryText:"#111",secondary:"#151515",secondaryText:"#d8a027",disabled:"#666",background:"#222",shadow:"rgba(255, 255, 255, 0.7)",borders:"#DDD",doneBox:"#db8400",removeBox:"#ad2614",defaultText:"#ebc791",mainBackground:"#050505"},transitions:{short:"0.2s",middle:"0.5s",long:"1s"}},Xn=function(){var n=Object(H.c)($)?Vn:Un;return Object(P.jsx)(M.a,{children:Object(P.jsxs)(E.a,{theme:n,children:[Object(P.jsx)(L,{}),Object(P.jsxs)(Qn,{children:[Object(P.jsx)(dn,{}),Object(P.jsxs)(z.d,{children:[Object(P.jsx)(z.b,{path:"/tasks",children:Object(P.jsx)(qn,{})}),Object(P.jsx)(z.b,{path:"/author",children:Object(P.jsx)(an,{})}),Object(P.jsx)(z.b,{path:"/",children:Object(P.jsx)(z.a,{to:"/tasks"})})]})]})]})})},Yn=t(36),Zn=t(10),$n=t.n(Zn),_n=t(25),ne=t(16),ee=t(34),te=function(){var n=Object(ee.a)($n.a.mark((function n(){var e;return $n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/SimpleToDoList/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),re=$n.a.mark(ie),oe=$n.a.mark(ae),ce=$n.a.mark(se);function ie(){var n;return $n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ne.a)(te);case 3:return n=e.sent,e.next=6,Object(ne.b)(wn(n));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(ne.a)(alert,"Something went wrong!");case 11:case"end":return e.stop()}}),re,null,[[0,8]])}function ae(){var n;return $n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.c)(Dn);case 2:return n=e.sent,e.next=5,Object(ne.a)(jn,n);case 5:case"end":return e.stop()}}),oe)}function se(){return $n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.e)(vn.type,ie);case 2:return n.next=4,Object(ne.d)("*",ae);case 4:case"end":return n.stop()}}),ce)}var ue=$n.a.mark(le),de=$n.a.mark(be);function le(){var n;return $n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.c)($);case 2:return n=e.sent,e.next=5,Object(ne.a)(X,n);case 5:case"end":return e.stop()}}),ue)}function be(){return $n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ne.d)("*",le);case 2:case"end":return n.stop()}}),de)}var he=$n.a.mark(je);function je(){return $n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_n.a)([se(),be()]);case 2:case"end":return n.stop()}}),he)}var fe=je,xe=Object(Yn.a)(),me=Object(U.a)({reducer:{tasks:Fn,theme:_},middleware:[xe]});xe.run(fe);var pe=me;F.a.render(Object(P.jsx)(A.a.StrictMode,{children:Object(P.jsx)(H.a,{store:pe,children:Object(P.jsx)(Xn,{})})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.f6d16f66.chunk.js.map