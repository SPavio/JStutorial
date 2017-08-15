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

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins.

1. Create variable for the heights and ages of two friends and assign them some values.

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw.

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to make the decision. 
*/



/*
//There will be three friends; Chris, Scott, and Merelice.

//We have two variable that we must declare, height and age. We will do this as var height.. and var age.. 
var heightChris = 175; //for this game, the variables have to be set to clearly define them.
var heightScott = 182;
var ageChris = 39;
var ageScott = 41;


//Next, we set up a simple variable for score. We will reference each name in our score. the varialble will look as follows. var scoreName =
var scoreChris = heightChris + 5 * ageChris; // to calculate the score we have created a var of scoreName.
var scoreScott = heightScott + 5 * ageScott; //Take note of the calculation
//Calculation. Here we use an if/else if/ else statement to create our calculation. We must console.log a message to our console.
if (scoreChris > scoreScott) {
    console.log('Chris wins the game with ' + scoreChris + ' points!');
} else if (scoreScott > scoreChris) {
    console.log('Scott wins the game with ' + scoreScott + ' points!');
} else {
    console.log('There is a draw!');
}


var heightMerelice = 162;
var ageMerelice = 41;
var scoreMerelice = heightMerelice + 5 * ageMerelice;
//Here we do the calculation for the third party and it goes as follows. If person A is greater than person B && person A is greater than person C then console.log some winning message.
if (scoreChris > scoreScott && scoreChris > scoreMerelice) {
    console.log('Chris wins the game with ' + scoreChris + ' points!');

} else if (scoreScott > scoreChris && scoreScott > scoreMerelice) {
    console.log('Scott wins the game with ' + scoreScott + ' points!');

} else if (scoreMerelice > scoreChris && scoreMerelice > scoreScott) {
    console.log('Merelice wins the game with ' + scoreMerelice + ' points!');

} else {
    console.log('It\'s a draw.');
}

//Take note of how to do the calculation of the third party versus only that of two players.
*/

//Practice coding challenge

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins.

1. Create variable for the heights and ages of two friends and assign them some values.

2. Calculate their scores

3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw.

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to make the decision.
*/
/*
John's height = 161 centimeters
John's age = 56

Paul's height = 191 centimeters
Paul's age = 44

Matt's height = 183 centimeters
Matt's age = 32

var heightOfJohn = 140;
var heightOfPaul = 140;
var heightOfMatt = 140;

var ageOfJohn = 56;
var ageOfPaul = 56;
var ageOfMatt = 56;

var scoreOfJohn = heightOfJohn + 5 * ageOfJohn;
var scoreOfPaul = heightOfPaul + 5 * ageOfPaul;
var scoreOfMatt = heightOfMatt + 5 * ageOfMatt;

console.log(scoreOfJohn)
console.log(scoreOfPaul)
console.log(scoreOfMatt)

if (scoreOfJohn > scoreOfPaul && scoreOfJohn > scoreOfMatt) {
    console.log('John wins the game with ' + scoreOfJohn + ' points!');

} else if (scoreOfPaul > scoreOfJohn && scoreOfPaul > scoreOfMatt) {
    console.log('Paul wins the game with ' + scoreOfPaul + ' points');

} else if (scoreOfMatt > scoreOfJohn && scoreOfMatt > scoreOfPaul) {
    console.log('Matt wins the game with ' + scoreOfMatt + ' points');

} else {
    console.log('The game is a draw!')
}

*/





/*
///////Functions


function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageScott = calculateAge(1976);
var ageMerelice = calculateAge(1976);
var ageDave = calculateAge(1949);
var ageJoyce = calculateAge(1954);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    }   else {
        console.log(name + ' is already retired.');
    }

}

yearsUntilRetirement('Dave', 1949);
yearsUntilRetirement('Scott', 1976);
yearsUntilRetirement('Joyce', 1954);
yearsUntilRetirement('Merelice', 1976);




//////Statement and Expressions

function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

//expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    //do something
}




/////Lecture: Array

var names = ['John', 'Jane', 'Mark'];

var years = new Array(1990, 1969, 1948);

console.log(names[0]);//calling from an array starts from 0
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //adds to the end
john.unshift('Mr.'); //adds to the beginning
john.pop(); //removes one from the end
john.shift(); //removes one from the beginning

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}



///////Lecture: Objects

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false
};



console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

//data mutation

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

//new object

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

*/

/////////Lecture: Methods


///version one
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2017 - this.yearOfBirth;//"this" refers to the current object oj "john"
    }
};


//console.log(john.calculateAge(1990));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);





//version two
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: '1990',
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        //return 2017 - this.yearOfBirth;//"this" refers to the current object of "john"
        this.age = 2017 - this.yearOfBirth;
    }
};

john.calculateAge();

console.log(john);




/////////Lectures Loops

//starting a loop with a counter which is variable i
for (var i = 0; i < 100; i++) {
    console.log(i);
}
// i starts at 0. We declared that it is less than 10. i++ will count from 0 up to 9.

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++){
    console.log(names[i]);
}

////names.length will give the total length

for ( var i = names.length - 1; i >= 0; i--)
{
    console.log(names[i]);
}


var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++
}

for ( var i = 0; i <= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}



for (var i = 0; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

*/







