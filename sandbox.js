let age = 25;

let email = 'sylvelity009@gmail.com'

let year = 2019
console.log(age, year);


let firstName = "Sylvester";
let lastName = "Nnachi";

let fullName = firstName + ' '+  lastName;

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result);

let index = email.indexOf('@');
console.log(index);

index = email.lastIndexOf("i");
console.log(index);

let slice = email.slice(2,9);
console.log(slice)

let substring = email.substr(2,9)
console.log(substring);

let strRep = email.replaceAll('i','x');
console.log(strRep);

//Numbers

let likes = 10;

likes += 200;

console.log(likes);

//Template Strings

const title = "Nigerian Rappers are dropping low";
const author = "MI Abaga";
const blikes = "230k";

let blogResult =  `Title: ${title} Author: ${author} - Likes: ${blikes}`;
console.log(blogResult);


//HTML Template

let html = 
`
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${likes}</span>
`
console.log(html);

//Array
let ninjas = ['shaun','ryu','Smith'];
ninjas[1] = 'James';
console.log(ninjas[1]);

let ages = [10,20,50,80,132];
console.log(ages);

let random  = ['kola','joshua',32,80,100];
console.log(random);


let newResult = ninjas.join(' - ');
// newResult = ninjas.concat(['ryu','sly']);
newResult = ninjas.push('sly');
newResult = ninjas.pop(); 
console.log(ninjas);

//boolean & comparisons

let xmail = 'sylvelity009@yahoo.com';


let emailResult = xmail.includes('@');

console.log(emailResult);

let yAge = 25;

console.log(yAge === 25);
console.log(yAge === '25');

//Type Conversion

let score = '100';

score =  Number(score);
score =  String(score);


console.log(score + 11)

// LOOPS

//FOR LOOPS
for(let i = 0; i < 5; i++){
    console.log("in loop:", i)
}


const staffName = ['Deborah','Joshua','Sylvester','Vanessia','Chinedu','Samuel'];

for(let sn = 0; sn < staffName.length; sn++ ){ 
    let html = `<div class="box">${staffName[sn]}</div>`; 
    console.log(html);
    // conmlsole.log(`${sn} -  ${staffName[sn]}`);
}


//WHILE LOOPS
let s = 0;
while(s < staffName.length){
console.log('in loops:', s + ' ' + staffName[s]);
s++;
}

//DO WHILE LOOP

let x = 0;
do{
    console.log(x);
    x++;
} while(x < 10);

let password = "sine";

if(password.length >= 8){
    console.log("password's accepted");
}else{
    console.log("you password is too short, must be 8  character long");
}

//varibale & block scope.

let ageX = 30;

if(true){
    let ageX = 40;
    let nameX  =  'Shaun'
    console.log('inside code block', ageX, nameX);

    if(true){
        console.log('inside 2nd code blov', ageX);
    }
}

console.log('outside code block', ageX); 



// fuunction

//function declaration
function greet(){
    console.log('Sly I greet you specially');   
}

//function  expression
let speak = function(name = 'Jerry', timer = 'Night'){
    console.log(`Good ${timer} ${name} `);
};

greet();
speak('Sly');

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const calcArea = (radius) =>{
//     let area = 3.14 * radius**2;
//     return area;
// }

const calcArea = (radius) => 3.14 * radius**2;

let area = calcArea(5);
console.log(area);

//Arrow functions

// const newGreet = function(namely){
//     let greetx  = `Good evening ${namely}`;
//     return greetx;
// }

const newGreet = namely => `Good evening ${namely}`;

let greetx = newGreet('Sylvester Nnachi');
console.log(greetx);

const bill = (products, tax) => {
    let total = 0;
for(let i = 0; i <  products.length; i++){
    total += products[i] + products[i] * tax;
}
return  total;
}


console.log(bill([10,10], 2.0));


//Callbacks and foreach

const ul = document.querySelector('.people')

let  people = ['SamGold','Deborah','Vanessia','Sylvester','Kunle'];

let htmlx = ``;
const logPerson = (person,index) => {
    htmlx  += `<li class="libox"> ${index} - Hello Mr ${person} <li/>`
    // console.log(`${index} - Hello Mr ${person}`);
};

people.forEach(logPerson);
ul.innerHTML = htmlx;

console.log(html)

// people.forEach((person,index) => {
//     console.log(index,person);
// });


const tvName =  ['Samsung','LG','Hisense','Philip','Sonny',];

const ultv = document.querySelector('.tv')


let htmltv = ``;

tvName.forEach((tvlist,index) => {

    htmltv += `<li>${index} - TV Type ${tvlist}</li>`;

});

ultv.innerHTML = htmltv;
