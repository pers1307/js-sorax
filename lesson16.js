var person = {
    name  : 'pers1307',
    greet : function (greeting) {

        return greeting + '! My name is ' + this.name;
    }
};

var greet = function (greeting) {

    return greeting + '! My name is ' + this.name;
};

console.log(person.greet('Hi'));
console.log(this);
console.log(person.greet.call(person, 'Bonjour'));
console.log(person.greet.apply(person, ['Bonjour']));

var person2 = {
    name  : 'test'
};

/**
 * Связывание объекта и метода
 * @type {()}
 */
var bound = greet.bind(person2); // function
console.log(bound);
console.log(bound('Hello there')); // Hello there! My name is test