dojo.provide("aipo.manhour");aipo.manhour.onLoadManhourDialog=function(a){var b=dojo.byId("name");if(b){b.focus()}};aipo.manhour.onReceiveMessage=function(b){if(!b){var a=dijit.byId("modalDialog");if(!!a){a.hide()}aipo.portletReload("manhour")}if(dojo.byId("messageDiv")){dojo.byId("messageDiv").innerHTML=b}};aipo.manhour.onReceiveMessageDiag=function(b){if(!b){var a=dijit.byId("modalDialog");if(!!a){a.hide()}aipo.portletReload("manhour")}if(dojo.byId("messageDivDiag")){dojo.byId("messageDivDiag").innerHTML=b}};aipo.manhour.onChangeGroup=function(d,c){var a=dojo.byId("target_group_name");var e=a.options[a.selectedIndex].value;var b=d+"&target_group_name="+e+"&target_user_id=";aipo.viewPage(b,c)};aipo.manhour.onChangeUser=function(f,e){var b=dojo.byId("target_group_name");var c=dojo.byId("target_user_id");var g=b.options[b.selectedIndex].value;var a=c.options[c.selectedIndex].value;var d=f+"&target_group_name="+g+"&target_user_id="+a;aipo.viewPage(d,e)};aipo.manhour.onChangeCategory=function(e,d){var a=dojo.byId("commoncategory");var b=a.options[a.selectedIndex].value;var c=e+"&category_id="+b;aipo.viewPage(c,d)};aipo.manhour.onChangeDate=function(g,f){var c=dojo.byId("view_date_year");var a=dojo.byId("view_date_month");var b=c.options[c.selectedIndex].value;var e=a.options[a.selectedIndex].value;var d=g+"&view_date_year="+b+"&view_date_month="+e;aipo.viewPage(d,f)};