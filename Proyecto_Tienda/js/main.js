/*Slider*/
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}
/*Zoom*/
$(".imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var data = $(this).attr("data");
    var lightbox = '<div class="ligthbox">'+
                        '<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
                        '<div class="btn-close">X</div>'+
                    '</div>';

    $("body").append(lightbox)
    $("#zoom_mw").elevateZoom({
        scrollZoom : true,
        cursor: "crosshair",
        zoomWindowOffetx: 15
    });
    $(".btn-close").click(function(){
        $(".ligthbox").remove();
    })
})
/*Barra Lateral*/
$(document).ready(main);
 
var contador = 1;
 
function main () {
    $('.icono').click(function(){
        if (contador == 1) {
            $('.movil').animate({
                left: '0'

            });
            contador = 0;
        } else {
            contador = 1;
            $('.movil').animate({
                left: '-100%'
            });
        }
    });
 
    // Mostramos y ocultamos submenus
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}
 
/*Fin de la Barra Lateral*/



// Variables

let nav = document.getElementById('movil');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open','enlace-tutorial');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
       
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#fff';
    }else{
      
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
});
window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});