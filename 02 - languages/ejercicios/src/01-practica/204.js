console.log("******************************** 204 - Console");

// Apartado A
// Intenta razonar cual será el resultado de la consola al ejecutar este código:

var a204 = 1;
let b204 = 2;

{
    let b204 = 3;
    try {
        console.log(a204, b204);
    } catch (error) { }
    console.log(a204, b204);
}

console.log(a204, b204);

(() => {
    var a204 = 5;
    console.log(a204);
    let b204 = 6;
    console.log(a204, b204);
})();

console.log(a204, b204);