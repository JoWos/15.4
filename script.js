'use strict'

function Phone(brand, price, color, system, camera, releaseDate, discontinue) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
    this.camera = camera;
    this.releaseDate = releaseDate;
    this.discontinue = discontinue;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + ' PLN. It was released in ' + this.releaseDate + ' and discontinued in ' + this.discontinue + '. It runs ' + this.system + '. The camera has ' + this.camera + 'Mpx.');
}


var SamsungGalaxyS6 = new Phone('Samsung', 1500, 'Gold platinum', 'Android 5.0', 16, 2015, 2016);
var iPhone6s = new Phone('Apple', 2000, 'silver', 'iOS 9', 12, 2015, 2016 );
var OnePlusOne = new Phone('OnePlus', 800, 'black', 'Android 4.4', 13, 2014, 2016);

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();

