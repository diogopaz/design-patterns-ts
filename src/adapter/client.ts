import isEmail from "validator/lib/isEmail";

const email = "diogoachiles@gmail.com"

if(isEmail(email)) {    
    console.log("Válido");
} else {
    console.log("Inválido");
}