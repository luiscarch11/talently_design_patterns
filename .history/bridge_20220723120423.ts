abstract class Engine{
    fuel:IFuel// <--------- bridge
    constructor(fuel:IFuel){
        this.fuel=fuel
    }
    load(liters:number){
        console.log(`Loading ${liters} liters of ${this.fuel.name()}`)
        console.log(`You're paying ${liters*this.fuel.price()} `)
        console.log(`You'll need to come back in ${liters*this.kmPerLiter()}`)
    }
    kmPerLiter():number{
        return 10//default engine goes 10 km per liter
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

console.log('|-----------------------|')
miniTruckEngine=new MiniTruckEngine(new Gasoline())
miniTruckEngine.load(10)


let truckEngine=new TruckEngine(new Diesel())
truckEngine.load(7)

truckEngine=new TruckEngine(new Gasoline())
truckEngine.load(7)