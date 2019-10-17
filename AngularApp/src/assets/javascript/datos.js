$(document).ready(function () {
    getdates()
    //console.log(neo)
    
})

function getdates() {
    var oe = "ww"
    $.ajax({
        url: '/pro',
        type: 'post',
        data: { oe: oe },
        success: function (data) {
            var as = data
            var nameuser = as.datoJson.name
            var emailuser = as.datoJson.email
            var roleuser = as.datoJson.role
            var iduser = as.datoJson.id
            $.ajax({
                url: '/getchat',
                type: 'post',
                data: { iduser: iduser },
                success: function(data){
                   //
                   //console.log(data)
                   //$('#poner').append(data)
                }
            })
           // nameuser, emailuser, roleuser, iduser)     
            cargar_infochat(nameuser, emailuser, roleuser, iduser)
        }
    }).done(function (data) {
        ///$('#').html()
    })
}


function probar(name, email, role, iduser) {
    $('#member').text(name)
    $('#emailuser').text(email)
    oelo(name, email, role, iduser)
}
