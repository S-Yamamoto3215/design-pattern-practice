import { Person } from "./Person";
import { Address } from "./Address";

console.log("** Shallow copy **");
const original_A = new Person("TEST_A", 20, new Address("aaa", "bbb"));
const shallowCopy_A = original_A;
console.log("original_A:", original_A);
console.log("shallowCopy_A:", shallowCopy_A);
console.log("original_A === shallowCopy_A:", original_A === shallowCopy_A);

console.log("** Edit shallowCopy_A.name = 'TEST_a' **");
shallowCopy_A.name = 'TEST_a';
console.log("original_A:", original_A);
console.log("shallowCopy_A:", shallowCopy_A);

console.log("==================");

console.log("** Deep copy **");
const original_B = new Person("TEST_B", 20, new Address("aaa", "bbb"));
const deepCopy_B = original_B.clone();
console.log("original_B:", original_B);
console.log("deepCopy_B:", deepCopy_B);
console.log("original_B === deepCopy_B:", original_B === deepCopy_B);

console.log("** Edit deepCopy_B.name = 'TEST_b' **");
deepCopy_B.name = 'TEST_b';
console.log("original_B:", original_B);
console.log("deepCopy_B:", deepCopy_B);
