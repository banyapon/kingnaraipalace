$( window ).load(function() {
    if (window.location.href.indexOf('reload')==-1) {
         window.location.replace(window.location.href+'?reload');
    }
});