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

const fib = n => {
    if (n === 0) return 0;
    
    let prev = 0;
    let curr = 1;
    
    for (let index = 1; index <= n; index++) {
        [prev, curr] = [curr, prev + curr];
    }
    return curr;
};
console.log(fib(9));