function List(el) {
  this.index = 0;
  this.elements = el;
}

List.prototype = {
  next() {
    return this.elements[this.index++];
  },
  hasNext() {
    return this.index < this.elements.length;
  },
};

module.exports = List;
