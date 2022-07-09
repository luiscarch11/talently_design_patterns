interface TouristicPackage{
    price():number
    perks():string
}
class SimpleTouristicPackage implements TouristicPackage{
    price():number{
        return 100
    }
    perks():string{
        return "Visit to the eiffel tower"
    }
}
abstract class TouristicPackageDecorator implements TouristicPackage{
    protected touristicPackage:TouristicPackage
    constructor(touristicPackage:TouristicPackage){
        this.touristicPackage = touristicPackage
    }
    price(): number {
        return this.touristicPackage.price()
    }
    perks(): string {
        return this.touristicPackage.perks()
    }   
}

class TouristicPackageHotelDecorator extends TouristicPackageDecorator{
    price(): number {
        return super.price()+100
    }
    perks(): string {
        return super.perks()+", Hotel"
    }
}
class TouristicPackageFlightDecorator extends TouristicPackageDecorator{
    price(): number {
        return super.price()+1200
    }
    perks(): string {
        return super.perks()+", Flight"
    }
}
class TouristicPackageBoatDecorator extends TouristicPackageDecorator{
    price(): number {
        return super.price()+200
    }
    perks(): string {
        return super.perks()+", Boat"
    }
}
class TouristicPackageBlackFridayDecorator extends TouristicPackageDecorator{
    price(): number {
        return super.price()*.8
    }
    perks(): string {
        return super.perks()+" at 20% discount"
    }
}


const usedPackage=new TouristicPackageBlackFridayDecorator(new TouristicPackageFlightDecorator(new TouristicPackageHotelDecorator(new TouristicPackageBoatDecorator(new SimpleTouristicPackage()))))
console.log(usedPackage.price())
console.log(usedPackage.perks())