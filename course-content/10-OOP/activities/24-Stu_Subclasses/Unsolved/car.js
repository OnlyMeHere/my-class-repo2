// TODO: Import the parent class
const Vehicle = requiure('./vehicle');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, numberOWheels, sound);
    this.numberOWheels = 4
    this.sound = 'beep'

    this.id = id;
    this.color = color;
    this.passengers = passengers;

  }
}

useHorn() {
  console.log(this.sound);
}

checkPassengers() {
  if (this.passengers < 4 ) {
    console.log(`we have room for ${ this.}`)
  }
}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
