webpackJsonp([2,0],[function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=o(54),i=s(n),r=o(53),a=s(r),u=o(139),c=s(u),l=o(56),d=s(l);window.router=a["default"],window.userinfo=null,window.$refs={},(0,d["default"])(),a["default"].start({store:i["default"],components:{App:c["default"]}},"body")},function(t,e,o){"use strict";var s=o(46),n={root:["RESET"],login:["_SUBMIT_"],register:["_SUBMIT_"],list:["LIST_LOADED","LIST_ERROR"],form:["_SAVE_"],widgets:["_LOAD_"]},i=(0,s.createActionType)(n);for(var r in i)e[r]=i[r]},,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={error:function(t){return{message:t,__timestamp__:Date.now()}},getParameter:function(t){var e=location.href,o=e.indexOf("?")+1;if(0===o)return"";for(var s="",n=e.substring(o),i=n.split("&"),r=0;r<i.length;r++){var a=i[r];o=a.indexOf("=");var u=a;o!==-1&&(u=a.substring(0,o)),t===u&&(o=a.indexOf("="),o!==-1&&(s=a.substring(o+1)))}return s},is:{email:function(t){var e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return e.test(t)},number:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},string:function(t){return"string"==typeof t},integer:function(t){return!isNaN(t)&&1*t===parseInt(t,10)},mobile:function(t){var e=/^1\d{10}$/;return e.test(t)},empty:function(t){return null===t||void 0===t||0===t.length}}};e["default"]=o},,,,,,,,,,,,,,,,,,,,function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function n(t){var e=t.indexOf("?")!==-1;return t+=(e?"&":"?")+"authid=x&authtoken=y"}function i(t,e){return fetch(t,e).then(function(t){return t.json()}).then(function(t){return t.success?{result:t.result,__timestamp__:Date.now()}:h["default"].reject(new Error((0,f["default"])(t.result)))})["catch"](function(t){return h["default"].reject({message:t.message,__timestamp__:Date.now()})})}function r(t,e,o,s){if(e=n(e),"GET"===t||"DELETE"===t){for(var r in o)o.hasOwnProperty(r)&&(e+="&"+r+"="+o[r]);return i(e,{method:t,credentials:"include"})}if(s&&s.length>0){var a=new FormData;for(var c in o)o.hasOwnProperty(c)&&a.append(c,o[c]);if(s){var d=!0,f=!1,p=void 0;try{for(var h,v=(0,l["default"])(s);!(d=(h=v.next()).done);d=!0){var m=h.value;a.append(m.name,m.file)}}catch(g){f=!0,p=g}finally{try{!d&&v["return"]&&v["return"]()}finally{if(f)throw p}}}return i(e,{method:t,credentials:"include",body:a})}var w=(0,u["default"])(o).map(function(t){return t+"="+encodeURIComponent(o[t])}).join("&");return i(e,{method:t,credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:w})}Object.defineProperty(e,"__esModule",{value:!0});var a=o(75),u=s(a),c=o(10),l=s(c),d=o(73),f=s(d),p=o(76),h=s(p);o(158),e["default"]={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r("GET",t,e)},"delete":function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r("DELETE",t,e)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r("POST",t,e)},upload:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2];return r("POST",t,e,o)},put:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2];return r("PUT",t,e,o)}}},,,,,,,,,,,,,,,function(t,e,o){var s,n,i={};s=o(70),n=o(136),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},,,function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.save=void 0;var n=o(1),i=o(29),r=s(i);e.save=function(t,e){var o=t.dispatch;o(n.form.SAVE_REQUEST),setTimeout(function(){r["default"].get("/static/assets/form.json",e).then(function(t){return o(n.form.SAVE_SUCCESS,t)})["catch"](function(t){return o(n.form.SAVE_FAILURE,t)})},1e3)}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setupData=void 0;var n=o(1),i=o(9),r=s(i);e.setupData=function(t,e){var o=t.dispatch,s=e.result;e.success?o(n.list.LIST_LOADED,{items:s.items,page:s.page}):o(n.list.LIST_ERROR,r["default"].error(s.message))}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.load=void 0;var s=o(1);e.load=function(t){var e=t.dispatch;e(s.widgets.LOAD_REQUEST),setTimeout(function(){e(s.widgets.LOAD_SUCCESS,!0)},2e3)}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=o(19),r=s(i),a=o(5),u=s(a),c=o(1),l={error:void 0,saveResp:void 0,isLoading:!1,userinfo:{email:"jkguang@126.com"}},d=(0,u["default"])({},l),f=(n={},(0,r["default"])(n,c.root.RESET,function(t){(0,u["default"])(t,d)}),(0,r["default"])(n,c.form.SAVE_REQUEST,function(t){t.isLoading=!0}),(0,r["default"])(n,c.form.SAVE_SUCCESS,function(t,e){t.isLoading=!1,t.saveResp=e}),(0,r["default"])(n,c.form.SAVE_FAILURE,function(t,e){t.error=e,t.isLoading=!1}),n);e["default"]={state:l,mutations:f}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=o(19),r=s(i),a=o(10),u=s(a),c=o(5),l=s(c),d=o(1),f=o(55),p={error:void 0,items:[],codeurl:{}},h=(0,l["default"])({},p),v=(n={},(0,r["default"])(n,d.root.RESET,function(t){(0,l["default"])(t,h)}),(0,r["default"])(n,d.list.LIST_LOADED,function(t,e){var o=e.items,s=e.page,n=void 0===s?1:s;1===n&&(t.items=[]);var i=!0,r=!1,a=void 0;try{for(var c,l=(0,u["default"])(o);!(i=(c=l.next()).done);i=!0){var d=c.value;d.createdAt=new Date(d.created_at).format("yyyy.MM.dd"),d.statusLabel=(0,f.getOrderStatusLabel)(d.status),t.items.push(d)}}catch(p){r=!0,a=p}finally{try{!i&&l["return"]&&l["return"]()}finally{if(r)throw a}}}),(0,r["default"])(n,d.list.LIST_ERROR,function(t,e){t.error=e}),n);e["default"]={state:p,mutations:v}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n,i=o(19),r=s(i),a=o(5),u=s(a),c=o(1),l={isLoading:!1},d=(0,u["default"])({},l),f=(n={},(0,r["default"])(n,c.root.RESET,function(t){(0,u["default"])(t,d)}),(0,r["default"])(n,c.widgets.LOAD_REQUEST,function(t){t.isLoading=!0}),(0,r["default"])(n,c.widgets.LOAD_SUCCESS,function(t){t.isLoading=!1}),n);e["default"]={state:l,mutations:f}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(45),i=s(n),r=o(156),a=s(r),u=o(144),c=s(u),l=o(147),d=s(l),f=o(148),p=s(f),h=o(145),v=s(h),m=o(143),g=s(m),w=o(149),y=s(w);i["default"].use(a["default"]);var b=new a["default"]({history:!0});b.map({"/":{component:c["default"],subRoutes:{"/":{component:v["default"]},"/list":{component:v["default"]},"/form":{component:g["default"]},"/widgets":{component:y["default"]}}},"/login":{component:d["default"],auth:"no"},"/register":{component:p["default"],auth:"no"}}),b.redirect({"*":"/"}),e["default"]=b},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(45),i=s(n),r=o(157),a=s(r),u=o(51),c=s(u),l=o(50),d=s(l),f=o(52),p=s(f);i["default"].use(a["default"]);var h=!1;i["default"].config.debug=h,e["default"]=new a["default"].Store({modules:{list:c["default"],form:d["default"],widgets:p["default"]},strict:h})},function(t,e){"use strict";function o(t){var e="";switch(t){case 0:e='<div class="label label-yellow">'+s[t]+"</div>";break;case 1:e='<div class="label label-green">'+s[t]+"</div>";break;case 2:e='<div class="label label-blue">'+s[t]+"</div>";break;case 3:e='<div class="label label-red">'+s[t]+"</div>"}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getOrderStatusLabel=o;var s={0:"Unpaid",1:"Success",2:"Refunded",3:"Failed"}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var t={};t.log=function(){},t.warn=function(){},t.error=function(){},window.console=t,$.fn.hasScrollBar=function(){return this.get(0).scrollHeight>this.height()},$.fn.serializeObject=function(){var t={},e=this.serializeArray();return $.each(e,function(){void 0!==t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t},Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in e)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[o]:("00"+e[o]).substr((""+e[o]).length)));return t}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(150),i=s(n),r=o(151),a=s(r),u=o(155),c=s(u);e["default"]={components:{Alert:i["default"],Confirm:a["default"],Toast:c["default"]},attached:function(){window.$refs.alert=this.$refs.alert,window.$refs.confirm=this.$refs.confirm,window.$refs.toast=this.$refs.toast},detached:function(){}}},function(t,e){"use strict"},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=o(10),i=s(n),r=o(1),a=o(47),u=o(9),c=s(u);t.exports={components:{},vuex:{getters:{error:function(t){var e=t.form;return e.error},isLoading:function(t){var e=t.form;return e.isLoading},userinfo:function(t){var e=t.form;return e.userinfo},saveResp:function(t){var e=t.form;return e.saveResp}},actions:{reset:function(t){var e=t.dispatch;return e(r.root.RESET)},save:a.save}},attached:function(){},detached:function(){this.reset()},watch:{error:function(t){t&&window.$refs.toast.error(t.message)},saveResp:function(t){t&&window.$refs.alert.success("save success")}},methods:{onFocus:function(t){var e=$(t.target);e.removeClass("error"),e.parent(".control").attr("aria-label","")},onBlur:function(t){this.checked(t)},checked:function(t){t=t||[".nickname",".address"],c["default"].is.string(t)&&(t=[t]);var e=$(this.$el),o=[],s=!0,n=!1,r=void 0;try{for(var a,u=(0,i["default"])(t);!(s=(a=u.next()).done);s=!0){var l=a.value,d=e.find(l).find("input, select").val();switch(e.find(l).find("input,select").removeClass("error"),l){case".nickname":if(c["default"].is.empty(d)){o.push({$el:e.find(l),message:"please input nickname"});break}break;case".address":if(c["default"].is.empty(d)){o.push({$el:e.find(l),message:"please input address"});break}}}}catch(f){n=!0,r=f}finally{try{!s&&u["return"]&&u["return"]()}finally{if(n)throw r}}if(0===o.length)return!0;var p=!0,h=!1,v=void 0;try{for(var m,g=(0,i["default"])(o);!(p=(m=g.next()).done);p=!0){var w=m.value;w.$el.find("input,select").addClass("error"),w.$el.velocity("callout.shake",380),w.$el.attr("aria-label",w.message)}}catch(f){h=!0,v=f}finally{try{!p&&g["return"]&&g["return"]()}finally{if(h)throw v}}return!1},onSave:function(){this.checked()&&this.save()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(141),i=s(n),r=o(140),a=s(r),u=o(142),c=s(u);e["default"]={name:"Index",components:{AppHeader:i["default"],AppFooter:a["default"],AppSidebar:c["default"]}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),i=o(152),r=s(i),a=o(48);e["default"]={components:{Infinite:r["default"]},vuex:{getters:{error:function(t){var e=t.list;return e.error},items:function(t){var e=t.list;return e.items}},actions:{reset:function(t){var e=t.dispatch;return e(n.root.RESET)},setupData:a.setupData}},attached:function(){this.$refs.infinite.refresh()},detached:function(){this.reset()},watch:{error:function(t){t&&window.$refs.toast.error(t.message)}},methods:{onDataLoaded:function(t){this.setupData(t)}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(153),i=s(n);e["default"]={components:{Modal:i["default"]},props:{title:String,codeurl:String},methods:{show:function(){this.$refs.modal.show()},onDismiss:function(){this.$refs.modal.dismiss()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(10),i=s(n),r=o(1),a=o(9),u=s(a);e["default"]={components:{},vuex:{getters:{error:function(t){var e=t.login;return e.error}},actions:{reset:function(t){var e=t.dispatch;return e(r.root.RESET)}}},attached:function(){},detached:function(){this.reset();var t=$(this.$el);t.find(".center-form input").val("").removeClass("error"),t.find(".center-form .control").attr("aria-label",""),t.find(".center-form").show(),t.find(".success-tip").hide()},watch:{},methods:{onFocus:function(t){var e=$(t.target);e.removeClass("error"),e.parent(".control").attr("aria-label","")},onBlur:function(t){this.checked(t)},checked:function(t){t=t||[".email",".passwd"],u["default"].is.string(t)&&(t=[t]);var e=$(this.$el),o=[],s=!0,n=!1,r=void 0;try{for(var a,c=(0,i["default"])(t);!(s=(a=c.next()).done);s=!0){var l=a.value,d=e.find(l).find("input,select").val();switch(e.find(l).find("input,select").removeClass("error"),l){case".email":if(u["default"].is.empty(d)){o.push({$el:e.find(l),message:"Please input email"});break}if(!u["default"].is.email(d)){o.push({$el:e.find(l),message:"email not correct"});break}break;case".passwd":if(u["default"].is.empty(d)){o.push({$el:e.find(l),message:"Please input password"});break}if(d.length<6||d.length>16){o.push({$el:e.find(l),message:"password len 6~16"});break}}}}catch(f){n=!0,r=f}finally{try{!s&&c["return"]&&c["return"]()}finally{if(n)throw r}}if(0===o.length)return!0;var p=!0,h=!1,v=void 0;try{for(var m,g=(0,i["default"])(o);!(p=(m=g.next()).done);p=!0){var w=m.value;w.$el.find("input,select").addClass("error"),w.$el.velocity("callout.shake",380),w.$el.attr("aria-label",w.message)}}catch(f){h=!0,v=f}finally{try{!p&&g["return"]&&g["return"]()}finally{if(h)throw v}}return!1},onSubmit:function(){this.checked()&&window.router.go("/")}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(10),i=s(n),r=o(1),a=o(9),u=s(a);e["default"]={components:{},vuex:{getters:{},actions:{reset:function(t){var e=t.dispatch;return e(r.root.RESET)}}},attached:function(){},detached:function(){this.reset();var t=$(this.$el);t.find(".center-form input").val("").removeClass("error"),t.find(".center-form .control").attr("aria-label",""),t.find(".center-form").show(),t.find(".success-tip").hide()},watch:{},methods:{onFocus:function(t){var e=$(t.target);e.removeClass("error"),e.parent(".control").attr("aria-label","")},onBlur:function(t){this.checked(t)},checked:function(t){t=t||[".email",".passwd",".passwd2"],u["default"].is.string(t)&&(t=[t]);var e=$(this.$el),o=[],s=!0,n=!1,r=void 0;try{for(var a,c=(0,i["default"])(t);!(s=(a=c.next()).done);s=!0){var l=a.value,d=e.find(l).find("input,select").val();switch(e.find(l).find("input,select").removeClass("error"),l){case".email":if(u["default"].is.empty(d)){o.push({$el:e.find(l),message:"Please input email"});break}if(!u["default"].is.email(d)){o.push({$el:e.find(l),message:"email not correct"});break}break;case".passwd":if(u["default"].is.empty(d)){o.push({$el:e.find(l),message:"Please input password"});break}if(d.length<6||d.length>16){o.push({$el:e.find(l),message:"password len 6~16"});break}break;case".passwd2":if(u["default"].is.empty(d)){o.push({$el:e.find(l),message:"Please input password"});break}if(d.length<6||d.length>16){o.push({$el:e.find(l),message:"password len 6~16"});break}if(d!==$(this.$el).find(".passwd input").val()){o.push({$el:e.find(l),message:"two passwords not the same"});break}}}}catch(f){n=!0,r=f}finally{try{!s&&c["return"]&&c["return"]()}finally{if(n)throw r}}if(0===o.length)return!0;var p=!0,h=!1,v=void 0;try{for(var m,g=(0,i["default"])(o);!(p=(m=g.next()).done);p=!0){var w=m.value;w.$el.find("input,select").addClass("error"),w.$el.velocity("callout.shake",380),w.$el.attr("aria-label",w.message)}}catch(f){h=!0,v=f}finally{try{!p&&g["return"]&&g["return"]()}finally{if(h)throw v}}return!1},onSubmit:function(){this.checked()&&window.router.go("/login")}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=o(1),i=o(9),r=(s(i),o(49)),a=o(44),u=s(a),c=o(146),l=s(c);t.exports={components:{Spinner:u["default"],SimpleModal:l["default"]},vuex:{getters:{isLoading:function(t){var e=t.widgets;return e.isLoading}},actions:{reset:function(t){var e=t.dispatch;return e(n.root.RESET)},load:r.load}},attached:function(){},detached:function(){this.reset()},watch:{},methods:{onShowAlertSuccess:function(){window.$refs.alert.success("success")},onShowAlertWarning:function(){window.$refs.alert.warning("warning")},onShowAlertError:function(){window.$refs.alert.error("error")},onShowConfirm:function(){window.$refs.confirm.show("are you sure?")},onShowModal:function(){this.$refs.modal.show()},onShowToastSuccess:function(){window.$refs.toast.success("this is success toast")},onShowToastWarning:function(){window.$refs.toast.warning("this is warning toast")},onShowToastError:function(){window.$refs.toast.error("this is error toast")},onShowSpinner:function(){this.load()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=s(n),r={title:"",content:"",tag:"",buttonText:"确定",showIcon:!0,callback:null},a=(0,i["default"])({},r);e["default"]={data:function(){return r},detached:function(){(0,i["default"])(this.$data,a)},computed:{hasContent:function(){return!!this.content}},methods:{__show:function(){var t=$("body").scrollTop();$("html").css("overflow-y","hidden");var e=$(this.$el).find(".alert-modal"),o=$(this.$el);o.css({display:"block",top:t,height:$(window).height(),width:$(window).width()}),o.velocity("fadeIn",120,function(){e.css({marginTop:-e.height()/2}),e.velocity("transition.slideDownIn",280)})},success:function(t,e){this.alert(t,"success",e)},warning:function(t,e){this.alert(t,"warning",e)},error:function(t,e){this.alert(t,"error",e)},alert:function(t,e,o){o=o||{},o.tag=e,o.title=t;for(var s in this.$data)this.$data.hasOwnProperty(s)&&void 0!==o[s]&&(this.$data[s]=o[s]);this.__show()},dismiss:function(t){var e=this,o=$(this.$el).find(".alert-modal");o.velocity("transition.slideUpOut",{duration:280,complete:function(){$(e.$el).velocity("fadeOut",120,function(){$("html").css("overflow-y","auto")}),t&&t()}})},destroy:function(){var t=this;this.dismiss(function(){$(t.$el).remove()})}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=s(n),r={title:"",content:"",cancelButtonText:"取消",confirmButtonText:"确定",cancelButtonCls:"button-white",confirmButtonCls:"button-blue",showIcon:!0,callback:null},a=(0,i["default"])({},r);e["default"]={data:function(){return r},detached:function(){(0,i["default"])(this.$data,a)},computed:{hasContent:function(){return!!this.content}},methods:{__show:function(){var t=$("body").scrollTop();$("html").css("overflow-y","hidden");var e=$(this.$el).find(".confirm-modal"),o=$(this.$el);o.css({display:"block",top:t,height:$(window).height(),width:$(window).width()}),o.velocity("fadeIn",120,function(){e.css({marginTop:-e.height()/2}),e.velocity("transition.slideDownIn",280)})},show:function(t,e){e=e||{},e.title=t;for(var o in this.$data)this.$data.hasOwnProperty(o)&&void 0!==e[o]&&(this.$data[o]=e[o]);this.__show()},dismiss:function(t){var e=this,o=$(this.$el).find(".confirm-modal");o.velocity("transition.slideUpOut",{duration:280,complete:function(){$(e.$el).velocity("fadeOut",120,function(){$("html").css("overflow-y","auto")}),t&&t()}})},destroy:function(){var t=this;this.dismiss(function(){$(t.$el).remove()})},onClick:function(t){this.callback&&this.callback(t),this.dismiss()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=s(n),r=o(29),a=s(r),u=o(44),c=s(u),l={isBusy:!1,isCompleted:!1},d=(0,i["default"])({},l);e["default"]={props:{url:{type:String,requried:!0},target:{type:String,requried:!1},page:{type:Number,"default":0},limit:{type:Number,"default":20},delay:{type:Number,"default":500},autoScroll:{type:Boolean,"default":!0},loadingText:{type:String,"default":"加载中..."},loadMoreText:{type:String,"default":"加载更多"},loadMoreClickText:{type:String,"default":"点击加载更多"},onDataLoaded:Function},components:{Spinner:c["default"]},data:function(){return l},detached:function(){(0,i["default"])(this.$data,d)},computed:{barText:function(){return this.autoScroll?this.isBusy?this.loadingText:this.loadMoreText:this.isBusy?this.loadingText:this.loadMoreClickText}},ready:function(){this.autoScroll&&this.bindScrollEvent()},methods:{refresh:function(){this.page=0,this.loadData(1)},bindScrollEvent:function(){var t=this,e=$(this.target||document);e.scroll(function(){e.scrollTop()+$(window).height()>=e.height()&&!t.isBusy&&!t.isCompleted&&(t.isBusy=!0,setTimeout(function(){t.loadData(t.page+1)},t.delay))})},loadData:function(t){var e=this;this.isBusy=!0,a["default"].get(this.url,{page:t,limit:this.limit}).then(function(t){var o=t.result;o.length<e.limit&&(e.isCompleted=!0),e.page++,e.isBusy=!1,e.onDataLoaded&&e.onDataLoaded({success:!0,result:{items:o,page:e.page}})})["catch"](function(t){e.isBusy=!1,e.onDataLoaded({success:!1,result:{message:t.message,__timestamp__:Date.now()}})})},onClickMore:function(){this.autoScroll||this.isBusy||this.isCompleted||this.loadData(this.page+1)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{content:String,title:String,dismissOnMask:{type:Boolean,"default":!1}},computed:{hasTitle:function(){return!!this.title}},methods:{__show:function(t){var e=$("body").scrollTop();$("html").css("overflow-y","hidden");var o=$(this.$el).find(".popup-modal"),s=$(this.$el);s.css({display:"block",top:e,left:0,height:$(window).height(),width:$(window).width()}),s.velocity("fadeIn",120,function(){o.css({marginTop:-o.height()/2}),o.velocity("transition.slideDownIn",280,function(){t&&t()})})},show:function(t){t=t||{};for(var e in this.$data)this.$data.hasOwnProperty(e)&&void 0!==t[e]&&(this.$data[e]=t[e]);this.__show(t.callback)},dismiss:function(t){var e=this,o=$(this.$el).find(".popup-modal");o.velocity("transition.slideUpOut",{duration:280,complete:function(){$(e.$el).velocity("fadeOut",120,function(){$("html").css("overflow-y","auto")}),t&&t()}})},destroy:function(){var t=this;this.dismiss(function(){$(t.$el).remove()})},onClickOverlay:function(){this.dismissOnMask&&this.dismiss()},onClickModal:function(t){t.preventDefault(),t.stopPropagation()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={ready:function(){var t=$(this.$el),e=$(".app-header"),o=$("body").hasScrollBar()?15:0;t.css({width:$(window).width()-224-1-o}),t.find(".spinner-inner").css({top:($(window).height()-e.innerHeight())/2})}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=s(n),r={theme:"default",duration:2800,showClose:!1};e["default"]={props:{message:{required:!0},position:{type:Number,required:!0},destroyed:{twoWay:!0,type:Boolean,required:!0},options:{type:Object,coerce:function(t){return(0,i["default"])({},r,t)}}},data:function(){return{isShow:!1}},computed:{theme:function(){return"_"+this.options.theme}},ready:function(){var t=this;setTimeout(function(){t.isShow=!0},50),this.options.showClose||this._startLazyAutoDestroy()},detached:function(){clearTimeout(this.timerDestroy)},methods:{remove:function(){return this._clearTimer(),this.$remove().$destroy(),this},_startLazyAutoDestroy:function(){var t=this;this._clearTimer(),this.timerDestroy=setTimeout(function(){t.$remove().$destroy()},this.options.duration)},_clearTimer:function(){this.timerDestroy&&clearTimeout(this.timerDestroy),this.timerDestroy=null},_startTimer:function(){this.options.showClose||this._startLazyAutoDestroy()},_stopTimer:function(){this.options.showClose||this._clearTimer()}}}},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),i=s(n),r=o(154),a=s(r),u={maxToasts:6,position:"right top"};e["default"]={components:{"toast-item":a["default"]},data:function(){return{toasts:[],options:u}},computed:{classesOfPosition:function(){return this._updateClassesOfPosition(this.options.position)}},methods:{info:function(t,e){this.showToast(t,(0,i["default"])(e=e||{},{theme:"info"}))},success:function(t,e){this.showToast(t,(0,i["default"])(e=e||{},{theme:"success"}))},warning:function(t,e){this.showToast(t,(0,i["default"])(e=e||{},{theme:"warning"}))},error:function(t,e){this.showToast(t,(0,i["default"])(e=e||{},{theme:"error"}))},showToast:function(t,e){return this._addToast(t,e),this._moveToast(),this},setOptions:function(t){return this.options=(0,i["default"])(this.options,t||{}),this},_addToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t&&this.toasts.unshift({message:t,options:e,isDestroyed:!1})},_moveToast:function(){var t=this.options.maxToasts>0?this.options.maxToasts:9999;this.toasts=this.toasts.reduceRight(function(e,o,s){return o.isDestroyed?e:s+1>=t?e:[o].concat(e)},[])},_updateClassesOfPosition:function(t){return t.split(" ").reduce(function(t,e){return t["p-"+e.toLowerCase()]=!0,t},{})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=" <div id=app> <router-view class=app keep-alive transition=fade transition-mode=out-in> </router-view> <alert v-ref:alert></alert> <confirm v-ref:confirm></confirm> <toast v-ref:toast></toast> </div> "},function(t,e){t.exports=" <footer class=app-footer> <strong>Copyright &copy; 2016-2017 POSTIO.</strong> All rights reserved. </footer> "},function(t,e){t.exports=" <header class=app-header> </header> "},function(t,e){t.exports=' <section class=app-sidebar> <img class=logo src=/static/images/logo.png /> <ul class=sidebar> <li> <a v-link="{  path: \'/list\'}"> <i class="iconfont icon-project"></i>List </a> </li> <li> <a v-link="{ path: \'/form\'}"> <i class="iconfont icon-pay"></i>Form </a> </li> <li> <a v-link="{ path: \'/widgets\'}"> <i class="iconfont icon-data"></i>Widgets </a> </li> <li> <a v-link="{ path: \'/login\'}"> <i class="iconfont icon-exit"></i>Logout </a> </li> </ul> </section> '},function(t,e){t.exports=' <div class=form-view> <form> <div class=item> <label>Email</label> <div class="control email hint--right hint--rounded" aria-label=""> <input class=field name=email placeholder=Email value="{{ userinfo.email }}" readonly=readonly /> </div> </div> <div class=item> <label>Nickname</label> <div class="control nickname hint--right hint--rounded" aria-label=""> <input class=field name=nickname @focus=onFocus($event) @blur="onBlur(\'.nickname\')"/> </div> </div> <div class=item> <label>Address</label> <div class="control address hint--right hint--rounded" aria-label=""> <input class=field name=address @focus=onFocus($event) @blur="onBlur(\'.address\')"/> </div> </div> <div @click=onSave :class="[\'button\',\'sm-button\',\'button-blue\',\'item\', { \'button-disabled\': isLoading }]"> <span class="spinner-circle iconfont icon-loading" v-show=isLoading></span>&nbsp;Save&nbsp; </div> </form> </div> '},function(t,e){t.exports=" <div id=home> <app-sidebar></app-sidebar> <div class=app-content> <router-view class=view keep-alive transition=fade transition-mode=out-in> </router-view> </div> </div> "},function(t,e){t.exports=' <div class=order-view> <div class=header></div> <infinite v-ref:infinite url=/static/assets/list.json :on-data-loaded=onDataLoaded> <table slot=content class=orders cellspacing=0 cellpadding=0> <thead> <tr> <th width=250px>Order Number</th> <th>Title</th> <th width=140px>Cost($)</th> <th width=140px>Status</th> <th width=140px>Time</th> </tr> </thead> <tbody> <tr v-for="item in items" track-by=_id> <td>{{ item._id }}</td> <td>{{ item.title }}</td> <td>￥{{ item.amount }}</td> <td>{{{ item.statusLabel }}}</td> <td>{{ item.createdAt }}</td> </tr> </tbody> </table> </infinite> </div> '},function(t,e){t.exports=' <div class=qrcode-modal> <modal v-ref:modal :title=title :dismiss-on-mask=false> <div slot=content class=content> <div class="iconfont icon-close" @click=onDismiss></div> <div> this is simple modal </div> <textarea></textarea> </div> </modal> </div> '},function(t,e){t.exports=' <div class="fullscreen user-login-view"> <form class=center-form> <h3 class=title>Login</h3> <div class="email control hint--right hint--rounded" aria-label=""> <input type=text placeholder=Email class=field @focus=onFocus($event) @blur="onBlur(\'.email\')"/> </div> <div class="passwd control hint--right hint--rounded" aria-label=""> <input placeholder=Password class=field @focus=onFocus($event) @blur="onBlur(\'.passwd\')" type=password /> </div> <div class="button button-blue button-login" @click=onSubmit>Login</div> <div class=tip> No Account？ <a v-link="{ path: \'/register\', query: {referer:$route.query.referer } }">Register</a> </div> </form> </div> '},function(t,e){t.exports=' <div class="fullscreen user-register-view"> <form class=center-form> <h3 class=title>Register</h3> <div class="email control hint--right hint--rounded" aria-label=""> <input type=text placeholder=Email class=field @focus=onFocus($event) @blur="onBlur(\'.email\')"/> </div> <div class="passwd control hint--right hint--rounded" aria-label=""> <input type=password placeholder=Password class=field @focus=onFocus($event) @blur="onBlur(\'.passwd\')"/> </div> <div class="passwd2 control hint--right hint--rounded" aria-label=""> <input type=password placeholder="Confirm Password" class=field @focus=onFocus($event) @blur="onBlur(\'.passwd2\')"/> </div> <div class="button button-blue button-register" @click=onSubmit>Register</div> <div class=tip> <a v-link="{ path: \'/login\' }">Login</a> </div> </form> </div> '},function(t,e){t.exports=' <div class=widgets-view> <div class="button button-blue" @click=onShowAlertSuccess>Alert Success</div> <div class="button button-blue" @click=onShowAlertWarning>Alert Warning</div> <div class="button button-blue" @click=onShowAlertError>Alert Error</div> <br/> <br/> <div class="button button-blue" @click=onShowConfirm>Confirm</div> <div class="button button-blue" @click=onShowModal>Modal</div> <br/> <br/> <div class="button button-blue" @click=onShowToastSuccess>Toast Success</div> <div class="button button-blue" @click=onShowToastWarning>Toast Warning</div> <div class="button button-blue" @click=onShowToastError>Toast Error</div> <div class="button button-blue" @click=onShowSpinner>Spinner</div> <br/> <br/> <spinner v-ref:spinner v-show=isLoading></spinner> <simple-modal v-ref:modal></simple-modal> </div> '},function(t,e){t.exports=' <div class=modal-overlay> <div class=alert-modal> <div class=inner> <h3 class=title>{{ title }}</h3> <div v-show=showIcon> <div v-show="tag===\'success\'" class="sa-icon sa-success animate"> <span class="sa-line sa-tip animateSuccessTip"></span> <span class="sa-line sa-long animateSuccessLong"></span> <div class=sa-placeholder></div> <div class=sa-fix></div> </div> <img v-show="tag===\'warning\'" class=icon src=/static/images/hou-warning.png /> <img v-show="tag===\'error\'" class=icon src=/static/images/hou-error.png /> </div> <div v-show=hasContent class=content>{{ content }}</div> <div class="button button-blue" @click=dismiss(callback)>{{ buttonText }}</div> </div> </div> </div> ';
},function(t,e){t.exports=' <div class=modal-overlay> <div class=confirm-modal> <div class=inner> <h3 class=title>{{ title }}</h3> <img v-show=showIcon class=icon src=/static/images/hou-warning.png /> <div v-show=hasContent class=content>{{ content }}</div> </div> <div class=btn-box> <div class="button button-cancel {{ cancelButtonCls }}" @click=onClick(0)>{{ cancelButtonText }}</div> <div class="button button-confirm {{ confirmButtonCls }}" @click=onClick(1)>{{ confirmButtonText }}</div> </div> </div> </div> '},function(t,e){t.exports=' <div class=infinite> <slot name=content></slot> <div v-show="isBusy && page !== 0" class=loading-more-bar @click=onClickMore> <div class=inner> <span class="spinner-circle iconfont icon-loading"></span> <span class=text>{{ barText }}</span> </div> </div> <spinner v-ref:spinner v-show="isBusy && page === 0"></spinner> </div> '},function(t,e){t.exports=" <div class=modal-overlay @click=onClickOverlay()> <div class=popup-modal @click=onClickModal($event)> <div class=inner> <h3 v-show=hasTitle class=title>{{ title }}</h3> <slot name=content></slot> </div> </div> </div> "},function(t,e){t.exports=' <div class="spinner-wrapper modal-overlay"> <div class="spinner-inner center"> <div class=spinner> <div class=rect1></div> <div class=rect2></div> <div class=rect3></div> <div class=rect4></div> <div class=rect5></div> </div> </div> </div> '},function(t,e){t.exports=" <div class=toast-item @mouseover=_stopTimer @mouseleave=_startTimer :class=[theme] v-show=isShow transition=toast> <div class=toast-message> <span v-html=message></span> <span class=toast-close v-if=options.showClose @click=remove> </span> </div> </div> "},function(t,e){t.exports=' <div class=toast :class=classesOfPosition> <toast-item v-for="toast in toasts" :message=toast.message :options=toast.options :destroyed.sync=toast.isDestroyed :position=$index> </toast-item> </div> '},function(t,e,o){var s,n,i={};o(117),s=o(57),n=o(121),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(58),n=o(122),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};n=o(123),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};n=o(124),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};o(118),s=o(59),n=o(125),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(60),n=o(126),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};o(119),s=o(61),n=o(127),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};o(120),s=o(62),n=o(128),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(63),n=o(129),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(64),n=o(130),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(65),n=o(131),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(66),n=o(132),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(67),n=o(133),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(68),n=o(134),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(69),n=o(135),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(71),n=o(137),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})},function(t,e,o){var s,n,i={};s=o(72),n=o(138),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(r.template=n),r.computed||(r.computed={}),Object.keys(i).forEach(function(t){var e=i[t];r.computed[t]=function(){return e}})}]);