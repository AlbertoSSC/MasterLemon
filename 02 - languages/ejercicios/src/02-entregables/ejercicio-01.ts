console.log("************** DELIVERABLE 01 *********************");
//Array operations


const array1 = [7, 6, 5, 4];
console.log("Array inicial: " + array1);

//HEAD
const head1 = (arr) => {
    const [a] = arr
    console.log("1º: " + a);
};
head1(array1);

//TAIL
const tail1 = (arr) => {
    const [a, ...rest] = arr;
    console.log("Todos menos el 1º: " + rest)
}
tail1(array1);

//INIT
const init1 = (arr) => {
    const array2 = arr.slice(0, arr.length - 1);
    console.log("Todos menos el último: " + array2);
}
init1(array1);

//LAST
const last1 = (arr)=>{
    const array3 = arr.pop();
    console.log("Último: " + array3);
};
last1(array1);