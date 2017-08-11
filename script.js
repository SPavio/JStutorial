// Lecture: Variables
/*
var name = 'Scott';
console.log(name);

var lastName = 'Pavio';
console.log(lastName);

var age = 41;
console.log(age);

var fullAge = true;
console.log(fullAge);


// Lecture: Variables 2

var name = 'Scott';
var age = 41;
//console.log(name + age);

var job, isMarried;

//console.log(job);
job = 'technician';
isMarried = true;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'forty-one';
job = 'programmer';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is your last name?');
console.log(lastName);


// Lecture Operators
var now = 2017;
var age = 41;
var birthYear = now - age;
var birthYear = now - age * 2;


console.log(birthYear);


// Lecture if/else statements


var name = 'John';
var age = '26';
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon.');
}

isMarried = false;

if(isMarried) {
    consol.log('Yes!');
} else {
    console.log('No!');
}



//Lecture Boolean logic and switch


var age = 25;

if (age <= 19) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('John is a young Man')
} else {
    console.log('John is a man')
}

var age = 41;

if (age <= 19) {
    console.log('Scott is a teenager');
} else if (age > 30 && age < 60) {
    console.log('Scott is a man')
} else {
    console.log('Scott is a man')
}


var job = 'technician';

job = prompt('What does Scott do?');

switch (job) {
    case 'technician':
        console.log('Scott services refrigeration equipment.');
        break;
    case 'teacher':
        console.log('Scott teaches new technicians.');
        break;
    case 'superhero':
        console.log('Scottcfights crime with refrigeraion powers');
        break;
    default:
        console.log('Scott does something else');
           }


*/
//Coding Challenge 1


var heightChris = 175; //for this game, the variables have to be set to clearly define them.
var heightScott = 182;
var ageChris = 39;
var ageScott = 41;

var scoreChris = heightChris + 5 * ageChris; // to calculate the score we have created a var of scoreName.
var scoreScott = heightScott + 5 * ageScott; //Take note of the calculation
/*
if (scoreChris > scoreScott) {
    console.log('Chris wins the game with ' + scoreChris + ' points!');
} else if (scoreScott > scoreChris) {
    console.log('Scott wins the game with ' + scoreScott + ' points!');
} else {
    console.log('There is a draw!');
}

*/

var heightMerelice = 162;
var ageMerelice = 41;
var scoreMerelice = heightMerelice + 5 * ageMerelice;

if (scoreChris > scoreScott && scoreChris > scoreMerelice) {
    console.loge('Chris wins the game with ' + scoreChris + ' points!');

} else if (scoreScott > scoreChris && scoreScott > scoreMerelice) {
    console.log('Scott wins the game with ' + scoreScott + ' points!');

} else if (scoreMerelice > scoreChris && scoreMerelice > scoreScott) {
    console.log('Merelice wins the game with ' + scoreMerelice + ' points!');

} else {
    console.log('It\'s a draw.');
}

//Take note of how to do the calculation of the third party versus only that of two players.
