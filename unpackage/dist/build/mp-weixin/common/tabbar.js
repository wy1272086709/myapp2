(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/tabbar"],{"159d":function(t,a,e){"use strict";var n=e("20b3"),i=e.n(n);i.a},"20b3":function(t,a,e){},"49c3":function(t,a,e){"use strict";e.r(a);var n=e("636e"),i=e("a113");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("159d");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);a["default"]=u.exports},5109:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{bottom:0,tabList:[{pagePath:"/pages/index/index",iconPath:"/static/img/tabbar/love_huashu.png",text:"恋爱话术",hoverPath:"/static/img/tabbar/love_huashu_active.png",defaultClass:"tabbar-icon-class"},{pagePath:"/pages/cases/index",iconPath:"/static/img/tabbar/love_skills.png",text:"恋爱技巧",hoverPath:"/static/img/tabbar/love_skills_active.png",defaultClass:"tabbar-icon-class"},{pagePath:"/pages/user/index",iconPath:"/static/img/tabbar/user.png",text:"个人中心",hoverPath:"/static/img/tabbar/user_active.png",defaultClass:"tabbar-icon-class"}]}},computed:{curPosition:function(){return console.log("position",this.position),this.position}},mounted:function(){getApp().globalData.isIphoneX&&(this.bottom=34)},methods:{switchTab:function(a){var e=this.tabList[a].pagePath;t.switchTab({url:e})}},props:{position:{type:String,default:"relative"},current:{type:[Number,String],default:0},backgroundColor:{type:String,default:"#fbfbfb"},color:{type:String,default:"#999"},tintColor:{type:String,default:"#42b983"}}};a.default=e}).call(this,e("543d")["default"])},"636e":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement;t._self._c},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},a113:function(t,a,e){"use strict";e.r(a);var n=e("5109"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'common/tabbar-create-component',
    {
        'common/tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("49c3"))
        })
    },
    [['common/tabbar-create-component']]
]);