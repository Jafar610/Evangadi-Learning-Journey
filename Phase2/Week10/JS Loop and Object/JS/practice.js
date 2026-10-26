const StudentInfo = {
  firstName: "Abel",
  lastName: "Abebe",
  age: 26,

  address: {
    location: "Addis Abeba",
    city: "A.A",
    street: "34BC street",
  },

  walk: function () {
    return "I can walk.";
  },
};
console.log(StudentInfo.walk());
console.log(StudentInfo.address.street);
console.log(StudentInfo.address);

// constructor
function Person(fn, ls, age){
    this.firstName = fn;
    this.lastName = ls;
    this.age  = age;
    this.drive = function(){
        return "I can drive.";
    }
}

const person1 = new Person('Jafar', 'Mohamed', 24);
console.log(person1);

const person2 = new Person('Kedi','Kedir', 20);
console.log(person2);

const person3 = new Person('Akmel','Mohamed',24);
console.log(person3);


class Car {
    constructor(carName, model, color) {
        this.carName = carName;
        this.model = model;
        this.color = color;
    }
}

const Car1 = new Car('Toyota', 'TY2304', 'blue');
console.log(Car1);


// Built in JS Objects.
//String()

const Name = "Jafar";
console.log(Name.length);
console.log(Name.toLowerCase());
console.log(Name.charAt());
console.log(Name.toUpperCase());
console.log(Name.slice());
console.log(Name.split('')[0]);

//Arrays object

const arr = [1,3,4,'hello', 'book', true];
arr.push('Jafar');

console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('Jafar');
console.log(arr);
