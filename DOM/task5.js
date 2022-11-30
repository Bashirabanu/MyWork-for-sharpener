
// GETELEMENTBYCLASSNAME//

var itemslist = document.getElementsByClassName('list-fruit-item');
console.log(itemslist);
console.log(itemslist[1]);
//items[1].textContent = 'hello 2';
itemslist[1].style.fontweight = 'bold';
itemslist[1].style.backgroundColor = 'green';

for(var i = 0; i<itemslist.length; i++){
 itemslist[i].style.fontweight = 'bold';
}

//GETELEMENTBYTAGNAME//


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
//li[1].textContent = 'hello 2';
li[1].style.fontweight = 'bold';
li[1].style.backgroundColor = 'green';

for(var i = 0; i<li.length; i++){
 li[i].style.fontweight = 'bold';
}
