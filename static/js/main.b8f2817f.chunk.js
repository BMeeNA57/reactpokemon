(this["webpackJsonppokemon-react"]=this["webpackJsonppokemon-react"]||[]).push([[0],{14:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),u=n(2);function l(e){var t=e.pokemon;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement("div",{key:e},e)})))}var i=n(3),m=n.n(i);function s(e){var t=e.gotoNextPage,n=e.gotoPrevPage;return o.a.createElement("div",null,n&&o.a.createElement("button",{onClick:n},"Previous"),t&&o.a.createElement("button",{onClick:t},"Next"))}var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("https://pokeapi.co/api/v2/pokemon"),i=Object(u.a)(r,2),p=i[0],b=i[1],f=Object(a.useState)(),v=Object(u.a)(f,2),k=v[0],g=v[1],E=Object(a.useState)(),d=Object(u.a)(E,2),j=d[0],O=d[1],P=Object(a.useState)(!0),S=Object(u.a)(P,2),h=S[0],x=S[1];return Object(a.useEffect)((function(){var e;return x(!0),m.a.get(p,{cancelToken:new m.a.CancelToken((function(t){return e=t}))}).then((function(e){x(!1),g(e.data.next),O(e.data.previous),c(e.data.results.map((function(e){return e.name})))})),function(){e()}}),[p]),h?"Loading...":o.a.createElement(o.a.Fragment,null,o.a.createElement(l,{pokemon:n}),o.a.createElement(s,{gotoNextPage:k?function(){b(k)}:null,gotoPrevPage:j?function(){b(j)}:null}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b8f2817f.chunk.js.map