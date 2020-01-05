$(function() {
	$('[data-toggle="tooltip"]').tooltip()
	$('.custom-select').selectric({
		onOpen: function() {
			$(".selectric .button").addClass("button-transform");
		},
		onClose: function() {
			$(".selectric .button").removeClass("button-transform");
		},

	});
});