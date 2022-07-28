const addF = document.querySelector('.addf')
const ulist = document.querySelector('ul');

const search = document.querySelector('.searchinput');

const lists = document.getElementsByTagName('li');
const removeList = document.querySelector('.remove');
const input = document.getElementById('newtodo');

// Generate Template Function
const generateTemplate  = (todos) => {




    const html = `
    <li class="tdbox" style="display: block;"> 
    ${todos}
    <span class="remove">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
</li>
    `;

    ulist.innerHTML += html;

}

addF.addEventListener('submit', (e) => {
    e.preventDefault();
    const todos = addF.newtodo.value.trim();

    if(todos.length >= 1){
        generateTemplate(todos);

        let todoEntry;
        if(localStorage.getItem('todolist')  === null){
            todoEntry = [];
        }else{
            todoEntry = JSON.parse(localStorage.getItem('todolist'));
        }
        todoEntry.push(todos)        
              
            //add todo to localStorage
         localStorage.setItem('todolist', JSON.stringify(todoEntry));

         //reset Form
        addF.reset();
    }
    

});

//REMOVE LIST
ulist.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash-o')  ){
            const tList = e.target.parentNode.parentNode;
            tList.remove();

            const lsTList = tList.textContent.trim();

            //remove from localstorage
            let todoEntry;
            if(localStorage.getItem('todolist')  === null){
                todoEntry = [];
            }else{
                todoEntry = JSON.parse(localStorage.getItem('todolist'));
            }

            todoEntry.forEach((task,index) => {
                if(lsTList ===  task){
                    todoEntry.splice(index, 1);
                }
            });

            localStorage.setItem('todolist',JSON.stringify(todoEntry));
    };
});

//update UI
if(localStorage.getItem('todolist')){

let viewTodo = JSON.parse(localStorage.getItem('todolist'));

viewTodo.forEach((td)  => {

    console.log(td);

    const html = `
    <li class="tdbox" style="display: block;"> 
    ${td}
    <span class="remove">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
</li>
    `;


    ulist.innerHTML += html;
});



}




//FILTER

const filterTodo = ((term)  => {
    Array.from(ulist.children).filter((litodo) => {
        return !litodo.textContent.includes(term);
    }).forEach((litodo) => {
        litodo.classList.add('filtered');
    })


    Array.from(ulist.children).filter((litodo) => {
        return litodo.textContent.includes(term);
    }).forEach((litodo) => {
        litodo.classList.remove('filtered');
    })

})



//KEYUP EVENT
search.addEventListener('keyup',() => {
    const term = search.value.trim().ToLowerCase();

    filterTodo(term);
});




// My Own Practical Way
//------------------------


// input.addEventListener("keypress", (e) => {
//     if(e.key === "Enter"){
//       console.log('enter key press');
//       console.log(input.value);


//       if(input.value.length >= 1){
        
//         let newList = document.createElement('li');
//         let  linkx = document.createElement('span');

//         linkx.className = 'remove';
//         linkx.innerHTML ='<i class="fa fa-trash-o" aria-hidden="true"></i>';

//         newList.classList.add('tdbox')
//         newList.style.display = 'block';

//         let content;
//         content = input.value;

    
//         newList.append(content);
//         newList.append(linkx);
//         ulist.append(newList);
//         input.value = '';
//         console.log(newList);

//     }else{
//         console.log('Enter the right text');
//     }

//     }

    
    
// });




//     ulist.addEventListener('click', (e) => {
    
     
//     if(e.target.classList.contains('fa-trash-o')  ){
//             const tList = e.target.parentNode.parentNode;
//             tList.remove();
//     }



// });