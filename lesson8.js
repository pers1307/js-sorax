console.log(5 + '5'); // 55 (приводится к строке)
console.log(typeof (5 + '5')); // string

console.log('5' * '4'); // 20 (* старается преобразовать любые значения в числа)
console.log(typeof ('5' * '4')); // number

console.log('5' * 'hi'); // NaN
console.log(typeof ('5' * 'hi')); // number

console.log('5' == 5); // true
console.log('0' == false); // true

console.log(Boolean('0')); // true (!!!)

console.log(Number('555'));
console.log(String(555));

console.log(typeof (345 + "")); // Быстрое преобразование в строку
console.log((typeof (+"454"))); // Быстрое преобразование в число

console.log(typeof 454 .toString());

console.log(parseInt('45 px 425', 10)); // 45 Любые посторонние символы будут игнорироваться
console.log(parseFloat('45.78')); // 45.78

console.log(+""); // 0

console.log(!!0);         // false
console.log(!!NaN);       // false
console.log(!!null);      // false
console.log(!!undefined); // false