(function ($) {
    $.intro = function(demo) {
        this.demo = demo;
    };

    $.intro.prototype.start = function() {
        var self = this;
        var deferred = new $.Deferred();

        $('h1.header').one('show-h1-1', function() {
            $('h1.header').html('Hello boys and girls')
                .textillate({
                    in: {
                        effect: 'fadeInLeftBig',
                        done: function() {
                            $('h1.header').trigger('done-h1-1');
                        }
                    }
                })
        });
        $('h1.header').one('done-h1-1', function () {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('Our very first demo')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        duration: 3000,
                        done: function() {
                            $('div.content').fadeOut(1000, function() {
                                $('div.body').trigger('body-done-2');
                            });
                        }
                    }
                })

        });

        $('div.body').one('body-done-2', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('A bit of CSS3, a bit of HTML5, and a bit of webGL')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.content').fadeOut(function() {
                                $('div.body').trigger('body-done-3');
                            });
                        }
                    }
                })
        });

        $('div.body').one('body-done-3', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('and a lot of beer :P')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.content').fadeOut(function() {
                                $('div.body').trigger('body-done-4');
                            });
                        }
                    }
                })
        });

        $('div.body').one('body-done-4', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('Hope you enjoy')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.content,h1.header').fadeOut(function() {
                                deferred.resolve();
                            });
                        }
                    }
                })
        });

        $('h1.header').trigger('show-h1-1');

        return deferred;
    }
}(jQuery));
