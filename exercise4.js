function ElectricalAppliance(name, appliancePower) {
    this.name = name,
    this.appliancePower = appliancePower,
    this.powerOn = false
}

ElectricalAppliance.prototype.turnOnTheDevice = function() {
    this.powerOn = true,
    console.log(`${this.name} is ON`)
};

ElectricalAppliance.prototype.turnOffTheDevice = function() {
    this.powerOn = false,
    console.log(`${this.name} is OFF`)
};

function Computer(name, brand, appliancePower){
    this.name = name,
    this.brand = brand,
    this.appliancePower = appliancePower,
    this.powerOn = false
}

Computer.prototype = new ElectricalAppliance;

function Lamp(name, brand, bulbType, appliancePower){
    this.name = name,
    this.brand = brand,
    this.appliancePower = appliancePower,
    this.bulbType = bulbType,
    this.powerOn = false
}

Lamp.prototype = new ElectricalAppliance;

const laptop = new Computer('laptop', 'Mac', 370);
const deskLamp = new Lamp('deskLamp', 'Beko', 'lightbulb', 60);

console.log(laptop, deskLamp);

laptop.turnOffTheDevice();
deskLamp.turnOnTheDevice();
