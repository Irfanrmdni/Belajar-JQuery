$(document).ready(function () {
    // hide effect
    $('#hideEffect').on('click', function () {
        $('.kotak1').hide(800);
    });
    // show effect
    $('#showEffect').on('click', function () {
        $('.kotak1').show(800);
    });
    // fadeOut effect
    $('#fadeOut').on('click', function () {
        $('.kotak2').fadeOut('slow');
        $('.kotak3').fadeOut('normal');
        $('.kotak4').fadeOut('fast');
    });
    // fadeIn effect
    $('#fadeIn').on('click', function () {
        $('.kotak2').fadeIn('slow');
        $('.kotak3').fadeIn('normal');
        $('.kotak4').fadeIn('fast');
    });
    // fadeToggle effect
    $('#fadeToggle').on('click', function () {
        $('.kotak2').fadeToggle('slow');
        $('.kotak3').fadeToggle('normal');
        $('.kotak4').fadeToggle('fast');
    });
    // fadeTo effect
    $('#fadeTo').on('click', function () {
        $('.kotak2').fadeTo('slow', '0.5');
        $('.kotak3').fadeTo('normal', '0.5');
        $('.kotak4').fadeTo('fast', '0.5');
    });
    // slideUp effect
    $('#slideUp').on('click', function () {
        $('.kotak5').slideUp(900);
    });
    // slideDown effect
    $('#slideDown').on('click', function () {
        $('.kotak5').slideDown(900);
    });
    // slideToggle effect
    $('#slideToggle').on('click', function () {
        $('.kotak5').slideToggle(900);
    });
    // animate effect
    $('#kiri').on('click', function () {
        $('.kotak6').animate({
            left: '-100%'
        }, 1000);
    });
    $('#kanan').on('click', function () {
        $('.kotak6').animate({
            left: '0'
        }, 1000);
    });
    // queue effect
    $('#start').on('click', function () {
        $('.kotak7').animate({
            left: '400px'
        }, 1000);
        $('.kotak7').queue(function () {

        });
    });
    $('#stop').on('click', function () {
        $('.kotak7').clearQueue();
        $('.kotak7').stop();
    });
    // delay effect
    $('#delay').on('click', function () {
        $('.kotak8').delay(1000).slideUp(1000);
        $('.kotak9').delay(2000).slideUp(1000);
    });




});