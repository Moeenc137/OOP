//classes and objects
//prototypes:
//prototypes are basically some set of function inside every object and it can also
// used to reference and add one object functions to another object.

let student = {
  fullName: "Fawad Khan",
  marks: 94.4,
  printMarks: function () {
    console.log("print marks", this.marks);
  },
};
//theres a keyword used in student named "this", it simply means that it is reffering
//to the object which "this" keyword is being used inside.

let employee = {
  calcTax() {
    console.log("Tax rate in 10%");
  },
};

let karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("Tax rate in 20%");
  },
};
//if there are two type of same functions added in an object , the one which is
//written inside the function directly will have more importance and will always
//appear if called.
karanArjun.__proto__ = employee;

//classes:
//classses are some set of instructions which can be used to made objects. like a
//blueprint to cars , it has some functions and the objects which is based on the
//specific class will inheritly have all the functions which are described in class.

class toyotaCar {
  start() {
    startCar: "The car is on";
  }

  stop() {
    stopCar: "The car is off";
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let fortuner = new toyotaCar();
fortuner.setBrand("Toyota");
let civic = new toyotaCar();
civic.setBrand("Honda");
