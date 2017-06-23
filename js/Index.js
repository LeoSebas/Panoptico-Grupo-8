
/*! Script para el preloader*/
$(window).load(function() {
        $('#preloader').fadeOut(600, function(){
            $('body').css({'overflow':'visible'});
            $('body').css({'display':'block'});
        });
        
});

/*! Script de los tooltip*/
$( document ).ready(function () {
    $("*[rel=tooltip]").tooltip();
});