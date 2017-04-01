var globalVariable = 'pers1307';

console.log(window);
console.log(window.globalVariable);

var w = window.open('http://google.com');
w.close();

/**
 * Все переменные хранятся в глабольном объекте window,
 * который находится на вершине иерархии
 *
 * Так же объект window хранит ссылку на самого себя
 */