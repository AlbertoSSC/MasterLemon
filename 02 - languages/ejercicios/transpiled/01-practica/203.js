var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("******************************** 203 - Concat");
// Apartado A
// Implementa una función concat, tal que, dados 2 arrays 
// como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.
// TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat().
var concat = function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); };
console.log(concat([1, 2, 3], [4, 5, 6]));
// Apartado B
// Repite el ejercicio anterior suponiendo cualesquiera
//    arrays de entrada (no te limites solamente a 2).
var concatMulti = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return [].concat.apply([], arr);
};
console.log(concatMulti([1, 2, 3], [4, 5, 6], [7, 8, 9]));
