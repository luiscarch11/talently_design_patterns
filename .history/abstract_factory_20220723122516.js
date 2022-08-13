"use strict";
//Button
//Textfield
class WindowsButton {
    render() {
        console.log("Windows Button");
    }
}
class MacOSButton {
    render() {
        console.log("MacOS Button");
    }
}
class WindowsTextField {
    render() {
        console.log("Windows TextField");
    }
}
class MacOSTextField {
    render() {
        console.log("MacOS textfield");
    }
}
class WindowsUIComponentsFactory {
    createButton() {
        return new WindowsButton();
    }
    createTextField() {
        return new WindowsTextField();
    }
}
class MacOSUIComponentsFactory {
    createButton() {
        return new MacOSButton();
    }
    createTextField() {
        return new MacOSTextField();
    }
}
var OS;
(function (OS) {
    OS[OS["Windows"] = 0] = "Windows";
    OS[OS["MacOS"] = 1] = "MacOS";
})(OS || (OS = {}));
class Platform {
    static getOS() {
        return OS.MacOS;
    }
}
const factory = Platform.getOS() == OS.Windows ? new WindowsUIComponentsFactory() : new MacOSUIComponentsFactory();
factory.createButton().render();
factory.createTextField().render();
