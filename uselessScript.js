$("<style />",{type:"text/css",id:"backgroundImage"}).appendTo("head");API.on(API.CHAT_COMMAND,function(a){if(a.indexOf("/bg")===0&&a.indexOf("http")){$("#backgroundImage").html("body { background-image: url("+a.substring(4)+") !important; background-size: cover !important; }");$("#room-wheel").remove()}});$("<style />",{type:"text/css",id:"hippoStyle"}).html("div.hippo{ width: 30px; height: 30px; background-image:url(http://i.imgur.com/ROu3xhR.png); background-size: cover; display: inline-block;").appendTo("head");API.on(API.CHAT,function(a){if(a.message.indexOf("_hippo")>-1){$(".chat-id-"+a.chatID).children(".chat-text").html($(".chat-id-"+a.chatID).children(".chat-text").html().replace(/_hippo/gi,"<div class='hippo'></div>"));scroll&&$("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight)}});$("#chat-input-field").on("keydown",function(b){if(b.keyCode===13){var a=$("#chat-messages").children();$(a[a.length-1]).children(".chat-text").html($(a[a.length-1]).children(".chat-text").html().replace(/_hippo/gi,"<div class='hippo'></div>"));scroll&&$("#chat-messages").scrollTop($("#chat-messages")[0].scrollHeight)}});API.chatLog("Running useless script version 0.003",true);API.chatLog("Usage: /bg url");
