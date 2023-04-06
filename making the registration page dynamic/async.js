console.log('person1 shows ticket');

console.log('person2 shows ticket');

const preMovie = async () => {

 const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {

  setTimeout(() => resolve('ticket'), 3000);

 });

 const getPopcorn = new Promise((resolve, reject) => {

		setTimeout(() => resolve('popcorn'), 3000);

 });

 const addButter = new Promise((resolve, reject) => {

		setTimeout(() => resolve('butter'), 3000);

 });

const getColdDrinks = new Promise((resolve, reject) => {

		setTimeout(() => resolve('drink'), 3000);

 });

 let ticket = await person3PromiseToShowTicketWhenWifeArrives;

console.log(`got the ${ticket}`);

 console.log(`Husband:we should go in now`);

 console.log(`Wife: "i am hungry"`);

 let [ popcorn, butter, drinks ] =
 await Promise.all([ getPopcorn, addButter, getColdDrinks  ]);

 console.log(`got ${popcorn}, ${butter}, ${drinks}`);

//  let popcorn = await getPopcorn;

 console.log(`Husband: here is ${popcorn}`);

	console.log(`Husband:we should go in now`);

 console.log(`Wife: "I dont like popcorn without butter!"`);

  //  let butter = await addButter;

 console.log(`added ${butter}`);

//   let drinks = await getColdDrinks;

  console.log(`added ${drinks}`);

 console.log(`Husband:Anything else darling`);

	console.log(`Wife: lets go we are going to miss the preivew`);

 console.log(`Husband: thanks for the reminder *grin*`);

 return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));


//
console.log('person4 shows ticket');

const createPost = async () => {

    const getPost = new promise((resolve, reject) => {
    
    setTimeout(() => resolve('post'), 3000);
    });
    
    const deletePost = new promise((resolve, reject) => {
    
    setTimeout(() => reject('delPost'), 3000);
    });
    
    let post = await getPost;
    
    console.log(`got the ${post}`); 
    
    delPost = await deletePost;
    console.log(` delete the ${delPost}`);
      
    return post;
    };
    
    createPost();