(function ($) {
    var tween_interval;
    $.preintro = function(demo) {
        this.demo = demo;
    };

    $.preintro.prototype.tweenViewport = function() {
        var deferred = new $.Deferred();

        $('div.body').fadeIn(10000, function() {
            var p = $('div.body').position();
            $('#fft').css('left', p.left).css('top', ($('div.body').outerHeight())-$('#fft').height()+20);
            $('#fft').fadeIn();
            $('h1.header,div.content,div.img,div.earth,div.body,#fft').show();
            deferred.resolve();
        });

        return deferred;
    };


}(jQuery));
