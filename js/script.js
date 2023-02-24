$(document).ready(function () {
    //carousel
    $('#js-carousel-1').owlCarousel({
        items: 4,
        dotsEach: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 50,
        responsive: {
            2000: {
                items: 5,
                nav: true,
            },
            1650: {
                items: 4,
                nav: true,
            },
            1150: {
                items: 3,
                nav: false,
            },
            580: {
                items: 2,
                margin: 10,
                dots: false,
                nav: false,
            },
            410: {
                items: 1.5,
                margin: 10,
                dots: false,
                nav: true,
            },
            320: {
                items: 1,
                margin: 10,
                dots: false,
                nav: true,
            }
        }
    });

    //answers and questions swap logic

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

    //modals

    function onModalClose(modalName) {
        $(modalName).removeClass('show')
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }

    function onModalOpen(modalName, event) {
        event.preventDefault()
        $('html, body').css({
            overflow: 'hidden'
        })
        $(modalName).addClass('show')
        $(modalName).on('click', () => onModalClose(modalName))
        $('#back').on('click', () => onModalClose(modalName))
        $('.modal__content').on('click', (e) => e.stopPropagation())
    }

    $('.js-modal-1').on('click', (e) => onModalOpen('.modal-1', e))

    $('.js-modal-2').on('click', (e) => onModalOpen('.modal-2', e))

    $('.js-modal-3').on('click', (e) => onModalOpen('.modal-3', e))

    $('.js-modal-4').on('click', (e) => onModalOpen('.modal-4', e))

    //label swap logic

    $('label').click(function () {
        let labelID = $(this).attr('for');
        $('#' + labelID).trigger('click');
    });

    $('input').click(function () {
        if ($(this).attr('type') === 'checkbox') {
            return
        }
        let inputID = $(this).attr('id')
        $(`label[for=${inputID}]`).addClass('hide')
    })

    $('input').change(function () {
        if ($(this).attr('type') === 'checkbox') {
            return
        }
        let inputID = $(this).attr('id')
        $(`label[for=${inputID}]`).addClass('hide')
    })

    $('input').focusout(function () {
        if ($(this).attr('type') === 'checkbox') {
            return
        }
        let inputID = $(this).attr('id')
        if ($(this).val().match(/^\s*$/)) {
            $(`label[for=${inputID}`).removeClass('hide')
        }
    })

    //limitation
    $('#attachments1').change(function () {
        if ($(this).val() < 1000) {
            $(this).val(1000)
        }
        if ($(this).val() > 1000000) {
            $(this).val(1000000)
        }
    })


}(jQuery));
