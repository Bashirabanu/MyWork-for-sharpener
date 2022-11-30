function Student(firstName, lastName, rollNumber, sex, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.sex = sex;
    this.age = age;
    this.getBirthYear = function() {
        return 2019 - this.age;
    }
    this.fullName = function() {
        return this.firstName + this.lastName;
    }
}

var student1 = new Student("John", "Smith", 1, "Male", 20);
var student2 = new Student("Jane", "Doe", 2, "Female", 18);

console.log(student1.fullName() + " is older than " + student2.fullName());

function isEligible(age) {
    if (student1.age >= age || student2.age >= age) {
        return "Student is eligible";
    } else {
        return "Student is not eligible";
    }
}

console.log(isEligible(21));