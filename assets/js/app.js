let windowWidth = $(window).width();

$(document).ready(function () {
	AOS.init({
		easing: "ease-out-quad",
		once: !0,
		offset: 60,
		disableMutationObserver: !0
	});
});