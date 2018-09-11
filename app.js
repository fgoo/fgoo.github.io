define('app', [], function() {
	// Router.init();
	var f7 = new Framework7({
        animateNavBackIcon: false
	});
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: false
    });
	return {
	};
});