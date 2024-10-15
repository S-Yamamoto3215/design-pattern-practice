export abstract class CharacterBase {
  performAction() {
    this.prepare();
    this.attack();
    this.defend();
  }

  abstract prepare(): void;
  abstract attack(): void;
  abstract defend(): void;
}
