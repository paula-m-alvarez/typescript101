type Person5 = {
    name: string;
    age: number;
}

// Las interfaces nos permiten extender funcionalidades

interface Employee extends Person5 {
    charge: string;
}

const newEmployee: Employee = {
    name: "",
    charge: "",
    age: 0
}

// Union Type (composicion)

type User = {
    id: string;
}

type Admin = User & Person5;

type ServiceResponseToke = string | null | undefined | number; // Esta union de tipos no se puede hacer en una interface, los types tienen mas especificidad
type UserTypes = "admin" | "superUser" | 0

const myUser5: UserTypes = 0;


interface Developer {
    name : string;
    stack: string[];
}

interface Developer {
    phone: string;
}

// Mergea ambas interfaces -> Asi no tenemos que modificar la original / Sobreescribimos la interfaz original

const me: Developer={
   
}