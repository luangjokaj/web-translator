const langs = ['en', 'it', 'de'];
let url = window.location.hash;
url = url.toString().replace('#', '');

$(window).on('load', function () {
	setTimeout(function () {
		$('.last').addClass('last-loaded');
	}, 2000);
	AOS.init();
});

const translate = function (jsdata) {
	$("[tkey]").each(function (index) {
		let strTr = jsdata [$(this).attr('tkey')];
		$(this).html(strTr);
	});
};

let langCode;

if (navigator.userLanguage) {
	langCode = navigator.userLanguage.substr(0, 2);
} else {
	langCode = navigator.language.substr(0, 2);
}

if (Cookies.get('lang') === undefined) {
	Cookies.set('lang', langCode, { expires: 365 }, { path: '' });
}

const cookieLang = Cookies.get('lang');

function changeLang(lang) {
	$.getJSON('lang/' + lang + '.json', translate);
	Cookies.set('lang', lang, { expires: 365 }, { path: '' });
}

if (url == 'de') changeLang('de');

else if (url == 'it') changeLang(it);

else if (url == 'en') changeLang('en');

else if (langs.indexOf(cookieLang) >= 0) changeLang(cookieLang);

else changeLang('en');

$('#changeEn').on('click', function () {
	changeLang('en');
});

$('#changeDe').on('click', function () {
	changeLang('de');
});

$('#changeIt').on('click', function () {
	changeLang('it');
});

$('#removeLang').on('click', function () {
	Cookies.remove('lang');
	window.location.reload();
});
