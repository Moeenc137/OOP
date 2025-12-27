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

//constructor keyword:
//constructor is a reserved keyword which is created automatically when an object made through
//class, it is basically a function we can also set values to it if we want to add function to
//an object at the time of initializing the object.

class toyotaCar {
  constructor(brand, milage) {
    console.log("creating an object");
    this.brand = brand;
    this.milage = milage;
  }
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
let fortuner = new toyotaCar("fortuner", 10);
// fortuner.setBrand("Toyota");
console.log(fortuner);
let civic = new toyotaCar("civic", 18);
console.log(civic);
// civic.setBrand("Honda");

//inheritence:
//basically inheritence means in programimg is to give all the functions of a
//class to another class, like a child gets inheritence of parents.

class person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  sleep() {
    sleep: "Human sleeps";
  }
  eat() {
    eat: "Human eats";
  }
}

//super keyword: basically to access anything from parent class , super keyword
//should be used, and also to add anything in child constructor, super keyword
//should be used inside child constructor to call the parent.

class Engineer extends person {
  constructor(name, type) {
    super();
    this.type = type;
    this.name = name;
  }
  work() {
    work: "Build something";
  }
}
let Engineer1 = new Engineer("Moin", "Chemical Engineer");

class doctor extends person {
  work() {
    work: "treats patients";
  }
}
let doctor1 = new doctor();
