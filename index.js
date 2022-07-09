"use strict";
class Platform {
    static currentOS() {
        return OS.Windows;
    }
}
var OS;
(function (OS) {
    OS[OS["Windows"] = 0] = "Windows";
    OS[OS["MacOS"] = 1] = "MacOS";
})(OS || (OS = {}));
class Builder {
    constructor(factory) {
        this.factory = factory;
    }
    buildButton() {
        const button = this.factory.createButton();
        return button;
    }
    buildTextField() {
        const textField = this.factory.createTextField();
        return textField;
    }
}
class ConcreteFactoryWindows {
    createButton() {
        console.log("Creating Windows button");
        return new WindowsButton();
    }
    createTextField() {
        console.log("Creating Windows text field");
        return new WindowsTextField();
    }
}
class ConcreteFactoryMac {
    createButton() {
        console.log("creating mac button");
        return new MacButton();
    }
    createTextField() {
        console.log("creating mac textField");
        return new MacTextField();
    }
}
class WindowsButton {
    setColor(color) {
        console.log(`Windows button color: ${color}`);
    }
    onClick() {
        return () => {
            console.log("Windows button clicked");
        };
    }
}
class MacButton {
    setColor(color) {
        console.log(`Mac button color: ${color}`);
    }
    onClick() {
        return () => {
            console.log("Mac button clicked");
        };
    }
}
class WindowsTextField {
    onClick() {
        return () => {
            console.log("Windows textfield clicked");
        };
    }
    setColor(color) {
        console.log(`Windows textfield color: ${color}`);
    }
    setBorders(color) {
        console.log(`Windows textfield border: ${color}`);
    }
}
//MacTextField
class MacTextField {
    onClick() {
        return () => {
            console.log("Mac textfield clicked");
        };
    }
    setColor(color) {
        console.log(`Mac textfield color: ${color}`);
    }
    setBorders(color) {
        console.log(`Mac textfield border: ${color}`);
    }
}
const factory = Platform.currentOS() == OS.MacOS ?
    new ConcreteFactoryMac() :
    new ConcreteFactoryWindows();
const builder = new Builder(factory);
builder.buildButton();
