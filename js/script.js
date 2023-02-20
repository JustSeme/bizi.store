$(document).ready(function () {
    $('#js-carousel-1').owlCarousel({
        items: 4,
        dotsEach: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        margin: 50,
        responsive: {
            2000: {
                items: 5
            },
            1650: {
                items: 4
            },
            1150: {
                items: 3
            },
            1024: {
                items: 2
            }
        }
    });

    $('.js-quest').on('click', function () {
        const anwsData = $(this).attr('data-answ')
        const hiddenElem = $(`.js-answ[data-answ="${anwsData}"]:hidden`)
        const visibleElem = $(`.js-answ[data-answ="${anwsData}"]:visible`)
        if (hiddenElem) {
            hiddenElem.slideDown()
        } if (visibleElem) {
            visibleElem.slideUp()
        }
    })

    $('.header__content .header__menu a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        let anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 110
        }, 1000)
    })

    $('.footer__content .footer__menu a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        let anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 110
        }, 1000)
    })
});
