let url = window.location.hash;
url = url.toString().replace('#', '');
console.log(Cookies.get());

if (url) {
    console.log('The url is ' + url);
}

$(window).on('load', function () {
    setTimeout(function () {
        $('.last').addClass('last-loaded');
    }, 2000);
    AOS.init();
});

const langs = ['en', 'it', 'de'];
const translate = function (jsdata) {
    $("[tkey]").each(function (index) {
        var strTr = jsdata [$(this).attr('tkey')];
        $(this).html(strTr);
    });
}

let langCode = navigator.language.substr(0, 2);

if (Cookies.get('lang') == undefined) {
    Cookies.set('lang', langCode, { path: '' }, { expires: 365 });
}
const cookieLang = Cookies.get('lang');
console.log(cookieLang);

if (langs.includes(cookieLang))
    $.getJSON('lang/' + cookieLang + '.json', translate);
else if (url == 'de') {
    $.getJSON('lang/de.json', translate);
}
else if (url == 'it') {
    $.getJSON('lang/it.json', translate);
}
else if (url == 'en') {
    $.getJSON('lang/en.json', translate);
}

$('#changeEn').on('click', function () {
    Cookies.set('lang', 'en', { path: '' }, { expires: 365 });
    window.location.reload();
})

$('#changeDe').on('click', function () {
    Cookies.set('lang', 'de', { path: '' }, { expires: 365 });
    window.location.reload();
})

$('#changeIt').on('click', function () {
    Cookies.set('lang', 'it', { path: '' }, { expires: 365 });
    window.location.reload();
})

$('#removeLang').on('click', function () {
    Cookies.remove('lang', { path: '' });
    window.location.reload();
})

if (langs.includes(cookieLang)) {
    console.log('Yes cookieLang is in langs');
}

console.log(Cookies.get());