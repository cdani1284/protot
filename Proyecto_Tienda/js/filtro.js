$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });

    let venta = $('#bt-enlace-venta').offset().top,
        tutorial = $('#bt-enlace-tutorial').offset().top,
        zapatillas = $('#bt-enlace-zapatillas').offset().top,
  

    window.addEventListener('resize', function(){
        let venta = $('#bt-enlace-venta').offset().top,
        tutorial = $('#bt-enlace-tutorial').offset().top,
        zapatillas = $('#bt-enlace-zapatillas').offset().top,
      
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-tutorial').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: venta -100
        },600);
    });

    $('#enlace-venta').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: tutorial -100
        },600);
    });

    $('#enlace-zapatillas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: zapatillas -100
        },600);
    });
  
});