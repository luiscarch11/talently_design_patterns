//Button
//Textfield

//Windows || MacOS
interface UIComponentsAbstractFactory{
    createButton(): Button;
    createTextField(): TextField;
}
interface Button {
    render(): void;
}
interface TextField {
    render(): void;
}
class WindowsButton implements Button{
    render(){
        console.log("Windows Button");
    }
}
class MacOSButton implements Button{
    render(){
        console.log("MacOS Button");
    }
}
class WindowsTextField implements TextField{
    render(){
        console.log("Windows TextField");
    }
}
class MacOSTextField implements TextField{
    render(){
        console.log("MacOS textfield");
    }
}
class WindowsUIComponentsFactory implements UIComponentsAbstractFactory{
    createButton(): Button {
        return new WindowsButton()
    }
    createTextField(): TextField {
        return new WindowsTextField()
    }
}
class MacOSUIComponentsFactory implements UIComponentsAbstractFactory{
    createButton(): Button {
        return new MacOSButton()
    }
    createTextField(): TextField {
        return new MacOSTextField()
    }
}
enum OS {
    Windows,
    MacOS,
}
class Platform{
    public static getOS(): OS{
        return OS.Windows;
    }
}
const factory=Platform.getOS()==OS.Windows?new WindowsUIComponentsFactory():new MacOSUIComponentsFactory();
factory.createButton().render();
factory.createTextField().render();