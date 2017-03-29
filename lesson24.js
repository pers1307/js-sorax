var pattern = new RegExp("\w+", "gim");
var samePattern = /\w+/gim;

var pattern = /\w+/g;

var string = 'How we survive is what makes us who we are';

console.log(string.match(pattern));

console.log(string.search(pattern)); // игнорирует флаг g
console.log(string.split(pattern));

this.value.replace(
    /\{\{(\w*)\}\}/g, "$1" // обращение к группе
);

this.value.replace(
    /\{\{(\w*)\}\}/g, function (match, value) {

        return value; // вернуть группу
    }
);

/**
 * Посмотреть установку соответствующих флагов
 */
console.log(pattern.global);
console.log(pattern.ignoreCase);
console.log(pattern.multiline);

console.log(pattern.lastIndex); // хранение индекса последнего результата

/**
 * без global laыt index не обновляется
 */

console.log(pattern.test(string)); // метод возвращает true or false, удобно для быстрой проверки

/**
 * exec матчит каждый раз следующую строку
 */
while (match = pattern.exec(string)) {

    console.log(match[0] + "(Index: " + match.index + ")");
}