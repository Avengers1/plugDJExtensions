$("<style />",{type:"text/css",id:"backgroundImage"}).appendTo("head");API.on(API.CHAT_COMMAND,function(a){if(a.indexOf("/bg")===0){$("#backgroundImage").html("body { background-image: url("+a.substring(4)+") !important; background-size: cover !important; }");$("#room-wheel").remove()}});$("<style />",{type:"text/css",id:"hippoStyle"}).html("div.hippo{ width: 30px; height: 30px; background-image:url(http://i.imgur.com/ROu3xhR.png); background-size: cover; display: inline-block;").appendTo("head");API.on(API.CHAT,function(a){hippo=a.message.replace(/_hippo/gi,"<div class='hippo'></div>");$(".chat-id-"+a.chatID).children(".chat-text").html(": "+hippo);scroll&&$("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight)});API.chatLog("Useless script running 0.001");API.chatLog("Usage: /bg url",true);
