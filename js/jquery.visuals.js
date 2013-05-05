(function ($) {
    $.visuals = function (demo) {
        this.demo = demo;
    };

    $.visuals.prototype.showVisual1 = function() {
        var deferred = new $.Deferred();
        var self = this;
        this.bar_count = 0;
        console.log('in showVisual1');
        $('h1.header,div.content,div.img,div.earth,div.body,#fft').hide();
        $('#webgl-content-1').attr('src', '/visuals/1/');
//        $('#webgl-content-2').attr('src', '/visuals/2/');
        $('div.iframe').width($(window).width());
        $('div.iframe').height($(window).height());
        $('#webgl-content-1,div.iframe').fadeIn(1000, function() {
//            $('div.body').on('bar', function() {
//                self.bar_count++;
//                if (self.bar_count == 7) {
//                    deferred.resolve();
//                }
//            });
        });

        return deferred;
    };

    $.visuals.prototype.stopVisual1 = function() {
        var deferred = new $.Deferred();
        $('div.iframe').fadeOut(2000, function() {
//            $('#webgl-content-1').remove();
            console.log('visual1 gestopt');
            deferred.resolve();
        });
        return deferred;
    };

    $.visuals.prototype.showVisual2 = function() {
        return;
        var deferred = new $.Deferred();
        var self = this;
        console.log('in showVisual2');
        $('#webgl-content-2').attr('src', '/visuals/2/');
        $('div.iframe').width($(window).width());
        $('div.iframe').height($(window).height());
        $('div.iframe').fadeIn(1000, function() {
            deferred.resolve();
        });

        return deferred;
    };

    $.visuals.prototype.stopVisual2 = function() {
        var deferred = new $.Deferred();
        $('div.iframe').fadeOut(2000, function() {
            deferred.resolve();
        });
        return deferred;
    };

}(jQuery));
