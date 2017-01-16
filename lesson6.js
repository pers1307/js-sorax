// true
console.log(Boolean(5));

// false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

var s = 'Text';

if (s) {
    console.log('True'); // Будет выводится
}

console.log(true && false);
console.log(true || false);
console.log(!false);

var a = 0;
    isTrue = true;

isTrue && (a = 5);

console.log(a);

// var someString = "Non-empty string";
var someString = "";
var newString = someString || "Default String";

console.log(newString);