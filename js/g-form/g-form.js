// Ссылка, которую получили на этапе публикации приложения
let appLink = "https://script.google.com/macros/s/AKfycbyXPI49IudPZB1g-sX8UwyzxlEgdYLKLitJEnNAC4oDjRQE3nKwx69hBwlgEpsKD7Dccg/exec";

function gFormSender(form, submitButton, responseHeading) {
    // FormData
    let fd = new FormData(form);

    $.ajax({

        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: function () {

            // Делаем неактивной кнопку отправки
            submitButton.prop('disabled', true);
        },

    }).done(function (res, textStatus, jqXHR) {

        if (jqXHR.readyState === 4 && jqXHR.status === 200) {
            responseHeading.html('Данные успешно получены! Спасибо за обратную свзяь!')

            // Возвращаем активность кнопке отправки
            submitButton.prop('disabled', false);

            // Очищаем поля формы
            form.reset();

        } else {
            console.log('Гугл не ответил статусом 200');
        }
    }).fail(function (res, textStatus, jqXHR) {
        responseHeading.html('Что-то пошло не так... попробуйте позже...')
        setTimeout(() => {
            submitButton.prop('disabled', false);
        }, 5000);

        console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    });
    setTimeout(() => {
        responseHeading.html('')
    }, 5000);
}

$('.js-form-btn-1').click(function (event) {
    event.preventDefault();

    let attrDataForm = $(this).attr('data-form')

    // Id текущей формы
    let form = $('#' + attrDataForm)[0];

    // Кнопка отправки формы
    let submitButton = $(this)

    // Заголовок для ответа
    let responseHeading = $('.modal__response__text.' + attrDataForm)

    gFormSender(form, submitButton, responseHeading)
});

$('.js-form-btn-2').click(function (event) {
    event.preventDefault();

    let attrDataForm = $(this).attr('data-form')

    // Id текущей формы
    let form = $('#' + attrDataForm)[0];

    // Кнопка отправки формы
    let submitButton = $(this)

    // Заголовок для ответа
    let responseHeading = $('.modal__response__text.' + attrDataForm)

    gFormSender(form, submitButton, responseHeading)
});

$('.js-form-btn-3').click(function (event) {
    event.preventDefault();

    let attrDataForm = $(this).attr('data-form')

    // Id текущей формы
    let form = $('#' + attrDataForm)[0];

    // Кнопка отправки формы
    let submitButton = $(this)

    // Заголовок для ответа
    let responseHeading = $('.modal__response__text.' + attrDataForm)

    gFormSender(form, submitButton, responseHeading)
});

$('.js-form-btn-4').click(function (event) {
    event.preventDefault();

    let attrDataForm = $(this).attr('data-form')

    // Id текущей формы
    let form = $('#' + attrDataForm)[0];

    // Кнопка отправки формы
    let submitButton = $(this)

    // Заголовок для ответа
    let responseHeading = $('.modal__response__text.' + attrDataForm)

    gFormSender(form, submitButton, responseHeading)
});