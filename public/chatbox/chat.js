$(document).ready(function(){
//     var src = document.getElementById("script-box").src;
//     idc = src.split("idc=")[1];
// console.log(idc);
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
        serverIP:'{{env(SERVER_NODE)}}',
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

            // chatboxDiv.load("http://core-backpack.test/chatbox/template/index.html");
            chatboxDiv.html("<style>body, html{font-family: Red hat Display, sans-serif; font-weight: 400; line-height: 1.25em; letter-spacing: 0.025em; color: #333; background: #f7f7f7;}.center{position: absolute; top: 50%; left: calc(50% + 12rem); -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);}.pic{width: 4rem; height: 4rem; background-size: cover; background-position: center; border-radius: 50%;}.contact{position: relative; margin-bottom: 1rem; padding-left: 5rem; height: 4.5rem; display: flex; flex-direction: column; justify-content: center;}.contact .pic{position: absolute; left: 0;}.contact .name{font-weight: 500; margin-bottom: 0.125rem;}.contact .message, .contact .seen{font-size: 0.9rem; color: #999;}.contact .badge{box-sizing: border-box; position: absolute; width: 1.5rem; height: 1.5rem; text-align: center; font-size: 0.9rem; padding-top: 0.125rem; border-radius: 1rem; top: 0; left: 2.5rem; background: #333; color: white;}.contacts{position: absolute; top: 50%; left: 0; -webkit-transform: translate(-6rem, -50%); transform: translate(-6rem, -50%); width: 24rem; height: 32rem; padding: 1rem 2rem 1rem 1rem; box-sizing: border-box; border-radius: 1rem 0 0 1rem; cursor: pointer; background: white; box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 2rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5); transition: -webkit-transform 500ms; transition: transform 500ms; transition: transform 500ms, -webkit-transform 500ms;}.contacts h2{margin: 0.5rem 0 1.5rem 5rem;}.contacts .fa-bars{position: absolute; left: 2.25rem; color: #999; transition: color 200ms;}.contacts .fa-bars:hover{color: #666;}.contacts .contact:last-child{margin: 0;}.contacts:hover{-webkit-transform: translate(-23rem, -50%); transform: translate(-23rem, -50%);}.chat{position: relative; display: flex; flex-direction: column; justify-content: space-between; width: 24rem; height: 38rem; z-index: 2; box-sizing: border-box; border-radius: 1rem; background: white; box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 0rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);}.chat .contact.bar{flex-basis: 3.5rem; flex-shrink: 0; margin: 1rem; box-sizing: border-box;}.chat .messages{padding: 1rem; background: #f7f7f7; flex-shrink: 2; overflow-y: auto; box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);}.chat .messages .time{font-size: 0.8rem; background: #eee; padding: 0.25rem 1rem; border-radius: 2rem; color: #999; width: -webkit-fit-content; width: -moz-fit-content; width: fit-content; margin: 0 auto;}.chat .messages .message{box-sizing: border-box; padding: 0.5rem 1rem; margin: 1rem; background: #fff; border-radius: 1.125rem 1.125rem 1.125rem 0; min-height: 2.25rem; width: -webkit-fit-content; width: -moz-fit-content; width: fit-content; max-width: 66%; box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);}.chat .messages .message.parker{margin: 1rem 1rem 1rem auto; border-radius: 1.125rem 1.125rem 0 1.125rem; background: #333; color: white;}.chat .messages .message .typing{display: inline-block; width: 0.8rem; height: 0.8rem; margin-right: 0rem; box-sizing: border-box; background: #ccc; border-radius: 50%;}.chat .messages .message .typing.typing-1{-webkit-animation: typing 3s infinite; animation: typing 3s infinite;}.chat .messages .message .typing.typing-2{-webkit-animation: typing 3s 250ms infinite; animation: typing 3s 250ms infinite;}.chat .messages .message .typing.typing-3{-webkit-animation: typing 3s 500ms infinite; animation: typing 3s 500ms infinite;}.chat .input{box-sizing: border-box; flex-basis: 4rem; flex-shrink: 0; display: flex; align-items: center; padding: 0 0.5rem 0 1.5rem;}.chat .input i{font-size: 1.5rem; margin-right: 1rem; color: #666; cursor: pointer; transition: color 200ms;}.chat .input i:hover{color: #333;}.chat .input input{border: none; background-image: none; background-color: white; padding: 0.5rem 1rem; margin-right: 1rem; border-radius: 1.125rem; flex-grow: 2; box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2); font-family: Red hat Display, sans-serif; font-weight: 400; letter-spacing: 0.025em;}.chat .input input:placeholder{color: #999;}@-webkit-keyframes typing{0%, 75%, 100%{-webkit-transform: translate(0, 0.25rem) scale(0.9); transform: translate(0, 0.25rem) scale(0.9); opacity: 0.5;}25%{-webkit-transform: translate(0, -0.25rem) scale(1); transform: translate(0, -0.25rem) scale(1); opacity: 1;}}@keyframes typing{0%, 75%, 100%{-webkit-transform: translate(0, 0.25rem) scale(0.9); transform: translate(0, 0.25rem) scale(0.9); opacity: 0.5;}25%{-webkit-transform: translate(0, -0.25rem) scale(1); transform: translate(0, -0.25rem) scale(1); opacity: 1;}}.pic.stark{background-image: url(\"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/73/SMH_Mentor_6.png\");}.pic.banner{background-image: url(\"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4f/BruceHulk-Endgame-TravelingCapInPast.jpg\");}.pic.thor{background-image: url(\"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/98/ThorFliesThroughTheAnus.jpg\");}.pic.danvers{background-image: url(\"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/HeyPeterParker.png\");}.pic.rogers{background-image: url(\"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Cap.America_%28We_Don%27t_Trade_Lives_Vision%29.png\");}</style><div class=\"center\"> <div class=\"contacts\"> <i class=\"fas fa-bars fa-2x\"></i> <h2> Contacts </h2> <div class=\"contact\"> <div class=\"pic rogers\"></div><div class=\"badge\"> 14 </div><div class=\"name\"> Steve Rogers </div><div class=\"message\"> That is America's ass 🇺🇸🍑 </div></div><div class=\"contact\"> <div class=\"pic stark\"></div><div class=\"name\"> Tony Stark </div><div class=\"message\"> Uh, he's from space, he came here to steal a necklace from a wizard. </div></div><div class=\"contact\"> <div class=\"pic banner\"></div><div class=\"badge\"> 1 </div><div class=\"name\"> Bruce Banner </div><div class=\"message\"> There's an Ant-Man *and* a Spider-Man? </div></div><div class=\"contact\"> <div class=\"pic thor\"></div><div class=\"name\"> Thor Odinson </div><div class=\"badge\"> 3 </div><div class=\"message\"> I like this one </div></div><div class=\"contact\"> <div class=\"pic danvers\"></div><div class=\"badge\"> 2 </div><div class=\"name\"> Carol Danvers </div><div class=\"message\"> Hey Peter Parker, you got something for me? </div></div></div><div class=\"chat\"> <div class=\"contact bar\"> <div style=\"position: absolute; right: 0;\"> <button id=\"hide\">-</button> </div><div class=\"pic stark\"></div><div class=\"name\"> Tony Stark </div><div class=\"seen\"> Today at 12:56 </div></div><div class=\"messages\" id=\"chat\"> <div class=\"time\"> Today at 11:41 </div><div class=\"message parker\"> Hey, man! What's up, Mr Stark? 👋 </div><div class=\"message stark\"> Kid, where'd you come from? </div><div class=\"message parker\"> Field trip! 🤣 </div><div class=\"message parker\"> Uh, what is this guy's problem, Mr. Stark? 🤔 </div><div class=\"message stark\"> Uh, he's from space, he came here to steal a necklace from a wizard. </div><div class=\"message stark\"> <div class=\"typing typing-1\"></div><div class=\"typing typing-2\"></div><div class=\"typing typing-3\"></div></div></div><div class=\"input\"> <i class=\"fas fa-camera\"></i><i class=\"far fa-laugh-beam\"></i><input placeholder=\"Type your message here!\" type=\"text\"/><i class=\"fas fa-microphone\"></i> </div></div><div> <button class=\"button button-primary open\">Open</button> </div><script>var chat=document.getElementById('chat'); chat.scrollTop=chat.scrollHeight - chat.clientHeight; </script></div>");
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