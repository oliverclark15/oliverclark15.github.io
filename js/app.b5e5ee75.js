(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00a0":function(t,e,a){"use strict";var n=a("1038"),r=a.n(n);e["default"]=r.a},1038:function(t,e){console.log("hi")},"16ff":function(t,e,a){},"2d77":function(t,e,a){t.exports=a.p+"img/workerw.edd6b0ab.png"},3109:function(t,e,a){t.exports=a.p+"img/baby.1572f35d.jpg"},"513c":function(t,e,a){t.exports=a.p+"img/distributed.222b403e.png"},5643:function(t,e,a){"use strict";var n=a("d5fb"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header",{staticClass:"font",on:{tabchange:t.update}}),1===t.tab?a("Projects"):2===t.tab?a("Contact"):a("About")],1)},i=[],o=a("f820"),s=a("b8fa"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"900"}},[a("v-card-text",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{multiple:"",color:"#356859",light:"",group:"",tile:"",rounded:""},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-python")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-java")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-c")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-language-javascript")])],1)],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-row",t._l(t.filteredProjects,(function(t){return a("v-col",{key:t.title,staticClass:"mx-auto",attrs:{cols:t.flex}},[a("ProjectCard",{attrs:{card:t}})],1)})),1)],1)],1)],1)},l=[],u=(a("4160"),a("caad"),a("2532"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mt-8",attrs:{"max-width":"344"}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.card.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}}),a("v-card-title",{staticClass:"text"},[t._v(" "+t._s(t.card.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(t.card.subtitle)+" ")]),a("v-card-actions",[t._l(t.card.actions,(function(e){return a("v-btn",{key:e,attrs:{color:"#356859",text:"",href:e.link,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])})),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],2),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v(" "+t._s(t.card.details)+" ")])],1)])],1)}),d=[],p={data:function(){return{show:!1}},props:{card:Object}},f=p,v=(a("7918"),a("2877")),m=a("6544"),b=a.n(m),g=a("8336"),h=a("b0af"),x=a("99d9"),_=a("ce7e"),y=a("0789"),C=a("132d"),w=a("adda"),k=a("2fa4"),V=Object(v["a"])(f,u,d,!1,null,"18afa20f",null),j=V.exports;b()(V,{VBtn:g["a"],VCard:h["a"],VCardActions:x["a"],VCardSubtitle:x["b"],VCardText:x["c"],VCardTitle:x["d"],VDivider:_["a"],VExpandTransition:y["a"],VIcon:C["a"],VImg:w["a"],VSpacer:k["a"]});var S={data:function(){return{cards:[{title:"Oliver's Room",subtitle:"an arcade style platformer implemented using PyGame",src:a("d9e5"),flex:6,details:"WORK IN PROGRESS: Oliver's Room is an arcade style platformer game including multiple levels, enemies, and consumables. The game was implemented in Python using the PyGame module",tag:0,actions:[{title:"GitHub",link:"https://github.com/oliverclark15/arcade-game"}]},{title:"Capstone Research Paper",subtitle:'Authored "Can Duplicate Posts on Stack Overflow Benefit the Software Development Community?" an original research paper alongside fellow McGill undergraduates, graduatates, and a professor.',src:a("c405"),flex:6,details:"Authored an original paper on duplicate questions on popular developer Q&A site Stack Overflow. The paper was selected for publication at the IEEE/ACM International Conference on Mining Software Repositories. Finally, the paper won the Best Student Presentation award at the conference. ",tag:0,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"},{title:"IEEE",link:""}]},{title:"Tablut Agent",subtitle:"A Tablut (Viking Chess) game playing agent written in Java",src:a("9274"),flex:6,details:"Tablut agent implented using an Minimax search algorithm with alpha-beta pruning in Java. The agent performed in the top 20% of agents competing against 150+ classmates.",tag:1,actions:[{title:"PDF",link:"/tablut_report.pdf"}]},{title:"Distributed RMS",subtitle:"A distributed reservation system implemented in Java",src:a("513c"),flex:6,details:"A distributed reservation system to allow a user to reserve flights, cars, rooms, or some combination of the three. The system was implemented in Java over TCP, using strict 2-phase locking,  2-phase commits, and shadowing protocols.",tag:1,actions:[{title:"GitHub",link:"https://github.com/metchel/Comp100000000Project"},{title:"PDF",link:"/512_report.pdf"}]},{title:"budgety",subtitle:"An expense reporting web application written in JavaScript",src:a("7728"),flex:6,details:"WORK IN PROGRESS:  A full stack budgeting web application using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack. This application allows users to track expenses and provides spending analytics and useful information to the user",tag:3,actions:[{title:"PDF",link:"http://rebels.ece.mcgill.ca/papers/msr2019_abric.pdf"}]},{title:"Rendering System",subtitle:"A rendering system built on top of TinyRender implemented in C++.",src:a("8fe4"),flex:6,details:"Implemented several different path tracers, lighting models, GLSL shaders to produce brilliant outputs",tag:2,actions:[]}],show:!1,toggle_exclusive:[0,1,2,3]}},components:{ProjectCard:j},computed:{filteredProjects:function(){var t=this,e=[];return this.cards.forEach((function(a){t.toggle_exclusive.includes(a.tag)&&(console.log(t.toggle_exclusive),e.push(a))})),e}}},P=S,O=a("a609"),T=a("62ad"),E=a("a523"),A=a("0fd9"),R=Object(v["a"])(P,c,l,!1,null,"7d6bc525",null),I=R.exports;b()(R,{VBtn:g["a"],VBtnToggle:O["a"],VCard:h["a"],VCardText:x["c"],VCol:T["a"],VContainer:E["a"],VIcon:C["a"],VRow:A["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"basil"},on:{tabchange:function(e){return t.console.log("hi")}}},[a("v-card-title",{staticClass:"text-center justify-center py-6"},[a("h1",{staticClass:"font-weight-bold basil--text font big"},[t._v("oliver clark")])]),a("v-card-subtitle",{staticClass:"text-center justify-center py-6"},[a("h1",{staticClass:"font-weight-bold basil--text"},[t._v("software engineer")])]),a("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},on:{change:function(e){return t.$emit("tabchange",t.tab)}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e){return a("v-tab",{key:e},[t._v(t._s(e))])})),1)],1)},G=[],B={name:"Header",components:{},data:function(){return{isActive:"OC",tab:0,items:["About","Projects","Contact"]}},props:["tabs"]},D=B,$=(a("cf08"),a("71a3")),H=a("fe57"),J=Object(v["a"])(D,M,G,!1,null,"847e6e00",null),N=J.exports;b()(J,{VCard:h["a"],VCardSubtitle:x["b"],VCardTitle:x["d"],VTab:$["a"],VTabs:H["a"]});var F={name:"App",components:{About:o["default"],Contact:s["default"],Projects:I,Header:N},data:function(){return{tab:0}},methods:{update:function(t){this.tab=t}}},W=F,L=(a("a8dc"),a("7496")),K=Object(v["a"])(W,r,i,!1,null,"d5ee9844",null),Q=K.exports;b()(K,{VApp:L["a"]});a("d3b7");var U=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"})},z=[],X={name:"Home",components:{}},Y=X,Z=Object(v["a"])(Y,q,z,!1,null,null,null),tt=Z.exports;n["a"].use(U["a"]);var et=[{path:"/",name:"Home",component:tt},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}}],at=new U["a"]({routes:et}),nt=at,rt=a("f309");n["a"].use(rt["a"]);var it=new rt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:nt,vuetify:it,render:function(t){return t(Q)}}).$mount("#app")},6073:function(t,e,a){t.exports=a.p+"img/mcgill_badge.4975785f.png"},"6f42":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"https://linkedin.com/in/oliverclark15",target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-linkedin")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"https://github.com/oliverclark15",target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-github")])],1)],1),a("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"dark",href:"mailto:oliverclark15@gmail.com"}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-email")])],1)],1)],1)],1)},r=[]},7728:function(t,e,a){t.exports=a.p+"img/bud.548ef8db.jpg"},7918:function(t,e,a){"use strict";var n=a("f6d3"),r=a.n(n);r.a},"8c73":function(t,e,a){},"8fe4":function(t,e,a){t.exports=a.p+"img/cubebox.4297bb2b.png"},9100:function(t,e,a){t.exports=a.p+"img/capw.7bf54ab3.png"},9274:function(t,e,a){t.exports=a.p+"img/Tablut_board.svg.1ba64697.png"},"92cd":function(t,e,a){},a8dc:function(t,e,a){"use strict";var n=a("8c73"),r=a.n(n);r.a},b8fa:function(t,e,a){"use strict";var n=a("6f42"),r=a("00a0"),i=a("2877"),o=a("6544"),s=a.n(o),c=a("8336"),l=a("62ad"),u=a("a523"),d=a("132d"),p=a("0fd9"),f=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=f.exports,s()(f,{VBtn:c["a"],VCol:l["a"],VContainer:u["a"],VIcon:d["a"],VRow:p["a"]})},baa5:function(t,e,a){"use strict";var n=a("92cd"),r=a.n(n);r.a},c405:function(t,e,a){t.exports=a.p+"img/msr1.67a14962.png"},cf08:function(t,e,a){"use strict";var n=a("16ff"),r=a.n(n);r.a},d5fb:function(t,e,a){},d9e5:function(t,e,a){t.exports=a.p+"img/oliversrooms.7864b5f0.png"},e2b3:function(t,e,a){t.exports=a.p+"img/mitreorg.f5fd5903.jpg"},f6d3:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Life of Oliver")]),a("Timeline"),a("h1",[t._v("Present ")])],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",[n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("3109")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("August 1997")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Born")]),n("v-card-text",[t._v("Not much to say here")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("9100")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("June 2015")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Graduated High School")]),n("v-card-text",[t._v("wow, what a roller coaster :-)")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("e2b3")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Summer 2018")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Cyber Security Intern")]),n("v-card-text",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("e2b3")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Summer 2019")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Cyber Security Intern")]),n("v-card-text",[t._v("Working for the summer in the Cyber Resiliency department at the MITRE Corporation in Bedford, MA")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("6073")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("December 2019")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Graduated McGill University")]),n("v-card-text",[t._v("Bachelors of Software Engineering in Software Engineering from McGill University, Montreal, QC, Canada")])],1)],1),n("v-timeline-item",{attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:a("2d77")}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",{class:"headline"},[t._v("Present Day (2020)")])]},proxy:!0}])},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("Actively Seeking Employment :-)")]),n("v-card-text",[t._v("I am currently living at home, working at the family business. In my spare time I am trying to learn as much as possible, with specific focus on JavaScript and web development technologies")])],1)],1)],1)},o=[],s=(a("5643"),a("2877")),c=a("6544"),l=a.n(c),u=a("8212"),d=a("b0af"),p=a("99d9"),f=a("8414"),v=a("1e06"),m={},b=Object(s["a"])(m,i,o,!1,null,"4558f651",null),g=b.exports;l()(b,{VAvatar:u["a"],VCard:d["a"],VCardText:p["c"],VCardTitle:p["d"],VTimeline:f["a"],VTimelineItem:v["a"]});var h={name:"HelloWorld",data:function(){return{}},components:{Timeline:g}},x=h,_=(a("baa5"),a("a523")),y=Object(s["a"])(x,n,r,!1,null,"6c6f2ba5",null);e["default"]=y.exports;l()(y,{VContainer:_["a"]})}});
//# sourceMappingURL=app.b5e5ee75.js.map