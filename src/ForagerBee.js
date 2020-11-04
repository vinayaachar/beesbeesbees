var ForagerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

};

//set prototype
 ForagerBee.prototype = Object.create(Grub.prototype);

//set constructor
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
    this.treasureChest.push(treasure);
}
