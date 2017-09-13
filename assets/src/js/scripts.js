(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
        var headerHeight = $('.header').outerHeight();
        var navHeight = $('.header__navigation').outerHeight();
        var headerInfoHeirht = headerHeight - navHeight;
        $('.header__info').css('min-height', headerInfoHeirht + 'px');

    });
})(jQuery);