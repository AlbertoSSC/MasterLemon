console.log("******************************** 102 calification");

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

const grades = Object.values(eso2o);

const totalGrade = grades.reduce((acc, curr) => acc += curr, 0)

const mean = totalGrade / grades.length;
console.log(mean);

let textualMean = "";
if (mean === 10) {
    textualMean = "Matrícula de honor";
} else if (mean >= 9) {
    textualMean = "Sobresaliente";
} else if (mean >= 7) {
    textualMean = "Notable";
} else if (mean >= 6) {
    textualMean = "Bien";
} else if (mean >= 5) {
    textualMean = "Suficiente";
} else if (mean >= 4) {
    textualMean = "Insuficiente";
} else {
    textualMean = "Muy deficiente";
};

console.log("Nota media de la clase: " + textualMean);