import { Warrior } from "./Warrior";
import { Wizard } from "./Wizard";
import { Hunter } from "./Hunter";

console.log("== Warrior ==");
const warrior = new Warrior();
warrior.performAction();

console.log("== Wizard ==");
const wizard = new Wizard();
wizard.performAction();

console.log("== Hunter ==");
const hunter = new Hunter();
hunter.performAction();
