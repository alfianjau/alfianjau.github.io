// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

$(document).foundation();

$(function() {

    $(".right-off-canvas-toggle, .exit-off-canvas").click(function() {

        $(".top-bar").toggleClass("top-bar-close");

        $(".middle-bar").toggleClass("middle-bar-close");

        $(".bottom-bar").toggleClass("bottom-bar-close");

    });

});


Pizza.init('#myChart', {
    data: [23, 44, 1, 29, 90]
});

