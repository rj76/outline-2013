(function ($) {
    $.alpaca = function (demo) {
        this.demo = demo;
    };

    $.alpaca.prototype.start = function() {
        var deferred = new $.Deferred();
        var self = this;

        $('div.img').hide();
        $('div.body').unbind();
        $('h1.header, div.content').fadeOut(function() {
            $('div.content').html('');
            $('h1.header').replaceWith($('<h1 class="header"></h1>'));
            $('h1.header').html('I used to like ponies')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('div.img').css('left', o.left+($('div.body').width()/2 - $('div.img').width()/2));
                            $('div.img').html('<img src="img/ponies.jpg" />');
                            $('div.img').fadeIn(function() {
                                startButNow();
                            });
                        }
                    }
                });
        });

        function startButNow() {
            $('h1.header, div.img').fadeOut();

            $('h1.header').replaceWith($('<h1 class="header"></h1>'));
            $('h1.header').html('but now')
                .textillate({
                    in: {
                        effect: 'fadeIn',
                        done: function() {
                            $('h1.header').replaceWith($('<h1 class="header"></h1>'));
                            $('h1.header').html('alpacas')
                                .textillate({
                                    in: {
                                        effect: 'fadeIn',
                                        done: function() {
                                            $('div.img').html('<img src="img/alpaca-hoi.jpg" />');
                                            $('div.img').fadeIn(function() {
                                                evil();
                                            });
                                        }
                                    }
                                });
                        }
                    }
                });

        }

        function evil() {
            $('h1.header, div.img').fadeOut('slow', function() {
                // fade in eyes
                // then evil alpacas drinking our  beer
            });

        }

        $('div.body').one('alpaca-2', function() {
        });

        $('div.body').one('done-h1-klem-3', function() {
            $('h1.header').replaceWith($('<h1 class="header typeface-js middle"></h1>'));
            $('h1.header').html('we ended up in Emmen')
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

        $('div.body').one('body-done-klem-4', function() {
            $('h1.header, div.content').hide();
            $('div.earth').fadeIn();
            $.when(self.demo.$earth.showKlem('em')).then(function() {
                $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                $('h1.header').html('possibly the most miserable place on earth')
                    .textillate({
                        in: {
                            effect: 'fadeIn',
                            done: function() {
                                $('h1.header').fadeOut(function() {
                                    $('div.content,div.earth,div.img').hide();
                                    var o = $('div.body').offset();
                                    $('div.img').css('left', o.left+($('div.body').width()/2 - $('div.img').width()/2))
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
                                                            .html('lots and lots of old people')
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

        $('div.body').one('body-done-klem-5', function() {
            $('h1.header, div.content, div.earth').fadeOut('slow', function() {
                $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                $('h1.header').html('there is one thing worse than Emmen')
                    .textillate({
                        in: {
                            effect: 'fadeIn',
                            done: function() {
                                $('div.content').replaceWith($('<div class="content typeface-js"></div>'));
                                $('div.content')
                                    .html('Klazienaveen')
                                    .textillate({
                                        in: {
                                            effect: 'fadeIn',
                                            duration: 1000,
                                            done: function() {
                                                var o = $('div.body').offset();
                                                $('div.img').css('left', o.left+($('div.body').width()/2 - $('div.img').width()/2))
                                                $('div.img').html('<img src="img/schrik.jpg" />');
                                                $('div.img').show();
                                                $('div.content').fadeOut('slow', function() {
                                                    $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                                                    $('h1.header').html('So we\'re making useless things nobody asked for')
                                                        .textillate({
                                                            in: {
                                                                effect: 'fadeIn',
                                                                duration: 1000,
                                                                done: function() {
                                                                    $('div.content').replaceWith($('<div class="content"></div>'));
                                                                    $('div.content')
                                                                        .html('ha ha')
                                                                        .textillate({
                                                                            in: {
                                                                                duration: 2000,
                                                                                effect: 'fadeInLeftBig',
                                                                                done: function() {
                                                                                    $('div.content').fadeOut('slow', function() {
                                                                                        deferred.resolve();
                                                                                    });
                                                                                }
                                                                            }
                                                                        });
                                                                }
                                                            }
                                                        });
                                                });
                                            }
                                        }
                                    });
                            }
                        }
                    });
            });
        });

        return deferred;
    };
}(jQuery));
