class Product{
    name:string
    price:number
    constructor(name:string, price:number){
        this.name=name
        this.price=price
    }
}
enum OrderStatus{
    waitingForDispatch, onHold, dispatched
}
class Order{
    products:Array<Product>
    status: OrderStatus
    constructor(products:Array<Product>, status:OrderStatus){
        this.products=products
        this.status=status
    }
    toString():string{
        let statusString
        switch(this.status){
            case OrderStatus.dispatched:
                statusString="DISPATCHED"
                break
            case OrderStatus.onHold:
                statusString="ON HOLD"
                break
            case OrderStatus.waitingForDispatch:
                statusString="WAITING FOR DISPATCH"
                break
        }
        return `STATUS: ${statusString}\nPRODUCTS: ${this.products.map(product=>`${product.name} (${product.price})`).join(", ")}`
    }
}
class Client {
    pendingDebt:number
    constructor(pendingDebt:number){
        this.pendingDebt=pendingDebt
    }
    isUpToDate():boolean{
        return this.pendingDebt===0
    }
}
interface IOrderCreationStrategy{
    createOrder(products:Array<Product>):Order
}
class OrderCreationStrategyUnpaidClient implements IOrderCreationStrategy{
    createOrder(products: Product[]): Order {
        return new Order(products, OrderStatus.onHold)
    }
}
class OrderCreationStrategyUpToDateClient implements IOrderCreationStrategy{
    createOrder(products: Product[]): Order {
        return new Order(products, OrderStatus.waitingForDispatch)
    }
}
class OrderCreator{
    strategy:IOrderCreationStrategy
    constructor(strategy:IOrderCreationStrategy){
        this.strategy=strategy
    }
    createOrder(products:Array<Product>):Order{
        return this.strategy.createOrder(products)
    }
}

const client=new Client(10)
const products=new Array<Product>(new Product( "Cerveza", 100), new Product( "Harina", 80),)
const unpaidStrategy=new OrderCreationStrategyUnpaidClient()
const upToDateStrategy=new OrderCreationStrategyUpToDateClient()
const orderCreator=new OrderCreator(client.isUpToDate()?upToDateStrategy:unpaidStrategy)
const orderToCreate=orderCreator.createOrder(products)
console.log(orderToCreate.toString())