console.log("******************************** 115 - Zip");
function zipObject(keysArr, valuesArr) {
    if (keysArr.length >= valuesArr.length) {
        var mixObj = {};
        for (var i = 0; i < keysArr.length; i++) {
            if (valuesArr[i] === undefined || valuesArr[i] === null) {
                break;
            }
            mixObj[keysArr[i]] = valuesArr[i];
        }
        ;
        return mixObj;
    }
}
;
// Ejemplo
console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"]));
// {spanish: "hola", english: "hi", french: "salut"}
