'use strict'

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
    this.camera = camera;
    this.releaseDate = releaseDate;
    this.discontinue = discontinue;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' PLN.');
}


var SamsungGalaxyS6 = new Phone('Samsung', 1500, 'Gold platinum');
var iPhone6s = new Phone('Apple', 2000, 'silver');
var OnePlusOne = new Phone('OnePlus', 800, 'black');

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

