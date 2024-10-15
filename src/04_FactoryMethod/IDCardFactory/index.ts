import { Factory } from "./Factory";
import { Product } from "./Product";
import { IDCardFactory } from "./IDCardFactory";

const factory: Factory = new IDCardFactory();

const card1: Product = factory.create("TARO");
card1.use();
console.log("==============");

const card2: Product = factory.create("JIRO");
card2.use();
console.log("==============");

const card3: Product = factory.create("SABURO");
card3.use();
