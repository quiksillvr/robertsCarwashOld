var SELF_SERVICE = function () {
    //Private vars
    var paused = false;

    function getHtmlButtons() {
        var buttonHtml = "<div class='sliderButtons'>" +
                "<input type='radio' id='sliderPlay' class='sliderButton' name='sliderButton' value='play' checked='checked' /><label id='sliderPlayLabel' class='sliderButtonLabel' for='sliderPlay'>Play</label>" +
                "<input type='radio' id='sliderStop' class='sliderButton' name='sliderButton' value='stop' /><label class='sliderButtonLabel' for='sliderStop'>Stop</label>" +
                "</div>";
        return buttonHtml;
    }

    return {
        selfServicePhotos: [
            {"src": "images/selfService/self_service_bays.png", "name": "Self Service Bays"},
            {"src": "images/selfService/self_service_spray_1.png", "name": "Wash Spray"},
            {"src": "images/selfService/self_service_spray_2.png", "name": "Rinse Spray"},
            {"src": "images/selfService/self_service_spray_3.png", "name": "Wax Spray"},
            {"src": "images/selfService/self_service_spot_free.png", "name": "Spot Free Rinse"},
            {"src": "images/selfService/self_service_oper_instr.png", "name": "Washing Instructions"},
            {"src": "images/selfService/self_service_coin_deposit.png", "name": "Coin Deposit"},
            {"src": "images/selfService/self_service_dispens.png", "name": "Dispensers"}
        ],
        init: function () {
            $('.products').css("display", "none");
            $('#content-ajax').empty();
            $('#content-ajax').load('html/selfService.html', function () {
                var slider = new Slider($('#sliderContainer'));
                slider.setPhotos(SELF_SERVICE.selfServicePhotos);
                var cWidth = $('.serviceSummary').width();
                var cHeight = 450;
                if (cWidth && cWidth < 700) {
                    cHeight = cWidth * .64;
                } else {
                    cWidth = 700;
                }
                slider.setSize(cWidth, cHeight);
                slider.setTheme('theme-dark');
                slider.setTransitionFunction(SliderTransitionFunctions.circles);
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