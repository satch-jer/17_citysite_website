(function ($, Drupal, window, document) {

    Drupal.behaviors.citysiteSlickConfig = {
        attach: function (context, settings) {

            $(".js-slick-single-item-center").slick({
                autoplay: true,
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '460px',
                adaptiveHeight: true,
                prevArrow: false,
                nextArrow: false,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            centerPadding: '300px',
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            adaptiveHeight: true,
                            centerPadding: '100px',
                        }
                    },
                ]
            });

        }
    };

} (jQuery, Drupal, this, this.document));