$(document).ready(function () {

    // Selecting some DOM elements for further handling

    var dom = {
        window: $(window),
        body: $('body'),
        navItem: $('.nav-item'),
        navBarLogo: $('.navbar-logo')
    };

    // Handling the navigation links

    dom.navItem.click(function () {
        var scrollElement = $(this).find('.nav-link').data('link'),
            scrollPosition = $(scrollElement).offset().top - 100;

        dom.body.animate({
            scrollTop: scrollPosition
        }, 500);
    });

    // Displaying the logo at the navigation bar

    dom.window.scroll(function () {

        if (dom.window.scrollTop() >= 300) {
            dom.navBarLogo.addClass('show');
        } else {
            dom.navBarLogo.removeClass('show');
        }
    });

    // Scroll to top on the logo click

    dom.navBarLogo.click(function () {
        dom.body.animate({
            scrollTop: 0
        }, 300);
    });

    // Promo stuff


});