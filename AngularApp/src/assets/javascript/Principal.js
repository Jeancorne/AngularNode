$(document).ready(function () {
    getProductos();
    $('#boton_logeo').on('click', function () {
        $("#exampleModal").modal('show');
    })

})
function getProductos() {
    $.ajax({
        url: '/GetProductos',
        type: 'post',
        success: function (data) {
            $('.Productos_listas').html(data)


            
            $('.productomodal').on('click', function () {
                var value = $(this).attr('value')
                //alert(value)
                //var target = ($(this).attr('data-toggle'));
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



        }
    })
}
