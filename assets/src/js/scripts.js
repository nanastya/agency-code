(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

    function isScrolledIntoView(elem) {
        var offset = ($(window).height() - $(elem).height() ) / 2;
        if (elem.length) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= ( docViewBottom + offset )) && (elemTop >= ( docViewTop + offset )) );
        }
        return false;
    }

    $(document).ready(function () {
        var headerHeight = $('.header').outerHeight();
        var navHeight = $('.header__navigation').outerHeight();
        var headerInfoHeirht = headerHeight - navHeight;
        $('.header__info').css('min-height', headerInfoHeirht + 'px');

        $(document).foundation();

        $('.menu-icon').on('click', function () {
            $(this).toggleClass('menu-icon--open');
            $('.header__menu').toggleClass('header__menu--show');
            $('.header__logo').toggleClass('header__logo--transform');
        });

        $( window ).scroll(function() {
            var image = $('.txt-cols-img__image');
            if ( isScrolledIntoView(image) ) {
                image.addClass('txt-cols-img__image--animated');
            }
        });

    });
})(jQuery);