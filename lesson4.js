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

/**
 * 7:11
 */