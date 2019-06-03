// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidMaker {
  constructor(length) {
    super(length);
    this.length = length;
    this.width = length;
    this.height = length;
  }

  volume() {
    return Math.pow(this.length, 6);
  }

  surfaceArea() {
    return 12 * Math.pow(this.length, 4);
  }
}

const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });
const cube = new CubeMaker(5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); // 15625
console.log(cube.surfaceArea()); //7500
console.log(cube); // CubeMaker { length: 5, width: 5, height: 5 }

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
