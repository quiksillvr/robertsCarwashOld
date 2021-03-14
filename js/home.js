var HOME = function () {
    //Private vars

    return {
        //Public vars/methods
        init: function () {
            HOME.loadPage();
        },
        loadPage: function () {
            $('.products').css("display", "none");
            $('#content-ajax').empty();
            $('#content-ajax').load('html/home.html', function () {
                $('.products').css("display", "inline");
            });
        }
    }
}();