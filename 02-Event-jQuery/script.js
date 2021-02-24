$(document).ready(function () {
    // event click
    $('#btn').click(function () {
        alert('ini adalah event click');
    });

    // event double click
    $('.btn2').dblclick(function () {
        alert('ini adalah event double click');
    });

    // event mouseleave
    $('.btn3').mouseleave(function () {
        alert('ini adalah event mouseleave');
    });

    // event mouseenter
    $('.kotak').mouseenter(function () {
        $(this).css('background-color', 'skyblue');
    });

    // event keydown
    $('#keydown').keydown(function () {
        $('#pesan').text($(this).val());
    });

    // event keyup
    $('#keyup').keyup(function () {
        $('#pesan2').text($(this).val());
    });

    // event pageX dan pageY
    $(document).mousemove(function (event) {
        $("span").text("X: " + event.pageX + ", Y: " + event.pageY);
    });
})