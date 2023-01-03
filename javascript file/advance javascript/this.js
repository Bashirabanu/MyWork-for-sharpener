// this inside global scope.

			this.table = 'window table';
			this.garage ={
					table: 'garage table'
			};
			console.log(this.garage.table);// garage table


// this inside an object. 

			let johnsRoom = {
				table: 'johns table'
			};
			console.log(johnsRoom.table);//johns table

// this inside a method.

let johnsRoom ={
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
};		

johnsRoom.cleanTable();// cleaning johns table

// this inside a function.

const cleanTable = function(){
    console.log(`cleaning  ${this.table}`);
}
cleanTable.call(this);//cleaning window table

const cleanTable = function(soap){
    console.log(`cleaning  ${this.table} using ${soap}`);
}
cleanTable.call(this,'some soap');//cleaning  window table using some soap
cleanTable.call(this.garage,'some soap');//cleaning  garage table using some soap
cleanTable.call(johnsRoom,'some soap');//cleaning  johns table using some soap

// this inside a inner function.

const cleanTable = function(soap){

    let that=this;
    const innerFunction = function(_soap){
        console.log(`cleaning  ${that.table} using ${_soap}`);
    }
    innerFunction(soap);
}
cleanTable.call(this,'some soap');//cleaning  window table using some soap
cleanTable.call(this.garage,'some soap');//cleaning  garage table using some soap
cleanTable.call(johnsRoom,'some soap');//cleaning  johns table using some soap

// using call and bind methods.

const cleanTable = function(soap){

    const innerFunction = function(_soap){
        console.log(`cleaning  ${this.table} using ${_soap}`);
    }
    innerFunction.call(this,soap);
    innerFunction.bind(this)(soap);
}
cleanTable.call(this,'some soap');//cleaning  window table using some soap
cleanTable.call(this.garage,'some soap');//cleaning  garage table using some soap
cleanTable.call(johnsRoom,'some soap');//cleaning  johns table using some soap


// using arrow(=>) function.

const cleanTable = function(soap){

    const innerFunction = (_soap)=>{
        console.log(`cleaning  ${this.table} using ${_soap}`);
    }
    innerFunction(soap);
}
cleanTable.call(this,'some soap');//cleaning  window table using some soap
cleanTable.call(this.garage,'some soap');//cleaning  garage table using some soap
cleanTable.call(johnsRoom,'some soap');//cleaning  johns table using some soap


// this inside a constructor.

let createRoom = function(name){
    this.table = `${name}s table`
}

createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning  ${this.table} using ${soap}`);
};

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');//cleaning  jills table using some soap
johnsRoom.cleanTable('some soap');//cleaning  johns table using some soap

// this inside a class.

class createRoom{
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning  ${this.table} using ${soap}`);
    }
};

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');//cleaning  jills table using some soap
johnsRoom.cleanTable('some soap');//cleaning  johns table using some soap
