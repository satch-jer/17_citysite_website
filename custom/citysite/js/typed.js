(function ($, Drupal) {

    Drupal.behaviors.typed = {
        attach: function (context, settings) {
            $(document).ready(function(){
                new TypeIt('.field--name-field-titelpagina-ondertitel', {
                    speed: 45,
                    startDelay: 1000
                })
                    .pause(2000)
                    .options({speed: 300})
                    .delete(11)
                    .options({speed: 45})
                    .pause(1000)
                    .type('in het groen');
            });
        }
    };

})(jQuery, Drupal);