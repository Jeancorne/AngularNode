$(document).ready(function () {
    $("#poner").animate({ scrollTop: $('#poner').prop("scrollHeight") }, 500);
})


function cargar_infochat(nameuser, emailuser, roleuser, iduser) {

    var socket = io.connect('http://localhost:3000/admichat')
    if (roleuser == "usuario") {
        socket.on('connect', function () {
            socket.emit('GetUser', nameuser, emailuser, roleuser, iduser);
        });

        $('#datasend').click(function (roleuser) {
            var message = $('#data').val();
            $('#data').val('');
            socket.emit('sendchatuser', message, iduser);
        });

        socket.on('GetMensajesUser', async function (id_chat) {
            $.ajax({
                url: '/getchat',
                type: 'post',
                data: { id_chat: id_chat },
                success: function (data) {
                    $('#conversation').html(data)
                }
            })
        });
        

        socket.on('updatechat', function (username, data) {
            $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
        });
    }

    if (roleuser == "admin") {
        socket.on('connect', function () {
            socket.emit('GetAdmin', nameuser, emailuser, roleuser, iduser);
        });

        $(document).on("click", ".pep", function () {
            var room = $(this).data('value')
            switchRoom(room)
        })

        function switchRoom(room) {
            socket.emit('switchRoom', room);
        }
        $('#datasend').click(function () {
            var message = $('#data').val();
            $('#data').val('');
            socket.emit('sendchatadmin', message);
        });

        socket.on('GetMensajes', async function (id_chat) {
            $.ajax({
                url: '/getchat',
                type: 'post',
                data: { id_chat: id_chat },
                success: function (data) {
                    $('#conversation').html(data)
                }
            })
        });

        socket.on('updaterooms', async function (rooms) {
            $('#rooms').append('<div class="pep" data-value="' + rooms[0] + '"  >' + rooms[1] + '</div>');
        });

        socket.on('updatechat', function (username, data) {
            // alert("qweqwe")          
            // console.log(username + "  " + data)
            $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
        });

    }




    /*  var socket = io.connect('http://localhost:3000/admichat')
     if (roleuser == "admin") {
         socket.on('updaterooms', function (rooms, current_room) {
             $('#rooms').empty();            
             $.each(rooms, function (key, value) {
                 $('#rooms').append('<div class="pep" data-value="' + value + '"  >' + value + '</div>');
             });
         });
     }
     socket.on('updatechat', function (username, data) {
         $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
     });
 
     
 
     $(document).on("click", ".pep", function () {
         var val = $(this).data('value')
         switchRoom(val)
     })
 
     function switchRoom(room) {
         socket.emit('switchRoom', room);
     }
 
     $('#datasend').click(function () {
         var message = $('#data').val();
         $('#data').val('');
         socket.emit('sendchat', message);
     });
 
  */






    /* if (roleuser == "admin") {
        const socket = io.connect('http://localhost:3000/admichat');

        socket.on('connect', function (roleuser) {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            socket.emit('adduser', nameuser);
        });

        // listener, whenever the server emits 'updatechat', this updates the chat body
        socket.on('updatechat', function (username, data) {
            $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
        });

        // listener, whenever the server emits 'updaterooms', this updates the room the client is in
        socket.on('updaterooms', function (rooms, current_room) {
            $('#rooms').empty();
            //console.log(rooms)
            $.each(rooms, function (key, value) {
                $('#rooms').append('<div class="pep" data-value="' + value + '"  >' + value + '</div>');

            });
        });

        $(document).on("click", ".pep", function () {
            var val = $(this).data('value')
            switchRoom(val)
        })

        function switchRoom(room) {
            socket.emit('switchRoom', room);
        }

        $(function () {
            // when the client clicks SEND
            $('#datasend').click(function () {

                var message = $('#data').val();
                $('#data').val('');
                // tell server to execute 'sendchat' and send along one parameter
                socket.emit('sendchat', message);
            });

            // when the client hits ENTER on their keyboard            
        });
    } else {
        const socket = io.connect('http://localhost:3000/userchat');

        socket.on('connect', function (roleuser) {        
            socket.emit('addusuario', nameuser);
        });
        $('#datasend').click(function () {
            var message = $('#data').val();
            $('#data').val('');                    
            socket.emit('sendchat', message);
        });
        socket.on('updatechatt', function (data) {          
            $('#conversation').append('<b>:</b> ' + data + '<br>');
        });
        socket.on('updaterooms', function (rooms, current_room) {
            $('#rooms').empty();
            $.each(rooms, function (key, value) {
                $('#rooms').append('<div class="pep" data-value="' + value + '"  >' + value + '</div>');
            });
        });

        socket.on('updaterooms', function (rooms, current_room) {
            $('#rooms').empty();           
            $.each(rooms, function (key, value) {
                $('#rooms').append('<div class="pep" data-value="' + value + '"  >' + value + '</div>');

            });
        });
    } */


}





function validar(mensa) {

}


function oelo(name, email, role, iduser) {

    /* $.ajax({
         url: '/get_chat',
         type: 'post',
         data:
         success: function (data) {
             var as = data
             var nameuser = as.datoJson.name
             var emailuser = as.datoJson.email
             var roleuser = as.datoJson.role
             var iduser = as.datoJson.id
             probar(nameuser, emailuser, roleuser, iduser)
         }
     }).done(function (data) {
     })*/


    // io.sockets.in(room).emit('event', data);
    //console.log(iduser)

    var socket = io.connect('http://localhost:3000')


    var username = name
    var chatroom = $('#poner')
    var connectados = $('#here')

    var room = "abc123";
    //socket.emit('room', room);
    /* console.log(delete users[clients]);
    */

    /*socket.on('connect', function () {
        socket.emit('register', iduser, username)
        socket.emit('room', username, room);
    });*/


    $("#send_message").click(function () {
        var message = $("#message").val()
        message = message.trim()
        if (message != "") {
            socket.emit('new_message', { message: message })
            $("#poner").animate({ scrollTop: $('#poner').prop("scrollHeight") }, 1000);
            $('#message').val('')
            $('#poner').scrollTop()
            socket.broadcast.emit('typing', function () {
                $("#poner").animate({ scrollTop: $('#poner').prop("scrollHeight") }, 1000);
            })
        } else {
            alert("No puede dejar vacíos")
        }
    })


    //socket.emit('change_username', { username: username })name, email, role, iduser
    socket.emit('userconect', { name: name, email: email, role: role, iduser: iduser })

    /*socket.on('login', function (data) {
        connectados.append("<li class='p-2'>" +
            "<a href='#' class='d-flex justify-content-between'>" +
            "<div class='text-small'>" +
            "<strong id='member'></strong> " +
            " <p class='last-message text-muted'>" + data.username.username + "</p>" +
            "</div>" +
            "<div class='chat-footer'>" +
            "  <span class='text-muted float-right'><i class='fas fa-check'" +
            "         aria-hidden='true'></i></span>" +
            "</div>" +
            "</a>" +
            "</li>")
    })*/



    /*socket.on('connectedUser', function (data) {
        connectados.append("<li class='p-2'>" +
            "<a href='#' class='d-flex justify-content-between'>" +
            "<div class='text-small'>" +
            "<strong id='member'></strong> " +
            " <p class='last-message text-muted'>" + data.username + "</p> " +
            "</div>" +
            "<div class='chat-footer'>" +
            "  <span class='text-muted float-right'><i class='fas fa-check'" +
            "         aria-hidden='true'></i></span>" +
            "</div>" +
            "</a>" +
            "</li>")
    })*/
    socket.on("new_message", function (data) {
        //feedback.html('');
        //chatroom.append()
        var today = new Date();
        var time = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate() + "  " + today.getHours() + ":" + today.getMinutes();
        $('#poner').append("<div class='body_mensaje'>" +
            "<div class='img_mensaje' >" +
            "<img src='https://staticuestudio.blob.core.windows.net/buhomag/2017/02/10114005/castlevania-netflix.jpg?auto=compress,format'>" +
            "</div>" +
            "<div class='txt_mensaje'>" +
            "<p> <strong>" + data.nameuser + "</strong>" + "  " + time + "</p>" +
            data.message +
            "</div>" +
            "</div>")
    })
    /*  message.bind("keypress", () => {
          socket.emit('typing')
      })*/
}








