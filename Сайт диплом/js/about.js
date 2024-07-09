$(document).ready(function () {
    $('.img-carousel').slick({
        arrows: false,
        dots: true,
    });

    $('.arrow-right').click(function() {
        $('.img-carousel').slick('slickNext');
    })

    $('.arrow-left').click(function() {
        $('.img-carousel').slick('slickPrev');
    })

    $('.modal-close').click(function () {         
        $(this).parent().parent().parent().removeClass('modal-active');
        $(this).parent().parent().removeClass('modal-active');
    });
});

function openModal(modalId) {
    switch(modalId) {
        case 1:
            $('#modal1, #modal1  .modal-content').addClass('modal-active');
            break;
        case 2:
            $('#modal2, #modal2  .modal-content').addClass('modal-active');
            break;
        case 3:
            $('#modal3, #modal3  .modal-content').addClass('modal-active');
            break;
        case 4:
            $('#modal4, #modal4  .modal-content').addClass('modal-active');
            break;
        case 5:
            $('#modal5, #modal5  .modal-content').addClass('modal-active');
            break;
        case 6:
            $('#modal6, #modal6  .modal-content').addClass('modal-active');
            break;   
    }
}