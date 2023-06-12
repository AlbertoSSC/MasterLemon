console.log("******************************** 205 - Fibonacci");
// Fibonacci
// Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci.
//    Esta sucesión tiene sus dos primeros términos prefijados:
// fib(0) = 0
// fib(1) = 1
// // Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:
// fib(2) = fib(1) + fib(0)
// // ...
// fib(n + 1) = fib(n) + fib(n - 1)
// TIP: Es el clásico problema donde el término siguiente depende del actual y el anterior.
// TIP: También se puede abordar con recursividad, pero buscamos
//    una solución iterativa para hacer uso de destructuring con múltiples asignaciones.
var fib = function (n) {
    var _a;
    if (n === 0)
        return 0;
    var prev = 0;
    var curr = 1;
    for (var index = 1; index <= n; index++) {
        _a = [curr, prev + curr], prev = _a[0], curr = _a[1];
    }
    return curr;
};
console.log(fib(9));
