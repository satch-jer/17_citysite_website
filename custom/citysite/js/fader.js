(function ($, Drupal) {

    Drupal.behaviors.fader = {
        attach: function (context, settings) {
            $(document).ready(function(){
                $('.layout-container').animate({opacity: 1}, {duration: 3000});
            });
        }
    };

})(jQuery, Drupal);