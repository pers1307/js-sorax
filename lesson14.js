var myError = new Error('My error msg');
console.log(myError.name);
console.log(myError.message);

//throw myError;

var calculate = function (n) {

    if (n > 10) {
        throw new Error('n should be less than 10');
    }

    return n;
};



try {

    calculate(20);
} catch (e) {

    console.log('Alarm: ' + e.message);
} finally {

}