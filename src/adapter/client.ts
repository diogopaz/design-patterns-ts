import { EmailValidatorAdapter } from "./validation/email-validator-adapter";
import { EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validarEmail(emailValidator: EmailValidatorProtocol, email: string): void {
    if(emailValidator.isEmail(email)) {
        console.log("Email é válido");
    } else {
        console.log("Email é inválido");
    }
}

validarEmail(new EmailValidatorAdapter(),"diogopaz@alunos.utfpr.edu.br");