var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("******************************** 302 - Curry Setter");
// En un formulario tenemos un objeto con los campos name, 
// surname y age que representan un usuario.
// Crea una función set que 
// reciba un objeto con los campos de usuario, el nombre de una propiedad 
// y su valor y actualice la propiedad del objeto con el valor pasado como argumento.
// El ejercicio debe cumplir la siguiente norma: la función debe ser pura,
//  es decir, debe crear un nuevo objeto sin modificar el existente.
var set = function (user, propName, propValue) {
    var _a;
    return __assign(__assign({}, user), (_a = {}, _a[propName] = propValue, _a));
};
var julia = { name: "Julia", surname: "Álvarez", age: 19 };
var updatedJulia = set(julia, "age", 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false
