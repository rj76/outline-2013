(function ($) {
    $.intro = function() {};
    $.intro.prototype.start = function() {
        var deferred = new $.Deferred();

        $('h1.header').on('show-h1-1', function() {
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
        $('h1.header').on('done-h1-1', function () {
            $('div.content').html('Our very first demo')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeInLeftBig',
                        done: function() {
                            $('div.body').trigger('body-done-1');
                        }
                    }
                })

        });

        $('div.body').on('body-done-1', function() {
            $('div.content').replaceWith($('<div class="content"></div>'));
            $('div.content').html('Yet another group')
            $('div.content')
                .textillate({
                    in: {
                        effect: 'fadeInRightBig',
                        done: function() {
                            $('div.body').trigger('body-done-2');
                        }
                    }
                })
        });

        $('div.body').on('body-done-2', function() {
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
