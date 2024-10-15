import { CharacterBase } from "./CharacterBase";

export class Wizard extends CharacterBase {
  prepare(): void {
    console.log("Wizard has equipped a wand");
  }

  attack(): void {
    console.log("Wizard is attacking with a magic");
  }

  defend(): void {
    console.log("Wizard is defending with a magic shield");
  }
}
