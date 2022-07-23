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
class StringObserver implements Observer<string>{
    listener:(val:string)=>void
    constructor(listener:(val:string)=>void){
        this.listener=listener
    }
    update(val: string): void {
        this.listener(val)
    }
 }

const subject=new Subject<string>('')

const observer2=new StringObserver(
    (val:string)=>console.log(`he recibido un nuevo valor: ${val}`)
 )
subject.addObserver(observer2)
subject.notifyObservers()
subject.setState('nuevo valor')
subject.setState('nuevo valor 2')
setTimeout(() => {
    subject.setState('último valor con atraso');
 }, 1000);
