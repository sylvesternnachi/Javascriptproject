//Array n Object
const blogs = [
    {title: 'MacBook Box Reader', likes: 30},
    {title: '10 things to make your life better', likes: 40},
    {title: 'New Hack Method to Life', likes: 40}
]

//Object Literals

let userx = {
    name:  'Crystal',
    agex: 30,
    email: 'crystal@xmail.com',
    location: 'berlin',
    blog: [
            {title: 'MacBook Box Reader', likes: 30},
            {title: '10 things to make your life better', likes: 40},
            {title: 'New Hack Method to Life', likes: 40}
        ],
    
    //method - is a function defind inside an object
    login: function(){
        console.log(`user is logged in`);
    },
    logout: function(){
        console.log('user logged out');
    },

    logBlogs: function(){
        console.log(`this user has written ${this.blog.length} blog(s)`)
       this.blog.forEach(blogItem => {
        console.log(blogItem.title, blogItem.likes)   
       });
    }

};

 
userx.logBlogs();
console.log(userx);


// Math Object

// console.log(Math);

const ran = Math.random();
console.log(Math.round(ran * 22000));