const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;

    // console.log(`${h} - ${m} - ${s}`);
};

setInterval(tick, 1000);


const nowD =  new Date();

// console.log(dateFns.isToday(nowD));

// Using FNS to format date

console.log(dateFns.format(nowD, 'YYYY'));
console.log(dateFns.format(nowD, 'MMM'));
console.log(dateFns.format(nowD, 'dddd'));
console.log(dateFns.format(nowD, 'Do'));
console.log(dateFns.format(nowD, 'dddd Do MMMM YYYY'));


//comparing dates

const before =  new Date('January 1 2022 12:00:00');

console.log(dateFns.distanceInWords(nowD,before, {addSuffix:true}))