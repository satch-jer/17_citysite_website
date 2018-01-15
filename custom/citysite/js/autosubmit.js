(function ($, Drupal) {

    Drupal.behaviors.autosubmit = {
        attach: function (context, settings) {
            $(document).ready(function(){
                /***
                Autosubmit views exposed form
                ***/
                $(".view-projecten, .view-realisaties").find("form.views-exposed-form").find("input[type=checkbox]").bind("change", function () {
                    $(this).closest("form").submit();
                }).end().find("input[type='submit']").addClass("visually-hidden");
            });
        }
    };

})(jQuery, Drupal);


