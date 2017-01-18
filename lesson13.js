var func = function () {
    var i = 10;

    return function () {

        return i;
    }
};

var anotherFunc = function () {
    var i = 20;
    console.log(func()());
};

anotherFunc();

/**
 * Вот это пример замыкания!
 * Тут прикол в том, что это дело можно
 * использовать как объект
 */
var counter = (function () {

    var count = 0;

    return function (num) {

        count = num !== undefined ? num : count;

        return count++;
    }
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());  // 11
console.log(counter());  // 12

/**
 * Функция, как объект
 * @param num
 */
var counter2 = function (num) {

    counter2.count = num !== undefined ? num : counter2.count;

    return counter2.count++;
};

counter2.count = 0;

console.log(counter2());
console.log(counter2());
console.log(counter2());