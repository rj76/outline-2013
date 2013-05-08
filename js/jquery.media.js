(function ($) {
    $.media = function(demo) {
        this.demo = demo;
    };

    $.media.prototype.start = function() {
        var deferred = new $.Deferred();
        var self = this;

        var
            fft = document.getElementById('fft'),
            ctx = fft.getContext('2d'),
            dancer, kick, kicks=bars=0,
            audio  = document.getElementsByTagName('audio')[0];

        Modernizr.load({
            load: [
                'js/dancer/dancer.min.js',
                'js/dancer/kick.js',
                'js/dancer/adapterWebkit.js',
                'js/dancer/adapterMoz.js',
                'js/dancer/fft.js',
                'js/dancer/dancer.fft.js'
                ],
            complete: function() {
                try {
                    dancer = new Dancer();
                    kick = dancer.createKick({
                        onKick: function () {
                            ctx.fillStyle = '#ff0077';
                            if (kicks++%4 == 0) {
                                if (bars++%4==0) {
                                    $('div.body').trigger('bar');
                                } else {
                                    $('div.body').trigger('kick');
                                }
                            }
                        },
                        offKick: function () {
                            ctx.fillStyle = '#666';
                        }
                    }).on();

                    dancer
                        .fft(fft, { fillStyle: '#666' })
                        .load(audio)
                        .onceAt(22, function() {
                            self.demo.$preintro.tweenViewport()
                        })
                        .onceAt(44, function() {
                            self.demo.second_run();
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
