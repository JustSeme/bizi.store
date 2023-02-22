$(document).ready(function () {
    //carousel
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
            overflow: 'hidden',
            height: '100%'
        })
        $(modalName).addClass('show')
        $(modalName).on('click', () => onModalClose(modalName))
        $('#back').on('click', () => onModalClose(modalName))
        $('.modal__content').on('click', (e) => e.stopPropagation())
    }

    let productTitle
    $('.js-modal-2').on('click', function (e) {
        onModalOpen('.modal-2', e)
        productTitle = $(this).attr('data-product')
    })

    $('.js-modal-3').on('click', (e) => onModalOpen('.modal-3', e))

    $('.js-modal-4').on('click', (e) => onModalOpen('.modal-4', e))

    //label swap logic

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
        if ($(this).val().match(/^\s*$/)) {
            $(`label[for=${inputID}`).removeClass('hide')
        }
    })

    $('.js-form-btn-2').click(function () {
        const buttonDataModal = $(this).attr('data-modal')
        const data = {
            name: $(`input[id=name][data-modal=${buttonDataModal}]`).val(),
            city: $(`input[id=city][data-modal=${buttonDataModal}]`).val(),
            contact: $(`input[id=contact][data-modal=${buttonDataModal}]`).val(),
            productTitle: productTitle ? productTitle : 'none'
        }
        console.log(data);

        $.ajax({
            method: "GET",
            url: "https://first-api-sigma.vercel.app/courses",
            contentType: 'application/json'
            /* data: { name: "John", location: "Boston" } */
        })
            .done(function (msg) {
                alert("Data Saved: " + msg);
            });
    })
});
