const user = [{
    username: 'bashira',
    lastactivitytime: '22nd of march'
}];

function printPost() {
        user.forEach((users) => {
            console.log(users.username)
            console.log(users.lastactivitytime)
        })
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.push(post);
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('error: something went wrong');
            }
        },2000);
        });
}

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            user.lastactivitytime = new Date().getTime();
            user.push();
            resolve(user.lastactivitytime);
        }, 1000)
    }) 
}

function deletePost(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.length > 0) {
        resolve( user.pop());
      } 
      else {
        reject('array is empty');
      }
    }, 1000);
  });
}


function userUpdatesPost(){
    Promise.all([createPost({username:'usman', lastactivitytime:'21st of march'}), updateLastUserActivityTime()])
    .then(([createpostresolved,updatelastuseractivitytimeresolved])=> {
        console.log(updatelastuseractivitytimeresolved);
    })
};

updateLastUserActivityTime()
.then(()=> createPost()
.then(()=> userUpdatesPost()))
.then(()=> deletePost())
.then(()=> printPost())
.catch(err =>console.log(err));
