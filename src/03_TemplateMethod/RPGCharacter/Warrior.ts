import { CharacterBase } from "./CharacterBase";

export class Warrior extends CharacterBase {
  prepare(): void {
    console.log("Warrior has equipped a sword");
  }

  attack(): void {
    console.log("Warrior is attacking with a sword");
  }

  defend(): void {
    console.log("Warrior is defending with a shield");
  }
}
