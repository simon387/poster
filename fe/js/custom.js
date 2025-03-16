const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

$(document).ready(function () {
	function updateTheme(isDark) {
		if (isDark) {
			$('body').addClass('bg-gradient-dark sidebar-dark');
			$('.text-gray-800').addClass('text-white').removeClass('text-gray-800');
			$('.card').addClass('bg-dark');
			$('.custom-control-label').addClass('text-white');
		} else {
			$('body').removeClass('bg-gradient-dark sidebar-dark');
			$('.text-white').not('.icon').addClass('text-gray-800').removeClass('text-white');
			$('.card').removeClass('bg-dark');
			$('.custom-control-label').removeClass('text-white');
		}
	}

	// Initial state (since the checkbox is checked by default)
	updateTheme(true);

	// Handle toggle
	$('#darkModeSwitch').change(function () {
		updateTheme(this.checked);
	});
});