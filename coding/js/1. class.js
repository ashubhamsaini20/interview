// class implementation

class Player {
    constructor(name, age) {
        this.age = age;
        this.name = name
    }
    intro() {
        console.log(this.name, this.age, " ka hai")
    }
}

class Team extends Player {
    constructor(name, age) {
        super(name, age)
    }
    play() {
        console.log(this.name, "playing in age of ", this.age);
    }
}
const myTeam = new Team("ram", 20)
myTeam.intro()
myTeam.play()
console.log(myTeam.name)