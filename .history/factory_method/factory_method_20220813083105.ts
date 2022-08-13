
interface TransportationMethod{
    deliver(address:Address):void
}
class Address{
    street:string
    city:string
    country:string
    constructor(street:string,city:string, country:string){
        this.city=city
        this.street=street
        this.country=country
    }
}


class Truck implements TransportationMethod{
    deliver(address: Address): void {
        console.log("entregando a través de tierra con mi camión")
    }
}
class Boat implements TransportationMethod{
    deliver(address: Address): void {
        console.log("entregando a través del mar con mi bote")
    }
}
enum TransportationType{
    earth, sea
}

abstract class  ITransportationMethodFactory{
    abstract createTransportation():TransportationMethod
    static fromType(type:TransportationType):ITransportationMethodFactory{
        switch(type){
            case TransportationType.earth:
                return new EarthFactory()
                case TransportationType.sea:
                    return new SeaFactory()
        }
    }

}
class EarthFactory implements ITransportationMethodFactory{
    createTransportation(): TransportationMethod {
        return new Truck()
    }
}

class SeaFactory implements ITransportationMethodFactory{
    createTransportation(): TransportationMethod {
        return new Boat()
    }
}

const factory=new SeaFactory()
const transportationMethod=factory.createTransportation()
const address=new Address("Calle 5","Valencia", "Venezuela")
transportationMethod.deliver(address)

export{}