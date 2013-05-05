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
                        effect: 'fadeInLeftBig',
                        done: function() {
                            $('div.content').fadeOut('slow', function() {
                                $('div.body').trigger('body-done-1');
                            });
                        }
                    }
                })

        });

        $('div.body').one('body-done-1', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('Yet another group')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeInRightBig',
                        done: function() {
                            $('div.content').fadeOut('slow', function() {
                                $('div.body').trigger('body-done-2');
                            });
                        }
                    }
                })
        });

        $('div.body').one('body-done-2', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('The name we\'ve chosen is as shitty as the places we come from')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.content').fadeOut(function() {
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
