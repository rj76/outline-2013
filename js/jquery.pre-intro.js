(function ($) {
    var tween_interval;
    $.preintro = function(demo) {
        this.demo = demo;
    };

    $.preintro.prototype.tweenViewport = function() {
        $('div.body').fadeIn(6000, function() {
            var p = $('div.body').position();
            $('#fft').css('left', p.left).css('top', ($('div.body').outerHeight())-$('#fft').height()+8);
            $('#fft').fadeIn();
        });
    };

    $.preintro.prototype.sayHello = function() {
        console.log('saying hello');
    };


}(jQuery));
