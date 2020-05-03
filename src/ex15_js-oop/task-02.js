class Wiring {
    constructor(item) {
        this.name = item.name;
    }
}
class Room extends Wiring {
    constructor(item) {
        super(item);
        this.outlets = new Array();
        this.totalPower = 0;
    }
    setOutlet(outlet) {
        this.outlets.push(outlet);
        console.log(`${this.outlets.length} outlets set!`);
    }
    plugInAppliance(appliance) {
        for (let outlet of this.outlets) {
            if (!outlet.isUsed) {
                outlet.isUsed = true;
                outlet.appliance = appliance.name;
                console.log(`${appliance.name} is plugged in the outlet!`);
                this.totalPower += appliance.power;
                return true;
            }
        }
        console.log(`Not enough outlets for ${appliance.name}`);
        return false;
    }
    searchAppliance(appliance) {
        for (let key of this.outlets) {
            if (key.appliance === appliance) {
                console.log(`${key.appliance} is in the room now!`);
                return true;
            }
            console.log(`${key.appliance} isn't in the room now!`);
        }
        return false;
    }
}
class Outlet extends Wiring {
    constructor() {
        super("outlet");
        this.name = "RB-5 C";
        this.isUsed = false;
        this.appliance = null;
    }
}
class Appliance extends Wiring {
    constructor(name, power) {
        super(name);
        this.name = name;
        this.power = power;
        this.isPluggedIn = false;
    }
}
const wiring = new Wiring({
    name: "USA Inc."
});
const room = new Room({
    name: "Living Room"
});
console.log(wiring);
console.log(room);
room.setOutlet(new Outlet());
room.setOutlet(new Outlet());
room.plugInAppliance(new Appliance("Microwave", 800));
room.plugInAppliance(new Appliance("PC", 3000));
room.plugInAppliance(new Appliance("Phone", 200));
console.log(room);
room.searchAppliance("Microwave");