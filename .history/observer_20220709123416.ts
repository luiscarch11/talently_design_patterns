interface ISubject {
    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify():void
    state:number
}

interface IObserver {
    update(sub:Subject):void
}

class Subject implements ISubject {
    private observers:Observer[] = [];
    public state=1
    changeState(newState:number) {
        this.state = newState
        this.notify()
    }
    subscribe(observer:Observer) {
        this.observers.push(observer)
    }
    unsubscribe(observer:Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.id === element.id
        })
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update(this);
        })
    }
}

class Observer implements IObserver {

    constructor(public readonly id:number, ) {

    }
    update(subject:Subject) {
       console.log(`new state is ${subject.state}`)
    }
}


const subject = new Subject();
const firstObserver = new Observer(1);
const secondObserver = new Observer(2);

subject.subscribe(firstObserver);
subject.changeState(2);
console.log("-----")
subject.subscribe(secondObserver);
subject.changeState(9);

console.log("-----")
subject.unsubscribe(secondObserver);
subject.changeState(0);
