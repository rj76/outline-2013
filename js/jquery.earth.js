(function ($) {
    var zoom_out = 2, zoom_in = 5, zoom=zoom_out, zoom_in_klem=6;
    var current	= {lat: 0, lon: 0, zoom: zoom_out};
    var earth, tween_interval;
    var delay = 100, duration = 3000;

    var update  = function(){
        earth.setPosition(current.lat, current.lon);
    };

    $.earth = function () {};
    $.earth.prototype.start = function() {
        var deferred = new $.Deferred();
        var geocoder = new google.maps.Geocoder();
        var could_have_lat_lon = [
            [37.7756, -122.4193],
            [-23.5475, -46.6361],
            [17.225, -89.6133],
            [46.0649278, 13.2307027]
        ];

        var could_have_text = [
            'We could have lived in',
            'or in',
            'perhaps in',
            'even in'
        ];

        var options = { zoom: current.zoom, position: [current.lat, current.lon], proxyHost: 'http://data.webglearth.com/cgi-bin/corsproxy.fcgi?url=' };
        earth = new WebGLEarth('earth_div', options);
        $('div.earth').data('earth', earth);

        // remove previous tweens if needed
        var tween;

        function getLocation(callback) {
            var lat = parseFloat(current.lat);
            var lng = parseFloat(current.lon);
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    callback(results[0].formatted_address);
                } else {
                    callback('floating on the sea');
                }
            });
        }

        function setUpTween() {
            TWEEN.removeAll();
            var latlon = could_have_lat_lon.pop();
            tween = new TWEEN.Tween(current)
                .to({lat: latlon[0], lon: latlon[1]}, duration)
                .delay(delay)
                .easing(TWEEN.Easing.Elastic.InOut)
                .onUpdate(update)
                .onComplete(function() {
                    getLocation(function(result) {
                        $('div.content').fadeOut();
                        var txt = could_have_text.shift();
                        $('h1.header').replaceWith($('<h1 class="header typeface-js"></h1>'));
                        $('h1.header').html(txt);
                        var zoom_in_tween = new TWEEN.Tween(current)
                            .to({zoom: zoom_in}, duration)
                            .onUpdate(function() {earth.setZoom(current.zoom)})
                            .onComplete(function() {
                                $('h1.header')
                                    .textillate({
                                        in: {
                                            effect: 'fadeIn',
                                            done: function() {
                                                $('div.content').replaceWith($('<div class="content typeface-js"></div>'));
                                                $('div.content').html(result);
                                                $('div.content')
                                                    .textillate({
                                                        in: {
                                                            effect: 'fadeInLeftBig',
                                                            done: function() {
                                                                if (could_have_lat_lon.length == 0) {
                                                                    TWEEN.removeAll();
                                                                    window.clearInterval(tween_interval);
                                                                    deferred.resolve();
                                                                } else {
                                                                    var latlon = could_have_lat_lon.pop();
                                                                    var zoom_out_tween = new TWEEN.Tween(current)
                                                                        .to({zoom: zoom_out})
                                                                        .onUpdate(function() {earth.setZoom(current.zoom)})
                                                                        .onComplete(function() {
                                                                            tween.start();
                                                                            tween.to({lat: latlon[0], lon: latlon[1]}, duration);
                                                                        });
                                                                    zoom_out_tween.start();
                                                                }
                                                            }
                                                        }
                                                    })
                                            }
                                        }
                                    });
                            });
                        zoom_in_tween.start();
                    });
                });
        }

        setUpTween();
        tween.start();

        tween_interval = setInterval(function() {
            TWEEN.update();
        }, 30);

        return deferred;
    };

    $.earth.prototype.showKlem = function(klem) {
        var deferred = new $.Deferred();

        var kl_latlon = [52.7251, 6.985400000000027];
        var em_latlon = [52.7858037, 6.897585100000015];

        var zoom_out_tween = new TWEEN.Tween(current)
            .to({zoom: zoom_out})
            .onUpdate(function() {earth.setZoom(current.zoom)})
            .onComplete(function() {
                var latlon = klem == 'em' ? em_latlon : kl_latlon;
                var tween = new TWEEN.Tween(current)
                    .to({lat: latlon[0], lon: latlon[1]}, duration)
                    .delay(delay)
                    .easing(TWEEN.Easing.Elastic.InOut)
                    .onUpdate(update)
                    .onComplete(function() {
                        var zoom_in_tween = new TWEEN.Tween(current)
                            .to({zoom: zoom_in_klem}, duration)
                            .onUpdate(function() {earth.setZoom(current.zoom)})
                            .onComplete(function() {
                                deferred.resolve();
                            });
                        zoom_in_tween.start();
                    });
                tween.start();
            });
        zoom_out_tween.start();

        tween_interval = setInterval(function() {
            TWEEN.update();
        }, 30);

        return deferred;
    }
}(jQuery));
