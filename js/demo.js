(function ($) {
    $.randomize = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };

    var $intro = new $.intro(), $earth = new $.earth(), $klem = new $.klem($earth);

    $.when($intro.start()).then(function() {
        $.when($earth.start()).then(function() {
            $klem.start();
        });
    });

}(jQuery));
