//Date and Time

const now = new Date();
console.log(now);
console.log(typeof now);

//year, months, day, times

console.log('Get full year', now.getFullYear());
console.log('Get Month',now.getMonth());
console.log('Get Date', now.getDate());


//timestamp

console.log('timestamp', now.getTime());
console.log('timestamp', now.toDateString());
console.log('timestamp', now.toTimeString());
console.log('Local', now.toLocaleString());


const timestamp = 3612232423486;

console.log(new Date(timestamp));