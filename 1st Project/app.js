//for loop of javascript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/* 
for (let i = 0; i < 100; i++) {

    console.log(` ${i} my name is ripon`);
} */

//while loop of javascript\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/* let i = 0;

while (i < 100) {
    console.log(`${i} my name is ripon`);
    i++;
} */

//do while loop of javascript\\\\\\\\\\\\\\\\\\\\\\\\\\\

/* let i = 0;
do {
    console.log(`${i} my name is ripon`);
    i++;
}
while (i <= 50); */

//javascrtipt function

//function declaration

/* let birth_year = parseInt(prompt('birth_year'));
let current_year = parseInt(prompt('current_year'));


function agecal(birth_year, current_year) {

    let age = current_year - birth_year;
    console.log(`your age is ${age} years old`);
}

agecal(birth_year, current_year); */

///javascript function --- arrow function
/* 
let nae = prompt('nae');
const name = (nae) => {
    console.log(`Your name is ${nae}`);
}

name(nae); */

//javascript  function

/* let length = Number(prompt('length'));
let height = parseInt(prompt('height'));


function areacal(length) {

    let call = length * length;
    console.log(`area is ${call}`);
}

areacal(length); */

// calculate the area of square rectangle triangle

/* let type = prompt("type");
let length = Number(prompt("length"));
let width = Number(prompt("width"));

function areacal(type, length, width) {
    if (type == "R") {
        let result = length * width;
        console.log(`Area of rectangle is ${result}`);
    }
    if (type == "S") {
        let result = length * width * length;
        console.log(`Area of Square is ${result}`);
    }
    if (type == "T") {
        let result = 0.5 * width * length;
        console.log(`Area of Triangle is ${result}`);
    }
}

areacal(type, length, width); */

/* function expression */
/* const Confunction = function () {}; */

/* function declaration */
/* function Result() {} */

/* function arrow */
/* let arrf = (hgaf, ghjgdf) => {}; */

/* function arrow */
/* let arr = (parameter) => ""; */

//Constructor function
/* 
const Ripon = function () { */

//property constructor
/*     this.name = "ripon miah";
    this.age = 22;
    this.skill = "javascript";
 */
//method constructor
/*     this.mony = function () {
        return "my name is mony akter";
    };

    this.mim = function () {
        return "my name is mim khatun";
    };

    this.asma = function () {
        return "my name is asma khatun";
    };
}; */

//instance of constructor function
/* let call = new Ripon(); */

//call of constructor function
/* console.log(call.mony());
console.log(call.mim());
console.log(call.asma());
console.log(call.name);
console.log(call.age);
console.log(call.skill); */

/* let call = new RiponMiah();
let name = prompt('name');
let birth_year = parseInt(prompt('birth_year'));
call.agecal(name, birth_year); */


//Array Data Structure
/* 
const flower = ['golap', 'gondhoraj', 'beli', 'jui', 'capa', 'dalia', 'surjumukhi'];

const river = ['padma', 'meghna', 'jamuna', 'surma', 'karnaphuli', 'burigonga', 'tista'];
const fish = ['rui', 'boal', 'chitol', 'taki', 'puti', 'silbar', 'elish'];
const birds = ['doyel', 'chorui', 'shalik', 'tia', 'moyna', 'ghughu', 'masranga'];
const vegitables = ['alu', 'potol', 'tomato', 'lau', 'kumra', 'jhinga'];

let stttt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, rem?'; */


//data collect from array by for loop
/* for (let i = 0; i < flower.length; i++) {
    console.log(flower[i]);
};
 */

//data collect from array by foreach loop

/* river.forEach((item) => {
    console.log(item);
})


fish.forEach(data => {
    console.log(data);
});

birds.forEach(function (data) {
    console.log(data);
});

birds.forEach(data => {
    console.log(data);
}); */

//data collect from array by map loop

/* flower.map(data => {
    console.log(data);
});


fish.map(data => {
    console.log(data);
});


river.map(data => {
    console.log(data);
}); */


//Array to string conversion

/* 
let fishh = fish.toString(); */
/* let fishh = fish.join('/'); */
/* let fishh = stttt.split(''); */
/* let fishh = fish.push('ripon'); */
/* let fishh = fish.pop();  */
/* let fishh = fish.shift(); */
/* let fishh = fish.unshift('chitol'); */
/* let fishh = fish.slice(2, 3);*/
/* let fishh = fish.splice(2, 3); */
/* let fishh = fish.concat(river); */
/* let fishh = fish.sort(); */
/* let sttt = fishh.reverse(); */
/* let fishh = fish.lastIndexOf('chitol') */
/* let fishh = fish.indexOf('chitol') */
/* let fishh = fish.includes('chitol') */
/* console.log(Array.isArray(fish)); */


//Array and object data structures

/* const students = [{
        name: 'Ripon Miah',
        email: 'Ripon@gmail.com',
        cell: '01913509868',
        skill: 'Laravel Developer',
    },
    {
        name: 'Mony Akter',
        email: 'mony@gmail.com',
        cell: '01966060192',
        skill: 'Javascript developer',
    }

]; */


//data fetch by map
/* students.map(data => {
    console.log(data.name);
    console.log(data.email);
    console.log(data.cell);
    console.log(data.skill);
}); */

//data fetch by for loop

/* for (let i = 0; i < students.length; i++) {
    let data = students[i];
    console.log(data.name);
    console.log(data.email);
    console.log(data.cell);
    console.log(data.skill);
} */

//data fetch by for in loop

/* for (data in students) {
    let item = data;
    console.log(item);

} */

//data fetch by for of loop

/* for (data of students) {
    console.log(data.name);
    console.log(data.email);
    console.log(data.cell);
    console.log(data.skill);
} */



//date object

/* let date = new Date();

console.log(date.getTime());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds()); */



//math object


/* 
console.log(Math.random() * 101) + 1; */



//json data management

/* const students = [{
        name: 'Ripon Miah',
        email: 'Ripon@gmail.com',
        cell: '01913509868',
        skill: 'Laravel Developer',
    },
    {
        name: 'Mony Akter',
        email: 'mony@gmail.com',
        cell: '01966060192',
        skill: 'Javascript developer',
    }

]; */
/* let stt = JSON.stringify(students);
let arr = JSON.parse(stt);
console.log(arr); */


/* 
localStorage and sessionStorage */

/* const students = [{
        name: 'Ripon Miah',
        email: 'Ripon@gmail.com',
        cell: '01913509868',
        skill: 'Laravel Developer',
    },
    {
        name: 'Mony Akter',
        email: 'mony@gmail.com',
        cell: '01966060192',
        skill: 'Javascript developer',
    }

];

localStorage.setItem('students', JSON.stringify(students));
localStorage.setItem('name', 'Ripon');
let lll = localStorage.getItem('name');
console.log(lll);


sessionStorage.setItem('students', JSON.stringify(students));
sessionStorage.setItem('name', 'Ripon miah');
let llllll = sessionStorage.getItem('name');
console.log(llllll);

document.cookie = "name = Ripon ;100;/home";
100;
 */

//javascript error handler


/* console.log('this is a javascript');
console.info('this is a javascript');
console.dir('this is a javascript'); */
/* console.debug('this is a javascript'); */
/* console.error('this is a javascript'); */
/* console.warn('this is a javascript'); */

/* try {
    agecaal();
} catch (error) {
    console.error(error.message);
} */


//01/8801/+8801

/* let txt = '01913509868';

let pattern = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern.test(txt)); */


//devripon_.@gmail.com,

/* let txt = 'devripon.io@gmail.com';

let pattern = /^[a-z\._0-9]*@[a-z0-9-_]*[\.][a-z]{2,8}$/;

console.log(pattern.test(txt)); */



//email pattern example: devripon.io@gmail.com
/* let email = 'devripon.io@hfdgh.com';
let pattern = /^[a-z0-9._]*@[a-z]{1,15}[.][a-z]{1,9}$/;
console.log(pattern.test(email)); */


//username pattern example:
/* devripon123 = min 6 caracters and max 12 caracters */

/* let username = 'devripon123';
let pattern = /^[a-zA-Z0-9]{6,12}$/;
console.log(pattern.test(username)); */



//bangladeshi phone number pattern
/* example: +8801913509868/8801913509868/01913509868 */

/* let cell = '8801913509868';
let pattern = /^(01|8801|\+8801)[0-9]{9}$/;

console.log(pattern.test(cell)); */



//bangladeshi zip code pattern example: 1406


/* let zip = '1406';
let pattern = /^[0-9]{4,6}$/;

console.log(pattern.test(zip)); */


//basic password pattern example: dev34@ghj@456

/* let password = 'devgsf';
let pattern = /^[a-z0-9!@#$%^&*()]{6,50}$/;

console.log(pattern.test(password)); */