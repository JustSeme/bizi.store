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
            580: {
                items: 2,
                margin: 10,
                dots: false
            },
            410: {
                items: 1.5,
                margin: 10,
                dots: false
            },
            320: {
                items: 1,
                margin: 10,
                dots: false
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

    $('.header__content a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        let anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000)
    })

    $('.footer__content a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        let anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000)
    })

    $('.js-consult-modal').on('click', (e) => {
        e.preventDefault()
        $('.modal-consult').addClass('show')
        $('.modal-consult').on('click', () => $('.modal-consult').removeClass('show'))
        $('#back').on('click', () => $('.modal-consult').removeClass('show'))
        $('.modal__content').on('click', (e) => e.stopPropagation())
    })

    $('label').click(function () {
        let labelID = $(this).attr('for');
        $('#' + labelID).trigger('click');
    });

    let inputID
    $('input').click(function () {
        inputID = $(this).attr('id')
        $(`label[for=${inputID}]`).addClass('hide')
    })

    $('input').focusout(function () {
        console.log('hey');

        $(`label[for=${inputID}`).removeClass('hide')
    })

});
