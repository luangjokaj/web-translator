# Web Translator [![Dependencies](https://david-dm.org/luangjokaj/web-translator/dev-status.svg)](https://david-dm.org/luangjokaj/web-translator?type=dev)
A simple multilingual translator for websites, using jQuery and js-cookie.

### Demo 🌎
https://www.riangle.com/web-translator/

## How it works? 🛠
The script automatically detects the browsers default language:
```javascript
let langCode = navigator.language.substr(0, 2);
```
When visiting the page for the first time a Cookie is created and stored with the value of the browsers default language.
```javascript
if (Cookies.get('lang') === undefined) {
	Cookies.set('lang', langCode, { expires: 365 }, { path: '' });
}
``` 

The script verifies if the site has the translation for the browser language, if so it changes the languages according by executing the translate function:
 ```javascript
 const langs = ['en', 'it', 'de'];
 if (langs.includes(cookieLang))
 	$.getJSON('lang/' + cookieLang + '.json', translate);
else {
	$.getJSON('lang/en.json', translate);
}
 ```
 ### Translate
 ```javascript
 const translate = function (jsdata) {
 	$("[tkey]").each(function (index) {
 		var strTr = jsdata [$(this).attr('tkey')];
 		$(this).html(strTr);
 	});
 }
 ```
 
 The translate function looks for all elements in the DOM with the `tkey` attribute and it replaces the content with the translation corresponding to that key. The translation samples can be found at: `src/lang/de.json`, `src/lang/en.json`, `src/lang/it.json`;
 
 ### DOM Sample
 ```html
 <h1 tkey="helloworld">Hello World</h1>
 <p tkey="hellointroduction">Introduction</p>
 ```
 
 ### Have fun ✌️
 ![Demo Preview](http://i.imgur.com/vZ3aaCQ.png)

## License ⚖️
MIT
