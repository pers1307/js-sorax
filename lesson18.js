/**
 * Переменная хранит ссылку на объект
 * @type {{x: number}}
 */
var object = {x : 10};

var a = {x:10}, b = {x:20};
a = b;
b.x = 15;
console.log(a.x); // 15
a.x = 45;
console.log(b.x); // 45

var ObjectProto = {
    name: 'pers1307'
};

var object = Object.create(ObjectProto);
console.log(object.name);

var Person = {
    constructor: function (name, age, gender) {
        this.name   = name;
        this.age    = age;
        this.gender = gender;

        return this;
    },
    greet : function () {

        console.log('Hi, my name is ' + this.name);
    }
};

var person, anotherPerson, thirdPerson;

person        = Object.create(Person).constructor('John', 35, 'male');
anotherPerson = Object.create(Person).constructor('pers1307', 24, 'male');
thirdPerson   = Object.create(Person).constructor('Bruce', 15, 'male');

console.log(person.greet());
console.log(anotherPerson.greet());
console.log(thirdPerson.greet());

console.log(Person.isPrototypeOf(person));

var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function (name, age, gender, skills) {
    Person.constructor.apply(this, arguments);
    this.skills = skills || [];

    return this;
};
WebDeveloper.develop = function () {

    console.log('Working...');
};

var developer = Object.create(WebDeveloper).constructor('Jack', 21, 'male', [
    'html',
    'css',
    'php',
    'js'
]);

console.log(developer.skills);
console.log(developer.develop());
console.log(developer.greet());