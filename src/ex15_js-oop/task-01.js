function Dessert(name, type) {
    this.name = name;
    this.type = type;
}
function Candy(name, manufacturer, weight) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.weight = weight;
}
function Gift(holiday, receiver) {
    this.holiday = holiday;
    this.receiver = receiver;
    this.candies = [];
}
Candy.prototype = Object.create(Dessert.prototype);
Candy.prototype.displayInfo = function () {
    return this.name + "; " + this.manufacturer + "; " + this.weight + " GR";
};
Gift.prototype.addCandy = function (candy) {
    var totalWeight = 0;
    for (var i = 0; i < candy.length; i++) {
        this.candies.push(candy[i]);
        totalWeight += candy[i].weight;
    }
    console.log("U just added " + candy.length + " candies! Total weight is " + totalWeight);
};
Gift.prototype.displayCandies = function () {
    for (var i = 0; i < this.candies.length; i++) {
        console.log(this.candies[i].displayInfo());
    }
};
Gift.prototype.sortByParameter = function (parameter) {
    this.candies.sort(function (a, b) {
        return a[parameter] - b[parameter];
    });
    console.log("Sorting finished");
    this.displayCandies();
};
Gift.prototype.searchByName = function (nameCandy) {
    for (var i = 0; i < this.candies.length; i++) {
        if (this.candies[i].name === nameCandy) {
            console.log("Found one: " + this.candies[i].name +
                ", " + this.candies[i].manufacturer +
                ", " + this.candies[i].weight + " GR");
            return this.candies[i];
        }
    }
    console.log("These resents don't exist");
    return false;
};
var caramel = new Candy("Pops", "USA Inc.", 10);
var chocolate = new Candy("M&Ms", "Canada Inc.", 100);
var gummy = new Candy("JOLLY", "German Inc.", 20);
var present = new Gift("Birthday", "Helena Bonham Carter");
present.addCandy([
    new Candy("Peanut Bar", "Russia Inc.", 50),
    new Candy("Razzles", "Japan Inc.", 250),
    caramel,
    chocolate,
    gummy
]);
present.displayCandies();
present.sortByParameter("weight");
present.searchByName("JOLLY");