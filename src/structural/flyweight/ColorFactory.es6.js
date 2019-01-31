function Color(name) {
  this.name = name;
}

const colorFactory = {
  colors: {},
  create(name) {
    const color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  },
};

export { colorFactory };
