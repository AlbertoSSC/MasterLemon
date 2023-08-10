console.log("********************************  108 - Includes");
function includes(array, value) {
    var result = false;
    array.forEach(function (element) {
        if (element === value)
            return result = true;
    });
    return result;
}
;
// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
console.log("_________________");
function includes02(array, value) {
    return array.includes(value);
}
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false
