class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(productDetails) {
    this.#brand = productDetails.brand;
    this.#model = productDetails.model;
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed}km/h Trunk: ${
        this.isTrunkOpen ? "Open" : "Closed"
      }`
    );
  }

  go() {
    if (this.speed <= 195 && !this.isTrunkOpen) this.speed += 5;
  }

  brake() {
    if (this.speed >= 5) this.speed -= 5;
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  #brand;
  #model;
  acceleration;
  
  constructor(productDetails) {
    super(productDetails); //calls the constructor of parent class
    this.#brand = productDetails.brand;
    this.#model = productDetails.model;
    this.acceleration = productDetails.acceleration;
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed}km/h
`
    );
  }

  go() {
    if (this.speed + this.acceleration <= 300) {
      this.speed += this.acceleration;
    }
  }
}

const toyota = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const tesla = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const mclaren = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

mclaren.go();
mclaren.go();
mclaren.brake();

mclaren.displayInfo();

// Perform operations
toyota.go(); // Speed: 5
toyota.go(); // Speed: 10
toyota.go(); // Speed: 15
toyota.brake(); // Speed: 10
toyota.go(); // Speed: 15
toyota.brake(); // Speed: 10

tesla.brake(); // Speed: 0 (already 0)
tesla.go(); // Speed: 5
tesla.brake(); // Speed: 0
tesla.brake(); // Speed: 0 (already 0)
tesla.go(); // Speed: 5
tesla.brake(); // Speed: 0
tesla.go(); // Speed: 5
tesla.go(); // Speed: 10
tesla.go(); // Speed: 15
tesla.brake();
tesla.brake();
tesla.brake();

toyota.closeTrunk(); // Trunk already closed
tesla.openTrunk(); // Trunk can be opened since speed is zero

// Display info
toyota.displayInfo(); // Output: Toyota Corolla, Speed: 10km/h, Trunk: Closed
tesla.displayInfo(); // Output: Tesla Model 3, Speed: 15km/h, Trunk: Closed

// Additional checks
toyota.openTrunk(); // Open trunk
toyota.displayInfo(); // Output: Toyota Corolla, Speed: 10km/h, Trunk: Open

// Try to go with trunk open
toyota.go(); // Should not increase speed
toyota.displayInfo(); // Output: Toyota Corolla, Speed: 10km/h, Trunk: Open

// Close trunk and go
toyota.closeTrunk();
toyota.go(); // Speed: 15
toyota.displayInfo(); // Output: Toyota Corolla, Speed: 15km/h, Trunk: Closed
