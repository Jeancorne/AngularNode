$(document).ready(function () {
    
    var imgItems = $('#cantidad li').length; // Numero de Slides
    var imgPos = 1;
    /* for (i = 1; i <= imgItems; i++) {
        $('#item_paginador').append('<li><span class="icon-radio-unchecked"></span></li>');
    } */
    $('#cantidad li').hide(); // Ocultanos todos los slides
    $('#cantidad li:first').show(); // Mostramos el primer slide
    $('.pagination ul li').css({ 'color': 'black' });
    $('.pagination ul li:nth-child(1)').css({ 'color': 'red' }); // Damos estilos al primer item de la paginacion

    // Ejecutamos todas las funciones
    $('.pagination ul li').click(pagination);
    //$('.iconos_carrusel_left').click(prevSlider);
    //$('.iconos_carrusel_right').click(nextSlider);

    $('.icon_left_single').click(prevSlider);
    $('.icon_right_single').click(nextSlider);


    setInterval(function () {
        nextSlider();
    }, 150000);

    // FUNCIONES =========================================================

    function pagination() {
        var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada
        $('#cantidad li').hide(); // Ocultamos todos los slides
        $('#cantidad li:nth-child(' + paginationPos + ')').fadeIn("fast"); // Mostramos el Slide seleccionado
        // Dandole estilos a la paginacion seleccionada
        $('.pagination ul li').css({ 'color': 'black' });
        $(this).css({ 'color': 'red' });
        imgPos = paginationPos;
    }
    function nextSlider() {
        if (imgPos >= imgItems) { imgPos = 1; }
        else { imgPos++; }

        $('.pagination ul li').css({ 'color': 'black' });
        $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': 'red' });

        $('#cantidad li').hide(); // Ocultamos todos los slides
        $('#cantidad li:nth-child(' + imgPos + ')').fadeIn("fast"); // Mostramos el Slide seleccionado
    }
    function prevSlider() {
        if (imgPos <= 1) { imgPos = imgItems; }
        else { imgPos--; }

        $('.pagination ul li').css({ 'color': 'black' });
        $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': 'red' });

        $('#cantidad li').hide(); // Ocultamos todos los slides
        $('#cantidad li:nth-child(' + imgPos + ')').fadeIn("fast"); // Mostramos el Slide seleccionado
    }  
})



