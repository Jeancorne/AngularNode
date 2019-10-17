$(document).ready(function () {
    var datos = [];
    var objeto = [];
    poner_categoria()
    Agregar_tipo()
    agregar_marca()
    $('#add_cate').on('click', function () {
        $("#categoria_modal").modal('show');
    })

    $('#add_tipo').on('click', function () {
        $("#tipo_modal").modal('show');
    })
    $('#add_marca').on('click', function () {
        $("#marca_modal").modal('show');
    })

    $('#form_marca_nueva').on('submit', function (e) {
        e.preventDefault();
        var data = $('#marca_popup').val()
        agregar_marca(data)
    })


    

    $('#form_tipo_nueva').on('submit', function (e) {
        e.preventDefault();
        var data = $('#tipo_popup').val()
        Agregar_tipo(data)
    })
    $('#form_categoria_nueva').on('submit', function (e) {
        e.preventDefault();
        var data = $('#categoria_popup').val()
        poner_categoria(data)
    })
    $('#formulario_productos input:checkbox').on('change', function () {
        var ischecked = $(this).is(':checked');
        if (ischecked) {
            var checkin = $(this).val();
            datos.push(checkin);
        }
        if (!ischecked) {
            var unchecked = $(this).val();
            for (let i = 0; i < datos.length; i++) {
                if (datos[i] == unchecked) {
                    datos.splice(i, 1)
                }
            }
        }
    })
    $('input[type=file]').on('change', function () {
        readURL(this);
        var imagen_prueba = $(this).val().replace("C:\\fakepath\\", "");
        var preimg = $(this).attr('src')
        $('#blah').css("display", "block");
        $('#name_img').text(imagen_prueba)
    })



    $('#formulario_productos').on('submit', function (e) {
        e.preventDefault();
        var data = new FormData(this);
        $.each(datos, function (key, value) {
            var cantidad = $("#" + value).val();
            objeto.push({
                talla: value,
                cantidad: cantidad
            })
        })
        data.append('ched', (JSON.stringify(objeto)))
        empty()
        $.ajax({
            url: '/Agregar_producto',
            type: 'post',
            processData: false,
            contentType: false,
            data: data,
            success: function (data) {

            }
        })
    })
})

function empty() {
    objeto = [];
}

function agregar_marca(dato) {
    $.ajax({
        url: '/Agregar_marca',
        type: 'post',
        data: { cate: dato },
        success: data => {      
            $('#put_marcas').html(data)
            llenar_ventana_marca()
            $('#add_marca').on('click', function () {
                $("#marca_modal").modal('show');
            })
           
        },
        error: er => {
            swal({
                title: "warning",
                text: er,
                icon: "warning",
                button: "Ok",
              });
        }
    })
}
function llenar_ventana_marca(dato) {
    $.ajax({
        url: '/llenar_ventana_marca',
        type: 'post',
        data: { dato: dato },
        success: data => {
            $('#lista_result_marca').html(data)

            $('.btn_eliminar_marca').on('click', function () {
                var value = $(this).attr('value')
                
                llenar_ventana_marca(value)
                agregar_marca()
            })

        }
    })
}




function Agregar_tipo(name) {
    $.ajax({
        url: '/Agregar_tipos',
        type: 'post',
        data: { cate: name },
        success: data => {
            $('.put_tipo').html(data)
           // $("#tipo_modal").modal('hide');
            $('#add_tipo').on('click', function () {
                $("#tipo_modal").modal('show');
            })
            Put_tipo()
        },
        error: er => {
            swal({
                title: "warning",
                text: er,
                icon: "warning",
                button: "Ok",
              });
        }
    })
}
function Put_tipo(dato) {
    $.ajax({
        url: '/put_tipos',
        type: 'post',
        data: { dato: dato },
        success: data => {
            $('#lista_result_tipos').html(data)
            $('.btn_eliminar_tipo').on('click', function () {
                var value = $(this).attr('value')
                Put_tipo(value)
                Agregar_tipo()
            })
        }
    })
}
function poner_categoria(name) {
    $.ajax({
        url: '/Agregar_categoria',
        type: 'post',
        data: { cate: name },
        success: data => {
            $('#put_categorias').html(data)
            //$("#categoria_modal").modal('hide');
            $('#add_cate').on('click', function () {
                $("#categoria_modal").modal('show');
            })
            Put_categoria()
        },
        error: er => {

        }
    })
}
function Put_categoria(dato) {
    $.ajax({
        url: '/llenar_ventana_categoria',
        type: 'post',
        data: { dato: dato },
        success: data => {
            $('#lista_result_categorias').html(data)
            $('.btn_eliminar_categoria').on('click', function () {
                var value = $(this).attr('value')
                Put_categoria(value)
                poner_categoria()
            })
        }
    })
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}