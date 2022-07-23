class Subject<T>{
    state:T
    observers:Array<Observer<T>>
    constructor(state:T){
        this.state=state
        this.observers=[]
    }
    addObserver(observer:Observer<T>):void{
        this.observers.push(observer)
    }
    removeObserver(observer:Observer<T>):void{
        this.observers=this.observers.filter(obs=>obs!=observer)
    }
    notifyObservers():void{
        this.observers.forEach(obs=>obs.update(this.state))
    }
    setState(state:T):void{
        this.state=state
        this.notifyObservers()
    }
}
interface Observer<T>{
    update(val:T):void
}

class NumberObserver implements Observer<number>{
    update(val: number): void {
        console.log(`el nuevo numero es: ${val}`)
    }
}

const subject=new Subject<number>(0)
const observer=new NumberObserver()
subject.addObserver(observer)
subject.notifyObservers()
subject.setState(4)
subject.setState(10)

