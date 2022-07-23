
class Subject<T>{
     observers:Array<Observer<T>>
     state:T
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
    setState(state:T):void{
        this.state=state
        this.notifyObservers()
    }
    notifyObservers():void{
        this.observers.forEach(obs=>obs.update(this.state))
    }
}
interface Observer<T>{
    update(val:T):void
}

class NumberObserver implements Observer<number>{
    update(val: number): void {
        console.log(`newNumber: ${val}`)
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
class Main{
    static main (){
        const observer2=new StringObserver(
            (val:string)=>console.log(`he recibido un nuevo valor: ${val}`)
        )
        const subject=new Subject<string>('ningun valor')
        subject.addObserver(observer2)
        subject.notifyObservers()
        subject.setState('nuevo valor1')
        subject.setState('nuevo valor2')
        subject.setState('nuevo valor3');
        setTimeout(() => {
            subject.setState('último valor con atraso');
        }, 1000);
    }
}

Main.main()