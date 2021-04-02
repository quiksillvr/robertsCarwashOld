if (typeof console === "undefined") {
    console = {
        log: function () {
        },
        log:function (msg) {
        }
    };
}

var CAR_WASH = function () {
    //Private vars
    var cwPlayer;
    var prevTrackNum;
    var tracks = {
        1: {trackNum: "1", title: "The Beach Boys-Little Deuce Coupe", track: "Little_Deuce_Coupe.mp3"},
        2: {trackNum: "2", title: "The Beach Boys-409", track: "409.mp3"},
        3: {trackNum: "3", title: "The Beach Boys-Little Honda", track: "Little_Honda.mp3"},
        4: {trackNum: "4", title: "The Beach Boys-Cherry, Cherry Coupe", track: "Cherry_Cherry_Coupe.mp3"},
        5: {trackNum: "5", title: "The Beach Boys-Custom Machine", track: "Custom_Machine.mp3"},
        6: {trackNum: "6", title: "The Beach Boys-Our Car Club", track: "Our_Car_Club.mp3"}
    };

    function bindJPlayer() {
        var currTrack = getRandomTrack();
        setTrack(currTrack);
    }

    function bindTrackSelections() {
        $(".cwTrack").on("click", function (event) {
            var trackSelected = this;
            if (trackSelected && trackSelected.id) {
                var trackNum = trackSelected.id.slice(-1);
                if (trackNum) {
                    setTrack(tracks[trackNum]);
                }
            }
        });
    }

    function playNextTrack() {
        var nextTrackNum = 1;
        if (prevTrackNum) {
            var prevTrackInt = parseInt(prevTrackNum);
            if (prevTrackInt < 6) {
                nextTrackNum = prevTrackInt + 1;
            }
        }
        setTrack(tracks[nextTrackNum]);
    }
    
    function initCopyRightYear(){
        var dteNow = new Date();
        var intYear = dteNow.getFullYear();     
        $("#currYr").html(intYear);
    }

    function getRandomTrack() {
        var random = Math.ceil(Math.random() * 6);
        var track;
        if (tracks) {
            track = tracks[random];
        }
        return track;
    }

    function setTrack(trackObj) {
        $("#jquery_jplayer_1").jPlayer("stop");

        $("#jpTrackTitle").text(trackObj.title);
        $("#track" + trackObj.trackNum).addClass("cwTrackSelected");
        if (prevTrackNum) {
            $("#track" + prevTrackNum).removeClass("cwTrackSelected");
        }

        if (cwPlayer) {
            $("#jquery_jplayer_1").jPlayer("setMedia", {
                mp3: "music/" + trackObj.track,
                volume: "0.1"
            }).jPlayer("play");
        } else {
            cwPlayer = $("#jquery_jplayer_1").jPlayer({
                ready: function () {
                    $("#jquery_jplayer_1").jPlayer("setMedia", {
                        title: trackObj.title,
                        mp3: "music/" + trackObj.track
                    }).jPlayer("play");
                }, ended: function () {
                    playNextTrack();
                },
                swfPath: "/js/jPlayer",
                supplied: "mp3",
                volume: "0.3"
            });
        }

        prevTrackNum = trackObj.trackNum;
    }

    function initCarWashMap() {
        var cWidth = $('.sideBlock').width();
        var cHeight = 300;
        if (cWidth && cWidth < 300) {
            cDiff = 300 - cWidth;
            cHeight = 300 - cDiff;
        } else {
            cWidth = 300;
        }
        $('#carWashMap').width(cWidth);
        $('#carWashMap').height(cHeight);
    }
    
    function initToolTips(){
        $(document).tooltip({
            show: {
                effect: "slideDown",
                delay: 250
            },
            hide: {
                effect: "explode",
                delay: 250
            },
            position: {
                my: "left top",
                at: "left+10 bottom"
            }
        });
        $(".ui-button").tooltip({disabled: true});
        $("button").tooltip({disabled: true});        
    }

    function preloadImages() {
        (new Image()).src = 'images/banner_chrome_750x100_hover.png';
        (new Image()).src = 'images/banner_chrome_750x100.png';

        $.each(DETAIL.detailPhotos, function (index, value) {
            (new Image()).src = value.src;
        });

        $.each(AUTOMATIC.automaticPhotos, function (index, value) {
            (new Image()).src = value.src;
        });

        $.each(SELF_SERVICE.selfServicePhotos, function (index, value) {
            (new Image()).src = value.src;
        });
    }


    return {
        //Public vars/methods
        init: function () {
            $("#navigation").buttonset();

            var selNavId = $("#navigation :radio:checked").attr('id');
            if (selNavId === "navHome") {
                HOME.init();
            } else if (selNavId === "navDetailCenter") {
                DETAIL.init();
            } else if (selNavId === "navAutomatic") {
                AUTOMATIC.init();
            } else if (selNavId === "navSelfService") {
                SELF_SERVICE.init();
            } else {
                HOME.init();
            }
            
            initCopyRightYear();
            //initToolTips();
            
            NAV.init();
            bindJPlayer();
            bindTrackSelections();
            initCarWashMap();

            preloadImages();
            $("#header").hover(
                    function () {
                        $(this).css("background", "url('images/banner_chrome_750x100_hover.png') no-repeat scroll center center #0177ED");
                    },
                    function () {
                        $(this).css("background", "url('images/banner_chrome_750x100.png') no-repeat scroll center center #0177ED");
                    });
        }
    };
}();
$(document).ready(function () {
    CAR_WASH.init();
});