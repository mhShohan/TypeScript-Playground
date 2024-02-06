class DynamicArray {
  private arr: number[];

  constructor(arr: number[] = []) {
    this.arr = arr;
  }

  getArray(): number[] {
    return this.arr;
  }

  addLast(val: number): number[] {
    this.arr[this.arr.length] = val;
    return this.arr;
  }

  addFirst(val: number): number[] {
    const newArr = new Array(this.arr.length + 1);
    newArr[0] = val;

    for (let i = 0; i < this.arr.length; i++) {
      newArr[i + 1] = this.arr[i];
    }
    this.arr = newArr;

    return this.arr;
  }

  update(val: number, updateVal: number): number[] {
    const findIndex = this.arr.findIndex((n) => n === val);
    this.arr[findIndex] = updateVal;

    return this.arr;
  }

  deleteOne(val: number): number[] {
    const findIndex = this.arr.findIndex((n) => n === val);

    for (let i = 0; i < this.arr.length; i++) {
      if (i === findIndex) {
        for (let j = findIndex; j < this.arr.length; j++) {
          this.arr[j] = this.arr[j + 1];
        }
        this.arr.length = this.arr.length - 1;
      }
    }

    return this.arr;
  }

  deleteLast(): number[] {
    this.arr.length = this.arr.length - 1;
    return this.arr;
  }
}

const numberArray = new DynamicArray();

console.log(numberArray.addLast(0));
console.log(numberArray.addLast(1));
console.log(numberArray.addLast(2));
console.log(numberArray.addLast(3));

// console.log(numberArray.update(3, 30));
// console.log(numberArray.deleteOne(2));
// console.log(numberArray.deleteOne(300));

// console.log(numberArray.deleteLast());
console.log(numberArray.addFirst(-1));
