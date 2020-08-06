class SortedList {
  constructor(items) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((acc, value) => acc += value);
  }

  avg() {
    return this.sum() / this.length;
  }
}

let list = new SortedList([2, 5, 6, 7, 8, 6, 9, 0]);
console.log(list.length);
console.log(list.avg());

module.exports = SortedList;
