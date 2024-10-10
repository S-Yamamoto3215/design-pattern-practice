import { Iterator } from "../../interface/Iterator";

import { Book } from "./Book";
import { Bookshelf } from "./Bookshelf";

export class BookshelfIterator implements Iterator<Book> {
  private bookshelf: Bookshelf;
  private index: number;

  constructor(bookshelf: Bookshelf) {
    this.bookshelf = bookshelf;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.bookshelf.getLength();
  }

  next(): Book {
    if (!this.hasNext()) {
      throw new Error("No such element");
    }
    const book = this.bookshelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
