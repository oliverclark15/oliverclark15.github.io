(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-16400706":"f7068a00","chunk-2d0e95df":"52da02b0"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-16400706":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-16400706":"10faf459","chunk-2d0e95df":"31d6cfe0"}[t]+".css",r=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],m.parentNode.removeChild(m),a(o)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"30e2":function(t,e,a){},"513c":function(t,e,a){t.exports=a.p+"img/distributed.222b403e.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("HeaderNE",{on:{tabclick:t.update,tabchange:t.update}}),a("v-content",{staticStyle:{"background-color":"#008080"}},[1===t.tab?a("ProjectsNE",{on:{close:function(e){t.tab=-1}}}):t._e(),2===t.tab?a("ContactNE",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):t._e(),0===t.tab?a("AboutNE",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):t._e(),0===t.tab?a("ProfileNE",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):t._e()],1)],1)},r=[],o=(a("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"500","min-width":"225",color:"#c0c0c0"}},[a("WindowBar",{attrs:{title:"A brief history of Oliver"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("Timeline"):t._e()],1):t._e()}),s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("div",{staticClass:"title-bar-text"},[t._v(t._s(t.title))]),a("div",{staticClass:"title-bar-controls"},[a("button",{attrs:{"aria-label":"Minimize"},on:{click:t.minWindow}}),a("button",{attrs:{"aria-label":"Maximize"},on:{click:t.maxWindow}}),a("button",{attrs:{"aria-label":"Close"},on:{click:t.closeWindow}})])])},c=[],u={data:function(){return{open:!0,maximized:!0}},props:{title:String},methods:{closeWindow:function(){console.log("closing window"),this.open=!1,this.$emit("close")},maxWindow:function(){console.log("maximizing window"),this.maximized=!0,this.$emit("maximize")},minWindow:function(){console.log("minimizing window"),this.maximized=!1,this.$emit("minimize")}}},d=u,m=(a("4876"),a("2877")),p=Object(m["a"])(d,l,c,!1,null,"f48056ec",null),f=p.exports,_=a("f67a"),g={name:"AboutNE",data:function(){return{screenX:0,screenY:0,open:!0,maximized:!0}},components:{WindowBar:f,Timeline:_["a"]}},v=g,b=(a("6b29"),a("6544")),h=a.n(b),w=a("b0af"),x=Object(m["a"])(v,o,s,!1,null,null,null),y=x.exports;h()(x,{VCard:w["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"900","min-width":"150"}},[a("WindowBar",{attrs:{title:"Contact me!"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"window-body"},[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"https://linkedin.com/in/oliverclark15",target:"_blank"}},[t._v(" LinkedIn "),a("v-icon",{attrs:{small:""}},[t._v("mdi-linkedin")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"https://github.com/oliverclark15",target:"_blank"}},[t._v(" GitHub "),a("v-icon",{attrs:{small:""}},[t._v("mdi-github")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"mailto:oliverclark15@gmail.com"}},[t._v(" Email "),a("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1)],1)],1)],1)]):t._e()],1):t._e()},k=[],E={data:function(){return{open:!0,maximized:!0}},methods:{},components:{WindowBar:f}},j=E,S=(a("be75"),a("8336")),O=a("62ad"),P=a("a523"),V=a("132d"),z=a("0fd9"),A=Object(m["a"])(j,C,k,!1,null,"45da4cbd",null),T=A.exports;h()(A,{VBtn:S["a"],VCard:w["a"],VCol:O["a"],VContainer:P["a"],VIcon:V["a"],VRow:z["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",staticStyle:{position:"initial"},attrs:{"max-width":"900"}},[a("WindowBar",{attrs:{title:"Projects"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("div",[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{multiple:"",group:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},t._l(t.buttonIcons,(function(e){return a("v-btn",{key:e,attrs:{"retain-focus-on-click":"",icon:""}},[a("v-icon",{staticClass:"window",attrs:{contain:""}},[t._v(t._s(e))])],1)})),1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.filteredProjects,(function(t){return a("v-col",{key:t.id,staticClass:"mx-auto",attrs:{cols:t.flex}},[a("ProjectCard",{staticClass:"window",attrs:{card:t}})],1)})),1)],1)],1):t._e()],1):t._e()},M=[],I=(a("4160"),a("caad"),a("2532"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"344"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.card.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}}),a("v-card-title",{staticClass:"text"},[t._v(" "+t._s(t.card.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(t.card.subtitle)+" ")]),a("v-card-actions",[t._l(t.card.actions,(function(e){return a("v-btn",{key:e,attrs:{color:"#356859",text:"",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])})),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],2),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" "+t._s(t.card.details)+" ")])],1)])],1)}),N=[],R={data:function(){return{show:!1}},props:{card:Object}},$=R,G=(a("7918"),a("99d9")),W=a("ce7e"),D=a("0789"),H=a("adda"),L=a("2fa4"),F=Object(m["a"])($,I,N,!1,null,"18afa20f",null),J=F.exports;h()(F,{VBtn:S["a"],VCard:w["a"],VCardActions:G["a"],VCardSubtitle:G["b"],VCardText:G["c"],VCardTitle:G["d"],VDivider:W["a"],VExpandTransition:D["a"],VIcon:V["a"],VImg:H["a"],VSpacer:L["a"]});var q={data:function(){return{buttonIcons:["mdi-language-python","mdi-language-java","mdi-language-c","mdi-language-javascript"],cards:[{title:"Oliver's Room",subtitle:"an arcade style platformer implemented using PyGame",src:a("d9e5"),flex:6,details:"WORK IN PROGRESS: Oliver's Room is an arcade style platformer game including multiple levels, enemies, and consumables. The game was implemented in Python using the PyGame module",tag:0,actions:[{title:"GitHub",link:"https://github.com/oliverclark15/arcade-game"}],id:0},{title:"Capstone Research Paper",subtitle:'Authored "Can Duplicate Posts on Stack Overflow Benefit the Software Development Community?" an original research paper alongside fellow McGill undergraduates, graduatates, and a professor.',src:a("c405"),flex:6,details:"Authored an original paper on duplicate questions on popular developer Q&A site Stack Overflow. The paper was selected for publication at the IEEE/ACM International Conference on Mining Software Repositories. Finally, the paper won the Best Student Presentation award at the conference. ",tag:0,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"},{title:"IEEE",link:""}],id:1},{title:"Tablut Agent",subtitle:"A Tablut (Viking Chess) game playing agent written in Java",src:a("9274"),flex:6,details:"Tablut agent implented using an Minimax search algorithm with alpha-beta pruning in Java. The agent performed in the top 20% of agents competing against 150+ classmates.",tag:1,actions:[{title:"PDF",link:"/tablut_report.pdf"}],id:2},{title:"Distributed RMS",subtitle:"A distributed reservation system implemented in Java",src:a("513c"),flex:6,details:"A distributed reservation system to allow a user to reserve flights, cars, rooms, or some combination of the three. The system was implemented in Java over TCP, using strict 2-phase locking,  2-phase commits, and shadowing protocols.",tag:1,actions:[{title:"GitHub",link:"https://github.com/metchel/Comp100000000Project"},{title:"PDF",link:"/512_report.pdf"}],id:3},{title:"budgety",subtitle:"An expense reporting web application written in JavaScript",src:a("7728"),flex:6,details:"WORK IN PROGRESS:  A full stack budgeting web application using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack. This application allows users to track expenses and provides spending analytics and useful information to the user",tag:3,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"}],id:4},{title:"Rendering System",subtitle:"A rendering system built on top of TinyRender implemented in C++.",src:a("8fe4"),flex:6,details:"Implemented several different path tracers, lighting models, GLSL shaders to produce brilliant outputs",tag:2,actions:[],id:5},{title:"Blueberry Hill Outdoor Center websites",subtitle:"Developed websites for the BBH Outdoor Center including a site for their annual Goshen Gallop running race",src:a("8e90"),flex:6,details:"WORK IN PROGRESS: Websites implemented with a Vue frontend and Node backend for handling exterior API calls. Websites deployed using GH Pages and GH actions to perform builds upon new commits to repo",tag:3,actions:[{title:"Goshen Gallop",link:"https://goshengallop.com"}]}],show:!1,toggle_exclusive:[0,1,2,3],open:!0,maximized:!0}},components:{ProjectCard:J,WindowBar:f},computed:{filteredProjects:function(){var t=this,e=[];return this.cards.forEach((function(a){t.toggle_exclusive.includes(a.tag)&&(console.log(t.toggle_exclusive),e.push(a))})),e}},methods:{}},K=q,U=(a("3a87"),a("a609")),X=Object(m["a"])(K,B,M,!1,null,"6e0bb52f",null),Y=X.exports;h()(X,{VBtn:S["a"],VBtnToggle:U["a"],VCard:w["a"],VCardText:G["c"],VCol:O["a"],VContainer:P["a"],VIcon:V["a"],VRow:z["a"]});var Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"window"},[a("v-img",{attrs:{src:"title.png","lazy-src":"title.png","max-height":"200",contain:""}}),a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},on:{change:function(e){return t.$emit("tabchange",t.tab)}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e,staticClass:"window",on:{click:function(a){t.$emit("tabclick",t.items.indexOf(e))}}},[t._v(t._s(e))])})),1)],1)},Z=[],tt={name:"Header",components:{},data:function(){return{isActive:"OC",tab:0,items:["About","Projects","Contact"]}},props:["tabs"]},et=tt,at=(a("332f"),a("71a3")),nt=a("fe57"),it=Object(m["a"])(et,Q,Z,!1,null,"87a2785e",null),rt=it.exports;h()(it,{VCard:w["a"],VImg:H["a"],VTab:at["a"],VTabs:nt["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"250"}},[a("WindowBar",{attrs:{title:"Celery Man"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),a("v-img",{staticClass:"mt-5 mb-5",staticStyle:{display:"block",margin:"auto"},attrs:{src:"oli-gif-2.gif","lazy-src":"lazyheadshot.jpg",width:"225"}})],1):t._e()},st=[],lt={name:"Draggable",data:function(){return{screenX:0,screenY:0,open:!0,maximized:!0}},components:{WindowBar:f}},ct=lt,ut=(a("ec99"),Object(m["a"])(ct,ot,st,!1,null,"7a349ad2",null)),dt=ut.exports;h()(ut,{VCard:w["a"],VImg:H["a"]});var mt=a("5014"),pt=a.n(mt),ft={name:"App",components:{AboutNE:y,ContactNE:T,ProjectsNE:Y,HeaderNE:rt,ProfileNE:dt},data:function(){return{tab:0,about_open:!0,projects_open:!1,contact_open:!1,theme:1}},methods:{update:function(t){console.log(t),this.tab=t},changeTheme:function(t){this.theme=t,this.update(0)},initInteract:function(){pt()(".item").draggable({listeners:{move:window.dragMoveListener},inertia:!1,modifiers:[pt.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})]})}},mounted:function(){var t=this.$refs.aboutDraggable,e=this.$refs.contactDraggable,a=this.$refs.projectsDraggable;console.log("Looking to hire me? hit me up at oliver@oliverclark.org"),console.log("  ____  _      _______      ________ _____   _____ _               _____  _  __\n / __ \\| |    |_   _\\ \\    / /  ____|  __ \\ / ____| |        /\\   |  __ \\| |/ /\n| |  | | |      | |  \\ \\  / /| |__  | |__) | |    | |       /  \\  | |__) | ' / \n| |  | | |      | |   \\ \\/ / |  __| |  _  /| |    | |      / /\\ \\ |  _  /|  <  \n| |__| | |____ _| |_   \\  /  | |____| | \\ \\| |____| |____ / ____ \\| | \\ \\| . \\ \n \\____/|______|_____|   \\/   |______|_|  \\_\\\\_____|______/_/    \\_\\_|  \\_\\_|\\_\\\n "),this.initInteract(t),this.initInteract(e),this.initInteract(a)}};function _t(t){var e=t.target;console.log(t);var a=(parseFloat(e.getAttribute("data-x"))||0)+t.dx,n=(parseFloat(e.getAttribute("data-y"))||0)+t.dy;e.style.webkitTransform=e.style.transform="translate("+a+"px, "+n+"px)",console.log("translate("+a+"px, "+n+"px)"),e.setAttribute("data-x",a),e.setAttribute("data-y",n)}pt()(".draggable").draggable({inertia:!0,modifiers:[pt.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})],autoScroll:!0,listeners:{move:_t,end:function(t){var e=t.target.querySelector("p");console.log("drag"),e&&(e.textContent="moved a distance of "+Math.sqrt(Math.pow(t.pageX-t.x0,2)+Math.pow(t.pageY-t.y0,2)|0).toFixed(2)+"px")}}}),window.dragMoveListener=_t;var gt=ft,vt=(a("7430"),a("7496")),bt=a("a75b"),ht=Object(m["a"])(gt,i,r,!1,null,"48dab3fa",null),wt=ht.exports;h()(ht,{VApp:vt["a"],VContent:bt["a"]});a("d3b7");var xt,yt,Ct=a("8c4f"),kt={},Et=Object(m["a"])(kt,xt,yt,!1,null,null,null),jt=Et.exports;n["a"].use(Ct["a"]);var St=[{path:"/",name:"Home",component:jt},{path:"/about",name:"About",component:function(){return a.e("chunk-16400706").then(a.bind(null,"f820"))}},{path:"*",name:"404",component:function(){return a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}}],Ot=new Ct["a"]({routes:St}),Pt=Ot,Vt=a("f309");n["a"].use(Vt["a"]);var zt=new Vt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Pt,vuetify:zt,render:function(t){return t(wt)}}).$mount("#app")},7430:function(t,e,a){"use strict";var n=a("30e2"),i=a.n(n);i.a},7728:function(t,e,a){t.exports=a.p+"img/bud.548ef8db.jpg"},7918:function(t,e,a){"use strict";var n=a("f6d3"),i=a.n(n);i.a},"8e90":function(t,e,a){t.exports=a.p+"img/vtlake.048e2157.jpg"},"8fe4":function(t,e,a){t.exports=a.p+"img/cubebox.4297bb2b.png"},9274:function(t,e,a){t.exports=a.p+"img/Tablut_board.svg.1ba64697.png"},c405:function(t,e,a){t.exports=a.p+"img/msr1.67a14962.png"},d9e5:function(t,e,a){t.exports=a.p+"img/oliversrooms.7864b5f0.png"},f67a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"window-body"},[a("ul",{staticClass:"tree-view "},[a("li",[a("details",[a("summary",[t._v("August 1997")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Born")]),a("ul",[a("li",[t._v("Not much to say here")])])])])])])]),a("li",[a("details",[a("summary",[t._v("June 2015")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Graduated High School")]),a("ul",[a("li",[t._v("wow. what a roller coaster :-)")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Summer 2018")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Cyber Security Intern")]),a("ul",[a("li",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Summer 2019")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Cyber Security Intern")]),a("ul",[a("li",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])])])])])])]),a("li",[a("details",[a("summary",[t._v("December 2019")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Graduated McGill University")]),a("ul",[a("li",[t._v("Bachelors of Software Engineering in Software Engineering from McGill University, Montreal, QC, Canada")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Present Day (2021)")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Backend Software Developer")]),a("ul",[a("li",[t._v("Working as a Backend Software Developer for Gorilla Group in Montreal. Focused on implementing e-commerce solutions using Java")])])])])])])])])])}],r=(a("526e"),a("2877")),o={},s=Object(r["a"])(o,n,i,!1,null,"5aa436e5",null);e["a"]=s.exports},f6d3:function(t,e,a){}});
//# sourceMappingURL=app.49006a67.js.map