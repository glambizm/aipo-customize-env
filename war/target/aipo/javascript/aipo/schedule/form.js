dojo.provide("aipo.schedule");dojo.require("aipo.widget.ToolTip");dojo.require("aipo.widget.DropdownDatepicker");dojo.require("aipo.widget.MemberNormalSelectList");dojo.require("aipo.widget.GroupNormalSelectList");aipo.schedule.setupTooltip=function(a,g,e){ptConfig[e].isTooltipEnable=true;var k=dojo.byId("content-"+e);dojo.style(k,"visibility","visible");obj_indicator=dojo.byId("indicator-"+e);dojo.style(obj_indicator,"display","none");if(g.length<=0){return}if(typeof scheduleTooltipEnable=="undefined"){scheduleTooltipEnable=true}if(scheduleTooltipEnable!=true){return}function d(p){var o={};var n=[];var j,m;for(j=0;j<p.length;j++){m=p[j];if(!(m in o)){o[m]=true;n.push(m)}}return n}var h=g.split(",");h.pop();h=d(h);for(var f in h){h[f]=dojo.trim(h[f]);var b=new Array();dojo.query("div.schedule-"+e+"-"+h[f],k).forEach(function(n,m,j){b.push(n)});var l=new aipo.widget.ToolTip({label:"<div class='indicator'>"+aimluck.io.escapeText("schedule_val_tooltip1")+"</div>",connectId:b},e,function(j,p){var n=new RegExp("schedule-"+e+"-([0-9]+)");var o=p.className.match(n);if(o){var m=a+"&scheduleid="+o[1];aipo.schedule.showTooltip(p,m,o[1],e,j)}});for(var c in b){b[c].setAttribute("widget_id",l.id)}}};aipo.schedule.showTooltip=function(e,a,b,f,c){var j;var l="";var d="";var k="";var h="";var g=dijit.byId(e.getAttribute("widget_id"));if(g.processed){return}if(ptConfig[f].xhrUrl!=a){ptConfig[f].xhrUrl=a;dojo.xhrGet({portletId:f,url:a,encoding:"utf-8",handleAs:"json-comment-filtered",load:function(r,p){ptConfig[f].xhrUrl="";if(!r.id){g._onHover=function(){};g.close();g.processed=true;return}if(!r.isSpan){l='<span style="font-size: 0.90em;">'+r.date+"</span><br/>"}if(r.memberList){var o=r.memberList.length;for(var m=0;m<o;m++){d+="<li>"+r.memberList[m].aliasName.value+"</li>"}}if(r.facilityList){var n=r.facilityList.length;for(var m=0;m<n;m++){k+="<li>"+r.facilityList[m].facilityName.value+"</li>"}}if(r.place!=""){h='<span style="font-size: 0.90em;">'+aimluck.io.escapeText("schedule_val_tooltip2")+"</span><br/><ul><li>"+r.place+"</li></ul>"}if(d!=""){d='<span style="font-size: 0.90em;">'+aimluck.io.escapeText("schedule_val_tooltip3")+"</span><br/><ul>"+d+"</ul>"}if(k!=""){k='<span style="font-size: 0.90em;">'+aimluck.io.escapeText("schedule_val_tooltip4")+"</span><br/><ul>"+k+"</ul>"}var q="<h4>"+r.name+"</h4>"+l+d+k+h;g.label=q;g.processed=true;c.innerHTML=q}})}};aipo.schedule.hideDialog=function(){var a=dijit.byId("modalDialog");if(a){a.hide()}aipo.portletReload("schedule")};aipo.schedule.onLoadScheduleDetail=function(a){aipo.portletReload("whatsnew")};aipo.schedule.onLoadScheduleDialog=function(o){var p=dojo.byId("commonUrl"+o);if(p){var g=dojo.byId("commonCategoryid"+o);var u=aimluck.io.escapeText("schedule_val_category1");params={url:p.value,key:"categoryId",value:"categoryName",selectedId:g.value,preOptions:{key:"1",value:u}};aimluck.io.createOptions("common_category_id",params);var t=dijit.byId("membernormalselect");if(t){var n=dojo.byId("init_memberlist");var r;var m=n.options;if(m.length==1&&m[0].value==""){return}for(r=0;r<m.length;r++){t.addOptionSync(m[r].value,m[r].text,true)}}var s=dijit.byId("facilityselect");if(s){var n=dojo.byId("init_facilitylist");var r;var m=n.options;if(m.length==1&&m[0].value==""){return}for(r=0;r<m.length;r++){s.addOptionSync(m[r].value,m[r].text,true)}}var l=dojo.byId("name");if(l){l.focus()}var k=dojo.byId("button_member_add");if(k){dojo.connect(k,"onclick",function(){aipo.schedule.expandMember()})}var e=dojo.byId("button_member_remove");if(e){dojo.connect(e,"onclick",function(){var v=dojo.byId("member_to");if(v.options.length==0){if((t)&&(aipo.schedule.login_aliasname!="undefined")){var w=aipo.schedule.login_aliasname.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">");t.addOptionSync(aipo.schedule.login_name,w,true)}}aipo.schedule.expandMember()})}var d=dojo.byId("button_facility_add");if(d){dojo.connect(d,"onclick",function(){aipo.schedule.expandFacility()})}var q=dojo.byId("button_facility_remove");if(q){dojo.connect(q,"onclick",function(){aipo.schedule.expandFacility()})}var c=dojo.byId("_scheduleForm");if(c){c.ignore_duplicate_facility.value="false"}aipo.schedule.shrinkMember();aipo.schedule.shrinkFacility();var j=dijit.byId("startDateSpan");var a=dijit.byId("endDateSpan");if(j!=null&&a!=null){var b=j.dropDown.value;var h=a.dropDown.value;aipo.schedule.spanLength=(h-b)/86400000}else{aipo.schedule.spanLength=0}}var f=function(v,w){if(dojo.byId(v+"_title_"+o)!=null){dojo.connect(dojo.byId(v+"_title_"+o),"onclick",function(){var x=w;var y=function(){var z=dojo.byId(v+"_context_"+o);z.style.display=(z.style.display!="none")?"none":x};y();aipo.schedule.setWrapperHeight()})}};f("edit_control","block");f("change_tmpreserve","block");f("mail","block")};aipo.schedule.formPreSubmit=function(d){var c=dojo.byId("member_to");var b=dojo.byId("facility_to");if(c){var e=c.options;for(i=0;i<e.length;i++){e[i].selected=true}}if(b){var a=b.options;for(i=0;i<a.length;i++){a[i].selected=d.public_flag[0].checked}}if(d.is_span.value=="TRUE"||d.is_span.value=="true"){d.start_date_hour.value=0;d.start_date_minute.value=0;d.end_date_hour.value=0;d.end_date_minute.value=0}else{d.end_date_year.value=d.start_date_year.value;d.end_date_month.value=d.start_date_month.value;d.end_date_day.value=d.start_date_day.value}};aipo.schedule.formSwitchRepeat=function(a){if(a.form.is_repeat.value=="TRUE"||a.form.is_repeat.value=="true"){var b=aimluck.io.escapeText("schedule_val_repeat1");a.value=b;aipo.schedule.formRepeatOff(a.form)}else{var b=aimluck.io.escapeText("schedule_val_repeat2");a.value=b;aipo.schedule.formRepeatOn(a.form)}};aipo.schedule.isShowFacility=function(a){var c=a.public_flag;for(var b=0;b<c.length;b++){if(c[b].checked&&(c[b].value=="O"||c[b].value=="C")){return true}}return false};aipo.schedule.formSwitchAllDay=function(a){if(a.checked){aipo.schedule.formAllDayOn(a)}else{aipo.schedule.formAllDayOff(a)}};aipo.schedule.formSwitchSpan=function(a){if(a.form.is_span.value=="TRUE"||a.form.is_span.value=="true"){a.value=aimluck.io.escapeText("schedule_val_span1");if(a.form.is_repeat.value!="TRUE"&&a.form.is_repeat.value!="true"){a.form.repeat_button.value=aimluck.io.escapeText("schedule_val_repeat1");aipo.schedule.formRepeatOff(a.form)}else{a.form.repeat_button.value=aimluck.io.escapeText("schedule_val_repeat2");aipo.schedule.formRepeatOn(a.form)}aipo.schedule.formSpanOff(a.form)}else{a.value=aimluck.io.escapeText("schedule_val_span2");aipo.schedule.formSpanOn(a.form)}};aipo.schedule.formSpanOn=function(a){dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("timeField").style.display="none";dojo.byId("repeatButtonField").style.display="none";dojo.byId("normalField").style.display="";dojo.byId("spanField").style.display="";dojo.byId("allDayField").style.display="none";dojo.byId("facilityField").style.display="none";dojo.byId("facilityFieldButton").style.display="block";a.is_span.value="TRUE";aipo.schedule.setWrapperHeight()};aipo.schedule.formSpanOff=function(a){dojo.byId("spanField").style.display="none";dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("repeatButtonField").style.display="";dojo.byId("normalField").style.display="";dojo.byId("timeField").style.display="";dojo.byId("allDayField").style.display="";if(aipo.schedule.isShowFacility(a)){dojo.byId("facilityFieldButton").style.display="block";aipo.schedule.shrinkFacility()}a.is_repeat.value="FALSE";a.is_span.value="FALSE";aipo.schedule.setWrapperHeight()};aipo.schedule.formRepeatOff=function(a){dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("spanField").style.display="none";dojo.byId("repeatButtonField").style.display="";dojo.byId("normalField").style.display="";dojo.byId("timeField").style.display="";dojo.byId("spanButtonField").style.display="";a.is_repeat.value="FALSE";a.is_span.value="FALSE";aipo.schedule.setWrapperHeight()};aipo.schedule.formEditRepeatOne=function(a){dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("spanField").style.display="none";dojo.byId("spanButtonField").style.display="none";dojo.byId("repeatButtonField").style.display="none";dojo.byId("allDayField").style.display="none";dojo.query(".isEditFile").style("display","none");dojo.byId("normalField").style.display="";dojo.byId("timeField").style.display="";a.is_repeat.value="FALSE";a.is_span.value="FALSE";aipo.schedule.setWrapperHeight()};aipo.schedule.formEditRepeatAll=function(a){dojo.byId("normalField").style.display="none";dojo.byId("spanField").style.display="none";dojo.byId("spanButtonField").style.display="none";dojo.byId("repeatField").style.display="";dojo.byId("repeatField").text=dojo.byId("schedule_val_repeat2").innerText;dojo.byId("repeatButtonField").style.display="";dojo.byId("allDayField").style.display="none";dojo.query(".isEditFile").style("display","");dojo.byId("timeLabelField").style.display="";dojo.byId("timeField").style.display="";a.is_repeat.value="TRUE";a.is_span.value="FALSE";aipo.schedule.setWrapperHeight()};aipo.schedule.formRepeatOn=function(a){dojo.byId("normalField").style.display="none";dojo.byId("spanField").style.display="none";dojo.byId("spanButtonField").style.display="none";dojo.byId("repeatField").style.display="";dojo.byId("repeatButtonField").style.display="";dojo.byId("timeLabelField").style.display="";dojo.byId("timeField").style.display="";a.is_repeat.value="TRUE";a.is_span.value="FALSE";aipo.schedule.setWrapperHeight()};aipo.schedule.formAllDayOn=function(a){dojo.byId("spanField").style.display="none";dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("repeatButtonField").style.display="none";dojo.byId("normalField").style.display="";dojo.byId("timeField").style.display="none";dojo.byId("spanButtonField").style.display="none";dojo.byId("facilityFieldButton").style.display="block";aipo.schedule.shrinkFacility();a.form.is_repeat.value="FALSE";a.form.is_span.value="TRUE";a.form.all_day_flag.value="ON";aipo.schedule.setWrapperHeight()};aipo.schedule.formAllDayOff=function(a){dojo.byId("spanField").style.display="none";dojo.byId("repeatField").style.display="none";dojo.byId("timeLabelField").style.display="none";dojo.byId("repeatButtonField").style.display="";dojo.byId("normalField").style.display="";dojo.byId("timeField").style.display="";dojo.byId("spanButtonField").style.display="";if(aipo.schedule.isShowFacility(a.form)){dojo.byId("facilityFieldButton").style.display="block"}a.form.is_repeat.value="FALSE";a.form.is_span.value="FALSE";a.form.all_day_flag.value="OFF";aipo.schedule.setWrapperHeight()};aipo.schedule.formPublicOn=function(a){if(a.is_span.value!="TRUE"&&a.is_span.value!="true"){a.is_facility.value="TRUE"}dojo.byId("facilityFieldButton").style.display="block";aipo.schedule.shrinkFacility()};aipo.schedule.formPublicOff=function(a){if(a.is_span.value!="TRUE"&&a.is_span.value!="true"){a.is_facility.value="FALSE"}dojo.byId("facilityField").style.display="none";dojo.byId("facilityFieldButton").style.display="none";aipo.schedule.setWrapperHeight()};aipo.schedule.enablePerWeek=function(a){a.repeat_type[1].checked=true};aipo.schedule.enableNthWeek=function(a){a.repeat_type[1].checked=true};aipo.schedule.enableMonth=function(a){if(!a.repeat_type[2].checked){a.repeat_type[2].checked=true}};aipo.schedule.repeatpickeroff=function(){dojo.byId("repeatpickerfield").style.display="none";aipo.schedule.setWrapperHeight()};aipo.schedule.repeatpickeron=function(){dojo.byId("repeatpickerfield").style.display="";aipo.schedule.setWrapperHeight()};aipo.schedule.enableYear=function(a){if(!a.repeat_type[3].checked){a.repeat_type[3].checked=true}};aipo.schedule.buttonEdit=function(b,a){aimluck.io.disableForm(b,true);aipo.common.showDialog(a)};aipo.schedule.buttonChangeStatus=function(e,b,a,c,d){e.action=b+"&status="+a;aimluck.io.submit(e,c,d,aipo.schedule.onReceiveMessage)};aipo.schedule.delFlag0=function(a){a.del_member_flag.value="0";a.del_range_flag.value="0"};aipo.schedule.delFlag1=function(a){a.del_member_flag.value="0";a.del_range_flag.value="1"};aipo.schedule.delFlag2=function(a){a.del_member_flag.value="1";a.del_range_flag.value="0"};aipo.schedule.delFlag3=function(a){a.del_member_flag.value="1";a.del_range_flag.value="1"};aipo.schedule.changeEnd=function(a){if(a.end_date_hour.value==24){a.end_date_minute.value=0}};aipo.schedule.onSubmit=function(a){if((a.is_span.value!="TRUE")&&(a.is_span.value!="true")&&(a.is_repeat.value!="TRUE")&&(a.is_repeat.value!="true")){a.end_date.value=a.start_date.value;a.end_date_day.value=a.start_date_day.value;a.end_date_month.value=a.start_date_month.value;a.end_date_year.value=a.start_date_year.value;a.limit_end_date.value=a.limit_start_date.value;a.limit_end_date_day.value=a.limit_start_date_day.value;a.limit_end_date_month.value=a.limit_start_date_month.value;a.limit_end_date_year.value=a.limit_start_date_year.value}};aipo.schedule.onReceiveMessage=function(d){var a=dojo.byId("attachments_select");if(typeof a!="undefined"&&a!=null){a.parentNode.removeChild(a)}if(!d){var b=dijit.byId("modalDialog");if(b){b.hide()}aipo.portletReload("schedule");aipo.portletReload("timeline")}if(d!=null&&d.match(/duplicate_facility/)){if(confirm(aimluck.io.escapeText("schedule_val_confirm1"))){var c=dojo.byId("_scheduleForm");if(c){c.ignore_duplicate_facility.value="true";dojo.xhrPost({url:c.action,timeout:30000,form:c,encoding:"utf-8",handleAs:"json-comment-filtered",headers:{X_REQUESTED_WITH:"XMLHttpRequest"},load:function(f,e){aipo.schedule.onReceiveMessage("")},error:function(e){}})}}}else{if(dojo.byId("messageDiv")){dojo.byId("messageDiv").innerHTML=d}}if(d!=""){aipo.schedule.setWrapperHeight()}};aipo.schedule.shrinkMember=function(){var c=dojo.byId("memberFieldButton");if(c){var e="";e+='<table class="w100"><tbody><tr><td style="width:80%; border:none;">';var a=dojo.byId("member_to");if(a){var f=a.options;to_size=f.length;for(i=0;i<to_size;i++){var d=f[i].text.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");e+="<span>"+d+"</span>";if(i<to_size-1){e+=",<wbr/>"}}}e+='</td><td style="border:none;">';e+='<input type="button" class="alignright" value="'+aimluck.io.escapeText("schedule_val_member1")+'" onclick="aipo.schedule.expandMember();" />';e+="</td></tr></tbody></table>";c.innerHTML=e}var b=dojo.byId("memberField");if(b){dojo.style(b,"display","none")}aipo.schedule.setWrapperHeight()};aipo.schedule.expandMember=function(){var c=dojo.byId("memberFieldButton");if(c){var e="";e+='<table class="w100"><tbody><tr><td style="width:80%; border:none">';var a=dojo.byId("member_to");if(a){var f=a.options;to_size=f.length;for(i=0;i<to_size;i++){var d=f[i].text.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");e+="<span>"+d+"</span>";if(i<to_size-1){e+=",<wbr/>"}}}e+='</td><td style="border:none;">';e+='<input type="button" class="alignright" value="'+aimluck.io.escapeText("schedule_val_member2")+'" onclick="aipo.schedule.shrinkMember();" />';e+="</td></tr></tbody></table>";c.innerHTML=e}var b=dojo.byId("memberField");if(b){dojo.style(b,"display","block")}aipo.schedule.setWrapperHeight()};aipo.schedule.shrinkFacility=function(){var c=dojo.byId("facilityFieldButton");if(c){var d="";d+='<table class="w100"><tbody><tr><td style="width:80%; border:none;">';var b=dojo.byId("facility_to");if(b){var e=b.options;to_size=e.length;for(i=0;i<to_size;i++){d+="<span>"+aipo.escapeHTML(e[i].text)+"</span>";if(i<to_size-1){d+=",<wbr/>"}}}d+='</td><td style="border:none;">';d+='<input type="button" class="alignright" value="'+aimluck.io.escapeText("schedule_val_facility1")+'" onclick="aipo.schedule.expandFacility();" />';d+="</td></tr></tbody></table>";c.innerHTML=d}var a=dojo.byId("facilityField");if(a){dojo.style(a,"display","none")}aipo.schedule.setWrapperHeight()};aipo.schedule.expandFacility=function(){var c=dojo.byId("facilityFieldButton");if(c){var e="";e+='<table class="w100"><tbody><tr><td style="width:80%; border:none">';var b=dojo.byId("facility_to");if(b){var f=b.options;to_size=f.length;for(i=0;i<to_size;i++){var d=f[i].text.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");e+="<span>"+d+"</span>";if(i<to_size-1){e+=",<wbr/>"}}}e+='</td><td style="border:none;">';e+='<input type="button" class="alignright" value="'+aimluck.io.escapeText("schedule_val_member2")+'" onclick="aipo.schedule.shrinkFacility();" />';e+="</td></tr></tbody></table>";c.innerHTML=e}var a=dojo.byId("facilityField");if(a){dojo.style(a,"display","block")}aipo.schedule.setWrapperHeight()};aipo.schedule.onSpanStartChange=function(){var d=dijit.byId("startDateSpan");var c=dijit.byId("endDateSpan");if(d!=null&&c!=null){var b=d.dropDown.value.getTime()+86400000*aipo.schedule.spanLength;var a=new Date();a.setTime(b);c.dropDown.onChangeNoCallback(a);c.dropDown.setValue(a)}};aipo.schedule.onSpanEndChange=function(){var b=dijit.byId("startDateSpan");var a=dijit.byId("endDateSpan");if(b!=null&&a!=null&&b.dropDown!=null&&a.dropDown!=null){var c=b.dropDown.value;var d=a.dropDown.value;if(c>=d){aipo.schedule.spanLength=0;b.dropDown.onChangeNoCallback(d);b.dropDown.setValue(d)}else{aipo.schedule.spanLength=(d-c)/86400000}}};aipo.schedule.setIndicator=function(d){if(dojo.isIE!=8){obj_content=dojo.byId("content-"+d);dojo.style(obj_content,"visibility","hidden")}var e=dojo.byId("scheduleGarage-"+d);if(e){var c=e.childNodes.length;for(var b=0;b<c;b++){var a=dojo.byId("schedule-"+b+"-"+d);if(a){dojo.style(a,"visibility","hidden")}}}obj_indicator=dojo.byId("indicator-"+d);dojo.style(obj_indicator,"display","")};aipo.schedule.showScheduleAddDialog=function(g,d,b,c,f){if(!d){d=window.event}var e={x:d.clientX,y:d.clientY};var a=false;dojo.query("a",g).forEach(function(j){if(!a){var h=j.getBoundingClientRect();a=(h.left<=e.x&&e.x<=h.right&&h.top<=e.y&&e.y<=h.bottom)}});if(a){return true}else{aipo.common.showDialog(b,c,f);return false}};aipo.schedule.setWrapperHeight=function(){var a=document.getElementById("modalDialog");if(a){var b=document.getElementById("wrapper");b.style.minHeight=a.clientHeight+"px"}};aipo.schedule.reminderoff=function(){dojo.byId("remindernotifytype").style.display="none";dojo.byId("remindernotifytiming").style.display="none";aipo.schedule.setWrapperHeight()};aipo.schedule.reminderon=function(){dojo.byId("remindernotifytype").style.display="";dojo.byId("remindernotifytiming").style.display="";aipo.schedule.setWrapperHeight()};