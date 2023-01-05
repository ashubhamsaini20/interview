// function implementation

function Player(name, age) {
    this.name = name;
    this.age = age
}
Player.prototype.intro = function () {
    console.log(this.name, this.age, " ka hai")
}


const PlayerA = new Player('om', 22)
PlayerA.intro()


Player.prototype.play = function () {
    console.log(this.name, " playing in ", this.age)
}

PlayerA.play()
