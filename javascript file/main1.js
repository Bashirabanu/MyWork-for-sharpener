//console.log(window);
//alert(1);

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// console.log(document.querySelector('.item'));
// console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const ul=document.querySelector('.items');
const li=document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.children[1].innerText ='Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

ul.firstElementChild.textContent = 'Hello';
ul.firstElementChild.style.color ="green";
ul.lastElementChild.style.color ="yellow";
