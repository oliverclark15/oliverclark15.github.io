(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00a0":function(t,e,a){"use strict";var n=a("1038"),i=a.n(n);e["default"]=i.a},1038:function(t,e){console.log("hi")},1183:function(t,e,a){},"16ff":function(t,e,a){},"2d77":function(t,e,a){t.exports=a.p+"img/workerw.edd6b0ab.png"},3109:function(t,e,a){t.exports=a.p+"img/baby.1572f35d.jpg"},5102:function(t,e,a){"use strict";var n=a("7c10"),i=a.n(n);i.a},"513c":function(t,e,a){t.exports=a.p+"img/distributed.222b403e.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[0===t.theme?a("Header",{staticClass:"font",on:{tabchange:t.update}}):1===t.theme?a("HeaderNE",{on:{tabclick:t.update,tabchange:t.update}}):t._e(),a("v-content",{staticStyle:{"background-color":"#008080"}},[1===t.tab&&0===t.theme?a("Projects"):t._e(),1===t.tab&&1===t.theme?a("ProjectsNE",{on:{close:function(e){t.tab=-1}}}):2===t.tab&&0===t.theme?a("Contact"):2===t.tab&&1===t.theme?a("ContactNE",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):0===t.tab&&0===t.theme?a("About"):0===t.tab&&1===t.theme?a("AboutNE",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):t._e(),0===t.tab&&1===t.theme?a("Profile",{staticClass:"draggable",on:{close:function(e){t.tab=-1}}}):t._e()],1)],1)},r=[],o=a("f820"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"500","min-width":"225"}},[a("WindowBar",{attrs:{title:"A brief history of Oliver"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("Timeline"):t._e()],1):t._e()},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("div",{staticClass:"title-bar-text"},[t._v(t._s(t.title))]),a("div",{staticClass:"title-bar-controls"},[a("button",{attrs:{"aria-label":"Minimize"},on:{click:t.minWindow}}),a("button",{attrs:{"aria-label":"Maximize"},on:{click:t.maxWindow}}),a("button",{attrs:{"aria-label":"Close"},on:{click:t.closeWindow}})])])},u=[],d={data:function(){return{open:!0,maximized:!0}},props:{title:String},methods:{closeWindow:function(){console.log("closing window"),this.open=!1,this.$emit("close")},maxWindow:function(){console.log("maximizing window"),this.maximized=!0,this.$emit("maximize")},minWindow:function(){console.log("minimizing window"),this.maximized=!1,this.$emit("minimize")}}},m=d,p=(a("4876"),a("2877")),f=Object(p["a"])(m,c,u,!1,null,"f48056ec",null),v=f.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"window-body"},[a("ul",{staticClass:"tree-view "},[a("li",[a("details",[a("summary",[t._v("August 1997")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Born")]),a("ul",[a("li",[t._v("Not much to say here")])])])])])])]),a("li",[a("details",[a("summary",[t._v("June 2015")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Graduated High School")]),a("ul",[a("li",[t._v("wow. what a roller coaster :-)")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Summer 2018")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Cyber Security Intern")]),a("ul",[a("li",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Summer 2019")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Cyber Security Intern")]),a("ul",[a("li",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])])])])])])]),a("li",[a("details",[a("summary",[t._v("December 2019")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Graduated McGill University")]),a("ul",[a("li",[t._v("Bachelors of Software Engineering in Software Engineering from McGill University, Montreal, QC, Canada")])])])])])])]),a("li",[a("details",[a("summary",[t._v("Present Day (2020)")]),a("ul",[a("li",[a("details",[a("summary",[t._v("Actively Seeking Employment :-)")]),a("ul",[a("li",[t._v("I am currently living at home, working at the family business. In my spare time I am trying to learn as much as possible, with specific focus on JavaScript and web development technologies")])])])])])])])])])}],h=(a("9d81"),{}),x=Object(p["a"])(h,g,b,!1,null,"06411582",null),_=x.exports,w={name:"Draggable",data:function(){return{screenX:0,screenY:0,open:!0,maximized:!0}},components:{WindowBar:v,Timeline:_}},y=w,C=(a("76a9"),a("6544")),k=a.n(C),V=a("b0af"),S=Object(p["a"])(y,s,l,!1,null,"bff5f29a",null),j=S.exports;k()(S,{VCard:V["a"]});var P=a("b8fa"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"900","min-width":"150"}},[a("WindowBar",{attrs:{title:"Contact me!"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"window-body"},[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"https://linkedin.com/in/oliverclark15",target:"_blank"}},[t._v(" LinkedIn "),a("v-icon",{attrs:{small:""}},[t._v("mdi-linkedin")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"https://github.com/oliverclark15",target:"_blank"}},[t._v(" GitHub "),a("v-icon",{attrs:{small:""}},[t._v("mdi-github")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{small:"",href:"mailto:oliverclark15@gmail.com"}},[t._v(" Email "),a("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1)],1)],1)],1)]):t._e()],1):t._e()},O=[],T={data:function(){return{open:!0,maximized:!0}},methods:{},components:{WindowBar:v}},A=T,I=(a("be75"),a("8336")),R=a("62ad"),z=a("a523"),M=a("132d"),B=a("0fd9"),G=Object(p["a"])(A,E,O,!1,null,"45da4cbd",null),$=G.exports;k()(G,{VBtn:I["a"],VCard:V["a"],VCol:R["a"],VContainer:z["a"],VIcon:M["a"],VRow:B["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",staticStyle:{position:"initial"},attrs:{"max-width":"900"}},[a("WindowBar",{attrs:{title:"Projects"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("div",[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{multiple:"",group:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},t._l(t.buttonIcons,(function(e){return a("v-btn",{key:e,attrs:{"retain-focus-on-click":"",icon:""}},[a("v-icon",{staticClass:"window",attrs:{contain:""}},[t._v(t._s(e))])],1)})),1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.filteredProjects,(function(t){return a("v-col",{key:t.id,staticClass:"mx-auto",attrs:{cols:t.flex}},[a("ProjectCard",{staticClass:"window",attrs:{card:t}})],1)})),1)],1)],1):t._e()],1):t._e()},D=[],N=(a("4160"),a("caad"),a("2532"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"344"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.card.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}}),a("v-card-title",{staticClass:"text"},[t._v(" "+t._s(t.card.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(t.card.subtitle)+" ")]),a("v-card-actions",[t._l(t.card.actions,(function(e){return a("v-btn",{key:e,attrs:{color:"#356859",text:"",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])})),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],2),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" "+t._s(t.card.details)+" ")])],1)])],1)}),H=[],J={data:function(){return{show:!1}},props:{card:Object}},F=J,L=(a("7918"),a("99d9")),K=a("ce7e"),q=a("0789"),Q=a("adda"),U=a("2fa4"),X=Object(p["a"])(F,N,H,!1,null,"18afa20f",null),Y=X.exports;k()(X,{VBtn:I["a"],VCard:V["a"],VCardActions:L["a"],VCardSubtitle:L["b"],VCardText:L["c"],VCardTitle:L["d"],VDivider:K["a"],VExpandTransition:q["a"],VIcon:M["a"],VImg:Q["a"],VSpacer:U["a"]});var Z={data:function(){return{buttonIcons:["mdi-language-python","mdi-language-java","mdi-language-c","mdi-language-javascript"],cards:[{title:"Oliver's Room",subtitle:"an arcade style platformer implemented using PyGame",src:a("d9e5"),flex:6,details:"WORK IN PROGRESS: Oliver's Room is an arcade style platformer game including multiple levels, enemies, and consumables. The game was implemented in Python using the PyGame module",tag:0,actions:[{title:"GitHub",link:"https://github.com/oliverclark15/arcade-game"}],id:0},{title:"Capstone Research Paper",subtitle:'Authored "Can Duplicate Posts on Stack Overflow Benefit the Software Development Community?" an original research paper alongside fellow McGill undergraduates, graduatates, and a professor.',src:a("c405"),flex:6,details:"Authored an original paper on duplicate questions on popular developer Q&A site Stack Overflow. The paper was selected for publication at the IEEE/ACM International Conference on Mining Software Repositories. Finally, the paper won the Best Student Presentation award at the conference. ",tag:0,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"},{title:"IEEE",link:""}],id:1},{title:"Tablut Agent",subtitle:"A Tablut (Viking Chess) game playing agent written in Java",src:a("9274"),flex:6,details:"Tablut agent implented using an Minimax search algorithm with alpha-beta pruning in Java. The agent performed in the top 20% of agents competing against 150+ classmates.",tag:1,actions:[{title:"PDF",link:"/tablut_report.pdf"}],id:2},{title:"Distributed RMS",subtitle:"A distributed reservation system implemented in Java",src:a("513c"),flex:6,details:"A distributed reservation system to allow a user to reserve flights, cars, rooms, or some combination of the three. The system was implemented in Java over TCP, using strict 2-phase locking,  2-phase commits, and shadowing protocols.",tag:1,actions:[{title:"GitHub",link:"https://github.com/metchel/Comp100000000Project"},{title:"PDF",link:"/512_report.pdf"}],id:3},{title:"budgety",subtitle:"An expense reporting web application written in JavaScript",src:a("7728"),flex:6,details:"WORK IN PROGRESS:  A full stack budgeting web application using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack. This application allows users to track expenses and provides spending analytics and useful information to the user",tag:3,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"}],id:4},{title:"Rendering System",subtitle:"A rendering system built on top of TinyRender implemented in C++.",src:a("8fe4"),flex:6,details:"Implemented several different path tracers, lighting models, GLSL shaders to produce brilliant outputs",tag:2,actions:[],id:5},{title:"Blueberry Hill Outdoor Center websites",subtitle:"Developed websites for the BBH Outdoor Center including a site for their annual Goshen Gallop running race",src:a("8e90"),flex:6,details:"WORK IN PROGRESS: Websites implemented with a Vue frontend and Node backend for handling exterior API calls. Websites deployed using GH Pages and GH actions to perform builds upon new commits to repo",tag:3,actions:[{title:"Goshen Gallop",link:"https://goshengallop.com"}]}],show:!1,toggle_exclusive:[0,1,2,3],open:!0,maximized:!0}},components:{ProjectCard:Y,WindowBar:v},computed:{filteredProjects:function(){var t=this,e=[];return this.cards.forEach((function(a){t.toggle_exclusive.includes(a.tag)&&(console.log(t.toggle_exclusive),e.push(a))})),e}},methods:{}},tt=Z,et=(a("3a87"),a("a609")),at=Object(p["a"])(tt,W,D,!1,null,"6e0bb52f",null),nt=at.exports;k()(at,{VBtn:I["a"],VBtnToggle:et["a"],VCard:V["a"],VCardText:L["c"],VCol:R["a"],VContainer:z["a"],VIcon:M["a"],VRow:B["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"900"}},[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{multiple:"",color:"#356859",group:"",tile:"",rounded:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-python")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-java")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-c")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-javascript")])],1)],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.filteredProjects,(function(t){return a("v-col",{key:t.title,staticClass:"mx-auto",attrs:{cols:t.flex}},[a("ProjectCard",{attrs:{card:t}})],1)})),1)],1)],1)],1)},rt=[],ot={data:function(){return{cards:[{title:"Oliver's Room",subtitle:"an arcade style platformer implemented using PyGame",src:a("d9e5"),flex:6,details:"WORK IN PROGRESS: Oliver's Room is an arcade style platformer game including multiple levels, enemies, and consumables. The game was implemented in Python using the PyGame module",tag:0,actions:[{title:"GitHub",link:"https://github.com/oliverclark15/arcade-game"}]},{title:"Capstone Research Paper",subtitle:'Authored "Can Duplicate Posts on Stack Overflow Benefit the Software Development Community?" an original research paper alongside fellow McGill undergraduates, graduatates, and a professor.',src:a("c405"),flex:6,details:"Authored an original paper on duplicate questions on popular developer Q&A site Stack Overflow. The paper was selected for publication at the IEEE/ACM International Conference on Mining Software Repositories. Finally, the paper won the Best Student Presentation award at the conference. ",tag:0,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"},{title:"IEEE",link:""}]},{title:"Tablut Agent",subtitle:"A Tablut (Viking Chess) game playing agent written in Java",src:a("9274"),flex:6,details:"Tablut agent implented using an Minimax search algorithm with alpha-beta pruning in Java. The agent performed in the top 20% of agents competing against 150+ classmates.",tag:1,actions:[{title:"PDF",link:"/tablut_report.pdf"}]},{title:"Distributed RMS",subtitle:"A distributed reservation system implemented in Java",src:a("513c"),flex:6,details:"A distributed reservation system to allow a user to reserve flights, cars, rooms, or some combination of the three. The system was implemented in Java over TCP, using strict 2-phase locking,  2-phase commits, and shadowing protocols.",tag:1,actions:[{title:"GitHub",link:"https://github.com/metchel/Comp100000000Project"},{title:"PDF",link:"/512_report.pdf"}]},{title:"budgety",subtitle:"An expense reporting web application written in JavaScript",src:a("7728"),flex:6,details:"WORK IN PROGRESS:  A full stack budgeting web application using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack. This application allows users to track expenses and provides spending analytics and useful information to the user",tag:3,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"}]},{title:"Rendering System",subtitle:"A rendering system built on top of TinyRender implemented in C++.",src:a("8fe4"),flex:6,details:"Implemented several different path tracers, lighting models, GLSL shaders to produce brilliant outputs",tag:2,actions:[]}],show:!1,toggle_exclusive:[0,1,2,3]}},components:{ProjectCard:Y},computed:{filteredProjects:function(){var t=this,e=[];return this.cards.forEach((function(a){t.toggle_exclusive.includes(a.tag)&&(console.log(t.toggle_exclusive),e.push(a))})),e}}},st=ot,lt=Object(p["a"])(st,it,rt,!1,null,"c5f6a630",null),ct=lt.exports;k()(lt,{VBtn:I["a"],VBtnToggle:et["a"],VCard:V["a"],VCardText:L["c"],VCol:R["a"],VContainer:z["a"],VIcon:M["a"],VRow:B["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"basil"},on:{tabchange:function(e){return t.console.log("hi")}}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("h1",{staticClass:"font-weight-bold basil--text font big"},[t._v("oliver clark")])]),a("v-card-subtitle",{staticClass:"text-center justify-center py-6"},[a("h1",{staticClass:"font-weight-bold basil--text"},[t._v("software engineer")])]),a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},on:{change:function(e){return t.$emit("tabchange",t.tab)}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e},[t._v(t._s(e))])})),1)],1)},dt=[],mt={name:"Header",components:{},data:function(){return{isActive:"OC",tab:0,items:["About","Projects","Contact"]}},props:["tabs"]},pt=mt,ft=(a("cf08"),a("71a3")),vt=a("fe57"),gt=Object(p["a"])(pt,ut,dt,!1,null,"847e6e00",null),bt=gt.exports;k()(gt,{VCard:V["a"],VCardSubtitle:L["b"],VCardTitle:L["d"],VTab:ft["a"],VTabs:vt["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"window",on:{tabchange:function(e){return t.console.log("hi")}}},[a("v-img",{attrs:{src:"title.png","lazy-src":"title.png","max-height":"200",contain:""}}),a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},on:{change:function(e){return t.$emit("tabchange",t.tab)}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e,staticClass:"window",on:{click:function(a){t.$emit("tabclick",t.items.indexOf(e))}}},[t._v(t._s(e))])})),1)],1)},xt=[],_t={name:"Header",components:{},data:function(){return{isActive:"OC",tab:0,items:["About","Projects","Contact"]}},props:["tabs"]},wt=_t,yt=(a("56ea"),Object(p["a"])(wt,ht,xt,!1,null,"0d86fc66",null)),Ct=yt.exports;k()(yt,{VCard:V["a"],VImg:Q["a"],VTab:ft["a"],VTabs:vt["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window",attrs:{"max-width":"250"}},[a("WindowBar",{attrs:{title:"Why so serious?"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),a("v-img",{staticClass:"mt-5 mb-5",staticStyle:{display:"block",margin:"auto"},attrs:{src:"oli-gif-2.gif","lazy-src":"lazyheadshot.jpg",width:"225"}})],1):t._e()},Vt=[],St={name:"Draggable",data:function(){return{screenX:0,screenY:0,open:!0,maximized:!0}},components:{WindowBar:v}},jt=St,Pt=(a("cff7"),Object(p["a"])(jt,kt,Vt,!1,null,"acd31a02",null)),Et=Pt.exports;k()(Pt,{VCard:V["a"],VImg:Q["a"]});var Ot=a("5014"),Tt=a.n(Ot),At={name:"App",components:{About:o["default"],AboutNE:j,Contact:P["default"],ContactNE:$,ProjectsNE:nt,Projects:ct,Header:bt,HeaderNE:Ct,Profile:Et},data:function(){return{tab:0,about_open:!0,projects_open:!1,contact_open:!1,theme:1}},methods:{update:function(t){console.log(t),this.tab=t},changeTheme:function(t){this.theme=t,this.update(0)},initInteract:function(t){console.log("init"),console.log(t),Tt()(".item").draggable({listeners:{move:window.dragMoveListener},inertia:!1,modifiers:[Tt.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})]})}},mounted:function(){var t=this.$refs.aboutDraggable,e=this.$refs.contactDraggable,a=this.$refs.projectsDraggable;console.log(t),console.log(e),console.log(a),this.initInteract(t),this.initInteract(e),this.initInteract(a)}},It=At,Rt=(a("5102"),a("7496")),zt=a("a75b"),Mt=Object(p["a"])(It,i,r,!1,null,"6b084526",null),Bt=Mt.exports;k()(Mt,{VApp:Rt["a"],VContent:zt["a"]});a("d3b7");var Gt=a("8c4f"),$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},Wt=[],Dt={name:"Home",components:{}},Nt=Dt,Ht=Object(p["a"])(Nt,$t,Wt,!1,null,null,null),Jt=Ht.exports;n["a"].use(Gt["a"]);var Ft=[{path:"/",name:"Home",component:Jt},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}}],Lt=new Gt["a"]({routes:Ft}),Kt=Lt,qt=a("f309");n["a"].use(qt["a"]);var Qt=new qt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Kt,vuetify:Qt,render:function(t){return t(Bt)}}).$mount("#app")},6073:function(t,e,a){t.exports=a.p+"img/mcgill_badge.4975785f.png"},"6f42":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"https://linkedin.com/in/oliverclark15",target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-linkedin")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"https://github.com/oliverclark15",target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-github")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"mailto:oliverclark15@gmail.com"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-email")])],1)],1)],1)],1)},i=[]},"6f6d":function(t,e,a){},7728:function(t,e,a){t.exports=a.p+"img/bud.548ef8db.jpg"},7918:function(t,e,a){"use strict";var n=a("f6d3"),i=a.n(n);i.a},"7c10":function(t,e,a){},8878:function(t,e,a){"use strict";var n=a("6f6d"),i=a.n(n);i.a},"8e90":function(t,e,a){t.exports=a.p+"img/vtlake.048e2157.jpg"},"8fe4":function(t,e,a){t.exports=a.p+"img/cubebox.4297bb2b.png"},9100:function(t,e,a){t.exports=a.p+"img/capw.7bf54ab3.png"},9274:function(t,e,a){t.exports=a.p+"img/Tablut_board.svg.1ba64697.png"},b8fa:function(t,e,a){"use strict";var n=a("6f42"),i=a("00a0"),r=a("2877"),o=a("6544"),s=a.n(o),l=a("8336"),c=a("62ad"),u=a("a523"),d=a("132d"),m=a("0fd9"),p=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=p.exports,s()(p,{VBtn:l["a"],VCol:c["a"],VContainer:u["a"],VIcon:d["a"],VRow:m["a"]})},c405:function(t,e,a){t.exports=a.p+"img/msr1.67a14962.png"},cd57:function(t,e,a){"use strict";var n=a("1183"),i=a.n(n);i.a},cf08:function(t,e,a){"use strict";var n=a("16ff"),i=a.n(n);i.a},d9e5:function(t,e,a){t.exports=a.p+"img/oliversrooms.7864b5f0.png"},e2b3:function(t,e,a){t.exports=a.p+"img/mitreorg.f5fd5903.jpg"},f6d3:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("v-card",{staticClass:"mx-auto mt-8 window draggable",attrs:{"max-width":"900"}},[a("WindowBar",{attrs:{title:"Projects"},on:{close:function(e){return t.$emit("close")},maximize:function(e){t.maximized=!0},minimize:function(e){t.maximized=!1}}}),t.maximized?a("div",[a("v-card-text",[a("h1",[t._v("Life of Oliver")]),a("Timeline"),a("h1",[t._v("Present ")])],1)],1):t._e()],1):t._e()},i=[],r=(a("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",[n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("3109")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("August 1997")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Born")]),n("v-card-text",[t._v("Not much to say here")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("9100")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("June 2015")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Graduated High School")]),n("v-card-text",[t._v("wow. what a roller coaster :-)")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("e2b3")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Summer 2018")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Cyber Security Intern")]),n("v-card-text",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("e2b3")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Summer 2019")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Cyber Security Intern")]),n("v-card-text",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("6073")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("December 2019")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Graduated McGill University")]),n("v-card-text",[t._v("Bachelors of Software Engineering in Software Engineering from McGill University, Montreal, QC, Canada")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("2d77")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Present Day (2020)")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Actively Seeking Employment :-)")]),n("v-card-text",[t._v("I am currently living at home, working at the family business. In my spare time I am trying to learn as much as possible, with specific focus on JavaScript and web development technologies")])],1)],1)],1)}),o=[],s=(a("8878"),a("2877")),l=a("6544"),c=a.n(l),u=a("8212"),d=a("b0af"),m=a("99d9"),p=a("8414"),f=a("1e06"),v={},g=Object(s["a"])(v,r,o,!1,null,"2f5db2d3",null),b=g.exports;c()(g,{VAvatar:u["a"],VCard:d["a"],VCardText:m["c"],VCardTitle:m["d"],VTimeline:p["a"],VTimelineItem:f["a"]});var h=a("5014"),x=a.n(h),_={name:"HelloWorld",data:function(){return{}},components:{Timeline:b}};function w(t){var e=t.target,a=(parseFloat(e.getAttribute("data-x"))||0)+t.dx,n=(parseFloat(e.getAttribute("data-y"))||0)+t.dy;e.style.webkitTransform=e.style.transform="translate("+a+"px, "+n+"px)",e.setAttribute("data-x",a),e.setAttribute("data-y",n)}x()(".draggable").draggable({inertia:!0,modifiers:[x.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})],autoScroll:!0,listeners:{move:w,end:function(t){var e=t.target.querySelector("p");e&&(e.textContent="moved a distance of "+Math.sqrt(Math.pow(t.pageX-t.x0,2)+Math.pow(t.pageY-t.y0,2)|0).toFixed(2)+"px")}}}),window.dragMoveListener=w;var y=_,C=(a("cd57"),Object(s["a"])(y,n,i,!1,null,"4deecb36",null));e["default"]=C.exports;c()(C,{VCard:d["a"],VCardText:m["c"]})}});
//# sourceMappingURL=app.fcbe205c.js.map