const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

function goToUrl(urlToGo) {

	if (!/^https?:\/\//i.test(urlToGo)) {
		urlToGo = 'https://' + urlToGo;
	}

	window.open(
		urlToGo,
		'_blank'
	);
}
