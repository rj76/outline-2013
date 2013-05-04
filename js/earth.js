(function ($) {
    var earth;
    var geocoder;
    geocoder = new google.maps.Geocoder();

    var update	= function(){
        earth.setPosition(current.lat, current.lon);
    }
    var current	= {zoom: 0, lat: 0, lon: 0};

    // remove previous tweens if needed
    var delay = 100, zoom_max=1, zoom_min=0, lat_min=0, lon_min=0;
    var duration = 3000;
    var tween, locations=[], hits;

    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

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
        tween = new TWEEN.Tween(current)
            .to({lat: getRandomArbitary(-90, 90), lon: getRandomArbitary(-180,180)}, duration)
            .delay(delay)
            .easing(TWEEN.Easing.Elastic.InOut)
            .onUpdate(update)
            .onComplete(function() {
                getLocation(function(result) {
                    if ($.inArray(result, locations) != -1) {
                        result = 'meh';
                    } else {
                        locations.push(result);
                    }
                    $('div.content').replaceWith($('<div class="content"></div>'));
                    $('div.content').html(result);
                    $('div.content')
                        .textillate({
                            in: {
                                effect: 'fadeInLeftBig',
                                done: function() {
                                    if (locations.length >= 4) {
                                        TWEEN.removeAll();
                                        $.klem.start();
                                    } else {
                                        tween.start();
                                        tween.to({lat: getRandomArbitary(-90, 90), lon: getRandomArbitary(-180,180)}, duration);
                                    }
                                }
                            }
                        })
                });
            });
    }

    $.earth = function () {};
    $.earth.prototype.start = function() {
        var options = { zoom: 2.5, position: [current.lat, current.lon], proxyHost: 'http://data.webglearth.com/cgi-bin/corsproxy.fcgi?url=' };
        earth = new WebGLEarth('earth_div', options);

        setUpTween();
        tween.start();

        setInterval(function() {
            TWEEN.update();
        }, 30);
    };
}(jQuery));
