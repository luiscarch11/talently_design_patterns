var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["waitingForDispatch"] = 0] = "waitingForDispatch";
    OrderStatus[OrderStatus["onHold"] = 1] = "onHold";
    OrderStatus[OrderStatus["dispatched"] = 2] = "dispatched";
})(OrderStatus || (OrderStatus = {}));
var Order = /** @class */ (function () {
    function Order(products, status) {
        this.products = products;
        this.status = status;
    }
    Order.prototype.toString = function () {
        var statusString;
        switch (this.status) {
            case OrderStatus.dispatched:
                statusString = "DISPATCHED";
                break;
            case OrderStatus.onHold:
                statusString = "ON HOLD";
                break;
            case OrderStatus.waitingForDispatch:
                statusString = "WAITING FOR DISPATCH";
                break;
        }
        return "STATUS: ".concat(statusString, "\nPRODUCTS: ").concat(this.products.map(function (product) { return "".concat(product.name, " (").concat(product.price, ")"); }).join(", "));
    };
    return Order;
}());
var Client = /** @class */ (function () {
    function Client(pendingDebt) {
        this.pendingDebt = pendingDebt;
    }
    Client.prototype.isUpToDate = function () {
        return this.pendingDebt === 0;
    };
    return Client;
}());
var OrderCreationStrategyUnpaidClient = /** @class */ (function () {
    function OrderCreationStrategyUnpaidClient() {
    }
    OrderCreationStrategyUnpaidClient.prototype.createOrder = function (products) {
        return new Order(products, OrderStatus.onHold);
    };
    return OrderCreationStrategyUnpaidClient;
}());
var OrderCreationStrategyUpToDateClient = /** @class */ (function () {
    function OrderCreationStrategyUpToDateClient() {
    }
    OrderCreationStrategyUpToDateClient.prototype.createOrder = function (products) {
        return new Order(products, OrderStatus.waitingForDispatch);
    };
    return OrderCreationStrategyUpToDateClient;
}());
var OrderCreator = /** @class */ (function () {
    function OrderCreator(strategy) {
        this.strategy = strategy;
    }
    OrderCreator.prototype.createOrder = function (products) {
        return this.strategy.createOrder(products);
    };
    return OrderCreator;
}());
var client = new Client(10);
var products = new Array(new Product("Cerveza", 100), new Product("Harina", 80));
var unpaidStrategy = new OrderCreationStrategyUnpaidClient();
var upToDateStrategy = new OrderCreationStrategyUpToDateClient();
var orderCreator = new OrderCreator(unpaidStrategy);
var orderToCreate = orderCreator.createOrder(products);
orderCreator.strategy = upToDateStrategy;
var newOrderToCreate = orderCreator.createOrder(products);
console.log(orderToCreate.toString());
console.log(newOrderToCreate.toString());
