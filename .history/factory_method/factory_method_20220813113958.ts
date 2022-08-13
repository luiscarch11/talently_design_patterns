//medio de transporte
//dirección
//lugar por el que se mueve el medio de transporte
//factory methods
interface TransportationMethod{
    deliver(addres:Address):void
}
class Address{
    street:string
    city:string
    country:string
    constructor(street:string, city:string, country:string){
        this.street=street
        this.city=city
        this.country=country
    }
}
class Truck implements TransportationMethod {
    deliver(addres: Address): void {
        console.log("estoy haciendo una entrega por tierra con el camión")
    }
}

class Boat implements TransportationMethod {
    deliver(addres: Address): void {
        console.log("estoy haciendo una entrega por mar con el bote")
    }
}
enum TransportationType{
    earth, sea
}
abstract class ITransportationMethodFactory {
    abstract createTransportationMethod():TransportationMethod
    static fromTransportationType(type:TransportationType):TransportationMethod{
        switch(type){
            case TransportationType.earth:
                return new Truck()
            case TransportationType.sea:
                return new Boat()
        }
    }
}
class EarthTransportationMethodFactory implements ITransportationMethodFactory{
    createTransportationMethod(): TransportationMethod {
        return new Truck()
    }
}
class SeaTransportationMethodFactory implements ITransportationMethodFactory{
    createTransportationMethod(): TransportationMethod {
        return new Boat()
    }
}
const seaFactory=new SeaTransportationMethodFactory()
const earthFactory=new EarthTransportationMethodFactory()
const seaTransportationMethod=seaFactory.createTransportationMethod()
const earthTransportationMethod=earthFactory.createTransportationMethod()

const type=TransportationType.earth
const unknownTransportationMethod=ITransportationMethodFactory.fromTransportationType(type)

const address=new Address("calle 6", "Valencia", "Venezuela")
// seaTransportationMethod.deliver(address)
// earthTransportationMethod.deliver(address)
unknownTransportationMethod.deliver(address)

export{}