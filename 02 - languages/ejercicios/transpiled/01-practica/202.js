console.log("******************************** 202 - Array Operations");
// Apartado A
// Implementa una función head (inmutable), tal que, dado un array
//    como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
var head = function (arr) {
    var first = arr[0];
    return first;
};
console.log(head([1, 2, 3, 4]));
// Apartado B
// Implementa una función tail (inmutable), tal que, dado un array
//    como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
var tail = function (arr) {
    var first = arr[0], rest = arr.slice(1);
    return rest;
};
console.log(tail([1, 2, 3, 4]));
// Apartado C
// Implementa una función init (inmutable), tal que, dado un array
//     como entrada devuelva todos los elementos menos el último.
// Utiliza los métodos que ofrece Array.prototype.
var init = function (arr) {
    arr.pop();
    return arr;
};
console.log(init([1, 2, 3, 4]));
// Apartado D
// Implementa una función last (inmutable), tal que, dado un array
//    como entrada devuelva el último elemento.
var last = function (arr) {
    return arr.pop();
};
console.log(last([1, 2, 3, 4]));
