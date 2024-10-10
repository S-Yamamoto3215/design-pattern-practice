import { Book } from "./class/Book";
import { Bookshelf } from "./class/Bookshelf";

// create a bookshelf
const bookshelf = new Bookshelf();

// add books to the bookshelf
bookshelf.appendBook(new Book("ABC"));
bookshelf.appendBook(new Book("DEF"));
bookshelf.appendBook(new Book("GHI"));
bookshelf.appendBook(new Book("JKL"));

// check bookshelf class
console.log("== bookshelf ==");
console.log(bookshelf);

// Display the name of the book in order from the bookshelf
const iterator = bookshelf.iterator();
console.log("== Display the name ==");
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log(book.getName());
}
