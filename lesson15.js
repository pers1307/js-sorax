var person = {
    name   : 'pers1307',
    age    : 24,
    gender : 'male',
    sayHi  : function () {

        return 'Hi!';
    }
};

person.age    = 23;
person.userId = 235; // динамическое добавление свойства

console.log(person.name);
console.log(person['age']);
console.log(person.userId);

console.log(person);

console.log(person.sayHi());

var object = Object.create({x : 10, y : 20});
object.x = 20;
console.log(object);

delete object.x;
console.log(object);

console.log('x' in object); // проверка существования свойства