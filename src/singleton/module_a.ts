import { MyDatabase } from "./db/my-database";

const myDataBase = MyDatabase.getInstance();

myDataBase.add({ name: "Pedro", age: 18 });
myDataBase.add({ name: "Ana", age: 59 });
