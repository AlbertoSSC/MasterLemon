console.log("************** DELIVERABLE 02 *********************");
//Concat

const a = [1, 2, 3];
const b = ["a", "b", "c"];
const c = ["X", "8", "Y"];

const concatArr = (arr1, arr2) => {
    const arrMix = [...arr1, ...arr2];
    console.log("Concat arrays: " + arrMix);
}
concatArr(a, b);

//Optional
const multiConcat = (...arg) => {
    const multiArr = [...arg];
    console.log("Optional, multi: " + multiArr);
}
multiConcat(a, b, c);