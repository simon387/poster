const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

function goToUrl(urlToGo) {
	window.location.href = urlToGo;
}
