/*
 * b4st JS
 */

(function ($) {

	'use strict';

	$(document).ready(function () {

		// Comments

		$('.commentlist li').addClass('card mb-3');
		$('.comment-reply-link').addClass('btn btn-secondary');

		// Forms

		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');

		// Pagination fix for ellipsis

		$('.pagination .dots').addClass('page-link').parent().addClass('disabled');

		//You can put your own code in here

		$(window).on("scroll", function () {
			if ($(window).scrollTop() >= 20) {
				$(".navbar").addClass("compressed");
			} else {
				$(".navbar").removeClass("compressed");
			}
		});


	});

}(jQuery));