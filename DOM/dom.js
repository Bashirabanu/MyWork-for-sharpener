// //EXAMINE THE DOCUMENT OBJECT//

// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);

//GETELEMENTBYID//
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//  console.log(headerTitle.textContent);
//  console.log(headerTitle.innerText);
//  headerTitle.innerHTML = '<h2>ADD ITEM</h2>';
//  headerTitle.style.fontWeight= 'bold';
//  headerTitle.style.color= 'green';

// GETELEMENTBYCLASSNAME//

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello 2';
items[1].style.fontweight = 'bold';
items[2].style.backgroundColor = 'green';

for(var i = 0; i<items.length; i++){
 items[i].style.fontweight = 'bold';
}

