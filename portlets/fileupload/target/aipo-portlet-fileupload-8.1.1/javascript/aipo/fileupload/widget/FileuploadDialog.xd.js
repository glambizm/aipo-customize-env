dojo._xdResourceLoaded({depends:[["provide","aipo.fileupload.widget.FileuploadDialog"],["provide","aipo.fileupload.widget.FileuploadDialogUnderlay"],["require","aimluck.widget.Dialog"]],defineResource:function(a){if(!a._hasResource["aipo.widget.FileuploadDialog"]){a._hasResource["aipo.widget.FileuploadDialog"]=true;a.provide("aipo.fileupload.widget.FileuploadDialog");a.provide("aipo.fileupload.widget.FileuploadDialogUnderlay");a.provide("aipo.fileupload.widget.YoutubeDialog");a.provide("aipo.fileupload.widget.YoutubeDialogUnderlay");a.require("aimluck.widget.Dialog");a.declare("aipo.fileupload.widget.FileuploadDialogUnderlay",[aimluck.widget.DialogUnderlay],{templateString:"<div class=fileuploadDialogUnderlayWrapper id='${id}_underlay'><div class=fileuploadDialogUnderlay dojoAttachPoint='node'></div></div>"});a.declare("aipo.fileupload.widget.FileuploadDialog",[aimluck.widget.Dialog],{loadingMessage:"<div class='indicator'>読み込み中...</div>",templateCssString:"fileuploadDialog",templateString:"<div id='fileuploadDialog' class='${templateCssString}' dojoattachpoint='wrapper'><span dojoattachpoint='tabStartOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap'tabindex='0'></span><span dojoattachpoint='tabStart' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><div dojoattachpoint='containerNode' style='position: relative; z-index: 2;'></div><span dojoattachpoint='tabEnd' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span><span dojoattachpoint='tabEndOuter' dojoonfocus='trapTabs' dojoonblur='clearTrap' tabindex='0'></span></div>",_setup:function(){this._modalconnects=[];if(this.titleBar){this._moveable=new a.dnd.Moveable(this.domNode,{handle:this.titleBar})}this._underlay=new aipo.fileupload.widget.FileuploadDialogUnderlay();var b=this.domNode;this._fadeIn=a.fx.combine([a.fadeIn({node:b,duration:this.duration}),a.fadeIn({node:this._underlay.domNode,duration:this.duration,onBegin:a.hitch(this._underlay,"show")})]);this._fadeOut=a.fx.combine([a.fadeOut({node:b,duration:this.duration,onEnd:function(){b.style.display="none"}}),a.fadeOut({node:this._underlay.domNode,duration:this.duration,onEnd:a.hitch(this._underlay,"hide")})])}});a.declare("aipo.fileupload.widget.YoutubeDialog",[aimluck.widget.Dialog],{loadingMessage:"<div class='indicator'>読み込み中...</div>",templateCssString:"youtubeDialog",templateString:"<div id='youtubeDialog' class='auiPopup imgPopup ${templateCssString}' dojoattachpoint='wrapper' style='max-width:640px;left:50%;top:50%;margin:-200px 0 0 -320px;'></div>",_setup:function(){this._modalconnects=[];if(this.titleBar){this._moveable=new a.dnd.Moveable(this.domNode,{handle:this.titleBar})}this._underlay=new aipo.fileupload.widget.YoutubeDialogUnderlay();var b=this.domNode;this._fadeIn=a.fx.combine([a.fadeIn({node:b,duration:this.duration}),a.fadeIn({node:this._underlay.domNode,duration:this.duration,onBegin:a.hitch(this._underlay,"show")})]);this._fadeOut=a.fx.combine([a.fadeOut({node:b,duration:this.duration,onEnd:function(){b.style.display="none"}}),a.fadeOut({node:this._underlay.domNode,duration:this.duration,onEnd:a.hitch(this._underlay,"hide")})])}})}}});