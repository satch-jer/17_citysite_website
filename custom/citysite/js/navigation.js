(function ($, Drupal) {

    Drupal.behaviors.navigation = {
        attach: function (context, settings) {
            $(document).ready(function(){

                var open = false;
                $hamburger = $('.field--name-field-linkblok-link > a');

                //click on navigation (open)
                $hamburger.click(function(){
                    $('nav').slideToggle(500, function(){
                        if(!open){
                            $hamburger.css("background-image", "url(themes/custom/citysite/icons/close.svg)");
                            window.addEventListener('scroll', noscroll);
                            open = true;
                        }else{
                            $hamburger.css("background-image", "url(themes/custom/citysite/icons/menu.svg)");
                            window.removeEventListener('scroll', noscroll);
                            open = false;
                        }
                    });

                    //prevent default
                    return false;
                });
            });

            function noscroll() {
                window.scrollTo( 0, 0 );
            }
        }
    };

})(jQuery, Drupal);