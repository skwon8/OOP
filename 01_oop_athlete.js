// We will create a blueprint for what every athelete should have (attributes/properties - name, health, speed) and be able to do (methods - playgame(), sayName(), showStats(), takeIceBath() )

class Athlete {
    // constructor means when the class is created, the code to run will be inside the constructor
    constructor(nameInput, speedInput) {
        this.name = nameInput;
        this.health = 100;
        this.speed = speedInput;
        this.strength = 70;
    }
    competeInEvent() {
        // the "this" keyword will represent whichever object calls the method
        this.health -= 10;
    }

    displayStats()  {
        // this method will print out all the athlete info in a nice format!
        // console.log("Athlete info: \n Name: " + this.name + " \n Health: " + this.health)

        console.log(`Athlete info: \n Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed}`)
    }

    takeIceBath() {
        this.health += 10;
    }
}

// instances of a class ( you can also call them objects )
const athelete1 = new Athlete("Kobe", 88)
const athelete2 = new Athlete("Odell", 92)
const athelete3 = new Athlete("Bolt", 100)

console.log("competitions in events are happening below!")

console.log(athelete1.displayStats())
console.log(athelete2.displayStats())
console.log(athelete3.displayStats())

athelete1.competeInEvent()
athelete1.displayStats()
athelete1.takeIceBath()