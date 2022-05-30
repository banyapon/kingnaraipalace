$( document ).ready(function() {
    splash(500);
});

function splash(param) {
    var time = param;
    setTimeout(function () {
        $('#splashscreen').hide();
    }, time);
}