interface PersonInterface {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    token: string;
    sayHello: () => string;
}

class PersonClass {
    sayHello(){
        console.log("rauw")
    }
}

// Interface -> Modelo, me dice que va a tener
// Class -> Ademas de decirnos que va a tener, nos construye el objeto y puede tener dentro implementaciones

const personOne: PersonInterface = {
    sayHello() {
        return "Definimos el funcionamiento aca";
    },
    name: "",
    code: "",
    charge: 0,
    token: ""
};

const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

// Interfaces se pueden implementar
// Clases se pueden extender o utilizar con herencia

interface PetInterface {
    sayHello: () => string;
}
class PetClass {
    sayHello(){
        return "Hola"
    }
}

class Bunny implements PetInterface{
    sayHello(){
        return "Hola desde cat"
    }
}

class Cat extends PetClass{}

// Implements para respetar el modelo
// Extends podemos reutilizar codigo

