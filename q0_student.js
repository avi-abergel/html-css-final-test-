import { Person } from "./q0_person.js";

export class Student extends Person {
  constructor(first_name, last_name, age, grade) {
    super(first_name, last_name, age);
    this.grade = grade;
  }
}

let std1 = new Student("avi", "abergel", 23, 12);
std1.printAge();
std1.printName();
