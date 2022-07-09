interface TouristicPackage{
    detailedPrices:Array<DetailedPrice>
    price():number
    perks():string
}
interface DetailedPrice{
    price:number
    name:string
}
class SimpleTouristicPackage implements TouristicPackage{
     detailedPrices: DetailedPrice[]=[
        {price:100,name:"Eiffel Tower"}
     ]
    

    price():number{
        this.detailedPrices.push({price:100,name:"Eiffel Tower"})
        return 100
    }
    perks():string{
        return "Visit to the eiffel tower"
    }
}
abstract class TouristicPackageDecorator implements TouristicPackage{
    protected touristicPackage:TouristicPackage
    detailedPrices: DetailedPrice[]
    constructor(touristicPackage:TouristicPackage){
        this.touristicPackage = touristicPackage

        this.detailedPrices=this.touristicPackage.detailedPrices.concat({price:this.decoratorPrice(),name:this.decoratorName(),})
    }
    price(): number {
        return this.touristicPackage.price()
    }
    perks(): string {
        return this.touristicPackage.perks()
    }   
    abstract decoratorName():string
    abstract decoratorPrice():number
}

class TouristicPackageHotelDecorator extends TouristicPackageDecorator{
    decoratorPrice(): number {
        return 100
    }
    decoratorName(): string {
        return "Hotel"
    }
    price(): number {
        return super.price()+100
    }
    perks(): string {
        return super.perks()+`, ${this.decoratorName()}`
    }
}
class TouristicPackageFlightDecorator extends TouristicPackageDecorator{
    decoratorPrice(): number {
        return 1200
    }
    decoratorName(): string {
        return "Flight"
    }
    price(): number {
        return super.price()+1200
    }
    perks(): string {
        return super.perks()+`, ${this.decoratorName()}`
    }
}
class TouristicPackageBoatDecorator extends TouristicPackageDecorator{
    decoratorPrice(): number {
        return 200
    }
    
    decoratorName(): string {
        return "Boat"
    }
    price(): number {
        return super.price()+200
    }
    perks(): string {
        return super.perks()+`, ${this.decoratorName()}`
    }
}
class TouristicPackageBlackFridayDecorator extends TouristicPackageDecorator{
    decoratorPrice(): number {
        return this.price()-super.price()
    }
    decoratorName(): string {
        return "Black Friday"
    }
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
console.log(usedPackage.detailedPrices)