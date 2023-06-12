console.log("******************************** 101 - biggest word");
var sentece = "Hola que tal esternocleidomastoideo";
function theLongest(sentence) {
    var words = sentence.split(" ");
    console.log(words);
    var longestWord = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
        ;
    }
    ;
    console.log("Palabra más larga: " + longestWord);
}
;
theLongest(sentece);
