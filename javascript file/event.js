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
