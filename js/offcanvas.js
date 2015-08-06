/**
 * Created by Alfianjau on 30/07/2015.
 */
$(document).foundation();



$(function() {

    $(".right-off-canvas-toggle, .exit-off-canvas").click(function() {

        $(".top-bar").toggleClass("top-bar-close");

        $(".middle-bar").toggleClass("middle-bar-close");

        $(".bottom-bar").toggleClass("bottom-bar-close");

    });

});
