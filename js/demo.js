(function ($) {
    $.randomize = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };

    $('h1.header').trigger('show-h1-1');
    var earth = new $.earth();
    earth.start();
}(jQuery));
