"use strict";
class Subject {
    constructor(state) {
        this.state = state;
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs != observer);
    }
    notifyObservers() {
        this.observers.forEach(obs => obs.update(this.state));
    }
    setState(state) {
        this.state = state;
        this.notifyObservers();
    }
}
class NumberObserver {
    update(val) {
        console.log(`el nuevo numero es: ${val}`);
    }
}
class StringObserver {
    constructor(listener) {
        this.listener = listener;
    }
    update(val) {
        this.listener(val);
    }
}
// const subject=new Subject<string>('')
// const observer2=new StringObserver(
//     (val:string)=>console.log(`he recibido un nuevo valor: ${val}`)
//  )
// subject.addObserver(observer2)
// subject.notifyObservers()
// subject.setState('nuevo valor')
// subject.setState('nuevo valor 2')
// setTimeout(() => {
//     subject.setState('último valor con atraso');
//  }, 1000);
class PersonHealthState {
    constructor() {
        this.weight = 0;
        this.height = 0;
    }
    static withValues(weight, height) {
        const instance = new PersonHealthState();
        instance.height = height;
        instance.weight = weight;
        return instance;
    }
}
class HealthObserver {
    constructor(listener) {
        this.listener = listener;
    }
    update(val) {
        this.listener(val);
    }
}
const healthSubject = new Subject(new PersonHealthState());
const healthObserver = new HealthObserver((newHealth) => console.log(`peso: ${newHealth.weight}, altura: ${newHealth.height}`));
healthSubject.addObserver(healthObserver);
healthSubject.setState(PersonHealthState.withValues(healthSubject.state.weight, 10));
