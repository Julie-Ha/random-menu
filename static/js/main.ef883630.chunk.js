(this["webpackJsonprandom-menu"]=this["webpackJsonprandom-menu"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(3),c=a.n(n),o=a(1);a(9);var s=function(e){var t=e.title,a=e.placeholder,n=e.color,c=e.dishType,s=Object(r.useState)(""),i=Object(o.a)(s,2),m=i[0],u=i[1],f=Object(r.useState)([]),d=Object(o.a)(f,2),g=d[0],h=d[1],p=function(e){var t,a=e.target.getAttribute("data-key");(t=null===localStorage.getItem(c)?[]:JSON.parse(localStorage.getItem(c))).splice(a,1),localStorage.setItem(c,JSON.stringify(t)),h(t)};return Object(r.useEffect)((function(){var e;e=null===localStorage.getItem(c)?[]:JSON.parse(localStorage.getItem(c)),h(e)}),[c]),l.a.createElement("div",{className:"w-full flex flex-col items-center mb-6"},l.a.createElement("h1",{className:"text-2xl text-"+n+"-500 m-2"},t),l.a.createElement("div",{className:"flex justify-center items-center"},l.a.createElement("input",{onChange:function(e){u(e.target.value)},className:"bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-"+n+"-500",type:"text",value:m,placeholder:a}),l.a.createElement("button",{className:"bg-"+n+"-500 hover:bg-"+n+"-400 rounded ml-2 w-8 h-8",onClick:function(e){var t;(e.preventDefault(),m)&&((t=null===localStorage.getItem(c)?[]:JSON.parse(localStorage.getItem(c))).push(m),localStorage.setItem(c,JSON.stringify(t)),h(JSON.parse(localStorage.getItem(c))),u(""))}},l.a.createElement("i",{className:"text-white fas fa-check"}))),l.a.createElement("div",{className:"m-2"},l.a.createElement("ul",{className:""},g&&g.map((function(e,t){return l.a.createElement("li",{key:t,className:"flex m-2 items-center justify-center"},l.a.createElement("p",{className:"mr-5"},e),l.a.createElement("i",{onClick:p,"data-key":t,className:"ml-auto text-lg text-"+n+"-500 fas fa-trash-alt hover:text-"+n+"-400"}))})))))};var i=function(e){var t=e.color,a=e.dishType,n=e.randomDish,c=Object(r.useState)(),s=Object(o.a)(c,2),i=s[0],m=s[1];return Object(r.useEffect)((function(){m(n)}),[n]),l.a.createElement("div",{className:"w-full flex items-center justify-center"},l.a.createElement("p",{className:"text-3xl text-gray-600 mr-4"},i),l.a.createElement("i",{onClick:function(){var e;if((e=null===localStorage.getItem(a)?[]:JSON.parse(localStorage.getItem(a))).length>0){var t=Math.floor(Math.random()*Math.floor(e.length));m(e[t])}},className:"fas fa-dice text-2xl text-"+t+"-500 hover:text-"+t+"-400"}))};var m=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(),m=Object(o.a)(c,2),u=m[0],f=m[1],d=Object(r.useState)(),g=Object(o.a)(d,2),h=g[0],p=g[1],x=function(e){var t;if((t=null===localStorage.getItem(e)?[]:JSON.parse(localStorage.getItem(e))).length>0)return t[Math.floor(Math.random()*Math.floor(t.length))]},E=function(){n(x("starters")),f(x("dish")),p(x("dessert"))};return Object(r.useEffect)((function(){E()}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"flex items-center justify-center"},l.a.createElement("h1",{className:"text-5xl text-gray-500 text-center m-4 mb-6"},"Menu"),l.a.createElement("i",{onClick:E,className:"fas fa-dice text-4xl text-teal-500 hover:text-teal-400"})),l.a.createElement("div",{className:"flex flex-col sm:flex-row mb-6"},l.a.createElement(i,{color:"green",dishType:"starters",randomDish:a}),l.a.createElement(i,{color:"orange",dishType:"dish",randomDish:u}),l.a.createElement(i,{color:"indigo",dishType:"dessert",randomDish:h})),l.a.createElement("div",{className:"flex flex-col sm:flex-row"},l.a.createElement(s,{title:"Entr\xe9es",placeholder:"Ajouter une entr\xe9e",color:"green",dishType:"starters"}),l.a.createElement(s,{title:"Plats",placeholder:"Ajouter un plat",color:"orange",dishType:"dish"}),l.a.createElement(s,{title:"Dessert",placeholder:"Ajouter un dessert",color:"indigo",dishType:"dessert"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.ef883630.chunk.js.map