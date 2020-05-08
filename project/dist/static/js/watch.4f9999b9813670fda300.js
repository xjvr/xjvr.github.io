webpackJsonp([1],{"4ml/":function(e,t){},AvlJ:function(e,t){},eOoE:function(e,t,o){"use strict";var a=o("7+uW"),i=o("mtWM"),r=o.n(i);a.a.prototype.$axios=r.a,t.a={}},sFu6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("7+uW"),i=o("eOoE"),r=o("Fd2+"),n=(o("4ml/"),o("ppUw")),s=o.n(n),c=o("rnZi"),d=o.n(c),l=o("SGD2"),v=o.n(l),u={name:"Home",components:{},data:function(){return{showErr:!1,latitude:"",longitude:"",err:"",cameraWidth:0,cameraHeight:0}},mounted:function(){navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia?this.initVideo({video:{height:800,facingMode:{exact:"environment"}}}):alert("你的浏览器不支持访问用户媒体设备")},methods:{getLocation:function(){var e=this;this.$getLocation().then(function(t){console.warn("首页获取位置成功",t),e.latitude=t.lat,e.longitude=t.lng}).catch(function(e){console.error("首页获取位置失败",e)}),navigator.geolocation?navigator.geolocation.getCurrentPosition(this.showPosition,this.showError):(this.err="Geolocation is not supported by this browser.",console.log("此浏览此不支持定位"),this.showErr=!0)},showPosition:function(e){this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,this.showErr=!1},showError:function(e){switch(e.code){case e.PERMISSION_DENIED:console.log("User denied the request for Geolocation."),this.err="定位权限获取失败";break;case e.POSITION_UNAVAILABLE:console.log("Location information is unavailable."),this.err="定位信息获取失败";break;case e.TIMEOUT:console.log("The request to get user location timed out."),this.err="获取定位超时";break;case e.UNKNOWN_ERROR:console.log("An unknown error occurred."),this.err="发生未知错误"}this.showErr=!0},initVideo:function(e){navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(e).then(this.videoSuccess).catch(this.videoError):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(e).then(this.videoSuccess).catch(this.videoError):navigator.mozGetUserMedia?navigator.mozGetUserMedia(e).then(this.videoSuccess).catch(this.videoError):navigator.getUserMedia&&navigator.getUserMedia(e).then(this.videoSuccess).catch(this.videoError)},videoSuccess:function(e){var t=this.$refs.video,o=this;t.srcObject=e,t.play(),t.oncanplay=function(){console.log("摄像头分辨率"),console.log(t.videoWidth,t.videoHeight),o.cameraWidth=t.videoWidth,o.cameraHeight=t.videoHeight,o.readImg()}},videoError:function(e){alert("访问用户媒体设备失败：",e.name,e.message),console.log("访问用户媒体设备失败：",e.name,e.message)},readImg:function(){var e=this.$refs.video,t=this.$refs.canvas,o=t.getContext("2d"),a=this,i=setInterval(function(){o.drawImage(e,0,0,a.cameraWidth,a.cameraHeight,0,0,478,850);var r=t.toDataURL();a.readBarcode(r,i);var n=o.getImageData(0,0,478,850);a.readQrcode(n.data,i)},1e3)},readBarcode:function(e,t){var o=this;v.a.decodeSingle({inputStream:{size:1920},locator:{patchSize:"medium",halfSample:!1},decoder:{readers:[{format:"code_128_reader",config:{}}]},locate:!0,src:e},function(e){e&&e.codeResult?(console.log(e.codeResult),clearInterval(t),o.$emit("ondata",e.codeResult.code)):console.log("正在扫条形码...not detected")})},readQrcode:function(e,t){var o=d()(e,478,850,{inversionAttempts:"dontInvert"});o?(clearInterval(t),this.$emit("ondata",o.data)):console.log("正在扫二维码...")}}},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticStyle:{margin:"16px"}},[o("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:function(t){return e.getLocation()}}},[e._v("获取定位")])],1),e._v(" "),o("van-cell-group",[o("van-cell",{attrs:{title:"经度"},scopedSlots:e._u([{key:"default",fn:function(){return[o("span",[e._v(e._s(e.latitude))])]},proxy:!0}])}),e._v(" "),o("van-cell",{attrs:{title:"纬度"},scopedSlots:e._u([{key:"default",fn:function(){return[o("span",[e._v(e._s(e.longitude))])]},proxy:!0}])}),e._v(" "),e.showErr?o("van-cell",{attrs:{title:"错误"},scopedSlots:e._u([{key:"default",fn:function(){return[o("span",[e._v(e._s(e.err))])]},proxy:!0}],null,!1,4277965029)}):e._e(),e._v(" "),o("div",{staticStyle:{margin:"16px"}},[o("van-button",{attrs:{round:"",block:"",type:"info"},on:{click:function(t){return e.getLocation()}}},[e._v("扫码签到")])],1)],1),e._v(" "),e._m(0),e._v(" "),o("video",{ref:"video",staticClass:"video-view",attrs:{autoplay:"",playsinline:"true","webkit-playsinline":"true"}}),e._v(" "),o("canvas",{ref:"canvas",staticStyle:{display:"none"},attrs:{width:"478",height:"850"}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"model"},[t("div",{staticClass:"scanner-view"},[t("div",{staticClass:"scanner-view-arrow arrow1"}),this._v(" "),t("div",{staticClass:"scanner-view-arrow arrow2"}),this._v(" "),t("div",{staticClass:"scanner-view-arrow arrow3"}),this._v(" "),t("div",{staticClass:"scanner-view-arrow arrow4"}),this._v(" "),t("div",{staticClass:"scanner-line"})])])}]};var g=o("VU/8")(u,h,!1,function(e){o("AvlJ")},"data-v-6d99a89d",null).exports;a.a.use(s.a),a.a.use(r.a),new a.a({render:function(e){return e(g)},axios:i.a}).$mount("#app")}},["sFu6"]);
//# sourceMappingURL=watch.4f9999b9813670fda300.js.map