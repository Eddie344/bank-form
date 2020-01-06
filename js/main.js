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
	$('textarea').each(function () {
	  	this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
		}).on('input', function () {
			this.style.height = 'auto';
			this.style.height = (this.scrollHeight) + 'px';
			$(this).parent().attr('style', 'height:' + (this.style.height));
		});
});