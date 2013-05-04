(function ($) {
    $.klem = function ($earth) {
        this.earth = $earth;
    };

    $.klem.prototype.start = function() {
        var deferred = new $.Deferred();
        var self = this;

        $('div.body').unbind();
        $('div.earth, h1.header, div.content').fadeOut(function() {
            $('div.content').html('');
            $('div.earth').hide();
            $('h1.header').replaceWith($('<h1 class="header typeface-js middle"></h1>'));
            $('h1.header').html('but no....')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.body').trigger('done-h1-klem-1');
                        }
                    }
                })
        });

        $('div.body').on('done-h1-klem-1', function() {
            $('h1.header').replaceWith($('<h1 class="header typeface-js middle"></h1>'));
            $('h1.header').html('no')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.body').trigger('done-h1-klem-2');
                        }
                    }
                })
        });

        $('div.body').on('done-h1-klem-2', function() {
            $('h1.header').replaceWith($('<h1 class="header typeface-js middle"></h1>'));
            $('h1.header').html('nein')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.body').trigger('done-h1-klem-3');
                        }
                    }
                });
        });

        $('div.body').on('done-h1-klem-3', function() {
            $('h1.header').replaceWith($('<h1 class="header typeface-js middle"></h1>'));
            $('h1.header').html('jansi lives in Emmen')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.content').replaceWith($('<div class="content"></div>'));
                            $('div.content')
                                .html('let me show you')
                                .textillate({
                                    in: {
                                        effect: 'fadeIn',
                                        done: function() {
                                            $('div.body').trigger('body-done-klem-4');
                                        }
                                    }
                                });
                        }
                    }
                });
        });

        $('div.body').on('body-done-klem-4', function() {
            $('div.content').hide();
            $('div.earth').fadeIn();
            $.when(self.earth.showKlem('em')).then(function() {
                $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                $('h1.header').html('meet the most terrible place on earth')
                    .textillate({
                        in: {
                            effect: 'fadeIn',
                            done: function() {
                                $('h1.header').fadeOut(function() {
                                    $('div.img').html('<img src="img/bejaarden.jpg" />');
                                    $('div.img').fadeIn(function() {
                                        $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                                        $('h1.header').html('Emmen')
                                            .textillate({
                                                in: {
                                                    effect: 'fadeIn',
                                                    done: function() {
                                                        $('div.content').replaceWith($('<div class="content"></div>'));
                                                        $('div.content')
                                                            .html('lot\'s and lot\'s of old people')
                                                            .textillate({
                                                                in: {
                                                                    effect: 'fadeIn',
                                                                    done: function() {
                                                                        $('div.body').trigger('body-done-klem-5');
                                                                    }
                                                                }
                                                            });
                                                    }
                                                }
                                            });

                                    })
                                })

                            }
                        }
                    });
            });
        });

        $('div.body').on('body-done-klem-4', function() {
            $('div.img, div.content, div.earth').fadeOut(function() {
                console.log('ready');
            });
        });

        return deferred;
    };
}(jQuery));
