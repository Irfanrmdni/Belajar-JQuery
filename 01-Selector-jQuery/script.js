$(document).ready(function () {
    // selector Tag
    $('h1').css('color', 'salmon');
    $('p').css('color', 'rgb(200,10,20)');
    $('span').css('color', '#000');

    // selector class & id
    $('.judul').css('color', 'blue');
    $('#paragraf').css('color', 'green');

    // Selector gabungan
    $('.judul,p,span').css('background-color', '#ccc');

    // Selector Child
    $('h3:first').css('color', 'yellow');
    $('h3:last').css('color', 'green');
    $('h3:even').css('background-color', '#eee');

    // button sembunyi semua
    $('#sembunyi_semua').on('click', function () {
        $('*').hide();
    });

    // button sembunyi ini
    $('#sembunyi_ini').on('click', function () {
        $(this).hide();
    });

    // button class penting
    $('button.penting').on('click', function () {
        $('p.penting').hide();
    });

    // button pesan pertama
    $('button#pertama').on('click', function () {
        $('div p:first-child').hide();
    });

    // span baris pertama
    $('span#baris1').on('click', function () {
        $('table tr:first').hide();
    });

    // span baris semua
    $('a#baris1_semua').on('click', function (e) {
        $('table tr:first-child').hide();
        e.preventDefault();
    });

    // strong color
    $('strong').on('click', function () {
        $('tr:even').css('background-color', "blue");
        $('tr:odd').css('background-color', "green");
    });

    // img link 1
    $('[alt="link1"]').on('click', function () {
        $('[href]').css('color', "red");
    });

    // img link 2
    $('[alt="link2"]').on('click', function () {
        $('[target="_blank"]').css('color', "aqua");
    });

    // img auto
    $('img[width]').on('click', function () {
        $('a[target!="_blank"]').css('border', "solid 2px black");
    });

    // img sembunyi tombol
    $('img[alt="sembunyi_tombol"]').on('click', function () {
        $(':button').slideUp(2000);
    });

});