"use strict";
class SimpleTouristicPackage {
    constructor() {
        this.detailedPrices = [
            { price: 100, name: "Eiffel Tower" }
        ];
    }
    price() {
        this.detailedPrices.push({ price: 100, name: "Eiffel Tower" });
        return 100;
    }
    perks() {
        return "Visit to the eiffel tower";
    }
}
class TouristicPackageDecorator {
    constructor(touristicPackage) {
        this.touristicPackage = touristicPackage;
        this.detailedPrices = this.touristicPackage.detailedPrices.concat({ price: this.decoratorPrice(), name: this.decoratorName(), });
    }
    price() {
        return this.touristicPackage.price();
    }
    perks() {
        return this.touristicPackage.perks();
    }
}
class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
    decoratorPrice() {
        return 100;
    }
    decoratorName() {
        return "Hotel";
    }
    price() {
        return super.price() + 100;
    }
    perks() {
        return super.perks() + `, ${this.decoratorName()}`;
    }
}
class TouristicPackageFlightDecorator extends TouristicPackageDecorator {
    decoratorPrice() {
        return 1200;
    }
    decoratorName() {
        return "Flight";
    }
    price() {
        return super.price() + 1200;
    }
    perks() {
        return super.perks() + `, ${this.decoratorName()}`;
    }
}
class TouristicPackageBoatDecorator extends TouristicPackageDecorator {
    decoratorPrice() {
        return 200;
    }
    decoratorName() {
        return "Boat";
    }
    price() {
        return super.price() + 200;
    }
    perks() {
        return super.perks() + `, ${this.decoratorName()}`;
    }
}
class TouristicPackageBlackFridayDecorator extends TouristicPackageDecorator {
    decoratorPrice() {
        return this.price() - super.price();
    }
    decoratorName() {
        return "Black Friday";
    }
    price() {
        return super.price() * .8;
    }
    perks() {
        return super.perks() + " at 20% discount";
    }
}
const usedPackage = new TouristicPackageBlackFridayDecorator(new TouristicPackageFlightDecorator(new TouristicPackageHotelDecorator(new TouristicPackageBoatDecorator(new SimpleTouristicPackage()))));
console.log(usedPackage.price());
console.log(usedPackage.perks());
console.log(usedPackage.detailedPrices);
