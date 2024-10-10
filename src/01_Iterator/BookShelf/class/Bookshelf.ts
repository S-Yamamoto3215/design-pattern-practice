import { Iterator } from "../../interface/Iterator";
import { Iterable } from "../../interface/Iterable";
import { Book } from "./Book";
import { BookshelfIterator } from "./BookshelfIterator";

export class Bookshelf implements Iterable<Book> {
  private books: Book[] = [];
  private last = 0;

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books.push(book);
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator(): Iterator<Book> {
    return new BookshelfIterator(this);
  }
}
