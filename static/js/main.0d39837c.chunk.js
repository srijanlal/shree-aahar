(this["webpackJsonpshree-aahar"]=this["webpackJsonpshree-aahar"]||[]).push([[0],{21:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),i=t.n(r),s=(t(21),t(2)),l=t.n(s),o=t(15),u=t(3),m=(t(5),function(e){var a=e.search,t=e.onInputChange,n=e.onSearchClick;return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h2",{className:"display-3"},"ShreeAahar"),c.a.createElement("h1",{className:"display-1"},c.a.createElement("i",{class:"material-icons brand-icon"},"fastfood")," Food Recipe"),c.a.createElement("div",{class:"input-group w-50 mx-auto"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"Search Your Recipe...",value:a,onChange:t}),c.a.createElement("div",{class:"input-group-append"},c.a.createElement("button",{className:"btn btn-dark",onClick:n},"Search"))))}),p=function(e){var a=e.name,t=e.image,n=e.ingredientLines;return c.a.createElement("div",{class:"card py-2 text-center"},c.a.createElement("img",{src:t,className:"img-fluid w-50 mx-auto rounded-circle"}),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",null,a)),c.a.createElement("ul",{class:"list-group list-group-flush"},n.map((function(e){return c.a.createElement("li",{className:"list-group-item"},e)}))))},d=function(e){var a=e.recipes;return c.a.createElement("div",{class:"card-columns"},a.map((function(e){return c.a.createElement(p,{key:100*Math.random(),name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines})})))},f=t(16),h=t.n(f),E=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("p",{className:"footerText"},"Made with \u2764\ufe0f by Srijan"))};var v=function(){var e=Object(n.useState)("paneer"),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),p=s[0],f=s[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("3a8f7c60","&app_key=").concat("6f4d7ce988f4eb9e4e824a7935c3a31b"));case 2:a=e.sent,f(a.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(m,{search:t,onInputChange:function(e){r(e.target.value)},onSearchClick:function(){v()}}),c.a.createElement("div",{className:"container"},c.a.createElement(d,{recipes:p})),c.a.createElement(E,null))};i.a.render(c.a.createElement(v,null),document.getElementById("root"))},5:function(e,a,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.0d39837c.chunk.js.map