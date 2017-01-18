function greet(name) {

    return "Hello " + name;
}

console.log(greet('pers1307').toUpperCase());

/**
 * Пример анонимной функции
 *
 * @param name
 * @returns {string}
 */
var anonimusGreet = function (name) {

    console.log(arguments[1]); // form arguments (Это типо использование переданных в функцию элементов)

    console.log(arguments.length); // выводит количество аргументов, чтобы можно было их перебрать

    return "Hello " + name;
};

console.log(anonimusGreet('sorax', 'form arguments'));

/**
 * Объявление функции с callback'ом
 * @param callback
 */
var func = function (callback) {

    var name = 'pers1307';

    callback(name);
};

/**
 * Вызов этой функции
 */
func(function (name) {

    console.log("Hello " + name);
});

var func2 = function () {

    return function () {

        console.log("Hi");
    }
};

/**
 * Вызов функции,
 * которая возвращается от функции
 */
func2()();

/**
 * Объявление функции,
 * её вызов и помещение результатов в переменную
 *
 * Анонимная самовызывающаяся функция
 */
var greeting = (function (name) {

    return "Hello " + name;
}('pers1307'));

console.log(greeting);