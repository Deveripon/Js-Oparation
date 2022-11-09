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