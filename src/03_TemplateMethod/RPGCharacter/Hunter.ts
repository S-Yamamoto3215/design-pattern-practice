import { CharacterBase } from "./CharacterBase";

export class Hunter extends CharacterBase {
  prepare(): void {
    console.log("Hunter has equipped a bow and arrow");
  }

  attack(): void {
    console.log("Hunter is attacking with a bow and arrow");
  }

  defend(): void {
    console.log("Hunter is defending with a quick dodge");
  }
}
