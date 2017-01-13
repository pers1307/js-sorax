/**
 * Простые типы
 */

var myVariable = 20, myAnotherVariable = 30;

var myNumber = 569996,
    myString = 'Some string',
    myBool   = true,
    myNull   = null,
    myUndef  = undefined;

console.log(myNumber);
console.log(myString);
console.log(myBool);
console.log(myNull);
console.log(myUndef);

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull); // object (Ошибка в языке js)
console.log(typeof myUndef);

console.log('Sorax'.toUpperCase()); // У простых типов можно вызывать методы

console.log('');

/**
 * Объектные типы (Объекты)
 */

var obj = {name : 'sorax'}, // объект
    array = [1, 2, 3],
    regexp = /w+/g,
    func = function () {};

console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);

console.log('');

obj.name = 'star';
array[1] = 144664;

console.log(array);
console.log(obj);
console.log(myString.toUpperCase());

var a, b, c, d;
a = b = c = d = 5; // Присваивание происходит справа на лево