$(document).ready(function () {
    var datos_tipo = [];
    var datos_marca = [];
    var datos_cate = [];
    $('.checkboxTipo').change(function () {
        if (this.checked) {
            var checkin = $(this).attr('value')
            /* datos_tipo.push(checkin); */
            datos_tipo.push(checkin);
        }
        if (!this.checked) {
            var unchecked = $(this).attr('value')
            for (let i = 0; i < datos_tipo.length; i++) {
                if (datos_tipo[i] == unchecked) {
                    datos_tipo.splice(i, 1)
                }
            }
        }
    })
    $('.checkboxMarca').change(function () {
        if (this.checked) {
            var checkin = $(this).attr('value')
            datos_marca.push(checkin);
        }
        if (!this.checked) {
            var unchecked = $(this).attr('value')
            for (let i = 0; i < datos_marca.length; i++) {
                if (datos_marca[i] == unchecked) {
                    datos_marca.splice(i, 1)
                }
            }
        }
    })
    $('.checkboxCate').change(function () {
        if (this.checked) {
            var dato = $(this).attr('value')
            $.ajax({
                url: '/Filtrar_productos',
                type: 'post',
                data: { dato },
                success: function (data) {
                    $('#put_filter_productos').html(data)
                }
            })
            /*var checkin = $(this).attr('value')
            datos_cate.push(checkin);*/
        }
        /* if (!this.checked) {
             var unchecked = $(this).attr('value')
             for (let i = 0; i < datos_cate.length; i++) {
                 if (datos_cate[i] == unchecked) {
                     datos_cate.splice(i, 1)
                 }
             }
         }*/
    })

    var objeto = []
    $('#btn_filtro').on('click', function () {
        /*  $.each(datos_tipo, function (key, value) {
            objeto.push({
                tipo: value
            })
        })
        $.each(datos_marca, function (key, value) {
            objeto.push({
                marca: value
            })
        }) */
        /*  $.each(datos_cate, function (key, value) {
             objeto.push({
                 cate: value
             })
         })  */
        /*datos_tipo = [];
            var datos_marca = [];
            var datos_cate = [*/


        var datos_tipoo = JSON.stringify(datos_tipo)
        var datos_marcaa = JSON.stringify(datos_marca) 
        /*  var datos_catee = JSON.stringify(datos_cate) */
        $.ajax({
            url: '/Filtrar_productos',
            type: 'post',
            data: { datos_tipoo, datos_marcaa },
            success: function (data) {

            }
        })
    })

})

