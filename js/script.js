var viewportWidth = document.documentElement.clientWidth;

$(document).ready(function () {
    window.onscroll = function () {
        if (window.pageYOffset <= 550) {
            $(".lazy_logo").addClass("hidden");
        }
        else {
            $(".lazy_logo").removeClass("hidden");
        }
    }
});
