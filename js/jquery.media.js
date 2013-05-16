(function ($) {
    $.media = function(demo) {
        this.demo = demo;
    };

    $.media.prototype.start = function() {
        var deferred = new $.Deferred();
        var self = this;

        var
            dancer, kick, kicks=bars=0,
            audio  = document.getElementsByTagName('audio')[0];

        Modernizr.load({
            load: [
                'js/dancer/dancer.min.js',
                'js/dancer/kick.js',
                'js/dancer/adapterWebkit.js',
                'js/dancer/adapterMoz.js'
                ],
            complete: function() {
                try {
                    dancer = new Dancer();
                    kick = dancer.createKick({
                        onKick: function () {
                            if (kicks++%4 == 0) {
                                if (bars++%4==0) {
                                    $('div.body').trigger('bar');
                                } else {
                                    $('div.body').trigger('kick');
                                }
                            }
                        }
                    }).on();

                    dancer
                        .load(audio)
                        .onceAt(22, function() {
                            self.demo.$preintro.tweenViewport()
                        })
                        .onceAt(44, function() {
                            self.demo.second_run();
                        })
                        .onceAt(175, function() {
                            $('#body_container').trigger('stop-hellnight');
                        })
                        .onceAt(218, function() {
                            if ($('div.iframe').is(":visible")) {
                                $('#body_container').trigger('visual-done');
                            }
                        });

                    if (dancer.isLoaded()) {
                        dancer.play();
                        deferred.resolve();
                        var int=window.setInterval(function(){$('div.time').html(dancer.getTime())},1000);
                        $('#audio').bind('ended', function() {
                            $('div.outro').fadeOut();
                            window.clearInterval(int);
                        });

                        $('div.body').data('dancer', dancer);
                    } else {
                    }

                } catch(err) {
                    console.log(err);
                    deferred.reject();
                }

                window.Dancer = dancer;
            }
        });

        return deferred;
    };

}(jQuery));
