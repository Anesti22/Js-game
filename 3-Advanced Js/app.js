// #1 Function Constructor

/*

var jonh = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Programmer'
}


var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Programmer');
var jane = new Person('Jane', 1991, 'Lawer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// #1.1 Function Constructor Njeriu
var njeriu = {
    emri: 'Nesti',
    mbiemri: 'Gikoka',
    vitiILindjes: 1988,
    profesioni: 'Front End Developer',
    adresa: {
        rruga: 'Selvia',
        pallati: 123
    }
}

var Njeriu = function(emri, mbiemri, vitiILindjes) {
    this.emri = emri;
    this.mbiemri = mbiemri;
    this.vitiILindjes = vitiILindjes;
}


Njeriu.prototype.llogaritMoshen = function() {
    console.log(2016 - this.vitiILindjes);
}


var nesti = new Njeriu('Nesti', 'Gjikoka', 1988, 31);
var maria = new Njeriu('Maria', 'Soriti', 1988, 25);
var toto = new Njeriu('Toto', 'Gjikoka', 1988, 29);

nesti.llogaritMoshen();

*/

/*

    // Object.create
    var personProto = {
        calculateAge: function (){
            console.log(2016 - this.yearOfBirth);
        }
    }

    var john = Object.create(personProto);

    john.name = 'John';
    john.yearOfBirth = 1990;
    john.job = 'Programmer';

    var jane = Object.create(personProto,
        {
            name: {value: 'Jane'},
            yearOfBirth: {value: 1988},
            job:{value: 'Designer'}
        }
    );

*/


/*

// Primitives vs Oblects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 31
}

var obj2 = obj1;
// console.log(obj2);

obj1.age = 32;

console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 31;
var obj = {
    name: 'Anesti',
    city: 'Tirane'
}

function change(a, b) {
     a = 30;
     b.city = 'Malmö'
}

change(age, obj);

console.log(change);
console.log(age);
console.log(obj.city);

*/

//
// PASSING FUNCTION AS AN ARGUMENT
//
/*

var years = [1990, 1998, 1982, 1990, 1996];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}


function calcAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return  el >= 18;
}


function maxHeartRate(el) {

    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates); */



//
// FUNCTION RETURNING FUNCTIONS
//
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain what UX is?');
        }
    }else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name) {
            console.log('Hello ' + name + ' What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Down');
designerQuestion('Ani');
designerQuestion('bop');

interviewQuestion('teacher')('bop');
*/

//
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE
//
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/


//
// CLOUSERS
//

/*
function retirement(retirementsAge) {
    var a = ' Years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementsAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1988);

var retirementGermany = retirement(65);
retirementGermany(1988);

var retirementIceland  = retirement(67);
retirementIceland(1988);



------------------------------------------


function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain what UX is?');
        }
    }else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name) {
            console.log('Hello ' + name + ' What do you do?');
        }
    }
}

*/

/*

function interviewQuestion(proffession){
    var a = ', can you explain what UX is?';

    return function(name) {
        console.log(name + a);
        console.log('I am a '+ proffession + '!');
    }
}


var interviewQuestionRes = interviewQuestion('designer');

interviewQuestionRes('Nesti');


var interviewQuestionResTwo = interviewQuestion('Lawer');

interviewQuestionResTwo('Nesti');

*/

//
// Bind, Call, Apply
//

var john = {
    name: 'john',
    age: 23,
    job: 'Programmer',
    presentation: function (style, timeOfTheDay) {
        if(style === 'formal') {
            console.log("Good " + timeOfTheDay + " ladies and gentelman. I\'m a " + this.job + ' and I\'m ' + this.age + ' years old!')
        }else if(style === 'friendly') {
            console.log('Hey waht\'s up I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfTheDay + '.' )
        }
    }
}

var emily = {
    name: 'Emily',
    age: 28,
    job: 'Designer'
}

john.presentation('formal', 'morning')

john.presentation.call(emily, 'frendly', 'afternoon')

//john.presentation.apply(emily, ['frendly', 'afternoon'])


var johnFriendly =
john.presentation.bind(john, 'friendly');

var emilyFriendly =

john.presentation.bind(emily, 'formal');

johnFriendly('morning');
emilyFriendly('night');
