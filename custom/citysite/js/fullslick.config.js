(function ($, Drupal, window, document) {

    Drupal.behaviors.citysiteSlickConfig = {
        attach: function (context, settings) {

            $(".js-slick-single-item").slick({
                autoplay: true,
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                centerMode: false,
                prevArrow: false,
                nextArrow: false
            });

        }
    };

} (jQuery, Drupal, this, this.document));