const person = {
    firstNAme:'John',
    lastName:'Doe',
    age:30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// object value using index 
//console.log(person.hobbies[1]);

//object value using child object
//console.log(person.address.state);

//age from person object using destructuring
const {firstName, lastName, age, address:{state}} = person;
 console.log(state);
