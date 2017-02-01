var array = [1, 3, 4];

console.log(array[2]);

var months = ['Jan', 'Feb', 'Mar', 'Apr'];

console.log(months[0]);
console.log(months[4]); // undefined

console.log(months.length);

months[months.length] = 'Jun';
console.log(months);

months[20] = 'Something';
console.log(months);

/**
 * Длина массива считается как индекс последнего элемента + 1
 */
console.log(months.length); // 21

var myArray = new Array(16, 56);
console.log(myArray); // [16, 56]

/**
 * Один параметр, становится длинной массива
 */
var myArray2 = new Array(16);
console.log(myArray2); // []
console.log(myArray2.length); // 16

var array3 = [,,,3];
console.log(array3); // [3: 3]
array3['wow'] = 'eeee';
console.log(array3);
delete months[3];
console.log(array3);

/**
 * 24: 5:41
 */