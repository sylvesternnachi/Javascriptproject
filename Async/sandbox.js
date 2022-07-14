console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 8000);

console.log(3);
console.log(4);

// GETTING DATA FROM API
const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

request.addEventListener('readystatechange',  ()  => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        const datas = JSON.parse(request.responseText);
        callback(undefined, datas);
        // console.log(request.responseText)
    }else if(request.readyState  === 4) {
        callback('Could not fetch the data', undefined);
        // console.log('Could not fetch the data');
    }
});
    
// request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.open('GET',resource);

request.send();

};

console.log(5);
console.log(6);

getTodos('oldtodo.json',(err,data) => {

    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
    // console.log(err,data);

    getTodos('newtodo.json',(err,data) => {
        console.log(data);

        getTodos('todo.json',(err,data) => {
            console.log(data);
        });

    });

    

});

console.log(7);
console.log(8 );



//Promise Example

const doSomething = () => {

    return new Promise((resolve,reject) => {
        //fetch something
        // resolve('some data');
        reject('some error')
    });
    
};

// doSomething().then((dataxx) => {
//     console.log(dataxx)
// },(err) => {
//     console.log(err);
// });

doSomething().then((dataxx) => {
    console.log(dataxx)
}).catch((err)  => {
    console.log(err)
});