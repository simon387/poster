const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

document.getElementById('darkModeSwitch').addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add('bg-gradient-dark');
		document.body.classList.add('sidebar-dark');
		document.querySelectorAll('.card').forEach(card => {
			card.classList.add('bg-dark');
			card.classList.add('text-white');
		});
	} else {
		document.body.classList.remove('bg-gradient-dark');
		document.body.classList.remove('sidebar-dark');
		document.querySelectorAll('.card').forEach(card => {
			card.classList.remove('bg-dark');
			card.classList.remove('text-white');
		});
	}
});
