/**
 * $Author:M. Roberts
 * $Date: Mar. 9th 2013
 *
 * Description: Contains implementation logic for the Roberts Car Wash navigation.
 */
var NAV = (function () {

    //--------------------------------
    // Private Variables and Methods
    //--------------------------------

    function checkRadio(activeVal) {
        var $radios = $('input:radio[name=navigation]');
        $radios.filter('[value="' + activeVal + '"]').attr('checked', true).button("refresh");
    }

    return {
        // -----------------------------
        // Public Variables and Methods
        // -----------------------------

        bindNavClicks: function () {

            $("label[for='navHome']").live("click", function (event) {
                event = null;
                checkRadio("home");
                HOME.init();
            });
            $("label[for='navDetailCenter']").live("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                checkRadio("detail");
                DETAIL.init(false);
            });
            $("#detailBlock").live("click", function (event) {
                event = null;
                checkRadio("detail");
                DETAIL.init(false);
            });
            $("#detailPricesLink").live("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                checkRadio("detail");
                DETAIL.init(true);
            });
            $("label[for='navAutomatic']").live("click", function (event) {
                event = null;
                checkRadio("automatic");
                AUTOMATIC.init();
            });
            $("#automaticBlock").live("click", function (event) {
                event = null;
                checkRadio("automatic");
                AUTOMATIC.init();
            });
            $("label[for='navSelfService']").live("click", function (event) {
                event = null;
                checkRadio("selfservice");
                SELF_SERVICE.init();
            });
            $("#selfServiceBlock").live("click", function (event) {
                event = null;
                checkRadio("selfservice");
                SELF_SERVICE.init();
            });
        },
        /**
         * Initialization of the DTools Navigation Menu.
         */
        init: function () {
            NAV.bindNavClicks();
        }
    };
})();
