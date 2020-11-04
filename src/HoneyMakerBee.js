var HoneyMakerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = 'make honey'
    this.honeyPot = 0;
};;


//set prototype
HoneyMakerBee.prototype = Object.create(Grub.prototype)
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
//set constructor

// Makehoney method
HoneyMakerBee.prototype.makeHoney = function() {
     this.honeyPot++;
 };

 // giveHoney method
 HoneyMakerBee.prototype.giveHoney = function() {
     this.honeyPot--;
 }