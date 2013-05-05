(function ($) {
    $.media = function(demo) {
        this.demo = demo;
    };

    $.media.prototype.start = function() {
        var deferred = new $.Deferred();
        var self = this;

        // Using an audio object
        var a = new Audio();
        a.src = 'track/track-2.ogg';

        var
            fft = document.getElementById('fft'),
            ctx = fft.getContext('2d'),
            dancer, kick, kicks=bars=0,
            audio  = document.getElementsByTagName('audio')[0];

        dancer = new Dancer();
        kick = dancer.createKick({
            onKick: function () {
                ctx.fillStyle = '#ff0077';
                if (kicks++%4 == 0) {
                    if (bars++%4==0) {
                        console.log('bar');
                    } else {
                        console.log('kick');
                        $('div.body').trigger('kick');
                    }
                }
            },
            offKick: function () {
                ctx.fillStyle = '#666';
            }
        }).on();

        try {
            dancer
                .fft(fft, { fillStyle: '#666' })
                .load(audio)
                .onceAt(22.5, function() {
                    self.demo.$preintro.tweenViewport();
                })
                .onceAt(44, function() {
                    self.demo.run();
                });

            if (dancer.isLoaded()) {
                dancer.play();
                deferred.resolve();
            } else {
            }

        } catch(err) {
            console.log(err);
            deferred.reject();
        }

        window.Dancer = dancer;

        return deferred;
    };

}(jQuery));
