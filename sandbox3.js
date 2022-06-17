// const para =  document.querySelectorAll('p');

// para.forEach( paraItem => {
//     console.log(paraItem);
// });



// const newPara = document.querySelector('p');
// newPara.innerText += ' Slyflow Nnachi';
// console.log(newPara.innerText)

// const allPara = document.querySelectorAll('p');

// allPara.forEach(listPara => {
//     listPara.innerText += ' - SlyFlow'; 
//     console.log(listPara.innerText);
// });

// const content = document.querySelector('.content');

// content.innerHTML += '<h2> Sly Flow New Album</h2>';

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.thenetninja.co.uk');
// console.log(link.getAttribute('href'));

// const erbox = document.querySelector('.errorx');

// erbox.style.fontSize = '60px';


// const allParax = document.querySelectorAll('p');
// allParax.forEach(paraxItem => {
//     // console.log(paraxItem);
//     if(paraxItem.innerText.includes('error')){
//         paraxItem.classList.add('error');
//     }
//     if(paraxItem.innerText.includes('success')){
//         paraxItem.classList.add('success',);
//     }
// })

// const article  = document.querySelector('article');
// console.log(article.children);

//Convert HTML collection to Array
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-elements');
// });

// const title = document.querySelector('h2');
// console.log(title.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener('click',(e) => {
//     e.preventDefault();
//     const todoText = document.querySelector('.todotext');
//     console.log(todoText.value);
//      const li = document.createElement('li');
//      li.textContent = todoText.value;
//      ul.append(li);
// })

// ul.addEventListener('click', (e) => {

//     if(e.target.nodeName === 'LI'){
//         // e.target.style.textDecoration = 'line-through'; 
//         e.target.remove();
//     }

// });

// const lix  = document.querySelectorAll('li');

// lix.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e.target);
//         e.target.style.textDecoration = 'line-through';
//         e.target.remove()
//     });
// });

const form = document.querySelector('.formbox');
const feedb = document.querySelector('.info');
const pattern  = /^[a-zA-Z0-9]{6,12}$/;

form.addEventListener('submit', e  => {
    e.preventDefault();
    const userName = form.username.value;

    let result  =  pattern.test(userName)
    console.log(result);
  
});

//livefeedback

form.username.addEventListener('keyup', e => {

    if(pattern.test(form.username.value)){
        form.username.setAttribute('class','successborder');
        feedb.innerHTML = 'success';

    }else{
        form.username.setAttribute('class','errorborder');
        feedb.innerHTML = 'error';
    }
});

  

