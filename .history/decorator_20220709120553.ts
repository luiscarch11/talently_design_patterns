interface TouristicPackage{
    getPrice(): number;
    getPerks(): string;
}
class SimpleTouristicPackage implements TouristicPackage{
    getPrice(): number {
        return 100
    }
    getPerks(): string {
        return "Visit to the Eiffel Tower"
    }
}
abstract class TouristicPackageDecorator implements TouristicPackage{
    touristicPackage:TouristicPackage
    constructor(touristicPackage:TouristicPackage){
        this.touristicPackage=touristicPackage
    }
    getPrice(): number {
        return this.touristicPackage.getPrice();
    }
    getPerks(): string {
        return this.touristicPackage.getPerks()
    }
}

class TouristicPackageHotelDecorator extends TouristicPackageDecorator{
    getPrice(): number {
        return this.touristicPackage.getPrice()+100
    }
    getPerks(): string {
        return this.touristicPackage.getPerks()+', Hotel'
    }
}
class TouristicPackageBoatTravelDecorator extends TouristicPackageDecorator{
    getPrice(): number {
        return this.touristicPackage.getPrice()+50
    }
    getPerks(): string {
        return this.touristicPackage.getPerks()+', Boat travel'
    }
}
const simplePackage=new SimpleTouristicPackage()
console.log(simplePackage.getPrice())
console.log(simplePackage.getPerks())

const boatTravelDecorated=new TouristicPackageBoatTravelDecorator(simplePackage);
console.log(boatTravelDecorated.getPrice())
console.log(boatTravelDecorated.getPerks())

const fullPackage=new TouristicPackageHotelDecorator(boatTravelDecorated)
console.log(fullPackage.getPrice())
console.log(fullPackage.getPerks())
