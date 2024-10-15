import { Factory } from "./Factory";
import { Product } from "./Product";
import { IDCard } from "./IDCard";

export class IDCardFactory extends Factory {
  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }

  protected registerProduct(product: Product): void {
    console.log(`${(product as IDCard).printCardInfo()}を登録しました。`);
  }
}
