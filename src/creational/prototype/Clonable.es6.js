class Clonable {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Clonable(this.name);
  }
}

export { Clonable };
