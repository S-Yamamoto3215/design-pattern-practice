import { Product } from "./Product";
import { IDCardFactory } from "./IDCardFactory";

const factory = new IDCardFactory();

const card1: Product = factory.create("TARO");
console.log(factory.getOwners());
card1.use();
console.log("==============");

const card2: Product = factory.create("JIRO");
console.log(factory.getOwners());
card2.use();
console.log("==============");

const card3: Product = factory.create("SABURO");
console.log(factory.getOwners());
card3.use();
