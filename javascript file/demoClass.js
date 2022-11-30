class user{
    constructor(username, email, password){
        this.username =username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('there are 50 users');
    }

    register(){
        console.log(this.username+' is now registered');
    }
}

let bob = new user('bob', 'bob@gmail.com', '12345');

bob.register();
user.countUsers();
