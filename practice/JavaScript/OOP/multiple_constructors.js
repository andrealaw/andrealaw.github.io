// Avoid duplication in multiple constructor functions using call or apply

function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  // we can also set properties on the keyword this
  // that are preset values
  this.numWheels = 4;
}

function Motorcycle(make, model, year){
  // using call
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

function Motorcycle(make, model, year){
  // using apply
  Car.apply(this, [make, model, year]);
  this.numWheels = 2;
}

function Motorcycle(make, model, year){
  // even better using apply with arguments
  Car.apply(this, arguments);
  this.numWheels = 2;
}