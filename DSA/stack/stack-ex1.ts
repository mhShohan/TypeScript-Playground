interface Book {
  id: number;
  name: string;
  author: string;
}

class Stack {
  private list: Book[];
  constructor() {
    this.list = [{ id: 1, name: 'Time management', author: 'Brian Tracy' }];
  }

  public print(): Book[] {
    return this.list;
  }

  private find(key: 'id' | 'name' | 'author', value: string | number): Book | undefined {
    for (let i = 0; i <= this.list.length - 1; i++) {
      if (this.list[i][key] === value) {
        return this.list[i];
      }
    }
    return undefined;
  }

  public push(book: { name: string; author: string }): void {
    let newBook: Book = { id: this.list[this.list.length - 1].id + 1, ...book };
    this.list.push(newBook);
  }

  public pop(): void {
    this.list.pop();
  }

  public findById(id: number) {
    return this.find('id', id);
  }

  public findByBook(bookName: string) {
    return this.find('name', bookName);
  }

  public findByAuthor(authorName: string) {
    return this.find('author', authorName);
  }
}

const stackOne = new Stack();

stackOne.push({ name: 'Atomic Habits', author: 'James Clear' });
stackOne.push({ name: 'Deep Work', author: 'Cal Newport' });

// stackOne.pop();

// console.log(stackOne.findById(1));
// console.log(stackOne.findById(2));

console.log(stackOne.findByBook('Deep Work'));
console.log(stackOne.findByAuthor('James Clear'));

// console.log(stackOne.print());
