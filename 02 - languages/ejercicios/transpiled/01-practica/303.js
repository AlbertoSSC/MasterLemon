console.log("******************************** 303 - Morse");
/*
"·"  => La duración de 1 punto es la referencia temporal.
"-"" => Las rayas duran 3 puntos.

La separación entre cada punto o cada raya es también de 1 punto.
La separación entre letras es de 3 puntos.
La separación entre palabras es de 7 puntos.

1pto = 50ms
*/
var morseAlphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
};
var createMorseTransmitter = function (morseMap, message) {
    var morseMessage = "";
    var transmitSignal = function (duration, symbol) {
        console.log("On", symbol);
        pause(duration);
        console.log("Off", symbol);
        pause(1); // Espacio entre puntos/rayas
        console.log("____");
    };
    var pause = function (points) {
        var start = new Date().getTime();
        while (new Date().getTime() - start < points * 50) {
        }
    };
    for (var i = 0; i < message.length; i++) {
        var char = message[i].toLowerCase();
        if (char in morseMap) {
            var morseCode = morseMap[char];
            for (var j = 0; j < morseCode.length; j++) {
                var symbol = morseCode[j];
                if (symbol === ".") {
                    morseMessage += ".";
                    transmitSignal(1, " ·");
                }
                else if (symbol === "-") {
                    morseMessage += "-";
                    transmitSignal(3, " -");
                }
                ;
            }
            ;
            transmitSignal(3, " "); //Espacio entre caracteres
            morseMessage += " ";
        }
        else {
            transmitSignal(7, "   "); //Espacio entre palabras
            morseMessage += "   ";
        }
    }
    ;
    return console.log("Transmisión completada" + "\n"
        + "Mensaje inicial: " + message + "\n"
        + "Señal morse: " + morseMessage);
};
var message = "Hello, World!";
createMorseTransmitter(morseAlphabet, message);
