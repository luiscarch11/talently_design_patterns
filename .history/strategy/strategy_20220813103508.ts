class Product{
    name:string
    price:number
    constructor(name:string, price:number){
        this.name=name
        this.price=price
    }
}
class Order{
    products :Array<Product>
    status : OrderStatus
    constructor(products:Array<Product>, status:OrderStatus){
        this.products=products
        this.status=status
    }
}
enum OrderStatus{
    waitingForDispatch, onHold, dispatched
}

class OrderCreator{
    strategy:IOrderStrategy
    constructor(strategy:IOrderStrategy){
        this.strategy=strategy
    }
    createOrder(products:Array<Product>):Order{
        return this.strategy.createOrder(products)
    }
}

interface IOrderStrategy{
    createOrder(products:Array<Product>):Order
}
class OrderStrategyPreviousOrderUnpaid implements IOrderStrategy{
    createOrder(products:Array<Product>):Order{
        return new Order(products, OrderStatus.onHold)
    }
}
class OrderStrategyClientPaymentsUpToDate implements IOrderStrategy{
    createOrder(products:Array<Product>):Order{
        return new Order(products, OrderStatus.waitingForDispatch)
    }
}
class OrderFactory{
    static createOrder(products:Array<Product>, strategy:IOrderStrategy):Order{
        return strategy.createOrder(products)
    }
}
class Client {
    pendingDebt:number
    constructor(pendingDebt:number){
        this.pendingDebt=pendingDebt
    }
    isUpToDate():boolean{
        return this.pendingDebt==0
    }
}


const products=new Array<Product>(new Product( "Cerveza", 100), new Product( "Harina", 80),)

const client=new Client(100)
const strategyUnpaid=new OrderStrategyPreviousOrderUnpaid()
const strategyUpToDate=new OrderStrategyClientPaymentsUpToDate()

const orderCreator=new OrderCreator(client.isUpToDate()?strategyUpToDate: strategyUnpaid)
const order=orderCreator.createOrder(products)
console.log(order)