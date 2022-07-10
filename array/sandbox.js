//ARRAY FILTER

// const scores = [10,30,15,25,50,40,5];

// const filterScore = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filterScore);

// const users = [
// {name: 'Shaun', premium: true},
// {name: 'Nnachi', premium: false},
// {name: 'Mario', premium: false},
// {name: 'Sylvster', premium: true},

// ];

// const filterUser = users.filter(user => {
//     return user.premium;
// });

// console.log(filterUser);

//ARRAY MAP

// const prices = [10,30,15,25,50,40,80,5];

// const discountPrice =  prices.map(price => {
//     return price / 2;
// });
// console.log(prices);
// console.log(discountPrice);

// const products = [
// {name: 'Origin Bitters', price: 300},
// {name: 'Odogwu Bitters', price: 600},
// {name: 'Action Bitters', price: 250},
// {name: 'Kolaq Bitters', price: 300},
// {name: 'Small Touts', price: 600}

// ]

// const DiscountProducts = products.map((product) => {

//     if(product.price > 300){
//         return {name: product.name, price:  product.price / 2};
//     }else{
//         return product;
//     }

// });

// console.log(DiscountProducts);

//REDUCE ARRAY FUNCTION


// const scores = [10,30,15,25,50,40,5];

// const result = scores.reduce((count, currScores) => {
//     if(currScores > 20){
//         count++;
//     }
//     return count;
// }, 0);

// console.log(result);

//Find Array Method

// const scores = [10,30,15,25,50,40,5];

// const firstHighScore = scores.find((score) => {
//     return score > 40;
// });

// console.log(firstHighScore);


// Sorting Method
// const names = ['John','Smith','Adetoye','Kola','Sylvester','Harold'];

// const scores = [10,30,15,25,50,40,5];

// const users = [
// {name: 'Shaun', score: 80},
// {name: 'Nnachi', score: 60},
// {name: 'Mario', score: 43},
// {name: 'Sylvster', score: 20},

// ];

// names.sort();
// console.log(names);

// scores.sort();
// console.log(scores);

// users.sort((a,b) => {
//     if(a.score > b.score){
//         return -1;
//     } else if(b.score > a.score){
//         return 1;
//     } else{
//         return 0;
//     }
    
// });

// console.log(users);


const products = [
{name: 'Origin Bitters', price: 300},
{name: 'Odogwu Bitters', price: 600},
{name: 'Action Bitters', price: 250},
{name: 'Kolaq Bitters', price: 300},
{name: 'Small Touts', price: 751}

]

// const filterPro = products.filter(product => {
//     return product.price > 300;
// });
// console.log(filterPro);

// const proMap = filterPro.map((mapproducts) => {
//         return `The name of products ${mapproducts.name} - Discounted Price ${mapproducts.price / 2}`;
// });

//Array Chaning

const  proMap = products
.filter (product => product.price > 300)
.map(mapproducts  => `The name of products ${mapproducts.name} - Discounted Price ${mapproducts.price / 2}`);

console.log(proMap);
