# Design Patterns
### - Singleton (Criacional)
O padrão singleton consiste de uma classe que será instanciada apenas uma vez em todo o sistema.
![UML Singleton](./src/images/singleton-uml.png)

### - Adapter (Estrutural)
Permite a integração entre objetos que não possuem interfaces compatíveis, serve como um "adaptador" ao realizar a comunicação entre estes objetos.
![UML Adapter](./src/images/adapter-uml.png)

No código de código de exemplo, no arquivo [`client.ts`](./src/adapter/client.ts) está sendo implementada a função [`validarEmail()`](./src/adapter/client.ts#L4) que recebe como parâmetros um protocolo de validação, que é estabelecido pela interface [`EmailValidatorProtocol`](./src/adapter/validation/email-validator-protocol.ts), a classe [`EmailValidatorAdapter`](./src/adapter/validation/email-validator-adapter.ts) implementa a interface. Dessa forma, é possível alterar a validação de email futuramente sem precisar alterar todas as linhas de código em que a solução é utilizada, ao invés disso, modificamos apenas a classe adapter.

### - State (Comportamental)

![UML State](./src/images/state-uml.png)