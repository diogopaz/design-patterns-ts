import { MyDatabase } from "./db/my-database";
import "./module_a";

const myDataBase = MyDatabase.getInstance();

myDataBase.add({ name: "João", age: 22 });
myDataBase.add({ name: "Bruna", age: 19 });

myDataBase.show();