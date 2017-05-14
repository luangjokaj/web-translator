let url = window.location.hash;
url = url.toString().replace('#', '');

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

if (Cookies.get('lang') === undefined) {
	Cookies.set('lang', langCode, { expires: 365 }, { path: '' });
}

const cookieLang = Cookies.get('lang');

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
	Cookies.set('lang', 'en', { expires: 365 }, { path: '' });
	window.location.reload();
})

$('#changeDe').on('click', function () {
	Cookies.set('lang', 'de', { expires: 365 }, { path: '' });
	window.location.reload();
})

$('#changeIt').on('click', function () {
	Cookies.set('lang', 'it', { expires: 365 }, { path: '' });
	window.location.reload();
})

$('#removeLang').on('click', function () {
	Cookies.remove('lang', { path: '' });
	window.location.reload();
})