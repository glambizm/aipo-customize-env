dojo.provide("aipo.gpdb");dojo.require("aipo.widget.DropdownDatepicker");aipo.gpdb.ITEM_TYPE_TEXT="01";aipo.gpdb.ITEM_TYPE_TEXTAREA="02";aipo.gpdb.ITEM_TYPE_LINK="03";aipo.gpdb.ITEM_TYPE_SELECT="04";aipo.gpdb.ITEM_TYPE_SELECT_MULTI="05";aipo.gpdb.ITEM_TYPE_FILE="06";aipo.gpdb.ITEM_TYPE_IMAGE="07";aipo.gpdb.ITEM_TYPE_SEQ="08";aipo.gpdb.ITEM_TYPE_MAIL="09";aipo.gpdb.ITEM_TYPE_DATE="10";aipo.gpdb.ITEM_TYPE_CREATE_DATE="11";aipo.gpdb.ITEM_TYPE_UPDATE_DATE="12";aipo.gpdb.ITEM_TYPE_CREATE_USER="13";aipo.gpdb.ITEM_TYPE_UPDATE_USER="14";aipo.gpdb.onLoadGpdbDialog=function(a){var e=dojo.byId("urlUserlist"+a).value;var c=dojo.byId("loginUser"+a).value;var b=dojo.byId("gpdbUser"+a).value;if(b==0){b=c}if(e){aipo.gpdb.changeGroup(e,"LoginUser",b)}var d=dojo.byId("gpdb_name");if(d){d.focus()}};aipo.gpdb.onLoadCategoryDialog=function(a){var b=dojo.byId("category_name");if(b){b.focus()}};aipo.gpdb.formSwitchKubunInput=function(a){if(a.form.is_new_kubun.value=="TRUE"||a.form.is_new_kubun.value=="true"){a.value=aimluck.io.escapeText("gpdb_val_switch1");aipo.gpdb.formKubunInputOff(a.form)}else{a.value=aimluck.io.escapeText("gpdb_val_switch2");aipo.gpdb.formKubunInputOn(a.form)}};aipo.gpdb.formKubunInputOn=function(a){dojo.byId("gpdbKubunSelectField").style.display="none";dojo.byId("gpdbKubunInputField").style.display="";a.is_new_kubun.value="TRUE"};aipo.gpdb.formKubunInputOff=function(a){dojo.byId("gpdbKubunInputField").style.display="none";dojo.byId("gpdbKubunSelectField").style.display="";a.is_new_kubun.value="FALSE"};aipo.gpdb.changeGroup=function(a,c,b){aimluck.utils.form.createSelect("user_id","destuserDiv",a+"?mode=group&groupname="+c+"&inc_luser=true","userId","aliasName",b,"",'class="w49"')};aipo.gpdb.onReceiveMessage=function(c,b){if(!c){var a=dijit.byId("modalDialog");if(a){a.hide()}aipo.portletReload("gpdb")}if(dojo.byId("messageDiv")){dojo.byId("messageDiv").innerHTML=c}};aipo.gpdb.onListReceiveMessage=function(b){if(!b){var a=dijit.byId("modalDialog");if(a){a.hide()}aipo.portletReload("gpdb")}if(dojo.byId("listmessageDiv")){dojo.byId("listmessageDiv").innerHTML=b}};aipo.gpdb.doKeywordSearch=function(a,b){var c=new Array(2);c[0]=["template","GpdbListScreen"];c[1]=["keyword",dojo.byId("q"+b).value];aipo.viewPage(a,b,c)};aipo.gpdb.formFlgToggle=function(a,b){dojo.byId(b).value=a.checked?"t":"f"};aipo.gpdb.checkOnWithTitle=function(a,b){if(a.checked){dojo.byId(b+"required_flg_id").checked=true;dojo.byId("required_flg").value="t";dojo.byId(b+"list_flg_id").checked=true;dojo.byId("list_flg").value="t";dojo.byId(b+"detail_flg_id").checked=true;dojo.byId("detail_flg").value="t"}};aipo.gpdb.formTypeChanged=function(a){dojo.byId("type_select").style.display="none";dojo.byId("kubun_select").style.display="none";dojo.byId("tr_size_col").style.display="none";dojo.byId("tr_size_row").style.display="none";dojo.byId("tr_line").style.display="none";dojo.byId("tr_required").style.display="none";if(a.value==aipo.gpdb.ITEM_TYPE_SELECT||a.value==aipo.gpdb.ITEM_TYPE_SELECT_MULTI){dojo.byId("type_select").style.display="";dojo.byId("kubun_select").style.display="";dojo.byId("tr_required").style.display="";if(a.value==aipo.gpdb.ITEM_TYPE_SELECT_MULTI){}}else{if(a.value==aipo.gpdb.ITEM_TYPE_TEXT||a.value==aipo.gpdb.ITEM_TYPE_LINK||a.value==aipo.gpdb.ITEM_TYPE_MAIL){dojo.byId("tr_required").style.display=""}else{if(a.value==aipo.gpdb.ITEM_TYPE_TEXTAREA){dojo.byId("tr_required").style.display=""}else{if(a.value==aipo.gpdb.ITEM_TYPE_FILE||a.value==aipo.gpdb.ITEM_TYPE_IMAGE||a.value==aipo.gpdb.ITEM_TYPE_DATE){dojo.byId("tr_required").style.display=""}}}}};aipo.gpdb.removeSelectItem=function(b){var a=dojo.byId("select_item");a.removeChild(dojo.byId("gpdb_item_kubun_li_"+b))};aipo.gpdb.addSelectItem=function(){var d=dojo.byId("select_item");var f=d.children.length;f++;var c=document.createElement("input");c.type="text";c.id="gpdb_item_kubun_"+f;c.name="gpdb_item_kubun";c.className="text";c.value="";c.style.imeMode="active";c.style.width="50%";c.maxLength=50;var e=document.createTextNode(" 削除");var a=document.createElement("a");a.appendChild(e);a.onclick=function(){aipo.gpdb.removeSelectItem(f)};a.href="javascript:void(0);";var b=document.createElement("li");b.id="gpdb_item_kubun_li_"+f;b.appendChild(c);b.appendChild(a);d.appendChild(b)};aipo.gpdb.sortsubmit=function(c){var a=c.gpdb_so.options;var b="";for(i=0;i<a.length;i++){a[i].selected=false}if(a.length>0){b=a[0].value;for(i=1;i<a.length;i++){b=b+","+a[i].value}}c.positions.value=b};aipo.gpdb.checkOnSort=function(a){if(a.checked){dojo.byId("tr_asc_desc").style.display=""}else{dojo.byId("tr_asc_desc").style.display="none"}};aipo.gpdb.replaceFileInfo=function(a,e,c,b){var d=dojo.byId("attachments_"+b);if(d.nodeName.toLowerCase()=="ul"){aimluck.io.replaceFileToList(d,e,c)}else{aimluck.io.addOption(d,e,c,false)}dojo.byId("folderName_"+b).value=a};aipo.gpdb.toggleMenu=function(f,e,d){var c=e.getBoundingClientRect();var b=document.documentElement.getBoundingClientRect();if(f.style.display=="none"){dojo.query("div.menubar").style("display","none");var a={left:document.documentElement.scrollLeft||document.body.scrollLeft,top:document.documentElement.scrollTop||document.body.scrollTop};f.style.opacity="0";f.style.display="block";if(b.right-f.clientWidth>c.left){f.style.left=c.left+a.left+"px"}else{f.style.left=c.right-f.clientWidth+a.left+"px"}if(b.bottom-f.clientHeight>c.bottom||d){f.style.top=c.bottom+a.top+"px"}else{f.style.top=c.top-f.clientHeight+a.top+"px"}f.style.opacity=""}else{dojo.query("div.menubar").style("display","none")}};aipo.gpdb.downloadCsv=function(a){window.location.href=a};