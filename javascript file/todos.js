const todos = [
{
    id:1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
}
];

//for 
for(let i =0; i < todos.length; i++){
    console.log(todos[i].id);
}

//simplest way of for loop
for(let todo of todos){
    console.log(todo.id);
}

//another way of for loop(forEach, map, filter)
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);

//while
let i = 0;
while(i <= 10){
    console.log(`While loop number:${i}`);
    i++;
}