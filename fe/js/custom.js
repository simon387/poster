const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

$(document).ready(function () {
	function applyDarkMode(isDark) {
		if (isDark) {
			$('body').addClass('bg-gradient-dark sidebar-dark');
			$('.table').addClass('text-white');
			$('.form-control').addClass('bg-dark text-white');
		} else {
			$('body').removeClass('bg-gradient-dark sidebar-dark');
			$('.table').removeClass('text-white');
			$('.form-control').removeClass('bg-dark text-white');
		}
	}

	// Initial state
	applyDarkMode(!$('#darkModeSwitch').is(':checked'));

	// Toggle handler
	$('#darkModeSwitch').change(function () {
		applyDarkMode(this.checked);
	});

	// Apply dark mode styling to modals when they open
	$('.modal').on('show.bs.modal', function () {
		if ($('#darkModeSwitch').is(':checked')) {
			$(this).find('.modal-content').addClass('bg-dark');
			$(this).find('.modal-header').addClass('bg-dark text-white');
			$(this).find('.modal-body').addClass('bg-dark text-white');
			$(this).find('.form-control').addClass('bg-dark text-white border-secondary');
		}
	});
});