console.log("********************************  111 - Reverse Text");
function reverseText(text) {
    var words = text.split(" ");
    var reverser = words.reverse();
    var reversedText = reverser.join(" ");
    return reversedText;
}
;
console.log(reverseText("Hola que tal"));
