// #1 Function Constructor

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