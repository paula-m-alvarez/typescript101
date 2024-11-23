class Animal {
    public name: "Generic animal";
    private age = 10;
    protected identity = "111";

    sayHi() {
        console.log("rauw", this.age)
    }

    constructor() {

    }
}

// Herencia
class Dog extends Animal {
    type: "Pastor Aleman";

    sayHi(): void {
    }

    constructor(){
        super();
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

const myDog: Dog = new Dog();
