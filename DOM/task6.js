

// //QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ='blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color ='coral';

//QUERYSELECTORALL//

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor ='green';

}

// for(var i = 0; i < even.length; i++){
//     even[i].style.backgroundColor ='#ccc';

// }


const items = document.querySelectorAll('li');

items[1].style.color = 'green';

items[2].style.visibility = 'hidden';