var person = {
    name : 'pers1307',
    _age : 20,
    get age(){

        return this._age;
    },
    set age(value){

        /**
         * Проверка вхлдных данных
         */

        this._age = value;
    }
};

console.log(person.age);

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

Object.defineProperty(person, 'gender', {
    value : 'male',
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(person.gender);

for (property in person) {

    console.log(property);
}

var o = {};

Object.defineProperties(o, {
    x : {
        value : 10,
        writable: false
    },
    y : {
        value : 20,
        writable: false
    },
    r : {
        get: function () {

            return this.x + this.y;
        }
    }
});

console.log(o.r);

/**
 * Расширяемость объекта
 */
var obj = {};
Object.preventExtensions(obj); // Блокировка расширяемости объекта
console.log(Object.isExtensible(obj)); // Проверка на расширяемость

Object.seal(obj);
Object.freeze(obj);