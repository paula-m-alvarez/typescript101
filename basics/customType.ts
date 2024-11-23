type Persons = {
    name : string;
    code: string | number;
    description?: string;
}

const newPerson: Person = {
    name: "",
    code: "",
    charge: 0
}

type ServiceResponse = string | null | number | undefined;
let response6: ServiceResponse;

type UserCharges = "admim" | "normal" | "superUser";
const myUserType: UserCharges = "superUser";