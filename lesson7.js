var temp;
var obj = {};
var a = [1, 2, 3, 4, 5, 6];

function greet(name) {

    return "Hello " + name;
}

console.log(temp);
console.log(obj.property);
console.log(a[7]);
console.log(greet('pers1307')); // Hello pers1307
console.log(greet()); // Hello undefined

console.log(null == undefined); // true
console.log(null === undefined); // false