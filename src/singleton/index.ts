import { MyDatabase } from "./db/my-database";
import "./module_a";

const myDataBase = MyDatabase.getInstance();

myDataBase.add({ name: "Diogo", age: 22 });
myDataBase.add({ name: "Maria", age: 19 });

myDataBase.show();