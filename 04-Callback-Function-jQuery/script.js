$(document).ready(function () {
    // tanpa callback
    // $('.btn1').on('click', function () {
    //     $('.d1').hide('slow');
    //     alert('element ini sudah dihapus');
    // });

    // dengan callback
    $('.btn1').on('click', function () {
        $('.d1').hide('slow', function () {
            alert('element ini sudah dihapus');
        });
    });

    function tampil() {
        document.getElementById('d2').innerHTML = 'Hello world, selamat datang di web saya!';

        alert('selesai');
    }

    function hitung(panjang, lebar) {
        let luas = panjang * lebar;
        return document.getElementById('d2').innerHTML += `
        panjang = ${panjang} lebar = ${lebar}
        luas = ${luas} 
        `;
    }

    $('.btn2').on('click', function () {
        $('#d2').animate({
            width: '500px',
            height: '300px',
            fontSize: '35px'
        }, 'slow', function () {
            tampil();
            hitung(20, 10);
        });
    });

});