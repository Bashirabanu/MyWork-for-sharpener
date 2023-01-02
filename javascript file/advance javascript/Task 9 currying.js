1. call() method
			var obj ={num:2};

			var add = function(a){

						return this.num+a;

				};

			console.log(add.call(obj,3)); //returns 5 as output



	2. apply() method



			var obj ={num:2};

			var add = function(a,b,c){

						return this.num+a+b+c;

				};

			var arr = [1,2,3];

			console.log(add.apply(obj,arr)); //returns 8 as output



	3. bind() method



			var obj ={num:2};

			var add = function(a,b,c){

						return this.num+a+b+c;

				};

			var arr = [1,2,3];

			var bound = add.bind(obj);

			console.dir(bound);

			console.log(bound(1,2,3)); //returns 8 as output



	4. student example

		var Student = { age: 20 }; 

		function printAge() { 

				return this.age;

		}

		var printAgeBound = printAge.bind(Student);

		console.log(printAgeBound()); //returns 20



5. currying example

let multiply = function(x){

    return function(y){

        console.log(x*y);

    }

}

let multiplyByTwo = multiply(2);

multiplyByTwo(3); // prints 6



let multiplyByThree = multiply(3);

multiplyByThree(10); // prints 30



