(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79563d1b"],{"076a":function(t,a,e){},"163d":function(t,a,e){"use strict";var i=e("e7ad"),r=e("e042"),n=e("75c4"),s=e("1e5b"),o=e("94b3"),c=e("238a"),v=e("2ea2").f,d=e("dcb7").f,l=e("064e").f,_=e("777a").trim,p="Number",f=i[p],h=f,u=f.prototype,g=n(e("e005")(u))==p,m="trim"in String.prototype,w=function(t){var a=o(t,!1);if("string"==typeof a&&a.length>2){a=m?a.trim():_(a,3);var e,i,r,n=a.charCodeAt(0);if(43===n||45===n){if(e=a.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(a.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+a}for(var s,c=a.slice(2),v=0,d=c.length;v<d;v++)if(s=c.charCodeAt(v),s<48||s>r)return NaN;return parseInt(c,i)}}return+a};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof f&&(g?c((function(){u.valueOf.call(e)})):n(e)!=p)?s(new h(w(a)),e,f):w(a)};for(var y,b=e("149f")?v(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;b.length>x;x++)r(h,y=b[x])&&!r(f,y)&&l(f,y,d(h,y));f.prototype=u,u.constructor=f,e("bf16")(i,p,f)}},"2f04":function(t,a,e){"use strict";var i=e("076a"),r=e.n(i);r.a},"530f":function(t,a,e){"use strict";e.d(a,"a",(function(){return l}));e("6f84"),e("163d"),e("9a33");var i=[],r=[],n={},s=!0,o=[];function c(t){for(var a=[],e=0;e<t.length;e++){var i=t[e].col1.split("_");a.push({x:Number(i[0]),y:Number(i[1]),num:t[e].col2,id:e+1,if_draw:t[e].if_draw})}return a}function v(t){t}function d(){o=" "}function l(t){this.grad=p(t.color),this.data=c(t.data),this.max=this.data[0]?this.data[0].num:0,this.zIndex=0}l.prototype=new BMap.Overlay,l.prototype.initialize=function(t){this.map=t;var a=this.canvas=document.createElement("canvas");a.style.cssText="position:absolute;left:0;top:0;z-index:"+this.zIndex+";",this.adjustSize(),t.getPanes().mapPane.appendChild(a);var e=this;return t.addEventListener("resize",(function(){e.adjustSize(),e.draw()})),this.canvas};var _=function(t,a){for(var e=0,i=a.x,r=a.y,n=0;n<t.length;n++){var s=t[n].r/2,o=t[n].x,c=t[n].y,v=o-i,d=c-r;if(v*v+d*d<s*s){e=t[n].codex+"_"+t[n].codey;break}}return e};function p(t){var a=document.createElement("canvas"),e=a.getContext("2d"),i=e.createLinearGradient(0,0,0,256);for(var r in a.width=1,a.height=256,t)i.addColorStop(r,t[r]);return e.fillStyle=i,e.fillRect(0,0,1,256),e.getImageData(0,0,1,256).data}l.prototype.updata=function(t,a,e){0==t.length?(this.data=[],this.max=0):(e?this.data=t:(o="",this.data=c(t)),v(this.data),this.max=this.data[0].num),r=[],this.draw(),a&&this.getblock()},l.prototype.adjustSize=function(){var t=this.map.getSize(),a=this.canvas;a.width=t.width,a.height=t.height},l.prototype.draw=function(){if(!s)return!1;var t=this.map,a=t.getSize(),e=t.getCenter();if(e){var i=t.pointToOverlayPixel(e);this.canvas.style.left=i.x-a.width/2+"px",this.canvas.style.top=i.y-a.height/2+"px",this.dispatchEvent("draw"),this.hb()}},l.prototype.clear=function(){var t=this.canvas.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height)},l.prototype.hb=function(){var t=this.map,a=this.canvas.getContext("2d");a.clearRect(0,0,a.canvas.width,a.canvas.height);var e=t.getZoom(),n=Math.pow(2,18-e),s=400/n,c=s-1,v=this.grad,d=t.getMapType().getProjection(),l=d.lngLatToPoint(t.getCenter()),_=new BMap.Pixel(l.x-t.getSize().width/2*n,l.y+t.getSize().height/2*n),p=this.data,f=p.length,h=this.max;a.textBaseline="middle",a.textAlign="center";h=0;var u=1e10,g=0;for(var m in p)p[m].num>h&&(h=p[m].num),p[m].num<u&&(u=p[m].num),g=h-u;var w=u+.7*g,y=u+.6*g,b=u+.5*g,x=u+.4*g;m=0;i=[];for(m=0;m<f;m++){a.beginPath();var C,M=(p[m].x-_.x)/n,I=(_.y-p[m].y)/n,S=p[m].num,T=p[m].x+"_"+p[m].y;0!=g&&(S==h?C=1:S>=w?C=.99:S>=y?C=.95:S>=b?C=.8:S>=x?C=.7:S<x&&(C=.5));for(var N=0;N<r.length;N++)if(T==r[N]){C=.1;break}C>1&&(C=2),C*=255,C=parseInt(C,10),C*=4;var P="rgba("+v[C]+", "+v[C+1]+", "+v[C+2]+",0.6)";a.fillStyle=T==o?"#FAFAFA":P,!0!==p[m].if_draw&&(a.fillStyle="rgba(0,0,0,0)"),a.moveTo(M,I-c/2),a.lineTo(M+c/2,I-c/4),a.lineTo(M+c/2,I+c/4),a.lineTo(M,I+c/2),a.lineTo(M-c/2,I+c/4),a.lineTo(M-c/2,I-c/4),a.lineTo(M,I-c/2),a.fill();for(N=0;N<r.length;N++)T==r[N]&&(a.lineWidth=4,a.strokeStyle="blue",a.stroke());T==o&&(a.lineWidth=4,a.strokeStyle="red",a.stroke());var k=[];k.push({x:M,y:I,r:c,codex:p[m].x,codey:p[m].y}),i.push(k[k.length-1]),e>14&&(a.fillStyle="#333",a.fillText(m+1,M,I)),a.closePath()}},l.prototype.getblock=function(){var t=this.map,a=(this.data,this);n={},t.addEventListener("click",(function(t){var e=t.jb.x,s=t.jb.y,o={x:e,y:s};for(var c in code=_(i,o),1!=t.ctrlKey&&1!=n[code]&&(n={}),0!=code&&1!=t.ctrlKey?n[code]?n={}:n[code]=1:0==code||1!=t.ctrlKey?n={}:t.ctrlKey&&(1==n[code]?delete n[code]:n[code]=1),r=[],n)r.push(c);d(),a.draw(),floating.select_block(r)}))}},6153:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-sm-12 col-xs-12 noPadding"},[e("el-card",[e("div",{staticClass:"row"},[e("div",{staticClass:"row conditionDiv"},[e("div",{staticClass:"conditionTitle"},[e("span",[t._v("来源地:")])]),t._v(" "),e("div",{staticClass:"top_search",staticStyle:{"margin-left":"10px",float:"left"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"核心商圈"}})])]),t._v(" "),e("div",{staticClass:"conditionTitle"},[e("span",[t._v("时间:")])]),t._v(" "),e("div",{staticClass:"conditionContent"},[e("div",{staticClass:"pull-right",staticStyle:{background:"#fff",cursor:"pointer",padding:"5px 10px",border:"1px solid #ccc"},attrs:{id:"reportrange"}},[e("i",{staticClass:"glyphicon glyphicon-calendar fa fa-calendar"}),t._v(" "),e("span",[t._v("December 30, 2014 - January 28, 2015")]),t._v(" "),e("b",{staticClass:"caret"})])]),t._v(" "),e("div",{staticClass:"conditionTitle"},[e("span",[t._v("常驻地:")])]),t._v(" "),e("div",{staticClass:"conditionContent"},[e("div",{staticClass:"btn-group",attrs:{"data-toggle":"buttons"}},[e("label",{staticClass:"btn btn-default",attrs:{"data-toggle-class":"btn-primary","data-toggle-passive-class":"btn-default"},on:{click:function(a){return t.changeUNIT()}}},[t._v("居住地")]),t._v(" "),e("label",{staticClass:"btn btn-default",attrs:{"data-toggle-class":"btn-primary","data-toggle-passive-class":"btn-default"},on:{click:function(a){return t.drawHeatMap()}}},[t._v("工作地")])])])])])])],1)]),t._v(" "),e("div",{staticClass:"row imageRow"},[e("div",{staticClass:"col-md-12 col-sm-12 col-xs-12 noPadding"},[e("el-card",{staticClass:"imageMap"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"bm-view",attrs:{id:"firePowerMap"}})]),t._v(" "),e("div",{staticClass:"sourceTable col-md-4"},[e("div",{staticClass:"floatHide",on:{mouseover:t.selectFloatHide,mouseout:t.outFloatHide}},[e("i",{staticClass:"float_hide el-icon-d-arrow-right"})]),t._v(" "),e("div",{staticClass:"x_content"},[e("table",{staticClass:"table table-striped"},[e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("小区名称")]),t._v(" "),e("th",[t._v("活跃度")]),t._v(" "),e("th",[t._v("渗透率")]),t._v(" "),e("th",[t._v("平均年龄")])])]),t._v(" "),e("tbody",[e("tr",[e("th",{attrs:{scope:"row"}},[t._v("1")]),t._v(" "),e("td",[t._v("小区名称1")]),t._v(" "),e("td",[t._v("68.11%")]),t._v(" "),e("td",[t._v("68.11%")]),t._v(" "),e("th",[t._v("32岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("2")]),t._v(" "),e("td",[t._v("小区名称2")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("3")]),t._v(" "),e("td",[t._v("小区名称3")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("4")]),t._v(" "),e("td",[t._v("小区名称4")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("5")]),t._v(" "),e("td",[t._v("小区名称5")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("6")]),t._v(" "),e("td",[t._v("小区名称6")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("7")]),t._v(" "),e("td",[t._v("小区名称7")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("8")]),t._v(" "),e("td",[t._v("小区名称8")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("9")]),t._v(" "),e("td",[t._v("小区名称9")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])]),t._v(" "),e("tr",[e("th",{attrs:{scope:"row"}},[t._v("10")]),t._v(" "),e("td",[t._v("小区名称10")]),t._v(" "),e("td",[t._v("52.42%")]),t._v(" "),e("td",[t._v("52.42$")]),t._v(" "),e("td",[t._v("36岁")])])])])])])])],1)])])},r=[],n=(e("9a33"),e("530f")),s=(e("354f"),e("89e3"),{data:function(){return{mapFlag:!1}},methods:{selectFloatHide:function(){},outFloatHide:function(){},_getMapData:function(){var t=new BMap.Map("firePowerMap"),a=new BMap.Point(116.404,39.915);t.centerAndZoom(a,15),t.setCurrentCity("北京"),t.enableScrollWheelZoom(!0),window.map=t},changeUNIT:function(){map.clearOverlays();for(var t=["120.210704,30.20676"],a=0;a<t.length;a++){var e=t[a].split(",")[0],i=t[a].split(",")[1],r=new BMap.Point(e,i),n=new BMap.Icon("@/assets/images/marker_red_sprite1.png",new BMap.Size(24,24)),s=new BMap.Marker(r,{icon:n});map.addOverlay(s)}},drawHeatMap:function(){map.clearOverlays();var t=new n["a"]({data:[],color:{.5:"#fdc387",.7:"#f1c232",.8:"#ffff00",.95:"#ff5454",.99:"#980000",1:"#ff0000"}});map.addOverlay(t);for(var a=[],e=["13382000_3508700","13381800_3508400","13382000_3508100","13382200_3508400","13382400_3508100","13382400_3508700","13381600_3508100","13381800_3509000","13381600_3508700","13381000_3509000"],i=1;i<=10;i++)a.push({col1:e[i-1],col2:i,if_draw:!0});t.updata(a);var r="13382000_3508700".split("_",2),s=(new BMap.MercatorProjection,map.getMapType().getProjection().pointToLngLat({x:r[0],y:r[1]})),o=new BMap.Point(s.lng,s.lat);map.setCenter(o)}},mounted:function(){this._getMapData(),this.drawHeatMap()},created:function(){}}),o=s,c=(e("2f04"),e("4023")),v=Object(c["a"])(o,i,r,!1,null,"f27fc184",null);a["default"]=v.exports},"6f84":function(t,a,e){var i=e("e46b");i(i.P,"Array",{fill:e("b88d")}),e("0e8b")("fill")},"777a":function(t,a,e){var i=e("e46b"),r=e("f6b4"),n=e("238a"),s=e("9769"),o="["+s+"]",c="​",v=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),l=function(t,a,e){var r={},o=n((function(){return!!s[t]()||c[t]()!=c})),v=r[t]=o?a(_):s[t];e&&(r[e]=v),i(i.P+i.F*o,"String",r)},_=l.trim=function(t,a){return t=String(r(t)),1&a&&(t=t.replace(v,"")),2&a&&(t=t.replace(d,"")),t};t.exports=l},9769:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},b88d:function(t,a,e){"use strict";var i=e("008a"),r=e("f58a"),n=e("eafa");t.exports=function(t){var a=i(this),e=n(a.length),s=arguments.length,o=r(s>1?arguments[1]:void 0,e),c=s>2?arguments[2]:void 0,v=void 0===c?e:r(c,e);while(v>o)a[o++]=t;return a}}}]);