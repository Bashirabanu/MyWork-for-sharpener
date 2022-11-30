

// //TRAVERSING THE DOM//
// var itemList = document.querySelector('#items');
// //parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// // console.log(itemList.parentElemnet);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement.parentElement);


// //childNodes
// // console.log(itemList.childNodes);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = 'yellow';

// // //FirstChild
// // console.log(itemList.firstChild);
// // //FirstElementChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hello 1';

// // //LastChild
// // console.log(itemList.lastChild);
// // //lastElementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = 'Hello 4';

// // //nextSibling
// // console.log(itemList.nextSibling);
// // //nextElementSiblings
// // console.log(itemList.nextElementSibling);

// // //previousSibling
// // console.log(itemList.previousSibling);
// // //previousElementSibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = 'green';

// //createElement

// //create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'Hello';

// //add id
// newDiv.id= 'hello1';

// //add attr
// newDiv.setAttribute('Head', 'hello word');

// //create text node
// var newDivText = document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv, h1);

var li = document.createTextNode('hello world');
var list = document.getElementById("items");
list.insertBefore(li, list.childNodes[0]);