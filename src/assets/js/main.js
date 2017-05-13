var url = window.location.hash;
url = url.toString().replace('#', '');

if (url) {
    console.log('The url is ' + url);
}

$(window).on('load', function () {
    setTimeout(function () {
        $('.last').addClass('last-loaded');
    }, 2000);
    AOS.init();
});

var langs = ['en', 'it'];
var translate = function (jsdata) {
    $("[tkey]").each(function (index) {
        var strTr = jsdata [$(this).attr('tkey')];
        $(this).html(strTr);
    });
}


var langCode = navigator.language.substr(0, 2);

if (langCode in langs)
    $.getJSON('lang/' + langCode + '.json', translate);
else if (url == 'de') {
    $.getJSON('lang/de.json', translate);
}
else if (url == 'it') {
    $.getJSON('lang/it.json', translate);
}
else if (url == 'en') {
    $.getJSON('lang/en.json', translate);
}
else
    $.getJSON('lang/en.json', translate);

