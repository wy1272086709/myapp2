(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"08b6":function(e,t,n){"use strict";var o=n("acb0"),i=n.n(o);i.a},"179c":function(e,t,n){"use strict";(function(e){n("1fff");o(n("66fd"));var t=o(n("db90"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4be0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(n("edc3"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){n.e("common/tabbar").then(function(){return resolve(n("49c3"))}.bind(null,n)).catch(n.oe)},r=function(){n.e("common/vipinfo/vipinfo").then(function(){return resolve(n("2c19"))}.bind(null,n)).catch(n.oe)},s="wangquietforyou",a={data:function(){return{contentHeight:0,platform:0,isIphoneX:!1,marginTop:"",position:"fixed",isCanUse:e.getStorageSync("wx_user_info")||!0}},components:{tabBar:i,vipInfo:r},onShow:function(){if(2==this.platform){var e=getApp().globalData;1==e.isRecharge&&(console.log("loginRequest...."),this.loginRequest(!0))}},onShareAppMessage:function(){var e=getCurrentPages(),t=e[e.length-1],n=t.route;return{title:"个人中心",path:n,success:function(){},fail:function(){}}},onLoad:function(t){var n=e.getSystemInfoSync().windowHeight;console.log("winHeight",n),this.isIphoneX&&(n-=34);var o=getApp().globalData;this.isIphoneX=o.isIphoneX,this.platform=o.platform,console.log("platform",this.platform),this.contentHeight=n-60-60,console.log(n,this.contentHeight),console.log("onLoad....");var i=this.getUserInfoFromStorage();i.openid&&this.login(!1)},created:function(){e.showShareMenu({withShareTicket:!0}),console.log("created....")},computed:{userInfo:function(){return this.$store.getters.userInfo},level:function(){return this.$store.getters.userInfo.level?this.$store.getters.userInfo.level:0},dates:function(){var e=this.$store.getters.userInfo,t="";return e.start_time&&(t+=e.start_time+"~"),e.end_time&&(t+=e.end_time),console.log("dateStr",t),t}},methods:{personal_info:function(){e.navigateTo({url:"/pages/user/complaint"})},handleComplaint:function(){e.navigateTo({url:"/pages/user/complaint"})},upgrade_vip:function(){e.navigateTo({url:"/pages/user/upgrade_user_vip"})},copy_customer_wechat:function(){e.setClipboardData({data:s,success:function(t){e.getClipboardData({success:function(t){e.showToast({title:"复制成功"})}})}})},setUserInfo:function(e){this.$store.commit("setUserInfo",e)},login:function(t){t||e.showLoading({title:"登录中..."}),this.loginRequest(t)},loginRequest:function(t){var n=this;e.login({provider:"weixin",success:function(o){var i=o.code;t||e.hideLoading();var r=getApp().globalData,s=r.serverUri,a=r.auth,u=s+"?mod=user&ac=wx_user";e.getUserInfo({provider:"weixin",success:function(o){var s=o.userInfo;e.request({url:u,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{code:i,auth:a,nickname:s.nickName,avatarurl:s.avatarUrl,city:s.city,country:s.country,gender:s.gender,province:s.province},success:function(e){e=e.data.data;var o=e.id;s.uid=o,s.level=e.cid,e.start_time&&(s.start_time=e.start_time),e.end_time&&(s.end_time=e.end_time),e.openid&&(s.openid=e.openid),n.setUserInfo(s),n.setUserInfoToStrorage(s),t&&(r.isRecharge=0)}})},fail:function(){console.log("未授权")}})}})},setUserInfoToStrorage:function(t){var n=JSON.stringify(t);e.setStorage({key:"wx_userinfo",data:n,success:function(){console.log("wxSetUserInfo...success")},fail:function(){console.log("wxSetUserInfo...fail")}})},getUserInfoFromStorage:function(){var t=e.getStorageSync("wx_userinfo");return t?JSON.parse(t):""},wxGetUserInfo:function(e){this.login()}}};t.default=a}).call(this,n("543d")["default"])},"969a":function(e,t,n){"use strict";n.r(t);var o=n("4be0"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},a959:function(e,t,n){"use strict";var o={"uni-list":function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"967a"))},"uni-list-item":function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"fbe4"))}},i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},acb0:function(e,t,n){},db90:function(e,t,n){"use strict";n.r(t);var o=n("a959"),i=n("969a");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("08b6");var s,a=n("f0c5"),u=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=u.exports}},[["179c","common/runtime","common/vendor"]]]);