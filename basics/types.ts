let age: number = 20;
let myName: string = "Paula";
let isSemiSenior: boolean = true;
let person: Object = {};

let fruits: Array<string> = [];
let cats: string[] = [];

let response: any = "";
let response2: unknown;
let response3: null;
let response4 : undefined;

function saludas(): void{
    console.log("Hola")
}

// Hay situaciones en donde nuestra variable puede ser de varios tipos

let response5: number | null = 5;
response5?.toString();

// Podemos crear nuestros propios tipos de datos, por ejemplo:

// let responseProductos : number | null;
// let responsePartners: number | null;

type ResponseTypeService = number | null;

let responseProductos : ResponseTypeService;
let responsePartners: ResponseTypeService;


// Type Assertions -> castear 

let message: any = "";
(message as string).slice();

let messageUppercase = (message as string).toUpperCase();

let message2 = <string>message;

