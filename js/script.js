$(document).ready(function () {
    $('#js-carousel-1').owlCarousel({
        items: 4,
        dotsEach: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 50,
    });

    $('.js-quest').on('click', function () {
        const anwsData = $(this).attr('data-answ')
        $(`.js-answ[data-answ="${anwsData}"]`).toggleClass('hide')
    })
});
