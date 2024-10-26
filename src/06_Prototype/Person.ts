import { Prototype } from "./Prototype";
import { Address } from "./Address";

export class Person implements Prototype {
  constructor(
    public name: string,
    public age: number,
    public address: Address,
  ) {}

  clone(): this {
    const cloned = Object.assign(Object.create(this), this);
    cloned.address = new Address(this.address.street, this.address.city);
    return cloned;
  }
}
