import { Singleton } from "./Singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
  console.log("singleton1 and singleton2 are the same instance");
}
