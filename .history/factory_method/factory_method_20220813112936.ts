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
interface ITransportationMethodFactory {
    createTransportationMethod():TransportationMethod
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
const address=new Address("calle 6", "Valencia", "Venezuela")
seaTransportationMethod.deliver(address)
earthTransportationMethod.deliver(address)

export{}