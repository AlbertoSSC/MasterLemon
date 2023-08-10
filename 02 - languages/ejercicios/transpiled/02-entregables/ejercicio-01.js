console.log("************** DELIVERABLE 01 *********************");
//Array operations
var array1 = [7, 6, 5, 4];
console.log("Array inicial: " + array1);
//HEAD
var head1 = function (arr) {
    var a = arr[0];
    console.log("1º: " + a);
};
head1(array1);
//TAIL
var tail1 = function (arr) {
    var a = arr[0], rest = arr.slice(1);
    console.log("Todos menos el 1º: " + rest);
};
tail1(array1);
//INIT
var init1 = function (arr) {
    var array2 = arr.slice(0, arr.length - 1);
    console.log("Todos menos el último: " + array2);
};
init1(array1);
//LAST
var last1 = function (arr) {
    var array3 = arr.pop();
    console.log("Último: " + array3);
};
last1(array1);
