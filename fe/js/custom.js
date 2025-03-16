const contextPath = "/poster/";

function blockScreen() {
	$(".loading").fadeIn();
}

function unblockScreen() {
	$(".loading").fadeOut();
}

// Add this to your custom.js or post.js file
$(document).ready(function () {
	// Set the switch to checked initially since dark mode is already on
	$('#darkModeSwitch').prop('checked', true);

	// Handle toggle
	$('#darkModeSwitch').change(function () {
		if (this.checked) {
			$('body').addClass('bg-gradient-dark sidebar-dark');
			$('.card').addClass('bg-dark text-white');
			$('.table').addClass('text-white');
		} else {
			$('body').removeClass('bg-gradient-dark sidebar-dark');
			$('.card').removeClass('bg-dark text-white');
			$('.table').removeClass('text-white');
		}
	});
});