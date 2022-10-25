export class Person {
  constructor(first_name, last_name, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
  printName() {
    console.log("my name is " + this.first_name + " " + this.last_name);
  }
  printAge() {
    console.log("I am " + this.age + " years old");
  }
}
