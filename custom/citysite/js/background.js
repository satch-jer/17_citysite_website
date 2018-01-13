(function ($, Drupal) {

    Drupal.behaviors.background = {
        attach: function (context, settings) {
            $(document).ready(function(){
                $(".view-content > .views-row").each(function(){
                    var background = $(this).attr('class').split(' ')[0];
                    $(this).css("background-color", background);
                });
            });

        }
    };

})(jQuery, Drupal);