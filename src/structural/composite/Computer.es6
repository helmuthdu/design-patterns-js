// Equipment
class Equipment {
  name = '';
  price = 0;

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// --- composite ---
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map(equipment => equipment.getPrice()).reduce((a, b) => a + b);
  }
}

class Cabinet extends Composite {
  constructor() {
    super();
    this.setName('cabinet');
  }
}

// --- leafs ---
class VideoCard extends Equipment {
  constructor() {
    super();
    this.setName('Video Card');
    this.price = 300;
  }
}

class HardDrive extends Equipment {
  constructor() {
    super();
    this.setName('Hard Drive');
    this.price = 250;
  }
}

class Memory extends Equipment {
  constructor() {
    super();
    this.setName('Memory');
    this.price = 280;
  }
}

export { Cabinet, VideoCard, HardDrive, Memory };
