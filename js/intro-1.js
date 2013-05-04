(function ($) {
    var colors = [
        '#FF0000',
        '#FF6600',
        '#CCFF00',
        '#00FF00',
        '#0066FF',
        '#FF00FF'
    ];

    $('h1.header').on('show-h1-1', function() {
        $('h1.header').html('Hello boys and girls')
            .textillate({
                in: {
                    effect: 'fadeInLeftBig',
                    done: function() {
//                        var c = $('h1.header').clone();
//                        $('h1.header').fadeOut(function() {
//                            var t = setInterval(function(){
//                                $('canvas').empty();
//                                console.log('setting colors');
//                                var c = $.randomize(colors);
//                                console.log(c);
//                                $('h1.header').gradienttext({
//                                    colors: c,
//                                    style: $.randomize(['horizontal', 'vertical'])
//                                });
//                            }, 100);
//
//                            $('h1.header').data('timer', t);
//                        });
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
                        $('div.body').trigger('body-done');
                        console.log('done div.content')
                    }
                }
            })

    });

    $('div.body').on('body-done', function() {
        $('h1.header')
            .textillate({
                loop:true,
                out: {
                        effect: 'hinge'
                }
            });
    })
}(jQuery));
