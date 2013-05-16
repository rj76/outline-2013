(function ($) {
    $.visuals = function (demo) {
        this.demo = demo;
    };

    $.visuals.prototype.loadVisual = function() {
        var d = new $.Deferred();
        $('h1.header,div.content,div.img,div.earth,div.body,div.outro').hide();

        $('div.iframe').show();
        $('div.iframe').width($(window).width()-10);
        $('div.iframe').height($(window).height()-10);
        $('div.iframe').append($('<iframe id="webgl-content"></iframe>'));
        $('#webgl-content').attr('src', '/visuals/1/');
        $('#body_container').one('webgl-loaded', function() {
            console.log('got webgl-loaded');
            d.resolve();
        });
        return d;
    };

    $.visuals.prototype.showVisual = function() {
        var d = new $.Deferred();
        console.log('fading in');
        $('div.iframe').fadeTo(2000, 1, function() {
            console.log('fade in done, starting webGL');
            $('#body_container').trigger('startAll');
            $('#body_container').on('visual-done', function() {
                console.log('got visual done');
                d.resolve();
            })
        });

        return d;
    };

    $.visuals.prototype.stopVisual = function() {
        var deferred = new $.Deferred();
        $('div.iframe').fadeOut(2000, function() {
            deferred.resolve();
        });
        return deferred;
    };


}(jQuery));
