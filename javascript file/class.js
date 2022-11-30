function Student(firstName, lastName, rollNumber, sex, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.sex = sex;
    this.age = age;
    this.getBirthYear = function () {
        return new Date().getFullYear() - this.age;
    }
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

let stud1 = new Student("John", "Smith", "1", "Male", 20);
let stud2 = new Student("Mary", "Jane", "2", "Female", 22);

console.log(stud1.fullName());
console.log(stud2.fullName());

function eligible(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(eligible(stud1.age));
console.log(eligible(stud2.age));

class Students {
    constructor(firstName, lastName, rollNumber, sex, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNumber = rollNumber;
        this.sex = sex;
        this.age = age;
    }
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let student1 = new Students("John", "Smith", "1", "Male", 20);
let student2 = new Students("Mary", "Jane", "2", "Female", 22);

console.log(student1.fullName());
console.log(student2.fullName());

function eligible(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(eligible(student1.age));
console.log(eligible(student2.age));