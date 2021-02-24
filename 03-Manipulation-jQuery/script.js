$(document).ready(function () {
    // addClass
    $('.tambah').addClass('tambahClass');

    // hasClass
    console.log($('h1').hasClass('hasClass'));

    // removeClass
    $('h1').removeClass('hapus');

    // toggleClass
    $('#btn').on('click', function () {
        $(this).toggleClass('active');
    });

    // attr
    console.log($('a').attr('href'));

    // remove attr
    console.log($('#btn2').removeAttr('type'));

    // html
    $('p').html('hello world');

    // val
    console.log($('#btn2').val());

    // append
    $('#btn2').on('click', function () {
        $(this).append(`<p>Irpan ramdani</p>`);
    });

    // prepend
    $('#btn3').on('click', function () {
        $(this).prepend(`<p>Irpan ramdani</p>`);
    });

    // after
    $('#btn4').on('click', function () {
        $(this).after(`<p>ini adalah after</p>`);
    });

    // before
    $('#btn5').on('click', function () {
        $(this).before(`<p>ini adalah before</p>`);
    });

    // remove
    $('#hapusKotak').on('click', function () {
        $('.kotak').remove();
    });

    // empty
    $('#hapusUL').on('click', function () {
        $('.kotak ul').empty();
    });

    // get text
    console.log($('#contoh2').text());

    // get html
    console.log($('#contoh2').html());

    // set
    $('#btn6').on('click', function () {
        alert('nama : ' + $('#nama').val() + ' alamat : ' + $('#alamat').val());
    });

    $('#btn7').on('click', function () {
        alert('nama : ' + $('#nama').attr('placeholder') + ' alamat : ' + $('#alamat').attr('placeholder'));
    });

    $('#setText').on('click', function () {
        $('#kal1').text('hallo apa kabar hari ini irpan ramdani ?');
    });

    $('#setHtml').on('click', function () {
        $('#kal2').html(`<h3>ini saya</h3> <em style="background:blue;">denga agvira aulia</em> irpan ramdani`)
    });

    $('#setValue').on('click', function () {
        $('#inp1').val('irpan ramdani');
        $('#inp2').val('kirim');
    });

    $('#setNama').on('click', function () {
        $('#ulNama li').text(function (index, nama) {
            index++;
            return `No ke ${index} nama nya ${nama}`;
        });
    });

    $('#keYT').on('click', function () {
        $('.keYoutube').attr({
            "href": "http://youtube.com",
            "title": "youtube"
        });
    });

    $('#keCH').on('click', function () {
        $('.keYoutube').attr('href', function (i, link) {
            return link + '/results?search_query=juniordev';
        })
    });

});