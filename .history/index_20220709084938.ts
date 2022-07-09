class Platform {
    public static currentOS(): OS{
        return OS.MacOS
    }
}
enum OS {
    Windows,
    
    MacOS
}
class Builder{
    private factory:AbstractFactory
    constructor(factory:AbstractFactory){
        this.factory=factory
    }
    public buildButton():Button{
        const button=this.factory.createButton()
        return button
    }
    public buildTextField():TextField{
        const textField=this.factory.createTextField()
        return textField
    }
}


interface ColoredComponent{
    setColor(color:string):void
}
interface AbstractFactory{
    createButton():Button
    createTextField():TextField
}

class ConcreteFactoryWindows implements AbstractFactory{
    createButton(): Button {
        console.log("Creating Windows button")
        return new WindowsButton()
    }
    createTextField(): TextField {
        console.log("Creating Windows text field")
        return new WindowsTextField()
    }
}
class ConcreteFactoryMac implements AbstractFactory{
    createButton(): Button {
        console.log("creating mac button")
        return new MacButton()
    }
    createTextField(): TextField {
        console.log("creating mac textField")
        return new MacTextField()
    }
}

interface Button extends ColoredComponent{
    onClick():()=>void
}
class WindowsButton implements Button{
    setColor(color:string):void{
        console.log(`Windows button color: ${color}`)
    }
    onClick():()=>void{
        return ()=>{
            console.log("Windows button clicked")
        }
    }
}
class MacButton implements Button{
    setColor(color:string):void{
        console.log(`Mac button color: ${color}`)
    }
    onClick():()=>void{
        return ()=>{
            console.log("Mac button clicked")
        }
    }
}


interface TextFieldBorder{
    
}
interface TextField extends ColoredComponent{
    setBorders(color:TextFieldBorder):void
    onClick():()=>void
}




class WindowsTextField implements TextField{
    onClick():()=>void{
        return ()=>{
            console.log("Windows textfield clicked")
        }
    }
    setColor(color:string):void{
        console.log(`Windows textfield color: ${color}`)
    }
    setBorders(color:TextFieldBorder):void{
        console.log(`Windows textfield border: ${color}`)
    }
}

//MacTextField
class MacTextField implements TextField{
    onClick():()=>void{
        return ()=>{
            console.log("Mac textfield clicked")
        }
    }
    setColor(color:string):void{
        console.log(`Mac textfield color: ${color}`)
    }
    setBorders(color:TextFieldBorder):void{
        console.log(`Mac textfield border: ${color}`)
    }

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


const  factory:AbstractFactory=Platform.currentOS()==OS.MacOS?
        new ConcreteFactoryMac():
        new ConcreteFactoryWindows()
const builder=new Builder(factory)
builder.buildButton()