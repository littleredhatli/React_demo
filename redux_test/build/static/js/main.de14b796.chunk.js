(this.webpackJsonpredux_test=this.webpackJsonpredux_test||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),a=n.n(r),i=n(6),o="increament",s="decreament",u="addPerson";var j=n(14),l=[{id:"01",name:"tom",age:"18"}];var d=Object(i.combineReducers)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.data;switch(n){case o:return e+c;case s:return e-c;default:return e}},person:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.data;switch(n){case u:return[c].concat(Object(j.a)(e));default:return e}}}),p=n(12),b=n(13),h=Object(i.createStore)(d,Object(b.composeWithDevTools)(Object(i.applyMiddleware)(p.a))),O=n(4),f=n(2),v=n(3),m=n(7),x=n(5),y=function(e){return{type:o,data:e}},g=n(1),k=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).increament=function(){var t=e.selectValue.value;e.props.increament(1*t)},e.decreament=function(){var t=e.selectValue.value;e.props.decreament(1*t)},e.increamentIfOdd=function(){var t=e.selectValue.value;h.getState();e.props.count%2===1&&e.props.increament(1*t)},e.increamentAscyn=function(){var t=e.selectValue.value;e.props.increamentAscyn(1*t,500)},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Count\u7ec4\u4ef6\uff0c\u4e0b\u4e00\u4e2a\u7ec4\u4ef6\u7684\u4eba\u6570\u4e3a\uff1a",this.props.len]}),Object(g.jsxs)("h2",{children:["\u5f53\u524d\u6c42\u548c\u7ed3\u679c\u4e3a\uff1a",this.props.count]}),Object(g.jsxs)("select",{ref:function(t){return e.selectValue=t},children:[Object(g.jsx)("option",{children:"1"}),Object(g.jsx)("option",{children:"2"}),Object(g.jsx)("option",{children:"3"})]}),"\xa0",Object(g.jsx)("button",{onClick:this.increament,children:"+"}),"\xa0",Object(g.jsx)("button",{onClick:this.decreament,children:"-"}),"\xa0",Object(g.jsx)("button",{onClick:this.increamentIfOdd,children:"\u5947\u6570\u52a0"}),"\xa0",Object(g.jsx)("button",{onClick:this.increamentAscyn,children:"\u5f02\u6b65\u52a0"})]})}}]),n}(c.Component),C=Object(O.b)((function(e){return{count:e.count,len:e.person.length}}),{increament:y,decreament:function(e){return{type:s,data:e}},increamentAscyn:function(e,t){return function(n){setTimeout((function(){n(y(e))}),t)}}})(k),A=n(15),w=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).addPerson=function(){var t=e.username.value,n=e.age.value,c={id:Object(A.a)(),name:t,age:n};e.props.personAction(c)},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Person\u7ec4\u4ef6\uff0c\u4e0a\u4e00\u4e2a\u7ec4\u4ef6\u548c\u4e3a\uff1a",this.props.count]}),"\u59d3\u540d\uff1a",Object(g.jsx)("input",{ref:function(t){return e.username=t},type:"text"}),"\u5e74\u9f84\uff1a",Object(g.jsx)("input",{ref:function(t){return e.age=t},type:"text"}),Object(g.jsx)("button",{onClick:this.addPerson,children:"\u6dfb\u52a0"}),Object(g.jsx)("ul",{children:this.props.person.map((function(e){return Object(g.jsxs)("li",{children:[e.name,"--",e.age]},e.id)}))})]})}}]),n}(c.Component),V=Object(O.b)((function(e){return{person:e.person,count:e.count}}),{personAction:function(e){return{type:u,data:e}}})(w),P=function(e){Object(m.a)(n,e);var t=Object(x.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(C,{store:h}),Object(g.jsx)("hr",{}),Object(g.jsx)(V,{})]})}}]),n}(c.Component);a.a.render(Object(g.jsx)(O.a,{store:h,children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.de14b796.chunk.js.map