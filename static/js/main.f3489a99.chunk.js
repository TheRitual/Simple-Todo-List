(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,A,o,c,i,a,s,u,d,l,k,p,b,h,g,m,f,j,x,O,J,S,C,w,Q,B,q,v=t(0),D=t.n(v),y=t(23),G=t.n(y),K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,A=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),A(n),o(n),c(n)}))},Z=t(9),E=t(18),I=t(8),R=t(4),F=t(5),z=Object(R.b)(r||(r=Object(F.a)(["\n    html {\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: inherit;\n        -webkit-font-smoothing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        margin: 0;\n    }\n\n    input {\n        font-family: 'Montserrat', sans-serif;\n    }\n"]))),U={colors:{primary:"rgb(0,128,128)",primaryText:"#FFF",secondary:"#FFF",secondaryText:"rgb(0,128,128)",disabled:"#AAA",background:"#e8e8ee;",shadow:"rgba(31, 31, 31, 0.5)",borders:"#DDD",doneBox:"#218321",removeBox:"#fa3a2c",defaultText:"#111",mainBackground:"#e8e8ee"},transitions:{short:"0.2s",middle:"0.4s",long:"1s"},filters:{invert:"0"}},M={colors:{primary:"#d8a027",primaryText:"#111",secondary:"#151515",secondaryText:"#d8a027",disabled:"#666",background:"#222",shadow:"rgba(255, 255, 255, 0.7)",borders:"#DDD",doneBox:"#db8400",removeBox:"#ad2614",defaultText:"#ebc791",mainBackground:"#050505"},transitions:{short:"0.2s",middle:"0.5s",long:"1s"},filters:{invert:"1"}},N=t(17),L="theme",P=function(n){return localStorage.setItem(L,JSON.stringify(n))},Y=Object(N.b)({name:"theme",initialState:{isDarkThemeOn:JSON.parse(localStorage.getItem(L))||!1},reducers:{toggleTheme:function(n){n.isDarkThemeOn=!n.isDarkThemeOn}}}),X=Y.actions.toggleTheme,T=function(n){return function(n){return n.theme}(n).isDarkThemeOn},V=Y.reducer,W=R.d.main(A||(A=Object(F.a)(["\n    color: ",";\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),H=t(2),$=function(n){var e=n.title;return Object(H.jsx)("header",{children:Object(H.jsx)("h1",{children:e})})},_=R.d.section(o||(o=Object(F.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.transitions.long})),nn=R.d.header(c||(c=Object(F.a)(["\n    border-bottom: 1px solid ",";\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n\n    @media(max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.colors.borders})),en=R.d.h2(i||(i=Object(F.a)(["\n    font-size: 20px;\n    margin: 0;\n    color: ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),tn=R.d.div(a||(a=Object(F.a)(["\n    padding: 20px;\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.transitions.short})),rn=R.d.div(s||(s=Object(F.a)(["\n    display: flex;\n    flex-wrap: wrap-reverse;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 10px;\n"]))),An=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(H.jsxs)(_,{children:[Object(H.jsxs)(nn,{children:[Object(H.jsx)(en,{children:e}),Object(H.jsx)(rn,{children:r})]}),Object(H.jsx)(tn,{children:t})]})},on=R.d.label(u||(u=Object(F.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 42px;\n    height: 26px;\n    border-radius: 5px;\n    background: ",';\n    cursor: pointer;\n    &::after {\n        content: "";\n        display: block;\n        border-radius: 5px;\n        width: 18px;\n        height: 18px;\n        margin: 3px;\n        background: ',";;\n        transition: ",";\n    }\n"])),(function(n){return n.theme.colors.disabled}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short})),cn=R.d.input(d||(d=Object(F.a)(["\n    opacity: 0;\n    z-index: 1;\n    border-radius: 5px;\n    width: 42px;\n    height: 26px;\n    &:checked + "," {\n        background: ",';;\n        &::after {\n            content: "";\n            display: block;\n            border-radius: 5px;\n            width: 18px;\n            height: 18px;\n            margin-left: 21px;\n            transition: ',";\n        }\n    }\n"])),on,(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transitions.short})),an=R.d.div(l||(l=Object(F.a)(["\n    position: relative;\n    text-align: center;\n    margin: auto;\n    width: fit-content;\n"]))),sn=function(){var n=Object(Z.c)(T),e=Object(Z.b)();return Object(H.jsxs)(an,{children:[Object(H.jsx)(cn,{onChange:function(){return e(X())},checked:n,id:"toggleTheme",type:"checkbox"}),Object(H.jsx)(on,{htmlFor:"toggleTheme"})]})},un=R.d.p(k||(k=Object(F.a)(["\n    color: ",";\n    transition: ",";\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.short})),dn=function(){return Object(H.jsx)(un,{children:"Hi! I am passionate about programming in React.js and Java and this is one of my projects. In addition to writing code, I also deal with organizing events, creating music, film production and storytelling."})},ln=function(){return Object(H.jsxs)(W,{children:[Object(H.jsx)($,{title:"Author"}),Object(H.jsx)(An,{title:"Marcin Kawczy\u0144ski",body:Object(H.jsx)(dn,{}),extraHeaderContent:Object(H.jsx)(sn,{})})]})},kn=R.d.nav(p||(p=Object(F.a)(["\n    width: 100%;\n"]))),pn=R.d.ul(b||(b=Object(F.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    border: 0px;\n    width: 100%;\n"]))),bn=R.d.li(h||(h=Object(F.a)(["\n    text-align: center;\n    flex-grow: 1;\n    background-color: ",";\n    & a{\n        display: block;\n        padding: 10px;\n        background-color: ",";\n        color: ",";\n        text-decoration: none;\n        font-weight: 700;\n        transition: ",";\n    }\n\n    & a:hover{\n        background-color: ",";\n        color: ",";\n        text-decoration: none;\n        font-weight: 700;\n        box-shadow: 0 2px 2px ",";\n    }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.shadow})),hn=function(){return Object(H.jsx)(kn,{children:Object(H.jsxs)(pn,{children:[Object(H.jsxs)(bn,{children:[" ",Object(H.jsx)(E.b,{to:"/tasks",children:"ToDo List"})," "]}),Object(H.jsxs)(bn,{children:[" ",Object(H.jsx)(E.b,{to:"/author",children:"About the Author"})," "]})]})})},gn=t(35),mn=t(22),fn="tasks",jn=function(n){return localStorage.setItem(fn,JSON.stringify(n))},xn=Object(N.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(fn))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,A=t.findIndex((function(n){return n.id===r}));t[A].done=!t[A].done},toggleAllDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,A=t.findIndex((function(n){return n.id===r}));t.splice(A,1)},toggleHideDone:function(n){n.hideDone=!n.hideDone},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t.map((function(n){return Object(mn.a)(Object(mn.a)({},n),{},{id:Object(N.c)()})}))},addMultipleTasks:function(n,e){var t=n.tasks;e.payload.forEach((function(n){return t.push(Object(mn.a)(Object(mn.a)({},n),{},{id:Object(N.c)()}))}))},removeAll:function(n){n.tasks=[]}}}),On=xn.actions,Jn=On.addTask,Sn=On.toggleTaskDone,Cn=On.toggleAllDone,wn=On.removeTask,Qn=On.toggleHideDone,Bn=On.fetchExampleTasks,qn=On.addMultipleTasks,vn=(On.setTasks,On.removeAll),Dn=function(n){return n.tasks},yn=function(n){return Dn(n).tasks},Gn=function(n){return Dn(n).hideDone},Kn=function(n){return yn(n).every((function(n){return n.done}))},Zn=function(n){return yn(n).some((function(n){return n.done}))},En=function(n){return 0===yn(n).length},In=xn.reducer,Rn=R.d.form(g||(g=Object(F.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n    \n    @media (max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]))),Fn=R.d.input(m||(m=Object(F.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n    background: ",";\n    color: ",";\n    transition: ",";\n"])),(function(n){return n.theme.colors.borders}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.long})),zn=R.d.button(f||(f=Object(F.a)(["\n    border:none;\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    transition: ",";\n    \n    &:hover {\n        filter: brightness(1.2);\n        transform: scale(1.07);\n        box-shadow: 0 0 3px ",";\n    }\n\n    &:active {\n        filter: brightness(0.9);\n        transform: scale(1.05);\n    }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.theme.colors.shadow})),Un=function(){var n=Object(v.useState)(""),e=Object(gn.a)(n,2),t=e[0],r=e[1],A=Object(Z.b)(),o=Object(v.useRef)(null);return Object(H.jsxs)(Rn,{onSubmit:function(n){n.preventDefault(),o.current.focus();var e=t.replace(/ +(?= )/g,"").trim();r(e),""!==e&&(A(Jn({content:t,done:!1,id:Object(N.c)()})),r(""))},children:[Object(H.jsx)(Fn,{autoFocus:!0,placeholder:"What to do?",value:t,onChange:function(n){return r(n.target.value)},ref:o}),Object(H.jsx)(zn,{children:"Add Task"})]})},Mn=R.d.button(j||(j=Object(F.a)(["    \nbackground: transparent;\ncolor: ",";\nborder: none;\nmargin: 0 0 0 20px;\ntransition: ",";\n\n@media(max-width: 767px) {\n    flex-basis: 100%;\n}\n\n&:hover {\n    filter: brightness(1.3);\n    transform: scale(1.07);\n    text-shadow: 0 0 5px ",";\n    cursor: pointer;\n}\n\n&:disabled {\n    color: ",";\n    cursor: not-allowed;\n    transform: scale(1);\n}\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transitions.middle}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.colors.disabled})),Nn=function(){var n=Object(Z.c)(Gn),e=Object(Z.c)(Kn),t=Object(Z.c)(Zn),r=Object(Z.b)();return Object(H.jsx)(H.Fragment,{children:!Object(Z.c)(En)&&Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Mn,{onClick:function(){return r(vn())},children:"Remove All"}),Object(H.jsxs)(Mn,{onClick:function(){return r(Qn())},disabled:!t,children:[n?"Show":"Hide"," done"]}),Object(H.jsx)(Mn,{onClick:function(){return r(Cn())},disabled:e,children:"Mark All as Done"})]})})},Ln=R.d.ul(x||(x=Object(F.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),Pn=R.d.li(O||(O=Object(F.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n    border-top: 1px solid ",";\n    ","\n    &:hover {\n        filter: drop-shadow(0 0 5px ",");\n    }\n"])),(function(n){return n.theme.colors.borders}),(function(n){return n.theme.colors.borders}),(function(n){return n.hidden&&Object(R.c)(J||(J=Object(F.a)(["\n        display: none;\n    "])))}),(function(n){return n.theme.colors.primary})),Yn=R.d.button(S||(S=Object(F.a)(["\n    border: 0;\n    width: 30px;\n    height: 30px;\n    color: ",";\n    padding: 0;\n    transition: ",";\n    cursor: pointer;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.transitions.short}),(function(n){return n.done&&Object(R.c)(C||(C=Object(F.a)(["\n        background-color: ",";\n        &:hover {\n            filter: brightness(1.5);\n        }\n    "])),(function(n){return n.theme.colors.doneBox}))}),(function(n){return n.removeButton&&Object(R.c)(w||(w=Object(F.a)(["\n        background-color: ",";\n        &:hover {\n            filter: brightness(1.5);\n        }\n    "])),(function(n){return n.theme.colors.removeBox}))})),Xn=R.d.span(Q||(Q=Object(F.a)(["\n    color:  ",";\n    transition: ",";\n    ","\n    & a {\n        text-decoration: none;\n        color:  ",";\n    }\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.transitions.middle}),(function(n){return n.done&&Object(R.c)(B||(B=Object(F.a)(["\n        text-decoration: line-through;\n        color: ",";\n    "])),(function(n){return n.theme.colors.disabled}))}),(function(n){return n.theme.colors.defaultText})),Tn=R.d.img(q||(q=Object(F.a)(["\n    width: 20px;\n    margin: 5px;\n    padding: 0;\n    filter: invert(",");\n    transition: ",";\n"])),(function(n){return n.theme.filters.invert}),(function(n){return n.theme.transitions.middle})),Vn=function(){var n=Object(Z.c)(Dn),e=n.hideDone,t=n.tasks,r=Object(Z.b)();return Object(H.jsx)(Ln,{children:t.map((function(n){return Object(H.jsxs)(Pn,{hidden:n.done&&e,children:[Object(H.jsx)(Yn,{onClick:function(){return r(Sn(n.id))},done:!0,children:n.done?"\u2713":""}),Object(H.jsx)(Xn,{done:n.done,children:Object(H.jsx)(E.b,{to:"/tasks/".concat(n.id),children:n.content})}),Object(H.jsx)(Yn,{onClick:function(){return r(wn(n.id))},removeButton:!0,children:Object(H.jsx)(Tn,{src:"data:image/png;base64,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SeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4ZACRJ6pABQJKkDhkAJEnqkAFAkqQOGQAkSeqQAUCSpA4Z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"})})]},n.id)}))})};var Wn,Hn,$n,_n,ne=function(){var n=Object(Z.b)();return Object(H.jsxs)(W,{children:[Object(H.jsx)($,{title:"ToDo List"}),Object(H.jsx)(An,{title:"Add a new Task",body:Object(H.jsx)(Un,{}),extraHeaderContent:Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(Mn,{onClick:function(){return n(Bn())},children:" Get Sample Tasks "}),Object(H.jsx)(sn,{})]})}),Object(H.jsx)(An,{title:"List of Tasks",extraHeaderContent:Object(H.jsx)(Nn,{}),body:Object(H.jsx)(Vn,{})})]})},ee=R.d.div(Wn||(Wn=Object(F.a)(["\n    margin: 20px 0;\n    padding: 0 0 0 30px;\n    \n    & a {\n        text-decoration: none;\n        color: ",";\n        font-weight: 700;\n    }\n\n    & a:hover {\n        filter: brightness(1.5);\n    }\n"])),(function(n){return n.theme.colors.primary})),te=function(){return Object(H.jsx)(ee,{children:Object(H.jsx)(E.b,{to:"/",children:"Back"})})},re=R.d.p(Hn||(Hn=Object(F.a)(["\n    margin: 30px;\n    padding: 15px;\n    border: solid 1px ",";\n    color: ",";\n    text-align: center;\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.defaultText})),Ae=R.d.span($n||($n=Object(F.a)(["\n    color: ",";\n    background-color: ",";\n    font-weight: 700;\n    padding: 5px;\n    border: 0;\n    border-radius: 5px;\n    margin: 5px;\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.primary})),oe=R.d.span(_n||(_n=Object(F.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 5px;\n    border: 0;\n    border-radius: 5px;\n    margin: 5px;\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.primary}));var ce,ie=function(){var n=Object(I.g)().id,e=Object(Z.c)((function(e){return function(n,e){return yn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(H.jsxs)(W,{children:[Object(H.jsx)($,{title:"Task Preview"}),Object(H.jsx)(An,{title:e?e.content:"Task doesn't exist",body:Object(H.jsxs)(H.Fragment,{children:[e?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsxs)(re,{children:[Object(H.jsx)(Ae,{children:"Done:"}),Object(H.jsx)(oe,{children:e.done?"Yes":"No"})]}),Object(H.jsxs)(re,{children:[Object(H.jsx)(Ae,{children:"ID:"}),Object(H.jsx)(oe,{children:n})]})]}):Object(H.jsxs)(re,{children:["Can't find task with ID: ",n]}),Object(H.jsx)(te,{})]}),extraHeaderContent:Object(H.jsx)(sn,{})})]})},ae=R.d.div(ce||(ce=Object(F.a)(["\n    color: ",";\n    border: 0;\n    padding:0;\n    margin: 0;\n    width: 100%;\n    min-height: 100vh;\n    background-color: ",";\n    transition: "," ease-in-out;\n"])),(function(n){return n.theme.colors.defaultText}),(function(n){return n.theme.colors.mainBackground}),(function(n){return n.theme.transitions.long})),se=function(){var n=Object(Z.c)(T)?M:U;return Object(H.jsx)(E.a,{children:Object(H.jsxs)(R.a,{theme:n,children:[Object(H.jsx)(z,{}),Object(H.jsxs)(ae,{children:[Object(H.jsx)(hn,{}),Object(H.jsxs)(I.d,{children:[Object(H.jsx)(I.b,{path:"/tasks/:id",children:Object(H.jsx)(ie,{})}),Object(H.jsx)(I.b,{path:"/tasks",children:Object(H.jsx)(ne,{})}),Object(H.jsx)(I.b,{path:"/author",children:Object(H.jsx)(ln,{})}),Object(H.jsx)(I.b,{path:"/",children:Object(H.jsx)(I.a,{to:"/tasks"})})]})]})]})})},ue=t(36),de=t(10),le=t.n(de),ke=t(25),pe=t(16),be=t(34),he=function(){var n=Object(be.a)(le.a.mark((function n(){var e;return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/SimpleToDoList/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ge=le.a.mark(je),me=le.a.mark(xe),fe=le.a.mark(Oe);function je(){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(pe.a)(he);case 3:return n=e.sent,e.next=6,Object(pe.b)(qn(n));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(pe.a)(alert,"Something went wrong!");case 11:case"end":return e.stop()}}),ge,null,[[0,8]])}function xe(){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.c)(yn);case 2:return n=e.sent,e.next=5,Object(pe.a)(jn,n);case 5:case"end":return e.stop()}}),me)}function Oe(){return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(pe.e)(3e3,Bn.type,je);case 2:return n.next=4,Object(pe.d)("*",xe);case 4:case"end":return n.stop()}}),fe)}var Je=le.a.mark(Ce),Se=le.a.mark(we);function Ce(){var n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.c)(T);case 2:return n=e.sent,e.next=5,Object(pe.a)(P,n);case 5:case"end":return e.stop()}}),Je)}function we(){return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(pe.d)("*",Ce);case 2:case"end":return n.stop()}}),Se)}var Qe=le.a.mark(Be);function Be(){return le.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ke.a)([Oe(),we()]);case 2:case"end":return n.stop()}}),Qe)}var qe=Be,ve=Object(ue.a)(),De=Object(N.a)({reducer:{tasks:In,theme:V},middleware:[ve]});ve.run(qe);var ye=De;G.a.render(Object(H.jsx)(D.a.StrictMode,{children:Object(H.jsx)(Z.a,{store:ye,children:Object(H.jsx)(se,{})})}),document.getElementById("root")),K()}},[[49,1,2]]]);
//# sourceMappingURL=main.f3489a99.chunk.js.map