   // Lock to India bounds
    var southWest = L.latLng(7.319, 61.523),
        northEast = L.latLng(36.774, 100.635),
        bounds = L.latLngBounds(southWest, northEast);

var Metro_Layer = new L.GeoJSON.AJAX("data/Metro_Layer.geojson",{style: function (feature) {
    return {
        radius: 6,
        fillColor: '#FF0000',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 1
    }
},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng)
    },onEachFeature: function (feature, layer) {
                        layer.bindPopup("<h4 class='custom-popup'>" + feature.properties.Address + "</h4>");
                    }});

    // Provide your access token
    L.mapbox.accessToken = 'pk.eyJ1IjoidGVqYXNrYXJld2FyIiwiYSI6ImNrOHk0MjNyeTBmNTczZXRhMnhydWhtd2cifQ.SZzTxWoDd9i8ljDbwQrfBQ';
	// L.mapbox.accessToken = 'pk.eyJ1Ijoib3NtLWluIiwiYSI6ImNqcnVxMTNrNTJwbHc0M250anUyOW81MjgifQ.cZnvZEyWT5AzNeO3ajg5tg';
	
    // Definte tile urls of each layer
    var indiaMap = L.mapbox.tileLayer('openstreetmap.1b68f018',{attribution:false} ),
        bhuvanSatellite = L.tileLayer('http://tile1.nrsc.gov.in/tilecache/tilecache.py/1.0.0/bhuvan_imagery2/{z}/{x}/{y}.jepg', {
            attribution: false
        }),
        postalMap = L.mapbox.tileLayer('planemad.9acc2036'),
        // truemarbleSatellite = L.mapbox.tileLayer('planemad.e76fee83'),
        highwaysMap = L.mapbox.tileLayer('planemad.66359ac0'),
        connectivityGraph = L.mapbox.tileLayer('planemad.5504651b'),
        railwayMap = L.mapbox.tileLayer('planemad.e5dd1290');
    var baseLayers = {
        "Railway Map": railwayMap,
        "Bhuvan Satellite": bhuvanSatellite,
        // "NASA Satellite": truemarbleSatellite,
        "OpenStreetMap India": indiaMap
    };
    var overlayMaps = {
        "Highway": highwaysMap,
        "Postal Codes": postalMap,
        "Connectivity": connectivityGraph,
		"Metro Layer":Metro_Layer
    };
    // Create a map in the div #map
    var map = L.map('map', {
			attributionControl: false,
            layers: [indiaMap,Metro_Layer]
        }, {
            maxBounds: bounds,
        })
        .addControl(L.mapbox.geocoderControl('mapbox.places', {
            autocomplete: true
        }))
        .setView([19.0686, 72.9932], 10);
    //Add layer control
    L.control.layers(baseLayers, overlayMaps, {
        position: 'topright'
    }).addTo(map);