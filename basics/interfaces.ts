// Interfaces -> Molde para las estructuras de mis objetos (en este caso de tipo Person)

interface Person{
    name:string;
    code: string | number;
    charge: number;
    description?: string
    sayHello?: () => string; //string -> lo que retorna la funcion
}


let person2: Person = {
    name: 'Kevin',
    code: "01",
    charge: 1,
    description: "Hola"
}

// Esto nos va a dar error porque tenemos que tenes las mismas proiedades de la Interfaz Person
//let person3: Person = {}

// Si no queremos agregar alguna propiedad podemos agregar en la interfaz ? -> para indicar que es opcional

let person4: Person = {
    name: 'Kevin',
    code: "01",
    charge: 1,
    sayHello: () => { return "Hola";}
}