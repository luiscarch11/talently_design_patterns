abstract class Engine{
    fuel:IFuel
    constructor(fuel:IFuel){
        this.fuel = fuel
    }
    load(liters:number){
        console.log(`Loading ${liters} liters of ${this.fuel.name()}`)
        console.log(`You paid ${this.fuel.price()*liters}`)
        console.log(`You'll need to come back in ${this.kmPerLiter()*liters}`)
    }

    kmPerLiter(): number {
        return 10//default km per liter
    }
}

class MiniTruckEngine extends Engine{
   kmPerLiter(): number {
        return 6
   }
}
class TruckEngine extends Engine{
   kmPerLiter(): number {
        return 12
   }
}

interface IFuel{
    name():string
    price():number

}
class Gasoline implements IFuel{
    name(): string {
        return 'Gasoline'
    }
    price(): number {
        return 1.5
        
    }

}
class Diesel implements IFuel{
    name(): string {
        return 'Diesel'
    }
    price(): number {
        return 2
        
    }

}

let miniTruckEngine=new MiniTruckEngine(new Diesel())
miniTruckEngine.load(10)
console.log(miniTruckEngine.kmPerLiter())

let truckEngine=new TruckEngine(new Diesel())
truckEngine.load(7)
console.log(truckEngine.kmPerLiter())

miniTruckEngine=new MiniTruckEngine(new Gasoline())
miniTruckEngine.load(10)
console.log(miniTruckEngine.kmPerLiter())

 truckEngine=new TruckEngine(new Gasoline())
truckEngine.load(7)
console.log(truckEngine.kmPerLiter())