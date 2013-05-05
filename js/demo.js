(function ($) {
    $.randomize = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };

    $.demo = function() {};
    $.demo.prototype.init = function() {
        var self = this;
        this.$media = new $.media(this);
        this.$preintro = new $.preintro(this);
        this.$intro = new $.intro(this);
        this.$earth = new $.earth(this);
        this.$klem = new $.klem(this);

    };

    $.demo.prototype.run = function() {
        var self = this;
        $.when(self.$intro.start()).then(function() {
            $.when(self.$earth.start()).then(function() {
                self.$klem.start();
            });
        });
    };

    $demo = new $.demo();
    $demo.init();
    $demo.$media.start();

}(jQuery));
