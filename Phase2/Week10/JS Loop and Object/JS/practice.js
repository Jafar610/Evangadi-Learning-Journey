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
}

const person1 = new Person('Jafar', 'Mohamed', 24);
console.log(person1);

const person2 = new Person('Kedi','Kedir', 20);
console.log(person2);

const person3 = new Person('Akmel','Mohamed',24);
console.log(person3);