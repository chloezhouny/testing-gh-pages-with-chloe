(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},17:function(e,n,o){e.exports=o(43)},23:function(e,n,o){},24:function(e,n,o){},43:function(e,n,o){"use strict";o.r(n);var t=o(1),a=o.n(t),r=o(10),c=o.n(r),s=(o(23),o(11)),l=o(12),i=o(15),p=o(13),u=o(16),E=o(14),m=o.n(E),d=(o(24),o(2)),h=o.n(d);h.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://testing-backend-with-chloe.herokuapp.com/",responseType:"json"});var g=function(e){function n(){var e,o;Object(s.a)(this,n);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(o=Object(i.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).getResponse=function(){h.a.get("/",function(e,n){console.log("SERVER HIT CLIENT ROUTE"),console.log("SERVER REQ BODY: ",e.body)}).then(function(e){console.log(e)})},o.postQuery=function(){var e;e={status:!0,message:"CLIENT SENDING DATA BODY TO SERVER"},h.a.post("/",e,function(e,n){console.log("CLIENT POST HIT"),console.log("RECEIVED req FROM SERVER",e),console.log("RECEIVED res FROM SERVER",n)})},o}return Object(u.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getResponse()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React",a.a.createElement("div",null," c: "))))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.b4119c2d.chunk.js.map