console.log("********************************  112 - Subsets");

// function subsets(word) {
//     for (let i = 0; i < word.length; i++) {
//         let showEndsChar = word.slice(i);
//         console.log(showEndsChar);
//     };
// }

// subsets("message");


function subsets(word) {
    Array.from(word).map((_, i, arr)=>{
        let subset = arr.slice(i).join('');
        console.log(subset);
    })
    // Array.from(word).reduce((subset, _, i)=>{
    //     console.log(word.slice(i) + '\n');
    // }, '')
}

subsets("message");