"use strict";
class GoogleMap {
    constructor() {
        this.markerColor = '';
        this.currentLocation = new LatLen(0, 0);
    }
    setMarkerColor(markerColor) {
        this.markerColor = markerColor;
    }
    setCurrentLocation(currentLocation) {
        this.currentLocation = currentLocation;
    }
    showProperties() {
        console.log(`markercolor: ${this.markerColor}, currentLocation:${this.currentLocation.toString()}`);
    }
}
class LatLen {
    constructor(lat, len) {
        this.lat = lat;
        this.len = len;
    }
    toString() {
        return `lat: ${this.lat}, len: ${this.len}`;
    }
}
class GoogleMapBuilder {
    constructor() {
        this.googleMap = new GoogleMap();
    }
    build() {
        this.setCurrentLocation();
        this.setMarkerColor();
        this.googleMap.showProperties();
    }
}
class GoogleMapBuilderHotel extends GoogleMapBuilder {
    setCurrentLocation() {
        this.googleMap.setCurrentLocation(new LatLen(10, 10)); //coords de un hotel
    }
    setMarkerColor() {
        this.googleMap.setMarkerColor('blue'); //coords de un hotel
    }
}
class GoogleMapBuilderOffice extends GoogleMapBuilder {
    setCurrentLocation() {
        this.googleMap.setCurrentLocation(new LatLen(56, 45)); //coords de una oficina
    }
    setMarkerColor() {
        this.googleMap.setMarkerColor('red');
    }
}
let mapBuilder = new GoogleMapBuilderHotel();
mapBuilder.build();
mapBuilder = new GoogleMapBuilderOffice();
mapBuilder.build();
