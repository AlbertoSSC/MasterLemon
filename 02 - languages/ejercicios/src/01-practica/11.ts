console.log("********************************  111 - Reverse Text");

function reverseText (text) {
    const words = text.split(" ");
    const reverser = words.reverse();
    const reversedText = reverser.join(" ");
    return reversedText;
};

console.log (reverseText("Hola que tal"));