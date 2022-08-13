"use strict";
exports.__esModule = true;
var Address = /** @class */ (function () {
    function Address(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
    return Address;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function (addres) {
        console.log("estoy haciendo una entrega por tierra con el camión");
    };
    return Truck;
}());
var Boat = /** @class */ (function () {
    function Boat() {
    }
    Boat.prototype.deliver = function (addres) {
        console.log("estoy haciendo una entrega por mar con el bote");
    };
    return Boat;
}());
var TransportationType;
(function (TransportationType) {
    TransportationType[TransportationType["earth"] = 0] = "earth";
    TransportationType[TransportationType["sea"] = 1] = "sea";
})(TransportationType || (TransportationType = {}));
var ITransportationMethodFactory = /** @class */ (function () {
    function ITransportationMethodFactory() {
    }
    ITransportationMethodFactory.fromTransportationType = function (type) {
        switch (type) {
            case TransportationType.earth:
                return new Truck();
            case TransportationType.sea:
                return new Boat();
        }
    };
    return ITransportationMethodFactory;
}());
var EarthTransportationMethodFactory = /** @class */ (function () {
    function EarthTransportationMethodFactory() {
    }
    EarthTransportationMethodFactory.prototype.createTransportationMethod = function () {
        return new Truck();
    };
    return EarthTransportationMethodFactory;
}());
var SeaTransportationMethodFactory = /** @class */ (function () {
    function SeaTransportationMethodFactory() {
    }
    SeaTransportationMethodFactory.prototype.createTransportationMethod = function () {
        return new Boat();
    };
    return SeaTransportationMethodFactory;
}());
var seaFactory = new SeaTransportationMethodFactory();
var earthFactory = new EarthTransportationMethodFactory();
var seaTransportationMethod = seaFactory.createTransportationMethod();
var earthTransportationMethod = earthFactory.createTransportationMethod();
var type = TransportationType.sea;
var unknownTransportationMethod = ITransportationMethodFactory.fromTransportationType(type);
var address = new Address("calle 6", "Valencia", "Venezuela");
// seaTransportationMethod.deliver(address)
// earthTransportationMethod.deliver(address)
unknownTransportationMethod.deliver(address);
