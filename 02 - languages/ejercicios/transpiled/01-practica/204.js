console.log("******************************** 204 - Console");
// Apartado A
// Intenta razonar cual será el resultado de la consola al ejecutar este código:
var a204 = 1;
var b204 = 2;
{
    var b204_1 = 3;
    try {
        console.log(a204, b204_1);
    }
    catch (error) { }
    console.log(a204, b204_1);
}
console.log(a204, b204);
(function () {
    var a204 = 5;
    console.log(a204);
    var b204 = 6;
    console.log(a204, b204);
})();
console.log(a204, b204);
