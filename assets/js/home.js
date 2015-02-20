requirejs.config({

    paths: {
        "jquery": "../../bower_components/jquery/dist/jquery.min",
        "jquery.bootstrap": "../../bower_components/bootstrap/dist/js/bootstrap.min",
        "slick": "../../plugins/slick/slick.min"
    },

    shim: {
        "jquery.bootstrap": {

            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.bootstrap", "slick"], function($){

    MH = {

        /**
        *caroussel bootstrap
        */
        carouselHome: function () {
            $('.carousel').carousel({
                interval: false
            });
        },

        /**
        *caroussel plugin slick
        */
        slickHome: function () {
            $('.carousel-other-offer').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        },
        /**
        *Efect para label de inputs
        */
        labelFocusEfect: function (element1, classEfect) {
            $(element1).on('focus', function() {
                $(this).prev().addClass(classEfect);
            });
        },

        labelBlurEfect: function (element2, classEfect) {
            $(element2).on('blur', function() {
                var elementInput = $(this);
                var valorInput = elementInput.val();
                if(valorInput === '') {
                    $(this).prev().removeClass(classEfect);
                }
            });
        }
    }
    /**
    *chamadas
    */
    MH.carouselHome();
    MH.slickHome();
    MH.labelFocusEfect('.box-input-form input', 'label__efect--focus');
    MH.labelBlurEfect('.box-input-form input', 'label__efect--focus');
    MH.labelFocusEfect('.box__textareaform textarea', 'label__efect--focus2');
    MH.labelBlurEfect('.box__textareaform textarea', 'label__efect--focus2');
});