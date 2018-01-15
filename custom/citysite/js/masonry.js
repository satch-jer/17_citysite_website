/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

    Drupal.behaviors.masonry = {
        attach: function (context, settings) {
            $(window).on('load', function(){
                $('.view-projecten>.view-content, .view-realisaties>.view-content', context).once('masonry').each(function () {
                    $(this).masonry({
                        columnWidth: '.views-row, .field__item',
                        itemSelector: '.views-row, .field__item',
                        horizontalOrder: true,
                        gutter: 0,
                        percentPosition: true
                    });
                });
            });
        }
    };

})(jQuery, Drupal);