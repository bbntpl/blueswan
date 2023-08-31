const loadGoogleMapsApi = require('load-google-maps-api');

class Map {
	static loadGoogleMapsApi() {
		return loadGoogleMapsApi({ key: `AIzaSyAQF8f08sj8KWB2NPw_dNFGgdaeUvUb38U` });
	} static createMap(googleMaps, mapElement) {
		return new googleMaps.Map(mapElement, {
			center: { lat: 36.5748441, lng: 139.2394179 },
			zoom: 14
		});
	}
}

export { Map };