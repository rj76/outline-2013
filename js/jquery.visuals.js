(function ($) {
    $.visuals = function (demo) {
        this.demo = demo;
    };

    $.visuals.prototype.showVisual1 = function() {
        var deferred = new $.Deferred();
        var self = this;
        console.log('in showVisual1');
        $('div.iframe').append($('<iframe id="webgl-content-1"></iframe>'));
        $('h1.header,div.content,div.img,div.earth,div.body,#fft').hide();
        $('#webgl-content-1').attr('src', '/visuals/1/');
        $('div.iframe').width($(window).width());
        $('div.iframe').height($(window).height());
        $('#webgl-content-1,div.iframe').fadeIn(1000, function() {
            $('#body_container').on('visual-done', function() {
                deferred.resolve();
            })
        });

        return deferred;
    };

    $.visuals.prototype.stopVisual1 = function() {
        var deferred = new $.Deferred();
        console.log('in stopVisual1');
        $('div.iframe').fadeOut(2000, function() {
            console.log('visual1 gestopt');
            deferred.resolve();
        });
        return deferred;
    };


}(jQuery));
