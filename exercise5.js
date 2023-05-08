class ElectricalAppliance {
    constructor(name, appliancePower) {
        this.name = name;
            this.appliancePower = appliancePower;
            this.powerOn = false;
    }
    turnOnTheDevice() {
        this.powerOn = true;
        console.log(`${this.name} is ON`);
    }
    turnOffTheDevice() {
        this.powerOn = false;
        console.log(`${this.name} is OFF`);
    }
}


class Computer extends ElectricalAppliance {
    constructor(name, brand, appliancePower) {
        super(name, appliancePower);
        this.name = name;
        this.brand = brand;
        this.appliancePower = appliancePower;
        this.powerOn = false
    }
}

class Lamp extends ElectricalAppliance {
    constructor(name, brand, bulbType, appliancePower) {
        super(name, appliancePower);
        this.name = name;
        this.brand = brand;
        this.appliancePower = appliancePower;
        this.bulbType = bulbType;
        this.powerOn = false
    }
}

const laptop = new Computer('laptop', 'Mac', 370);
const deskLamp = new Lamp('deskLamp', 'Beko', 'lightbulb', 60);

console.log(laptop, deskLamp);

laptop.turnOffTheDevice();
deskLamp.turnOnTheDevice();
