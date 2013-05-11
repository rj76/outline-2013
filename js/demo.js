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
//        this.$earth = new $.earth(this);
//        this.$klem = new $.klem(this);
        this.$sprite = new $.sprite();
        this.$visuals = new $.visuals(this);
        this.$outro = new $.outro(this);

        $('div.body').on('start-sprite', function() {
            self.$sprite.start();
        });

    };

    $.demo.prototype.run = function () {
        var self = this;
        $.when(self.$media.start()).then(function () {
        });
    };

    $.demo.prototype.second_run = function () {
        var self = this;
        $.when(self.$intro.start()).then(function() {
            $.when(self.$sprite.start()).then(function() {
                $.when(self.$visuals.showVisual1()).then(function () {
                    Modernizr.load({
                        load: [
                            'css/atari.css'
                        ],
                        complete: function() {
                            self.$outro.start();
                        }
                    });
                });
            });
        });
    };

    $demo = new $.demo();
    $demo.init();
    $demo.run();


}(jQuery));
