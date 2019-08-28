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
