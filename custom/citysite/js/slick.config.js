(function ($, Drupal, window, document) {

    Drupal.behaviors.citysiteSlickConfig = {
        attach: function (context, settings) {

            $(".js-slick-single-item-center").slick({
                lazyLoad: 'ondemand',
                centerMode: true,
                slidesToShow: 3,
                arrows: false,
                dots: true,
                touchMove: true,
                swipeToSlide: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                ]
            });

        }
    };

} (jQuery, Drupal, this, this.document));