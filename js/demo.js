(function ($) {
    $.randomize = function (arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };

    $.demo = function () {
    };
    $.demo.prototype.init = function () {
        var self = this;
        this.$media = new $.media(this);
        this.$preintro = new $.preintro(this);
        this.$intro = new $.intro(this);
        this.$earth = new $.earth(this);
        this.$klem = new $.klem(this);
        this.$visuals = new $.visuals(this);
    };

    $.demo.prototype.run = function () {
        var self = this;
        $.when(self.$media.start()).then(function () {
        });
    };

    $.demo.prototype.second_run = function () {
        var self = this;
        $.when(self.$intro.start()).then(function() {
            $.when(self.$earth.start()).then(function() {
                $.when(self.$klem.start()).then(function() {
                    $.when(self.$visuals.showVisual1()).then(function () {
                    });
                });
            });
        });
    };

    $demo = new $.demo();
    $demo.init();
    $demo.run();


}(jQuery));
