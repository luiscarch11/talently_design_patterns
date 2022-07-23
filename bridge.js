"use strict";
class Engine {
    constructor(fuel) {
        this.fuel = fuel;
    }
    load(liters) {
        console.log(`Loading ${liters} liters of ${this.fuel.name()}`);
        console.log(`You're paying ${liters * this.fuel.price()} `);
        console.log(`You'll need to come back in ${liters * this.kmPerLiter()}`);
    }
    kmPerLiter() {
        return 10; //default engine goes 10 km per liter
    }
}
class MiniTruckEngine extends Engine {
    kmPerLiter() {
        return 6;
    }
}
class TruckEngine extends Engine {
    kmPerLiter() {
        return 12;
    }
}
class Gasoline {
    name() {
        return 'Gasoline';
    }
    price() {
        return 1.5;
    }
}
class Diesel {
    name() {
        return 'Diesel';
    }
    price() {
        return 2;
    }
}
let miniTruckEngine = new MiniTruckEngine(new Diesel());
miniTruckEngine.load(10);
console.log('|-----------------------|');
miniTruckEngine = new MiniTruckEngine(new Gasoline());
miniTruckEngine.load(10);
console.log('|-----------------------|');
console.log('|-----------------------|');
let truckEngine = new TruckEngine(new Diesel());
truckEngine.load(7);
console.log('|-----------------------|');
truckEngine = new TruckEngine(new Gasoline());
truckEngine.load(7);
