// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 1000)
// console.log('d')

// Solution

let studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
	};

let totalAge = 0;
let numOfStudents = 0;

for (const key in studentobj) {
	totalAge += studentobj[key];
	numOfStudents++;
}

let avgAge = totalAge / numOfStudents;

console.log(avgAge); // 25
