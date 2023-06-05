console.log("******************************** 203 - Concat");

// Apartado A
// Implementa una función concat, tal que, dados 2 arrays 
// como entrada, devuelva la concatenación de ambos. Utiliza rest / spread.

// TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat().
const concat = (a, b) => [...a, ...b];
console.log(concat([1, 2, 3], [4, 5, 6]));


// Apartado B
// Repite el ejercicio anterior suponiendo cualesquiera
//    arrays de entrada (no te limites solamente a 2).
const concatMulti = (...arr) => [].concat(...arr);
console.log(concatMulti([1, 2, 3], [4, 5, 6], [7, 8, 9]));