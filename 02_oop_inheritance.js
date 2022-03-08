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

class Sprinter extends Athlete {
    // give the sprinter its own constructor IF the sprinter needs to have more attributes than just the ones that it inherited from Athlete
    constructor(nameInput, speedInput, personal100MrecordInput) {
        super(nameInput, speedInput) // super means -> run the constructor of the parent method

        // personal100m record is a specific property only for sprinters
        this.personal100Mrecord = personal100MrecordInput
    }
    sprint() {
        console.log("Wooooosh! Sprinting! yay");
        this.health -= 20;
    }
}

class Baller extends Athlete {
    constructor(nameInput, speedInput, verticalJumpHeightInput) {
        super(nameInput, speedInput)

        this.verticalJumpHeight = verticalJumpHeightInput
    }

    slamDunk() {
        if(this.verticalJumpHeight < 20) {
            console.log("that's a layup tho")
            this.health -= 5
        } else {
            console.log("Slammmmm Dunkkkkk!!!")
            this.health -= 15
        }
    }
}


let sprinter1 = new Sprinter("Usain Bolt", 100, 9.58)
let baller1 = new Baller("Lebron James", 88, 42)

sprinter1.competeInEvent();
sprinter1.sprint();
sprinter1.displayStats();

console.log(baller1)
baller1.slamDunk();
baller1.displayStats();
