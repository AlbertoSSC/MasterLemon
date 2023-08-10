console.log("******************************** 209 - Swap");

// ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?

let a209 = "A";
let b209 = "B";

[a209, b209] = [b209, a209];
// Implementation here, one line, one shot!

console.log(a209 === "B" && b209 === "A" ? "You did it!" : "Keep trying!");