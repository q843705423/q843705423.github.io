(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[391],{33138:function(e,a,t){var i=t(23236);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=t(69333).A;n("128695ea",i,!0,{sourceMap:!1,shadowMode:!1})},50420:function(e,a,t){var i=t(72512);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=t(69333).A;n("61b9c43b",i,!0,{sourceMap:!1,shadowMode:!1})},16419:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var i,n={uniCard:t(77063).A},d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("uni-card",{staticClass:"view-title",attrs:{title:e.title}},[t("v-uni-text",{staticClass:"uni-body view-content"},[e._v(e._s(e.content))])],1)],1)},r=[],c={data:function(){return{title:"",content:""}},onLoad:function(e){this.title=e.title,this.content=e.content,uni.setNavigationBarTitle({title:e.title})}},o=c,l=(t(33138),t(18535)),u=(0,l.A)(o,d,r,!1,null,"b8613db8",null,!1,n,i),s=u.exports},77063:function(e,a,t){"use strict";var i;t.d(a,{A:function(){return s}});var n,d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":e.isFull,"uni-card--shadow":e.isShadow,"uni-card--border":e.border},style:{margin:e.isFull?0:e.margin,padding:e.spacing,"box-shadow":e.isShadow?e.shadow:""}},[e._t("cover",[e.cover?t("v-uni-view",{staticClass:"uni-card__cover"},[t("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:e.cover},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("cover")}}})],1):e._e()]),e._t("title",[e.title||e.extra?t("v-uni-view",{staticClass:"uni-card__header"},[t("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("title")}}},[e.thumbnail?t("v-uni-view",{staticClass:"uni-card__header-avatar"},[t("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:e.thumbnail,mode:"aspectFit"}})],1):e._e(),t("v-uni-view",{staticClass:"uni-card__header-content"},[t("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[e._v(e._s(e.title))]),e.title&&e.subTitle?t("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[e._v(e._s(e.subTitle))]):e._e()],1)],1),t("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("extra")}}},[e._t("extra",[t("v-uni-text",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))])])],2)],1):e._e()]),t("v-uni-view",{staticClass:"uni-card__content",style:{padding:e.padding},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("content")}}},[e._t("default")],2),t("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.onClick("actions")}}},[e._t("actions")],2)],2)},r=[],c={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(e){this.$emit("click",e)}}},o=c,l=(t(50420),t(18535)),u=(0,l.A)(o,d,r,!1,null,"226d96c2",null,!1,i,n),s=u.exports},23236:function(e,a,t){"use strict";t.r(a);var i=t(31601),n=t.n(i),d=t(76314),r=t.n(d),c=r()(n());c.push([e.id,"uni-page-body[data-v-b8613db8]{background-color:#fff}body.?%PAGE?%[data-v-b8613db8]{background-color:#fff}.view-title[data-v-b8613db8]{font-weight:700}.view-content[data-v-b8613db8]{font-size:%?26?%;padding:12px 5px 0;color:#333;line-height:24px;font-weight:400}",""]),a["default"]=c},72512:function(e,a,t){"use strict";t.r(a);var i=t(31601),n=t.n(i),d=t(76314),r=t.n(d),c=r()(n());c.push([e.id,'@charset "UTF-8";\n/**\n * uni-app内置的常用样式变量\n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-card[data-v-226d96c2]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-226d96c2]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-226d96c2]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-226d96c2]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-226d96c2]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-226d96c2]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-226d96c2]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-226d96c2]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-226d96c2]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-226d96c2]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-226d96c2]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-226d96c2]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-226d96c2]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-226d96c2]{font-size:12px}.uni-card--border[data-v-226d96c2]{border:1px solid #ebeef5}.uni-card--shadow[data-v-226d96c2]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,65%,.2)}.uni-card--full[data-v-226d96c2]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-226d96c2]:after{border-radius:0}.uni-ellipsis[data-v-226d96c2]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),a["default"]=c}}]);