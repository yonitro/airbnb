(this["webpackJsonpcra-template-breact"]=this["webpackJsonpcra-template-breact"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(3),r=c(0),n=c(20),s=c.n(n),i=c(4);var o=c(6),l=c.n(o),j=c(8),u=c(2),d=(c(11),c(1)),b=Object(r.createContext)(null),h=function(e){var t=Object(r.useState)(),c=Object(u.a)(t,2),a=c[0],n=c[1],s=Object(r.useState)("electronics"),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(r.useState)([]),h=Object(u.a)(j,2),O=h[0],p=h[1];return Object(d.jsx)(b.Provider,{value:{searchApp:[a,n],findCatogary:[O,p],findCatogaryName:[o,l]},children:e.children})},O=(c.p,c.p+"static/media/heart.4ab08fd9.svg");function p(e){console.log(e,"======");var t=Object(r.useContext)(b).searchApp,c=Object(u.a)(t,2);c[0],c[1];return Object(d.jsxs)("div",{className:"card",children:["XXXXXXXXXXXX",Object(d.jsxs)("div",{className:"cardImage",children:[Object(d.jsx)("img",{src:e.image}),Object(d.jsx)(i.a,{href:"/profile",className:"heartIcon",children:Object(d.jsx)("img",{src:O,width:"24",height:"24"})})]}),Object(d.jsxs)("div",{className:"titlePrice",children:[Object(d.jsx)("div",{className:"title",children:"Baoshan, Yunnan"}),Object(d.jsx)("div",{className:"Price",children:"\xa334 / night"})]}),Object(d.jsxs)("div",{className:"titleSubPrice",children:[Object(d.jsx)("div",{className:"titleSub",children:"809 miles away"}),Object(d.jsx)("div",{className:"PriceSub",children:"30 Oct \u2013 6 Nov"})]})]})}var x=c(10),f=c.n(x).a.create({baseURL:"https://fakestoreapi.com",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"example.com","x-rapidapi-key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_BASE_URL:"https://fakestoreapi.com"}).RAPIDAPI_KEY}}),v={getData:function(e){return f({method:"GET",url:e,params:{},transformResponse:[function(e){return console.log("Transforming data..."),JSON.parse(e)}]})},postData:function(){return f({method:"POST",url:"/api",data:{item1:"data1",item2:"item2"},headers:{"content-type":"application/json"}})}};function m(){var e=Object(r.useContext)(b),t=e.findCatogary,c=e.findCatogaryName,a=Object(u.a)(t,2),n=a[0],s=a[1],i=Object(u.a)(c,2),o=i[0];i[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("=================================="),e.next=3,v.getData("/products/category/"+o);case 3:return t=e.sent,c=t.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){console.log("error")})).then((function(e){console.log("success!--"),console.log(e),s(e)}))}),[]),Object(d.jsx)("div",{className:"widgetsHolder",children:n.map((function(e,t){return Object(d.jsx)(p,{image:e.image})}))})}var g=c(21),N=c.p+"static/media/lines.aca47f39.svg",C=c.p+"static/media/userIcon.e7be354a.svg",y=c.p+"static/media/worldicon.48fabb55.svg",w=c.p+"static/media/desktoplogo.736ee66e.svg";function S(){var e=Object(r.useContext)(b).searchApp,t=Object(u.a)(e,2);t[0],t[1];return Object(d.jsx)("header",{className:"layoutHeader",children:Object(d.jsxs)("div",{className:"mainHeaderContainer",children:[Object(d.jsx)("div",{className:"headerContainerLeft",children:Object(d.jsxs)(i.a,{className:"logo","aria-label":"Airbnb Homepage",href:"/",children:[Object(d.jsx)("div",{class:"desktopLogo",children:Object(d.jsx)("img",{src:w,width:"102",height:"32"})}),Object(d.jsx)("div",{class:"mobileLogo",children:Object(d.jsx)("svg",{width:"30",height:"32",fill:"currentcolor",children:Object(d.jsx)("path",{d:"M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"})})})]})}),Object(d.jsx)("div",{className:"headerContainerCenter"}),Object(d.jsx)("div",{className:"headerContainerLRight",children:Object(d.jsxs)("nav",{className:"navclass",children:[Object(d.jsxs)("div",{className:"becomeHostHolder",children:[Object(d.jsx)("a",{class:"becomeHost",href:"/host/homes",children:"Become a host"}),Object(d.jsx)("button",{type:"button",class:"worldicon","aria-expanded":"false","aria-label":"Choose a language and currency",children:Object(d.jsx)("img",{src:y,width:"16",height:"16"})})]}),Object(d.jsxs)("button",{type:"button",className:"userIcon",children:[Object(d.jsx)("div",{class:"linesIcon",children:Object(d.jsx)("img",{src:N,height:"16",width:"16"})}),Object(d.jsx)("div",{class:"userImg",children:Object(d.jsx)("img",{src:C,width:"30",height:"30"})})]})]})})]})})}var k=c(7),P=c.n(k);function A(){var e=Object(r.useContext)(b),t=e.findCatogaryName,c=e.findCatogary,a=Object(r.useState)([]),n=Object(u.a)(a,2),s=n[0],i=n[1],o=Object(u.a)(c,2),h=(o[0],o[1]),O=Object(u.a)(t,2),p=(O[0],O[1]);return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{prop:"myprop"},console.log("=================================="),e.next=4,v.getData("/products/categories");case 4:return t=e.sent,c=t.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){console.log("error")})).then((function(e){console.log("success!--"),console.log(e),i(e)}))}),[]),Object(d.jsxs)("div",{className:"catogary",children:[Object(d.jsx)("ul",{children:s.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsxs)("a",{id:"btn_".concat(t),href:"/#",className:t<1?"active":"",onClick:function(e){!function(e){var t=e.target.id;P()("a").removeClass("active"),P()("#"+t).addClass("active");var c=P()(".active").outerWidth();P()(".activeBar").css("width",c+"px");var a=P()(".active").offset().left;P()(".activeBar").css("left",a+"px"),p(P()("#"+t).text()),function(){var e=Object(j.a)(l.a.mark((function e(){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("=================================="),e.next=3,v.getData("/products/category/"+P()("#"+t).text());case 3:return c=e.sent,a=c.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().catch((function(e){console.log("error")})).then((function(e){console.log("success!--"),console.log(e),h(e)}))}(e)},children:[Object(d.jsx)("img",{src:"https://a0.muscache.com/pictures/ac09b78a-19c0-46fc-b604-fc90a8912864.jpg",alt:""}),e]})},t)}))}),Object(d.jsx)("div",{className:"activeBar"})]})}function _(){var e=Object(r.useContext)(b).searchApp,t=Object(u.a)(e,2);t[0],t[1];return Object(d.jsx)("div",{children:"Footer area"})}function E(e){var t=e.children,c=Object(i.e)();return Object(d.jsxs)("div",{className:"Layout",children:[Object(d.jsx)(g.a,{isBusy:!!c,delayMs:200}),Object(d.jsxs)(h,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(A,{}),Object(d.jsx)("main",{children:Object(d.jsx)(i.b,{render:L,children:t})}),Object(d.jsx)(_,{})]})]})}function L(){return Object(d.jsx)("div",{className:"Layout-error",children:Object(d.jsx)("h1",{children:"404 - Not Found"})})}function I(){var e=Object(r.useContext)(b).searchApp,t=Object(u.a)(e,2);t[0],t[1];return Object(d.jsx)("div",{children:"You Need To Login to view protected area. Login component coming soon......."})}function T(){var e=Object(r.useContext)(b).searchApp,t=Object(u.a)(e,2);t[0],t[1];return Object(d.jsx)("div",{children:"Welcome To Protcted VIP area!!!"})}function X(){console.log(v);var e=Object(r.useContext)(b).searchApp,t=Object(u.a)(e,2);t[0],t[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{prop:"myprop"},console.log("=================================="),e.next=4,v.getData("/products/categories");case 4:return t=e.sent,c=t.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){console.log("error")})).then((function(e){console.log("success!--"),console.log(e)}))}),[]),Object(d.jsx)("div",{children:"Services work like this."})}function D(){return Object(d.jsx)("div",{children:"Loading.............."})}c(45);var H,R=Object(a.g)({"/":Object(a.i)({title:"Landing Page",view:Object(d.jsx)(m,{})}),"/login":Object(a.i)({title:"Login",view:Object(d.jsx)(I,{})}),"/services":Object(a.i)({title:"Services",view:Object(d.jsx)(X,{})}),"/profile":(H=Object(a.i)({title:"Profile",view:Object(d.jsx)(T,{})}),Object(a.e)((function(e,t){return t.token?H:Object(a.h)("/login")})))});s.a.render(Object(d.jsx)(i.c,{routes:R,context:{token:localStorage.getItem("data_token_tookit")},children:Object(d.jsx)(E,{children:Object(d.jsx)(r.Suspense,{fallback:Object(d.jsx)(D,{}),children:Object(d.jsx)(i.d,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.00eabe56.chunk.js.map