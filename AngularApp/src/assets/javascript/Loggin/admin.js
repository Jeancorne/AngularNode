$(document).ready(function () {
    getProductos();
    cargar_carrito() 
    $('.add_car_single').on('click', function () {
        var value = $(this).attr('value')
        $.ajax({
            url: '/PutCarrito',
            type: 'post',
            data: { value: value },
            success: function (data) {
                $('.cart_add').html(data)
                cargar_carrito()
            }
        })
    })

    $('.ver_producto').on('click', function () {
        var value = $(this).attr('value');
        $.ajax({
            url: '/obtener_single',
            type: 'post',
            data: { data: value },
            success: function (data) {
                
            },
            error: function (er) {
                
            }
        })
    })
})


function cargar_carrito() {
    $.ajax({
        url: '/PutCarrito',
        type: 'post',
        success: function (data) {
            $('.cart_add').html(data)
            $('.remove').on('click', function () {
                var id_pro = $(this).attr('value')
                remove_producto(id_pro)
            })
            $('.product_remove').on('click', function () {
                var id_producto = $(this).attr('value');
                $.ajax({
                    url: '/DeleteCarroDetalle',
                    type: 'post',
                    data: { value: id_producto },
                    success: function (data) {
                        $('.body_children').html(data)
                        cargar_carrito()
                    }
                })
            })
        }
    })
}

function getProductos() {
    $.ajax({
        url: '/GetProductos',
        type: 'post',
        success: function (data) {
            $('.Productos_listas').html(data)
            $('.productomodal').on('click', function () {
                var value = $(this).attr('value')
                $.ajax({
                    url: '/GetProductoOne',
                    type: 'post',
                    data: { value: value },
                    success: function (data) {
                        $('.ponermodal').html(data)
                        $('#productomodal').modal("show");
                    }
                })
            })
            $('.cart_dato').on('click', function () {
                var value = $(this).attr('value')
                $.ajax({
                    url: '/PutCarrito',
                    type: 'post',
                    data: { value: value },
                    success: function (data) {
                        $('.cart_add').html(data)
                        cargar_carrito()
                        $('.remove').on('click', function () {
                            var id_pro = $(this).attr('value')
                            alert(id_pro)
                            remove_producto(id_pro)
                        })
                    }
                })
            })
        }
    })
}
function remove_producto(val) {
    $.ajax({
        url: '/DeleteCarrito',
        type: 'post',
        data: { value: val },
        success: function (data) {
            $('.cart_add').html(data)
            cargar_carrito()
        }
    })
}

