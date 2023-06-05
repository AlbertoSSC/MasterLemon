console.log("******************************** 101 - biggest word");

const sentece = "Hola que tal esternocleidomastoideo";

function theLongest(sentence) {
    let words = sentence.split(" ");
    console.log(words)

    let longestWord = "";
    
    for (const word of words) {

        if(word.length > longestWord.length) {
            longestWord = word;
        };
    };
    console.log("Palabra más larga: " + longestWord);
};

theLongest(sentece);