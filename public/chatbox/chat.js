$(document).ready(function(){
    var src = document.getElementById("script-box").src;
    idc = src.split("idc=")[1];
console.log(idc);
    // fetch(
    //     'http://127.0.0.1:5000/authorize?idc=12',
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '',
    //         },
    //         method: 'GET',
    //     }
    // ).then(function(data) {
    //     return data.json();
    // }).then(function(parsed){
    //     api_data = parsed;
    // });

    var Chatbox = {
        socket:null,
        serverIP:'http://127.0.0.1:5000',
        bottom:304,
        right:390,
        init: function () {
            // connect với socket
            if(Chatbox.socket == null){
                // chuyển giao thức thành websocket
                Chatbox.socket = io.connect(Chatbox.serverIP, {
                    transports: ['websocket']
                });
                Chatbox.socket.on('abc', function (data) {
                    console.log(data);
                });
                Chatbox.socket.on('per', function (data) {
                    console.log(data);
                });
                Chatbox.socket.once('total-user', function (data) {
                    console.log(data);
                });
                // Chatbox.socket.once('connect', function(){
                //     console.log('connected socket io');
                // });
            }

            var box = document.createElement('div');
            box.setAttribute('id', 'chat-box');
            document.body.appendChild(box);

            var chatboxDiv = $("#chat-box");

            chatboxDiv.load("http://core-backpack.test/chatbox/template/index.html");
            // set vị trí box
            chatboxDiv.css({bottom: Chatbox.bottom, right: Chatbox.right, position:'absolute'});
            // ẩn box
            $(document).on("click", "#hide", function () {
                $(".contacts").hide();
                $(".chat").hide();
            });
            // mở box
            $(document).on("click", ".open", function () {
                $(".contacts").show();
                $(".chat").show();
            });

        }
    }

    Chatbox.init();
});