let dict = {
    en: {
        'SITE-TITLE': 'Site title',
        'HEADING-ONE': 'Heading 1',
        'SOME-TEXT': 'Some text in tag P',
        'ANOTHER-TEXT': 'another text1'
    },
    ru: {
        'SITE-TITLE': 'Заголовок сайта',
        'HEADING-ONE': 'Заголовок первый',
        'SOME-TEXT': 'Какой то текст в теге P',
        'ANOTHER-TEXT': 'Другой текст'
    }
};

$.html5Translate = function (dict, lang) {
    $('[data-translate-key]').each(function () {
        $(this).html(dict[lang][$(this).data('translateKey')]);
    });
};


$(document).ready(function () {
    $('#en-translate').click(function () {
        $.html5Translate(dict, 'en');
    })
});