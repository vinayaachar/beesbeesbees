var RetiredForagerBee = function() {
    ForagerBee.call(this);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
};

//set the prototype
 RetiredForagerBee.prototype = Object.create(Grub.prototype)

//set constructo
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// forage method
RetiredForagerBee.prototype.forage = function() {
    return 'I am too old, let me play cards instead'
}
RetiredForagerBee.prototype.gamble = function(treasure){
    this.treasureChest.push(treasure);
}