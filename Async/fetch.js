//fetch API

fetch('todo.json').then((response) => {
 console.log('resolved', response);
  return response.json();   
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err);
});



// async and await

const getTodos = async () => {
    const response = await fetch('todo.json');

    if(response !== 200 ){
        throw new Error('Cannot fetch the data');
    }
    const  data = await response.json();

    // const response2 = await fetch('oldtodo.json');
    // const  data2 = await response2.json();
    return data;
    // return data2;
};

getTodos().then((datares) => {
    console.log('Response:', datares);
}).catch((err) => {
    console.log('Error:', err.message);
});

