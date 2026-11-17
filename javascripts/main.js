(function() {
    var MIN_SIZE = 12;
    var MAX_SIZE = 120;

    var getContentWidth = function(el) {
        // Equivalent of jQuery .width(): content width, padding excluded
        return parseFloat(getComputedStyle(el).width) || 0;
    };

    var setPostsTitleFontSize = function() {
        var site = document.querySelector(".site");
        if (!site) {
            return;
        }

        var size = Math.max(Math.min(getContentWidth(site) / (0.87 * 10), MAX_SIZE), MIN_SIZE);

        document.querySelectorAll(".post-title").forEach(function(title) {
            title.style.fontSize = size + "px";
            title.style.lineHeight = size + "px";
        });
    };

    document.addEventListener("DOMContentLoaded", setPostsTitleFontSize);
    window.addEventListener("resize", setPostsTitleFontSize);
})();
