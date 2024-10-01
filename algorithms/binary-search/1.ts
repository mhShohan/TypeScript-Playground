type TSortedArray = Array<number>

const arr: TSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const binarySearch = (arr: TSortedArray, item: number) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = arr[mid]


    if (guess === item) {
      return guess
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }

  }

  return
}

const result = binarySearch(arr, 13)
console.log(result)

