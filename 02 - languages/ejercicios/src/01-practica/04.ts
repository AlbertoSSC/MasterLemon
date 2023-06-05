console.log("******************************** 104 clone-merg");

const user04 = {
    name: "Pepe",
    age: 32,
}

function cloner(source) {
    return {
        ...source
    }
}

const user04B = cloner(user04);

console.log(user04B);

//***********************

var a04 = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b04 = { name: "Luisa", age: 31, married: true };

function merger(source, target) {
    return {
        ...target,
        ...source,
    }
};
const mergeObj = merger(a04, b04);
console.log(mergeObj);