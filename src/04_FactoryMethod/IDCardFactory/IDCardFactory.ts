import { Factory } from "./Factory";
import { Product } from "./Product";
import { IDCard } from "./IDCard";

export class IDCardFactory extends Factory {
  private owners: string[] = [];

  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  protected registerProduct(product: Product): void {
    const owner = (product as IDCard).getOwner();
    this.owners.push(owner);
    console.log(`${(product as IDCard).printCardInfo()}を登録しました。`);
  }

  getOwners(): string[] {
    return this.owners;
  }
}
