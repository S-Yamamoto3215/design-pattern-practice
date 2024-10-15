import { Product } from "./Product";

export class IDCard extends Product {
  private owner: string;

  constructor(owner: string) {
    super();
    console.log(`${owner}のカードを作ります。`);
    this.owner = owner;
  }

  use(): void {
    console.log(`${this.owner}のカードを使います。`);
  }

  printCardInfo(): string {
    return `IDCard: [${this.owner}]`;
  }

  getOwner(): string {
    return this.owner;
  }
}
