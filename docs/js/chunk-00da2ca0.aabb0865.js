(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00da2ca0"],{"0e8f":function(t,e,n){"use strict";n("20f6");var a=n("e8f2");e["a"]=Object(a["a"])("flex")},"1a89":function(t,e,n){},"3c11":function(t,e,n){t.exports=n.p+"img/face.50b71190.png"},"407e":function(t,e,n){"use strict";var a=n("1a89"),r=n.n(a);r.a},"8ce9":function(t,e,n){},af50:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-spacer"),a("app-content-title",{staticClass:"headline font-weight-black",attrs:{contentHtml:"이기수<br>Gisu Lee, B.E.<br>(Email: px201226@gmail.com)"}}),a("div",[a("v-container",{staticStyle:{"margin-top":"2.5%","margin-bottom":"2.5%"}},[a("v-row",{staticClass:"pa-3 d-none d-md-flex"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("my-profile"),a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"pink lighten-1",outlined:"outlined",to:"/contact"}},[a("v-icon",{attrs:{left:"left"}},[t._v("mdi-phone-hangup")]),t._v("Contact ")],1)],1)],1),a("v-col",{staticClass:"my-auto text-center",attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"grey lighten-2 face mx-auto",attrs:{src:n("3c11"),width:"200"}})],1)],1),a("v-row",{staticClass:"pa-3 d-md-none"},[a("v-col",{staticClass:"my-auto text-center",attrs:{cols:"12",md:"6"}},[a("v-img",{staticClass:"grey lighten-2 face mx-auto",attrs:{src:n("3c11"),width:"200"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("MyProfile"),a("br"),a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"pink lighten-1",outlined:"outlined",to:"/contact"}},[a("v-icon",{attrs:{left:"left"}},[t._v("mdi-phone-hangup")]),t._v("Contact ")],1)],1)],1)],1)],1)],1)],1)},r=[],o=n("c2b6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Education")]),n("v-divider"),n("div",{staticClass:"my-3 pl-3 about-me",domProps:{innerHTML:t._s(t.education)}}),n("br"),n("h1",[t._v("Work Experience")]),n("v-divider"),t._l(t.workExperinces,(function(e){return n("div",{key:e.company},[n("div",{staticClass:"my-3 pl-3"},[t._v(" "+t._s(e.date)+": "+t._s(e.position)+", "+t._s(e.company)+" ")]),t._l(e.contents,(function(e){return n("ul",{key:e},[n("div",{staticClass:"my-1 grey--text text--darken-2"},[t._v(t._s(e))])])})),n("br")],2)})),n("br")],2)},i=[],s={name:"Home",data:function(){return{education:"<p>\n                 <p>B.E.: 2014/03 ~ 2020/02</p>\n                <p>&nbsp;&nbsp; School of Computer Engineering</p>\n                <p>&nbsp;&nbsp; Pukyong National University, Busan, Republic of Korea<p>\n                \n                </p>",workExperinces:[{date:"2019/07 ~ 2019/08",position:"Intern",company:"(주)리커시브소프트, 해운대",contents:["IoT 시스템의 안드로이드 App과 웹서버와 블루투스 모듈과 연동"]}]}}},l=s,u=n("2877"),d=n("6544"),f=n.n(d),p=n("5530"),v=(n("8ce9"),n("7560")),m=v["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(p["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(p["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),b=Object(u["a"])(l,c,i,!1,null,null,null),g=b.exports;f()(b,{VDivider:m});var h={name:"layout-home",components:{MyProfile:g,AppContentTitle:o["a"]},data:function(){return{}}},y=h,C=(n("407e"),n("8336")),x=(n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0"),n("ade3")),j=(n("4b85"),n("2b0e")),_=n("d9f7"),O=n("80d2"),w=["sm","md","lg","xl"],k=function(){return w.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),S=function(){return w.reduce((function(t,e){return t["offset"+Object(O["m"])(e)]={type:[String,Number],default:null},t}),{})}(),E=function(){return w.reduce((function(t,e){return t["order"+Object(O["m"])(e)]={type:[String,Number],default:null},t}),{})}(),V={col:Object.keys(k),offset:Object.keys(S),order:Object.keys(E)};function B(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var N=new Map,$=j["default"].extend({name:"v-col",functional:!0,props:Object(p["a"])(Object(p["a"])(Object(p["a"])(Object(p["a"])({cols:{type:[Boolean,String,Number],default:!1}},k),{},{offset:{type:[String,Number],default:null}},S),{},{order:{type:[String,Number],default:null}},E),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var i=N.get(o);return i||function(){var t,e;for(e in i=[],V)V[e].forEach((function(t){var a=n[t],r=B(e,t,a);r&&i.push(r)}));var a=i.some((function(t){return t.startsWith("col-")}));i.push((t={col:!a||!n.cols},Object(x["a"])(t,"col-".concat(n.cols),n.cols),Object(x["a"])(t,"offset-".concat(n.offset),n.offset),Object(x["a"])(t,"order-".concat(n.order),n.order),Object(x["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),N.set(o,i)}(),t(n.tag,Object(_["a"])(a,{class:i}),r)}}),H=n("a523"),L=n("132d"),M=n("adda"),P=n("0fd9"),I=n("2fa4"),T=Object(u["a"])(y,a,r,!1,null,"5c7c695a",null);e["default"]=T.exports;f()(T,{VBtn:C["a"],VCol:$,VContainer:H["a"],VIcon:L["a"],VImg:M["a"],VRow:P["a"],VSpacer:I["a"]})},c2b6:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticStyle:{"background-color":"#ECEFF1"},attrs:{"my-3":"","py-3":""}},[n("v-container",[n("p",{staticStyle:{"line-height":"180%"},domProps:{innerHTML:t._s(t.contentHtml)}})])],1)},r=[],o={name:"app-content-title",props:["contentHtml","alignCenter"],data:function(){return{}}},c=o,i=n("2877"),s=n("6544"),l=n.n(s),u=n("a523"),d=n("0e8f"),f=Object(i["a"])(c,a,r,!1,null,null,null);e["a"]=f.exports;l()(f,{VContainer:u["a"],VFlex:d["a"]})}}]);
//# sourceMappingURL=chunk-00da2ca0.aabb0865.js.map