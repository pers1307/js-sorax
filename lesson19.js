var Person, person, anotherPerson, Developer, developer;

Person = function (name) {

    this.name = name;
};

Person.prototype.greet = function () {

    console.log('Hello, ' + this.name);
};

Person.prototype.toString = function () {

    return this.name;
};

person = new Person('pers1307');
console.log(person.name);

console.log(person.prototype);
console.log(person.greet());

console.log(person instanceof Person);

Developer = function () {

};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

developer = new Developer();

/**
 * Методы по умолчанию
 */
console.log(developer.toString());

var func = function () {

    return 1;
};

console.log(func); // Вернет исходный код функции

console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call(function () {})); // [object Function]