var DETAIL = function () {
    //Private vars
    var currSlideNum = 0;
    var isOldBrowser = false;
    var slidePrevSrc = "images/slidePrev_blue_58w445h.png";
    var slideNextSrc = "images/slideNext_blue_58w445h.png";
    var slidePrevHoverSrc = "images/slidePrev_red_58w445h.png";
    var slideNextHoverSrc = "images/slideNext_red_58w445h.png";
    var microDirPath = "images/detailing/micros/";
    var slideDirPath = "images/detailing/slides/";
    var microImgEnding = "_240w135h.png";
    var slideImgEnding = "_700w450h.png";
    var detailSlidePhotos = [
        "images/detailing/slides/altima_1_700w450h.png", // 0
        "images/detailing/slides/altima_2_700w450h.png", // 1
        "images/detailing/slides/bug_1_700w450h.png", // 2
        "images/detailing/slides/gary_lincoln_1_700w450h.png", // 3
        "images/detailing/slides/gary_lincoln_2_700w450h.png", // 4
        "images/detailing/slides/jenny_buick_1_700w450h.png", // 5
        "images/detailing/slides/sarah_audi_1_700w450h.png", // 6
        "images/detailing/slides/sarah_audi_2_700w450h.png", // 7
        "images/detailing/slides/sarah_audi_3_700w450h.png", // 8
        "images/detailing/slides/sarah_audi_4_700w450h.png", // 9
        "images/detailing/slides/sarah_audi_5_700w450h.png", // 10
        "images/detailing/slides/stang_1_700w450h.png", // 11
        "images/detailing/slides/stang_2_700w450h.png"           // 12
    ];

    function bindSlideShow() {
        $("#detailSlideShow").dialog({
            autoOpen: false,
            show: {
                effect: "fadeIn",
                duration: 1000
            },
            hide: {
                effect: "fadeOut",
                duration: 1000
            },
            open: function () {
                $(".ui-button").tooltip({disabled: true});
                var dialogDiv = $("#detailSlideShow").parent();
                var slideButtonsDiv = [];
                slideButtonsDiv.push(
                        "<div id='slideButtons' style='z-index:2; width: 725px; height: 445px; position: absolute; top: 60px; display: none;'>",
                        "<img id='slidePrevButton' style='float: left; cursor: pointer;' border='0' src='" + slidePrevSrc + "' width='58' height='445' />",
                        "<img id='slideNextButton' style='float: right; cursor: pointer;' border='0' src='" + slideNextSrc + "' width='58' height='445' />",
                        "<div />"
                        );
                $(dialogDiv).append(slideButtonsDiv.join(""));
                $("#slideButtons").delay(800).fadeIn(400);
                $("#slidePrevButton").hover(
                        function () {
                            $(this).attr("src", slidePrevHoverSrc);
                        },
                        function () {
                            $(this).attr("src", slidePrevSrc);
                        }
                );
                $("#slideNextButton").hover(
                        function () {
                            $(this).attr("src", slideNextHoverSrc);
                        },
                        function () {
                            $(this).attr("src", slideNextSrc);
                        }
                );

                $("#slidePrevButton").on("click", function () {
                    var prevImgSrc = getPrevSlide();
                    $("#detailSlideShowContent").fadeOut(function () {
                        $("#detailSlideShowContent").empty();
                        $("#detailSlideShowContent").append("<img src='" + prevImgSrc + "' height='450' width='700'></img>");
                    }).fadeIn();
                });

                $("#slideNextButton").on("click", function () {
                    var nextImgSrc = getNextSlide();
                    $("#detailSlideShowContent").fadeOut(function () {
                        $("#detailSlideShowContent").empty();
                        $("#detailSlideShowContent").append("<img src='" + nextImgSrc + "' height='450' width='700'></img>");
                    }).fadeIn();
                });

            },
            close: function () {
                $("#slidePrevButton").off("click");
                $("#slideNextButton").off("click");
                $("#slideButtons").css("display", "none");
            },
            resizable: false,
            height: 500,
            width: 725,
            modal: true
        });
        $(".microSlide").click(function (event) {
            var slideHtml = $(this).html();
            var microImgs = $(slideHtml).find(".current");
            var microImg = $(microImgs[0]).html();
            var microImgSrc = $(microImg).attr("src");
            prepareDialogSlide(microImgSrc);
            $("#detailSlideShow").dialog("open");
            $("#detailSlideShow").attr("title", "");
            event.stopPropagation();
        });
    }

    function getNextSlide() {
        var retSrc = detailSlidePhotos[0];

        var nextSlideNum = currSlideNum + 1;
        if (nextSlideNum >= detailSlidePhotos.length - 1) {
            nextSlideNum = 0;
            retSrc = detailSlidePhotos[nextSlideNum];
        } else {
            retSrc = detailSlidePhotos[nextSlideNum];
        }
        currSlideNum = nextSlideNum;

        return retSrc;
    }

    function getPrevSlide() {
        var retSrc = detailSlidePhotos[0];

        var prevSlideNum = currSlideNum - 1;
        if (prevSlideNum < 0) {
            prevSlideNum = detailSlidePhotos.length - 1;
            retSrc = detailSlidePhotos[prevSlideNum];
        } else {
            retSrc = detailSlidePhotos[prevSlideNum];
        }
        currSlideNum = prevSlideNum;

        return retSrc;
    }

    function initMicroSlides() {

        var slider1 = new Slider($('#detailSlide1'));
        slider1.setPhotos(DETAIL.detailPhotos);
        slider1.setSize(240, 135);
        slider1.slide(1);
        slider1.setTheme('theme-dark');
        slider1.setTransitionFunction(SliderTransitionFunctions.circle);

        var slider2 = new Slider($('#detailSlide2'));
        slider2.setPhotos(DETAIL.detailPhotos);
        slider2.setSize(240, 135);
        slider2.slide(2);
        slider2.setTransitionFunction(SliderTransitionFunctions.squares);

        var slider3 = new Slider($('#detailSlide3'));
        slider3.setPhotos(DETAIL.detailPhotos);
        slider3.setSize(240, 135);
        slider3.slide(3);
        slider3.setTransitionFunction(SliderTransitionFunctions.diamond);

        var slider4 = new Slider($('#detailSlide4'));
        slider4.setPhotos(DETAIL.detailPhotos);
        slider4.setSize(240, 135);
        slider4.slide(4);
        slider4.setTransitionFunction(SliderTransitionFunctions.clock);

        var slider5 = new Slider($('#detailSlide5'));
        slider5.setPhotos(DETAIL.detailPhotos);
        slider5.setSize(240, 135);
        slider5.slide(5);
        slider5.setTransition('transition-zoomin');

        var slider6 = new Slider($('#detailSlide6'));
        slider6.setPhotos(DETAIL.detailPhotos);
        slider6.setSize(240, 135);
        slider6.slide(6);
        slider6.setTransition('transition-flip');

    }

    function preloadImages() {
        $.each(detailSlidePhotos, function (index, value) {
            (new Image()).src = value;
        });
    }

    function prepareDialogSlide(microImgSrc) {
        var microImgSrcFiltered = microImgSrc.replace(microDirPath, slideDirPath);
        var slideImgSrc = microImgSrcFiltered.replace(microImgEnding, slideImgEnding);
        $("#detailSlideShowContent").empty();
        $("#detailSlideShowContent").append("<img alt='Custom Detailing' src='" + slideImgSrc + "' height='450' width='700'></img>");
        currSlideNum = $.inArray(slideImgSrc, detailSlidePhotos);
        //currSlideNum = $(detailSlidePhotos).indexOf(slideImgSrc);
        if (currSlideNum === -1) {
            currSlideNum = 0;
        }
    }

    return {
        detailPhotos: [
            {"src": "images/detailing/micros/altima_1_240w135h.png"},
            {"src": "images/detailing/micros/altima_2_240w135h.png"},
            {"src": "images/detailing/micros/bug_1_240w135h.png"},
            {"src": "images/detailing/micros/gary_lincoln_1_240w135h.png"},
            {"src": "images/detailing/micros/gary_lincoln_2_240w135h.png"},
            {"src": "images/detailing/micros/jenny_buick_1_240w135h.png"},
            {"src": "images/detailing/micros/sarah_audi_1_240w135h.png"},
            {"src": "images/detailing/micros/sarah_audi_2_240w135h.png"},
            {"src": "images/detailing/micros/sarah_audi_3_240w135h.png"},
            {"src": "images/detailing/micros/sarah_audi_4_240w135h.png"},
            {"src": "images/detailing/micros/sarah_audi_5_240w135h.png"},
            {"src": "images/detailing/micros/stang_1_240w135h.png"},
            {"src": "images/detailing/micros/stang_2_240w135h.png"}
        ],
        //Public vars/methods
        init: function (goToPrices) {
            DETAIL.loadPage(goToPrices);
        },
        loadPage: function (goToPrices) {
            $('.products').css("display", "none");
            $('#content-ajax').empty();
            $('#content-ajax').load('html/detail.html', function () {
                // TODO: jQuery.browser maybe be removed from v1.9
                if (($.browser.msie) && ($.browser.version == '8.0' || $.browser.version == '7.0' || $.browser.version == '6.0')) {
                    isOldBrowser = true;
                }

                if (!isOldBrowser) {
                    initMicroSlides();
                } else {
                    $("#detailMicroGallWrap").empty();
                    var customIE8Imgs = [];
                    customIE8Imgs.push(
                            "<img id='altima_1_240w135h' alt='Custom Detailing' src='images/detailing/micros/altima_1_240w135h.png' width='240' height='135' />",
                            "<img id='altima_2_240w135h' alt='Custom Detailing' src='images/detailing/micros/altima_2_240w135h.png' width='240' height='135' />",
                            "<img id='gary_lincoln_1_240w135h' alt='Custom Detailing' src='images/detailing/micros/gary_lincoln_1_240w135h.png' width='240' height='135' />",
                            "<img id='gary_lincoln_2_240w135h' alt='Custom Detailing' src='images/detailing/micros/gary_lincoln_2_240w135h.png' width='240' height='135' />",
                            "<img id='sarah_audi_1_240w135h' alt='Custom Detailing' src='images/detailing/micros/sarah_audi_1_240w135h.png' width='240' height='135' />",
                            "<img id='sarah_audi_2_240w135h' alt='Custom Detailing' src='images/detailing/micros/sarah_audi_2_240w135h.png' width='240' height='135' />"
                            );
                    $("#detailMicroGallWrap").append(customIE8Imgs.join(""));
                    $("#detailMicroGallWrap").css("height", "");
                    $("#detailMicroGallWrap img").click(function (event) {
                        var clickedImgSrc = $(this).attr("src");
                        prepareDialogSlide(clickedImgSrc);
                        $("#detailSlideShow").dialog("open");
                        $("#detailSlideShow").attr("title", "");
                        event.stopPropagation();
                    });
                }

                if (goToPrices) {
                    $(document).scrollTop($("#detailPricingTitle").offset().top);
                }
                $('.products').css("display", "inline");

                var cWidth = $('#content').width();
                if (cWidth && cWidth > 675) {
                    $('#detailPackageDiv').css("width", "675px");
                } else {
                    $('#detailPackageDiv').css("width", "100%");
                }
                $('#detailPackageDiv').width(cWidth);

                bindSlideShow();

                preloadImages();
            });
        }
    };
}();