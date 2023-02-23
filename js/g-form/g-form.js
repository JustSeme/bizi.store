$('.js-form-btn-2').click(function (event) {
    event.preventDefault();

    // Ссылка, которую получили на этапе публикации приложения
    let appLink = "https://script.google.com/macros/s/AKfycbyXPI49IudPZB1g-sX8UwyzxlEgdYLKLitJEnNAC4oDjRQE3nKwx69hBwlgEpsKD7Dccg/exec";

    // Id текущей формы
    let form = $('#' + $(this).attr('data-form'))[0];

    // Кнопка отправки формы
    let submitButton = $(this)

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

            // Возвращаем активность кнопке отправки
            submitButton.prop('disabled', false);

            // Очищаем поля формы
            form.reset();

        } else {
            console.log('Гугл не ответил статусом 200');
        }
    }).fail(function (res, textStatus, jqXHR) {
        setTimeout(() => {
            submitButton.prop('disabled', false);
        }, 5000);

        console.log('Не удалось выполнить запрос по указанному в скрипте пути');
    });
});