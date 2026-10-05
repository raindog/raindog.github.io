var msis = (function() {
    var getFontSize = function() {
        return Math.max(Math.min($(".site").width() / (0.87*10), parseFloat(120)), parseFloat(12));
    };

    var getLineHeight = function() {
        return getFontSize();
    };

    var setPostsTitleFontSize = function() {
        jQuery(".post-title").css('font-size', getFontSize());
        jQuery(".post-title").css('line-height', getLineHeight() + "px");
    };

    return {
        setPostTitleFontSize: setPostsTitleFontSize
    };
})();

$( document ).ready(function() {
    msis.setPostTitleFontSize();
});

$( window ).resize(function() {
    msis.setPostTitleFontSize();
});
