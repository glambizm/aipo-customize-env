dojo.provide("aipo.workflow.MemberNormalSelectList");dojo.require("aipo.widget.MemberNormalSelectList");dojo.declare("aipo.workflow.MemberNormalSelectList",[aipo.widget.MemberNormalSelectList],{addMember:function(f,b){if(document.all){var a=f.options;var g=b.options;if(a.length==1&&a[0].value==""){return}for(i=0;i<a.length;i++){if(!a[i].selected){continue}var e=false;for(j=0;j<g.length;j++){if(g[j].value==a[i].value){e=true;break}}if(e){continue}var c=document.createElement("OPTION");c.value=a[i].value;c.text=a[i].text;c.selected=true;if(g.length==1&&g[0].value==""){g.remove(0)}if(this.memberLimit!=0&&b.options.length>=this.memberLimit){return}var d=document.createElement("OPTION");d.value=a[i].value;d.text=(j+1)+". "+a[i].text;d.selected=true;g.add(d,g.length)}}else{var a=f.options;var g=b.options;if(a.length==1&&a[0].value==""){return}for(i=0;i<a.length;i++){if(!a[i].selected){continue}var e=false;for(j=0;j<g.length;j++){if(g[j].value==a[i].value){e=true;break}}if(e){continue}var c=document.createElement("OPTION");c.value=a[i].value;c.text=a[i].text;c.selected=true;if(b.options.length==1&&b.options[0].value==""){b.removeChild(b.options[0])}if(this.memberLimit!=0&&b.options.length>=this.memberLimit){return}var d=document.createElement("OPTION");d.value=a[i].value;d.text=(j+1)+". "+a[i].text;d.selected=true;b.insertBefore(d,g[g.length])}}},removeMemberSync:function(){var a=dojo.byId(this.memberToId);if(document.all){var b=a.options;for(i=0;i<b.length;i++){if(b[i].selected){b.remove(i);i-=1;if(i+1<b.length){for(j=i+1;j<b.length;j++){if(j<9){b[j].text=b[j].text.slice(3)}else{b[j].text=b[j].text.slice(4)}b[j].text=(j+1)+". "+b[j].text}}}}}else{var b=a.options;for(i=0;i<b.length;i++){if(b[i].selected){a.removeChild(b[i]);i-=1;if(i+1<b.length){for(j=i+1;j<b.length;j++){if(j<9){b[j].text=b[j].text.slice(3)}else{b[j].text=b[j].text.slice(4)}b[j].text=(j+1)+". "+b[j].text}}}}}}});