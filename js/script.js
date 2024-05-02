$(document).ready(function() {

    // activar menu hambuguesa
    $('#menu').click(function() {

        $(this).toggleClass('fa-times');
        $('.navegacion').toggleClass('nave-toggle');

    });

    // no apareca el menu cuando se pone grande
    $(window).on('scroll load', function() {

        $('#menu').removeClass('fa-times');
        $('.navegacion').removeClass('nave-toggle');

    })

    $('.montos input').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    // smooth scroolling - dezlizamiento de pagina al elegir un a

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });

});