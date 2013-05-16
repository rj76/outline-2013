(function ($) {
    var tween_interval;
    $.preintro = function(demo) {
        this.demo = demo;
    };

    $.preintro.prototype.tweenViewport = function() {
        var d = new $.Deferred();

        $('div.body').fadeIn(10000, function() {
            var p = $('div.body').position();
//            $('div.content').css('left', p.left+40)
//            $('h1.header').css('left', p.left+40)
            $('h1.header,div.content,div.img,div.earth,div.body').show();
            d.resolve();
        });

        return d;
    };


}(jQuery));
