function initMap() {
    var centerLocation = new google.maps.LatLng(10.827479, 106.711213);
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: centerLocation, // My Home

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.

        styles: [{
            "featureType": "all",
            "stylers": [{
                "saturation": 0
            }, {
                "hue": "#e7ecf0"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": -70
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: centerLocation,
        map: map,
        title: 'My Home!',
        icon: window.location.origin+window.location.pathname+'/img/location.png'
    });

    var contentString = '<div id="map_content">'+
        '<div id="siteNotice">'+
            '<div class="map-title">My Home</div>'+
            'B7-1 No1 Str. <br> Thu Duc District <br> Ho Chi Minh City, Vietnam'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
};

