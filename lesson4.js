console.log(2 << 8);
console.log(0xfffcc); // 16 ичная система исчесления
console.log(0345); // 8 ичная система исчесления

console.log(12.45);
console.log(0.45);
console.log(1.34e4);
console.log(4.5E-30);

console.log();

var N = new Number(4000); // Обертка над данными

var n = 5000;
console.log(typeof n);
console.log(typeof N);

console.log(N.toFixed(2));
console.log(n.toFixed(3)); // Так тоже можно делать
console.log(2 .toFixed(2)); // И даже на прямую с числовыми литералами

console.log(n.toExponential()); // Перевод в эксподенциальную форму
console.log(n.toPrecision(8)); // Вывод с определенной точностью

var  i = 10;
console.log(++i); // 11
console.log(i);   // 11
console.log(i++); // 11
console.log(i);   // 12

i *= 2; // Краткий синтаксис

console.log(10 == '10'); // Сравнение с приведением типов
console.log(10 === 10);  // Сравнение без приведения типов (!) лучший вариант

console.log(Math.sqrt(25));
console.log(Math.pow(3, 5));

console.log(Math.PI); // Сожержание констант

// При выходе числа из возможного числового диапазона, js будет отдавать
// значение Infinity; -Infinity

console.log(typeof Infinity); // number

console.log(5 / 0); // Infinity

console.log(0 / 0); // NaN (Когда делаем то, что в математике делать нельзя)

console.log(Infinity / Infinity); // NaN

console.log(Math.sqrt(-10)); // NaN

console.log(NaN === NaN); // false

console.log(0.2 + 0.1); // 0.30000000000000004