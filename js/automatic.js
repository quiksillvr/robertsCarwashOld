var AUTOMATIC = function () {
    //Private vars
    var paused = false;
    return {
        automaticPhotos: [
            {"src": "images/automatic/automatic_entrance.png", "name": "Automatic Entrance"},
            {"src": "images/automatic/automatic_pre_wash.png", "name": "Pre-Wash by Hand"},
            {"src": "images/automatic/automatic_pre_spray_1.png", "name": "High Preasure Under Spray"},
            {"src": "images/automatic/automatic_pre_spray_2.png", "name": "High Preasure Side Spray"},
            {"src": "images/automatic/automatic_wash_touchup_1.png", "name": "Hand Wash and Inspection"},
            {"src": "images/automatic/automatic_wash_touchup_2.png", "name": "Final Touchups"},
            {"src": "images/automatic/automatic_exit.png", "name": "Nice and Clean!"}
        ],
        init: function () {
            $('.products').css("display", "none");
            $('#content-ajax').empty();
            $('#content-ajax').load('html/automatic.html', function () {
                var slider = new Slider($('#automaticSliderContainer'));
                slider.setPhotos(AUTOMATIC.automaticPhotos);

                var cWidth = $('.serviceSummary').width();
                var cHeight = 450;
                if (cWidth && cWidth < 700) {
                    cHeight = cWidth * .64;
                } else {
                    cWidth = 700;
                }
                slider.setSize(cWidth, cHeight);
                slider.setTheme('theme-dark');
                slider.setTransitionFunction(SliderTransitionFunctions.circle);
                $('.products').css("display", "inline");

                $(".slide-images").on("click", function (event) {
                    if (paused) {
                        slider.start();
                        slider.next();
                        paused = false;
                    } else {
                        slider.stop();
                        paused = true;
                    }
                    event.stopPropagation();
                });
            });
        }
    };
}();