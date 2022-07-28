//Store data  in Local storage
localStorage.setItem('name','Sylvester');
localStorage.setItem('age',34);


//get data from local storage

let names =  localStorage.getItem('name');
let ages =  localStorage.getItem('age');
console.log(names,ages);



//updating data
localStorage.name = 'Ukpaika'

names =  localStorage.getItem('name');
ages =  localStorage.getItem('age');
console.log(names,ages);


//Delete / Destroy localStorage
localStorage.removeItem('name');

names = localStorage.getItem('name');

console.log(names);


const todos  = [
    {text:'Play mariokart', author: 'Sylvester'},
    {text:'Buy Fuel at the office', author: 'Joshua'},
    {text:'Design Relen', author: 'Deborah'},
    {text:'Copy Content', author: 'Vanessia'}
];

console.log(JSON.stringify(todos));

const storeTodo = JSON.stringify(todos);

// add to lS

localStorage.setItem('todo', storeTodo);

let collect = localStorage.getItem('todo');

collect = JSON.parse(collect);

collect.forEach(datax => {
    console.log(datax.author)
});


