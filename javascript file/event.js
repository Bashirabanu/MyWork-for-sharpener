const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
    e.preventDefault();
    console.log('click');
});


btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML ='<h1>hello</h1>';
    console.log('mouseover');
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML ='<h1>hello</h1>';
    console.log('mouseout');
});

// const myForm = document.querySelector('#my-form');
// const nameinput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value ===''){
//         msg.classList.add('error');
//         msg.innerHTML='please enter all fields';
//         setTimeout(() => msg.remove(), 3000);
//     }else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);
//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }