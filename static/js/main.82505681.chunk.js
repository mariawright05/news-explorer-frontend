(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],[,,,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":50,"b":3}')},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s,n=a(1),r=a.n(n),c=a(21),i=a.n(c),o=a(9),l=a(4),d=(a(27),a(3)),u=a(11),h=a(2),p=Object(n.createContext)(),j=(a(28),a(0)),b=function(){var e=Object(n.useContext)(p),t=e.login,a=e.isLoginOpen,s=e.handleRegisterOpen,r=e.closeAllPopups,c=Object(n.useState)({name:"Elise",email:"",password:""}),i=Object(d.a)(c,2),o=i[0],l=i[1],b=o.email,_=o.password,m=function(e){l(Object(h.a)(Object(h.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"loginPopup ".concat(a?"loginPopup_opened":""),children:Object(j.jsxs)("div",{className:"loginPopup__container",children:[Object(j.jsx)("button",{type:"button",className:"loginPopup__close-button","aria-label":"close loginPopup",onClick:r}),Object(j.jsxs)("form",{action:"submit",onSubmit:function(e){e.preventDefault(),t(o)},className:"loginPopup__form",children:[Object(j.jsx)("h3",{className:"loginPopup__heading",children:"Sign in"}),Object(j.jsxs)("fieldset",{className:"loginPopup__form-group",children:[Object(j.jsxs)("label",{htmlFor:"email",className:"loginPopup__form-label",children:["Email",Object(j.jsx)("input",{id:"email",type:"email",name:"email",className:"loginPopup__form-field",label:"Email",placeholder:"Enter email",value:b,required:!0,onChange:m})]}),Object(j.jsxs)("label",{htmlFor:"password",className:"loginPopup__form-label",children:["Password",Object(j.jsx)("input",{id:"password",type:"text",name:"password",className:"loginPopup__form-field",placeholder:"Enter password",value:_,required:!0,minLength:"6",onChange:m})]})]}),Object(j.jsx)("input",{type:"submit",className:"loginPopup__button",value:"Sign in"}),Object(j.jsxs)("button",{type:"button",className:"loginPopup__message_link",onClick:function(){r(),s()},children:[Object(j.jsx)("span",{className:"loginPopup__message",children:"or "}),"Sign up"]})]})]})})},_=(a(30),function(){var e=Object(n.useContext)(p),t=e.register,a=e.isRegisterOpen,s=e.handleLoginOpen,r=e.handleSuccessOpen,c=e.closeAllPopups,i=Object(n.useState)({name:"",email:"",password:""}),o=Object(d.a)(i,2),l=o[0],b=o[1],_=l.name,m=l.email,O=l.password,f=function(e){b(Object(h.a)(Object(h.a)({},l),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"registerPopup ".concat(a?"registerPopup_opened":""),children:Object(j.jsxs)("div",{className:"registerPopup__container",children:[Object(j.jsx)("button",{type:"button",className:"registerPopup__close-button","aria-label":"close registerPopup",onClick:c}),Object(j.jsxs)("form",{action:"submit",onSubmit:function(e){e.preventDefault(),t({name:_,email:m,password:O})},className:"registerPopup__form",children:[Object(j.jsx)("h3",{className:"registerPopup__heading",children:"Sign up"}),Object(j.jsxs)("fieldset",{className:"registerPopup__form-group",children:[Object(j.jsxs)("label",{htmlFor:"email",className:"registerPopup__form-label",children:["Email",Object(j.jsx)("input",{id:"email",type:"email",name:"email",className:"registerPopup__form-field",label:"Email",placeholder:"Enter email",value:m,required:!0,onChange:f})]}),Object(j.jsxs)("label",{htmlFor:"password",className:"registerPopup__form-label",children:["Password",Object(j.jsx)("input",{id:"password",type:"text",name:"password",className:"registerPopup__form-field",placeholder:"Enter password",value:O,required:!0,minLength:"6",onChange:f})]}),Object(j.jsxs)("label",{htmlFor:"name",className:"registerPopup__form-label",children:["Username",Object(j.jsx)("input",{id:"name",type:"text",name:"name",className:"registerPopup__form-field",placeholder:"Enter your username",value:_,required:!0,onChange:f,minLength:"2",maxLength:"30"})]})]}),Object(j.jsx)("input",{type:"submit",className:"registerPopup__button",value:"Sign up",onClick:function(){c(),r()}}),Object(j.jsxs)("button",{type:"button",className:"registerPopup__message_link",onClick:function(){c(),s()},children:[Object(j.jsx)("span",{className:"registerPopup__message",children:"or "}),"Sign in"]})]})]})})}),m=(a(31),function(){var e=Object(n.useContext)(p),t=e.isSuccessOpen,a=e.handleLoginOpen,s=e.closeAllPopups;return Object(j.jsx)("div",{className:"successPopup ".concat(t?"successPopup_opened":""),children:Object(j.jsxs)("div",{className:"successPopup__container",children:[Object(j.jsx)("button",{type:"button",className:"successPopup__close-button","aria-label":"close successPopup",onClick:s}),Object(j.jsxs)("div",{className:"successPopup__form",children:[Object(j.jsx)("h3",{className:"successPopup__heading",children:"Registration successfully completed!"}),Object(j.jsx)("button",{type:"button",className:"successPopup__message_link left-justified",onClick:function(){s(),a()},children:"Sign in"})]})]})})}),O=Object(n.createContext)({page:""});a(32);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function x(e,t){var a=e.title,r=e.titleId,c=g(e,["title","titleId"]);return n.createElement("svg",f({width:24,height:24,fill:"none",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,s||(s=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4v2zm7.59 7l-4.3 4.13 1.42 1.37 6.7-6.46-6.7-6.46-1.42 1.36 4.3 4.13H8V13h9.59z",fill:"#fff"})))}var v,w=n.forwardRef(x);a.p;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function k(e,t){var a=e.title,s=e.titleId,r=N(e,["title","titleId"]);return n.createElement("svg",y({width:24,height:24,fill:"none",ref:t,"aria-labelledby":s},r),a?n.createElement("title",{id:s},a):null,v||(v=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6H6v12h4v2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h4v2zm7.59 7l-4.3 4.13 1.42 1.37 6.7-6.46-6.7-6.46-1.42 1.36 4.3 4.13H8V13h9.59z",fill:"#1A1B22"})))}var S=n.forwardRef(k),P=(a.p,function(){var e=Object(n.useContext)(O),t=Object(n.useContext)(p),a=t.user,s=t.handleLoginOpen,r=t.isLoginOpen,c=t.isRegisterOpen,i=t.isSuccessOpen,l=t.isAuth,u=t.logout,h=Object(n.useState)(!1),f=Object(d.a)(h,2),g=f[0],x=f[1],v=function(){return"saved-news"!==e||g?"":"header__color_alt"},y=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"header__nav-link-container ".concat(v()),children:Object(j.jsx)(o.c,{to:"/",className:"header__nav-link ".concat(v()),exact:!0,activeClassName:"header__nav-link_active",children:"Home"})}),Object(j.jsx)("li",{className:"header__nav-link-container ".concat(v()),children:Object(j.jsx)(o.c,{to:"/saved-news",className:"header__nav-link ".concat(v()),activeClassName:"header__nav-link_alt_active",children:"Saved articles"})}),Object(j.jsxs)("button",{type:"button",className:"header__nav-button ".concat(v()),onClick:u,children:[a.name,"saved-news"!==e||g?Object(j.jsx)(w,{className:"header__icon_logout"}):Object(j.jsx)(S,{className:"header__icon_logout"})]})]}),N=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{className:"header__nav-link-container",children:Object(j.jsx)(o.c,{to:"/",className:"header__nav-link ".concat(v()),activeClassName:"header__nav-link_active",children:"Home"})}),Object(j.jsx)("button",{type:"button",className:"header__nav-button signin ".concat(v()),onClick:s,children:"Sign in"}),r&&Object(j.jsx)(b,{}),c&&Object(j.jsx)(_,{}),i&&Object(j.jsx)(m,{})]}),k=Object(n.useState)(N),P=Object(d.a)(k,2),E=P[0],C=P[1];return Object(n.useEffect)((function(){C(l?y:N)}),[l,c,r,g]),Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"header__contents",children:[Object(j.jsx)("h1",{className:"header__title ".concat("saved-news"===e?"header__color_alt":""),children:"NewsExplorer"}),Object(j.jsx)("ul",{className:"header__nav-container",children:E}),Object(j.jsx)("button",{type:"button",className:"header__sidebar-button \n            ".concat(g?"saved-news"===e?"header__sidebar_closed-alt":"header__sidebar_closed":"saved-news"===e?"header__sidebar_open-alt":"header__sidebar_open"),"aria-label":"open or close sidebar",onClick:function(){x(!g)}})]}),Object(j.jsx)("div",{className:"header__sidebar ".concat(g?"header__sidebar_opened":""),children:Object(j.jsx)("ul",{className:"header__sidebar-container",children:E})})]})}),E=Object(n.createContext)(),C=(a(40),function(){var e=Object(n.useContext)(E).searchNews,t=Object(n.useState)(""),a=Object(d.a)(t,2),s=a[0],r=a[1];return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)(P,{}),Object(j.jsxs)("div",{className:"search__container",children:[Object(j.jsx)("h2",{className:"search__title",children:"What's going on in the world?"}),Object(j.jsx)("p",{className:"search__subtitle",children:"Find the latest news on any topic and save them in your personal account."}),Object(j.jsxs)("form",{className:"search__input-wrapper",onSubmit:function(t){t.preventDefault(),e(s)},children:[Object(j.jsx)("input",{type:"text",name:"news",className:"search__input",placeholder:"Enter topic",value:s,onChange:function(e){r(e.target.value)},required:!0}),Object(j.jsx)("input",{type:"submit",value:"Search",className:"search__button"})]})]})]})}),L=a(14),A=(a(42),a(43),function(e){var t,a=e.card,s=a.url,r=a.image,c=a.pubDate,i=a.title,o=a.description,l=a.source,u=a.isSaved,h=a.keyword,b=Object(n.useContext)(O),_=Object(n.useContext)(E),m=Object(n.useContext)(p),f=_.deleteCard,g=_.setIsSaved,x=m.isAuth,v=Object(n.useState)(!1),w=Object(d.a)(v,2),y=w[0],N=w[1],k="".concat("saved-news"===b?"card__icon_trash":u?"card__icon_save_true":"card__icon_save");"saved-news"===b?t="Remove from saved":x||(t="Sign in to save articles");return Object(j.jsxs)("li",{className:"card",children:[Object(j.jsx)("img",{className:"card__image",src:r,alt:i}),Object(j.jsx)("button",{type:"button",className:k,onClick:"saved-news"===b?function(){g(a),f(a.id)}:function(){x&&g(a)},onMouseEnter:function(){void 0!==t&&N(!0)},onMouseLeave:function(){N(!1)},"aria-label":"card action"}),y&&Object(j.jsx)("div",{className:"card__hover-wrapper",children:Object(j.jsx)("p",{className:"card__hover-text",children:t})}),"saved-news"===b&&Object(j.jsx)("div",{className:"card__keyword-wrapper",children:Object(j.jsx)("p",{className:"card__keyword-text",children:h})}),Object(j.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"card__text-wrapper",children:[Object(j.jsx)("p",{className:"card__pubDate",children:c}),Object(j.jsx)("h3",{className:"card__title",children:i}),Object(j.jsx)("p",{className:"card__description",children:o}),Object(j.jsx)("p",{className:"card__source",children:l})]})]})}),D=(a(44),function(){return Object(j.jsxs)("div",{className:"preloader",children:[Object(j.jsx)("i",{className:"preloader__circle"}),Object(j.jsx)("p",{className:"preloader__text",children:"Searching for news..."})]})}),H=(a(45),function(){return Object(j.jsxs)("div",{className:"nothingFound",children:[Object(j.jsx)("i",{className:"nothingFound__circle"}),Object(j.jsx)("p",{className:"nothingFound__title",children:"Nothing found"}),Object(j.jsx)("p",{className:"nothingFound__text",children:"Sorry, but nothing matched your search terms."})]})}),I=a(12),R=function(){var e=Object(n.useContext)(E),t=Object(n.useContext)(O),a=e.loading,s=e.cards,r=e.visibleList,c=Object(n.useState)(!0),i=Object(d.a)(c,2),o=i[0],l=i[1],u=Object(n.useState)([]),h=Object(d.a)(u,2),p=h[0],b=h[1],_=Object(n.useState)(I.b),m=Object(d.a)(_,2),f=m[0],g=m[1];Object(n.useEffect)((function(){b(r)}),[r]);var x=s.filter((function(e){return!0===e.isSaved}));if(a)return Math.random()<.5?Object(j.jsx)(D,{}):Object(j.jsx)(H,{});var v=Object(j.jsxs)(j.Fragment,{children:[0!==s.length&&Object(j.jsx)("h2",{className:"cardList__title",children:"Search results"}),Object(j.jsx)("ul",{className:"cardList__card-wrapper",children:p.map((function(e){return Object(j.jsx)(A,{card:e},e.id)}))}),o&&Object(j.jsx)("button",{type:"submit",className:"cardList__button",onClick:function(){var e=f+I.b,t=e<I.a-1,a=Object(L.concat)(p,Object(L.slice)(s,f,e));g(e),b(a),l(t)},children:"Show more"})]}),w=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{className:"cardList__card-wrapper",children:x.map((function(e){return Object(j.jsx)(A,{card:e},e.id)}))})});return Object(j.jsx)("div",{className:0===s.length?"cardList_hidden":"cardList",children:Object(j.jsx)("div",{className:"cardList__section-wrapper",children:"home"===t?v:w})})},M=(a(46),a.p+"static/media/maria-wright.c560443d.jpg"),T=function(){return Object(j.jsxs)("div",{className:"author",children:[Object(j.jsx)("div",{className:"author__image-container",children:Object(j.jsx)("img",{className:"author__image",src:M,alt:"Maria Wright"})}),Object(j.jsxs)("div",{className:"author__text-container",children:[Object(j.jsx)("h2",{className:"author__title",children:"About the author"}),Object(j.jsx)("p",{className:"author__body",children:"This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know."}),Object(j.jsx)("p",{className:"author__body",children:"You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers."})]})]})},W=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(O.Provider,{value:"home",children:[Object(j.jsx)(C,{}),Object(j.jsx)(R,{}),Object(j.jsx)(T,{})]})})},F=(a(47),a(48),function(){return Object(j.jsx)("div",{className:"userInfo",children:Object(j.jsxs)("div",{className:"userInfo__container",children:[Object(j.jsx)("h1",{className:"userInfo__title",children:"Saved articles"}),Object(j.jsx)("p",{className:"userInfo__stats",children:"Elise, you have 5 saved articles"}),Object(j.jsxs)("p",{className:"userInfo__keywords",children:["By keywords:",Object(j.jsx)("span",{className:"userInfo__keywords_strong",children:"\xa0Nature, Yellowstone, and 2 other"})]})]})})}),G=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(O.Provider,{value:"saved-news",children:[Object(j.jsx)(P,{}),Object(j.jsx)(F,{}),Object(j.jsx)(R,{})]})})},B=a(19),q=(a(49),function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Maria Wright, Powered by News API"}),Object(j.jsxs)("ul",{className:"footer__nav",children:[Object(j.jsx)("li",{className:"footer__nav-text-wrapper",children:Object(j.jsxs)("ul",{className:"footer__nav-text-list",children:[Object(j.jsx)("li",{className:"footer__nav-text",children:Object(j.jsx)(o.b,{to:"/",className:"footer__nav-link",children:"Home"})}),Object(j.jsx)("li",{className:"footer__nav-text",children:Object(j.jsx)("a",{href:"https://practicum.yandex.com/web/",target:"_blank",rel:"noreferrer",className:"footer__nav-link",children:"Practicum by Yandex"})})]})}),Object(j.jsx)("li",{className:"footer__nav-icon-wrapper",children:Object(j.jsxs)("ul",{className:"footer__nav-icon-list",children:[Object(j.jsx)("li",{className:"footer__nav-icon",children:Object(j.jsx)("a",{href:"https://github.com/mariawright05",rel:"noreferrer",target:"_blank",className:"footer__nav-link",children:Object(j.jsx)(B.a,{})})}),Object(j.jsx)("li",{className:"footer__nav-icon",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/mariawright05/",rel:"noreferrer",target:"_blank",className:"footer__nav-link",children:Object(j.jsx)(B.b,{})})})]})})]})]})}),U="SEARCHED_NEWS",V="SET_SAVED",Y="SET_LOADING",z="DELETE_CARD",J="SET_NOT_SAVED",Z="REGISTER_SUCCESS",K="USER_LOADED",X="LOGIN_SUCCESS",Q="LOGOUT",$=function(e,t){switch(t.type){case U:return Object(h.a)(Object(h.a)({},e),{},{cards:t.payload,visibleList:Object(L.slice)(t.payload,0,I.b),loading:!1});case Y:return Object(h.a)(Object(h.a)({},e),{},{loading:!0});case V:return Object(h.a)(Object(h.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload&&(e.isSaved=!0),e}))});case J:return Object(h.a)(Object(h.a)({},e),{},{cards:e.cards.map((function(e){return e.id===t.payload&&(e.isSaved=!1),e}))});case z:return Object(h.a)(Object(h.a)({},e),{},{cards:e.cards.filter((function(e){return e.id!==t.payload}))});default:return e}},ee=function(e){var t=[{id:1,url:"https://www.treehugger.com/special-sit-spot-nature-5085811",image:"https://www.treehugger.com/thmb/X8foR4t6_Z2dv_1LR6jGGEnC91Q=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sittingonatreestump-ac694d0a1e6146d89f913cc631dfa04c.jpg",pubDate:"November, 4 2020",title:"Everyone Needs a Special 'Sit Spot' in Nature",description:'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',source:"treehugger",keyword:"Nature",isSaved:!0},{id:2,url:"https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better#:~:text=We%20all%20know%20how%20good,relax%20and%20think%20more%20clearly.",image:"https://i.natgeofe.com/n/4c6ad20b-a935-4c4f-bab6-40b815f0371a/image-5.jpg?w=2880&h=1920",pubDate:"February 19, 2019",title:"Nature makes you better",description:"We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",source:"national geographic",keyword:"Nature",isSaved:!1},{id:3,url:"https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks",image:"https://images.unsplash.com/photo-1554592977-9fcccf7b4e25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",pubDate:"October 19, 2020",title:"Nostalgic Photos of Tourists in U.S. National Parks",description:"Uri L\xf8vevild Golman and Helle L\xf8vevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",source:"national geographic",keyword:"Yellowstone",isSaved:!1},{id:4,url:"https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail#:~:text=%E2%80%9CThe%20linking%20together%20of%20the,visit%20that%20most%20fascinating%20region%E2%80%A6",image:"https://images.unsplash.com/photo-1606284426176-69495a27add7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",pubDate:"November, 4 2020",title:"Grand Teton Renews Historic Crest Trail",description:"\u201cThe linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",source:"National parks traveler",keyword:"Parks",isSaved:!1},{id:5,url:"https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425#:~:text=Polaris%20has%20an%20older%20friend.&text=According%20to%20the%20new%20study,a%20new%20lease%20on%20life.",image:"https://www.treehugger.com/thmb/29MSwyudwok2_gh6AZDAwWH17CE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__03__polaris-north-star-facts-b2a823cf25a44ef89260cd09f5c5c845.jpg",pubDate:"March 16, 2020",title:"Scientists Don't Know Why Polaris Is So Weird",description:"Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",source:"treehugger",keyword:"Photography",isSaved:!1},{id:6,url:"https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425#:~:text=Polaris%20has%20an%20older%20friend.&text=According%20to%20the%20new%20study,a%20new%20lease%20on%20life.",image:"https://www.treehugger.com/thmb/29MSwyudwok2_gh6AZDAwWH17CE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__03__polaris-north-star-facts-b2a823cf25a44ef89260cd09f5c5c845.jpg",pubDate:"March 16, 2020",title:"Scientists Don't Know Why Polaris Is So Weird",description:"Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",source:"treehugger",keyword:"Photography",isSaved:!1},{id:7,url:"https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425#:~:text=Polaris%20has%20an%20older%20friend.&text=According%20to%20the%20new%20study,a%20new%20lease%20on%20life.",image:"https://www.treehugger.com/thmb/29MSwyudwok2_gh6AZDAwWH17CE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__03__polaris-north-star-facts-b2a823cf25a44ef89260cd09f5c5c845.jpg",pubDate:"March 16, 2020",title:"Scientists Don't Know Why Polaris Is So Weird",description:"Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",source:"treehugger",keyword:"Photography",isSaved:!0}],a=Object(n.useReducer)($,{cards:[],card:{},loading:!1,visibleList:[]}),s=Object(d.a)(a,2),r=s[0],c=s[1],i=function(){c({type:Y})};return Object(j.jsx)(E.Provider,{value:{cards:r.cards,loading:r.loading,visibleList:r.visibleList,isSaved:r.isSaved,setLoading:i,setIsSaved:function(e){e.isSaved?c({type:J,payload:e.id}):c({type:V,payload:e.id})},searchNews:function(){i(),setTimeout((function(){c({type:U,payload:t})}),2e3)},deleteCard:function(e){c({type:z,payload:e})},setCardButtonType:function(e,t){"saved-news"===t?e.cardButtonType="card__icon_trash":e.isSaved?e.cardButtonType="card__icon_save_true":e.cardButtonType="card__icon_save"}},children:e.children})},te=function(e,t){switch(t.type){case K:return Object(h.a)(Object(h.a)({},e),{},{isAuth:!0,loading:!1,user:t.payload});case Z:return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuth:!0,loading:!1});case X:return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuth:!0,loading:!1,popupOpen:!1});case Q:return localStorage.removeItem("token"),Object(h.a)(Object(h.a)({},e),{},{token:null,isAuth:!1,loading:!1,user:"",error:t.payload});default:return e}},ae=function(e){var t={name:"Elise",email:"example@test.com",password:"123456"},a={isAuth:!0,loading:!0,user:t},s=Object(n.useState)(!1),r=Object(d.a)(s,2),c=r[0],i=r[1],o=Object(n.useState)(!1),l=Object(d.a)(o,2),u=l[0],h=l[1],b=Object(n.useState)(!1),_=Object(d.a)(b,2),m=_[0],O=_[1],f=function(){i(!1),h(!1),O(!1)},g=function(){O(!0)},x=Object(n.useReducer)(te,a),v=Object(d.a)(x,2),w=v[0],y=v[1],N=function(){y({type:K,payload:t})};return Object(j.jsx)(p.Provider,{value:{token:w.token,isAuth:w.isAuth,loading:w.loading,user:w.user,isLoginOpen:c,isRegisterOpen:u,isSuccessOpen:m,register:function(e){y({type:Z,payload:e.data}),g()},loadUser:N,login:function(e){y({type:X,payload:e.data}),N(),f()},logout:function(){y({type:Q})},handleLoginOpen:function(){i(!0)},handleRegisterOpen:function(){h(!0)},handleSuccessOpen:g,closeAllPopups:f},children:e.children})};a(50);var se=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(ae,{children:Object(j.jsx)(ee,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(W,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/saved-news",children:Object(j.jsx)(G,{})})]}),Object(j.jsx)(q,{})]})})})})})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(se,{})}),document.getElementById("root"))}],[[51,1,2]]]);
//# sourceMappingURL=main.82505681.chunk.js.map