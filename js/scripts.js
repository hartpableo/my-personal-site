$(document).ready(function() {
    // Initiate Variables
    var hamburger = $('.hamburger'),
        headerNav = $('nav#header-nav'),
        hamburgerClose = $('.hamburger-close'),
        windowWidth = $(window).width();

    // Hamburger Menu Functionality
    hamburger.removeClass('inactive');

    hamburger.click(function() {
        headerNav.addClass('show');
        hamburger.addClass('inactive');
    });
    hamburgerClose.click(function() {
        headerNav.removeClass('show');
        hamburger.removeClass('inactive');
    });

    // Dynamic Copyright Year
    var startYear = 2022;
    var currentYear = new Date().getFullYear();

    if(currentYear != startYear) {
        $('#copyright-year').html(startYear + ' - ' + currentYear)
    } else {
        $('#copyright-year').html(currentYear);
    }

    // Reposition Elements
    function swap() {
        if(windowWidth <= 980) {
            $('.header-cta').insertBefore('.hamburger');
        } else {
            $('.header-cta').insertAfter('#header-nav ul');
        }
    };

    swap();

    // Tilt Effects
    function tilts() {
        if(windowWidth > 980) {
            $('#services .card').tilt({
                glare: true,
                maxGlare: .2
            });
        }
    }

    tilts();

    // Responsive/Real-Time DOM Manipulation
    $(window).resize(function() {
        windowWidth = $(this).width();

        swap();
        tilts();
    });
        
});