dojo.provide("aipo.timecardsettings");aipo.timecardsettings.onReceiveMessage=function(b){if(!b){var a=dijit.byId("modalDialog");if(a){a.hide()}aipo.portletReload("timecardsettings")}if(dojo.byId("messageDiv")){dojo.byId("messageDiv").innerHTML=b}};aipo.timecardsettings.hideDialog=function(){var a=dijit.byId("modalDialog");if(a){a.hide()}aipo.portletReload("timecardsettings")};